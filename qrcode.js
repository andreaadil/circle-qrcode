/* in ES 6 */
import domtoimage from 'dom-to-image';
/* in ES 5 */
var domtoimage = require('dom-to-image');

//Generate original QR code
var centre = new QRCode(document.getElementById("centre"), {
  width : 100,
  height : 100
});

var topLeft = new QRCode(document.getElementById("top-left"), {
  width : 100,
  height : 100
});

var topRight = new QRCode(document.getElementById("top-right"), {
  width : 100,
  height : 100
});

var bottomLeft = new QRCode(document.getElementById("bottom-left"), {
  width : 100,
  height : 100
});

var bottomRight = new QRCode(document.getElementById("bottom-right"), {
  width : 100,
  height : 100
});

function makeCode () {
  var elText = document.getElementById("text");

  if (!elText.value) {
    alert("Input a text");
    elText.focus();
    return;
  }

  centre.makeCode(elText.value);
  topLeft.makeCode(elText.value);
  topRight.makeCode(elText.value);
  bottomLeft.makeCode(elText.value);
  bottomRight.makeCode(elText.value);
}

makeCode();


$("#text").
  on("blur", function () {
    makeCode();
  }).
  on("keydown", function (e) {
    if (e.keyCode == 13) {
      makeCode();
    }
  });

  //Download png
  // domtoimage.toBlob(document.getElementById('my-node'))
  //   .then(function (blob) {
  //       window.saveAs(blob, 'my-node.png');
  //   });
