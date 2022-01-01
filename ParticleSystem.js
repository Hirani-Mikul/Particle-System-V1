function ParticleSystem(origin) {
  this.origin = origin.clone();
  this.Particles = [];
}
ParticleSystem.prototype.addParticles = function () {
  var rand = Math.random();
  if (rand < 0.5) {
    this.Particles.push(new Particle1(this.origin));
  } else {
    this.Particles.push(new Particle2(this.origin));
  }
};
ParticleSystem.prototype.update = function () {
  for (var i = this.Particles.length - 1; i >= 0; i--) {
    var particle = this.Particles[i];
    particle.run();
    if (particle.isDead()) {
      this.Particles.splice(i, 1);
    }
  }
  ctx.beginPath();
  ctx.globalAlpha = 1;
  ctx.fillStyle = "blue";
  ctx.font = "25px monospace";
  ctx.fillText("Particles: " + this.Particles.length, 20, 50);
};
