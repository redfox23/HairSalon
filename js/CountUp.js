// var options = {
//   useEasing: false, 
//   useGrouping: true, 
//   separator: '', 
//   decimal: '', 
//   suffix: 'M+' 
// };
// var demo = new CountUp('myTargetElement', 1, 0, 0, 2, options);
// if (!demo.error) {
//   demo.start();
// } else {
//   console.error(demo.error);
// }

$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 8000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});