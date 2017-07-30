var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
var mesh;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.OctahedronGeometry(20);
var color = new THREE.Color("#ffd700");

var textureLoader = new THREE.TextureLoader();
textureLoader.crossOrigin = true;
textureLoader.load('../assets/images/bump-map.jpg',
  function(texture) {
    var material = new THREE.MeshPhongMaterial( {color: color.getHex(), bumpMap: texture} );
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    animate();
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

var animate = function() {
  requestAnimationFrame(animate);
  mesh.rotation.y += 0.05;
  renderer.render(scene, camera);
};
