var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 30, window.innerWidth/window.innerHeight, 0.1, 1000 );
var mesh;

var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );

var controls = new THREE.OrbitControls( camera );
controls.autoRotate = true;

document.body.appendChild( renderer.domElement );

// add icosahedron
var geometry = new THREE.SphereGeometry(24, 32, 32 );
THREE.ImageUtils.crossOrigin = true;
// create a loader to get an image from a URL
var textureLoader = new THREE.TextureLoader();
// load in the image
textureLoader.crossOrigin = true;
textureLoader.load('../assets/images/blue-flame.jpg', function(texture) {
  texture.wrapS = texture.wrapT =   THREE.RepeatWrapping;
// this code makes the texture repeat
// set the texture as the map for the material
  texture.repeat.set( 1, 1 );
  var material = new THREE.MeshLambertMaterial( {map: texture} );
  mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );

  render();
});


camera.position.set(0, 0, 100);

// so many lights
var light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set( 0, 1, 0 );
scene.add( light );

var light = new THREE.DirectionalLight( 0xffffff, 0.5 );
light.position.set( 0, -1, 0 );
scene.add( light );

var light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set( 1, 0, 0 );
scene.add( light );

var light = new THREE.DirectionalLight( 0xffffff, 0.5 );
light.position.set( 0, 0, 1 );
scene.add( light );

var light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set( 0, 0, -1 );
scene.add( light );

var light = new THREE.DirectionalLight( 0xffffff, 0.5 );
light.position.set( -1, 0, 0 );
scene.add( light );


var render = function () {
  requestAnimationFrame( render );
  controls.update();
  mesh.rotation.y += 0.05;

  renderer.render(scene, camera);
};
