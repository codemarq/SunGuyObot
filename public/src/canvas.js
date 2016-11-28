// JS for drawing the canvas
function canvasDraw () {
    document.onReady() {
        var canvas = document.getElementById('tutorial');
        var ctx = ;

        if (canvas.getContext){
          ctx = canvas.getContext('2d');
          // drawing code here
        } else {
          // canvas-unsupported code here--ISSUE: replace this later with a rendering
          // of a custom html for error codes.
          document.write('<h3>Your browser is unsupported, please try again on Chrome</h3>');
        };
    };
};

module.exports = canvasDraw;
