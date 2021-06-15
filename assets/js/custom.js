/*Custom JavaScript*/

$(function() {
  // google form submit iframe behavior
  var iframeLoadCount = 0;
  $('#apply').on('load', function () {
    console.log("Sure load event is called!");
    iframeLoadCount += 1;
    if (iframeLoadCount > 1) {
      $('#apply').height("380px");
    }
  });
});
