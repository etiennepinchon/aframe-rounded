AFRAME.registerComponent('glow', {
  schema: {
    enabled: {default: true},
    ratio: {type: 'number', default: 0.985 },
    reflectivity: {type: 'number', default: 0.9 }
  },
  init: function () {
    var scene = this.el.sceneEl.object3D;

    // Create refraction camera
    this.refractCamera = new THREE.CubeCamera( 0.1, 5000, 512 );
  	scene.add( this.refractCamera );
    this.refractCamera.renderTarget.mapping = THREE.CubeRefractionMapping;

    this.refractMaterial = new THREE.MeshBasicMaterial( {
  		color: 0xccccff,
  		envMap: this.refractCamera.renderTarget,
  		refractionRatio: this.data.ratio,
  		reflectivity: this.data.reflectivity
  	});

    this.originalMaterial = this.el.object3DMap.mesh.material;
  },
  update: function () {
    if (this.data.enabled) {
      this.el.object3DMap.mesh.material = this.refractMaterial;
    	this.refractCamera.position = this.position;
      if (this.data.ratio < 0.912) { this.data.ratio = 0.912; }
      if (this.data.ratio > 1) { this.data.ratio = 1; }
      if (this.data.reflectivity < 0.6) { this.data.reflectivity = 0.6; }
      if (this.data.reflectivity > 1.2) { this.data.reflectivity = 1.2; }
      this.refractMaterial.refractionRatio = this.data.ratio;
      this.refractMaterial.reflectivity = this.data.reflectivity;
    } else {
      this.el.object3DMap.mesh.material = this.originalMaterial;
    }
  },
  tick: function () {
    if (!this.refractCamera) { return; }
    this.refractCamera.updateCubeMap( this.el.sceneEl.renderer, this.el.sceneEl.object3D );
  },
  remove: function () {
    if (!this.refractCamera) { return; }
    var scene = this.el.sceneEl.object3D;
    scene.remove( this.refractCamera );
    this.refractCamera = null;
    this.el.object3DMap.mesh.material = this.originalMaterial;
  },
  pause: function () {},
  play: function () {}
});
