$('span').each(function(i) {
    delay =(i)*500;
    setTimeout(function (div) {
             div.show().addClass('glow');
         }, delay, $(this));
 });
