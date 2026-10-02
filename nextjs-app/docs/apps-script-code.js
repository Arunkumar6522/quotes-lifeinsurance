/**
 * Google Apps Script - Testimonials & Job Listings API
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet (should have "testimonial" and "jobs" sheets)
 * 2. Go to Extensions → Apps Script
 * 3. Delete any existing code and paste this entire file
 * 4. Click Save (Ctrl+S)
 * 5. Click Deploy → Manage deployments → Edit (pencil icon)
 * 6. Select "New version" and click Deploy
 * 
 * =====================================================
 * SHEET STRUCTURES:
 * =====================================================
 * 
 * Sheet: "testimonial" (for client testimonials)
 * Headers: name | location | serviceType | contentType | testimonial | videoUrl | rating | date | avatarUrl | status
 * 
 * Sheet: "jobs" (for job listings)
 * Headers: jobTitle | qualifications | yearsExperience | location | jobType | description | formLink | status
 * 
 * Status options for jobs: active | inactive | closed
 * 
 * =====================================================
 */

// ============================================
// POST REQUEST HANDLER (Testimonial Submission)
// ============================================
function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const action = body.action || 'submitTestimonial';

    if (action === 'submitTestimonial') {
      return submitTestimonial(body);
    }

    return jsonResponse({ success: false, error: 'Unknown action' });
  } catch (error) {
    return jsonResponse({ success: false, error: error.toString() });
  }
}

// ============================================
// SUBMIT TESTIMONIAL (called from doPost)
// ============================================
function submitTestimonial(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('testimonial');

  if (!sheet) {
    return jsonResponse({ success: false, error: 'Sheet "testimonial" not found' });
  }

  // Validate required fields
  if (!data.name || !data.testimonial) {
    return jsonResponse({ success: false, error: 'Name and testimonial are required' });
  }

  // Sheet columns: name | location | serviceType | contentType | testimonial | videoUrl | rating | date | avatarUrl | status
  const row = [
    data.name.toString().trim(),
    (data.location || '').toString().trim(),
    (data.serviceType || '').toString().trim(),
    'text',                        // contentType — always text for form submissions
    data.testimonial.toString().trim(),
    '',                            // videoUrl — empty for form submissions
    parseInt(data.rating) || 5,
    new Date(),                    // date — auto timestamp
    '',                            // avatarUrl — empty
    'pending'                      // status — must be manually set to "active" in the sheet to appear on site
  ];

  sheet.appendRow(row);

  return jsonResponse({
    success: true,
    message: 'Thank you! Your testimonial has been submitted for review.'
  });
}

// ============================================
// GET REQUEST HANDLER
// ============================================
function doGet(e) {
  try {
    const action = e.parameter.action || 'getTestimonials';
    
    if (action === 'getJobs') {
      return getJobListings();
    }
    
    // Default: get testimonials
    return getTestimonials();
    
  } catch (error) {
    return jsonResponse({ success: false, error: error.toString(), data: [] });
  }
}

// ============================================
// GET TESTIMONIALS
// ============================================
function getTestimonials() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('testimonial');
  
  if (!sheet) {
    return jsonResponse({ success: false, error: 'Sheet "testimonial" not found', data: [] });
  }
  
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const rows = data.slice(1);
  
  const testimonials = rows
    .map((row, index) => {
      const obj = {};
      headers.forEach((header, i) => {
        obj[header.toString().trim()] = row[i];
      });
      obj.id = index + 1;
      return obj;
    })
    .filter(item => 
      item.status && 
      item.status.toString().toLowerCase() === 'active'
    )
    .map(item => ({
      id: item.id,
      name: item.name || '',
      location: item.location || '',
      serviceType: item.serviceType || '',
      contentType: item.contentType || 'text',
      testimonial: item.testimonial || '',
      videoUrl: item.videoUrl || '',
      rating: parseInt(item.rating) || 5,
      date: item.date ? formatDate(item.date) : '',
      avatarUrl: item.avatarUrl || ''
    }));
  
  return jsonResponse({
    success: true,
    count: testimonials.length,
    data: testimonials,
    lastUpdated: new Date().toISOString()
  });
}

// ============================================
// GET JOB LISTINGS
// ============================================
function getJobListings() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('jobs');
  
  // Create the sheet if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet('jobs');
    const headers = [
      'jobTitle',
      'qualifications', 
      'yearsExperience',
      'location',
      'jobType',
      'description',
      'formLink',
      'status'
    ];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
    
    // Add a sample job
    const sampleJob = [
      'Insurance Sales Representative',
      'LLQP License preferred, excellent communication skills, self-motivated',
      '1-3 years',
      'Montreal, QC',
      'Full-time',
      'Join our team to help families protect their future with life insurance solutions.',
      '', // Add your Google Form link here
      'active'
    ];
    sheet.getRange(2, 1, 1, sampleJob.length).setValues([sampleJob]);
    
    return jsonResponse({
      success: true,
      count: 1,
      data: [{
        id: 1,
        jobTitle: sampleJob[0],
        qualifications: sampleJob[1],
        yearsExperience: sampleJob[2],
        location: sampleJob[3],
        jobType: sampleJob[4],
        description: sampleJob[5],
        formLink: sampleJob[6],
        status: sampleJob[7]
      }],
      message: 'Jobs sheet created with sample data. Please update with your job listings.'
    });
  }
  
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const rows = data.slice(1);
  
  const jobs = rows
    .map((row, index) => {
      const obj = {};
      headers.forEach((header, i) => {
        obj[header.toString().trim()] = row[i];
      });
      obj.id = index + 1;
      return obj;
    })
    .filter(item => item.jobTitle && item.jobTitle.toString().trim() !== '') // Filter empty rows
    .map(item => ({
      id: item.id,
      jobTitle: item.jobTitle || '',
      qualifications: item.qualifications || '',
      yearsExperience: item.yearsExperience || '',
      location: item.location || '',
      jobType: item.jobType || 'Full-time',
      description: item.description || '',
      formLink: item.formLink || '',
      status: (item.status || 'inactive').toString().toLowerCase()
    }));
  
  return jsonResponse({
    success: true,
    count: jobs.length,
    data: jobs,
    lastUpdated: new Date().toISOString()
  });
}

// ============================================
// HELPER FUNCTIONS
// ============================================
function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function formatDate(date) {
  if (!date) return '';
  if (date instanceof Date) {
    return Utilities.formatDate(date, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  }
  return date.toString();
}

// ============================================
// TEST FUNCTIONS
// ============================================
function testGetTestimonials() {
  const result = getTestimonials();
  const json = JSON.parse(result.getContent());
  Logger.log('Found ' + json.count + ' active testimonials');
  Logger.log(JSON.stringify(json, null, 2));
}

function testGetJobs() {
  const result = getJobListings();
  const json = JSON.parse(result.getContent());
  Logger.log('Found ' + json.count + ' jobs');
  Logger.log(JSON.stringify(json, null, 2));
}

function testSubmitTestimonial() {
  const fakeData = {
    action: 'submitTestimonial',
    name: 'Test User',
    location: 'Montreal, QC',
    serviceType: 'Term Life Insurance',
    testimonial: 'This is a test testimonial submission.',
    rating: 5
  };
  const result = submitTestimonial(fakeData);
  const json = JSON.parse(result.getContent());
  Logger.log(JSON.stringify(json, null, 2));
}
