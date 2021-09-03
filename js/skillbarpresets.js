let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.99,
    fill: {gradient: ['#ffffff', '#e0e0e0']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".cssbar").circleProgress({
    value: 0.94
  });
  $(".nodebar").circleProgress({
    value: 0.62
  });
  $(".reactbar").circleProgress({
    value: 0.63
  });
  $(".materializebar").circleProgress({
    value: 0.87
  });
  $(".gitbar").circleProgress({
    value: 0.76
  });
  $(".vscbar").circleProgress({
    value: 0.99
  });
  $(".bootstrapbar").circleProgress({
    value: 0.42
  });
  $(".javabar").circleProgress({
    value: 0.63
  });
  $(".jsbar").circleProgress({
    value: 0.70   
  });