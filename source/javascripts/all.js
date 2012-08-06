//= require jquery-1.7.2.min.js
//= require bootstrap.min.js
//= require_tree .

$(function() {
    $('.link-area').click(function(evt) {
        window.location = $(evt.target).find('a.more').attr('href');
    }).css('cursor', 'pointer')
})