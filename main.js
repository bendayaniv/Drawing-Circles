function calculateAndDraw() {
    var radius = document.getElementById("radius").value;

    if (radius == "") {
        alert("Come on, put something");
        return;
    }

    if (isNaN(radius)) {
        alert(radius + " is not a number!!! Try again");
        return;
    }

    if (radius < 0) {
        alert("Not a negative number...");
        return;
    }

    if (radius > 300) {
        alert("The Radius is too big (try under 301...)");
        return;
    }

    calculateVolume(radius);

    drawCircle(radius);
}

function calculateVolume(radius) {
    radius = Math.abs(radius);
    var volume;
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
    document.getElementById('volume').value = volume;
}

function drawCircle(radius) {
    var myCanvas = document.getElementById("myCanvas");
    var circle = myCanvas.getContext("2d");
    circle.beginPath();
    circle.arc(300, 300, radius, 0, 2 * Math.PI);
    circle.stroke();
}


function cleanCanvas() {
    var clean = document.getElementById("myCanvas");
    var box = clean.getContext("2d");
    box.clearRect(0, 0, 600, 600);
}


// Bonus: :-(

// function drawOnLoad() {
//     for (var i = 1; i <= 300; i++) {
//         var radius = i;
//         var myCanvas = document.getElementById("myCanvas");
//         var circle = myCanvas.getContext("2d");
//         circle.beginPath();
//         circle.arc(300, 300, radius, 0, 2 * Math.PI);
//         circle.stroke();
//     }
// }