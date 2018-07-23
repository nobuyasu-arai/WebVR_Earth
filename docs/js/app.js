class App {
	constructor(scene) {
		this.scene = scene;
	}

	init() {
/*
		var light = new THREE.DirectionalLight(0xFFFFFF);
		light.position.set(2, 2, 0);
		this.scene.add( light );

		var ambientLight = new THREE.AmbientLight(0x888888);
		this.scene.add( ambientLight );
*/
		this.meshEarth = new THREE.Mesh();
		var loaderEarth = new THREE.TextureLoader();
		var textureEarth = loaderEarth.load( './img/earth.png');
		var materialEarth = new THREE.MeshBasicMaterial({ map:textureEarth });
		var geometryEarth = new THREE.SphereGeometry(18,32,32);
		this.meshEarth = new THREE.Mesh( geometryEarth, materialEarth );
		this.meshEarth.position.set(0, 0, 50);
		this.scene.add( this.meshEarth );


		this.meshCloud = new THREE.Mesh();
		var loaderCloud = new THREE.TextureLoader();
		var textureCloud = loaderCloud.load( './img/cloud.png');
		var materialCloud = new THREE.MeshBasicMaterial({ map:textureCloud, transparent:true });
		var geometryCloud = new THREE.SphereGeometry(18.1,32,32);
		this.meshCloud = new THREE.Mesh( geometryCloud, materialCloud );
		this.meshCloud.position.set(0, 0, 50);
		this.scene.add( this.meshCloud );


		this.meshMoon = new THREE.Mesh();
		var loaderMoon = new THREE.TextureLoader();
		var textureMoon = loaderMoon.load( './img/moon.png');
		var materialMoon = new THREE.MeshBasicMaterial({ map:textureMoon});
		var geometryMoon = new THREE.SphereGeometry(6,32,32);
		this.meshMoon = new THREE.Mesh( geometryMoon, materialMoon );
		this.sceneCenter = new THREE.Scene();

		this.sceneCenter.position.set(0, 10, 50);
		this.sceneCenter.add( this.meshMoon );
		this.meshMoon.position.set(0, 10, 50);
		this.scene.add( this.sceneCenter );


		this.meshMoon2 = new THREE.Mesh();
		var loaderMoon2 = new THREE.TextureLoader();
		var textureMoon2 = loaderMoon2.load( './img/earth.png');
		var materialMoon2 = new THREE.MeshBasicMaterial({ map:textureMoon2});
		var geometryMoon2 = new THREE.SphereGeometry(2,32,32);
		this.meshMoon2 = new THREE.Mesh( geometryMoon2, materialMoon2 );
		this.sceneCenter2 = new THREE.Scene();

		this.sceneCenter2.position.set(0, 0, 50);
		this.sceneCenter2.add( this.meshMoon2 );
		this.meshMoon2.position.set(0, 0, 50);
		this.scene.add( this.sceneCenter2 );


		this.meshCube  = new THREE.Scene();
		var geometryCube = new THREE.BoxGeometry(1, 4, 4);
		var textureMoonCube = loaderMoon.load( './img/moon.png');
		var materialMoonCube = new THREE.MeshBasicMaterial({ map:textureMoonCube});
		var geometryMoonCube = new THREE.SphereGeometry(2,32,32);
		this.meshCube	= new THREE.Mesh( geometryCube, materialMoonCube );
		this.sceneCenterCube = new THREE.Scene();

		this.sceneCenterCube.position.set(0, 0, 50);
		this.sceneCenterCube.rotation.set(0, 0, 130);/*(,,ŒX‚«?)*/
		this.sceneCenterCube.add( this.meshCube );
		this.meshCube.position.set(0, 0, 50);
		this.scene.add( this.sceneCenterCube );
	}

	update(dt) {
		this.meshCloud.rotation.y		 += dt * 0.1;
		this.meshEarth.rotation.y		 += dt * 0.2;
		this.sceneCenter.rotation.x		 += dt * 0.3;
		this.sceneCenter2.rotation.y	 += dt * 0.4;
		this.sceneCenterCube.rotation.y	 += dt * 0.4;
	}

	render(dt) {

	}
}
