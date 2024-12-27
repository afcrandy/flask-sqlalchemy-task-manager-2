$(document).ready(function(){
    // sidenav initialisation
    $('.sidenav').sidenav();
});

document.addEventListener('DOMContentLoaded', function() {
    // datepicker initialisation
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
    });

    // select initialisation
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
  });
