var scene = new THREE.Scene()

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({alpha: true});
//alpha: true lets the light come through in the background;

renderer.setSize(window.innerWidth, window.innerHeight);

var controls = new THREE.OrbitControls( camera );
controls.autoRotate = true;

document.body.appendChild(renderer.domElement);
var geometry = new THREE.OctahedronGeometry(30);

var color = new THREE.Color("#e25822");

var material = new THREE.MeshLambertMaterial( {color: color.getHex(), wireframe: true} );

var cubeOne = new THREE.Mesh(geometry, material);

var materialTwo = new THREE.MeshPhongMaterial( {color: color.getHex(), specular: 0x009900, shinyness: 20} );

var cubeTwo = new THREE.Mesh(geometry, materialTwo);

scene.add(cubeOne);
scene.add(cubeTwo);

cubeOne.position.x += 50;
cubeTwo.position.x -= 50;

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
  controls.update();
  // mesh.rotation.x += 0.01;
  cubeOne.rotation.y += 0.05;
  cubeOne.rotation.z -= 0.05;
  cubeTwo.rotation.y -= 0.05;
  renderer.render(scene, camera);
}

animate();
