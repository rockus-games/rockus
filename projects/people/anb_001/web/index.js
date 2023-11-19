import * as THREE from "three";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(500, 500);
// renderer.setSize(window.innerWidth*0.7, window.innerHeight*0.7);
document.querySelector(".space").appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();

const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material = new THREE.MeshBasicMaterial({color: 0xff0000});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 1;
var n = 0;

document.querySelector("#rotate_x").addEventListener("click", () => {
  if (n == 0) {
    n = 0.01;
  } else {
    n = 0;
  }
});
// rotate_x();
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += n;
  // cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
