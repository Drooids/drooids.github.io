THREE.CSS2DObject=function(e){THREE.Object3D.call(this),this.element=e,this.element.style.position="absolute",this.addEventListener("removed",(function(e){null!==this.element.parentNode&&this.element.parentNode.removeChild(this.element)}))},THREE.CSS2DObject.prototype=Object.create(THREE.Object3D.prototype),THREE.CSS2DObject.prototype.constructor=THREE.CSS2DObject,THREE.CSS2DRenderer=function(){var e,t,r,n;console.log("THREE.CSS2DRenderer",THREE.REVISION);var o=new THREE.Vector3,i=new THREE.Matrix4,l=new THREE.Matrix4,a=document.createElement("div");a.style.overflow="hidden",this.domElement=a,this.setSize=function(o,i){e=o,t=i,r=e/2,n=t/2,a.style.width=o+"px",a.style.height=i+"px"};var s=function(e,t){if(e instanceof THREE.CSS2DObject){o.setFromMatrixPosition(e.matrixWorld),o.applyMatrix4(l);var i=e.element,c="translate(-50%,-50%) translate("+(o.x*r+r)+"px,"+(-o.y*n+n)+"px)";i.style.WebkitTransform=c,i.style.MozTransform=c,i.style.oTransform=c,i.style.transform=c,i.parentNode!==a&&a.appendChild(i)}for(var E=0,d=e.children.length;E<d;E++)s(e.children[E],t)};this.render=function(e,t){e.updateMatrixWorld(),null===t.parent&&t.updateMatrixWorld(),t.matrixWorldInverse.copy(t.matrixWorld).invert(),i.copy(t.matrixWorldInverse.copy(t.matrixWorld).invert()),l.multiplyMatrices(t.projectionMatrix,i),s(e,t)}};