// ########################## init scene

const scene = new THREE.Scene();

//scene.background = new THREE.Color( 0xFFFF00 );

const camera = new THREE.PerspectiveCamera(75, 16 / 9, 0.1, 1000);

camera.position.z = 10;
camera.position.y = -4;
camera.position.x = 0;

const renderer = new THREE.WebGLRenderer({ alpha: true , antialias: true});

renderer.setClearColor(0x000000, 0);

document.getElementById("myHead").appendChild( renderer.domElement );


// ########################## importation perso

const loader = new THREE.GLTFLoader();

let Perso;

loader.load( 'ilan_metal.glb', function ( gltf ) {
    
    Perso = gltf.scene;
    scene.add( gltf.scene );


    gltf.scene.scale.set(17,17,17);
    gltf.scene.position.x = -5;
    gltf.scene.position.z = 0;
    gltf.scene.position.y = -6.5;
    gltf.scene.rotation.x = 0;
    //console.log(gltf.scene.material.opacity)
},function ( xhr ) {
    // called while loading is progressing
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% + loaded' );
}, function ( error ) {

    console.error( error );

} );

// ########################## creation temp sphere

// const geometry = new THREE.SphereGeometry( 0.1, 32, 16 );
// const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
// const sphere = new THREE.Mesh( geometry, material );
// scene.add( sphere );




// const axesHelper = new THREE.AxesHelper( 1 );
// scene.add( axesHelper );

// ########################## light


//   var lightA1 = new THREE.AmbientLight(0xFFFFFF, 0.1);
//   scene.add(lightA1);

  var lightD1 = new THREE.DirectionalLight( 0xf3c795, 0.1 );
  lightD1.position.set( 0, 0, 2 );
  lightD1.castShadow = true;
  lightD1.shadow.camera.left = -100;
  lightD1.shadow.camera.top = -100;
  lightD1.shadow.camera.right = 100;
  lightD1.shadow.camera.bottom = 100;
  lightD1.shadow.camera.near = 1;
  lightD1.shadow.camera.far = 2;
  lightD1.shadow.mapSize.height = lightD1.shadow.mapSize.width = 1000;
  scene.add( lightD1 );

  const Pointlight = new THREE.PointLight( 0xffffff, 2, 4 );
  Pointlight.position.set( 0, -5, 3 );
  scene.add( Pointlight );

//   const pointLightHelper = new THREE.PointLightHelper( Pointlight, 0.1 );
//   scene.add( pointLightHelper );


  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;




// ########################## logic

const clamp = (x,in_min,in_max,out_min,out_max) => {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}



let X = 0; 
let Y = 0; 



document.getElementById("myHead").addEventListener(("mousemove"), (e) => {
    X = clamp(e.clientX,0,window.innerWidth, -7, 7 );
    
    Y = clamp(e.clientY,0,window.innerHeight, 0, -8 );
    

    //
});



        
function animate() {
    //console.log(X + " : " + Y);   
    renderer.setSize( window.innerWidth, window.innerHeight, true);

    requestAnimationFrame( animate );
    renderer.render( scene, camera );

    //cube.rotation.x += 0.01;

    if (Perso) {
    Perso.rotation.y += 0.01;
    //Perso.rotation.x += 0.01;
    }


    Pointlight.position.x = X;
    Pointlight.position.y = Y;
    
    //console.log(X)
    //light.position.set( X, Y, 50 );
    //Perso.scale.set(1,15,15);
        
}
animate()



