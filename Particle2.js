function Particle2(position) {
  Particle1.call(this, position);
  this.size = 10;
}
Particle2.prototype = Object.create(Particle1.prototype);

Particle2.prototype.display = function () {
  ctx.beginPath();
  ctx.globalAlpha = this.timeTolive;
  ctx.fillStyle = "green";
  ctx.rect(this.position.x, this.position.y, this.size, this.size);
  ctx.fill();
  ctx.strokeStyle = "rgba(0, 0, 0)";
  ctx.stroke();
};
