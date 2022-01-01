var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var ps = new ParticleSystem(new Vector(300, 20));

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function draw() {
  clear();
  ps.update();
  ps.addParticles();
  requestAnimationFrame(draw);
}
draw();
