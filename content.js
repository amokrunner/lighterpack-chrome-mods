$(document).ready(function () {
    
    // LIBRARY ACTIVE FILTER:
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
      </style>
    `);
    
    // IMAGE HEIGHT LIMIT:
    $('head').append(`
      <style>
        .lpImageCell{ text-align: center !important; }
        .lpItemImage { max-height: 4em !important; }
      </style>
    `);
    
});