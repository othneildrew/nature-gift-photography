$(function() {

  function setImg(id, src, alt) {
    // Add src and alt attributes to lightbox
    $('#lightbox-img').attr({
      'data-id': id,
      'src': src,
      'alt': alt
    });

    // Add caption from image alt to lightbox
    $('#lightbox-img').next('figcaption').text(alt);
  }

  // Hide lightbox by changing css visibility
  $('#lightbox-img, #hide').click(function() {
    $('#image-lightbox').css('visibility', 'hidden');
  });

  // Show lightbox
  $('.thumbnail a').click(function() {
    // Get src and alt attributes from image
    let imgID = $(this).attr('href');
    let requestedImg = $(this).children().attr('src');
    let imgCaption = $(this).children().attr('alt');

    setImg(imgID, requestedImg, imgCaption);

    // Animate css visibility for fade in effect
    $('#image-lightbox').css({
        opacity: 0,
        visibility: 'visible'
      }).animate({
      opacity: 1.0
    }, 2000);
  });
});
