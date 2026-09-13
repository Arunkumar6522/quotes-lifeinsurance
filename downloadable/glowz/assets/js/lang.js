/**
 * lang.js — English / French switcher
 * Quotes Life Insurance
 *
 * How it works:
 *  - Every translatable element has data-en="..." and data-fr="..." attributes
 *  - On switch, all [data-en] elements get their innerHTML swapped
 *  - Choice is saved to localStorage so it persists across pages
 *  - On page load the saved language is applied instantly (no flash)
 */

(function () {
    'use strict';

    var STORAGE_KEY = 'qli_lang';
    var DEFAULT     = 'en';

    /* ── Apply language to the whole page ─────────────────────────────────── */
    function applyLang(lang) {
        document.querySelectorAll('[data-en]').forEach(function (el) {
            var text = el.getAttribute('data-' + lang);
            if (text) el.innerHTML = text;
        });

        /* Update placeholder attributes */
        document.querySelectorAll('[data-placeholder-en]').forEach(function (el) {
            var ph = el.getAttribute('data-placeholder-' + lang);
            if (ph) el.setAttribute('placeholder', ph);
        });

        /* Update the switcher button label + flag */
        var btn = document.getElementById('qli-lang-btn');
        if (btn) {
            var flagSrc = lang === 'fr'
                ? 'assets/images/language/2.svg'
                : 'assets/images/language/1.svg';
            var label = lang === 'fr' ? 'FR' : 'EN';
            btn.innerHTML =
                '<img src="' + flagSrc + '" alt="' + label + '" class="lang-flag">'
                + '<span>' + label + '</span>'
                + '<i class="ti-angle-down"></i>';
        }

        /* Mark <html> with lang attribute for accessibility */
        document.documentElement.setAttribute('lang', lang === 'fr' ? 'fr' : 'en');
    }

    /* ── Toggle ────────────────────────────────────────────────────────────── */
    function toggleLang() {
        var current = localStorage.getItem(STORAGE_KEY) || DEFAULT;
        var next    = current === 'en' ? 'fr' : 'en';
        localStorage.setItem(STORAGE_KEY, next);
        applyLang(next);

        /* Show/hide the dropdown */
        var dd = document.getElementById('qli-lang-dropdown');
        if (dd) dd.classList.remove('open');
    }

    /* ── Dropdown open/close ───────────────────────────────────────────────── */
    function initDropdown() {
        var btn = document.getElementById('qli-lang-btn');
        var dd  = document.getElementById('qli-lang-dropdown');
        if (!btn || !dd) return;

        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            dd.classList.toggle('open');
        });

        /* Option clicks */
        dd.querySelectorAll('[data-lang]').forEach(function (opt) {
            opt.addEventListener('click', function () {
                var lang = opt.getAttribute('data-lang');
                localStorage.setItem(STORAGE_KEY, lang);
                applyLang(lang);
                dd.classList.remove('open');
            });
        });

        /* Close on outside click */
        document.addEventListener('click', function () {
            dd.classList.remove('open');
        });
    }

    /* ── Boot ──────────────────────────────────────────────────────────────── */
    var savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT;

    /* Apply immediately (before DOMContentLoaded to avoid flash) */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            applyLang(savedLang);
            initDropdown();
        });
    } else {
        applyLang(savedLang);
        initDropdown();
    }

}());
