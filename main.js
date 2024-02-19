import * as THREE from 'three';
import { Color } from 'three';

import * as dat from 'dat.gui'

//* scene : 
const scene = new THREE.Scene();


//* debug - sliders - controlls: 

const gui =new dat.GUI()
const myFolder = gui.addFolder('params')
const sphereParams = {
    colorF:0xfff0ff,
    x:1,
    y:1,
    z:1
   
};

myFolder.addColor(sphereParams , 'colorF')
myFolder.add(sphereParams ,'x' ,1,2)
myFolder.add(sphereParams ,'y',1,2)
myFolder.add(sphereParams ,'z',1,2)

const myFolder2 = gui.addFolder('params2')

//* camera: 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// * light 
const light = new THREE.PointLight(0xffffff , 100 , 100)
light.position.set( 0, 0, 2 );

scene.add(light)

// White directional light at half intensity shining from the top.



// * object 
const geometry = new THREE.SphereGeometry(1);


//*  material 
const material = new THREE.MeshStandardMaterial( {  color:sphereParams.colorF});
material.roughness = 0.5

//* mesh : 
const cube = new THREE.Mesh( geometry, material );

scene.add( cube );

camera.position.z = 5;

//* renderer : 
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



//* events 


// *render or animate loop.

function animate() {

    cube.rotation.x += 0.01;
cube.rotation.y += 0.01;

material.color = new THREE.Color(sphereParams.colorF)
cube.scale.x =sphereParams.x ; 
cube.scale.y =sphereParams.y

cube.scale.z =sphereParams.z

	requestAnimationFrame( animate );
	renderer.render( scene, camera );

}
animate();