$(".view-project").hover(
  function () {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // nothing
    } else {
      $(".preview-image").css("box-shadow", "black 10px 13px 40px 0"),
        $(".preview-image").css("transform", "translateX(-15px)");
    }
  },
  function () {
    $(".preview-image").css("box-shadow", "black 0 0 0 0"),
      $(".preview-image").css("transform", "translateX(0)");
  }
),
  $(".view-project-left").hover(
    function () {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        // nothing
      } else {
        $(".preview-image-left").css("box-shadow", "black -17px 26px 32px 0"),
          $(".preview-image-left").css("transform", "translateX(15px)"),
          $(".preview-image-left2").css("box-shadow", "black -17px 26px 32px 0"),
          $(".preview-image-left2").css("transform", "translateX(15px)");
      }
    },
    function () {
      $(".preview-image-left").css("box-shadow", "none"),
        $(".preview-image-left").css("transform", "translateX(0)"),
        $(".preview-image-left2").css("box-shadow", "none"),
        $(".preview-image-left2").css("transform", "translateX(0)");
    }
  ),
  $(".view-project3").hover(
    function () {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        // nothing
      } else {
        $(".preview-image3").css("box-shadow", "black 10px 13px 34px 0"),
          $(".preview-image3").css("transform", "translateX(-15px)");
      }
    },
    function () {
      $(".preview-image3").css("box-shadow", "none"),
        $(".preview-image3").css("transform", "translateX(0)");
    }
  ),
  $(".view-project3").click(function () {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // nothing
    } else {
      $(".preview-image3").css("width", "100%"),
        $(".preview-image3").css("height", "200vw"),
        $(".preview-image3").css("top", "0"),
        $(".preview-image3").css("right", "0"),
        $(".preview-image3").css("margin", "0"),
        $(".preview-image3").css("position", "absolute"),
        $(".preview-image3").css("z-index", "100000000"),
        $(".project2-section").css(
          "clip-path",
          "polygon(0 0, 100% 0, 100% 70%, 0% 70%)"
        ),
        $(".project3-section").css(
          "clip-path",
          "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        ),
        $(".project3-section").css("margin-top", "-21vw");
    }
  }),
  $(".view-project-left").click(function () {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // nothing
    } else {
      $(".preview-image-left").css("width", "100%"),
        $(".preview-image-left").css("height", "170vw"),
        $(".preview-image-left").css("top", "0"),
        $(".preview-image-left").css("left", "0"),
        $(".preview-image-left").css("margin", "0"),
        $(".preview-image-left").css("position", "absolute"),
        $(".preview-image-left").css("z-index", "100000000"),
        $(".project1-section").css(
          "clip-path",
          "polygon(0 0, 100% 0, 100% 70%, 0 70%)"
        ),
        $(".project2-section").css(
          "clip-path",
          "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
        ),
        $(".project2-section").css("margin-top", "-21vw");
    }
  }),
  $(".view-project").click(function () {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // nothing
    } else {
      $(".preview-image").css("width", "100%"),
        $(".preview-image").css("height", "260vw"),
        $(".preview-image").css("top", "0"),
        $(".preview-image").css("right", "0"),
        $(".preview-image").css("margin", "0"),
        $(".preview-image").css("position", "absolute"),
        $(".preview-image").css("z-index", "100000000"),
        $(".welcome-section").css(
          "clip-path",
          "polygon(0 80%, 0% 0%, 100% 0%, 100% 80%, 50% 80%)"
        ),
        $(".project1-section").css(
          "clip-path",
          "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
        ),
        $(".project1-section").css("margin-top", "-10vw");
    }
  });
