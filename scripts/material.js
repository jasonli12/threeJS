var scene = new THREE.Scene()

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({alpha: true});
//alpha: true lets the light come through in the background;

renderer.setSize(window.innerWidth, window.innerHeight);

var controls = new THREE.OrbitControls( camera );
controls.autoRotate = true;

document.body.appendChild(renderer.domElement);

var geometry = new THREE.OctahedronGeometry(30);

var color = new THREE.Color("#7833aa");

var material = new THREE.MeshLambertMaterial( {color: color.getHex(), wireframe: true} );

var mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

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
  mesh.rotation.y += 0.05;
  mesh.rotation.z -= 0.05;
  renderer.render(scene, camera);
}

animate();
