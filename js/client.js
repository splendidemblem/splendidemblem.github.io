$.fn.stretchText = function() {
  var el              = $(this),
      containerWidth  = el.width(),
      txt             = el.html(),
      projectedLine   = $('<span class="stretched">'+txt+'</span>'),
      totalCharsInTxt = el.text().length,
      spacing         = containerWidth / totalCharsInTxt,
      txtWidth;

      el.html(projectedLine);
      txtWidth = projectedLine.width();

      if (txtWidth < containerWidth) {
        var charWidth = txtWidth / totalCharsInTxt,
            letterSpacing = spacing - charWidth + (spacing - charWidth) / totalCharsInTxt;

        console.log(letterSpacing);
        projectedLine.css({'letter-spacing': letterSpacing});
      } else {
        projectedLine.contents().unwrap();
        el.addClass('justify');
      }
};


$(document).ready(function() {
  $('.stretch-me').each(function() {
    $(this).stretchText();
  });
});

