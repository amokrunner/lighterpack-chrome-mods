// ==UserScript==
// @name         Active Filter, Image Height Fix
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Upgrades for lighterpack!
// @author       amokrunner
// @match        https://lighterpack.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('#librarySearch').before('<div><input type="checkbox" id="librarySearchFilter" name="librarySearchFilter" /><label for="librarySearchFilter">Include Active Items</label></div>');
    $('#library').addClass('lpHideActive');
    $("#librarySearchFilter").change(function(){
        if($(this).prop('checked')){
             $("#library").removeClass('lpHideActive');
        } else {
             $("#library").addClass('lpHideActive');
        }
    });
    $('head').append(`
      <style>
        .lpHideActive .lpLibraryItem:not(.lpItemNotInList){ display:none !important;}
        .lpImageCell{ text-align: center !important; }
        .lpItemImage { max-height: 4em !important; }
      </style>
    `);
})();