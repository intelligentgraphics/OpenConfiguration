this.IG=this.IG||{},this.IG.Math=function(n){"use strict";var t=Math.PI/180,e=180/Math.PI;function r(n,t,e){if(t>e){console.warn("MathUtils.clamp: min("+t+") > max("+e+")");var r=e;e=t,t=r}return Math.min(Math.max(n,t),e)}function i(n){var t=Math.sqrt(n.x*n.x+n.y*n.y+n.z*n.z);if(0===t)return{azimuth:0,elevation:0,radius:0};var e={x:n.x/t,y:n.y/t,z:n.z/t},r=Math.asin(e.y);return{azimuth:Math.atan2(e.x,e.z),elevation:r,radius:t}}function a(n,t,e){return void 0===e&&(e=1),{x:Math.sin(n)*Math.cos(t)*e,y:Math.sin(t)*e,z:Math.cos(n)*Math.cos(t)*e}}
/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
var o=function(n,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)};var u=function(){function n(n,t,e,r){this.x=n,this.y=t,this.z=e,this.order=r}return n.create=function(n,t,e,r){return void 0===n&&(n=0),void 0===t&&(t=0),void 0===e&&(e=0),void 0===r&&(r="xyz"),{x:n,y:t,z:e,order:r}},n.threeaxisrot=function(t,e,r,i,a,o){void 0===o&&(o="xyz");var u=n.create(void 0,void 0,void 0,o);return u.y=Math.asin(r),u.x=Math.atan2(t,e),u.z=Math.atan2(i,a),u},n.createFromQuaternion=function(t,e){void 0===e&&(e="xyz");var r=t;if("xyz"===e)return n.threeaxisrot(-2*(r.y*r.z-r.w*r.x),r.w*r.w-r.x*r.x-r.y*r.y+r.z*r.z,2*(r.x*r.z+r.w*r.y),-2*(r.x*r.y-r.w*r.z),r.w*r.w+r.x*r.x-r.y*r.y-r.z*r.z,e);throw new Error("Unknown order")},n.createFromRotationMatrix=function(t,e){void 0===e&&(e="xyz");var r=t.elements[0][0],i=t.elements[0][1],a=t.elements[0][2],o=t.elements[1][0],u=t.elements[1][1],c=t.elements[1][2],l=(t.elements[2][0],t.elements[2][1],t.elements[2][2]),s=n.create(void 0,void 0,void 0,e);if("xyz"!==e)throw new Error("Unknown order");return a<.99999?a>-.99999?(s.y=Math.asin(a),s.x=Math.atan2(-c,l),s.z=Math.atan2(-i,r)):(s.y=-Math.PI/2,s.x=-Math.atan2(o,u),s.z=0):(s.y=Math.PI/2,s.x=Math.atan2(o,u),s.z=0),s},n}(),c=function(){function n(n,t,e,r){this.x=n,this.y=t,this.z=e,this.w=r}return n.create=function(t,e,r,i){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===r&&(r=0),void 0===i&&(i=0),new n(t,e,r,i)},n.clone=function(n){return{x:n.x,y:n.y,z:n.z,w:n.w}},n.copy=function(n,t){t.x=n.x,t.y=n.y,t.z=n.z,t.w=n.w},n.isEqual=function(t,e,r){void 0===r&&(r=0);var i=n.sub(t,e);return Math.abs(i.x)<=r&&Math.abs(i.y)<=r&&Math.abs(i.z)<=r&&Math.abs(i.w)<=r},n.absoluteComponents=function(n){return{x:Math.abs(n.x),y:Math.abs(n.y),z:Math.abs(n.z),w:Math.abs(n.w)}},n.normalize=function(t,e){void 0===e&&(e=1);var r=n.magnitude(t);if(0!==r)return n.scalarMultiply(e/r,t)},n.normalizeInPlace=function(t,e){void 0===e&&(e=1);var r=n.magnitude(t);0!==r&&n.scalarMultiplyInPlace(e/r,t)},n.add=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var r=n.create(),i=t.length,a=0;a<i;a++){var o=t[a];r.x+=o.x,r.y+=o.y,r.z+=o.z,r.w+=o.w}return r},n.addOnFirst=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=n.length;if(e>0){for(var r=n[0],i=void 0,a=1;a<e;a++)i=n[a],r.x+=i.x,r.y+=i.y,r.z+=i.z,r.w+=i.w;return r}},n.sub=function(n,t){return{x:n.x-t.x,y:n.y-t.y,z:n.z-t.z,w:n.w-t.w}},n.subOnFirst=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=n.length;if(e>0){for(var r=n[0],i=void 0,a=1;a<e;a++)i=n[a],r.x-=i.x,r.y-=i.y,r.z-=i.z,r.w-=i.w;return r}},n.innerProduct=function(n,t){return n.x*t.x+n.y*t.y+n.z*t.z+n.w*t.w},n.multiplyWithMatrix4=function(t,e){var r=e.elements,i=n.create(0,0,0,1),a=r[0][0],o=r[0][1],u=r[0][2],c=r[0][3],l=r[1][0],s=r[1][1],x=r[1][2],f=r[1][3],y=r[2][0],m=r[2][1],d=r[2][2],h=r[2][3],v=r[3][0],z=r[3][1],M=r[3][2],g=r[3][3];return i.x=a*t.x+o*t.y+u*t.z+c*t.w,i.y=l*t.x+s*t.y+x*t.z+f*t.w,i.z=y*t.x+m*t.y+d*t.z+h*t.w,i.w=v*t.x+z*t.y+M*t.z+g*t.w,i},n.scalarAdd=function(n,t){return{x:n+t.x,y:n+t.y,z:n+t.z,w:n+t.w}},n.scalarAddInPlace=function(n,t){t.x+=n,t.y+=n,t.z+=n,t.w+=n},n.scalarMultiply=function(n,t){return{x:n*t.x,y:n*t.y,z:n*t.z,w:n*t.w}},n.scalarMultiplyInPlace=function(n,t){t.x*=n,t.y*=n,t.z*=n,t.w*=n},n.magnitude=function(n){return Math.sqrt(n.x*n.x+n.y*n.y+n.z*n.z+n.w*n.w)},n.magnitudeSquared=function(n){return n.x*n.x+n.y*n.y+n.z*n.z+n.w*n.w},n.distance=function(n,t){var e=n.x-t.x,r=n.y-t.y,i=n.z-t.z,a=n.w-t.w;return Math.sqrt(e*e+r*r+i*i+a*a)},n.maximizeInPlace=function(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];for(var r=0,i=t.length;r<i;++r){var a=t[r];n.x=Math.max(n.x,a.x),n.y=Math.max(n.y,a.y),n.z=Math.max(n.z,a.z),n.w=Math.max(n.w,a.w)}},n.minimizeInPlace=function(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];for(var r=0,i=t.length;r<i;++r){var a=t[r];n.x=Math.min(n.x,a.x),n.y=Math.min(n.y,a.y),n.z=Math.min(n.z,a.z),n.w=Math.min(n.w,a.w)}},n.reverse=function(n){return{x:-n.x,y:-n.y,z:-n.z,w:-n.w}},n.reverseInPlace=function(n){return n.x=-n.x,n.y=-n.y,n.z=-n.z,n.w=-n.w,n},n.stringify=function(n,t){return void 0===t&&(t=3),"{x: "+n.x.toFixed(t)+", y: "+n.y.toFixed(t)+", z: "+n.z.toFixed(t)+", w: "+n.w.toFixed(t)+"}"},n.hasInvalidEntries=function(n){var t=n.x*n.y*n.z*n.w;return isNaN(t)||!isFinite(t)},n}(),l=function(n){function t(t,e,r,i){return n.call(this,t,e,r,i)||this}return function(n,t){function e(){this.constructor=n}o(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}(t,n),t.create=function(n,t,e,r){return void 0===n&&(n=0),void 0===t&&(t=0),void 0===e&&(e=0),void 0===r&&(r=1),{x:n,y:t,z:e,w:r}},t.createFromEuler=function(n){var e,r,i,a,o=n.order,u=Math.cos(n.x/2),c=Math.cos(n.y/2),l=Math.cos(n.z/2),s=Math.sin(n.x/2),x=Math.sin(n.y/2),f=Math.sin(n.z/2);if("xyz"===o)e=s*c*l+u*x*f,r=u*x*l-s*c*f,i=u*c*f+s*x*l,a=u*c*l-s*x*f;else if("yxz"===o)e=s*c*l+u*x*f,r=u*x*l-s*c*f,i=u*c*f-s*x*l,a=u*c*l+s*x*f;else if("zxy"===o)e=s*c*l-u*x*f,r=u*x*l+s*c*f,i=u*c*f+s*x*l,a=u*c*l-s*x*f;else if("zyx"===o)e=s*c*l-u*x*f,r=u*x*l+s*c*f,i=u*c*f-s*x*l,a=u*c*l+s*x*f;else if("yzx"===o)e=s*c*l+u*x*f,r=u*x*l+s*c*f,i=u*c*f-s*x*l,a=u*c*l-s*x*f;else{if("xzy"!==o)throw new Error("expected order, got none");e=s*c*l-u*x*f,r=u*x*l-s*c*f,i=u*c*f+s*x*l,a=u*c*l+s*x*f}return t.create(e,r,i,a)},t.createFromRotationMatrix=function(n){var e,r,i=n.elements,a=i[0][0],o=i[0][1],u=i[0][2],c=i[1][0],l=i[1][1],s=i[1][2],x=i[2][0],f=i[2][1],y=i[2][2];return r=y<0?a>l?new t(e=1+a-l-y,c+o,u+x,f-s):new t(c+o,e=1-a+l-y,f+s,u-x):a<-l?new t(u+x,f+s,e=1-a-l+y,c-o):new t(f-s,u-x,c-o,e=1+a+l+y),t.scalarMultiply(.5/Math.sqrt(e),r)},t.createFromUnitVectors=function(n,e){var r=t.create(),i=x.innerProduct(n,e)+1;if(i<1e-6)i=0,Math.abs(n.x)>Math.abs(n.z)?(r.x=-n.y,r.y=n.x,r.z=0,r.w=i):(r.x=0,r.y=-n.z,r.z=n.y,r.w=i);else{var a=x.crossProduct(n,e);r.x=a.x,r.y=a.y,r.z=a.z,r.w=i}var o=t.normalize(r);return void 0!==o?o:t.create()},t.createFromVectors=function(n,e){var r,i=Math.sqrt(x.innerProduct(n,n)*x.innerProduct(e,e)),a=i+x.innerProduct(n,e);a<1e-6*i?(a=0,r=Math.abs(n.x)>Math.abs(n.z)?x.create(-n.y,n.x,0):x.create(0,-n.z,n.y)):r=x.crossProduct(n,e);var o=c.normalize(c.create(r.x,r.y,r.z,a));return void 0!==o?o:t.create()},t.CreateFromAxisAngle=function(n,e){var r=.5*e,i=Math.sin(r),a=t.create();return a.x=n.x*i,a.y=n.y*i,a.z=n.z*i,a.w=Math.cos(r),a},t.angleBetween=function(n,t){return 2*Math.acos(Math.abs(r(c.innerProduct(n,t),-1,1)))},t.add=function(n,e){var r=t.create();return r.x=n.x+e.x,r.y=n.y+e.y,r.z=n.z+e.z,r.w=n.w+e.w,r},t.multiply=function(n,e){var r=t.create();return r.x=n.x*e.w+n.y*e.z-n.z*e.y+n.w*e.x,r.y=-n.x*e.z+n.y*e.w+n.z*e.x+n.w*e.y,r.z=n.x*e.y-n.y*e.x+n.z*e.w+n.w*e.z,r.w=-n.x*e.x-n.y*e.y-n.z*e.z+n.w*e.w,r},t.stringify=function(n){var t=u.createFromQuaternion(n);return"\nQuaternion: (w: "+n.w+", x: "+n.x+", y: "+n.y+", z: "+n.z+")\nEuler (Deg): (x: "+t.x*e+", y: "+t.y*e+", z: "+t.z*e+")"},t}(c),s=function(){function n(n){this.elements=n}return n.create=function(t){if(t){if(4!==t.length&&4!==t.length[0])return console.warn("input isn't 4x4 array!"),n.identity();for(var e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],r=0;r<e.length;r++)e[r]=t[r].slice(0,4);return{elements:e}}return n.identity()},n.createFromQuaternion=function(t){return n.compose({x:0,y:0,z:0},t,{x:1,y:1,z:1})},n.identity=function(){return{elements:[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]}},n.set=function(n,t,e,r,i,a,o,u,c,l,s,x,f,y,m,d,h){var v=n.elements;v[0][0]=t,v[0][1]=e,v[0][2]=r,v[0][3]=i,v[1][0]=a,v[1][1]=o,v[1][2]=u,v[1][3]=c,v[2][0]=l,v[2][1]=s,v[2][2]=x,v[2][3]=f,v[3][0]=y,v[3][1]=m,v[3][2]=d,v[3][3]=h},n.clone=function(t){for(var e=n.create(),r=0;r<t.elements.length;r++)e.elements[r]=t.elements[r].slice(0,4);return e},n.copy=function(n,t){for(var e=0;e<n.elements.length;e++)t.elements[e]=n.elements[e].slice(0,4)},n.absoluteElements=function(t){for(var e=n.clone(t),r=0;r<e.elements.length;r++)for(var i=0;i<e.elements[r].length;i++)e.elements[r][i]=Math.abs(e.elements[r][i]);return e},n.add=function(t,e){for(var r=n.clone(t),i=0;i<r.elements.length;i++)for(var a=0;a<r.elements[i].length;a++)r.elements[i][a]+=e.elements[i][a];return r},n.multiplyScalar=function(t,e){var r=n.clone(t),i=r.elements;return i[0][0]*=e,i[0][1]*=e,i[0][2]*=e,i[0][3]*=e,i[1][0]*=e,i[1][1]*=e,i[1][2]*=e,i[1][3]*=e,i[2][0]*=e,i[2][1]*=e,i[2][2]*=e,i[2][3]*=e,i[3][0]*=e,i[3][1]*=e,i[3][2]*=e,i[3][3]*=e,r},n.multiply=function(t,e){var r=n.create(),i=t.elements,a=e.elements,o=r.elements,u=i[0][0],c=i[0][1],l=i[0][2],s=i[0][3],x=i[1][0],f=i[1][1],y=i[1][2],m=i[1][3],d=i[2][0],h=i[2][1],v=i[2][2],z=i[2][3],M=i[3][0],g=i[3][1],w=i[3][2],p=i[3][3],P=a[0][0],b=a[0][1],I=a[0][2],F=a[0][3],S=a[1][0],A=a[1][1],R=a[1][2],q=a[1][3],T=a[2][0],O=a[2][1],V=a[2][2],_=a[2][3],E=a[3][0],N=a[3][1],U=a[3][2],C=a[3][3];return o[0][0]=u*P+c*S+l*T+s*E,o[0][1]=u*b+c*A+l*O+s*N,o[0][2]=u*I+c*R+l*V+s*U,o[0][3]=u*F+c*q+l*_+s*C,o[1][0]=x*P+f*S+y*T+m*E,o[1][1]=x*b+f*A+y*O+m*N,o[1][2]=x*I+f*R+y*V+m*U,o[1][3]=x*F+f*q+y*_+m*C,o[2][0]=d*P+h*S+v*T+z*E,o[2][1]=d*b+h*A+v*O+z*N,o[2][2]=d*I+h*R+v*V+z*U,o[2][3]=d*F+h*q+v*_+z*C,o[3][0]=M*P+g*S+w*T+p*E,o[3][1]=M*b+g*A+w*O+p*N,o[3][2]=M*I+g*R+w*V+p*U,o[3][3]=M*F+g*q+w*_+p*C,r},n.getInverse=function(t){var e=n.create(),r=t.elements,i=e.elements,a=r[0][0],o=r[0][1],u=r[0][2],c=r[0][3],l=r[1][0],s=r[1][1],x=r[1][2],f=r[1][3],y=r[2][0],m=r[2][1],d=r[2][2],h=r[2][3],v=r[3][0],z=r[3][1],M=r[3][2],g=r[3][3],w=m*M*f-z*d*f+z*x*h-s*M*h-m*x*g+s*d*g,p=v*d*f-y*M*f-v*x*h+l*M*h+y*x*g-l*d*g,P=y*z*f-v*m*f+v*s*h-l*z*h-y*s*g+l*m*g,b=v*m*x-y*z*x-v*s*d+l*z*d+y*s*M-l*m*M,I=a*w+o*p+u*P+c*b;if(0!==I){var F=1/I;return i[0][0]=w*F,i[0][1]=(z*d*c-m*M*c-z*u*h+o*M*h+m*u*g-o*d*g)*F,i[0][2]=(s*M*c-z*x*c+z*u*f-o*M*f-s*u*g+o*x*g)*F,i[0][3]=(m*x*c-s*d*c-m*u*f+o*d*f+s*u*h-o*x*h)*F,i[1][0]=p*F,i[1][1]=(y*M*c-v*d*c+v*u*h-a*M*h-y*u*g+a*d*g)*F,i[1][2]=(v*x*c-l*M*c-v*u*f+a*M*f+l*u*g-a*x*g)*F,i[1][3]=(l*d*c-y*x*c+y*u*f-a*d*f-l*u*h+a*x*h)*F,i[2][0]=P*F,i[2][1]=(v*m*c-y*z*c-v*o*h+a*z*h+y*o*g-a*m*g)*F,i[2][2]=(l*z*c-v*s*c+v*o*f-a*z*f-l*o*g+a*s*g)*F,i[2][3]=(y*s*c-l*m*c-y*o*f+a*m*f+l*o*h-a*s*h)*F,i[3][0]=b*F,i[3][1]=(y*z*u-v*m*u+v*o*d-a*z*d-y*o*M+a*m*M)*F,i[3][2]=(v*s*u-l*z*u-v*o*x+a*z*x+l*o*M-a*s*M)*F,i[3][3]=(l*m*u-y*s*u+y*o*x-a*m*x-l*o*d+a*s*d)*F,e}console.warn("getInverse4() can't invert matrix, determinant is 0")},n.transpose=function(t){var e,r=n.clone(t),i=r.elements;return e=i[0][1],i[0][1]=i[1][0],i[1][0]=e,e=i[0][2],i[0][2]=i[2][0],i[2][0]=e,e=i[1][2],i[1][2]=i[2][1],i[2][1]=e,e=i[0][3],i[0][3]=i[3][0],i[3][0]=e,e=i[1][3],i[1][3]=i[3][1],i[3][1]=e,e=i[2][3],i[2][3]=i[3][2],i[3][2]=e,r},n.getScaleMatrix=function(t){return n.create([[t.x,0,0,0],[0,t.y,0,0],[0,0,t.z,0],[0,0,0,1]])},n.makeRotationMatrixFromQuaternionInPlace=function(n,t){var e=n.elements,r=t.x,i=t.y,a=t.z,o=t.w,u=r+r,c=i+i,l=a+a,s=r*u,x=r*c,f=r*l,y=i*c,m=i*l,d=a*l,h=o*u,v=o*c,z=o*l;e[0][0]=1-(y+d),e[1][0]=x-z,e[2][0]=f+v,e[0][1]=x+z,e[1][1]=1-(s+d),e[2][1]=m-h,e[0][2]=f-v,e[1][2]=m+h,e[2][2]=1-(s+y),e[0][3]=0,e[1][3]=0,e[2][3]=0,e[3][0]=0,e[3][1]=0,e[3][2]=0,e[3][3]=1},n.getXRotationMatrix=function(t){return n.create([[1,0,0,0],[0,Math.cos(t),-Math.sin(t),0],[0,Math.sin(t),Math.cos(t),0],[0,0,0,1]])},n.getYRotationMatrix=function(t){return n.create([[Math.cos(t),0,Math.sin(t),0],[0,1,0,0],[-Math.sin(t),0,Math.cos(t),0],[0,0,0,1]])},n.getZRotationMatrix=function(t){return n.create([[Math.cos(t),-Math.sin(t),0,0],[Math.sin(t),Math.cos(t),0,0],[0,0,1,0],[0,0,0,1]])},n.getTranslationMatrix=function(t){return n.create([[1,0,0,t.x],[0,1,0,t.y],[0,0,1,t.z],[0,0,0,1]])},n.compose=function(t,e,r){var i=n.create(),a=i.elements,o=t.x,u=t.y,c=t.z,l=e.x,s=e.y,x=e.z,f=e.w,y=r.x,m=r.y,d=r.z,h=l+l,v=s+s,z=x+x,M=l*h,g=l*v,w=l*z,p=s*v,P=s*z,b=x*z,I=f*h,F=f*v,S=f*z;return a[0][0]=(1-(p+b))*y,a[0][1]=(g-S)*y,a[0][2]=(w+F)*y,a[0][3]=o,a[1][0]=(g+S)*m,a[1][1]=(1-(M+b))*m,a[1][2]=(P-I)*m,a[1][3]=u,a[2][0]=(w-F)*d,a[2][1]=(P+I)*d,a[2][2]=(1-(M+p))*d,a[2][3]=c,a[3][0]=0,a[3][1]=0,a[3][2]=0,a[3][3]=1,i},n.decompose=function(t){var e,r=t.elements,i=x.create(),a=x.create(),o=x.magnitude({x:r[0][0],y:r[0][1],z:r[0][2]}),u=x.magnitude({x:r[1][0],y:r[1][1],z:r[1][2]}),c=x.magnitude({x:r[2][0],y:r[2][1],z:r[2][2]});n.determinant(t)<0&&(o=-o),i.x=r[0][3],i.y=r[1][3],i.z=r[2][3];var s=n.clone(t),f=s.elements,y=1/o,m=1/u,d=1/c;return f[0][0]*=y,f[0][1]*=y,f[0][2]*=y,f[1][0]*=m,f[1][1]*=m,f[1][2]*=m,f[2][0]*=d,f[2][1]*=d,f[2][2]*=d,e=l.createFromRotationMatrix(s),a.x=o,a.y=u,a.z=c,[i,e,a]},n.lookAt=function(t,e,r,i){void 0===i&&(i="z"),(void 0===i||"x"!==i&&"y"!==i&&"z"!==i)&&(console.warn('Matrix4.lookAt() WARNING: base param received not allowed value. Only "x", "y" and "z" are allowed! Returning to default value ("z")'),i="z"),"y"===i&&(console.warn("base = y not implemented yet. Switching to z now."),i="z"),r?(r.x*=-1,r.z*=-1):r=new x(0,1,0);var a=x.sub(t,e);"x"===i&&(a=x.create(-a.z,-a.y,a.x),r=x.create(r.z,r.y,r.x)),e.x<0&&e.z<0&&(a.y*=-1),a.z*=-1,0===x.magnitudeSquared(a)&&(a.z=1),x.normalizeInPlace(a);var o=x.crossProduct(r,a);0===x.magnitudeSquared(o)&&(r=a.y>0?new x(0,0,-1):new x(0,0,1),o=x.crossProduct(r,a)),x.normalizeInPlace(o);var u=x.crossProduct(a,o);x.normalizeInPlace(u);var c=n.create(),l=c.elements;return"x"===i?(l[0][0]=a.z,l[0][1]=u.z,l[0][2]=o.z,l[0][3]=t.x,l[1][0]=a.y,l[1][1]=u.y,l[1][2]=o.y,l[1][3]=t.y,l[2][0]=a.x,l[2][1]=u.x,l[2][2]=o.x,l[2][3]=t.z):(l[0][0]=o.x,l[0][1]=o.y,l[0][2]=o.z,l[0][3]=t.x,l[1][0]=u.x,l[1][1]=u.y,l[1][2]=u.z,l[1][3]=t.y,l[2][0]=a.x,l[2][1]=a.y,l[2][2]=a.z,l[2][3]=t.z),c},n.determinant=function(n){var t=n.elements,e=t[0][0],r=t[1][0],i=t[2][0],a=t[3][0],o=t[0][1],u=t[1][1],c=t[2][1],l=t[3][1],s=t[0][2],x=t[1][2],f=t[2][2],y=t[3][2];return t[0][3]*(+a*c*x-i*l*x-a*u*f+r*l*f+i*u*y-r*c*y)+t[1][3]*(+e*c*y-e*l*f+a*o*f-i*o*y+i*l*s-a*c*s)+t[2][3]*(+e*l*x-e*u*y-a*o*x+r*o*y+a*u*s-r*l*s)+t[3][3]*(-i*u*s-e*c*x+e*u*f+i*o*x-r*o*f+r*c*s)},n.equals=function(n,t){if(n.elements.length!==t.elements.length)return console.warn("Matrices must be of the same type!"),!1;for(var e=n.elements,r=t.elements,i=0;i<e.length;i++)for(var a=0;a<e[i].length;a++)if(e[i][a]!==r[i][a])return!1;return!0},n.stringify=function(n){for(var t=n.elements,e=[0,0,0,0],r=0;r<4;r++)for(var i=0;i<4;i++){(o=t[i][r].toString().length)>e[r]&&(e[r]=o)}var a=new Array;for(i=0;i<4;i++){a[i]=new Array;for(r=0;r<4;r++){var o=t[i][r].toString().length;a[i][r]=" ".repeat(e[r]-o)}}return"\n["+a[0][0]+t[0][0]+", "+a[0][1]+t[0][1]+", "+a[0][2]+t[0][2]+", "+a[0][3]+t[0][3]+"],\n["+a[1][0]+t[1][0]+", "+a[1][1]+t[1][1]+", "+a[1][2]+t[1][2]+", "+a[1][3]+t[1][3]+"],\n["+a[2][0]+t[2][0]+", "+a[2][1]+t[2][1]+", "+a[2][2]+t[2][2]+", "+a[2][3]+t[2][3]+"],\n["+a[3][0]+t[3][0]+", "+a[3][1]+t[3][1]+", "+a[3][2]+t[3][2]+", "+a[3][3]+t[3][3]+"]\n"},n}(),x=function(){function n(n,t,e){this.x=n,this.y=t,this.z=e}return n.create=function(t,e,r){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===r&&(r=0),new n(t,e,r)},n.clone=function(n){return{x:n.x,y:n.y,z:n.z}},n.copy=function(n,t){t.x=n.x,t.y=n.y,t.z=n.z},n.isEqual=function(t,e,r){void 0===r&&(r=0);var i=n.sub(t,e);return Math.abs(i.x)<=r&&Math.abs(i.y)<=r&&Math.abs(i.z)<=r},n.absoluteComponents=function(n){return{x:Math.abs(n.x),y:Math.abs(n.y),z:Math.abs(n.z)}},n.normalize=function(t,e){void 0===e&&(e=1);var r=n.magnitude(t);if(0!==r)return n.scalarMultiply(e/r,t)},n.normalizeInPlace=function(t,e){void 0===e&&(e=1);var r=n.magnitude(t);0!==r&&n.scalarMultiplyInPlace(e/r,t)},n.add=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var r=n.create(),i=t.length,a=0;a<i;a++){var o=t[a];r.x+=o.x,r.y+=o.y,r.z+=o.z}return r},n.addOnFirst=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=n.length;if(e>0){for(var r=n[0],i=void 0,a=1;a<e;a++)i=n[a],r.x+=i.x,r.y+=i.y,r.z+=i.z;return r}},n.sub=function(n,t){return{x:n.x-t.x,y:n.y-t.y,z:n.z-t.z}},n.subOnFirst=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=n.length;if(e>0){for(var r=n[0],i=void 0,a=1;a<e;a++)i=n[a],r.x-=i.x,r.y-=i.y,r.z-=i.z;return r}},n.innerProduct=function(n,t){return n.x*t.x+n.y*t.y+n.z*t.z},n.crossProduct=function(n,t){var e=n.x,r=n.y,i=n.z,a=t.x,o=t.y,u=t.z;return{x:r*u-i*o,y:i*a-e*u,z:e*o-r*a}},n.multiplyWithMatrix4=function(t,e){var r=t.x,i=t.y,a=t.z,o=e.elements,u=1/(o[0][3]*r+o[1][3]*i+o[2][3]*a+o[3][3]),c=(o[0][0]*r+o[1][0]*i+o[2][0]*a+o[3][0])*u,l=(o[0][1]*r+o[1][1]*i+o[2][1]*a+o[3][1])*u,s=(o[0][2]*r+o[1][2]*i+o[2][2]*a+o[3][2])*u;return n.create(c,l,s)},n.scalarAdd=function(n,t){return{x:n+t.x,y:n+t.y,z:n+t.z}},n.scalarAddInPlace=function(n,t){t.x+=n,t.y+=n,t.z+=n},n.scalarMultiply=function(n,t){return{x:n*t.x,y:n*t.y,z:n*t.z}},n.scalarMultiplyInPlace=function(n,t){t.x*=n,t.y*=n,t.z*=n},n.magnitude=function(n){return Math.sqrt(n.x*n.x+n.y*n.y+n.z*n.z)},n.magnitudeSquared=function(n){return n.x*n.x+n.y*n.y+n.z*n.z},n.distance=function(n,t){var e=n.x-t.x,r=n.y-t.y,i=n.z-t.z;return Math.sqrt(e*e+r*r+i*i)},n.maximizeInPlace=function(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];for(var r=0,i=t.length;r<i;++r){var a=t[r];n.x=Math.max(n.x,a.x),n.y=Math.max(n.y,a.y),n.z=Math.max(n.z,a.z)}},n.minimizeInPlace=function(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];for(var r=0,i=t.length;r<i;++r){var a=t[r];n.x=Math.min(n.x,a.x),n.y=Math.min(n.y,a.y),n.z=Math.min(n.z,a.z)}},n.reverse=function(n){return{x:-n.x,y:-n.y,z:-n.z}},n.reverseInPlace=function(n){return n.x=-n.x,n.y=-n.y,n.z=-n.z,n},n.angleBetween=function(t,e){var i=n.magnitude(e),a=n.magnitude(t),o=n.innerProduct(t,e)/(i*a);return Math.acos(r(o,-1,1))},n.rotate=function(t,e){var r=s.create(),i=l.createFromEuler(e);return s.makeRotationMatrixFromQuaternionInPlace(r,i),n.multiplyWithMatrix4(t,r)},n.stringify=function(n,t){return void 0===t&&(t=3),"{x: "+n.x.toFixed(t)+", y: "+n.y.toFixed(t)+", z: "+n.z.toFixed(t)+"}"},n.hasInvalidEntries=function(n){var t=n.x*n.y*n.z;return isNaN(t)||!isFinite(t)},n}(),f=function(){function n(n){this.elements=n}return n.create=function(t){if(t){if(3!==t.length&&3!==t.length[0])return console.warn("input isn't 3x3 array!"),n.identity();for(var e=[[0,0,0],[0,0,0],[0,0,0]],r=0;r<e.length;r++)e[r]=t[r].slice(0,3);return{elements:e}}return n.identity()},n.identity=function(){return{elements:[[1,0,0],[0,1,0],[0,0,1]]}},n.set=function(n,t,e,r,i,a,o,u,c,l){var s=n.elements;s[0][0]=t,s[0][1]=e,s[0][2]=r,s[1][0]=i,s[1][1]=a,s[1][2]=o,s[2][0]=u,s[2][1]=c,s[2][2]=l},n.clone=function(t){for(var e=n.create(),r=0;r<t.elements.length;r++)e.elements[r]=t.elements[r].slice(0,3);return e},n.copy=function(n,t){for(var e=0;e<n.elements.length;e++)t.elements[e]=n.elements[e].slice(0,3)},n.absoluteElements=function(t){for(var e=n.clone(t),r=0;r<e.elements.length;r++)for(var i=0;i<e.elements[r].length;i++)e.elements[r][i]=Math.abs(e.elements[r][i]);return e},n.add=function(t,e){for(var r=n.clone(t),i=0;i<r.elements.length;i++)for(var a=0;a<r.elements[i].length;a++)r.elements[i][a]+=e.elements[i][a];return r},n.multiplyScalar=function(t,e){var r=n.clone(t),i=r.elements;return i[0][0]*=e,i[0][1]*=e,i[0][2]*=e,i[1][0]*=e,i[1][1]*=e,i[1][2]*=e,i[2][0]*=e,i[2][1]*=e,i[2][2]*=e,r},n.multiply=function(t,e){var r=n.create(),i=t.elements,a=e.elements,o=r.elements,u=i[0][0],c=i[0][1],l=i[0][2],s=i[1][0],x=i[1][1],f=i[1][2],y=i[2][0],m=i[2][1],d=i[2][2],h=a[0][0],v=a[0][1],z=a[0][2],M=a[1][0],g=a[1][1],w=a[1][2],p=a[2][0],P=a[2][1],b=a[2][2];return o[0][0]=u*h+c*M+l*p,o[0][1]=u*v+c*g+l*P,o[0][2]=u*z+c*w+l*b,o[1][0]=s*h+x*M+f*p,o[1][1]=s*v+x*g+f*P,o[1][2]=s*z+x*w+f*b,o[2][0]=y*h+m*M+d*p,o[2][1]=y*v+m*g+d*P,o[2][2]=y*z+m*w+d*b,r},n.multiplyWithVector3=function(n,t){var e=t.elements,r=x.create(0,0,0),i=e[0][0],a=e[0][1],o=e[0][2],u=e[1][0],c=e[1][1],l=e[1][2],s=e[2][0],f=e[2][1],y=e[2][2];return r.x=i*n.x+a*n.y+o*n.z,r.y=u*n.x+c*n.y+l*n.z,r.z=s*n.x+f*n.y+y*n.z,r},n.getInverse=function(t){var e=n.create(),r=t.elements,i=e.elements,a=r[0][0],o=r[0][1],u=r[0][2],c=r[1][0],l=r[1][1],s=r[1][2],x=r[2][0],f=r[2][1],y=r[2][2],m=y*l-s*f,d=s*x-y*c,h=f*c-l*x,v=a*m+o*d+u*h;if(0!==v){var z=1/v;return i[0][0]=m*z,i[0][1]=(u*f-y*o)*z,i[0][2]=(s*o-u*l)*z,i[1][0]=d*z,i[1][1]=(y*a-u*x)*z,i[1][2]=(u*c-s*a)*z,i[2][0]=h*z,i[2][1]=(o*x-f*a)*z,i[2][2]=(l*a-o*c)*z,e}console.warn(".getInverse3() can't invert matrix, determinant is 0")},n.transpose=function(t){var e,r=n.clone(t),i=r.elements;return e=i[0][1],i[0][1]=i[1][0],i[1][0]=e,e=i[0][2],i[0][2]=i[2][0],i[2][0]=e,e=i[1][2],i[1][2]=i[2][1],i[2][1]=e,r},n.getScale=function(t){return n.create([[t.x,0,0],[0,t.y,0],[0,0,t.z]])},n.makeRotationMatrixFromNormalVector=function(t,e){var r=t,i=r.x,a=r.y,o=r.z,u=e,c=1-Math.cos(u),l=Math.sin(u),s=Math.cos(u);return n.create([[i*i*c+s,i*a*c-o*l,i*o*c+a*l],[a*i*c+o*l,a*a*c+s,a*o*c-i*l],[o*i*c-a*l,o*a*c+i*l,o*o*c+s]])},n.getXRotationMatrix=function(t){return n.create([[1,0,0],[0,Math.cos(t),-Math.sin(t)],[0,Math.sin(t),Math.cos(t)]])},n.getYRotationMatrix=function(t){return n.create([[Math.cos(t),0,Math.sin(t)],[0,1,0],[-Math.sin(t),0,Math.cos(t)]])},n.getZRotationMatrix=function(t){return n.create([[Math.cos(t),-Math.sin(t),0],[Math.sin(t),Math.cos(t),0],[0,0,1]])},n.determinant=function(n){var t=n.elements,e=t[0][0],r=t[0][1],i=t[0][2],a=t[1][0],o=t[1][1],u=t[1][2],c=t[2][0],l=t[2][1],s=t[2][2];return e*o*s-e*u*l-r*a*s+r*u*c+i*a*l-i*o*c},n.equals=function(n,t){if(n.elements.length!==t.elements.length)return console.warn("Matrices must be of the same type!"),!1;for(var e=n.elements,r=t.elements,i=0;i<e.length;i++)for(var a=0;a<e[i].length;a++)if(e[i][a]!==r[i][a])return!1;return!0},n.stringify=function(n){for(var t=n.elements,e=[0,0,0,0],r=0;r<3;r++)for(var i=0;i<3;i++){(o=t[i][r].toString().length)>e[r]&&(e[r]=o)}var a=new Array;for(i=0;i<3;i++){a[i]=new Array;for(r=0;r<3;r++){var o=t[i][r].toString().length;a[i][r]=" ".repeat(e[r]-o)}}return"\n["+a[0][0]+t[0][0]+", "+a[0][1]+t[0][1]+", "+a[0][2]+t[0][2]+"],\n["+a[1][0]+t[1][0]+", "+a[1][1]+t[1][1]+", "+a[1][2]+t[1][2]+"],\n["+a[2][0]+t[2][0]+", "+a[2][1]+t[2][1]+", "+a[2][2]+t[2][2]+"]\n"},n}(),y=function(){function n(n,t){this.point=n,this.border=t}return n.convertToLine=function(n){return{point:n.point,direction:n.border}},n}(),m=function(){function n(n,t){this.point=n,this.direction=t}return n.create=function(n,t){return{point:x.clone(n),direction:x.clone(t)}},n.clone=function(t){return n.create(t.point,t.direction)},n}(),d=function(){function n(n,t,e){this.point=n,this.borderU=t,this.borderV=e}return n.convertToPlane=function(n){var t=x.crossProduct(n.borderU,n.borderV);return{point:n.point,normal:t}},n}(),h=function(){function n(n,t){this.normal=n,this.point=t}return n.create=function(n,t){return{point:x.clone(n),normal:x.clone(t)}},n.clone=function(t){return n.create(t.point,t.normal)},n}();function v(n,t){var e=z(n,t);if(null===e)return null;var r=x.scalarMultiply(e,n.direction),i=x.addOnFirst(r,n.origin);return void 0===i?null:i}function z(n,t){var e=x.innerProduct(t.normal,n.direction),r=-x.innerProduct(t.point,t.normal);if(0===e)return 0===x.innerProduct(t.normal,n.origin)+r?0:null;var i=-(x.innerProduct(n.origin,t.normal)+r)/e;return i>=0?i:null}function M(n,t){var e=v({origin:n,direction:t.normal},t);return e||(e=v({origin:n,direction:x.reverse(t.normal)},t))}function g(n,t){var e={point:t,normal:n.direction};return M(n.point,e)}function w(n,t){var e=M(t,d.convertToPlane(n));if(I(n,e))return e;for(var r=F(n),i=p(r[0],e),a=0,o=1;o<r.length;o++){var u=p(r[o],e);u<i&&(i=u,a=o)}return b(r[a],e)}function p(n,t){var e=g({point:n.point,direction:n.border},t);return P(n,e)?x.distance(t,e):Math.min(x.distance(t,n.point),x.distance(t,x.add(n.point,n.border)))}function P(n,t){var e=x.sub(t,n.point),r=x.innerProduct(n.border,e),i=x.innerProduct(n.border,n.border);return 0<=r&&r<=i}function b(n,t){var e=g(y.convertToLine(n),t);if(P(n,e))return e;var r=n.point,i=x.add(n.point,n.border);return x.distance(r,t)<x.distance(i,t)?r:i}function I(n,t){var e=x.sub(t,n.point),r=n.borderU,i=x.innerProduct(r,e),a=x.innerProduct(r,r),o=0<=i&&i<=a;if(!o)return!1;var u=n.borderV,c=x.innerProduct(u,e),l=x.innerProduct(u,u);return o&&(0<=c&&c<=l)}function F(n){var t=x.add(n.point,n.borderU,n.borderV);return[{point:n.point,border:n.borderU},{point:n.point,border:n.borderV},{point:t,border:x.reverse(n.borderU)},{point:t,border:x.reverse(n.borderV)}]}var S=Object.freeze({__proto__:null,getIntersectionPoint:v,factorOfDirectionFromRayToPlane:z,projectToPlane:M,isInUpperHalfSpace:function(n,t){var e=x.sub(n,t.point);return x.innerProduct(e,t.normal)>=0},isInLowerHalfSpace:function(n,t){var e=x.sub(n,t.point);return x.innerProduct(e,t.normal)<=0},distanceToPlane:function(n,t){var e=M(n,t);return x.distance(e,n)},closestPointOnLine:g,distanceToPlaneSegment:function(n,t){var e=w(n,t);return x.distance(t,e)},projectToPlaneSegment:w,distanceToLineSegment:p,isPointOnLineSegment:P,projectToLineSegment:b,isInsidePlaneSegment:I,lineSegmentsOfPlaneSegment:F,rotateVectorAAroundPointBByNormalCWithRadiantAngle:function(n,t,e,r){var i=f.makeRotationMatrixFromNormalVector(e,r),a=x.sub(n,t),o=f.multiplyWithVector3(a,i);return x.add(t,o)},getOrderedIntersectionFactor:function(n,t){var e=z(n,t);if(null===e){var r=z({origin:n.origin,direction:x.scalarMultiply(-1,n.direction)},t);return null===r?null:-r}return e},intersectPlanes:function(n,t){if(!n)return null;if(!t)return null;var e=x.crossProduct(n.normal,t.normal);if(x.magnitude(e)<1e-6)return null;e=x.normalize(e);var r,i=n.point.x,a=n.point.y,o=n.point.z,u=t.point.x,c=t.point.y,l=t.point.z,s=- -(n.normal.x*i+n.normal.y*a+n.normal.z*o),f=- -(t.normal.x*u+t.normal.y*c+t.normal.z*l),y=n.normal,m=t.normal,d=x.innerProduct(y,y)*x.innerProduct(m,m)-x.innerProduct(y,m)*x.innerProduct(y,m),h=(s*x.innerProduct(m,m)-f*x.innerProduct(y,m))/d,v=(f*x.innerProduct(y,y)-s*x.innerProduct(y,m))/d;return r=x.add(x.scalarMultiply(h,y),x.scalarMultiply(v,m)),console.log("origin:",r,"direction:",e),{origin:r,direction:e}},intersectionPoint:function(n,t){var e=z(n,t);if(null===e)return null;var r=x.scalarMultiply(e,n.direction);return x.add(r,n.origin)}});var A=Object.freeze({__proto__:null,tan:function(n){return n%Math.PI==Math.PI/2&&(console.warn("tan(x): undefined output! Using x = PI now."),n=0),Math.tan(n)},asin:function(n){return n>1?(console.warn("asin(x): x > 1",n),n=1):n<-1&&(console.warn("asin(x): x < -1",n),n=-1),Math.asin(n)},acos:function(n){return n>1?(console.warn("acos(x): x > 1",n),n=1):n<-1&&(console.warn("acos(x): x < -1",n),n=-1),Math.acos(n)},sqrt:function(n){return n<0&&(console.warn("sqrt(x): x < 0",n),n=0),Math.sqrt(n)}}),R=function(){function n(n,t){this.x=n,this.y=t}return n.create=function(n,t){return void 0===n&&(n=0),void 0===t&&(t=0),{x:n,y:t}},n.clone=function(n){return{x:n.x,y:n.y}},n.copy=function(n,t){t.x=n.x,t.y=n.y},n.isEqual=function(t,e,r){void 0===r&&(r=0);var i=n.sub(t,e);return Math.abs(i.x)<=r&&Math.abs(i.y)<=r},n.absoluteComponents=function(n){return{x:Math.abs(n.x),y:Math.abs(n.y)}},n.normalize=function(t,e){void 0===e&&(e=1);var r=n.magnitude(t);if(0!==r)return n.scalarMultiply(e/r,t)},n.normalizeInPlace=function(t,e){void 0===e&&(e=1);var r=n.magnitude(t);0!==r&&n.scalarMultiplyInPlace(e/r,t)},n.add=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var r=n.create(),i=t.length,a=0;a<i;a++){var o=t[a];r.x+=o.x,r.y+=o.y}return r},n.addOnFirst=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=n.length;if(e>0){for(var r=n[0],i=void 0,a=1;a<e;a++)i=n[a],r.x+=i.x,r.y+=i.y;return r}},n.sub=function(n,t){return{x:n.x-t.x,y:n.y-t.y}},n.subOnFirst=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=n.length;if(e>0){for(var r=n[0],i=void 0,a=1;a<e;a++)i=n[a],r.x-=i.x,r.y-=i.y;return r}},n.innerProduct=function(n,t){return n.x*t.x+n.y*t.y},n.scalarAdd=function(n,t){return{x:n+t.x,y:n+t.y}},n.scalarAddInPlace=function(n,t){t.x+=n,t.y+=n},n.scalarMultiply=function(n,t){return{x:n*t.x,y:n*t.y}},n.scalarMultiplyInPlace=function(n,t){t.x*=n,t.y*=n},n.magnitude=function(n){return Math.sqrt(n.x*n.x+n.y*n.y)},n.magnitudeSquared=function(n){return n.x*n.x+n.y*n.y},n.distance=function(n,t){var e=n.x-t.x,r=n.y-t.y;return Math.sqrt(e*e+r*r)},n.maximizeInPlace=function(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];for(var r=0,i=t.length;r<i;++r){var a=t[r];n.x=Math.max(n.x,a.x),n.y=Math.max(n.y,a.y)}},n.minimizeInPlace=function(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];for(var r=0,i=t.length;r<i;++r){var a=t[r];n.x=Math.min(n.x,a.x),n.y=Math.min(n.y,a.y)}},n.reverse=function(n){return{x:-n.x,y:-n.y}},n.reverseInPlace=function(n){return n.x=-n.x,n.y=-n.y,n},n.angleBetween=function(n,t){var e=Math.sqrt(t.x*t.x+t.y*t.y),i=Math.sqrt(n.x*n.x+n.y*n.y),a=(n.x*t.x+n.y*t.y)/(e*i);return Math.acos(r(a,-1,1))},n.stringify=function(n,t){return void 0===t&&(t=3),"{x: "+n.x.toFixed(t)+", y: "+n.y.toFixed(t)+"}"},n.hasInvalidEntries=function(n){var t=n.x*n.y;return isNaN(t)||!isFinite(t)},n}(),q=function(){function n(n,t){this.origin=n,this.direction=t}return n.create=function(n,t){return{origin:x.clone(n),direction:x.clone(t)}},n.clone=function(t){return n.create(t.origin,t.direction)},n}(),T=function(){function n(n,t){this.position=n,this.rotation=t}return n.create=function(n,t){return{position:x.clone(n),rotation:x.clone(t)}},n.clone=function(t){return n.create(t.position,t.rotation)},n}(),O=function(){function n(n,t){this.min=n,this.max=t}return n.create=function(t,e){void 0===t&&(t=x.create(1/0,1/0,1/0)),void 0===e&&(e=x.create(-1/0,-1/0,-1/0));var r={min:x.clone(t),max:x.clone(e)};return n.areValid(r)&&n.ensureBoundsAreAssorted(r),r},n.clone=function(t){return n.create(t.min,t.max)},n.areValid=function(n){var t=x.innerProduct(n.min,n.max);return isFinite(t)&&!isNaN(t)},n.doIntersect=function(n,t){return!(n.max.x<=t.min.x||n.min.x>=t.max.x||n.max.y<=t.min.y||n.min.y>=t.max.y||n.max.z<=t.min.z||n.min.z>=t.max.z)},n.isPointInBounds=function(n,t,e){return void 0===e&&(e=0),n.max.x+e>=t.x&&n.min.x-e<=t.x&&n.max.y+e>=t.y&&n.min.y-e<=t.y&&n.max.z+e>=t.z&&n.min.z-e<=t.z},n.ensureBoundsAreAssorted=function(n){var t;n.min.x>n.max.x&&(t=n.min.x,n.min.x=n.max.x,n.max.x=t),n.min.y>n.max.y&&(t=n.min.y,n.min.y=n.max.y,n.max.y=t),n.min.z>n.max.z&&(t=n.min.z,n.min.z=n.max.z,n.max.z=t)},n.extendInPlace=function(n,t){n.min.x=Math.min(n.min.x,t.x),n.min.y=Math.min(n.min.y,t.y),n.min.z=Math.min(n.min.z,t.z),n.max.x=Math.max(n.max.x,t.x),n.max.y=Math.max(n.max.y,t.y),n.max.z=Math.max(n.max.z,t.z)},n.merge=function(t,e){var r=n.clone(t);return n.extendInPlace(r,e.min),n.extendInPlace(r,e.max),r},n.convertToXZPlaneSegment=function(n){var t=x.sub(n.max,n.min);return{point:{x:n.min.x,y:0,z:n.min.z},borderU:{x:t.x,y:0,z:0},borderV:{x:0,y:0,z:t.z}}},n.stringify=function(n,t){return void 0===t&&(t=3),"{min: {x: "+n.min.x.toFixed(t)+", y: "+n.min.y.toFixed(t)+", z: "+n.min.z.toFixed(t)+"}, max: {x: "+n.max.x.toFixed(t)+", y: "+n.max.y.toFixed(t)+", z: "+n.max.z.toFixed(t)+"}}"},n.getSize=function(n){var t=x.create();return t.x=Math.abs(n.max.x-n.min.x),t.y=Math.abs(n.max.y-n.min.y),t.z=Math.abs(n.max.z-n.min.z),t},n.getCenter=function(n){return x.scalarMultiply(.5,x.add(n.max,n.min))},n}();if("undefined"!=typeof window){var V=new Date(Date.now()).getFullYear(),_="IG.Math 1.0.0 (1.0.0.100)";_+=". Copyright (C) "+(2019===V?2019:"2019 - "+V)+" intelligentgraphics. All Rights Reserved.",console.log(_)}return n.Bounds=O,n.Deg2Rad=t,n.Euler=u,n.Line=m,n.LineSegment=y,n.LinearAlgebra=S,n.MathS=A,n.Matrix3=f,n.Matrix4=s,n.Plane=h,n.PlaneSegment=d,n.Quaternion=l,n.Rad2Deg=e,n.Ray=q,n.Transformation=T,n.Vector2=R,n.Vector3=x,n.Vector4=c,n.arithmeticMean=function(n){return n&&0!==n.length?n.reduce((function(n,t){return n+t}))/n.length:null},n.cartToPolarDeg=function(n){var t=i(n);return{azimuth:180*t.azimuth/Math.PI,elevation:180*t.elevation/Math.PI,radius:t.radius}},n.cartToPolarRad=i,n.clamp=r,n.copysign=function(n,t){return t>=0?Math.abs(n):-1*Math.abs(n)},n.degToRad=function(n){return n*t},n.isCloseTo=function(n,t,e){return void 0===e&&(e=.01),Math.abs(n-t)<=e},n.median=function(n){if(!n||0===n.length)return null;var t=n.slice().sort(),e=Math.floor((n.length-1)/2),r=Math.ceil((n.length-1)/2);return t[e]/2+t[r]/2},n.polarToCartDeg=function(n,t,e){return a(n/180*Math.PI,t/180*Math.PI,e)},n.polarToCartRad=a,n.radToDeg=function(n){return n*e},n}({});