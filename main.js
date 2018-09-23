$(function() {
  // Hide lightbox by changing css visibility
  $('#lightbox-img').click(function() {
    $('#image-lightbox').css('visibility', 'hidden');
  });

  // Show lightbox
  $('.thumbnail a').click(function() {
    // Get src and alt attributes from image
    let requestedImg = $(this).children().attr('src');
    let imgCaption = $(this).children().attr('alt');

    // Add src and alt attributes to lightbox
    $('#lightbox-img').attr({
      'src': requestedImg,
      'alt': imgCaption
    });

    // Add caption from image alt to lightbox
    $('#lightbox-img').next('figcaption').text(imgCaption);

    // Animate css visibility for fade in effect
    $('#image-lightbox').css({
        opacity: 0,
        visibility: 'visible'
      }).animate({
      opacity: 1.0
    }, 2000);
  });






});
