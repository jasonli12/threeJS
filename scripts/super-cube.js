var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(20, 20, 20);

var material = new THREE.MeshNormalMaterial();

var cube = new THREE.Mesh(geometry, material);

scene.add(cube);

for (var i = 0, l = geometry.vertices.length; i < l; i++) {
  geometry.vertices[i].x += -10 + Math.random()*20
  geometry.vertices[i].y += -10 + Math.random()*20
}

camera.position.set(0, 0, 100);

cube.rotation.x = 0.45;
cube.rotation.y = -0.25;
// cube.position.x = -30;


var light = new THREE.PointLight( 0xFFFF00 );
light.position.set( 10, 0, 25 );
scene.add( light );

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  renderer.render(scene, camera);
}

animate();
