var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


var geometry = new THREE.BoxGeometry(20, 20, 20)


var material = new THREE.MeshLambertMaterial( {color: 0xfd59d7} );


var cube = new THREE.Mesh(geometry, material);

scene.add(cube);

var light = new THREE.PointLight(0xFFFF00);
light.position.set(10, 0, 25);
scene.add(light);

camera.position.set(0, 0, 100);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  renderer.render(scene, camera);
}

animate();
