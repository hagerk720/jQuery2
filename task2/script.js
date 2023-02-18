$(function () {
  $(".rabbit").on("mouseenter mouseleave", function () {
    $(".rabbit").effect("shake", "slow");
  });
  $(".rabbit").draggable({
    start: function () {},
    drag: function () {},
    stop: function () {},
  });
  $(".black-hole").droppable({
    drop: function () {
      $(".rabbit").css("display", "none");
    },
  });
});
