function roadBuilder(e={containerId:"container",initCamera:"topdown",visible:{cars:!0,grid:!0},label:{offset:{top:0}}}){const t=this;var i=document.getElementById(e.containerId);this.initCamera=e.initCamera||"topdown";var n=new THREE.Scene;let o,s,a=400;i.clientWidth<=768?(o=50,s=1200):i.clientWidth>=769&&i.clientWidth<=1080?(o=50,s=1475):(o=40,s=1800),console.log(o,a,s,i.clientWidth/i.clientHeight);var r=new THREE.PerspectiveCamera(o,i.clientWidth/i.clientHeight,35,38);r.position.set(0,36,0);var l=new THREE.PerspectiveCamera(o,i.clientWidth/i.clientHeight,1,8),d=r;let c=window.devicePixelRatio,p=!0;c>1&&(p=!1);var E=new THREE.WebGLRenderer({antialias:!1,powerPreference:"high-performance"});E.setSize(i.clientWidth,i.clientHeight),E.setClearColor(4552378,.4),i.appendChild(E.domElement);var h=new THREE.CSS2DRenderer;h.setSize(i.clientWidth,i.clientHeight),h.domElement.style.position="absolute",h.domElement.style.top=i.getBoundingClientRect().top+e.label.offset.top+"px",h.domElement.style.left=i.getBoundingClientRect().left+"px",h.domElement.id="label-renderer-"+e.containerId,document.body.appendChild(h.domElement);var m=new THREE.OrbitControls(r,E.domElement);m.enableZoom=!0,m.enableRotate=!1,m.enablePan=!1;var w=new THREE.Clock,f=new THREE.AmbientLight(16777215);n.add(f),directionalLight=new THREE.DirectionalLight(16777215,100),directionalLight.position.set(0,200,0),directionalLight.castShadow=!0,n.add(directionalLight),light4=new THREE.PointLight(16777215,80),n.add(light4);var H=new THREE.GridHelper(30,30,7090847,7090847);H.visible=e.visible.grid,n.add(H);new THREE.OBJLoader;var R=[0,0,10,10,0,10,14,0,2,10,0,-4,2,0,8,-7,0,-5,-8,0,-9,-14,0,-7,-13,0,-2,-14,0,3,-11,0,10,0,0,10],u=600,T=[-.6,1.64],g=new THREE.BufferGeometry;g.createRoad=THREEg.createRoad,g.createRoad(R,u,T);var b=[new THREE.MeshBasicMaterial({color:3693453,side:THREE.DoubleSide,wireframe:!1})],v=new THREE.Mesh(g,b);n.add(v);var y=.08,M=new THREE.BufferGeometry;M.positions=new Float32Array(6),M.addAttribute("position",new THREE.BufferAttribute(M.positions,3).setDynamic(!0)),lineTngt=new THREE.Line(M,new THREE.LineBasicMaterial({color:65535,side:THREE.DoubleSide})),n.add(lineTngt);var x=new THREE.BufferGeometry;x.positions=new Float32Array(6),x.addAttribute("position",new THREE.BufferAttribute(x.positions,3).setDynamic(!0)),lineNorm=new THREE.Line(x,new THREE.LineBasicMaterial({color:16711680,side:THREE.DoubleSide})),n.add(lineNorm);var C=new THREE.BufferGeometry;function B(e=0,t=0){this.id=e,this.distance=t,this.mesh=null,this.follower={},this.activeCamera=!1,this.increment=1,this.trackid=Math.floor(Math.random()*T.length)}function z(){this.cars=[]}C.positions=new Float32Array(6),C.addAttribute("position",new THREE.BufferAttribute(C.positions,3).setDynamic(!0)),lineBino=new THREE.Line(C,new THREE.LineBasicMaterial({color:255,side:THREE.DoubleSide})),n.add(lineBino),z.prototype.add=function(t=0,i=0){const o=new B(t,i);o.follower=new THREE.Mesh(new THREE.BoxBufferGeometry(.1,.2*y,.1),new THREE.MeshBasicMaterial({color:16711680,side:THREE.DoubleSide,wireframe:!0})),n.add(o.follower);const s=(new THREE.GLTFLoader).setPath("./animation/vehicle/");s.load("/scene.gltf",(function(i){let s=i.scene;s.scale.set(5e-4,5e-4,5e-4),s.cid=t,s.traverse((e=>{e.isMesh&&"Cube001_Material001_0"==e.name&&(e.material.color.r=Math.floor(32*Math.random()),e.material.color.g=Math.floor(32*Math.random()),e.material.color.b=Math.floor(32*Math.random()))}));const a=document.createElement("div");a.className="label",a.textContent=o.id;const r=new THREE.CSS2DObject(a);r.position.set(0,0,0),s.add(r),o.mesh=s,o.mesh.visible=e.visible.cars,n.add(s)})),this.cars.push(o)},z.prototype.remove=function(e){for(var t=0;t<this.cars.length;t++)this.cars[t].id==e&&(n.remove(this.cars[t].mesh),n.remove(this.cars[t].follower),this.cars.splice(t,1))};var L,S=new z,A=8,W=0;function D(e){const t=e.domElement,i=t.clientWidth,n=t.clientHeight,o=t.width!==i||t.height!==n;return o&&e.setSize(i,n,!1),o}function G(){if(L=w.getElapsedTime(),requestAnimationFrame(G),D(E)){const e=E.domElement;r.aspect=e.clientWidth/e.clientHeight,r.updateProjectionMatrix()}if("chase"==t.initCamera&&(d=l),E.render(n,d),h.render(n,d),L-W>.02){S.cars.map((e=>{if(e.mesh){let t=e.distance%g.points.length,i=g.points[t].x+g.n[t].x*T[e.trackid]*.6,n=g.points[t].y+y,o=g.points[t].z+g.n[t].z*T[e.trackid]*.6;e.follower.position.set(i,n,o),e.follower.rotation.y=1.57+Math.atan2(-g.t[t].z,g.t[t].x),e.mesh.position.set(i,n,o),e.mesh.rotation.y=1.57+Math.atan2(-g.t[t].z,g.t[t].x),e.distance+=e.increment}})),M.positions[0]=g.points[A].x,M.positions[1]=g.points[A].y,M.positions[2]=g.points[A].z,M.positions[3]=g.points[A].x+g.t[A].x,M.positions[4]=g.points[A].y+g.t[A].y,M.positions[5]=g.points[A].z+g.t[A].z,M.attributes.position.needsUpdate=!0,x.positions[0]=g.points[A].x,x.positions[1]=g.points[A].y,x.positions[2]=g.points[A].z,x.positions[3]=g.points[A].x+g.n[A].x,x.positions[4]=g.points[A].y+g.n[A].y,x.positions[5]=g.points[A].z+g.n[A].z,x.attributes.position.needsUpdate=!0,C.positions[0]=g.points[A].x,C.positions[1]=g.points[A].y,C.positions[2]=g.points[A].z,C.positions[3]=g.points[A].x+g.b[A].x,C.positions[4]=g.points[A].y+g.b[A].y,C.positions[5]=g.points[A].z+g.b[A].z,C.attributes.position.needsUpdate=!0,A++,A===g.points.length&&(A=0);const t=S.cars.find((e=>e.activeCamera));if(t&&t.mesh){var e=new THREE.Vector3(2.5,2.5,0);e.applyMatrix4(t.follower.matrixWorld);l.position.x=e.x,l.position.y=e.y,l.position.z=e.z,l.lookAt(t.follower.position)}W=L}m.update()}return G(),{scene:n,camera:r,chaseCamera:l,currentCamera:d,gridHelper:H,car:B,theCarsManager:S}}