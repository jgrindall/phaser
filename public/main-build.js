define('phaser',[], function(){
	

/* Phaser v2.0.7 - http://phaser.io - @photonstorm - (c) 2014 Photon Storm Ltd. */

(function(){var a=this,b=b||{};b.WEBGL_RENDERER=0,b.CANVAS_RENDERER=1,b.VERSION="v1.6.1",b.blendModes={NORMAL:0,ADD:1,MULTIPLY:2,SCREEN:3,OVERLAY:4,DARKEN:5,LIGHTEN:6,COLOR_DODGE:7,COLOR_BURN:8,HARD_LIGHT:9,SOFT_LIGHT:10,DIFFERENCE:11,EXCLUSION:12,HUE:13,SATURATION:14,COLOR:15,LUMINOSITY:16},b.scaleModes={DEFAULT:0,LINEAR:0,NEAREST:1},b._UID=0,"undefined"!=typeof Float32Array?(b.Float32Array=Float32Array,b.Uint16Array=Uint16Array):(b.Float32Array=Array,b.Uint16Array=Array),b.INTERACTION_FREQUENCY=30,b.AUTO_PREVENT_DEFAULT=!0,b.RAD_TO_DEG=180/Math.PI,b.DEG_TO_RAD=Math.PI/180,b.dontSayHello=!1,b.sayHello=function(a){if(!b.dontSayHello){if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var c=["%c %c %c Pixi.js "+b.VERSION+" - "+a+"  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ ","background: #ff66a5","background: #ff66a5","color: #ff66a5; background: #030307;","background: #ff66a5","background: #ffc3dc","background: #ff66a5","color: #ff2424; background: #fff","color: #ff2424; background: #fff","color: #ff2424; background: #fff"];console.log.apply(console,c)}else window.console&&console.log("Pixi.js "+b.VERSION+" - http://www.pixijs.com/");b.dontSayHello=!0}},b.Point=function(a,b){this.x=a||0,this.y=b||0},b.Point.prototype.clone=function(){return new b.Point(this.x,this.y)},b.Point.prototype.set=function(a,b){this.x=a||0,this.y=b||(0!==b?this.x:0)},b.Point.prototype.constructor=b.Point,b.Rectangle=function(a,b,c,d){this.x=a||0,this.y=b||0,this.width=c||0,this.height=d||0},b.Rectangle.prototype.clone=function(){return new b.Rectangle(this.x,this.y,this.width,this.height)},b.Rectangle.prototype.contains=function(a,b){if(this.width<=0||this.height<=0)return!1;var c=this.x;if(a>=c&&a<=c+this.width){var d=this.y;if(b>=d&&b<=d+this.height)return!0}return!1},b.Rectangle.prototype.constructor=b.Rectangle,b.EmptyRectangle=new b.Rectangle(0,0,0,0),b.Polygon=function(a){if(a instanceof Array||(a=Array.prototype.slice.call(arguments)),"number"==typeof a[0]){for(var c=[],d=0,e=a.length;e>d;d+=2)c.push(new b.Point(a[d],a[d+1]));a=c}this.points=a},b.Polygon.prototype.clone=function(){for(var a=[],c=0;c<this.points.length;c++)a.push(this.points[c].clone());return new b.Polygon(a)},b.Polygon.prototype.contains=function(a,b){for(var c=!1,d=0,e=this.points.length-1;d<this.points.length;e=d++){var f=this.points[d].x,g=this.points[d].y,h=this.points[e].x,i=this.points[e].y,j=g>b!=i>b&&(h-f)*(b-g)/(i-g)+f>a;j&&(c=!c)}return c},b.Polygon.prototype.constructor=b.Polygon,b.Circle=function(a,b,c){this.x=a||0,this.y=b||0,this.radius=c||0},b.Circle.prototype.clone=function(){return new b.Circle(this.x,this.y,this.radius)},b.Circle.prototype.contains=function(a,b){if(this.radius<=0)return!1;var c=this.x-a,d=this.y-b,e=this.radius*this.radius;return c*=c,d*=d,e>=c+d},b.Circle.prototype.getBounds=function(){return new b.Rectangle(this.x-this.radius,this.y-this.radius,this.width,this.height)},b.Circle.prototype.constructor=b.Circle,b.Ellipse=function(a,b,c,d){this.x=a||0,this.y=b||0,this.width=c||0,this.height=d||0},b.Ellipse.prototype.clone=function(){return new b.Ellipse(this.x,this.y,this.width,this.height)},b.Ellipse.prototype.contains=function(a,b){if(this.width<=0||this.height<=0)return!1;var c=(a-this.x)/this.width,d=(b-this.y)/this.height;return c*=c,d*=d,1>=c+d},b.Ellipse.prototype.getBounds=function(){return new b.Rectangle(this.x-this.width,this.y-this.height,this.width,this.height)},b.Ellipse.prototype.constructor=b.Ellipse,b.Matrix=function(){this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0},b.Matrix.prototype.fromArray=function(a){this.a=a[0],this.b=a[1],this.c=a[3],this.d=a[4],this.tx=a[2],this.ty=a[5]},b.Matrix.prototype.toArray=function(a){this.array||(this.array=new Float32Array(9));var b=this.array;return a?(b[0]=this.a,b[1]=this.c,b[2]=0,b[3]=this.b,b[4]=this.d,b[5]=0,b[6]=this.tx,b[7]=this.ty,b[8]=1):(b[0]=this.a,b[1]=this.b,b[2]=this.tx,b[3]=this.c,b[4]=this.d,b[5]=this.ty,b[6]=0,b[7]=0,b[8]=1),b},b.identityMatrix=new b.Matrix,b.determineMatrixArrayType=function(){return"undefined"!=typeof Float32Array?Float32Array:Array},b.Matrix2=b.determineMatrixArrayType(),b.DisplayObject=function(){this.position=new b.Point,this.scale=new b.Point(1,1),this.pivot=new b.Point(0,0),this.rotation=0,this.alpha=1,this.visible=!0,this.hitArea=null,this.buttonMode=!1,this.renderable=!1,this.parent=null,this.stage=null,this.worldAlpha=1,this._interactive=!1,this.defaultCursor="pointer",this.worldTransform=new b.Matrix,this.color=[],this.dynamic=!0,this._sr=0,this._cr=1,this.filterArea=null,this._bounds=new b.Rectangle(0,0,1,1),this._currentBounds=null,this._mask=null,this._cacheAsBitmap=!1,this._cacheIsDirty=!1},b.DisplayObject.prototype.constructor=b.DisplayObject,b.DisplayObject.prototype.setInteractive=function(a){this.interactive=a},Object.defineProperty(b.DisplayObject.prototype,"interactive",{get:function(){return this._interactive},set:function(a){this._interactive=a,this.stage&&(this.stage.dirty=!0)}}),Object.defineProperty(b.DisplayObject.prototype,"worldVisible",{get:function(){var a=this;do{if(!a.visible)return!1;a=a.parent}while(a);return!0}}),Object.defineProperty(b.DisplayObject.prototype,"mask",{get:function(){return this._mask},set:function(a){this._mask&&(this._mask.isMask=!1),this._mask=a,this._mask&&(this._mask.isMask=!0)}}),Object.defineProperty(b.DisplayObject.prototype,"filters",{get:function(){return this._filters},set:function(a){if(a){for(var b=[],c=0;c<a.length;c++)for(var d=a[c].passes,e=0;e<d.length;e++)b.push(d[e]);this._filterBlock={target:this,filterPasses:b}}this._filters=a}}),Object.defineProperty(b.DisplayObject.prototype,"cacheAsBitmap",{get:function(){return this._cacheAsBitmap},set:function(a){this._cacheAsBitmap!==a&&(a?this._generateCachedSprite():this._destroyCachedSprite(),this._cacheAsBitmap=a)}}),b.DisplayObject.prototype.updateTransform=function(){this.rotation!==this.rotationCache&&(this.rotationCache=this.rotation,this._sr=Math.sin(this.rotation),this._cr=Math.cos(this.rotation));var a=this.parent.worldTransform,b=this.worldTransform,c=this.pivot.x,d=this.pivot.y,e=this._cr*this.scale.x,f=-this._sr*this.scale.y,g=this._sr*this.scale.x,h=this._cr*this.scale.y,i=this.position.x-e*c-d*f,j=this.position.y-h*d-c*g,k=a.a,l=a.b,m=a.c,n=a.d;b.a=k*e+l*g,b.b=k*f+l*h,b.tx=k*i+l*j+a.tx,b.c=m*e+n*g,b.d=m*f+n*h,b.ty=m*i+n*j+a.ty,this.worldAlpha=this.alpha*this.parent.worldAlpha},b.DisplayObject.prototype.getBounds=function(a){return a=a,b.EmptyRectangle},b.DisplayObject.prototype.getLocalBounds=function(){return this.getBounds(b.identityMatrix)},b.DisplayObject.prototype.setStageReference=function(a){this.stage=a,this._interactive&&(this.stage.dirty=!0)},b.DisplayObject.prototype.generateTexture=function(a){var c=this.getLocalBounds(),d=new b.RenderTexture(0|c.width,0|c.height,a);return d.render(this,new b.Point(-c.x,-c.y)),d},b.DisplayObject.prototype.updateCache=function(){this._generateCachedSprite()},b.DisplayObject.prototype._renderCachedSprite=function(a){this._cachedSprite.worldAlpha=this.worldAlpha,a.gl?b.Sprite.prototype._renderWebGL.call(this._cachedSprite,a):b.Sprite.prototype._renderCanvas.call(this._cachedSprite,a)},b.DisplayObject.prototype._generateCachedSprite=function(){this._cacheAsBitmap=!1;var a=this.getLocalBounds();if(this._cachedSprite)this._cachedSprite.texture.resize(0|a.width,0|a.height);else{var c=new b.RenderTexture(0|a.width,0|a.height);this._cachedSprite=new b.Sprite(c),this._cachedSprite.worldTransform=this.worldTransform}var d=this._filters;this._filters=null,this._cachedSprite.filters=d,this._cachedSprite.texture.render(this,new b.Point(-a.x,-a.y)),this._cachedSprite.anchor.x=-(a.x/a.width),this._cachedSprite.anchor.y=-(a.y/a.height),this._filters=d,this._cacheAsBitmap=!0},b.DisplayObject.prototype._destroyCachedSprite=function(){this._cachedSprite&&(this._cachedSprite.texture.destroy(!0),this._cachedSprite=null)},b.DisplayObject.prototype._renderWebGL=function(a){a=a},b.DisplayObject.prototype._renderCanvas=function(a){a=a},Object.defineProperty(b.DisplayObject.prototype,"x",{get:function(){return this.position.x},set:function(a){this.position.x=a}}),Object.defineProperty(b.DisplayObject.prototype,"y",{get:function(){return this.position.y},set:function(a){this.position.y=a}}),b.DisplayObjectContainer=function(){b.DisplayObject.call(this),this.children=[]},b.DisplayObjectContainer.prototype=Object.create(b.DisplayObject.prototype),b.DisplayObjectContainer.prototype.constructor=b.DisplayObjectContainer,Object.defineProperty(b.DisplayObjectContainer.prototype,"width",{get:function(){return this.scale.x*this.getLocalBounds().width},set:function(a){var b=this.getLocalBounds().width;this.scale.x=0!==b?a/(b/this.scale.x):1,this._width=a}}),Object.defineProperty(b.DisplayObjectContainer.prototype,"height",{get:function(){return this.scale.y*this.getLocalBounds().height},set:function(a){var b=this.getLocalBounds().height;this.scale.y=0!==b?a/(b/this.scale.y):1,this._height=a}}),b.DisplayObjectContainer.prototype.addChild=function(a){return this.addChildAt(a,this.children.length)},b.DisplayObjectContainer.prototype.addChildAt=function(a,b){if(b>=0&&b<=this.children.length)return a.parent&&a.parent.removeChild(a),a.parent=this,this.children.splice(b,0,a),this.stage&&a.setStageReference(this.stage),a;throw new Error(a+" The index "+b+" supplied is out of bounds "+this.children.length)},b.DisplayObjectContainer.prototype.swapChildren=function(a,b){if(a!==b){var c=this.children.indexOf(a),d=this.children.indexOf(b);if(0>c||0>d)throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.");this.children[c]=b,this.children[d]=a}},b.DisplayObjectContainer.prototype.getChildAt=function(a){if(a>=0&&a<this.children.length)return this.children[a];throw new Error("Supplied index does not exist in the child list, or the supplied DisplayObject must be a child of the caller")},b.DisplayObjectContainer.prototype.removeChild=function(a){return this.removeChildAt(this.children.indexOf(a))},b.DisplayObjectContainer.prototype.removeChildAt=function(a){var b=this.getChildAt(a);return this.stage&&b.removeStageReference(),b.parent=void 0,this.children.splice(a,1),b},b.DisplayObjectContainer.prototype.removeChildren=function(a,b){var c=a||0,d="number"==typeof b?b:this.children.length,e=d-c;if(e>0&&d>=e){for(var f=this.children.splice(c,e),g=0;g<f.length;g++){var h=f[g];this.stage&&h.removeStageReference(),h.parent=void 0}return f}throw new Error("Range Error, numeric values are outside the acceptable range")},b.DisplayObjectContainer.prototype.updateTransform=function(){if(this.visible&&(b.DisplayObject.prototype.updateTransform.call(this),!this._cacheAsBitmap))for(var a=0,c=this.children.length;c>a;a++)this.children[a].updateTransform()},b.DisplayObjectContainer.prototype.getBounds=function(a){if(0===this.children.length)return b.EmptyRectangle;if(a){var c=this.worldTransform;this.worldTransform=a,this.updateTransform(),this.worldTransform=c}for(var d,e,f,g=1/0,h=1/0,i=-1/0,j=-1/0,k=!1,l=0,m=this.children.length;m>l;l++){var n=this.children[l];n.visible&&(k=!0,d=this.children[l].getBounds(a),g=g<d.x?g:d.x,h=h<d.y?h:d.y,e=d.width+d.x,f=d.height+d.y,i=i>e?i:e,j=j>f?j:f)}if(!k)return b.EmptyRectangle;var o=this._bounds;return o.x=g,o.y=h,o.width=i-g,o.height=j-h,o},b.DisplayObjectContainer.prototype.getLocalBounds=function(){var a=this.worldTransform;this.worldTransform=b.identityMatrix;for(var c=0,d=this.children.length;d>c;c++)this.children[c].updateTransform();var e=this.getBounds();return this.worldTransform=a,e},b.DisplayObjectContainer.prototype.setStageReference=function(a){this.stage=a,this._interactive&&(this.stage.dirty=!0);for(var b=0,c=this.children.length;c>b;b++){var d=this.children[b];d.setStageReference(a)}},b.DisplayObjectContainer.prototype.removeStageReference=function(){for(var a=0,b=this.children.length;b>a;a++){var c=this.children[a];c.removeStageReference()}this._interactive&&(this.stage.dirty=!0),this.stage=null},b.DisplayObjectContainer.prototype._renderWebGL=function(a){if(this.visible&&!(this.alpha<=0)){if(this._cacheAsBitmap)return void this._renderCachedSprite(a);var b,c;if(this._mask||this._filters){for(this._filters&&(a.spriteBatch.flush(),a.filterManager.pushFilter(this._filterBlock)),this._mask&&(a.spriteBatch.stop(),a.maskManager.pushMask(this.mask,a),a.spriteBatch.start()),b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a);a.spriteBatch.stop(),this._mask&&a.maskManager.popMask(this._mask,a),this._filters&&a.filterManager.popFilter(),a.spriteBatch.start()}else for(b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a)}},b.DisplayObjectContainer.prototype._renderCanvas=function(a){if(this.visible!==!1&&0!==this.alpha){if(this._cacheAsBitmap)return void this._renderCachedSprite(a);this._mask&&a.maskManager.pushMask(this._mask,a.context);for(var b=0,c=this.children.length;c>b;b++){var d=this.children[b];d._renderCanvas(a)}this._mask&&a.maskManager.popMask(a.context)}},b.Sprite=function(a){b.DisplayObjectContainer.call(this),this.anchor=new b.Point,this.texture=a,this._width=0,this._height=0,this.tint=16777215,this.blendMode=b.blendModes.NORMAL,a.baseTexture.hasLoaded?this.onTextureUpdate():(this.onTextureUpdateBind=this.onTextureUpdate.bind(this),this.texture.addEventListener("update",this.onTextureUpdateBind)),this.renderable=!0},b.Sprite.prototype=Object.create(b.DisplayObjectContainer.prototype),b.Sprite.prototype.constructor=b.Sprite,Object.defineProperty(b.Sprite.prototype,"width",{get:function(){return this.scale.x*this.texture.frame.width},set:function(a){this.scale.x=a/this.texture.frame.width,this._width=a}}),Object.defineProperty(b.Sprite.prototype,"height",{get:function(){return this.scale.y*this.texture.frame.height},set:function(a){this.scale.y=a/this.texture.frame.height,this._height=a}}),b.Sprite.prototype.setTexture=function(a){this.texture=a,this.cachedTint=16777215},b.Sprite.prototype.onTextureUpdate=function(){this._width&&(this.scale.x=this._width/this.texture.frame.width),this._height&&(this.scale.y=this._height/this.texture.frame.height)},b.Sprite.prototype.getBounds=function(a){var b=this.texture.frame.width,c=this.texture.frame.height,d=b*(1-this.anchor.x),e=b*-this.anchor.x,f=c*(1-this.anchor.y),g=c*-this.anchor.y,h=a||this.worldTransform,i=h.a,j=h.c,k=h.b,l=h.d,m=h.tx,n=h.ty,o=i*e+k*g+m,p=l*g+j*e+n,q=i*d+k*g+m,r=l*g+j*d+n,s=i*d+k*f+m,t=l*f+j*d+n,u=i*e+k*f+m,v=l*f+j*e+n,w=-1/0,x=-1/0,y=1/0,z=1/0;y=y>o?o:y,y=y>q?q:y,y=y>s?s:y,y=y>u?u:y,z=z>p?p:z,z=z>r?r:z,z=z>t?t:z,z=z>v?v:z,w=o>w?o:w,w=q>w?q:w,w=s>w?s:w,w=u>w?u:w,x=p>x?p:x,x=r>x?r:x,x=t>x?t:x,x=v>x?v:x;var A=this._bounds;return A.x=y,A.width=w-y,A.y=z,A.height=x-z,this._currentBounds=A,A},b.Sprite.prototype._renderWebGL=function(a){if(this.visible&&!(this.alpha<=0)){var b,c;if(this._mask||this._filters){var d=a.spriteBatch;for(this._filters&&(d.flush(),a.filterManager.pushFilter(this._filterBlock)),this._mask&&(d.stop(),a.maskManager.pushMask(this.mask,a),d.start()),d.render(this),b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a);d.stop(),this._mask&&a.maskManager.popMask(this._mask,a),this._filters&&a.filterManager.popFilter(),d.start()}else for(a.spriteBatch.render(this),b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a)}},b.Sprite.prototype._renderCanvas=function(a){if(this.visible!==!1&&0!==this.alpha){if(this.blendMode!==a.currentBlendMode&&(a.currentBlendMode=this.blendMode,a.context.globalCompositeOperation=b.blendModesCanvas[a.currentBlendMode]),this._mask&&a.maskManager.pushMask(this._mask,a.context),this.texture.valid){a.context.globalAlpha=this.worldAlpha,a.roundPixels?a.context.setTransform(this.worldTransform.a,this.worldTransform.c,this.worldTransform.b,this.worldTransform.d,0|this.worldTransform.tx,0|this.worldTransform.ty):a.context.setTransform(this.worldTransform.a,this.worldTransform.c,this.worldTransform.b,this.worldTransform.d,this.worldTransform.tx,this.worldTransform.ty),a.smoothProperty&&a.scaleMode!==this.texture.baseTexture.scaleMode&&(a.scaleMode=this.texture.baseTexture.scaleMode,a.context[a.smoothProperty]=a.scaleMode===b.scaleModes.LINEAR);var c=this.texture.trim?this.texture.trim.x-this.anchor.x*this.texture.trim.width:this.anchor.x*-this.texture.frame.width,d=this.texture.trim?this.texture.trim.y-this.anchor.y*this.texture.trim.height:this.anchor.y*-this.texture.frame.height;16777215!==this.tint?(this.cachedTint!==this.tint&&(this.cachedTint=this.tint,this.tintedTexture=b.CanvasTinter.getTintedTexture(this,this.tint)),a.context.drawImage(this.tintedTexture,0,0,this.texture.crop.width,this.texture.crop.height,c,d,this.texture.crop.width,this.texture.crop.height)):a.context.drawImage(this.texture.baseTexture.source,this.texture.crop.x,this.texture.crop.y,this.texture.crop.width,this.texture.crop.height,c,d,this.texture.crop.width,this.texture.crop.height)}for(var e=0,f=this.children.length;f>e;e++)this.children[e]._renderCanvas(a);this._mask&&a.maskManager.popMask(a.context)}},b.Sprite.fromFrame=function(a){var c=b.TextureCache[a];if(!c)throw new Error('The frameId "'+a+'" does not exist in the texture cache'+this);return new b.Sprite(c)},b.Sprite.fromImage=function(a,c,d){var e=b.Texture.fromImage(a,c,d);return new b.Sprite(e)},b.SpriteBatch=function(a){b.DisplayObjectContainer.call(this),this.textureThing=a,this.ready=!1},b.SpriteBatch.prototype=Object.create(b.DisplayObjectContainer.prototype),b.SpriteBatch.constructor=b.SpriteBatch,b.SpriteBatch.prototype.initWebGL=function(a){this.fastSpriteBatch=new b.WebGLFastSpriteBatch(a),this.ready=!0},b.SpriteBatch.prototype.updateTransform=function(){b.DisplayObject.prototype.updateTransform.call(this)},b.SpriteBatch.prototype._renderWebGL=function(a){!this.visible||this.alpha<=0||!this.children.length||(this.ready||this.initWebGL(a.gl),a.spriteBatch.stop(),a.shaderManager.setShader(a.shaderManager.fastShader),this.fastSpriteBatch.begin(this,a),this.fastSpriteBatch.render(this),a.spriteBatch.start())},b.SpriteBatch.prototype._renderCanvas=function(a){var c=a.context;c.globalAlpha=this.worldAlpha,b.DisplayObject.prototype.updateTransform.call(this);for(var d=this.worldTransform,e=!0,f=0;f<this.children.length;f++){var g=this.children[f];if(g.visible){var h=g.texture,i=h.frame;if(c.globalAlpha=this.worldAlpha*g.alpha,g.rotation%(2*Math.PI)===0)e&&(c.setTransform(d.a,d.c,d.b,d.d,d.tx,d.ty),e=!1),c.drawImage(h.baseTexture.source,i.x,i.y,i.width,i.height,g.anchor.x*-i.width*g.scale.x+g.position.x+.5|0,g.anchor.y*-i.height*g.scale.y+g.position.y+.5|0,i.width*g.scale.x,i.height*g.scale.y);else{e||(e=!0),b.DisplayObject.prototype.updateTransform.call(g);var j=g.worldTransform;a.roundPixels?c.setTransform(j.a,j.c,j.b,j.d,0|j.tx,0|j.ty):c.setTransform(j.a,j.c,j.b,j.d,j.tx,j.ty),c.drawImage(h.baseTexture.source,i.x,i.y,i.width,i.height,g.anchor.x*-i.width+.5|0,g.anchor.y*-i.height+.5|0,i.width,i.height)}}}},b.AbstractFilter=function(a,b){this.passes=[this],this.shaders=[],this.dirty=!0,this.padding=0,this.uniforms=b||{},this.fragmentSrc=a||[]},b.FilterBlock=function(){this.visible=!0,this.renderable=!0},b.Text=function(a,c){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),b.Sprite.call(this,b.Texture.fromCanvas(this.canvas)),this.setText(a),this.setStyle(c)},b.Text.prototype=Object.create(b.Sprite.prototype),b.Text.prototype.constructor=b.Text,Object.defineProperty(b.Text.prototype,"width",{get:function(){return this.dirty&&(this.updateText(),this.dirty=!1),this.scale.x*this.texture.frame.width},set:function(a){this.scale.x=a/this.texture.frame.width,this._width=a}}),Object.defineProperty(b.Text.prototype,"height",{get:function(){return this.dirty&&(this.updateText(),this.dirty=!1),this.scale.y*this.texture.frame.height},set:function(a){this.scale.y=a/this.texture.frame.height,this._height=a}}),b.Text.prototype.setStyle=function(a){a=a||{},a.font=a.font||"bold 20pt Arial",a.fill=a.fill||"black",a.align=a.align||"left",a.stroke=a.stroke||"black",a.strokeThickness=a.strokeThickness||0,a.wordWrap=a.wordWrap||!1,a.wordWrapWidth=a.wordWrapWidth||100,a.wordWrapWidth=a.wordWrapWidth||100,a.dropShadow=a.dropShadow||!1,a.dropShadowAngle=a.dropShadowAngle||Math.PI/6,a.dropShadowDistance=a.dropShadowDistance||4,a.dropShadowColor=a.dropShadowColor||"black",this.style=a,this.dirty=!0},b.Text.prototype.setText=function(a){this.text=a.toString()||" ",this.dirty=!0},b.Text.prototype.updateText=function(){this.context.font=this.style.font;var a=this.text;this.style.wordWrap&&(a=this.wordWrap(this.text));for(var b=a.split(/(?:\r\n|\r|\n)/),c=[],d=0,e=0;e<b.length;e++){var f=this.context.measureText(b[e]).width;c[e]=f,d=Math.max(d,f)}var g=d+this.style.strokeThickness;this.style.dropShadow&&(g+=this.style.dropShadowDistance),this.canvas.width=g+this.context.lineWidth;var h=this.determineFontHeight("font: "+this.style.font+";")+this.style.strokeThickness,i=h*b.length;this.style.dropShadow&&(i+=this.style.dropShadowDistance),this.canvas.height=i,navigator.isCocoonJS&&this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.font=this.style.font,this.context.strokeStyle=this.style.stroke,this.context.lineWidth=this.style.strokeThickness,this.context.textBaseline="top";var j,k;if(this.style.dropShadow){this.context.fillStyle=this.style.dropShadowColor;var l=Math.sin(this.style.dropShadowAngle)*this.style.dropShadowDistance,m=Math.cos(this.style.dropShadowAngle)*this.style.dropShadowDistance;for(e=0;e<b.length;e++)j=this.style.strokeThickness/2,k=this.style.strokeThickness/2+e*h,"right"===this.style.align?j+=d-c[e]:"center"===this.style.align&&(j+=(d-c[e])/2),this.style.fill&&this.context.fillText(b[e],j+l,k+m)}for(this.context.fillStyle=this.style.fill,e=0;e<b.length;e++)j=this.style.strokeThickness/2,k=this.style.strokeThickness/2+e*h,"right"===this.style.align?j+=d-c[e]:"center"===this.style.align&&(j+=(d-c[e])/2),this.style.stroke&&this.style.strokeThickness&&this.context.strokeText(b[e],j,k),this.style.fill&&this.context.fillText(b[e],j,k);this.updateTexture()},b.Text.prototype.updateTexture=function(){this.texture.baseTexture.width=this.canvas.width,this.texture.baseTexture.height=this.canvas.height,this.texture.crop.width=this.texture.frame.width=this.canvas.width,this.texture.crop.height=this.texture.frame.height=this.canvas.height,this._width=this.canvas.width,this._height=this.canvas.height,this.requiresUpdate=!0},b.Text.prototype._renderWebGL=function(a){this.requiresUpdate&&(this.requiresUpdate=!1,b.updateWebGLTexture(this.texture.baseTexture,a.gl)),b.Sprite.prototype._renderWebGL.call(this,a)},b.Text.prototype.updateTransform=function(){this.dirty&&(this.updateText(),this.dirty=!1),b.Sprite.prototype.updateTransform.call(this)},b.Text.prototype.determineFontHeight=function(a){var c=b.Text.heightCache[a];if(!c){var d=document.getElementsByTagName("body")[0],e=document.createElement("div"),f=document.createTextNode("M");e.appendChild(f),e.setAttribute("style",a+";position:absolute;top:0;left:0"),d.appendChild(e),c=e.offsetHeight,b.Text.heightCache[a]=c,d.removeChild(e)}return c},b.Text.prototype.wordWrap=function(a){for(var b="",c=a.split("\n"),d=0;d<c.length;d++){for(var e=this.style.wordWrapWidth,f=c[d].split(" "),g=0;g<f.length;g++){var h=this.context.measureText(f[g]).width,i=h+this.context.measureText(" ").width;0===g||i>e?(g>0&&(b+="\n"),b+=f[g],e=this.style.wordWrapWidth-h):(e-=i,b+=" "+f[g])}d<c.length-1&&(b+="\n")}return b},b.Text.prototype.destroy=function(a){this.context=null,this.canvas=null,this.texture.destroy(void 0===a?!0:a)},b.Text.heightCache={},b.BitmapText=function(a,c){b.DisplayObjectContainer.call(this),this._pool=[],this.setText(a),this.setStyle(c),this.updateText(),this.dirty=!1},b.BitmapText.prototype=Object.create(b.DisplayObjectContainer.prototype),b.BitmapText.prototype.constructor=b.BitmapText,b.BitmapText.prototype.setText=function(a){this.text=a||" ",this.dirty=!0},b.BitmapText.prototype.setStyle=function(a){a=a||{},a.align=a.align||"left",this.style=a;var c=a.font.split(" ");this.fontName=c[c.length-1],this.fontSize=c.length>=2?parseInt(c[c.length-2],10):b.BitmapText.fonts[this.fontName].size,this.dirty=!0,this.tint=a.tint},b.BitmapText.prototype.updateText=function(){for(var a=b.BitmapText.fonts[this.fontName],c=new b.Point,d=null,e=[],f=0,g=[],h=0,i=this.fontSize/a.size,j=0;j<this.text.length;j++){var k=this.text.charCodeAt(j);if(/(?:\r\n|\r|\n)/.test(this.text.charAt(j)))g.push(c.x),f=Math.max(f,c.x),h++,c.x=0,c.y+=a.lineHeight,d=null;else{var l=a.chars[k];l&&(d&&l[d]&&(c.x+=l.kerning[d]),e.push({texture:l.texture,line:h,charCode:k,position:new b.Point(c.x+l.xOffset,c.y+l.yOffset)}),c.x+=l.xAdvance,d=k)}}g.push(c.x),f=Math.max(f,c.x);var m=[];for(j=0;h>=j;j++){var n=0;"right"===this.style.align?n=f-g[j]:"center"===this.style.align&&(n=(f-g[j])/2),m.push(n)}var o=this.children.length,p=e.length,q=this.tint||16777215;for(j=0;p>j;j++){var r=o>j?this.children[j]:this._pool.pop();r?r.setTexture(e[j].texture):r=new b.Sprite(e[j].texture),r.position.x=(e[j].position.x+m[e[j].line])*i,r.position.y=e[j].position.y*i,r.scale.x=r.scale.y=i,r.tint=q,r.parent||this.addChild(r)}for(;this.children.length>p;){var s=this.getChildAt(this.children.length-1);this._pool.push(s),this.removeChild(s)}this.textWidth=f*i,this.textHeight=(c.y+a.lineHeight)*i},b.BitmapText.prototype.updateTransform=function(){this.dirty&&(this.updateText(),this.dirty=!1),b.DisplayObjectContainer.prototype.updateTransform.call(this)},b.BitmapText.fonts={},b.Stage=function(a){b.DisplayObjectContainer.call(this),this.worldTransform=new b.Matrix,this.interactive=!0,this.interactionManager=new b.InteractionManager(this),this.dirty=!0,this.stage=this,this.stage.hitArea=new b.Rectangle(0,0,1e5,1e5),this.setBackgroundColor(a)},b.Stage.prototype=Object.create(b.DisplayObjectContainer.prototype),b.Stage.prototype.constructor=b.Stage,b.Stage.prototype.setInteractionDelegate=function(a){this.interactionManager.setTargetDomElement(a)},b.Stage.prototype.updateTransform=function(){this.worldAlpha=1;for(var a=0,b=this.children.length;b>a;a++)this.children[a].updateTransform();this.dirty&&(this.dirty=!1,this.interactionManager.dirty=!0),this.interactive&&this.interactionManager.update()},b.Stage.prototype.setBackgroundColor=function(a){this.backgroundColor=a||0,this.backgroundColorSplit=b.hex2rgb(this.backgroundColor);var c=this.backgroundColor.toString(16);c="000000".substr(0,6-c.length)+c,this.backgroundColorString="#"+c},b.Stage.prototype.getMousePosition=function(){return this.interactionManager.mouse.global};for(var c=0,d=["ms","moz","webkit","o"],e=0;e<d.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[d[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[d[e]+"CancelAnimationFrame"]||window[d[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a){var b=(new Date).getTime(),d=Math.max(0,16-(b-c)),e=window.setTimeout(function(){a(b+d)},d);return c=b+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),window.requestAnimFrame=window.requestAnimationFrame,b.hex2rgb=function(a){return[(a>>16&255)/255,(a>>8&255)/255,(255&a)/255]},b.rgb2hex=function(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]},"function"!=typeof Function.prototype.bind&&(Function.prototype.bind=function(){var a=Array.prototype.slice;return function(b){function c(){var f=e.concat(a.call(arguments));d.apply(this instanceof c?this:b,f)}var d=this,e=a.call(arguments,1);if("function"!=typeof d)throw new TypeError;return c.prototype=function f(a){return a&&(f.prototype=a),this instanceof f?void 0:new f}(d.prototype),c}}()),b.AjaxRequest=function(){var a=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0","Microsoft.XMLHTTP"];if(!window.ActiveXObject)return window.XMLHttpRequest?new window.XMLHttpRequest:!1;for(var b=0;b<a.length;b++)try{return new window.ActiveXObject(a[b])}catch(c){}},b.canUseNewCanvasBlendModes=function(){var a=document.createElement("canvas");a.width=1,a.height=1;var b=a.getContext("2d");return b.fillStyle="#000",b.fillRect(0,0,1,1),b.globalCompositeOperation="multiply",b.fillStyle="#fff",b.fillRect(0,0,1,1),0===b.getImageData(0,0,1,1).data[0]},b.getNextPowerOfTwo=function(a){if(a>0&&0===(a&a-1))return a;for(var b=1;a>b;)b<<=1;return b},b.EventTarget=function(){var a={};this.addEventListener=this.on=function(b,c){void 0===a[b]&&(a[b]=[]),-1===a[b].indexOf(c)&&a[b].unshift(c)},this.dispatchEvent=this.emit=function(b){if(a[b.type]&&a[b.type].length)for(var c=a[b.type].length-1;c>=0;c--)a[b.type][c](b)},this.removeEventListener=this.off=function(b,c){if(void 0!==a[b]){var d=a[b].indexOf(c);-1!==d&&a[b].splice(d,1)}},this.removeAllEventListeners=function(b){var c=a[b];c&&(c.length=0)}},b.PolyK={},b.PolyK.Triangulate=function(a){var c=!0,d=a.length>>1;if(3>d)return[];for(var e=[],f=[],g=0;d>g;g++)f.push(g);g=0;for(var h=d;h>3;){var i=f[(g+0)%h],j=f[(g+1)%h],k=f[(g+2)%h],l=a[2*i],m=a[2*i+1],n=a[2*j],o=a[2*j+1],p=a[2*k],q=a[2*k+1],r=!1;if(b.PolyK._convex(l,m,n,o,p,q,c)){r=!0;for(var s=0;h>s;s++){var t=f[s];if(t!==i&&t!==j&&t!==k&&b.PolyK._PointInTriangle(a[2*t],a[2*t+1],l,m,n,o,p,q)){r=!1;break}}}if(r)e.push(i,j,k),f.splice((g+1)%h,1),h--,g=0;else if(g++>3*h){if(!c)return window.console.log("PIXI Warning: shape too complex to fill"),[];for(e=[],f=[],g=0;d>g;g++)f.push(g);g=0,h=d,c=!1}}return e.push(f[0],f[1],f[2]),e},b.PolyK._PointInTriangle=function(a,b,c,d,e,f,g,h){var i=g-c,j=h-d,k=e-c,l=f-d,m=a-c,n=b-d,o=i*i+j*j,p=i*k+j*l,q=i*m+j*n,r=k*k+l*l,s=k*m+l*n,t=1/(o*r-p*p),u=(r*q-p*s)*t,v=(o*s-p*q)*t;return u>=0&&v>=0&&1>u+v},b.PolyK._convex=function(a,b,c,d,e,f,g){return(b-d)*(e-c)+(c-a)*(f-d)>=0===g},b.initDefaultShaders=function(){},b.CompileVertexShader=function(a,c){return b._CompileShader(a,c,a.VERTEX_SHADER)},b.CompileFragmentShader=function(a,c){return b._CompileShader(a,c,a.FRAGMENT_SHADER)},b._CompileShader=function(a,b,c){var d=b.join("\n"),e=a.createShader(c);return a.shaderSource(e,d),a.compileShader(e),a.getShaderParameter(e,a.COMPILE_STATUS)?e:(window.console.log(a.getShaderInfoLog(e)),null)},b.compileProgram=function(a,c,d){var e=b.CompileFragmentShader(a,d),f=b.CompileVertexShader(a,c),g=a.createProgram();return a.attachShader(g,f),a.attachShader(g,e),a.linkProgram(g),a.getProgramParameter(g,a.LINK_STATUS)||window.console.log("Could not initialise shaders"),g},b.PixiShader=function(a){this._UID=b._UID++,this.gl=a,this.program=null,this.fragmentSrc=["precision lowp float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"],this.textureCount=0,this.attributes=[],this.init()},b.PixiShader.prototype.init=function(){var a=this.gl,c=b.compileProgram(a,this.vertexSrc||b.PixiShader.defaultVertexSrc,this.fragmentSrc);a.useProgram(c),this.uSampler=a.getUniformLocation(c,"uSampler"),this.projectionVector=a.getUniformLocation(c,"projectionVector"),this.offsetVector=a.getUniformLocation(c,"offsetVector"),this.dimensions=a.getUniformLocation(c,"dimensions"),this.aVertexPosition=a.getAttribLocation(c,"aVertexPosition"),this.aTextureCoord=a.getAttribLocation(c,"aTextureCoord"),this.colorAttribute=a.getAttribLocation(c,"aColor"),-1===this.colorAttribute&&(this.colorAttribute=2),this.attributes=[this.aVertexPosition,this.aTextureCoord,this.colorAttribute];for(var d in this.uniforms)this.uniforms[d].uniformLocation=a.getUniformLocation(c,d);this.initUniforms(),this.program=c},b.PixiShader.prototype.initUniforms=function(){this.textureCount=1;var a,b=this.gl;for(var c in this.uniforms){a=this.uniforms[c];var d=a.type;"sampler2D"===d?(a._init=!1,null!==a.value&&this.initSampler2D(a)):"mat2"===d||"mat3"===d||"mat4"===d?(a.glMatrix=!0,a.glValueLength=1,"mat2"===d?a.glFunc=b.uniformMatrix2fv:"mat3"===d?a.glFunc=b.uniformMatrix3fv:"mat4"===d&&(a.glFunc=b.uniformMatrix4fv)):(a.glFunc=b["uniform"+d],a.glValueLength="2f"===d||"2i"===d?2:"3f"===d||"3i"===d?3:"4f"===d||"4i"===d?4:1)
}},b.PixiShader.prototype.initSampler2D=function(a){if(a.value&&a.value.baseTexture&&a.value.baseTexture.hasLoaded){var b=this.gl;if(b.activeTexture(b["TEXTURE"+this.textureCount]),b.bindTexture(b.TEXTURE_2D,a.value.baseTexture._glTextures[b.id]),a.textureData){var c=a.textureData,d=c.magFilter?c.magFilter:b.LINEAR,e=c.minFilter?c.minFilter:b.LINEAR,f=c.wrapS?c.wrapS:b.CLAMP_TO_EDGE,g=c.wrapT?c.wrapT:b.CLAMP_TO_EDGE,h=c.luminance?b.LUMINANCE:b.RGBA;if(c.repeat&&(f=b.REPEAT,g=b.REPEAT),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,!!c.flipY),c.width){var i=c.width?c.width:512,j=c.height?c.height:2,k=c.border?c.border:0;b.texImage2D(b.TEXTURE_2D,0,h,i,j,k,h,b.UNSIGNED_BYTE,null)}else b.texImage2D(b.TEXTURE_2D,0,h,b.RGBA,b.UNSIGNED_BYTE,a.value.baseTexture.source);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,d),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,e),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,f),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,g)}b.uniform1i(a.uniformLocation,this.textureCount),a._init=!0,this.textureCount++}},b.PixiShader.prototype.syncUniforms=function(){this.textureCount=1;var a,c=this.gl;for(var d in this.uniforms)a=this.uniforms[d],1===a.glValueLength?a.glMatrix===!0?a.glFunc.call(c,a.uniformLocation,a.transpose,a.value):a.glFunc.call(c,a.uniformLocation,a.value):2===a.glValueLength?a.glFunc.call(c,a.uniformLocation,a.value.x,a.value.y):3===a.glValueLength?a.glFunc.call(c,a.uniformLocation,a.value.x,a.value.y,a.value.z):4===a.glValueLength?a.glFunc.call(c,a.uniformLocation,a.value.x,a.value.y,a.value.z,a.value.w):"sampler2D"===a.type&&(a._init?(c.activeTexture(c["TEXTURE"+this.textureCount]),c.bindTexture(c.TEXTURE_2D,a.value.baseTexture._glTextures[c.id]||b.createWebGLTexture(a.value.baseTexture,c)),c.uniform1i(a.uniformLocation,this.textureCount),this.textureCount++):this.initSampler2D(a))},b.PixiShader.prototype.destroy=function(){this.gl.deleteProgram(this.program),this.uniforms=null,this.gl=null,this.attributes=null},b.PixiShader.defaultVertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute vec2 aColor;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","varying vec2 vTextureCoord;","varying vec4 vColor;","const vec2 center = vec2(-1.0, 1.0);","void main(void) {","   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;","   vColor = vec4(color * aColor.x, aColor.x);","}"],b.PixiFastShader=function(a){this._UID=b._UID++,this.gl=a,this.program=null,this.fragmentSrc=["precision lowp float;","varying vec2 vTextureCoord;","varying float vColor;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"],this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aPositionCoord;","attribute vec2 aScale;","attribute float aRotation;","attribute vec2 aTextureCoord;","attribute float aColor;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","uniform mat3 uMatrix;","varying vec2 vTextureCoord;","varying float vColor;","const vec2 center = vec2(-1.0, 1.0);","void main(void) {","   vec2 v;","   vec2 sv = aVertexPosition * aScale;","   v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);","   v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);","   v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;","   gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = aColor;","}"],this.textureCount=0,this.init()},b.PixiFastShader.prototype.init=function(){var a=this.gl,c=b.compileProgram(a,this.vertexSrc,this.fragmentSrc);a.useProgram(c),this.uSampler=a.getUniformLocation(c,"uSampler"),this.projectionVector=a.getUniformLocation(c,"projectionVector"),this.offsetVector=a.getUniformLocation(c,"offsetVector"),this.dimensions=a.getUniformLocation(c,"dimensions"),this.uMatrix=a.getUniformLocation(c,"uMatrix"),this.aVertexPosition=a.getAttribLocation(c,"aVertexPosition"),this.aPositionCoord=a.getAttribLocation(c,"aPositionCoord"),this.aScale=a.getAttribLocation(c,"aScale"),this.aRotation=a.getAttribLocation(c,"aRotation"),this.aTextureCoord=a.getAttribLocation(c,"aTextureCoord"),this.colorAttribute=a.getAttribLocation(c,"aColor"),-1===this.colorAttribute&&(this.colorAttribute=2),this.attributes=[this.aVertexPosition,this.aPositionCoord,this.aScale,this.aRotation,this.aTextureCoord,this.colorAttribute],this.program=c},b.PixiFastShader.prototype.destroy=function(){this.gl.deleteProgram(this.program),this.uniforms=null,this.gl=null,this.attributes=null},b.StripShader=function(a){this._UID=b._UID++,this.gl=a,this.program=null,this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","uniform float alpha;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));","}"],this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","varying vec2 vTextureCoord;","void main(void) {","   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);","   v -= offsetVector.xyx;","   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","}"],this.init()},b.StripShader.prototype.init=function(){var a=this.gl,c=b.compileProgram(a,this.vertexSrc,this.fragmentSrc);a.useProgram(c),this.uSampler=a.getUniformLocation(c,"uSampler"),this.projectionVector=a.getUniformLocation(c,"projectionVector"),this.offsetVector=a.getUniformLocation(c,"offsetVector"),this.colorAttribute=a.getAttribLocation(c,"aColor"),this.aVertexPosition=a.getAttribLocation(c,"aVertexPosition"),this.aTextureCoord=a.getAttribLocation(c,"aTextureCoord"),this.attributes=[this.aVertexPosition,this.aTextureCoord],this.translationMatrix=a.getUniformLocation(c,"translationMatrix"),this.alpha=a.getUniformLocation(c,"alpha"),this.program=c},b.PrimitiveShader=function(a){this._UID=b._UID++,this.gl=a,this.program=null,this.fragmentSrc=["precision mediump float;","varying vec4 vColor;","void main(void) {","   gl_FragColor = vColor;","}"],this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec4 aColor;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","uniform float alpha;","uniform vec3 tint;","varying vec4 vColor;","void main(void) {","   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);","   v -= offsetVector.xyx;","   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);","   vColor = aColor * vec4(tint * alpha, alpha);","}"],this.init()},b.PrimitiveShader.prototype.init=function(){var a=this.gl,c=b.compileProgram(a,this.vertexSrc,this.fragmentSrc);a.useProgram(c),this.projectionVector=a.getUniformLocation(c,"projectionVector"),this.offsetVector=a.getUniformLocation(c,"offsetVector"),this.tintColor=a.getUniformLocation(c,"tint"),this.aVertexPosition=a.getAttribLocation(c,"aVertexPosition"),this.colorAttribute=a.getAttribLocation(c,"aColor"),this.attributes=[this.aVertexPosition,this.colorAttribute],this.translationMatrix=a.getUniformLocation(c,"translationMatrix"),this.alpha=a.getUniformLocation(c,"alpha"),this.program=c},b.PrimitiveShader.prototype.destroy=function(){this.gl.deleteProgram(this.program),this.uniforms=null,this.gl=null,this.attribute=null},b.ComplexPrimitiveShader=function(a){this._UID=b._UID++,this.gl=a,this.program=null,this.fragmentSrc=["precision mediump float;","varying vec4 vColor;","void main(void) {","   gl_FragColor = vColor;","}"],this.vertexSrc=["attribute vec2 aVertexPosition;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","uniform vec3 tint;","uniform float alpha;","uniform vec3 color;","varying vec4 vColor;","void main(void) {","   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);","   v -= offsetVector.xyx;","   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);","   vColor = vec4(color * alpha * tint, alpha);","}"],this.init()},b.ComplexPrimitiveShader.prototype.init=function(){var a=this.gl,c=b.compileProgram(a,this.vertexSrc,this.fragmentSrc);a.useProgram(c),this.projectionVector=a.getUniformLocation(c,"projectionVector"),this.offsetVector=a.getUniformLocation(c,"offsetVector"),this.tintColor=a.getUniformLocation(c,"tint"),this.color=a.getUniformLocation(c,"color"),this.aVertexPosition=a.getAttribLocation(c,"aVertexPosition"),this.attributes=[this.aVertexPosition,this.colorAttribute],this.translationMatrix=a.getUniformLocation(c,"translationMatrix"),this.alpha=a.getUniformLocation(c,"alpha"),this.program=c},b.ComplexPrimitiveShader.prototype.destroy=function(){this.gl.deleteProgram(this.program),this.uniforms=null,this.gl=null,this.attribute=null},b.WebGLGraphics=function(){},b.WebGLGraphics.renderGraphics=function(a,c){var d,e=c.gl,f=c.projection,g=c.offset,h=c.shaderManager.primitiveShader;a.dirty&&b.WebGLGraphics.updateGraphics(a,e);for(var i=a._webGL[e.id],j=0;j<i.data.length;j++)1===i.data[j].mode?(d=i.data[j],c.stencilManager.pushStencil(a,d,c),e.drawElements(e.TRIANGLE_FAN,4,e.UNSIGNED_SHORT,2*(d.indices.length-4)),c.stencilManager.popStencil(a,d,c),this.last=d.mode):(d=i.data[j],c.shaderManager.setShader(h),h=c.shaderManager.primitiveShader,e.uniformMatrix3fv(h.translationMatrix,!1,a.worldTransform.toArray(!0)),e.uniform2f(h.projectionVector,f.x,-f.y),e.uniform2f(h.offsetVector,-g.x,-g.y),e.uniform3fv(h.tintColor,b.hex2rgb(a.tint)),e.uniform1f(h.alpha,a.worldAlpha),e.bindBuffer(e.ARRAY_BUFFER,d.buffer),e.vertexAttribPointer(h.aVertexPosition,2,e.FLOAT,!1,24,0),e.vertexAttribPointer(h.colorAttribute,4,e.FLOAT,!1,24,8),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,d.indexBuffer),e.drawElements(e.TRIANGLE_STRIP,d.indices.length,e.UNSIGNED_SHORT,0))},b.WebGLGraphics.updateGraphics=function(a,c){var d=a._webGL[c.id];d||(d=a._webGL[c.id]={lastIndex:0,data:[],gl:c}),a.dirty=!1;var e;if(a.clearDirty){for(a.clearDirty=!1,e=0;e<d.data.length;e++){var f=d.data[e];f.reset(),b.WebGLGraphics.graphicsDataPool.push(f)}d.data=[],d.lastIndex=0}var g;for(e=d.lastIndex;e<a.graphicsData.length;e++){var h=a.graphicsData[e];h.type===b.Graphics.POLY?(h.fill&&h.points.length>6&&(h.points.length>10?(g=b.WebGLGraphics.switchMode(d,1),b.WebGLGraphics.buildComplexPoly(h,g)):(g=b.WebGLGraphics.switchMode(d,0),b.WebGLGraphics.buildPoly(h,g))),h.lineWidth>0&&(g=b.WebGLGraphics.switchMode(d,0),b.WebGLGraphics.buildLine(h,g))):(g=b.WebGLGraphics.switchMode(d,0),h.type===b.Graphics.RECT?b.WebGLGraphics.buildRectangle(h,g):h.type===b.Graphics.CIRC||h.type===b.Graphics.ELIP?b.WebGLGraphics.buildCircle(h,g):h.type===b.Graphics.RREC&&b.WebGLGraphics.buildRoundedRectangle(h,g)),d.lastIndex++}for(e=0;e<d.data.length;e++)g=d.data[e],g.dirty&&g.upload()},b.WebGLGraphics.switchMode=function(a,c){var d;return a.data.length?(d=a.data[a.data.length-1],(d.mode!==c||1===c)&&(d=b.WebGLGraphics.graphicsDataPool.pop()||new b.WebGLGraphicsData(a.gl),d.mode=c,a.data.push(d))):(d=b.WebGLGraphics.graphicsDataPool.pop()||new b.WebGLGraphicsData(a.gl),d.mode=c,a.data.push(d)),d.dirty=!0,d},b.WebGLGraphics.buildRectangle=function(a,c){var d=a.points,e=d[0],f=d[1],g=d[2],h=d[3];if(a.fill){var i=b.hex2rgb(a.fillColor),j=a.fillAlpha,k=i[0]*j,l=i[1]*j,m=i[2]*j,n=c.points,o=c.indices,p=n.length/6;n.push(e,f),n.push(k,l,m,j),n.push(e+g,f),n.push(k,l,m,j),n.push(e,f+h),n.push(k,l,m,j),n.push(e+g,f+h),n.push(k,l,m,j),o.push(p,p,p+1,p+2,p+3,p+3)}if(a.lineWidth){var q=a.points;a.points=[e,f,e+g,f,e+g,f+h,e,f+h,e,f],b.WebGLGraphics.buildLine(a,c),a.points=q}},b.WebGLGraphics.buildRoundedRectangle=function(a,c){var d=a.points,e=d[0],f=d[1],g=d[2],h=d[3],i=d[4],j=[];if(j.push(e,f+i),j=j.concat(b.WebGLGraphics.quadraticBezierCurve(e,f+h-i,e,f+h,e+i,f+h)),j=j.concat(b.WebGLGraphics.quadraticBezierCurve(e+g-i,f+h,e+g,f+h,e+g,f+h-i)),j=j.concat(b.WebGLGraphics.quadraticBezierCurve(e+g,f+i,e+g,f,e+g-i,f)),j=j.concat(b.WebGLGraphics.quadraticBezierCurve(e+i,f,e,f,e,f+i)),a.fill){var k=b.hex2rgb(a.fillColor),l=a.fillAlpha,m=k[0]*l,n=k[1]*l,o=k[2]*l,p=c.points,q=c.indices,r=p.length/6,s=b.PolyK.Triangulate(j),t=0;for(t=0;t<s.length;t+=3)q.push(s[t]+r),q.push(s[t]+r),q.push(s[t+1]+r),q.push(s[t+2]+r),q.push(s[t+2]+r);for(t=0;t<j.length;t++)p.push(j[t],j[++t],m,n,o,l)}if(a.lineWidth){var u=a.points;a.points=j,b.WebGLGraphics.buildLine(a,c),a.points=u}},b.WebGLGraphics.quadraticBezierCurve=function(a,b,c,d,e,f){function g(a,b,c){var d=b-a;return a+d*c}for(var h,i,j,k,l,m,n=20,o=[],p=0,q=0;n>=q;q++)p=q/n,h=g(a,c,p),i=g(b,d,p),j=g(c,e,p),k=g(d,f,p),l=g(h,j,p),m=g(i,k,p),o.push(l,m);return o},b.WebGLGraphics.buildCircle=function(a,c){var d=a.points,e=d[0],f=d[1],g=d[2],h=d[3],i=40,j=2*Math.PI/i,k=0;if(a.fill){var l=b.hex2rgb(a.fillColor),m=a.fillAlpha,n=l[0]*m,o=l[1]*m,p=l[2]*m,q=c.points,r=c.indices,s=q.length/6;for(r.push(s),k=0;i+1>k;k++)q.push(e,f,n,o,p,m),q.push(e+Math.sin(j*k)*g,f+Math.cos(j*k)*h,n,o,p,m),r.push(s++,s++);r.push(s-1)}if(a.lineWidth){var t=a.points;for(a.points=[],k=0;i+1>k;k++)a.points.push(e+Math.sin(j*k)*g,f+Math.cos(j*k)*h);b.WebGLGraphics.buildLine(a,c),a.points=t}},b.WebGLGraphics.buildLine=function(a,c){var d=0,e=a.points;if(0!==e.length){if(a.lineWidth%2)for(d=0;d<e.length;d++)e[d]+=.5;var f=new b.Point(e[0],e[1]),g=new b.Point(e[e.length-2],e[e.length-1]);if(f.x===g.x&&f.y===g.y){e=e.slice(),e.pop(),e.pop(),g=new b.Point(e[e.length-2],e[e.length-1]);var h=g.x+.5*(f.x-g.x),i=g.y+.5*(f.y-g.y);e.unshift(h,i),e.push(h,i)}var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G=c.points,H=c.indices,I=e.length/2,J=e.length,K=G.length/6,L=a.lineWidth/2,M=b.hex2rgb(a.lineColor),N=a.lineAlpha,O=M[0]*N,P=M[1]*N,Q=M[2]*N;for(l=e[0],m=e[1],n=e[2],o=e[3],r=-(m-o),s=l-n,F=Math.sqrt(r*r+s*s),r/=F,s/=F,r*=L,s*=L,G.push(l-r,m-s,O,P,Q,N),G.push(l+r,m+s,O,P,Q,N),d=1;I-1>d;d++)l=e[2*(d-1)],m=e[2*(d-1)+1],n=e[2*d],o=e[2*d+1],p=e[2*(d+1)],q=e[2*(d+1)+1],r=-(m-o),s=l-n,F=Math.sqrt(r*r+s*s),r/=F,s/=F,r*=L,s*=L,t=-(o-q),u=n-p,F=Math.sqrt(t*t+u*u),t/=F,u/=F,t*=L,u*=L,x=-s+m-(-s+o),y=-r+n-(-r+l),z=(-r+l)*(-s+o)-(-r+n)*(-s+m),A=-u+q-(-u+o),B=-t+n-(-t+p),C=(-t+p)*(-u+o)-(-t+n)*(-u+q),D=x*B-A*y,Math.abs(D)<.1?(D+=10.1,G.push(n-r,o-s,O,P,Q,N),G.push(n+r,o+s,O,P,Q,N)):(j=(y*C-B*z)/D,k=(A*z-x*C)/D,E=(j-n)*(j-n)+(k-o)+(k-o),E>19600?(v=r-t,w=s-u,F=Math.sqrt(v*v+w*w),v/=F,w/=F,v*=L,w*=L,G.push(n-v,o-w),G.push(O,P,Q,N),G.push(n+v,o+w),G.push(O,P,Q,N),G.push(n-v,o-w),G.push(O,P,Q,N),J++):(G.push(j,k),G.push(O,P,Q,N),G.push(n-(j-n),o-(k-o)),G.push(O,P,Q,N)));for(l=e[2*(I-2)],m=e[2*(I-2)+1],n=e[2*(I-1)],o=e[2*(I-1)+1],r=-(m-o),s=l-n,F=Math.sqrt(r*r+s*s),r/=F,s/=F,r*=L,s*=L,G.push(n-r,o-s),G.push(O,P,Q,N),G.push(n+r,o+s),G.push(O,P,Q,N),H.push(K),d=0;J>d;d++)H.push(K++);H.push(K-1)}},b.WebGLGraphics.buildComplexPoly=function(a,c){var d=a.points.slice();if(!(d.length<6)){var e=c.indices;c.points=d,c.alpha=a.fillAlpha,c.color=b.hex2rgb(a.fillColor);for(var f,g,h=1/0,i=-1/0,j=1/0,k=-1/0,l=0;l<d.length;l+=2)f=d[l],g=d[l+1],h=h>f?f:h,i=f>i?f:i,j=j>g?g:j,k=g>k?g:k;d.push(h,j,i,j,i,k,h,k);var m=d.length/2;for(l=0;m>l;l++)e.push(l)}},b.WebGLGraphics.buildPoly=function(a,c){var d=a.points;if(!(d.length<6)){var e=c.points,f=c.indices,g=d.length/2,h=b.hex2rgb(a.fillColor),i=a.fillAlpha,j=h[0]*i,k=h[1]*i,l=h[2]*i,m=b.PolyK.Triangulate(d),n=e.length/6,o=0;for(o=0;o<m.length;o+=3)f.push(m[o]+n),f.push(m[o]+n),f.push(m[o+1]+n),f.push(m[o+2]+n),f.push(m[o+2]+n);for(o=0;g>o;o++)e.push(d[2*o],d[2*o+1],j,k,l,i)}},b.WebGLGraphics.graphicsDataPool=[],b.WebGLGraphicsData=function(a){this.gl=a,this.color=[0,0,0],this.points=[],this.indices=[],this.lastIndex=0,this.buffer=a.createBuffer(),this.indexBuffer=a.createBuffer(),this.mode=1,this.alpha=1,this.dirty=!0},b.WebGLGraphicsData.prototype.reset=function(){this.points=[],this.indices=[],this.lastIndex=0},b.WebGLGraphicsData.prototype.upload=function(){var a=this.gl;this.glPoints=new Float32Array(this.points),a.bindBuffer(a.ARRAY_BUFFER,this.buffer),a.bufferData(a.ARRAY_BUFFER,this.glPoints,a.STATIC_DRAW),this.glIndicies=new Uint16Array(this.indices),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer),a.bufferData(a.ELEMENT_ARRAY_BUFFER,this.glIndicies,a.STATIC_DRAW),this.dirty=!1},b.glContexts=[],b.WebGLRenderer=function(a,c,d,e,f,g){b.defaultRenderer||(b.sayHello("webGL"),b.defaultRenderer=this),this.type=b.WEBGL_RENDERER,this.transparent=!!e,this.preserveDrawingBuffer=g,this.width=a||800,this.height=c||600,this.view=d||document.createElement("canvas"),this.view.width=this.width,this.view.height=this.height,this.contextLost=this.handleContextLost.bind(this),this.contextRestoredLost=this.handleContextRestored.bind(this),this.view.addEventListener("webglcontextlost",this.contextLost,!1),this.view.addEventListener("webglcontextrestored",this.contextRestoredLost,!1),this.options={alpha:this.transparent,antialias:!!f,premultipliedAlpha:!!e,stencil:!0,preserveDrawingBuffer:g};var h=null;if(["experimental-webgl","webgl"].forEach(function(a){try{h=h||this.view.getContext(a,this.options)}catch(b){}},this),!h)throw new Error("This browser does not support webGL. Try using the canvas renderer"+this);this.gl=h,this.glContextId=h.id=b.WebGLRenderer.glContextId++,b.glContexts[this.glContextId]=h,b.blendModesWebGL||(b.blendModesWebGL=[],b.blendModesWebGL[b.blendModes.NORMAL]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.ADD]=[h.SRC_ALPHA,h.DST_ALPHA],b.blendModesWebGL[b.blendModes.MULTIPLY]=[h.DST_COLOR,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.SCREEN]=[h.SRC_ALPHA,h.ONE],b.blendModesWebGL[b.blendModes.OVERLAY]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.DARKEN]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.LIGHTEN]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.COLOR_DODGE]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.COLOR_BURN]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.HARD_LIGHT]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.SOFT_LIGHT]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.DIFFERENCE]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.EXCLUSION]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.HUE]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.SATURATION]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.COLOR]=[h.ONE,h.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.LUMINOSITY]=[h.ONE,h.ONE_MINUS_SRC_ALPHA]),this.projection=new b.Point,this.projection.x=this.width/2,this.projection.y=-this.height/2,this.offset=new b.Point(0,0),this.resize(this.width,this.height),this.contextLost=!1,this.shaderManager=new b.WebGLShaderManager(h),this.spriteBatch=new b.WebGLSpriteBatch(h),this.maskManager=new b.WebGLMaskManager(h),this.filterManager=new b.WebGLFilterManager(h,this.transparent),this.stencilManager=new b.WebGLStencilManager(h),this.blendModeManager=new b.WebGLBlendModeManager(h),this.renderSession={},this.renderSession.gl=this.gl,this.renderSession.drawCount=0,this.renderSession.shaderManager=this.shaderManager,this.renderSession.maskManager=this.maskManager,this.renderSession.filterManager=this.filterManager,this.renderSession.blendModeManager=this.blendModeManager,this.renderSession.spriteBatch=this.spriteBatch,this.renderSession.stencilManager=this.stencilManager,this.renderSession.renderer=this,h.useProgram(this.shaderManager.defaultShader.program),h.disable(h.DEPTH_TEST),h.disable(h.CULL_FACE),h.enable(h.BLEND),h.colorMask(!0,!0,!0,this.transparent)},b.WebGLRenderer.prototype.constructor=b.WebGLRenderer,b.WebGLRenderer.prototype.render=function(a){if(!this.contextLost){this.__stage!==a&&(a.interactive&&a.interactionManager.removeEvents(),this.__stage=a),b.WebGLRenderer.updateTextures(),a.updateTransform(),a._interactive&&(a._interactiveEventsAdded||(a._interactiveEventsAdded=!0,a.interactionManager.setTarget(this)));var c=this.gl;c.viewport(0,0,this.width,this.height),c.bindFramebuffer(c.FRAMEBUFFER,null),this.transparent?c.clearColor(0,0,0,0):c.clearColor(a.backgroundColorSplit[0],a.backgroundColorSplit[1],a.backgroundColorSplit[2],1),c.clear(c.COLOR_BUFFER_BIT),this.renderDisplayObject(a,this.projection),a.interactive?a._interactiveEventsAdded||(a._interactiveEventsAdded=!0,a.interactionManager.setTarget(this)):a._interactiveEventsAdded&&(a._interactiveEventsAdded=!1,a.interactionManager.setTarget(this))}},b.WebGLRenderer.prototype.renderDisplayObject=function(a,c,d){this.renderSession.blendModeManager.setBlendMode(b.blendModes.NORMAL),this.renderSession.drawCount=0,this.renderSession.currentBlendMode=9999,this.renderSession.projection=c,this.renderSession.offset=this.offset,this.spriteBatch.begin(this.renderSession),this.filterManager.begin(this.renderSession,d),a._renderWebGL(this.renderSession),this.spriteBatch.end()},b.WebGLRenderer.updateTextures=function(){var a=0;for(a=0;a<b.Texture.frameUpdates.length;a++)b.WebGLRenderer.updateTextureFrame(b.Texture.frameUpdates[a]);for(a=0;a<b.texturesToDestroy.length;a++)b.WebGLRenderer.destroyTexture(b.texturesToDestroy[a]);b.texturesToUpdate.length=0,b.texturesToDestroy.length=0,b.Texture.frameUpdates.length=0},b.WebGLRenderer.destroyTexture=function(a){for(var c=a._glTextures.length-1;c>=0;c--){var d=a._glTextures[c],e=b.glContexts[c];e&&d&&e.deleteTexture(d)}a._glTextures.length=0},b.WebGLRenderer.updateTextureFrame=function(a){a._updateWebGLuvs()},b.WebGLRenderer.prototype.resize=function(a,b){this.width=a,this.height=b,this.view.width=a,this.view.height=b,this.gl.viewport(0,0,this.width,this.height),this.projection.x=this.width/2,this.projection.y=-this.height/2},b.createWebGLTexture=function(a,c){return a.hasLoaded&&(a._glTextures[c.id]=c.createTexture(),c.bindTexture(c.TEXTURE_2D,a._glTextures[c.id]),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultipliedAlpha),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,a.source),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,a.scaleMode===b.scaleModes.LINEAR?c.LINEAR:c.NEAREST),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,a.scaleMode===b.scaleModes.LINEAR?c.LINEAR:c.NEAREST),a._powerOf2?(c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.REPEAT),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.REPEAT)):(c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE)),c.bindTexture(c.TEXTURE_2D,null),a._dirty[c.id]=!1),a._glTextures[c.id]},b.updateWebGLTexture=function(a,c){a._glTextures[c.id]&&(c.bindTexture(c.TEXTURE_2D,a._glTextures[c.id]),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultipliedAlpha),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,a.source),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,a.scaleMode===b.scaleModes.LINEAR?c.LINEAR:c.NEAREST),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,a.scaleMode===b.scaleModes.LINEAR?c.LINEAR:c.NEAREST),a._powerOf2?(c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.REPEAT),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.REPEAT)):(c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE)),a._dirty[c.id]=!1)},b.WebGLRenderer.prototype.handleContextLost=function(a){a.preventDefault(),this.contextLost=!0},b.WebGLRenderer.prototype.handleContextRestored=function(){try{this.gl=this.view.getContext("experimental-webgl",this.options)}catch(a){try{this.gl=this.view.getContext("webgl",this.options)}catch(c){throw new Error(" This browser does not support webGL. Try using the canvas renderer"+this)}}var d=this.gl;d.id=b.WebGLRenderer.glContextId++,this.shaderManager.setContext(d),this.spriteBatch.setContext(d),this.primitiveBatch.setContext(d),this.maskManager.setContext(d),this.filterManager.setContext(d),this.renderSession.gl=this.gl,d.disable(d.DEPTH_TEST),d.disable(d.CULL_FACE),d.enable(d.BLEND),d.colorMask(!0,!0,!0,this.transparent),this.gl.viewport(0,0,this.width,this.height);for(var e in b.TextureCache){var f=b.TextureCache[e].baseTexture;f._glTextures=[]}this.contextLost=!1},b.WebGLRenderer.prototype.destroy=function(){this.view.removeEventListener("webglcontextlost",this.contextLost),this.view.removeEventListener("webglcontextrestored",this.contextRestoredLost),b.glContexts[this.glContextId]=null,this.projection=null,this.offset=null,this.shaderManager.destroy(),this.spriteBatch.destroy(),this.primitiveBatch.destroy(),this.maskManager.destroy(),this.filterManager.destroy(),this.shaderManager=null,this.spriteBatch=null,this.maskManager=null,this.filterManager=null,this.gl=null,this.renderSession=null},b.WebGLRenderer.glContextId=0,b.WebGLBlendModeManager=function(a){this.gl=a,this.currentBlendMode=99999},b.WebGLBlendModeManager.prototype.setBlendMode=function(a){if(this.currentBlendMode===a)return!1;this.currentBlendMode=a;var c=b.blendModesWebGL[this.currentBlendMode];return this.gl.blendFunc(c[0],c[1]),!0},b.WebGLBlendModeManager.prototype.destroy=function(){this.gl=null},b.WebGLMaskManager=function(a){this.maskStack=[],this.maskPosition=0,this.setContext(a),this.reverse=!1,this.count=0},b.WebGLMaskManager.prototype.setContext=function(a){this.gl=a},b.WebGLMaskManager.prototype.pushMask=function(a,c){var d=c.gl;a.dirty&&b.WebGLGraphics.updateGraphics(a,d),a._webGL[d.id].data.length&&c.stencilManager.pushStencil(a,a._webGL[d.id].data[0],c)},b.WebGLMaskManager.prototype.popMask=function(a,b){var c=this.gl;b.stencilManager.popStencil(a,a._webGL[c.id].data[0],b)},b.WebGLMaskManager.prototype.destroy=function(){this.maskStack=null,this.gl=null},b.WebGLStencilManager=function(a){this.stencilStack=[],this.setContext(a),this.reverse=!0,this.count=0},b.WebGLStencilManager.prototype.setContext=function(a){this.gl=a},b.WebGLStencilManager.prototype.pushStencil=function(a,b,c){var d=this.gl;this.bindGraphics(a,b,c),0===this.stencilStack.length&&(d.enable(d.STENCIL_TEST),d.clear(d.STENCIL_BUFFER_BIT),this.reverse=!0,this.count=0),this.stencilStack.push(b);var e=this.count;d.colorMask(!1,!1,!1,!1),d.stencilFunc(d.ALWAYS,0,255),d.stencilOp(d.KEEP,d.KEEP,d.INVERT),1===b.mode?(d.drawElements(d.TRIANGLE_FAN,b.indices.length-4,d.UNSIGNED_SHORT,0),this.reverse?(d.stencilFunc(d.EQUAL,255-e,255),d.stencilOp(d.KEEP,d.KEEP,d.DECR)):(d.stencilFunc(d.EQUAL,e,255),d.stencilOp(d.KEEP,d.KEEP,d.INCR)),d.drawElements(d.TRIANGLE_FAN,4,d.UNSIGNED_SHORT,2*(b.indices.length-4)),this.reverse?d.stencilFunc(d.EQUAL,255-(e+1),255):d.stencilFunc(d.EQUAL,e+1,255),this.reverse=!this.reverse):(this.reverse?(d.stencilFunc(d.EQUAL,e,255),d.stencilOp(d.KEEP,d.KEEP,d.INCR)):(d.stencilFunc(d.EQUAL,255-e,255),d.stencilOp(d.KEEP,d.KEEP,d.DECR)),d.drawElements(d.TRIANGLE_STRIP,b.indices.length,d.UNSIGNED_SHORT,0),this.reverse?d.stencilFunc(d.EQUAL,e+1,255):d.stencilFunc(d.EQUAL,255-(e+1),255)),d.colorMask(!0,!0,!0,!0),d.stencilOp(d.KEEP,d.KEEP,d.KEEP),this.count++},b.WebGLStencilManager.prototype.bindGraphics=function(a,c,d){this._currentGraphics=a;var e,f=this.gl,g=d.projection,h=d.offset;1===c.mode?(e=d.shaderManager.complexPrimativeShader,d.shaderManager.setShader(e),f.uniformMatrix3fv(e.translationMatrix,!1,a.worldTransform.toArray(!0)),f.uniform2f(e.projectionVector,g.x,-g.y),f.uniform2f(e.offsetVector,-h.x,-h.y),f.uniform3fv(e.tintColor,b.hex2rgb(a.tint)),f.uniform3fv(e.color,c.color),f.uniform1f(e.alpha,a.worldAlpha*c.alpha),f.bindBuffer(f.ARRAY_BUFFER,c.buffer),f.vertexAttribPointer(e.aVertexPosition,2,f.FLOAT,!1,8,0),f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,c.indexBuffer)):(e=d.shaderManager.primitiveShader,d.shaderManager.setShader(e),f.uniformMatrix3fv(e.translationMatrix,!1,a.worldTransform.toArray(!0)),f.uniform2f(e.projectionVector,g.x,-g.y),f.uniform2f(e.offsetVector,-h.x,-h.y),f.uniform3fv(e.tintColor,b.hex2rgb(a.tint)),f.uniform1f(e.alpha,a.worldAlpha),f.bindBuffer(f.ARRAY_BUFFER,c.buffer),f.vertexAttribPointer(e.aVertexPosition,2,f.FLOAT,!1,24,0),f.vertexAttribPointer(e.colorAttribute,4,f.FLOAT,!1,24,8),f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,c.indexBuffer))},b.WebGLStencilManager.prototype.popStencil=function(a,b,c){var d=this.gl;if(this.stencilStack.pop(),this.count--,0===this.stencilStack.length)d.disable(d.STENCIL_TEST);else{var e=this.count;this.bindGraphics(a,b,c),d.colorMask(!1,!1,!1,!1),1===b.mode?(this.reverse=!this.reverse,this.reverse?(d.stencilFunc(d.EQUAL,255-(e+1),255),d.stencilOp(d.KEEP,d.KEEP,d.INCR)):(d.stencilFunc(d.EQUAL,e+1,255),d.stencilOp(d.KEEP,d.KEEP,d.DECR)),d.drawElements(d.TRIANGLE_FAN,4,d.UNSIGNED_SHORT,2*(b.indices.length-4)),d.stencilFunc(d.ALWAYS,0,255),d.stencilOp(d.KEEP,d.KEEP,d.INVERT),d.drawElements(d.TRIANGLE_FAN,b.indices.length-4,d.UNSIGNED_SHORT,0),this.reverse?d.stencilFunc(d.EQUAL,e,255):d.stencilFunc(d.EQUAL,255-e,255)):(this.reverse?(d.stencilFunc(d.EQUAL,e+1,255),d.stencilOp(d.KEEP,d.KEEP,d.DECR)):(d.stencilFunc(d.EQUAL,255-(e+1),255),d.stencilOp(d.KEEP,d.KEEP,d.INCR)),d.drawElements(d.TRIANGLE_STRIP,b.indices.length,d.UNSIGNED_SHORT,0),this.reverse?d.stencilFunc(d.EQUAL,e,255):d.stencilFunc(d.EQUAL,255-e,255)),d.colorMask(!0,!0,!0,!0),d.stencilOp(d.KEEP,d.KEEP,d.KEEP)}},b.WebGLStencilManager.prototype.destroy=function(){this.maskStack=null,this.gl=null},b.WebGLShaderManager=function(a){this.maxAttibs=10,this.attribState=[],this.tempAttribState=[],this.shaderMap=[];for(var b=0;b<this.maxAttibs;b++)this.attribState[b]=!1;this.setContext(a)},b.WebGLShaderManager.prototype.setContext=function(a){this.gl=a,this.primitiveShader=new b.PrimitiveShader(a),this.complexPrimativeShader=new b.ComplexPrimitiveShader(a),this.defaultShader=new b.PixiShader(a),this.fastShader=new b.PixiFastShader(a),this.stripShader=new b.StripShader(a),this.setShader(this.defaultShader)},b.WebGLShaderManager.prototype.setAttribs=function(a){var b;for(b=0;b<this.tempAttribState.length;b++)this.tempAttribState[b]=!1;for(b=0;b<a.length;b++){var c=a[b];this.tempAttribState[c]=!0}var d=this.gl;for(b=0;b<this.attribState.length;b++)this.attribState[b]!==this.tempAttribState[b]&&(this.attribState[b]=this.tempAttribState[b],this.tempAttribState[b]?d.enableVertexAttribArray(b):d.disableVertexAttribArray(b))},b.WebGLShaderManager.prototype.setShader=function(a){return this._currentId===a._UID?!1:(this._currentId=a._UID,this.currentShader=a,this.gl.useProgram(a.program),this.setAttribs(a.attributes),!0)},b.WebGLShaderManager.prototype.destroy=function(){this.attribState=null,this.tempAttribState=null,this.primitiveShader.destroy(),this.defaultShader.destroy(),this.fastShader.destroy(),this.stripShader.destroy(),this.gl=null},b.WebGLSpriteBatch=function(a){this.vertSize=6,this.size=2e3;var b=4*this.size*this.vertSize,c=6*this.size;this.vertices=new Float32Array(b),this.indices=new Uint16Array(c),this.lastIndexCount=0;for(var d=0,e=0;c>d;d+=6,e+=4)this.indices[d+0]=e+0,this.indices[d+1]=e+1,this.indices[d+2]=e+2,this.indices[d+3]=e+0,this.indices[d+4]=e+2,this.indices[d+5]=e+3;this.drawing=!1,this.currentBatchSize=0,this.currentBaseTexture=null,this.setContext(a),this.dirty=!0,this.textures=[],this.blendModes=[]},b.WebGLSpriteBatch.prototype.setContext=function(a){this.gl=a,this.vertexBuffer=a.createBuffer(),this.indexBuffer=a.createBuffer(),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer),a.bufferData(a.ELEMENT_ARRAY_BUFFER,this.indices,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bufferData(a.ARRAY_BUFFER,this.vertices,a.DYNAMIC_DRAW),this.currentBlendMode=99999},b.WebGLSpriteBatch.prototype.begin=function(a){this.renderSession=a,this.shader=this.renderSession.shaderManager.defaultShader,this.start()},b.WebGLSpriteBatch.prototype.end=function(){this.flush()},b.WebGLSpriteBatch.prototype.render=function(a){var b=a.texture;this.currentBatchSize>=this.size&&(this.flush(),this.currentBaseTexture=b.baseTexture);var c=b._uvs;if(c){var d,e,f,g,h=a.worldAlpha,i=a.tint,j=this.vertices,k=a.anchor.x,l=a.anchor.y;
if(b.trim){var m=b.trim;e=m.x-k*m.width,d=e+b.crop.width,g=m.y-l*m.height,f=g+b.crop.height}else d=b.frame.width*(1-k),e=b.frame.width*-k,f=b.frame.height*(1-l),g=b.frame.height*-l;var n=4*this.currentBatchSize*this.vertSize,o=a.worldTransform,p=o.a,q=o.c,r=o.b,s=o.d,t=o.tx,u=o.ty;j[n++]=p*e+r*g+t,j[n++]=s*g+q*e+u,j[n++]=c.x0,j[n++]=c.y0,j[n++]=h,j[n++]=i,j[n++]=p*d+r*g+t,j[n++]=s*g+q*d+u,j[n++]=c.x1,j[n++]=c.y1,j[n++]=h,j[n++]=i,j[n++]=p*d+r*f+t,j[n++]=s*f+q*d+u,j[n++]=c.x2,j[n++]=c.y2,j[n++]=h,j[n++]=i,j[n++]=p*e+r*f+t,j[n++]=s*f+q*e+u,j[n++]=c.x3,j[n++]=c.y3,j[n++]=h,j[n++]=i,this.textures[this.currentBatchSize]=a.texture.baseTexture,this.blendModes[this.currentBatchSize]=a.blendMode,this.currentBatchSize++}},b.WebGLSpriteBatch.prototype.renderTilingSprite=function(a){var c=a.tilingTexture;this.currentBatchSize>=this.size&&(this.flush(),this.currentBaseTexture=c.baseTexture),a._uvs||(a._uvs=new b.TextureUvs);var d=a._uvs;a.tilePosition.x%=c.baseTexture.width*a.tileScaleOffset.x,a.tilePosition.y%=c.baseTexture.height*a.tileScaleOffset.y;var e=a.tilePosition.x/(c.baseTexture.width*a.tileScaleOffset.x),f=a.tilePosition.y/(c.baseTexture.height*a.tileScaleOffset.y),g=a.width/c.baseTexture.width/(a.tileScale.x*a.tileScaleOffset.x),h=a.height/c.baseTexture.height/(a.tileScale.y*a.tileScaleOffset.y);d.x0=0-e,d.y0=0-f,d.x1=1*g-e,d.y1=0-f,d.x2=1*g-e,d.y2=1*h-f,d.x3=0-e,d.y3=1*h-f;var i=a.worldAlpha,j=a.tint,k=this.vertices,l=a.width,m=a.height,n=a.anchor.x,o=a.anchor.y,p=l*(1-n),q=l*-n,r=m*(1-o),s=m*-o,t=4*this.currentBatchSize*this.vertSize,u=a.worldTransform,v=u.a,w=u.c,x=u.b,y=u.d,z=u.tx,A=u.ty;k[t++]=v*q+x*s+z,k[t++]=y*s+w*q+A,k[t++]=d.x0,k[t++]=d.y0,k[t++]=i,k[t++]=j,k[t++]=v*p+x*s+z,k[t++]=y*s+w*p+A,k[t++]=d.x1,k[t++]=d.y1,k[t++]=i,k[t++]=j,k[t++]=v*p+x*r+z,k[t++]=y*r+w*p+A,k[t++]=d.x2,k[t++]=d.y2,k[t++]=i,k[t++]=j,k[t++]=v*q+x*r+z,k[t++]=y*r+w*q+A,k[t++]=d.x3,k[t++]=d.y3,k[t++]=i,k[t++]=j,this.textures[this.currentBatchSize]=c.baseTexture,this.blendModes[this.currentBatchSize]=a.blendMode,this.currentBatchSize++},b.WebGLSpriteBatch.prototype.flush=function(){if(0!==this.currentBatchSize){var a=this.gl;if(this.renderSession.shaderManager.setShader(this.renderSession.shaderManager.defaultShader),this.dirty){this.dirty=!1,a.activeTexture(a.TEXTURE0),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer);var b=this.renderSession.projection;a.uniform2f(this.shader.projectionVector,b.x,b.y);var c=4*this.vertSize;a.vertexAttribPointer(this.shader.aVertexPosition,2,a.FLOAT,!1,c,0),a.vertexAttribPointer(this.shader.aTextureCoord,2,a.FLOAT,!1,c,8),a.vertexAttribPointer(this.shader.colorAttribute,2,a.FLOAT,!1,c,16)}if(this.currentBatchSize>.5*this.size)a.bufferSubData(a.ARRAY_BUFFER,0,this.vertices);else{var d=this.vertices.subarray(0,4*this.currentBatchSize*this.vertSize);a.bufferSubData(a.ARRAY_BUFFER,0,d)}for(var e,f,g=0,h=0,i=null,j=this.renderSession.blendModeManager.currentBlendMode,k=0,l=this.currentBatchSize;l>k;k++)e=this.textures[k],f=this.blendModes[k],(i!==e||j!==f)&&(this.renderBatch(i,g,h),h=k,g=0,i=e,j=f,this.renderSession.blendModeManager.setBlendMode(j)),g++;this.renderBatch(i,g,h),this.currentBatchSize=0}},b.WebGLSpriteBatch.prototype.renderBatch=function(a,c,d){if(0!==c){var e=this.gl;e.bindTexture(e.TEXTURE_2D,a._glTextures[e.id]||b.createWebGLTexture(a,e)),a._dirty[e.id]&&b.updateWebGLTexture(this.currentBaseTexture,e),e.drawElements(e.TRIANGLES,6*c,e.UNSIGNED_SHORT,6*d*2),this.renderSession.drawCount++}},b.WebGLSpriteBatch.prototype.stop=function(){this.flush()},b.WebGLSpriteBatch.prototype.start=function(){this.dirty=!0},b.WebGLSpriteBatch.prototype.destroy=function(){this.vertices=null,this.indices=null,this.gl.deleteBuffer(this.vertexBuffer),this.gl.deleteBuffer(this.indexBuffer),this.currentBaseTexture=null,this.gl=null},b.WebGLFastSpriteBatch=function(a){this.vertSize=10,this.maxSize=6e3,this.size=this.maxSize;var b=4*this.size*this.vertSize,c=6*this.maxSize;this.vertices=new Float32Array(b),this.indices=new Uint16Array(c),this.vertexBuffer=null,this.indexBuffer=null,this.lastIndexCount=0;for(var d=0,e=0;c>d;d+=6,e+=4)this.indices[d+0]=e+0,this.indices[d+1]=e+1,this.indices[d+2]=e+2,this.indices[d+3]=e+0,this.indices[d+4]=e+2,this.indices[d+5]=e+3;this.drawing=!1,this.currentBatchSize=0,this.currentBaseTexture=null,this.currentBlendMode=0,this.renderSession=null,this.shader=null,this.matrix=null,this.setContext(a)},b.WebGLFastSpriteBatch.prototype.setContext=function(a){this.gl=a,this.vertexBuffer=a.createBuffer(),this.indexBuffer=a.createBuffer(),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer),a.bufferData(a.ELEMENT_ARRAY_BUFFER,this.indices,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bufferData(a.ARRAY_BUFFER,this.vertices,a.DYNAMIC_DRAW)},b.WebGLFastSpriteBatch.prototype.begin=function(a,b){this.renderSession=b,this.shader=this.renderSession.shaderManager.fastShader,this.matrix=a.worldTransform.toArray(!0),this.start()},b.WebGLFastSpriteBatch.prototype.end=function(){this.flush()},b.WebGLFastSpriteBatch.prototype.render=function(a){var b=a.children,c=b[0];if(c.texture._uvs){this.currentBaseTexture=c.texture.baseTexture,c.blendMode!==this.renderSession.blendModeManager.currentBlendMode&&(this.flush(),this.renderSession.blendModeManager.setBlendMode(c.blendMode));for(var d=0,e=b.length;e>d;d++)this.renderSprite(b[d]);this.flush()}},b.WebGLFastSpriteBatch.prototype.renderSprite=function(a){if(a.visible&&(a.texture.baseTexture===this.currentBaseTexture||(this.flush(),this.currentBaseTexture=a.texture.baseTexture,a.texture._uvs))){var b,c,d,e,f,g,h,i,j=this.vertices;if(b=a.texture._uvs,c=a.texture.frame.width,d=a.texture.frame.height,a.texture.trim){var k=a.texture.trim;f=k.x-a.anchor.x*k.width,e=f+a.texture.crop.width,h=k.y-a.anchor.y*k.height,g=h+a.texture.crop.height}else e=a.texture.frame.width*(1-a.anchor.x),f=a.texture.frame.width*-a.anchor.x,g=a.texture.frame.height*(1-a.anchor.y),h=a.texture.frame.height*-a.anchor.y;i=4*this.currentBatchSize*this.vertSize,j[i++]=f,j[i++]=h,j[i++]=a.position.x,j[i++]=a.position.y,j[i++]=a.scale.x,j[i++]=a.scale.y,j[i++]=a.rotation,j[i++]=b.x0,j[i++]=b.y1,j[i++]=a.alpha,j[i++]=e,j[i++]=h,j[i++]=a.position.x,j[i++]=a.position.y,j[i++]=a.scale.x,j[i++]=a.scale.y,j[i++]=a.rotation,j[i++]=b.x1,j[i++]=b.y1,j[i++]=a.alpha,j[i++]=e,j[i++]=g,j[i++]=a.position.x,j[i++]=a.position.y,j[i++]=a.scale.x,j[i++]=a.scale.y,j[i++]=a.rotation,j[i++]=b.x2,j[i++]=b.y2,j[i++]=a.alpha,j[i++]=f,j[i++]=g,j[i++]=a.position.x,j[i++]=a.position.y,j[i++]=a.scale.x,j[i++]=a.scale.y,j[i++]=a.rotation,j[i++]=b.x3,j[i++]=b.y3,j[i++]=a.alpha,this.currentBatchSize++,this.currentBatchSize>=this.size&&this.flush()}},b.WebGLFastSpriteBatch.prototype.flush=function(){if(0!==this.currentBatchSize){var a=this.gl;if(this.currentBaseTexture._glTextures[a.id]||b.createWebGLTexture(this.currentBaseTexture,a),a.bindTexture(a.TEXTURE_2D,this.currentBaseTexture._glTextures[a.id]),this.currentBatchSize>.5*this.size)a.bufferSubData(a.ARRAY_BUFFER,0,this.vertices);else{var c=this.vertices.subarray(0,4*this.currentBatchSize*this.vertSize);a.bufferSubData(a.ARRAY_BUFFER,0,c)}a.drawElements(a.TRIANGLES,6*this.currentBatchSize,a.UNSIGNED_SHORT,0),this.currentBatchSize=0,this.renderSession.drawCount++}},b.WebGLFastSpriteBatch.prototype.stop=function(){this.flush()},b.WebGLFastSpriteBatch.prototype.start=function(){var a=this.gl;a.activeTexture(a.TEXTURE0),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer);var b=this.renderSession.projection;a.uniform2f(this.shader.projectionVector,b.x,b.y),a.uniformMatrix3fv(this.shader.uMatrix,!1,this.matrix);var c=4*this.vertSize;a.vertexAttribPointer(this.shader.aVertexPosition,2,a.FLOAT,!1,c,0),a.vertexAttribPointer(this.shader.aPositionCoord,2,a.FLOAT,!1,c,8),a.vertexAttribPointer(this.shader.aScale,2,a.FLOAT,!1,c,16),a.vertexAttribPointer(this.shader.aRotation,1,a.FLOAT,!1,c,24),a.vertexAttribPointer(this.shader.aTextureCoord,2,a.FLOAT,!1,c,28),a.vertexAttribPointer(this.shader.colorAttribute,1,a.FLOAT,!1,c,36)},b.WebGLFilterManager=function(a,b){this.transparent=b,this.filterStack=[],this.offsetX=0,this.offsetY=0,this.setContext(a)},b.WebGLFilterManager.prototype.setContext=function(a){this.gl=a,this.texturePool=[],this.initShaderBuffers()},b.WebGLFilterManager.prototype.begin=function(a,b){this.renderSession=a,this.defaultShader=a.shaderManager.defaultShader;var c=this.renderSession.projection;this.width=2*c.x,this.height=2*-c.y,this.buffer=b},b.WebGLFilterManager.prototype.pushFilter=function(a){var c=this.gl,d=this.renderSession.projection,e=this.renderSession.offset;a._filterArea=a.target.filterArea||a.target.getBounds(),this.filterStack.push(a);var f=a.filterPasses[0];this.offsetX+=a._filterArea.x,this.offsetY+=a._filterArea.y;var g=this.texturePool.pop();g?g.resize(this.width,this.height):g=new b.FilterTexture(this.gl,this.width,this.height),c.bindTexture(c.TEXTURE_2D,g.texture);var h=a._filterArea,i=f.padding;h.x-=i,h.y-=i,h.width+=2*i,h.height+=2*i,h.x<0&&(h.x=0),h.width>this.width&&(h.width=this.width),h.y<0&&(h.y=0),h.height>this.height&&(h.height=this.height),c.bindFramebuffer(c.FRAMEBUFFER,g.frameBuffer),c.viewport(0,0,h.width,h.height),d.x=h.width/2,d.y=-h.height/2,e.x=-h.x,e.y=-h.y,this.renderSession.shaderManager.setShader(this.defaultShader),c.uniform2f(this.defaultShader.projectionVector,h.width/2,-h.height/2),c.uniform2f(this.defaultShader.offsetVector,-h.x,-h.y),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.clear(c.COLOR_BUFFER_BIT),a._glFilterTexture=g},b.WebGLFilterManager.prototype.popFilter=function(){var a=this.gl,c=this.filterStack.pop(),d=c._filterArea,e=c._glFilterTexture,f=this.renderSession.projection,g=this.renderSession.offset;if(c.filterPasses.length>1){a.viewport(0,0,d.width,d.height),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),this.vertexArray[0]=0,this.vertexArray[1]=d.height,this.vertexArray[2]=d.width,this.vertexArray[3]=d.height,this.vertexArray[4]=0,this.vertexArray[5]=0,this.vertexArray[6]=d.width,this.vertexArray[7]=0,a.bufferSubData(a.ARRAY_BUFFER,0,this.vertexArray),a.bindBuffer(a.ARRAY_BUFFER,this.uvBuffer),this.uvArray[2]=d.width/this.width,this.uvArray[5]=d.height/this.height,this.uvArray[6]=d.width/this.width,this.uvArray[7]=d.height/this.height,a.bufferSubData(a.ARRAY_BUFFER,0,this.uvArray);var h=e,i=this.texturePool.pop();i||(i=new b.FilterTexture(this.gl,this.width,this.height)),i.resize(this.width,this.height),a.bindFramebuffer(a.FRAMEBUFFER,i.frameBuffer),a.clear(a.COLOR_BUFFER_BIT),a.disable(a.BLEND);for(var j=0;j<c.filterPasses.length-1;j++){var k=c.filterPasses[j];a.bindFramebuffer(a.FRAMEBUFFER,i.frameBuffer),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,h.texture),this.applyFilterPass(k,d,d.width,d.height);var l=h;h=i,i=l}a.enable(a.BLEND),e=h,this.texturePool.push(i)}var m=c.filterPasses[c.filterPasses.length-1];this.offsetX-=d.x,this.offsetY-=d.y;var n=this.width,o=this.height,p=0,q=0,r=this.buffer;if(0===this.filterStack.length)a.colorMask(!0,!0,!0,!0);else{var s=this.filterStack[this.filterStack.length-1];d=s._filterArea,n=d.width,o=d.height,p=d.x,q=d.y,r=s._glFilterTexture.frameBuffer}f.x=n/2,f.y=-o/2,g.x=p,g.y=q,d=c._filterArea;var t=d.x-p,u=d.y-q;a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),this.vertexArray[0]=t,this.vertexArray[1]=u+d.height,this.vertexArray[2]=t+d.width,this.vertexArray[3]=u+d.height,this.vertexArray[4]=t,this.vertexArray[5]=u,this.vertexArray[6]=t+d.width,this.vertexArray[7]=u,a.bufferSubData(a.ARRAY_BUFFER,0,this.vertexArray),a.bindBuffer(a.ARRAY_BUFFER,this.uvBuffer),this.uvArray[2]=d.width/this.width,this.uvArray[5]=d.height/this.height,this.uvArray[6]=d.width/this.width,this.uvArray[7]=d.height/this.height,a.bufferSubData(a.ARRAY_BUFFER,0,this.uvArray),a.viewport(0,0,n,o),a.bindFramebuffer(a.FRAMEBUFFER,r),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,e.texture),this.applyFilterPass(m,d,n,o),this.renderSession.shaderManager.setShader(this.defaultShader),a.uniform2f(this.defaultShader.projectionVector,n/2,-o/2),a.uniform2f(this.defaultShader.offsetVector,-p,-q),this.texturePool.push(e),c._glFilterTexture=null},b.WebGLFilterManager.prototype.applyFilterPass=function(a,c,d,e){var f=this.gl,g=a.shaders[f.id];g||(g=new b.PixiShader(f),g.fragmentSrc=a.fragmentSrc,g.uniforms=a.uniforms,g.init(),a.shaders[f.id]=g),this.renderSession.shaderManager.setShader(g),f.uniform2f(g.projectionVector,d/2,-e/2),f.uniform2f(g.offsetVector,0,0),a.uniforms.dimensions&&(a.uniforms.dimensions.value[0]=this.width,a.uniforms.dimensions.value[1]=this.height,a.uniforms.dimensions.value[2]=this.vertexArray[0],a.uniforms.dimensions.value[3]=this.vertexArray[5]),g.syncUniforms(),f.bindBuffer(f.ARRAY_BUFFER,this.vertexBuffer),f.vertexAttribPointer(g.aVertexPosition,2,f.FLOAT,!1,0,0),f.bindBuffer(f.ARRAY_BUFFER,this.uvBuffer),f.vertexAttribPointer(g.aTextureCoord,2,f.FLOAT,!1,0,0),f.bindBuffer(f.ARRAY_BUFFER,this.colorBuffer),f.vertexAttribPointer(g.colorAttribute,2,f.FLOAT,!1,0,0),f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,this.indexBuffer),f.drawElements(f.TRIANGLES,6,f.UNSIGNED_SHORT,0),this.renderSession.drawCount++},b.WebGLFilterManager.prototype.initShaderBuffers=function(){var a=this.gl;this.vertexBuffer=a.createBuffer(),this.uvBuffer=a.createBuffer(),this.colorBuffer=a.createBuffer(),this.indexBuffer=a.createBuffer(),this.vertexArray=new Float32Array([0,0,1,0,0,1,1,1]),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bufferData(a.ARRAY_BUFFER,this.vertexArray,a.STATIC_DRAW),this.uvArray=new Float32Array([0,0,1,0,0,1,1,1]),a.bindBuffer(a.ARRAY_BUFFER,this.uvBuffer),a.bufferData(a.ARRAY_BUFFER,this.uvArray,a.STATIC_DRAW),this.colorArray=new Float32Array([1,16777215,1,16777215,1,16777215,1,16777215]),a.bindBuffer(a.ARRAY_BUFFER,this.colorBuffer),a.bufferData(a.ARRAY_BUFFER,this.colorArray,a.STATIC_DRAW),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer),a.bufferData(a.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,1,3,2]),a.STATIC_DRAW)},b.WebGLFilterManager.prototype.destroy=function(){var a=this.gl;this.filterStack=null,this.offsetX=0,this.offsetY=0;for(var b=0;b<this.texturePool.length;b++)this.texturePool[b].destroy();this.texturePool=null,a.deleteBuffer(this.vertexBuffer),a.deleteBuffer(this.uvBuffer),a.deleteBuffer(this.colorBuffer),a.deleteBuffer(this.indexBuffer)},b.FilterTexture=function(a,c,d,e){this.gl=a,this.frameBuffer=a.createFramebuffer(),this.texture=a.createTexture(),e=e||b.scaleModes.DEFAULT,a.bindTexture(a.TEXTURE_2D,this.texture),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,e===b.scaleModes.LINEAR?a.LINEAR:a.NEAREST),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,e===b.scaleModes.LINEAR?a.LINEAR:a.NEAREST),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.bindFramebuffer(a.FRAMEBUFFER,this.framebuffer),a.bindFramebuffer(a.FRAMEBUFFER,this.frameBuffer),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,this.texture,0),this.renderBuffer=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,this.renderBuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,this.renderBuffer),this.resize(c,d)},b.FilterTexture.prototype.clear=function(){var a=this.gl;a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT)},b.FilterTexture.prototype.resize=function(a,b){if(this.width!==a||this.height!==b){this.width=a,this.height=b;var c=this.gl;c.bindTexture(c.TEXTURE_2D,this.texture),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,a,b,0,c.RGBA,c.UNSIGNED_BYTE,null),c.bindRenderbuffer(c.RENDERBUFFER,this.renderBuffer),c.renderbufferStorage(c.RENDERBUFFER,c.DEPTH_STENCIL,a,b)}},b.FilterTexture.prototype.destroy=function(){var a=this.gl;a.deleteFramebuffer(this.frameBuffer),a.deleteTexture(this.texture),this.frameBuffer=null,this.texture=null},b.CanvasMaskManager=function(){},b.CanvasMaskManager.prototype.pushMask=function(a,c){c.save();var d=a.alpha,e=a.worldTransform;c.setTransform(e.a,e.c,e.b,e.d,e.tx,e.ty),b.CanvasGraphics.renderGraphicsMask(a,c),c.clip(),a.worldAlpha=d},b.CanvasMaskManager.prototype.popMask=function(a){a.restore()},b.CanvasTinter=function(){},b.CanvasTinter.getTintedTexture=function(a,c){var d=a.texture;c=b.CanvasTinter.roundColor(c);var e="#"+("00000"+(0|c).toString(16)).substr(-6);if(d.tintCache=d.tintCache||{},d.tintCache[e])return d.tintCache[e];var f=b.CanvasTinter.canvas||document.createElement("canvas");if(b.CanvasTinter.tintMethod(d,c,f),b.CanvasTinter.convertTintToImage){var g=new Image;g.src=f.toDataURL(),d.tintCache[e]=g}else d.tintCache[e]=f,b.CanvasTinter.canvas=null;return f},b.CanvasTinter.tintWithMultiply=function(a,b,c){var d=c.getContext("2d"),e=a.frame;c.width=e.width,c.height=e.height,d.fillStyle="#"+("00000"+(0|b).toString(16)).substr(-6),d.fillRect(0,0,e.width,e.height),d.globalCompositeOperation="multiply",d.drawImage(a.baseTexture.source,e.x,e.y,e.width,e.height,0,0,e.width,e.height),d.globalCompositeOperation="destination-atop",d.drawImage(a.baseTexture.source,e.x,e.y,e.width,e.height,0,0,e.width,e.height)},b.CanvasTinter.tintWithOverlay=function(a,b,c){var d=c.getContext("2d"),e=a.frame;c.width=e.width,c.height=e.height,d.globalCompositeOperation="copy",d.fillStyle="#"+("00000"+(0|b).toString(16)).substr(-6),d.fillRect(0,0,e.width,e.height),d.globalCompositeOperation="destination-atop",d.drawImage(a.baseTexture.source,e.x,e.y,e.width,e.height,0,0,e.width,e.height)},b.CanvasTinter.tintWithPerPixel=function(a,c,d){var e=d.getContext("2d"),f=a.frame;d.width=f.width,d.height=f.height,e.globalCompositeOperation="copy",e.drawImage(a.baseTexture.source,f.x,f.y,f.width,f.height,0,0,f.width,f.height);for(var g=b.hex2rgb(c),h=g[0],i=g[1],j=g[2],k=e.getImageData(0,0,f.width,f.height),l=k.data,m=0;m<l.length;m+=4)l[m+0]*=h,l[m+1]*=i,l[m+2]*=j;e.putImageData(k,0,0)},b.CanvasTinter.roundColor=function(a){var c=b.CanvasTinter.cacheStepsPerColorChannel,d=b.hex2rgb(a);return d[0]=Math.min(255,d[0]/c*c),d[1]=Math.min(255,d[1]/c*c),d[2]=Math.min(255,d[2]/c*c),b.rgb2hex(d)},b.CanvasTinter.cacheStepsPerColorChannel=8,b.CanvasTinter.convertTintToImage=!1,b.CanvasTinter.canUseMultiply=b.canUseNewCanvasBlendModes(),b.CanvasTinter.tintMethod=b.CanvasTinter.canUseMultiply?b.CanvasTinter.tintWithMultiply:b.CanvasTinter.tintWithPerPixel,b.CanvasRenderer=function(a,c,d,e){b.defaultRenderer||(b.sayHello("Canvas"),b.defaultRenderer=this),this.type=b.CANVAS_RENDERER,this.clearBeforeRender=!0,this.transparent=!!e,b.blendModesCanvas||(b.blendModesCanvas=[],b.canUseNewCanvasBlendModes()?(b.blendModesCanvas[b.blendModes.NORMAL]="source-over",b.blendModesCanvas[b.blendModes.ADD]="lighter",b.blendModesCanvas[b.blendModes.MULTIPLY]="multiply",b.blendModesCanvas[b.blendModes.SCREEN]="screen",b.blendModesCanvas[b.blendModes.OVERLAY]="overlay",b.blendModesCanvas[b.blendModes.DARKEN]="darken",b.blendModesCanvas[b.blendModes.LIGHTEN]="lighten",b.blendModesCanvas[b.blendModes.COLOR_DODGE]="color-dodge",b.blendModesCanvas[b.blendModes.COLOR_BURN]="color-burn",b.blendModesCanvas[b.blendModes.HARD_LIGHT]="hard-light",b.blendModesCanvas[b.blendModes.SOFT_LIGHT]="soft-light",b.blendModesCanvas[b.blendModes.DIFFERENCE]="difference",b.blendModesCanvas[b.blendModes.EXCLUSION]="exclusion",b.blendModesCanvas[b.blendModes.HUE]="hue",b.blendModesCanvas[b.blendModes.SATURATION]="saturation",b.blendModesCanvas[b.blendModes.COLOR]="color",b.blendModesCanvas[b.blendModes.LUMINOSITY]="luminosity"):(b.blendModesCanvas[b.blendModes.NORMAL]="source-over",b.blendModesCanvas[b.blendModes.ADD]="lighter",b.blendModesCanvas[b.blendModes.MULTIPLY]="source-over",b.blendModesCanvas[b.blendModes.SCREEN]="source-over",b.blendModesCanvas[b.blendModes.OVERLAY]="source-over",b.blendModesCanvas[b.blendModes.DARKEN]="source-over",b.blendModesCanvas[b.blendModes.LIGHTEN]="source-over",b.blendModesCanvas[b.blendModes.COLOR_DODGE]="source-over",b.blendModesCanvas[b.blendModes.COLOR_BURN]="source-over",b.blendModesCanvas[b.blendModes.HARD_LIGHT]="source-over",b.blendModesCanvas[b.blendModes.SOFT_LIGHT]="source-over",b.blendModesCanvas[b.blendModes.DIFFERENCE]="source-over",b.blendModesCanvas[b.blendModes.EXCLUSION]="source-over",b.blendModesCanvas[b.blendModes.HUE]="source-over",b.blendModesCanvas[b.blendModes.SATURATION]="source-over",b.blendModesCanvas[b.blendModes.COLOR]="source-over",b.blendModesCanvas[b.blendModes.LUMINOSITY]="source-over")),this.width=a||800,this.height=c||600,this.view=d||document.createElement("canvas"),this.context=this.view.getContext("2d",{alpha:this.transparent}),this.refresh=!0,this.view.width=this.width,this.view.height=this.height,this.count=0,this.maskManager=new b.CanvasMaskManager,this.renderSession={context:this.context,maskManager:this.maskManager,scaleMode:null,smoothProperty:null,roundPixels:!1},"imageSmoothingEnabled"in this.context?this.renderSession.smoothProperty="imageSmoothingEnabled":"webkitImageSmoothingEnabled"in this.context?this.renderSession.smoothProperty="webkitImageSmoothingEnabled":"mozImageSmoothingEnabled"in this.context?this.renderSession.smoothProperty="mozImageSmoothingEnabled":"oImageSmoothingEnabled"in this.context&&(this.renderSession.smoothProperty="oImageSmoothingEnabled")},b.CanvasRenderer.prototype.constructor=b.CanvasRenderer,b.CanvasRenderer.prototype.render=function(a){b.texturesToUpdate.length=0,b.texturesToDestroy.length=0,a.updateTransform(),this.context.setTransform(1,0,0,1,0,0),this.context.globalAlpha=1,navigator.isCocoonJS&&this.view.screencanvas&&(this.context.fillStyle="black",this.context.clear()),!this.transparent&&this.clearBeforeRender?(this.context.fillStyle=a.backgroundColorString,this.context.fillRect(0,0,this.width,this.height)):this.transparent&&this.clearBeforeRender&&this.context.clearRect(0,0,this.width,this.height),this.renderDisplayObject(a),a.interactive&&(a._interactiveEventsAdded||(a._interactiveEventsAdded=!0,a.interactionManager.setTarget(this))),b.Texture.frameUpdates.length>0&&(b.Texture.frameUpdates.length=0)},b.CanvasRenderer.prototype.resize=function(a,b){this.width=a,this.height=b,this.view.width=a,this.view.height=b},b.CanvasRenderer.prototype.renderDisplayObject=function(a,b){this.renderSession.context=b||this.context,a._renderCanvas(this.renderSession)},b.CanvasRenderer.prototype.renderStripFlat=function(a){var b=this.context,c=a.verticies,d=c.length/2;this.count++,b.beginPath();for(var e=1;d-2>e;e++){var f=2*e,g=c[f],h=c[f+2],i=c[f+4],j=c[f+1],k=c[f+3],l=c[f+5];b.moveTo(g,j),b.lineTo(h,k),b.lineTo(i,l)}b.fillStyle="#FF0000",b.fill(),b.closePath()},b.CanvasRenderer.prototype.renderStrip=function(a){var b=this.context,c=a.verticies,d=a.uvs,e=c.length/2;this.count++;for(var f=1;e-2>f;f++){var g=2*f,h=c[g],i=c[g+2],j=c[g+4],k=c[g+1],l=c[g+3],m=c[g+5],n=d[g]*a.texture.width,o=d[g+2]*a.texture.width,p=d[g+4]*a.texture.width,q=d[g+1]*a.texture.height,r=d[g+3]*a.texture.height,s=d[g+5]*a.texture.height;b.save(),b.beginPath(),b.moveTo(h,k),b.lineTo(i,l),b.lineTo(j,m),b.closePath(),b.clip();var t=n*r+q*p+o*s-r*p-q*o-n*s,u=h*r+q*j+i*s-r*j-q*i-h*s,v=n*i+h*p+o*j-i*p-h*o-n*j,w=n*r*j+q*i*p+h*o*s-h*r*p-q*o*j-n*i*s,x=k*r+q*m+l*s-r*m-q*l-k*s,y=n*l+k*p+o*m-l*p-k*o-n*m,z=n*r*m+q*l*p+k*o*s-k*r*p-q*o*m-n*l*s;b.transform(u/t,x/t,v/t,y/t,w/t,z/t),b.drawImage(a.texture.baseTexture.source,0,0),b.restore()}},b.CanvasBuffer=function(a,b){this.width=a,this.height=b,this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.width=a,this.canvas.height=b},b.CanvasBuffer.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},b.CanvasBuffer.prototype.resize=function(a,b){this.width=this.canvas.width=a,this.height=this.canvas.height=b},b.CanvasGraphics=function(){},b.CanvasGraphics.renderGraphics=function(a,c){for(var d=a.worldAlpha,e="",f=0;f<a.graphicsData.length;f++){var g=a.graphicsData[f],h=g.points;if(c.strokeStyle=e="#"+("00000"+(0|g.lineColor).toString(16)).substr(-6),c.lineWidth=g.lineWidth,g.type===b.Graphics.POLY){c.beginPath(),c.moveTo(h[0],h[1]);for(var i=1;i<h.length/2;i++)c.lineTo(h[2*i],h[2*i+1]);h[0]===h[h.length-2]&&h[1]===h[h.length-1]&&c.closePath(),g.fill&&(c.globalAlpha=g.fillAlpha*d,c.fillStyle=e="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),c.fill()),g.lineWidth&&(c.globalAlpha=g.lineAlpha*d,c.stroke())}else if(g.type===b.Graphics.RECT)(g.fillColor||0===g.fillColor)&&(c.globalAlpha=g.fillAlpha*d,c.fillStyle=e="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),c.fillRect(h[0],h[1],h[2],h[3])),g.lineWidth&&(c.globalAlpha=g.lineAlpha*d,c.strokeRect(h[0],h[1],h[2],h[3]));else if(g.type===b.Graphics.CIRC)c.beginPath(),c.arc(h[0],h[1],h[2],0,2*Math.PI),c.closePath(),g.fill&&(c.globalAlpha=g.fillAlpha*d,c.fillStyle=e="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),c.fill()),g.lineWidth&&(c.globalAlpha=g.lineAlpha*d,c.stroke());else if(g.type===b.Graphics.ELIP){var j=g.points,k=2*j[2],l=2*j[3],m=j[0]-k/2,n=j[1]-l/2;c.beginPath();var o=.5522848,p=k/2*o,q=l/2*o,r=m+k,s=n+l,t=m+k/2,u=n+l/2;c.moveTo(m,u),c.bezierCurveTo(m,u-q,t-p,n,t,n),c.bezierCurveTo(t+p,n,r,u-q,r,u),c.bezierCurveTo(r,u+q,t+p,s,t,s),c.bezierCurveTo(t-p,s,m,u+q,m,u),c.closePath(),g.fill&&(c.globalAlpha=g.fillAlpha*d,c.fillStyle=e="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),c.fill()),g.lineWidth&&(c.globalAlpha=g.lineAlpha*d,c.stroke())}else if(g.type===b.Graphics.RREC){var v=h[0],w=h[1],x=h[2],y=h[3],z=h[4],A=Math.min(x,y)/2|0;z=z>A?A:z,c.beginPath(),c.moveTo(v,w+z),c.lineTo(v,w+y-z),c.quadraticCurveTo(v,w+y,v+z,w+y),c.lineTo(v+x-z,w+y),c.quadraticCurveTo(v+x,w+y,v+x,w+y-z),c.lineTo(v+x,w+z),c.quadraticCurveTo(v+x,w,v+x-z,w),c.lineTo(v+z,w),c.quadraticCurveTo(v,w,v,w+z),c.closePath(),(g.fillColor||0===g.fillColor)&&(c.globalAlpha=g.fillAlpha*d,c.fillStyle=e="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),c.fill()),g.lineWidth&&(c.globalAlpha=g.lineAlpha*d,c.stroke())}}},b.CanvasGraphics.renderGraphicsMask=function(a,c){var d=a.graphicsData.length;if(0!==d){d>1&&(d=1,window.console.log("Pixi.js warning: masks in canvas can only mask using the first path in the graphics object"));for(var e=0;1>e;e++){var f=a.graphicsData[e],g=f.points;if(f.type===b.Graphics.POLY){c.beginPath(),c.moveTo(g[0],g[1]);for(var h=1;h<g.length/2;h++)c.lineTo(g[2*h],g[2*h+1]);g[0]===g[g.length-2]&&g[1]===g[g.length-1]&&c.closePath()}else if(f.type===b.Graphics.RECT)c.beginPath(),c.rect(g[0],g[1],g[2],g[3]),c.closePath();else if(f.type===b.Graphics.CIRC)c.beginPath(),c.arc(g[0],g[1],g[2],0,2*Math.PI),c.closePath();else if(f.type===b.Graphics.ELIP){var i=f.points,j=2*i[2],k=2*i[3],l=i[0]-j/2,m=i[1]-k/2;c.beginPath();var n=.5522848,o=j/2*n,p=k/2*n,q=l+j,r=m+k,s=l+j/2,t=m+k/2;c.moveTo(l,t),c.bezierCurveTo(l,t-p,s-o,m,s,m),c.bezierCurveTo(s+o,m,q,t-p,q,t),c.bezierCurveTo(q,t+p,s+o,r,s,r),c.bezierCurveTo(s-o,r,l,t+p,l,t),c.closePath()}else if(f.type===b.Graphics.RREC){var u=g[0],v=g[1],w=g[2],x=g[3],y=g[4],z=Math.min(w,x)/2|0;y=y>z?z:y,c.beginPath(),c.moveTo(u,v+y),c.lineTo(u,v+x-y),c.quadraticCurveTo(u,v+x,u+y,v+x),c.lineTo(u+w-y,v+x),c.quadraticCurveTo(u+w,v+x,u+w,v+x-y),c.lineTo(u+w,v+y),c.quadraticCurveTo(u+w,v,u+w-y,v),c.lineTo(u+y,v),c.quadraticCurveTo(u,v,u,v+y),c.closePath()}}}},b.Graphics=function(){b.DisplayObjectContainer.call(this),this.renderable=!0,this.fillAlpha=1,this.lineWidth=0,this.lineColor="black",this.graphicsData=[],this.tint=16777215,this.blendMode=b.blendModes.NORMAL,this.currentPath={points:[]},this._webGL=[],this.isMask=!1,this.bounds=null,this.boundsPadding=10,this.dirty=!0},b.Graphics.prototype=Object.create(b.DisplayObjectContainer.prototype),b.Graphics.prototype.constructor=b.Graphics,Object.defineProperty(b.Graphics.prototype,"cacheAsBitmap",{get:function(){return this._cacheAsBitmap},set:function(a){this._cacheAsBitmap=a,this._cacheAsBitmap?this._generateCachedSprite():(this.destroyCachedSprite(),this.dirty=!0)}}),b.Graphics.prototype.lineStyle=function(a,c,d){return this.currentPath.points.length||this.graphicsData.pop(),this.lineWidth=a||0,this.lineColor=c||0,this.lineAlpha=arguments.length<3?1:d,this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[],type:b.Graphics.POLY},this.graphicsData.push(this.currentPath),this},b.Graphics.prototype.moveTo=function(a,c){return this.currentPath.points.length||this.graphicsData.pop(),this.currentPath=this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[],type:b.Graphics.POLY},this.currentPath.points.push(a,c),this.graphicsData.push(this.currentPath),this},b.Graphics.prototype.lineTo=function(a,b){return this.currentPath.points.push(a,b),this.dirty=!0,this},b.Graphics.prototype.quadraticCurveTo=function(a,b,c,d){0===this.currentPath.points.length&&this.moveTo(0,0);var e,f,g=20,h=this.currentPath.points;0===h.length&&this.moveTo(0,0);for(var i=h[h.length-2],j=h[h.length-1],k=0,l=1;g>=l;l++)k=l/g,e=i+(a-i)*k,f=j+(b-j)*k,h.push(e+(a+(c-a)*k-e)*k,f+(b+(d-b)*k-f)*k);return this.dirty=!0,this},b.Graphics.prototype.bezierCurveTo=function(a,b,c,d,e,f){0===this.currentPath.points.length&&this.moveTo(0,0);for(var g,h,i,j,k,l=20,m=this.currentPath.points,n=m[m.length-2],o=m[m.length-1],p=0,q=1;l>q;q++)p=q/l,g=1-p,h=g*g,i=h*g,j=p*p,k=j*p,m.push(i*n+3*h*p*a+3*g*j*c+k*e,i*o+3*h*p*b+3*g*j*d+k*f);return this.dirty=!0,this},b.Graphics.prototype.arcTo=function(a,b,c,d,e){0===this.currentPath.points.length&&this.moveTo(a,b);var f=this.currentPath.points,g=f[f.length-2],h=f[f.length-1],i=h-b,j=g-a,k=d-b,l=c-a,m=Math.abs(i*l-j*k);if(1e-8>m||0===e)f.push(a,b);else{var n=i*i+j*j,o=k*k+l*l,p=i*k+j*l,q=e*Math.sqrt(n)/m,r=e*Math.sqrt(o)/m,s=q*p/n,t=r*p/o,u=q*l+r*j,v=q*k+r*i,w=j*(r+s),x=i*(r+s),y=l*(q+t),z=k*(q+t),A=Math.atan2(x-v,w-u),B=Math.atan2(z-v,y-u);this.arc(u+a,v+b,e,A,B,j*k>l*i)}return this.dirty=!0,this},b.Graphics.prototype.arc=function(a,b,c,d,e,f){var g=a+Math.cos(d)*c,h=b+Math.sin(d)*c,i=this.currentPath.points;if((0!==i.length&&i[i.length-2]!==g||i[i.length-1]!==h)&&(this.moveTo(g,h),i=this.currentPath.points),d===e)return this;!f&&d>=e?e+=2*Math.PI:f&&e>=d&&(d+=2*Math.PI);var j=f?-1*(d-e):e-d,k=Math.abs(j)/(2*Math.PI)*40;if(0===j)return this;for(var l=j/(2*k),m=2*l,n=Math.cos(l),o=Math.sin(l),p=k-1,q=p%1/p,r=0;p>=r;r++){var s=r+q*r,t=l+d+m*s,u=Math.cos(t),v=-Math.sin(t);i.push((n*u+o*v)*c+a,(n*-v+o*u)*c+b)}return this.dirty=!0,this},b.Graphics.prototype.drawPath=function(a){return this.currentPath.points.length||this.graphicsData.pop(),this.currentPath=this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[],type:b.Graphics.POLY},this.graphicsData.push(this.currentPath),this.currentPath.points=this.currentPath.points.concat(a),this.dirty=!0,this},b.Graphics.prototype.beginFill=function(a,b){return this.filling=!0,this.fillColor=a||0,this.fillAlpha=arguments.length<2?1:b,this},b.Graphics.prototype.endFill=function(){return this.filling=!1,this.fillColor=null,this.fillAlpha=1,this},b.Graphics.prototype.drawRect=function(a,c,d,e){return this.currentPath.points.length||this.graphicsData.pop(),this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[a,c,d,e],type:b.Graphics.RECT},this.graphicsData.push(this.currentPath),this.dirty=!0,this},b.Graphics.prototype.drawRoundedRect=function(a,c,d,e,f){return this.currentPath.points.length||this.graphicsData.pop(),this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[a,c,d,e,f],type:b.Graphics.RREC},this.graphicsData.push(this.currentPath),this.dirty=!0,this},b.Graphics.prototype.drawCircle=function(a,c,d){return this.currentPath.points.length||this.graphicsData.pop(),this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[a,c,d,d],type:b.Graphics.CIRC},this.graphicsData.push(this.currentPath),this.dirty=!0,this
},b.Graphics.prototype.drawEllipse=function(a,c,d,e){return this.currentPath.points.length||this.graphicsData.pop(),this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[a,c,d,e],type:b.Graphics.ELIP},this.graphicsData.push(this.currentPath),this.dirty=!0,this},b.Graphics.prototype.clear=function(){return this.lineWidth=0,this.filling=!1,this.dirty=!0,this.clearDirty=!0,this.graphicsData=[],this.bounds=null,this},b.Graphics.prototype.generateTexture=function(){var a=this.getBounds(),c=new b.CanvasBuffer(a.width,a.height),d=b.Texture.fromCanvas(c.canvas);return c.context.translate(-a.x,-a.y),b.CanvasGraphics.renderGraphics(this,c.context),d},b.Graphics.prototype._renderWebGL=function(a){if(this.visible!==!1&&0!==this.alpha&&this.isMask!==!0){if(this._cacheAsBitmap)return this.dirty&&(this._generateCachedSprite(),b.updateWebGLTexture(this._cachedSprite.texture.baseTexture,a.gl),this.dirty=!1),this._cachedSprite.alpha=this.alpha,void b.Sprite.prototype._renderWebGL.call(this._cachedSprite,a);if(a.spriteBatch.stop(),a.blendModeManager.setBlendMode(this.blendMode),this._mask&&a.maskManager.pushMask(this._mask,a),this._filters&&a.filterManager.pushFilter(this._filterBlock),this.blendMode!==a.spriteBatch.currentBlendMode){a.spriteBatch.currentBlendMode=this.blendMode;var c=b.blendModesWebGL[a.spriteBatch.currentBlendMode];a.spriteBatch.gl.blendFunc(c[0],c[1])}if(b.WebGLGraphics.renderGraphics(this,a),this.children.length){a.spriteBatch.start();for(var d=0,e=this.children.length;e>d;d++)this.children[d]._renderWebGL(a);a.spriteBatch.stop()}this._filters&&a.filterManager.popFilter(),this._mask&&a.maskManager.popMask(this.mask,a),a.drawCount++,a.spriteBatch.start()}},b.Graphics.prototype._renderCanvas=function(a){if(this.visible!==!1&&0!==this.alpha&&this.isMask!==!0){var c=a.context,d=this.worldTransform;this.blendMode!==a.currentBlendMode&&(a.currentBlendMode=this.blendMode,c.globalCompositeOperation=b.blendModesCanvas[a.currentBlendMode]),this._mask&&a.maskManager.pushMask(this._mask,a.context),c.setTransform(d.a,d.c,d.b,d.d,d.tx,d.ty),b.CanvasGraphics.renderGraphics(this,c);for(var e=0,f=this.children.length;f>e;e++)this.children[e]._renderCanvas(a);this._mask&&a.maskManager.popMask(a.context)}},b.Graphics.prototype.getBounds=function(a){this.bounds||this.updateBounds();var b=this.bounds.x,c=this.bounds.width+this.bounds.x,d=this.bounds.y,e=this.bounds.height+this.bounds.y,f=a||this.worldTransform,g=f.a,h=f.c,i=f.b,j=f.d,k=f.tx,l=f.ty,m=g*c+i*e+k,n=j*e+h*c+l,o=g*b+i*e+k,p=j*e+h*b+l,q=g*b+i*d+k,r=j*d+h*b+l,s=g*c+i*d+k,t=j*d+h*c+l,u=m,v=n,w=m,x=n;w=w>o?o:w,w=w>q?q:w,w=w>s?s:w,x=x>p?p:x,x=x>r?r:x,x=x>t?t:x,u=o>u?o:u,u=q>u?q:u,u=s>u?s:u,v=p>v?p:v,v=r>v?r:v,v=t>v?t:v;var y=this._bounds;return y.x=w,y.width=u-w,y.y=x,y.height=v-x,y},b.Graphics.prototype.updateBounds=function(){for(var a,c,d,e,f,g=1/0,h=-1/0,i=1/0,j=-1/0,k=0;k<this.graphicsData.length;k++){var l=this.graphicsData[k],m=l.type,n=l.lineWidth;if(a=l.points,m===b.Graphics.RECT)c=a[0]-n/2,d=a[1]-n/2,e=a[2]+n,f=a[3]+n,g=g>c?c:g,h=c+e>h?c+e:h,i=i>d?c:i,j=d+f>j?d+f:j;else if(m===b.Graphics.CIRC||m===b.Graphics.ELIP)c=a[0],d=a[1],e=a[2]+n/2,f=a[3]+n/2,g=g>c-e?c-e:g,h=c+e>h?c+e:h,i=i>d-f?d-f:i,j=d+f>j?d+f:j;else for(var o=0;o<a.length;o+=2)c=a[o],d=a[o+1],g=g>c-n?c-n:g,h=c+n>h?c+n:h,i=i>d-n?d-n:i,j=d+n>j?d+n:j}var p=this.boundsPadding;this.bounds=new b.Rectangle(g-p,i-p,h-g+2*p,j-i+2*p)},b.Graphics.prototype._generateCachedSprite=function(){var a=this.getLocalBounds();if(this._cachedSprite)this._cachedSprite.buffer.resize(a.width,a.height);else{var c=new b.CanvasBuffer(a.width,a.height),d=b.Texture.fromCanvas(c.canvas);this._cachedSprite=new b.Sprite(d),this._cachedSprite.buffer=c,this._cachedSprite.worldTransform=this.worldTransform}this._cachedSprite.anchor.x=-(a.x/a.width),this._cachedSprite.anchor.y=-(a.y/a.height),this._cachedSprite.buffer.context.translate(-a.x,-a.y),b.CanvasGraphics.renderGraphics(this,this._cachedSprite.buffer.context),this._cachedSprite.alpha=this.alpha},b.Graphics.prototype.destroyCachedSprite=function(){this._cachedSprite.texture.destroy(!0),this._cachedSprite=null},b.Graphics.POLY=0,b.Graphics.RECT=1,b.Graphics.CIRC=2,b.Graphics.ELIP=3,b.Graphics.RREC=4,b.Strip=function(a){b.DisplayObjectContainer.call(this),this.texture=a,this.uvs=new b.Float32Array([0,1,1,1,1,0,0,1]),this.verticies=new b.Float32Array([0,0,100,0,100,100,0,100]),this.colors=new b.Float32Array([1,1,1,1]),this.indices=new b.Uint16Array([0,1,2,3]),this.dirty=!0},b.Strip.prototype=Object.create(b.DisplayObjectContainer.prototype),b.Strip.prototype.constructor=b.Strip,b.Strip.prototype._renderWebGL=function(a){!this.visible||this.alpha<=0||(a.spriteBatch.stop(),this._vertexBuffer||this._initWebGL(a),a.shaderManager.setShader(a.shaderManager.stripShader),this._renderStrip(a),a.spriteBatch.start())},b.Strip.prototype._initWebGL=function(a){var b=a.gl;this._vertexBuffer=b.createBuffer(),this._indexBuffer=b.createBuffer(),this._uvBuffer=b.createBuffer(),this._colorBuffer=b.createBuffer(),b.bindBuffer(b.ARRAY_BUFFER,this._vertexBuffer),b.bufferData(b.ARRAY_BUFFER,this.verticies,b.DYNAMIC_DRAW),b.bindBuffer(b.ARRAY_BUFFER,this._uvBuffer),b.bufferData(b.ARRAY_BUFFER,this.uvs,b.STATIC_DRAW),b.bindBuffer(b.ARRAY_BUFFER,this._colorBuffer),b.bufferData(b.ARRAY_BUFFER,this.colors,b.STATIC_DRAW),b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,this._indexBuffer),b.bufferData(b.ELEMENT_ARRAY_BUFFER,this.indices,b.STATIC_DRAW)},b.Strip.prototype._renderStrip=function(a){var c=a.gl,d=a.projection,e=a.offset,f=a.shaderManager.stripShader;c.blendFunc(c.ONE,c.ONE_MINUS_SRC_ALPHA),c.uniformMatrix3fv(f.translationMatrix,!1,this.worldTransform.toArray(!0)),c.uniform2f(f.projectionVector,d.x,-d.y),c.uniform2f(f.offsetVector,-e.x,-e.y),c.uniform1f(f.alpha,1),this.dirty?(this.dirty=!1,c.bindBuffer(c.ARRAY_BUFFER,this._vertexBuffer),c.bufferData(c.ARRAY_BUFFER,this.verticies,c.STATIC_DRAW),c.vertexAttribPointer(f.aVertexPosition,2,c.FLOAT,!1,0,0),c.bindBuffer(c.ARRAY_BUFFER,this._uvBuffer),c.bufferData(c.ARRAY_BUFFER,this.uvs,c.STATIC_DRAW),c.vertexAttribPointer(f.aTextureCoord,2,c.FLOAT,!1,0,0),c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,this.texture.baseTexture._glTextures[c.id]||b.createWebGLTexture(this.texture.baseTexture,c)),c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,this._indexBuffer),c.bufferData(c.ELEMENT_ARRAY_BUFFER,this.indices,c.STATIC_DRAW)):(c.bindBuffer(c.ARRAY_BUFFER,this._vertexBuffer),c.bufferSubData(c.ARRAY_BUFFER,0,this.verticies),c.vertexAttribPointer(f.aVertexPosition,2,c.FLOAT,!1,0,0),c.bindBuffer(c.ARRAY_BUFFER,this._uvBuffer),c.vertexAttribPointer(f.aTextureCoord,2,c.FLOAT,!1,0,0),c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,this.texture.baseTexture._glTextures[c.id]||b.createWebGLTexture(this.texture.baseTexture,c)),c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,this._indexBuffer)),c.drawElements(c.TRIANGLE_STRIP,this.indices.length,c.UNSIGNED_SHORT,0)},b.Strip.prototype._renderCanvas=function(a){var b=a.context,c=this.worldTransform;a.roundPixels?b.setTransform(c.a,c.c,c.b,c.d,0|c.tx,0|c.ty):b.setTransform(c.a,c.c,c.b,c.d,c.tx,c.ty);var d=this,e=d.verticies,f=d.uvs,g=e.length/2;this.count++;for(var h=0;g-2>h;h++){var i=2*h,j=e[i],k=e[i+2],l=e[i+4],m=e[i+1],n=e[i+3],o=e[i+5],p=(j+k+l)/3,q=(m+n+o)/3,r=j-p,s=m-q,t=Math.sqrt(r*r+s*s);j=p+r/t*(t+3),m=q+s/t*(t+3),r=k-p,s=n-q,t=Math.sqrt(r*r+s*s),k=p+r/t*(t+3),n=q+s/t*(t+3),r=l-p,s=o-q,t=Math.sqrt(r*r+s*s),l=p+r/t*(t+3),o=q+s/t*(t+3);var u=f[i]*d.texture.width,v=f[i+2]*d.texture.width,w=f[i+4]*d.texture.width,x=f[i+1]*d.texture.height,y=f[i+3]*d.texture.height,z=f[i+5]*d.texture.height;b.save(),b.beginPath(),b.moveTo(j,m),b.lineTo(k,n),b.lineTo(l,o),b.closePath(),b.clip();var A=u*y+x*w+v*z-y*w-x*v-u*z,B=j*y+x*l+k*z-y*l-x*k-j*z,C=u*k+j*w+v*l-k*w-j*v-u*l,D=u*y*l+x*k*w+j*v*z-j*y*w-x*v*l-u*k*z,E=m*y+x*o+n*z-y*o-x*n-m*z,F=u*n+m*w+v*o-n*w-m*v-u*o,G=u*y*o+x*n*w+m*v*z-m*y*w-x*v*o-u*n*z;b.transform(B/A,E/A,C/A,F/A,D/A,G/A),b.drawImage(d.texture.baseTexture.source,0,0),b.restore()}},b.Strip.prototype.onTextureUpdate=function(){this.updateFrame=!0},b.Rope=function(a,c){b.Strip.call(this,a),this.points=c,this.verticies=new b.Float32Array(4*c.length),this.uvs=new b.Float32Array(4*c.length),this.colors=new b.Float32Array(2*c.length),this.indices=new b.Uint16Array(2*c.length),this.refresh()},b.Rope.prototype=Object.create(b.Strip.prototype),b.Rope.prototype.constructor=b.Rope,b.Rope.prototype.refresh=function(){var a=this.points;if(!(a.length<1)){var b=this.uvs,c=a[0],d=this.indices,e=this.colors;this.count-=.2,b[0]=0,b[1]=0,b[2]=0,b[3]=1,e[0]=1,e[1]=1,d[0]=0,d[1]=1;for(var f,g,h,i=a.length,j=1;i>j;j++)f=a[j],g=4*j,h=j/(i-1),j%2?(b[g]=h,b[g+1]=0,b[g+2]=h,b[g+3]=1):(b[g]=h,b[g+1]=0,b[g+2]=h,b[g+3]=1),g=2*j,e[g]=1,e[g+1]=1,g=2*j,d[g]=g,d[g+1]=g+1,c=f}},b.Rope.prototype.updateTransform=function(){var a=this.points;if(!(a.length<1)){var c,d=a[0],e={x:0,y:0};this.count-=.2;for(var f,g,h,i,j,k=this.verticies,l=a.length,m=0;l>m;m++)f=a[m],g=4*m,c=m<a.length-1?a[m+1]:f,e.y=-(c.x-d.x),e.x=c.y-d.y,h=10*(1-m/(l-1)),h>1&&(h=1),i=Math.sqrt(e.x*e.x+e.y*e.y),j=this.texture.height/2,e.x/=i,e.y/=i,e.x*=j,e.y*=j,k[g]=f.x+e.x,k[g+1]=f.y+e.y,k[g+2]=f.x-e.x,k[g+3]=f.y-e.y,d=f;b.DisplayObjectContainer.prototype.updateTransform.call(this)}},b.Rope.prototype.setTexture=function(a){this.texture=a},b.TilingSprite=function(a,c,d){b.Sprite.call(this,a),this._width=c||100,this._height=d||100,this.tileScale=new b.Point(1,1),this.tileScaleOffset=new b.Point(1,1),this.tilePosition=new b.Point(0,0),this.renderable=!0,this.tint=16777215,this.blendMode=b.blendModes.NORMAL},b.TilingSprite.prototype=Object.create(b.Sprite.prototype),b.TilingSprite.prototype.constructor=b.TilingSprite,Object.defineProperty(b.TilingSprite.prototype,"width",{get:function(){return this._width},set:function(a){this._width=a}}),Object.defineProperty(b.TilingSprite.prototype,"height",{get:function(){return this._height},set:function(a){this._height=a}}),b.TilingSprite.prototype.setTexture=function(a){this.texture!==a&&(this.texture=a,this.refreshTexture=!0,this.cachedTint=16777215)},b.TilingSprite.prototype._renderWebGL=function(a){if(this.visible!==!1&&0!==this.alpha){var c,d;for(this._mask&&(a.spriteBatch.stop(),a.maskManager.pushMask(this.mask,a),a.spriteBatch.start()),this._filters&&(a.spriteBatch.flush(),a.filterManager.pushFilter(this._filterBlock)),!this.tilingTexture||this.refreshTexture?(this.generateTilingTexture(!0),this.tilingTexture&&this.tilingTexture.needsUpdate&&(b.updateWebGLTexture(this.tilingTexture.baseTexture,a.gl),this.tilingTexture.needsUpdate=!1)):a.spriteBatch.renderTilingSprite(this),c=0,d=this.children.length;d>c;c++)this.children[c]._renderWebGL(a);a.spriteBatch.stop(),this._filters&&a.filterManager.popFilter(),this._mask&&a.maskManager.popMask(a),a.spriteBatch.start()}},b.TilingSprite.prototype._renderCanvas=function(a){if(this.visible!==!1&&0!==this.alpha){var c=a.context;this._mask&&a.maskManager.pushMask(this._mask,c),c.globalAlpha=this.worldAlpha;var d,e,f=this.worldTransform;if(c.setTransform(f.a,f.c,f.b,f.d,f.tx,f.ty),!this.__tilePattern||this.refreshTexture){if(this.generateTilingTexture(!1),!this.tilingTexture)return;this.__tilePattern=c.createPattern(this.tilingTexture.baseTexture.source,"repeat")}this.blendMode!==a.currentBlendMode&&(a.currentBlendMode=this.blendMode,c.globalCompositeOperation=b.blendModesCanvas[a.currentBlendMode]);var g=this.tilePosition,h=this.tileScale;for(g.x%=this.tilingTexture.baseTexture.width,g.y%=this.tilingTexture.baseTexture.height,c.scale(h.x,h.y),c.translate(g.x,g.y),c.fillStyle=this.__tilePattern,c.fillRect(-g.x+this.anchor.x*-this._width,-g.y+this.anchor.y*-this._height,this._width/h.x,this._height/h.y),c.scale(1/h.x,1/h.y),c.translate(-g.x,-g.y),this._mask&&a.maskManager.popMask(a.context),d=0,e=this.children.length;e>d;d++)this.children[d]._renderCanvas(a)}},b.TilingSprite.prototype.getBounds=function(){var a=this._width,b=this._height,c=a*(1-this.anchor.x),d=a*-this.anchor.x,e=b*(1-this.anchor.y),f=b*-this.anchor.y,g=this.worldTransform,h=g.a,i=g.c,j=g.b,k=g.d,l=g.tx,m=g.ty,n=h*d+j*f+l,o=k*f+i*d+m,p=h*c+j*f+l,q=k*f+i*c+m,r=h*c+j*e+l,s=k*e+i*c+m,t=h*d+j*e+l,u=k*e+i*d+m,v=-1/0,w=-1/0,x=1/0,y=1/0;x=x>n?n:x,x=x>p?p:x,x=x>r?r:x,x=x>t?t:x,y=y>o?o:y,y=y>q?q:y,y=y>s?s:y,y=y>u?u:y,v=n>v?n:v,v=p>v?p:v,v=r>v?r:v,v=t>v?t:v,w=o>w?o:w,w=q>w?q:w,w=s>w?s:w,w=u>w?u:w;var z=this._bounds;return z.x=x,z.width=v-x,z.y=y,z.height=w-y,this._currentBounds=z,z},b.TilingSprite.prototype.onTextureUpdate=function(){},b.TilingSprite.prototype.generateTilingTexture=function(a){if(this.texture.baseTexture.hasLoaded){var c,d,e=this.texture,f=e.frame,g=f.width!==e.baseTexture.width||f.height!==e.baseTexture.height,h=!1;if(a?(c=b.getNextPowerOfTwo(f.width),d=b.getNextPowerOfTwo(f.height),(f.width!==c||f.height!==d)&&(h=!0)):g&&(c=f.width,d=f.height,h=!0),h){var i;this.tilingTexture&&this.tilingTexture.isTiling?(i=this.tilingTexture.canvasBuffer,i.resize(c,d),this.tilingTexture.baseTexture.width=c,this.tilingTexture.baseTexture.height=d,this.tilingTexture.needsUpdate=!0):(i=new b.CanvasBuffer(c,d),this.tilingTexture=b.Texture.fromCanvas(i.canvas),this.tilingTexture.canvasBuffer=i,this.tilingTexture.isTiling=!0),i.context.drawImage(e.baseTexture.source,e.crop.x,e.crop.y,e.crop.width,e.crop.height,0,0,c,d),this.tileScaleOffset.x=f.width/c,this.tileScaleOffset.y=f.height/d}else this.tilingTexture&&this.tilingTexture.isTiling&&this.tilingTexture.destroy(!0),this.tileScaleOffset.x=1,this.tileScaleOffset.y=1,this.tilingTexture=e;this.refreshTexture=!1,this.tilingTexture.baseTexture._powerOf2=!0}},b.BaseTextureCache={},b.texturesToUpdate=[],b.texturesToDestroy=[],b.BaseTextureCacheIdGenerator=0,b.BaseTexture=function(a,c){if(b.EventTarget.call(this),this.width=100,this.height=100,this.scaleMode=c||b.scaleModes.DEFAULT,this.hasLoaded=!1,this.source=a,this.id=b.BaseTextureCacheIdGenerator++,this.premultipliedAlpha=!0,this._glTextures=[],this._dirty=[],a){if((this.source.complete||this.source.getContext)&&this.source.width&&this.source.height)this.hasLoaded=!0,this.width=this.source.width,this.height=this.source.height,b.texturesToUpdate.push(this);else{var d=this;this.source.onload=function(){d.hasLoaded=!0,d.width=d.source.width,d.height=d.source.height;for(var a=0;a<d._glTextures.length;a++)d._dirty[a]=!0;d.dispatchEvent({type:"loaded",content:d})},this.source.onerror=function(){d.dispatchEvent({type:"error",content:d})}}this.imageUrl=null,this._powerOf2=!1}},b.BaseTexture.prototype.constructor=b.BaseTexture,b.BaseTexture.prototype.destroy=function(){this.imageUrl?(delete b.BaseTextureCache[this.imageUrl],delete b.TextureCache[this.imageUrl],this.imageUrl=null,this.source.src=null):this.source&&this.source._pixiId&&delete b.BaseTextureCache[this.source._pixiId],this.source=null,b.texturesToDestroy.push(this)},b.BaseTexture.prototype.updateSourceImage=function(a){this.hasLoaded=!1,this.source.src=null,this.source.src=a},b.BaseTexture.fromImage=function(a,c,d){var e=b.BaseTextureCache[a];if(void 0===c&&-1===a.indexOf("data:")&&(c=!0),!e){var f=new Image;c&&(f.crossOrigin=""),f.src=a,e=new b.BaseTexture(f,d),e.imageUrl=a,b.BaseTextureCache[a]=e}return e},b.BaseTexture.fromCanvas=function(a,c){a._pixiId||(a._pixiId="canvas_"+b.TextureCacheIdGenerator++);var d=b.BaseTextureCache[a._pixiId];return d||(d=new b.BaseTexture(a,c),b.BaseTextureCache[a._pixiId]=d),d},b.TextureCache={},b.FrameCache={},b.TextureCacheIdGenerator=0,b.Texture=function(a,c){if(b.EventTarget.call(this),this.noFrame=!1,c||(this.noFrame=!0,c=new b.Rectangle(0,0,1,1)),a instanceof b.Texture&&(a=a.baseTexture),this.baseTexture=a,this.frame=c,this.trim=null,this.valid=!1,this.scope=this,this._uvs=null,this.width=0,this.height=0,this.crop=new b.Rectangle(0,0,1,1),a.hasLoaded)this.noFrame&&(c=new b.Rectangle(0,0,a.width,a.height)),this.setFrame(c);else{var d=this;a.addEventListener("loaded",function(){d.onBaseTextureLoaded()})}},b.Texture.prototype.constructor=b.Texture,b.Texture.prototype.onBaseTextureLoaded=function(){var a=this.baseTexture;a.removeEventListener("loaded",this.onLoaded),this.noFrame&&(this.frame=new b.Rectangle(0,0,a.width,a.height)),this.setFrame(this.frame),this.scope.dispatchEvent({type:"update",content:this})},b.Texture.prototype.destroy=function(a){a&&this.baseTexture.destroy(),this.valid=!1},b.Texture.prototype.setFrame=function(a){if(this.noFrame=!1,this.frame=a,this.width=a.width,this.height=a.height,this.crop.x=a.x,this.crop.y=a.y,this.crop.width=a.width,this.crop.height=a.height,!this.trim&&(a.x+a.width>this.baseTexture.width||a.y+a.height>this.baseTexture.height))throw new Error("Texture Error: frame does not fit inside the base Texture dimensions "+this);this.valid=a&&a.width&&a.height&&this.baseTexture.source&&this.baseTexture.hasLoaded,this.trim&&(this.width=this.trim.width,this.height=this.trim.height,this.frame.width=this.trim.width,this.frame.height=this.trim.height),this.valid&&b.Texture.frameUpdates.push(this)},b.Texture.prototype._updateWebGLuvs=function(){this._uvs||(this._uvs=new b.TextureUvs);var a=this.crop,c=this.baseTexture.width,d=this.baseTexture.height;this._uvs.x0=a.x/c,this._uvs.y0=a.y/d,this._uvs.x1=(a.x+a.width)/c,this._uvs.y1=a.y/d,this._uvs.x2=(a.x+a.width)/c,this._uvs.y2=(a.y+a.height)/d,this._uvs.x3=a.x/c,this._uvs.y3=(a.y+a.height)/d},b.Texture.fromImage=function(a,c,d){var e=b.TextureCache[a];return e||(e=new b.Texture(b.BaseTexture.fromImage(a,c,d)),b.TextureCache[a]=e),e},b.Texture.fromFrame=function(a){var c=b.TextureCache[a];if(!c)throw new Error('The frameId "'+a+'" does not exist in the texture cache ');return c},b.Texture.fromCanvas=function(a,c){var d=b.BaseTexture.fromCanvas(a,c);return new b.Texture(d)},b.Texture.addTextureToCache=function(a,c){b.TextureCache[c]=a},b.Texture.removeTextureFromCache=function(a){var c=b.TextureCache[a];return delete b.TextureCache[a],delete b.BaseTextureCache[a],c},b.Texture.frameUpdates=[],b.TextureUvs=function(){this.x0=0,this.y0=0,this.x1=0,this.y1=0,this.x2=0,this.y2=0,this.x3=0,this.y3=0},b.RenderTexture=function(a,c,d,e){if(b.EventTarget.call(this),this.width=a||100,this.height=c||100,this.frame=new b.Rectangle(0,0,this.width,this.height),this.crop=new b.Rectangle(0,0,this.width,this.height),this.baseTexture=new b.BaseTexture,this.baseTexture.width=this.width,this.baseTexture.height=this.height,this.baseTexture._glTextures=[],this.baseTexture.scaleMode=e||b.scaleModes.DEFAULT,this.baseTexture.hasLoaded=!0,this.renderer=d||b.defaultRenderer,this.renderer.type===b.WEBGL_RENDERER){var f=this.renderer.gl;this.textureBuffer=new b.FilterTexture(f,this.width,this.height,this.baseTexture.scaleMode),this.baseTexture._glTextures[f.id]=this.textureBuffer.texture,this.render=this.renderWebGL,this.projection=new b.Point(this.width/2,-this.height/2)}else this.render=this.renderCanvas,this.textureBuffer=new b.CanvasBuffer(this.width,this.height),this.baseTexture.source=this.textureBuffer.canvas;this.valid=!0,b.Texture.frameUpdates.push(this)},b.RenderTexture.prototype=Object.create(b.Texture.prototype),b.RenderTexture.prototype.constructor=b.RenderTexture,b.RenderTexture.prototype.resize=function(a,c,d){(a!==this.width||c!==this.height)&&(this.width=this.frame.width=this.crop.width=a,this.height=this.frame.height=this.crop.height=c,d&&(this.baseTexture.width=this.width,this.baseTexture.height=this.height),this.renderer.type===b.WEBGL_RENDERER&&(this.projection.x=this.width/2,this.projection.y=-this.height/2),this.textureBuffer.resize(this.width,this.height))},b.RenderTexture.prototype.clear=function(){this.renderer.type===b.WEBGL_RENDERER&&this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER,this.textureBuffer.frameBuffer),this.textureBuffer.clear()},b.RenderTexture.prototype.renderWebGL=function(a,c,d){var e=this.renderer.gl;e.colorMask(!0,!0,!0,!0),e.viewport(0,0,this.width,this.height),e.bindFramebuffer(e.FRAMEBUFFER,this.textureBuffer.frameBuffer),d&&this.textureBuffer.clear();var f=a.children,g=a.worldTransform;a.worldTransform=b.RenderTexture.tempMatrix,a.worldTransform.d=-1,a.worldTransform.ty=-2*this.projection.y,c&&(a.worldTransform.tx=c.x,a.worldTransform.ty-=c.y);for(var h=0,i=f.length;i>h;h++)f[h].updateTransform();b.WebGLRenderer.updateTextures(),this.renderer.spriteBatch.dirty=!0,this.renderer.renderDisplayObject(a,this.projection,this.textureBuffer.frameBuffer),a.worldTransform=g,this.renderer.spriteBatch.dirty=!0},b.RenderTexture.prototype.renderCanvas=function(a,c,d){var e=a.children,f=a.worldTransform;a.worldTransform=b.RenderTexture.tempMatrix,c?(a.worldTransform.tx=c.x,a.worldTransform.ty=c.y):(a.worldTransform.tx=0,a.worldTransform.ty=0);for(var g=0,h=e.length;h>g;g++)e[g].updateTransform();d&&this.textureBuffer.clear();var i=this.textureBuffer.context;this.renderer.renderDisplayObject(a,i),i.setTransform(1,0,0,1,0,0),a.worldTransform=f},b.RenderTexture.tempMatrix=new b.Matrix,"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=b),exports.PIXI=b):"undefined"!=typeof define&&define.amd?define("PIXI",function(){return a.PIXI=b}()):a.PIXI=b}).call(this),function(){var a=this,b=b||{VERSION:"2.0.7",GAMES:[],AUTO:0,CANVAS:1,WEBGL:2,HEADLESS:3,NONE:0,LEFT:1,RIGHT:2,UP:3,DOWN:4,SPRITE:0,BUTTON:1,IMAGE:2,GRAPHICS:3,TEXT:4,TILESPRITE:5,BITMAPTEXT:6,GROUP:7,RENDERTEXTURE:8,TILEMAP:9,TILEMAPLAYER:10,EMITTER:11,POLYGON:12,BITMAPDATA:13,CANVAS_FILTER:14,WEBGL_FILTER:15,ELLIPSE:16,SPRITEBATCH:17,RETROFONT:18,POINTER:19,blendModes:{NORMAL:0,ADD:1,MULTIPLY:2,SCREEN:3,OVERLAY:4,DARKEN:5,LIGHTEN:6,COLOR_DODGE:7,COLOR_BURN:8,HARD_LIGHT:9,SOFT_LIGHT:10,DIFFERENCE:11,EXCLUSION:12,HUE:13,SATURATION:14,COLOR:15,LUMINOSITY:16},scaleModes:{DEFAULT:0,LINEAR:0,NEAREST:1}};if(PIXI.InteractionManager=PIXI.InteractionManager||function(){},PIXI.dontSayHello=!0,b.Utils={getProperty:function(a,b){for(var c=b.split("."),d=c.pop(),e=c.length,f=1,g=c[0];e>f&&(a=a[g]);)g=c[f],f++;return a?a[d]:null},setProperty:function(a,b,c){for(var d=b.split("."),e=d.pop(),f=d.length,g=1,h=d[0];f>g&&(a=a[h]);)h=d[g],g++;return a&&(a[e]=c),a},transposeArray:function(a){for(var b=new Array(a[0].length),c=0;c<a[0].length;c++){b[c]=new Array(a.length-1);for(var d=a.length-1;d>-1;d--)b[c][d]=a[d][c]}return b},rotateArray:function(a,c){if("string"!=typeof c&&(c=(c%360+360)%360),90===c||-270===c||"rotateLeft"===c)a=b.Utils.transposeArray(a),a=a.reverse();else if(-90===c||270===c||"rotateRight"===c)a=a.reverse(),a=b.Utils.transposeArray(a);else if(180===Math.abs(c)||"rotate180"===c){for(var d=0;d<a.length;d++)a[d].reverse();a=a.reverse()}return a},parseDimension:function(a,b){var c=0,d=0;return"string"==typeof a?"%"===a.substr(-1)?(c=parseInt(a,10)/100,d=0===b?window.innerWidth*c:window.innerHeight*c):d=parseInt(a,10):d=a,d},shuffle:function(a){for(var b=a.length-1;b>0;b--){var c=Math.floor(Math.random()*(b+1)),d=a[b];a[b]=a[c],a[c]=d}return a},pad:function(a,b,c,d){if("undefined"==typeof b)var b=0;if("undefined"==typeof c)var c=" ";if("undefined"==typeof d)var d=3;var e=0;if(b+1>=a.length)switch(d){case 1:a=new Array(b+1-a.length).join(c)+a;break;case 3:var f=Math.ceil((e=b-a.length)/2),g=e-f;a=new Array(g+1).join(c)+a+new Array(f+1).join(c);break;default:a+=new Array(b+1-a.length).join(c)}return a},isPlainObject:function(a){if("object"!=typeof a||a.nodeType||a===a.window)return!1;try{if(a.constructor&&!{}.hasOwnProperty.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},extend:function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[1]||{},i=2),j===i&&(h=this,--i);j>i;i++)if(null!=(a=arguments[i]))for(c in a)d=h[c],e=a[c],h!==e&&(k&&e&&(b.Utils.isPlainObject(e)||(f=Array.isArray(e)))?(f?(f=!1,g=d&&Array.isArray(d)?d:[]):g=d&&b.Utils.isPlainObject(d)?d:{},h[c]=b.Utils.extend(k,g,e)):void 0!==e&&(h[c]=e));return h},mixin:function(a,c){if(!a||"object"!=typeof a)return c;for(var d in a){var e=a[d];if(!e.childNodes&&!e.cloneNode){var f=typeof a[d];c[d]=a[d]&&"object"===f?typeof c[d]===f?b.Utils.mixin(a[d],c[d]):b.Utils.mixin(a[d],new e.constructor):a[d]}}return c}},"function"!=typeof Function.prototype.bind&&(Function.prototype.bind=function(){var a=Array.prototype.slice;return function(b){function c(){var f=e.concat(a.call(arguments));d.apply(this instanceof c?this:b,f)}var d=this,e=a.call(arguments,1);if("function"!=typeof d)throw new TypeError;return c.prototype=function f(a){return a&&(f.prototype=a),this instanceof f?void 0:new f}(d.prototype),c}}()),Array.isArray||(Array.isArray=function(a){return"[object Array]"==Object.prototype.toString.call(a)}),Array.prototype.forEach||(Array.prototype.forEach=function(a){if(void 0===this||null===this)throw new TypeError;var b=Object(this),c=b.length>>>0;if("function"!=typeof a)throw new TypeError;for(var d=arguments.length>=2?arguments[1]:void 0,e=0;c>e;e++)e in b&&a.call(d,b[e],e,b)}),"function"!=typeof window.Uint32Array){var c=function(a){var b=new Array;window[a]=function(a){if("number"==typeof a){Array.call(this,a),this.length=a;for(var b=0;b<this.length;b++)this[b]=0}else{Array.call(this,a.length),this.length=a.length;for(var b=0;b<this.length;b++)this[b]=a[b]}},window[a].prototype=b,window[a].constructor=window[a]};c("Uint32Array"),c("Int16Array")}window.console||(window.console={},window.console.log=window.console.assert=function(){},window.console.warn=window.console.assert=function(){}),b.Circle=function(a,b,c){a=a||0,b=b||0,c=c||0,this.x=a,this.y=b,this._diameter=c,this._radius=c>0?.5*c:0},b.Circle.prototype={circumference:function(){return 2*Math.PI*this._radius},setTo:function(a,b,c){return this.x=a,this.y=b,this._diameter=c,this._radius=.5*c,this},copyFrom:function(a){return this.setTo(a.x,a.y,a.diameter)},copyTo:function(a){return a.x=this.x,a.y=this.y,a.diameter=this._diameter,a},distance:function(a,c){return"undefined"==typeof c&&(c=!1),c?b.Math.distanceRounded(this.x,this.y,a.x,a.y):b.Math.distance(this.x,this.y,a.x,a.y)},clone:function(a){return"undefined"==typeof a?a=new b.Circle(this.x,this.y,this.diameter):a.setTo(this.x,this.y,this.diameter),a},contains:function(a,c){return b.Circle.contains(this,a,c)},circumferencePoint:function(a,c,d){return b.Circle.circumferencePoint(this,a,c,d)},offset:function(a,b){return this.x+=a,this.y+=b,this},offsetPoint:function(a){return this.offset(a.x,a.y)},toString:function(){return"[{Phaser.Circle (x="+this.x+" y="+this.y+" diameter="+this.diameter+" radius="+this.radius+")}]"}},b.Circle.prototype.constructor=b.Circle,Object.defineProperty(b.Circle.prototype,"diameter",{get:function(){return this._diameter},set:function(a){a>0&&(this._diameter=a,this._radius=.5*a)}}),Object.defineProperty(b.Circle.prototype,"radius",{get:function(){return this._radius},set:function(a){a>0&&(this._radius=a,this._diameter=2*a)}}),Object.defineProperty(b.Circle.prototype,"left",{get:function(){return this.x-this._radius},set:function(a){a>this.x?(this._radius=0,this._diameter=0):this.radius=this.x-a}}),Object.defineProperty(b.Circle.prototype,"right",{get:function(){return this.x+this._radius},set:function(a){a<this.x?(this._radius=0,this._diameter=0):this.radius=a-this.x}}),Object.defineProperty(b.Circle.prototype,"top",{get:function(){return this.y-this._radius},set:function(a){a>this.y?(this._radius=0,this._diameter=0):this.radius=this.y-a}}),Object.defineProperty(b.Circle.prototype,"bottom",{get:function(){return this.y+this._radius},set:function(a){a<this.y?(this._radius=0,this._diameter=0):this.radius=a-this.y}}),Object.defineProperty(b.Circle.prototype,"area",{get:function(){return this._radius>0?Math.PI*this._radius*this._radius:0}}),Object.defineProperty(b.Circle.prototype,"empty",{get:function(){return 0===this._diameter},set:function(a){a===!0&&this.setTo(0,0,0)}}),b.Circle.contains=function(a,b,c){if(a.radius>0&&b>=a.left&&b<=a.right&&c>=a.top&&c<=a.bottom){var d=(a.x-b)*(a.x-b),e=(a.y-c)*(a.y-c);return d+e<=a.radius*a.radius}return!1},b.Circle.equals=function(a,b){return a.x==b.x&&a.y==b.y&&a.diameter==b.diameter},b.Circle.intersects=function(a,c){return b.Math.distance(a.x,a.y,c.x,c.y)<=a.radius+c.radius},b.Circle.circumferencePoint=function(a,c,d,e){return"undefined"==typeof d&&(d=!1),"undefined"==typeof e&&(e=new b.Point),d===!0&&(c=b.Math.degToRad(c)),e.x=a.x+a.radius*Math.cos(c),e.y=a.y+a.radius*Math.sin(c),e},b.Circle.intersectsRectangle=function(a,b){var c=Math.abs(a.x-b.x-b.halfWidth),d=b.halfWidth+a.radius;if(c>d)return!1;var e=Math.abs(a.y-b.y-b.halfHeight),f=b.halfHeight+a.radius;if(e>f)return!1;if(c<=b.halfWidth||e<=b.halfHeight)return!0;var g=c-b.halfWidth,h=e-b.halfHeight,i=g*g,j=h*h,k=a.radius*a.radius;return k>=i+j},PIXI.Circle=b.Circle,b.Point=function(a,b){a=a||0,b=b||0,this.x=a,this.y=b},b.Point.prototype={copyFrom:function(a){return this.setTo(a.x,a.y)},invert:function(){return this.setTo(this.y,this.x)},setTo:function(a,b){return this.x=a||0,this.y=b||(0!==b?this.x:0),this},set:function(a,b){return this.x=a||0,this.y=b||(0!==b?this.x:0),this},add:function(a,b){return this.x+=a,this.y+=b,this},subtract:function(a,b){return this.x-=a,this.y-=b,this},multiply:function(a,b){return this.x*=a,this.y*=b,this},divide:function(a,b){return this.x/=a,this.y/=b,this},clampX:function(a,c){return this.x=b.Math.clamp(this.x,a,c),this},clampY:function(a,c){return this.y=b.Math.clamp(this.y,a,c),this},clamp:function(a,c){return this.x=b.Math.clamp(this.x,a,c),this.y=b.Math.clamp(this.y,a,c),this},clone:function(a){return"undefined"==typeof a?a=new b.Point(this.x,this.y):a.setTo(this.x,this.y),a},copyTo:function(a){return a.x=this.x,a.y=this.y,a},distance:function(a,c){return b.Point.distance(this,a,c)},equals:function(a){return a.x===this.x&&a.y===this.y},angle:function(a,c){return"undefined"==typeof c&&(c=!1),c?b.Math.radToDeg(Math.atan2(a.y-this.y,a.x-this.x)):Math.atan2(a.y-this.y,a.x-this.x)},angleSq:function(a){return this.subtract(a).angle(a.subtract(this))},rotate:function(a,c,d,e,f){return b.Point.rotate(this,a,c,d,e,f)},getMagnitude:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},getMagnitudeSq:function(){return this.x*this.x+this.y*this.y},setMagnitude:function(a){return this.normalize().multiply(a,a)},normalize:function(){if(!this.isZero()){var a=this.getMagnitude();this.x/=a,this.y/=a}return this},isZero:function(){return 0===this.x&&0===this.y},dot:function(a){return this.x*a.x+this.y*a.y},cross:function(a){return this.x*a.y-this.y*a.x},perp:function(){return this.setTo(-this.y,this.x)},rperp:function(){return this.setTo(this.y,-this.x)},normalRightHand:function(){return this.setTo(-1*this.y,this.x)},toString:function(){return"[{Point (x="+this.x+" y="+this.y+")}]"}},b.Point.prototype.constructor=b.Point,b.Point.add=function(a,c,d){return"undefined"==typeof d&&(d=new b.Point),d.x=a.x+c.x,d.y=a.y+c.y,d},b.Point.subtract=function(a,c,d){return"undefined"==typeof d&&(d=new b.Point),d.x=a.x-c.x,d.y=a.y-c.y,d},b.Point.multiply=function(a,c,d){return"undefined"==typeof d&&(d=new b.Point),d.x=a.x*c.x,d.y=a.y*c.y,d},b.Point.divide=function(a,c,d){return"undefined"==typeof d&&(d=new b.Point),d.x=a.x/c.x,d.y=a.y/c.y,d},b.Point.equals=function(a,b){return a.x===b.x&&a.y===b.y},b.Point.angle=function(a,b){return Math.atan2(a.y-b.y,a.x-b.x)},b.Point.angleSq=function(a,b){return a.subtract(b).angle(b.subtract(a))},b.Point.negative=function(a,c){return"undefined"==typeof c&&(c=new b.Point),c.setTo(-a.x,-a.y)},b.Point.multiplyAdd=function(a,c,d,e){return"undefined"==typeof e&&(e=new b.Point),e.setTo(a.x+c.x*d,a.y+c.y*d)},b.Point.interpolate=function(a,c,d,e){return"undefined"==typeof e&&(e=new b.Point),e.setTo(a.x+(c.x-a.x)*d,a.y+(c.y-a.y)*d)},b.Point.perp=function(a,c){return"undefined"==typeof c&&(c=new b.Point),c.setTo(-a.y,a.x)},b.Point.rperp=function(a,c){return"undefined"==typeof c&&(c=new b.Point),c.setTo(a.y,-a.x)},b.Point.distance=function(a,c,d){return"undefined"==typeof d&&(d=!1),d?b.Math.distanceRounded(a.x,a.y,c.x,c.y):b.Math.distance(a.x,a.y,c.x,c.y)
},b.Point.project=function(a,c,d){"undefined"==typeof d&&(d=new b.Point);var e=a.dot(c)/c.getMagnitudeSq();return 0!==e&&d.setTo(e*c.x,e*c.y),d},b.Point.projectUnit=function(a,c,d){"undefined"==typeof d&&(d=new b.Point);var e=a.dot(c);return 0!==e&&d.setTo(e*c.x,e*c.y),d},b.Point.normalRightHand=function(a,c){return"undefined"==typeof c&&(c=new b.Point),c.setTo(-1*a.y,a.x)},b.Point.normalize=function(a,c){"undefined"==typeof c&&(c=new b.Point);var d=a.getMagnitude();return 0!==d&&c.setTo(a.x/d,a.y/d),c},b.Point.rotate=function(a,c,d,e,f,g){return f=f||!1,g=g||null,f&&(e=b.Math.degToRad(e)),null===g&&(g=Math.sqrt((c-a.x)*(c-a.x)+(d-a.y)*(d-a.y))),a.setTo(c+g*Math.cos(e),d+g*Math.sin(e))},b.Point.centroid=function(a,c){if("undefined"==typeof c&&(c=new b.Point),"[object Array]"!==Object.prototype.toString.call(a))throw new Error("Phaser.Point. Parameter 'points' must be an array");var d=a.length;if(1>d)throw new Error("Phaser.Point. Parameter 'points' array must not be empty");if(1===d)return c.copyFrom(a[0]),c;for(var e=0;d>e;e++)b.Point.add(c,a[e],c);return c.divide(d,d),c},PIXI.Point=b.Point,b.Rectangle=function(a,b,c,d){a=a||0,b=b||0,c=c||0,d=d||0,this.x=a,this.y=b,this.width=c,this.height=d},b.Rectangle.prototype={offset:function(a,b){return this.x+=a,this.y+=b,this},offsetPoint:function(a){return this.offset(a.x,a.y)},setTo:function(a,b,c,d){return this.x=a,this.y=b,this.width=c,this.height=d,this},floor:function(){this.x=Math.floor(this.x),this.y=Math.floor(this.y)},floorAll:function(){this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.width=Math.floor(this.width),this.height=Math.floor(this.height)},copyFrom:function(a){return this.setTo(a.x,a.y,a.width,a.height)},copyTo:function(a){return a.x=this.x,a.y=this.y,a.width=this.width,a.height=this.height,a},inflate:function(a,c){return b.Rectangle.inflate(this,a,c)},size:function(a){return b.Rectangle.size(this,a)},clone:function(a){return b.Rectangle.clone(this,a)},contains:function(a,c){return b.Rectangle.contains(this,a,c)},containsRect:function(a){return b.Rectangle.containsRect(this,a)},equals:function(a){return b.Rectangle.equals(this,a)},intersection:function(a,c){return b.Rectangle.intersection(this,a,c)},intersects:function(a,c){return b.Rectangle.intersects(this,a,c)},intersectsRaw:function(a,c,d,e,f){return b.Rectangle.intersectsRaw(this,a,c,d,e,f)},union:function(a,c){return b.Rectangle.union(this,a,c)},toString:function(){return"[{Rectangle (x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+" empty="+this.empty+")}]"}},Object.defineProperty(b.Rectangle.prototype,"halfWidth",{get:function(){return Math.round(this.width/2)}}),Object.defineProperty(b.Rectangle.prototype,"halfHeight",{get:function(){return Math.round(this.height/2)}}),Object.defineProperty(b.Rectangle.prototype,"bottom",{get:function(){return this.y+this.height},set:function(a){this.height=a<=this.y?0:this.y-a}}),Object.defineProperty(b.Rectangle.prototype,"bottomRight",{get:function(){return new b.Point(this.right,this.bottom)},set:function(a){this.right=a.x,this.bottom=a.y}}),Object.defineProperty(b.Rectangle.prototype,"left",{get:function(){return this.x},set:function(a){this.width=a>=this.right?0:this.right-a,this.x=a}}),Object.defineProperty(b.Rectangle.prototype,"right",{get:function(){return this.x+this.width},set:function(a){this.width=a<=this.x?0:a-this.x}}),Object.defineProperty(b.Rectangle.prototype,"volume",{get:function(){return this.width*this.height}}),Object.defineProperty(b.Rectangle.prototype,"perimeter",{get:function(){return 2*this.width+2*this.height}}),Object.defineProperty(b.Rectangle.prototype,"centerX",{get:function(){return this.x+this.halfWidth},set:function(a){this.x=a-this.halfWidth}}),Object.defineProperty(b.Rectangle.prototype,"centerY",{get:function(){return this.y+this.halfHeight},set:function(a){this.y=a-this.halfHeight}}),Object.defineProperty(b.Rectangle.prototype,"randomX",{get:function(){return this.x+Math.random()*this.width}}),Object.defineProperty(b.Rectangle.prototype,"randomY",{get:function(){return this.y+Math.random()*this.height}}),Object.defineProperty(b.Rectangle.prototype,"top",{get:function(){return this.y},set:function(a){a>=this.bottom?(this.height=0,this.y=a):this.height=this.bottom-a}}),Object.defineProperty(b.Rectangle.prototype,"topLeft",{get:function(){return new b.Point(this.x,this.y)},set:function(a){this.x=a.x,this.y=a.y}}),Object.defineProperty(b.Rectangle.prototype,"empty",{get:function(){return!this.width||!this.height},set:function(a){a===!0&&this.setTo(0,0,0,0)}}),b.Rectangle.prototype.constructor=b.Rectangle,b.Rectangle.inflate=function(a,b,c){return a.x-=b,a.width+=2*b,a.y-=c,a.height+=2*c,a},b.Rectangle.inflatePoint=function(a,c){return b.Rectangle.inflate(a,c.x,c.y)},b.Rectangle.size=function(a,c){return"undefined"==typeof c||null===c?c=new b.Point(a.width,a.height):c.setTo(a.width,a.height),c},b.Rectangle.clone=function(a,c){return"undefined"==typeof c||null===c?c=new b.Rectangle(a.x,a.y,a.width,a.height):c.setTo(a.x,a.y,a.width,a.height),c},b.Rectangle.contains=function(a,b,c){return a.width<=0||a.height<=0?!1:b>=a.x&&b<=a.right&&c>=a.y&&c<=a.bottom},b.Rectangle.containsRaw=function(a,b,c,d,e,f){return e>=a&&a+c>=e&&f>=b&&b+d>=f},b.Rectangle.containsPoint=function(a,c){return b.Rectangle.contains(a,c.x,c.y)},b.Rectangle.containsRect=function(a,b){return a.volume>b.volume?!1:a.x>=b.x&&a.y>=b.y&&a.right<=b.right&&a.bottom<=b.bottom},b.Rectangle.equals=function(a,b){return a.x==b.x&&a.y==b.y&&a.width==b.width&&a.height==b.height},b.Rectangle.intersection=function(a,c,d){return"undefined"==typeof d&&(d=new b.Rectangle),b.Rectangle.intersects(a,c)&&(d.x=Math.max(a.x,c.x),d.y=Math.max(a.y,c.y),d.width=Math.min(a.right,c.right)-d.x,d.height=Math.min(a.bottom,c.bottom)-d.y),d},b.Rectangle.intersects=function(a,b){return a.width<=0||a.height<=0||b.width<=0||b.height<=0?!1:!(a.right<b.x||a.bottom<b.y||a.x>b.right||a.y>b.bottom)},b.Rectangle.intersectsRaw=function(a,b,c,d,e,f){return"undefined"==typeof f&&(f=0),!(b>a.right+f||c<a.left-f||d>a.bottom+f||e<a.top-f)},b.Rectangle.union=function(a,c,d){return"undefined"==typeof d&&(d=new b.Rectangle),d.setTo(Math.min(a.x,c.x),Math.min(a.y,c.y),Math.max(a.right,c.right)-Math.min(a.left,c.left),Math.max(a.bottom,c.bottom)-Math.min(a.top,c.top))},PIXI.Rectangle=b.Rectangle,PIXI.EmptyRectangle=new b.Rectangle(0,0,0,0),b.Line=function(a,c,d,e){a=a||0,c=c||0,d=d||0,e=e||0,this.start=new b.Point(a,c),this.end=new b.Point(d,e)},b.Line.prototype={setTo:function(a,b,c,d){return this.start.setTo(a,b),this.end.setTo(c,d),this},fromSprite:function(a,b,c){return"undefined"==typeof c&&(c=!1),c?this.setTo(a.center.x,a.center.y,b.center.x,b.center.y):this.setTo(a.x,a.y,b.x,b.y)},intersects:function(a,c,d){return b.Line.intersectsPoints(this.start,this.end,a.start,a.end,c,d)},pointOnLine:function(a,b){return(a-this.start.x)*(this.end.y-this.start.y)===(this.end.x-this.start.x)*(b-this.start.y)},pointOnSegment:function(a,b){var c=Math.min(this.start.x,this.end.x),d=Math.max(this.start.x,this.end.x),e=Math.min(this.start.y,this.end.y),f=Math.max(this.start.y,this.end.y);return this.pointOnLine(a,b)&&a>=c&&d>=a&&b>=e&&f>=b},coordinatesOnLine:function(a,b){"undefined"==typeof a&&(a=1),"undefined"==typeof b&&(b=[]);var c=Math.round(this.start.x),d=Math.round(this.start.y),e=Math.round(this.end.x),f=Math.round(this.end.y),g=Math.abs(e-c),h=Math.abs(f-d),i=e>c?1:-1,j=f>d?1:-1,k=g-h;b.push([c,d]);for(var l=1;c!=e||d!=f;){var m=k<<1;m>-h&&(k-=h,c+=i),g>m&&(k+=g,d+=j),l%a===0&&b.push([c,d]),l++}return b}},Object.defineProperty(b.Line.prototype,"length",{get:function(){return Math.sqrt((this.end.x-this.start.x)*(this.end.x-this.start.x)+(this.end.y-this.start.y)*(this.end.y-this.start.y))}}),Object.defineProperty(b.Line.prototype,"angle",{get:function(){return Math.atan2(this.end.y-this.start.y,this.end.x-this.start.x)}}),Object.defineProperty(b.Line.prototype,"slope",{get:function(){return(this.end.y-this.start.y)/(this.end.x-this.start.x)}}),Object.defineProperty(b.Line.prototype,"perpSlope",{get:function(){return-((this.end.x-this.start.x)/(this.end.y-this.start.y))}}),Object.defineProperty(b.Line.prototype,"x",{get:function(){return Math.min(this.start.x,this.end.x)}}),Object.defineProperty(b.Line.prototype,"y",{get:function(){return Math.min(this.start.y,this.end.y)}}),Object.defineProperty(b.Line.prototype,"left",{get:function(){return Math.min(this.start.x,this.end.x)}}),Object.defineProperty(b.Line.prototype,"right",{get:function(){return Math.max(this.start.x,this.end.x)}}),Object.defineProperty(b.Line.prototype,"top",{get:function(){return Math.min(this.start.y,this.end.y)}}),Object.defineProperty(b.Line.prototype,"bottom",{get:function(){return Math.max(this.start.y,this.end.y)}}),Object.defineProperty(b.Line.prototype,"width",{get:function(){return Math.abs(this.start.x-this.end.x)}}),Object.defineProperty(b.Line.prototype,"height",{get:function(){return Math.abs(this.start.y-this.end.y)}}),b.Line.intersectsPoints=function(a,c,d,e,f,g){"undefined"==typeof f&&(f=!0),"undefined"==typeof g&&(g=new b.Point);var h=c.y-a.y,i=e.y-d.y,j=a.x-c.x,k=d.x-e.x,l=c.x*a.y-a.x*c.y,m=e.x*d.y-d.x*e.y,n=h*k-i*j;if(0===n)return null;if(g.x=(j*m-k*l)/n,g.y=(i*l-h*m)/n,f){var o=(e.y-d.y)*(c.x-a.x)-(e.x-d.x)*(c.y-a.y),p=((e.x-d.x)*(a.y-d.y)-(e.y-d.y)*(a.x-d.x))/o,q=((c.x-a.x)*(a.y-d.y)-(c.y-a.y)*(a.x-d.x))/o;return p>=0&&1>=p&&q>=0&&1>=q?g:null}return g},b.Line.intersects=function(a,c,d,e){return b.Line.intersectsPoints(a.start,a.end,c.start,c.end,d,e)},b.Ellipse=function(a,c,d,e){this.type=b.ELLIPSE,a=a||0,c=c||0,d=d||0,e=e||0,this.x=a,this.y=c,this.width=d,this.height=e},b.Ellipse.prototype={setTo:function(a,b,c,d){return this.x=a,this.y=b,this.width=c,this.height=d,this},copyFrom:function(a){return this.setTo(a.x,a.y,a.width,a.height)},copyTo:function(a){return a.x=this.x,a.y=this.y,a.width=this.width,a.height=this.height,a},clone:function(a){return"undefined"==typeof a?a=new b.Ellipse(this.x,this.y,this.width,this.height):a.setTo(this.x,this.y,this.width,this.height),a},contains:function(a,c){return b.Ellipse.contains(this,a,c)},toString:function(){return"[{Phaser.Ellipse (x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+")}]"}},b.Ellipse.prototype.constructor=b.Ellipse,Object.defineProperty(b.Ellipse.prototype,"left",{get:function(){return this.x},set:function(a){this.x=a}}),Object.defineProperty(b.Ellipse.prototype,"right",{get:function(){return this.x+this.width},set:function(a){this.width=a<this.x?0:this.x+a}}),Object.defineProperty(b.Ellipse.prototype,"top",{get:function(){return this.y},set:function(a){this.y=a}}),Object.defineProperty(b.Ellipse.prototype,"bottom",{get:function(){return this.y+this.height},set:function(a){this.height=a<this.y?0:this.y+a}}),Object.defineProperty(b.Ellipse.prototype,"empty",{get:function(){return 0===this.width||0===this.height},set:function(a){a===!0&&this.setTo(0,0,0,0)}}),b.Ellipse.contains=function(a,b,c){if(a.width<=0||a.height<=0)return!1;var d=(b-a.x)/a.width-.5,e=(c-a.y)/a.height-.5;return d*=d,e*=e,.25>d+e},b.Ellipse.prototype.getBounds=function(){return new b.Rectangle(this.x,this.y,this.width,this.height)},PIXI.Ellipse=b.Ellipse,b.Polygon=function(a){if(this.type=b.POLYGON,a instanceof Array||(a=Array.prototype.slice.call(arguments)),"number"==typeof a[0]){for(var c=[],d=0,e=a.length;e>d;d+=2)c.push(new b.Point(a[d],a[d+1]));a=c}this._points=a},b.Polygon.prototype={clone:function(){for(var a=[],c=0;c<this.points.length;c++)a.push(this.points[c].clone());return new b.Polygon(a)},contains:function(a,b){for(var c=!1,d=0,e=this.points.length-1;d<this.points.length;e=d++){var f=this.points[d].x,g=this.points[d].y,h=this.points[e].x,i=this.points[e].y,j=g>b!=i>b&&(h-f)*(b-g)/(i-g)+f>a;j&&(c=!c)}return c}},b.Polygon.prototype.constructor=b.Polygon,Object.defineProperty(b.Polygon.prototype,"points",{get:function(){return this._points},set:function(a){if(a instanceof Array||(a=Array.prototype.slice.call(arguments)),"number"==typeof a[0]){for(var c=[],d=0,e=a.length;e>d;d+=2)c.push(new b.Point(a[d],a[d+1]));a=c}this._points=a}}),Object.defineProperty(b.Polygon.prototype,"area",{get:function(){var a,b,c,d,e,f=Number.MAX_VALUE,g=0;for(e=0;e<this.points.length;e++)this.points[e].y<f&&(f=this.points[e].y);for(e=0;e<this.points.length;e++)a=this.points[e],b=e===this.points.length-1?this.points[0]:this.points[e+1],c=(a.y-f+(b.y-f))/2,d=a.x-b.x,g+=c*d;return g}}),PIXI.Polygon=b.Polygon,b.Camera=function(a,c,d,e,f,g){this.game=a,this.world=a.world,this.id=0,this.view=new b.Rectangle(d,e,f,g),this.screenView=new b.Rectangle(d,e,f,g),this.bounds=new b.Rectangle(d,e,f,g),this.deadzone=null,this.visible=!0,this.atLimit={x:!1,y:!1},this.target=null,this._edge=0,this.displayObject=null,this.scale=null},b.Camera.FOLLOW_LOCKON=0,b.Camera.FOLLOW_PLATFORMER=1,b.Camera.FOLLOW_TOPDOWN=2,b.Camera.FOLLOW_TOPDOWN_TIGHT=3,b.Camera.prototype={follow:function(a,c){"undefined"==typeof c&&(c=b.Camera.FOLLOW_LOCKON),this.target=a;var d;switch(c){case b.Camera.FOLLOW_PLATFORMER:var e=this.width/8,f=this.height/3;this.deadzone=new b.Rectangle((this.width-e)/2,(this.height-f)/2-.25*f,e,f);break;case b.Camera.FOLLOW_TOPDOWN:d=Math.max(this.width,this.height)/4,this.deadzone=new b.Rectangle((this.width-d)/2,(this.height-d)/2,d,d);break;case b.Camera.FOLLOW_TOPDOWN_TIGHT:d=Math.max(this.width,this.height)/8,this.deadzone=new b.Rectangle((this.width-d)/2,(this.height-d)/2,d,d);break;case b.Camera.FOLLOW_LOCKON:this.deadzone=null;break;default:this.deadzone=null}},unfollow:function(){this.target=null},focusOn:function(a){this.setPosition(Math.round(a.x-this.view.halfWidth),Math.round(a.y-this.view.halfHeight))},focusOnXY:function(a,b){this.setPosition(Math.round(a-this.view.halfWidth),Math.round(b-this.view.halfHeight))},update:function(){this.target&&this.updateTarget(),this.bounds&&this.checkBounds(),this.displayObject.position.x=-this.view.x,this.displayObject.position.y=-this.view.y},updateTarget:function(){this.deadzone?(this._edge=this.target.x-this.view.x,this._edge<this.deadzone.left?this.view.x=this.target.x-this.deadzone.left:this._edge>this.deadzone.right&&(this.view.x=this.target.x-this.deadzone.right),this._edge=this.target.y-this.view.y,this._edge<this.deadzone.top?this.view.y=this.target.y-this.deadzone.top:this._edge>this.deadzone.bottom&&(this.view.y=this.target.y-this.deadzone.bottom)):(this.view.x=this.target.x-this.view.halfWidth,this.view.y=this.target.y-this.view.halfHeight)},setBoundsToWorld:function(){this.bounds.setTo(this.game.world.bounds.x,this.game.world.bounds.y,this.game.world.bounds.width,this.game.world.bounds.height)},checkBounds:function(){this.atLimit.x=!1,this.atLimit.y=!1,this.view.x<=this.bounds.x&&(this.atLimit.x=!0,this.view.x=this.bounds.x),this.view.right>=this.bounds.right&&(this.atLimit.x=!0,this.view.x=this.bounds.right-this.width),this.view.y<=this.bounds.top&&(this.atLimit.y=!0,this.view.y=this.bounds.top),this.view.bottom>=this.bounds.bottom&&(this.atLimit.y=!0,this.view.y=this.bounds.bottom-this.height),this.view.floor()},setPosition:function(a,b){this.view.x=a,this.view.y=b,this.bounds&&this.checkBounds()},setSize:function(a,b){this.view.width=a,this.view.height=b},reset:function(){this.target=null,this.view.x=0,this.view.y=0}},b.Camera.prototype.constructor=b.Camera,Object.defineProperty(b.Camera.prototype,"x",{get:function(){return this.view.x},set:function(a){this.view.x=a,this.bounds&&this.checkBounds()}}),Object.defineProperty(b.Camera.prototype,"y",{get:function(){return this.view.y},set:function(a){this.view.y=a,this.bounds&&this.checkBounds()}}),Object.defineProperty(b.Camera.prototype,"width",{get:function(){return this.view.width},set:function(a){this.view.width=a}}),Object.defineProperty(b.Camera.prototype,"height",{get:function(){return this.view.height},set:function(a){this.view.height=a}}),b.State=function(){this.game=null,this.add=null,this.make=null,this.camera=null,this.cache=null,this.input=null,this.load=null,this.math=null,this.sound=null,this.scale=null,this.stage=null,this.time=null,this.tweens=null,this.world=null,this.particles=null,this.physics=null,this.rnd=null},b.State.prototype={preload:function(){},loadUpdate:function(){},loadRender:function(){},create:function(){},update:function(){},render:function(){},paused:function(){},pauseUpdate:function(){},shutdown:function(){}},b.State.prototype.constructor=b.State,b.StateManager=function(a,b){this.game=a,this.states={},this._pendingState=null,"undefined"!=typeof b&&null!==b&&(this._pendingState=b),this._clearWorld=!1,this._clearCache=!1,this._created=!1,this._args=[],this.current="",this.onInitCallback=null,this.onPreloadCallback=null,this.onCreateCallback=null,this.onUpdateCallback=null,this.onRenderCallback=null,this.onPreRenderCallback=null,this.onLoadUpdateCallback=null,this.onLoadRenderCallback=null,this.onPausedCallback=null,this.onResumedCallback=null,this.onPauseUpdateCallback=null,this.onShutDownCallback=null},b.StateManager.prototype={boot:function(){this.game.onPause.add(this.pause,this),this.game.onResume.add(this.resume,this),this.game.load.onLoadComplete.add(this.loadComplete,this),null!==this._pendingState&&("string"==typeof this._pendingState?this.start(this._pendingState,!1,!1):this.add("default",this._pendingState,!0))},add:function(a,c,d){"undefined"==typeof d&&(d=!1);var e;return c instanceof b.State?e=c:"object"==typeof c?(e=c,e.game=this.game):"function"==typeof c&&(e=new c(this.game)),this.states[a]=e,d&&(this.game.isBooted?this.start(a):this._pendingState=a),e},remove:function(a){this.current===a&&(this.callbackContext=null,this.onInitCallback=null,this.onShutDownCallback=null,this.onPreloadCallback=null,this.onLoadRenderCallback=null,this.onLoadUpdateCallback=null,this.onCreateCallback=null,this.onUpdateCallback=null,this.onRenderCallback=null,this.onPausedCallback=null,this.onResumedCallback=null,this.onPauseUpdateCallback=null),delete this.states[a]},start:function(a,b,c){"undefined"==typeof b&&(b=!0),"undefined"==typeof c&&(c=!1),this.checkState(a)&&(this._pendingState=a,this._clearWorld=b,this._clearCache=c,arguments.length>3&&(this._args=Array.prototype.splice.call(arguments,3)))},restart:function(a,b){"undefined"==typeof a&&(a=!0),"undefined"==typeof b&&(b=!1),this._pendingState=this.current,this._clearWorld=a,this._clearCache=b,arguments.length>2&&(this._args=Array.prototype.splice.call(arguments,2))},dummy:function(){},preUpdate:function(){this._pendingState&&this.game.isBooted&&(this.current&&(this.onShutDownCallback&&this.onShutDownCallback.call(this.callbackContext,this.game),this.game.tweens.removeAll(),this.game.camera.reset(),this.game.input.reset(!0),this.game.physics.clear(),this.game.time.removeAll(),this._clearWorld&&(this.game.world.shutdown(),this._clearCache===!0&&this.game.cache.destroy())),this.setCurrentState(this._pendingState),this.onPreloadCallback?(this.game.load.reset(),this.onPreloadCallback.call(this.callbackContext,this.game),0===this.game.load.totalQueuedFiles()&&0===this.game.load.totalQueuedPacks()?this.loadComplete():this.game.load.start()):this.loadComplete(),this.current===this._pendingState&&(this._pendingState=null))},checkState:function(a){if(this.states[a]){var b=!1;return this.states[a].preload&&(b=!0),this.states[a].create&&(b=!0),this.states[a].update&&(b=!0),this.states[a].render&&(b=!0),b===!1?(console.warn("Invalid Phaser State object given. Must contain at least a one of the required functions: preload, create, update or render"),!1):!0}return console.warn("Phaser.StateManager - No state found with the key: "+a),!1},link:function(a){this.states[a].game=this.game,this.states[a].add=this.game.add,this.states[a].make=this.game.make,this.states[a].camera=this.game.camera,this.states[a].cache=this.game.cache,this.states[a].input=this.game.input,this.states[a].load=this.game.load,this.states[a].math=this.game.math,this.states[a].sound=this.game.sound,this.states[a].scale=this.game.scale,this.states[a].state=this,this.states[a].stage=this.game.stage,this.states[a].time=this.game.time,this.states[a].tweens=this.game.tweens,this.states[a].world=this.game.world,this.states[a].particles=this.game.particles,this.states[a].rnd=this.game.rnd,this.states[a].physics=this.game.physics},setCurrentState:function(a){this.callbackContext=this.states[a],this.link(a),this.onInitCallback=this.states[a].init||this.dummy,this.onPreloadCallback=this.states[a].preload||null,this.onLoadRenderCallback=this.states[a].loadRender||null,this.onLoadUpdateCallback=this.states[a].loadUpdate||null,this.onCreateCallback=this.states[a].create||null,this.onUpdateCallback=this.states[a].update||null,this.onPreRenderCallback=this.states[a].preRender||null,this.onRenderCallback=this.states[a].render||null,this.onPausedCallback=this.states[a].paused||null,this.onResumedCallback=this.states[a].resumed||null,this.onPauseUpdateCallback=this.states[a].pauseUpdate||null,this.onShutDownCallback=this.states[a].shutdown||this.dummy,this.current=a,this._created=!1,this.onInitCallback.apply(this.callbackContext,this._args),this._args=[]},getCurrentState:function(){return this.states[this.current]},loadComplete:function(){this._created===!1&&this.onCreateCallback?(this._created=!0,this.onCreateCallback.call(this.callbackContext,this.game)):this._created=!0},pause:function(){this._created&&this.onPausedCallback&&this.onPausedCallback.call(this.callbackContext,this.game)},resume:function(){this._created&&this.onResumedCallback&&this.onResumedCallback.call(this.callbackContext,this.game)},update:function(){this._created&&this.onUpdateCallback?this.onUpdateCallback.call(this.callbackContext,this.game):this.onLoadUpdateCallback&&this.onLoadUpdateCallback.call(this.callbackContext,this.game)},pauseUpdate:function(){this._created&&this.onPauseUpdateCallback?this.onPauseUpdateCallback.call(this.callbackContext,this.game):this.onLoadUpdateCallback&&this.onLoadUpdateCallback.call(this.callbackContext,this.game)},preRender:function(){this.onPreRenderCallback&&this.onPreRenderCallback.call(this.callbackContext,this.game)},render:function(){this._created&&this.onRenderCallback?(this.game.renderType===b.CANVAS&&(this.game.context.save(),this.game.context.setTransform(1,0,0,1,0,0)),this.onRenderCallback.call(this.callbackContext,this.game),this.game.renderType===b.CANVAS&&this.game.context.restore()):this.onLoadRenderCallback&&this.onLoadRenderCallback.call(this.callbackContext,this.game)},destroy:function(){this.callbackContext=null,this.onInitCallback=null,this.onShutDownCallback=null,this.onPreloadCallback=null,this.onLoadRenderCallback=null,this.onLoadUpdateCallback=null,this.onCreateCallback=null,this.onUpdateCallback=null,this.onRenderCallback=null,this.onPausedCallback=null,this.onResumedCallback=null,this.onPauseUpdateCallback=null,this.game=null,this.states={},this._pendingState=null}},b.StateManager.prototype.constructor=b.StateManager,b.LinkedList=function(){this.next=null,this.prev=null,this.first=null,this.last=null,this.total=0},b.LinkedList.prototype={add:function(a){return 0===this.total&&null===this.first&&null===this.last?(this.first=a,this.last=a,this.next=a,a.prev=this,this.total++,a):(this.last.next=a,a.prev=this.last,this.last=a,this.total++,a)},reset:function(){this.first=null,this.last=null,this.next=null,this.prev=null,this.total=0},remove:function(a){return 1===this.total?(this.reset(),void(a.next=a.prev=null)):(a===this.first?this.first=this.first.next:a===this.last&&(this.last=this.last.prev),a.prev&&(a.prev.next=a.next),a.next&&(a.next.prev=a.prev),a.next=a.prev=null,null===this.first&&(this.last=null),void this.total--)},callAll:function(a){if(this.first&&this.last){var b=this.first;do b&&b[a]&&b[a].call(b),b=b.next;while(b!=this.last.next)}}},b.LinkedList.prototype.constructor=b.LinkedList,b.ArrayList=function(){this.total=0,this.position=0,this.list=[]},b.ArrayList.prototype={add:function(a){return this.exists(a)||(this.list.push(a),this.total++),a},getIndex:function(a){return this.list.indexOf(a)},exists:function(a){return this.list.indexOf(a)>-1},reset:function(){this.list.length=0,this.total=0},remove:function(a){var b=this.list.indexOf(a);return b>-1?(this.list.splice(b,1),this.total--,a):void 0},setAll:function(a,b){for(var c=this.list.length;c--;)this.list[c]&&this.list[c][a]&&(this.list[c][a]=b)},callAll:function(a){for(var b=Array.prototype.splice.call(arguments,1),c=this.list.length;c--;)this.list[c]&&this.list[c][a]&&this.list[c][a].apply(this.list[c],b)}},Object.defineProperty(b.ArrayList.prototype,"first",{get:function(){return this.position=0,this.total>0?this.list[0]:null}}),Object.defineProperty(b.ArrayList.prototype,"next",{get:function(){return this.position<this.total?(this.position++,this.list[this.position]):null}}),b.ArrayList.prototype.constructor=b.ArrayList,b.Signal=function(){this._bindings=[],this._prevParams=null;var a=this;this.dispatch=function(){b.Signal.prototype.dispatch.apply(a,arguments)}},b.Signal.prototype={memorize:!1,_shouldPropagate:!0,active:!0,validateListener:function(a,b){if("function"!=typeof a)throw new Error("Phaser.Signal: listener is a required param of {fn}() and should be a Function.".replace("{fn}",b))},_registerListener:function(a,c,d,e){var f,g=this._indexOfListener(a,d);if(-1!==g){if(f=this._bindings[g],f.isOnce()!==c)throw new Error("You cannot add"+(c?"":"Once")+"() then add"+(c?"Once":"")+"() the same listener without removing the relationship first.")}else f=new b.SignalBinding(this,a,c,d,e),this._addBinding(f);return this.memorize&&this._prevParams&&f.execute(this._prevParams),f},_addBinding:function(a){var b=this._bindings.length;do b--;while(this._bindings[b]&&a._priority<=this._bindings[b]._priority);this._bindings.splice(b+1,0,a)},_indexOfListener:function(a,b){for(var c,d=this._bindings.length;d--;)if(c=this._bindings[d],c._listener===a&&c.context===b)return d;return-1},has:function(a,b){return-1!==this._indexOfListener(a,b)},add:function(a,b,c){return this.validateListener(a,"add"),this._registerListener(a,!1,b,c)},addOnce:function(a,b,c){return this.validateListener(a,"addOnce"),this._registerListener(a,!0,b,c)},remove:function(a,b){this.validateListener(a,"remove");var c=this._indexOfListener(a,b);return-1!==c&&(this._bindings[c]._destroy(),this._bindings.splice(c,1)),a},removeAll:function(a){"undefined"==typeof a&&(a=null);for(var b=this._bindings.length;b--;)a?this._bindings[b].context===a&&(this._bindings[b]._destroy(),this._bindings.splice(b,1)):this._bindings[b]._destroy();this._bindings.length=0},getNumListeners:function(){return this._bindings.length},halt:function(){this._shouldPropagate=!1},dispatch:function(){if(this.active){var a,b=Array.prototype.slice.call(arguments),c=this._bindings.length;if(this.memorize&&(this._prevParams=b),c){a=this._bindings.slice(),this._shouldPropagate=!0;do c--;while(a[c]&&this._shouldPropagate&&a[c].execute(b)!==!1)}}},forget:function(){this._prevParams=null},dispose:function(){this.removeAll(),delete this._bindings,delete this._prevParams},toString:function(){return"[Phaser.Signal active:"+this.active+" numListeners:"+this.getNumListeners()+"]"}},b.Signal.prototype.constructor=b.Signal,b.SignalBinding=function(a,b,c,d,e){this._listener=b,this._isOnce=c,this.context=d,this._signal=a,this._priority=e||0},b.SignalBinding.prototype={active:!0,params:null,execute:function(a){var b,c;return this.active&&this._listener&&(c=this.params?this.params.concat(a):a,b=this._listener.apply(this.context,c),this._isOnce&&this.detach()),b},detach:function(){return this.isBound()?this._signal.remove(this._listener,this.context):null},isBound:function(){return!!this._signal&&!!this._listener},isOnce:function(){return this._isOnce},getListener:function(){return this._listener},getSignal:function(){return this._signal},_destroy:function(){delete this._signal,delete this._listener,delete this.context},toString:function(){return"[Phaser.SignalBinding isOnce:"+this._isOnce+", isBound:"+this.isBound()+", active:"+this.active+"]"}},b.SignalBinding.prototype.constructor=b.SignalBinding,b.Filter=function(a,c,d){this.game=a,this.type=b.WEBGL_FILTER,this.passes=[this],this.shaders=[],this.dirty=!0,this.padding=0,this.uniforms={time:{type:"1f",value:0},resolution:{type:"2f",value:{x:256,y:256}},mouse:{type:"2f",value:{x:0,y:0}}},this.fragmentSrc=d||[]},b.Filter.prototype={init:function(){},setResolution:function(a,b){this.uniforms.resolution.value.x=a,this.uniforms.resolution.value.y=b},update:function(a){"undefined"!=typeof a&&(a.x>0&&(this.uniforms.mouse.x=a.x.toFixed(2)),a.y>0&&(this.uniforms.mouse.y=a.y.toFixed(2))),this.uniforms.time.value=this.game.time.totalElapsedSeconds()},destroy:function(){this.game=null}},b.Filter.prototype.constructor=b.Filter,Object.defineProperty(b.Filter.prototype,"width",{get:function(){return this.uniforms.resolution.value.x},set:function(a){this.uniforms.resolution.value.x=a}}),Object.defineProperty(b.Filter.prototype,"height",{get:function(){return this.uniforms.resolution.value.y},set:function(a){this.uniforms.resolution.value.y=a}}),b.Plugin=function(a,b){"undefined"==typeof b&&(b=null),this.game=a,this.parent=b,this.active=!1,this.visible=!1,this.hasPreUpdate=!1,this.hasUpdate=!1,this.hasPostUpdate=!1,this.hasRender=!1,this.hasPostRender=!1},b.Plugin.prototype={preUpdate:function(){},update:function(){},render:function(){},postRender:function(){},destroy:function(){this.game=null,this.parent=null,this.active=!1,this.visible=!1}},b.Plugin.prototype.constructor=b.Plugin,b.PluginManager=function(a){this.game=a,this.plugins=[],this._len=0,this._i=0},b.PluginManager.prototype={add:function(a){var b=Array.prototype.splice.call(arguments,1),c=!1;return"function"==typeof a?a=new a(this.game,this):(a.game=this.game,a.parent=this),"function"==typeof a.preUpdate&&(a.hasPreUpdate=!0,c=!0),"function"==typeof a.update&&(a.hasUpdate=!0,c=!0),"function"==typeof a.postUpdate&&(a.hasPostUpdate=!0,c=!0),"function"==typeof a.render&&(a.hasRender=!0,c=!0),"function"==typeof a.postRender&&(a.hasPostRender=!0,c=!0),c?((a.hasPreUpdate||a.hasUpdate||a.hasPostUpdate)&&(a.active=!0),(a.hasRender||a.hasPostRender)&&(a.visible=!0),this._len=this.plugins.push(a),"function"==typeof a.init&&a.init.apply(a,b),a):null},remove:function(a){for(this._i=this._len;this._i--;)if(this.plugins[this._i]===a)return a.destroy(),this.plugins.splice(this._i,1),void this._len--},removeAll:function(){for(this._i=this._len;this._i--;)this.plugins[this._i].destroy();this.plugins.length=0,this._len=0},preUpdate:function(){for(this._i=this._len;this._i--;)this.plugins[this._i].active&&this.plugins[this._i].hasPreUpdate&&this.plugins[this._i].preUpdate()},update:function(){for(this._i=this._len;this._i--;)this.plugins[this._i].active&&this.plugins[this._i].hasUpdate&&this.plugins[this._i].update()},postUpdate:function(){for(this._i=this._len;this._i--;)this.plugins[this._i].active&&this.plugins[this._i].hasPostUpdate&&this.plugins[this._i].postUpdate()},render:function(){for(this._i=this._len;this._i--;)this.plugins[this._i].visible&&this.plugins[this._i].hasRender&&this.plugins[this._i].render()},postRender:function(){for(this._i=this._len;this._i--;)this.plugins[this._i].visible&&this.plugins[this._i].hasPostRender&&this.plugins[this._i].postRender()},destroy:function(){this.removeAll(),this.game=null}},b.PluginManager.prototype.constructor=b.PluginManager,b.Stage=function(a,c,d){this.game=a,this.offset=new b.Point,this.bounds=new b.Rectangle(0,0,c,d),PIXI.Stage.call(this,0),this.name="_stage_root",this.interactive=!1,this.disableVisibilityChange=!1,this.checkOffsetInterval=2500,this.exists=!0,this.currentRenderOrderID=0,this._hiddenVar="hidden",this._nextOffsetCheck=0,this._backgroundColor=0,a.config&&this.parseConfig(a.config)},b.Stage.prototype=Object.create(PIXI.Stage.prototype),b.Stage.prototype.constructor=b.Stage,b.Stage.prototype.preUpdate=function(){this.currentRenderOrderID=0;for(var a=this.children.length,b=0;a>b;b++)this.children[b].preUpdate()
},b.Stage.prototype.update=function(){for(var a=this.children.length;a--;)this.children[a].update()},b.Stage.prototype.postUpdate=function(){if(this.game.world.camera.target){this.game.world.camera.target.postUpdate(),this.game.world.camera.update();for(var a=this.children.length;a--;)this.children[a]!==this.game.world.camera.target&&this.children[a].postUpdate()}else{this.game.world.camera.update();for(var a=this.children.length;a--;)this.children[a].postUpdate()}this.checkOffsetInterval!==!1&&this.game.time.now>this._nextOffsetCheck&&(b.Canvas.getOffset(this.game.canvas,this.offset),this.bounds.x=this.offset.x,this.bounds.y=this.offset.y,this._nextOffsetCheck=this.game.time.now+this.checkOffsetInterval)},b.Stage.prototype.parseConfig=function(a){a.checkOffsetInterval&&(this.checkOffsetInterval=a.checkOffsetInterval),a.disableVisibilityChange&&(this.disableVisibilityChange=a.disableVisibilityChange),a.fullScreenScaleMode&&(this.fullScreenScaleMode=a.fullScreenScaleMode),a.scaleMode&&(this.scaleMode=a.scaleMode),a.backgroundColor&&(this.backgroundColor=a.backgroundColor)},b.Stage.prototype.boot=function(){b.Canvas.getOffset(this.game.canvas,this.offset),this.bounds.setTo(this.offset.x,this.offset.y,this.game.width,this.game.height);var a=this;this._onChange=function(b){return a.visibilityChange(b)},b.Canvas.setUserSelect(this.game.canvas,"none"),b.Canvas.setTouchAction(this.game.canvas,"none"),this.checkVisibility()},b.Stage.prototype.checkVisibility=function(){this._hiddenVar=void 0!==document.webkitHidden?"webkitvisibilitychange":void 0!==document.mozHidden?"mozvisibilitychange":void 0!==document.msHidden?"msvisibilitychange":void 0!==document.hidden?"visibilitychange":null,this._hiddenVar&&document.addEventListener(this._hiddenVar,this._onChange,!1),window.onpagehide=this._onChange,window.onpageshow=this._onChange,window.onblur=this._onChange,window.onfocus=this._onChange},b.Stage.prototype.visibilityChange=function(a){return"pagehide"===a.type||"blur"===a.type||"pageshow"===a.type||"focus"===a.type?void("pagehide"===a.type||"blur"===a.type?this.game.focusLoss(a):("pageshow"===a.type||"focus"===a.type)&&this.game.focusGain(a)):void(this.disableVisibilityChange||(document.hidden||document.mozHidden||document.msHidden||document.webkitHidden?this.game.gamePaused(a):this.game.gameResumed(a)))},b.Stage.prototype.setBackgroundColor=function(a){if("string"==typeof a){var c=b.Color.hexToColor(a);this._backgroundColor=b.Color.getColor(c.r,c.g,c.b)}else{var c=b.Color.getRGB(a);this._backgroundColor=a}this.backgroundColorSplit=[c.r/255,c.g/255,c.b/255],this.backgroundColorString=b.Color.RGBtoString(c.r,c.g,c.b,255,"#")},Object.defineProperty(b.Stage.prototype,"backgroundColor",{get:function(){return this._backgroundColor},set:function(a){this.game.transparent||this.setBackgroundColor(a)}}),Object.defineProperty(b.Stage.prototype,"smoothed",{get:function(){return!PIXI.scaleModes.LINEAR},set:function(a){PIXI.scaleModes.LINEAR=a?0:1}}),b.Group=function(a,c,d,e,f,g){"undefined"==typeof e&&(e=!1),"undefined"==typeof f&&(f=!1),"undefined"==typeof g&&(g=b.Physics.ARCADE),this.game=a,"undefined"==typeof c&&(c=a.world),this.name=d||"group",PIXI.DisplayObjectContainer.call(this),e?this.game.stage.addChild(this):c&&c.addChild(this),this.z=0,this.type=b.GROUP,this.alive=!0,this.exists=!0,this.classType=b.Sprite,this.scale=new b.Point(1,1),this.cursor=null,this.cameraOffset=new b.Point,this.enableBody=f,this.enableBodyDebug=!1,this.physicsBodyType=g,this._sortProperty="z",this._cache=[0,0,0,0,1,0,1,0,0,0]},b.Group.prototype=Object.create(PIXI.DisplayObjectContainer.prototype),b.Group.prototype.constructor=b.Group,b.Group.RETURN_NONE=0,b.Group.RETURN_TOTAL=1,b.Group.RETURN_CHILD=2,b.Group.SORT_ASCENDING=-1,b.Group.SORT_DESCENDING=1,b.Group.prototype.add=function(a,b){return"undefined"==typeof b&&(b=!1),a.parent!==this&&(this.enableBody&&this.game.physics.enable(a,this.physicsBodyType),this.addChild(a),a.z=this.children.length,!b&&a.events&&a.events.onAddedToGroup.dispatch(a,this),null===this.cursor&&(this.cursor=a)),a},b.Group.prototype.addAt=function(a,b,c){return"undefined"==typeof c&&(c=!1),a.parent!==this&&(this.enableBody&&this.game.physics.enable(a,this.physicsBodyType),this.addChildAt(a,b),this.updateZ(),!c&&a.events&&a.events.onAddedToGroup.dispatch(a,this),null===this.cursor&&(this.cursor=a)),a},b.Group.prototype.getAt=function(a){return 0>a||a>=this.children.length?-1:this.getChildAt(a)},b.Group.prototype.create=function(a,b,c,d,e){"undefined"==typeof e&&(e=!0);var f=new this.classType(this.game,a,b,c,d);return this.enableBody&&this.game.physics.enable(f,this.physicsBodyType,this.enableBodyDebug),f.exists=e,f.visible=e,f.alive=e,this.addChild(f),f.z=this.children.length,f.events&&f.events.onAddedToGroup.dispatch(f,this),null===this.cursor&&(this.cursor=f),f},b.Group.prototype.createMultiple=function(a,b,c,d){"undefined"==typeof d&&(d=!1);for(var e=0;a>e;e++)this.create(0,0,b,c,d)},b.Group.prototype.updateZ=function(){for(var a=this.children.length;a--;)this.children[a].z=a},b.Group.prototype.resetCursor=function(a){return"undefined"==typeof a&&(a=0),a>this.children.length-1&&(a=0),this.cursor?(this._cache[8]=a,this.cursor=this.children[this._cache[8]],this.cursor):void 0},b.Group.prototype.next=function(){return this.cursor?(this._cache[8]>=this.children.length-1?this._cache[8]=0:this._cache[8]++,this.cursor=this.children[this._cache[8]],this.cursor):void 0},b.Group.prototype.previous=function(){return this.cursor?(0===this._cache[8]?this._cache[8]=this.children.length-1:this._cache[8]--,this.cursor=this.children[this._cache[8]],this.cursor):void 0},b.Group.prototype.swap=function(a,b){var c=this.swapChildren(a,b);return c&&this.updateZ(),c},b.Group.prototype.bringToTop=function(a){return a.parent===this&&this.getIndex(a)<this.children.length&&(this.remove(a,!1,!0),this.add(a,!0)),a},b.Group.prototype.sendToBack=function(a){return a.parent===this&&this.getIndex(a)>0&&(this.remove(a,!1,!0),this.addAt(a,0,!0)),a},b.Group.prototype.moveUp=function(a){if(a.parent===this&&this.getIndex(a)<this.children.length-1){var b=this.getIndex(a),c=this.getAt(b+1);c&&this.swap(a,c)}return a},b.Group.prototype.moveDown=function(a){if(a.parent===this&&this.getIndex(a)>0){var b=this.getIndex(a),c=this.getAt(b-1);c&&this.swap(a,c)}return a},b.Group.prototype.xy=function(a,b,c){return 0>a||a>this.children.length?-1:(this.getChildAt(a).x=b,void(this.getChildAt(a).y=c))},b.Group.prototype.reverse=function(){this.children.reverse(),this.updateZ()},b.Group.prototype.getIndex=function(a){return this.children.indexOf(a)},b.Group.prototype.replace=function(a,c){var d=this.getIndex(a);if(-1!==d){void 0!==c.parent&&(c.events.onRemovedFromGroup.dispatch(c,this),c.parent.removeChild(c),c.parent instanceof b.Group&&c.parent.updateZ());var e=a;return this.remove(e),this.addAt(c,d),e}},b.Group.prototype.hasProperty=function(a,b){var c=b.length;return 1===c&&b[0]in a?!0:2===c&&b[0]in a&&b[1]in a[b[0]]?!0:3===c&&b[0]in a&&b[1]in a[b[0]]&&b[2]in a[b[0]][b[1]]?!0:4===c&&b[0]in a&&b[1]in a[b[0]]&&b[2]in a[b[0]][b[1]]&&b[3]in a[b[0]][b[1]][b[2]]?!0:!1},b.Group.prototype.setProperty=function(a,b,c,d,e){if("undefined"==typeof e&&(e=!1),d=d||0,!this.hasProperty(a,b)&&(!e||d>0))return!1;var f=b.length;return 1===f?0===d?a[b[0]]=c:1==d?a[b[0]]+=c:2==d?a[b[0]]-=c:3==d?a[b[0]]*=c:4==d&&(a[b[0]]/=c):2===f?0===d?a[b[0]][b[1]]=c:1==d?a[b[0]][b[1]]+=c:2==d?a[b[0]][b[1]]-=c:3==d?a[b[0]][b[1]]*=c:4==d&&(a[b[0]][b[1]]/=c):3===f?0===d?a[b[0]][b[1]][b[2]]=c:1==d?a[b[0]][b[1]][b[2]]+=c:2==d?a[b[0]][b[1]][b[2]]-=c:3==d?a[b[0]][b[1]][b[2]]*=c:4==d&&(a[b[0]][b[1]][b[2]]/=c):4===f&&(0===d?a[b[0]][b[1]][b[2]][b[3]]=c:1==d?a[b[0]][b[1]][b[2]][b[3]]+=c:2==d?a[b[0]][b[1]][b[2]][b[3]]-=c:3==d?a[b[0]][b[1]][b[2]][b[3]]*=c:4==d&&(a[b[0]][b[1]][b[2]][b[3]]/=c)),!0},b.Group.prototype.checkProperty=function(a,c,d,e){return"undefined"==typeof e&&(e=!1),!b.Utils.getProperty(a,c)&&e?!1:b.Utils.getProperty(a,c)!==d?!1:!0},b.Group.prototype.set=function(a,b,c,d,e,f,g){return"undefined"==typeof g&&(g=!1),b=b.split("."),"undefined"==typeof d&&(d=!1),"undefined"==typeof e&&(e=!1),(d===!1||d&&a.alive)&&(e===!1||e&&a.visible)?this.setProperty(a,b,c,f,g):void 0},b.Group.prototype.setAll=function(a,b,c,d,e,f){"undefined"==typeof c&&(c=!1),"undefined"==typeof d&&(d=!1),"undefined"==typeof f&&(f=!1),a=a.split("."),e=e||0;for(var g=0,h=this.children.length;h>g;g++)(!c||c&&this.children[g].alive)&&(!d||d&&this.children[g].visible)&&this.setProperty(this.children[g],a,b,e,f)},b.Group.prototype.setAllChildren=function(a,c,d,e,f,g){"undefined"==typeof d&&(d=!1),"undefined"==typeof e&&(e=!1),"undefined"==typeof g&&(g=!1),f=f||0;for(var h=0,i=this.children.length;i>h;h++)(!d||d&&this.children[h].alive)&&(!e||e&&this.children[h].visible)&&(this.children[h]instanceof b.Group?this.children[h].setAllChildren(a,c,d,e,f,g):this.setProperty(this.children[h],a.split("."),c,f,g))},b.Group.prototype.checkAll=function(a,b,c,d,e){"undefined"==typeof c&&(c=!1),"undefined"==typeof d&&(d=!1),"undefined"==typeof e&&(e=!1);for(var f=0,g=this.children.length;g>f;f++)if((!c||c&&this.children[f].alive)&&(!d||d&&this.children[f].visible)&&!this.checkProperty(this.children[f],a,b,e))return!1;return!0},b.Group.prototype.addAll=function(a,b,c,d){this.setAll(a,b,c,d,1)},b.Group.prototype.subAll=function(a,b,c,d){this.setAll(a,b,c,d,2)},b.Group.prototype.multiplyAll=function(a,b,c,d){this.setAll(a,b,c,d,3)},b.Group.prototype.divideAll=function(a,b,c,d){this.setAll(a,b,c,d,4)},b.Group.prototype.callAllExists=function(a,b){for(var c=Array.prototype.splice.call(arguments,2),d=0,e=this.children.length;e>d;d++)this.children[d].exists===b&&this.children[d][a]&&this.children[d][a].apply(this.children[d],c)},b.Group.prototype.callbackFromArray=function(a,b,c){if(1==c){if(a[b[0]])return a[b[0]]}else if(2==c){if(a[b[0]][b[1]])return a[b[0]][b[1]]}else if(3==c){if(a[b[0]][b[1]][b[2]])return a[b[0]][b[1]][b[2]]}else if(4==c){if(a[b[0]][b[1]][b[2]][b[3]])return a[b[0]][b[1]][b[2]][b[3]]}else if(a[b])return a[b];return!1},b.Group.prototype.callAll=function(a,b){if("undefined"!=typeof a){a=a.split(".");var c=a.length;if("undefined"==typeof b||null===b||""===b)b=null;else if("string"==typeof b){b=b.split(".");var d=b.length}for(var e=Array.prototype.splice.call(arguments,2),f=null,g=null,h=0,i=this.children.length;i>h;h++)f=this.callbackFromArray(this.children[h],a,c),b&&f?(g=this.callbackFromArray(this.children[h],b,d),f&&f.apply(g,e)):f&&f.apply(this.children[h],e)}},b.Group.prototype.preUpdate=function(){if(!this.exists||!this.parent.exists)return this.renderOrderID=-1,!1;for(var a=this.children.length;a--;)this.children[a].preUpdate();return!0},b.Group.prototype.update=function(){for(var a=this.children.length;a--;)this.children[a].update()},b.Group.prototype.postUpdate=function(){1===this._cache[7]&&(this.x=this.game.camera.view.x+this.cameraOffset.x,this.y=this.game.camera.view.y+this.cameraOffset.y);for(var a=this.children.length;a--;)this.children[a].postUpdate()},b.Group.prototype.forEach=function(a,b,c){"undefined"==typeof c&&(c=!1);var d=Array.prototype.splice.call(arguments,3);d.unshift(null);for(var e=0,f=this.children.length;f>e;e++)(!c||c&&this.children[e].exists)&&(d[0]=this.children[e],a.apply(b,d))},b.Group.prototype.forEachExists=function(a,c){var d=Array.prototype.splice.call(arguments,2);d.unshift(null),this.iterate("exists",!0,b.Group.RETURN_TOTAL,a,c,d)},b.Group.prototype.forEachAlive=function(a,c){var d=Array.prototype.splice.call(arguments,2);d.unshift(null),this.iterate("alive",!0,b.Group.RETURN_TOTAL,a,c,d)},b.Group.prototype.forEachDead=function(a,c){var d=Array.prototype.splice.call(arguments,2);d.unshift(null),this.iterate("alive",!1,b.Group.RETURN_TOTAL,a,c,d)},b.Group.prototype.sort=function(a,c){this.children.length<2||("undefined"==typeof a&&(a="z"),"undefined"==typeof c&&(c=b.Group.SORT_ASCENDING),this._sortProperty=a,this.children.sort(c===b.Group.SORT_ASCENDING?this.ascendingSortHandler.bind(this):this.descendingSortHandler.bind(this)),this.updateZ())},b.Group.prototype.customSort=function(a,b){this.children.length<2||(this.children.sort(a.bind(b)),this.updateZ())},b.Group.prototype.ascendingSortHandler=function(a,b){return a[this._sortProperty]<b[this._sortProperty]?-1:a[this._sortProperty]>b[this._sortProperty]?1:a.z<b.z?-1:1},b.Group.prototype.descendingSortHandler=function(a,b){return a[this._sortProperty]<b[this._sortProperty]?1:a[this._sortProperty]>b[this._sortProperty]?-1:0},b.Group.prototype.iterate=function(a,c,d,e,f,g){if(d===b.Group.RETURN_TOTAL&&0===this.children.length)return 0;"undefined"==typeof e&&(e=!1);for(var h=0,i=0,j=this.children.length;j>i;i++)if(this.children[i][a]===c&&(h++,e&&(g[0]=this.children[i],e.apply(f,g)),d===b.Group.RETURN_CHILD))return this.children[i];return d===b.Group.RETURN_TOTAL?h:d===b.Group.RETURN_CHILD?null:void 0},b.Group.prototype.getFirstExists=function(a){return"boolean"!=typeof a&&(a=!0),this.iterate("exists",a,b.Group.RETURN_CHILD)},b.Group.prototype.getFirstAlive=function(){return this.iterate("alive",!0,b.Group.RETURN_CHILD)},b.Group.prototype.getFirstDead=function(){return this.iterate("alive",!1,b.Group.RETURN_CHILD)},b.Group.prototype.getTop=function(){return this.children.length>0?this.children[this.children.length-1]:void 0},b.Group.prototype.getBottom=function(){return this.children.length>0?this.children[0]:void 0},b.Group.prototype.countLiving=function(){return this.iterate("alive",!0,b.Group.RETURN_TOTAL)},b.Group.prototype.countDead=function(){return this.iterate("alive",!1,b.Group.RETURN_TOTAL)},b.Group.prototype.getRandom=function(a,b){return 0===this.children.length?null:(a=a||0,b=b||this.children.length,this.game.math.getRandom(this.children,a,b))},b.Group.prototype.remove=function(a,b,c){if("undefined"==typeof b&&(b=!1),"undefined"==typeof c&&(c=!1),0===this.children.length||-1===this.children.indexOf(a))return!1;c||!a.events||a.destroyPhase||a.events.onRemovedFromGroup.dispatch(a,this);var d=this.removeChild(a);return this.updateZ(),this.cursor===a&&this.next(),b&&d&&d.destroy(!0),!0},b.Group.prototype.removeAll=function(a,b){if("undefined"==typeof a&&(a=!1),"undefined"==typeof b&&(b=!1),0!==this.children.length){do{!b&&this.children[0].events&&this.children[0].events.onRemovedFromGroup.dispatch(this.children[0],this);var c=this.removeChild(this.children[0]);a&&c&&c.destroy(!0)}while(this.children.length>0);this.cursor=null}},b.Group.prototype.removeBetween=function(a,b,c,d){if("undefined"==typeof b&&(b=this.children.length),"undefined"==typeof c&&(c=!1),"undefined"==typeof d&&(d=!1),0!==this.children.length){if(a>b||0>a||b>this.children.length)return!1;for(var e=b;e>=a;){!d&&this.children[e].events&&this.children[e].events.onRemovedFromGroup.dispatch(this.children[e],this);var f=this.removeChild(this.children[e]);c&&f&&f.destroy(!0),this.cursor===this.children[e]&&(this.cursor=null),e--}this.updateZ()}},b.Group.prototype.destroy=function(a,b){null!==this.game&&("undefined"==typeof a&&(a=!0),"undefined"==typeof b&&(b=!1),this.removeAll(a),this.cursor=null,this.filters=null,b||(this.parent&&this.parent.removeChild(this),this.game=null,this.exists=!1))},Object.defineProperty(b.Group.prototype,"total",{get:function(){return this.iterate("exists",!0,b.Group.RETURN_TOTAL)}}),Object.defineProperty(b.Group.prototype,"length",{get:function(){return this.children.length}}),Object.defineProperty(b.Group.prototype,"angle",{get:function(){return b.Math.radToDeg(this.rotation)},set:function(a){this.rotation=b.Math.degToRad(a)}}),Object.defineProperty(b.Group.prototype,"fixedToCamera",{get:function(){return!!this._cache[7]},set:function(a){a?(this._cache[7]=1,this.cameraOffset.set(this.x,this.y)):this._cache[7]=0}}),b.World=function(a){b.Group.call(this,a,null,"__world",!1),this.bounds=new b.Rectangle(0,0,a.width,a.height),this.camera=null},b.World.prototype=Object.create(b.Group.prototype),b.World.prototype.constructor=b.World,b.World.prototype.boot=function(){this.camera=new b.Camera(this.game,0,0,0,this.game.width,this.game.height),this.camera.displayObject=this,this.camera.scale=this.scale,this.game.camera=this.camera,this.game.stage.addChild(this)},b.World.prototype.setBounds=function(a,b,c,d){c<this.game.width&&(c=this.game.width),d<this.game.height&&(d=this.game.height),this.bounds.setTo(a,b,c,d),this.camera.bounds&&this.camera.bounds.setTo(a,b,c,d),this.game.physics.setBoundsToWorld()},b.World.prototype.shutdown=function(){this.destroy(!0,!0)},b.World.prototype.wrap=function(a,b,c,d,e){"undefined"==typeof b&&(b=0),"undefined"==typeof c&&(c=!1),"undefined"==typeof d&&(d=!0),"undefined"==typeof e&&(e=!0),c?(a.getBounds(),d&&(a.x+a._currentBounds.width<this.bounds.x?a.x=this.bounds.right:a.x>this.bounds.right&&(a.x=this.bounds.left)),e&&(a.y+a._currentBounds.height<this.bounds.top?a.y=this.bounds.bottom:a.y>this.bounds.bottom&&(a.y=this.bounds.top))):(d&&a.x+b<this.bounds.x?a.x=this.bounds.right+b:d&&a.x-b>this.bounds.right&&(a.x=this.bounds.left-b),e&&a.y+b<this.bounds.top?a.y=this.bounds.bottom+b:e&&a.y-b>this.bounds.bottom&&(a.y=this.bounds.top-b))},Object.defineProperty(b.World.prototype,"width",{get:function(){return this.bounds.width},set:function(a){this.bounds.width=a}}),Object.defineProperty(b.World.prototype,"height",{get:function(){return this.bounds.height},set:function(a){this.bounds.height=a}}),Object.defineProperty(b.World.prototype,"centerX",{get:function(){return this.bounds.halfWidth}}),Object.defineProperty(b.World.prototype,"centerY",{get:function(){return this.bounds.halfHeight}}),Object.defineProperty(b.World.prototype,"randomX",{get:function(){return this.bounds.x<0?this.game.rnd.integerInRange(this.bounds.x,this.bounds.width-Math.abs(this.bounds.x)):this.game.rnd.integerInRange(this.bounds.x,this.bounds.width)}}),Object.defineProperty(b.World.prototype,"randomY",{get:function(){return this.bounds.y<0?this.game.rnd.integerInRange(this.bounds.y,this.bounds.height-Math.abs(this.bounds.y)):this.game.rnd.integerInRange(this.bounds.y,this.bounds.height)}}),b.ScaleManager=function(a,c,d){this.game=a,this.width=c,this.height=d,this.minWidth=null,this.maxWidth=null,this.minHeight=null,this.maxHeight=null,this.forceLandscape=!1,this.forcePortrait=!1,this.incorrectOrientation=!1,this.pageAlignHorizontally=!1,this.pageAlignVertically=!1,this.maxIterations=5,this.orientationSprite=null,this.enterLandscape=new b.Signal,this.enterPortrait=new b.Signal,this.enterIncorrectOrientation=new b.Signal,this.leaveIncorrectOrientation=new b.Signal,this.hasResized=new b.Signal,this.fullScreenTarget=this.game.canvas,this.enterFullScreen=new b.Signal,this.leaveFullScreen=new b.Signal,this.orientation=0,window.orientation?this.orientation=window.orientation:window.outerWidth>window.outerHeight&&(this.orientation=90),this.scaleFactor=new b.Point(1,1),this.scaleFactorInversed=new b.Point(1,1),this.margin=new b.Point(0,0),this.bounds=new b.Rectangle(0,0,c,d),this.aspectRatio=0,this.sourceAspectRatio=c/d,this.event=null,this.scaleMode=b.ScaleManager.NO_SCALE,this.fullScreenScaleMode=b.ScaleManager.NO_SCALE,this._startHeight=0,this._width=0,this._height=0,this._check=null;var e=this;window.addEventListener("orientationchange",function(a){return e.checkOrientation(a)},!1),window.addEventListener("resize",function(a){return e.checkResize(a)},!1),this.game.device.cocoonJS||(document.addEventListener("webkitfullscreenchange",function(a){return e.fullScreenChange(a)},!1),document.addEventListener("mozfullscreenchange",function(a){return e.fullScreenChange(a)},!1),document.addEventListener("fullscreenchange",function(a){return e.fullScreenChange(a)},!1))},b.ScaleManager.EXACT_FIT=0,b.ScaleManager.NO_SCALE=1,b.ScaleManager.SHOW_ALL=2,b.ScaleManager.prototype={startFullScreen:function(a){!this.isFullScreen&&this.game.device.fullscreen&&("undefined"!=typeof a&&this.game.renderType===b.CANVAS&&(this.game.stage.smoothed=a),this._width=this.width,this._height=this.height,this.game.device.fullscreenKeyboard?this.fullScreenTarget[this.game.device.requestFullscreen](Element.ALLOW_KEYBOARD_INPUT):this.fullScreenTarget[this.game.device.requestFullscreen]())},stopFullScreen:function(){document[this.game.device.cancelFullscreen]()},fullScreenChange:function(a){this.event=a,this.isFullScreen?(this.fullScreenScaleMode===b.ScaleManager.EXACT_FIT?(this.fullScreenTarget.style.width="100%",this.fullScreenTarget.style.height="100%",this.width=window.outerWidth,this.height=window.outerHeight,this.game.input.scale.setTo(this.game.width/this.width,this.game.height/this.height),this.aspectRatio=this.width/this.height,this.scaleFactor.x=this.game.width/this.width,this.scaleFactor.y=this.game.height/this.height,this.checkResize()):this.fullScreenScaleMode===b.ScaleManager.SHOW_ALL&&(this.setShowAll(),this.refresh()),this.enterFullScreen.dispatch(this.width,this.height)):(this.fullScreenTarget.style.width=this.game.width+"px",this.fullScreenTarget.style.height=this.game.height+"px",this.width=this._width,this.height=this._height,this.game.input.scale.setTo(this.game.width/this.width,this.game.height/this.height),this.aspectRatio=this.width/this.height,this.scaleFactor.x=this.game.width/this.width,this.scaleFactor.y=this.game.height/this.height,this.leaveFullScreen.dispatch(this.width,this.height))},forceOrientation:function(a,c,d){"undefined"==typeof c&&(c=!1),this.forceLandscape=a,this.forcePortrait=c,"undefined"!=typeof d&&((null===d||this.game.cache.checkImageKey(d)===!1)&&(d="__default"),this.orientationSprite=new b.Image(this.game,this.game.width/2,this.game.height/2,d),this.orientationSprite.anchor.set(.5),this.checkOrientationState(),this.incorrectOrientation?(this.orientationSprite.visible=!0,this.game.world.visible=!1):(this.orientationSprite.visible=!1,this.game.world.visible=!0),this.game.stage.addChild(this.orientationSprite))},checkOrientationState:function(){this.incorrectOrientation?(this.forceLandscape&&window.innerWidth>window.innerHeight||this.forcePortrait&&window.innerHeight>window.innerWidth)&&(this.incorrectOrientation=!1,this.leaveIncorrectOrientation.dispatch(),this.orientationSprite&&(this.orientationSprite.visible=!1,this.game.world.visible=!0),this.scaleMode!==b.ScaleManager.NO_SCALE&&this.refresh()):(this.forceLandscape&&window.innerWidth<window.innerHeight||this.forcePortrait&&window.innerHeight<window.innerWidth)&&(this.incorrectOrientation=!0,this.enterIncorrectOrientation.dispatch(),this.orientationSprite&&this.orientationSprite.visible===!1&&(this.orientationSprite.visible=!0,this.game.world.visible=!1),this.scaleMode!==b.ScaleManager.NO_SCALE&&this.refresh())},checkOrientation:function(a){this.event=a,this.orientation=window.orientation,this.isLandscape?this.enterLandscape.dispatch(this.orientation,!0,!1):this.enterPortrait.dispatch(this.orientation,!1,!0),this.scaleMode!==b.ScaleManager.NO_SCALE&&this.refresh()},checkResize:function(a){this.event=a,this.orientation=window.outerWidth>window.outerHeight?90:0,this.isLandscape?this.enterLandscape.dispatch(this.orientation,!0,!1):this.enterPortrait.dispatch(this.orientation,!1,!0),this.scaleMode!==b.ScaleManager.NO_SCALE&&this.refresh(),this.checkOrientationState()},refresh:function(){if(this.game.device.iPad||this.game.device.webApp||this.game.device.desktop||(this.game.device.android&&!this.game.device.chrome?window.scrollTo(0,1):window.scrollTo(0,0)),null===this._check&&this.maxIterations>0){this._iterations=this.maxIterations;var a=this;this._check=window.setInterval(function(){return a.setScreenSize()},10),this.setScreenSize()}},setScreenSize:function(a){"undefined"==typeof a&&(a=!1),this.game.device.iPad||this.game.device.webApp||this.game.device.desktop||(this.game.device.android&&!this.game.device.chrome?window.scrollTo(0,1):window.scrollTo(0,0)),this._iterations--,(a||window.innerHeight>this._startHeight||this._iterations<0)&&(document.documentElement.style.minHeight=window.innerHeight+"px",this.incorrectOrientation?this.setMaximum():this.isFullScreen?this.fullScreenScaleMode===b.ScaleManager.EXACT_FIT?this.setExactFit():this.fullScreenScaleMode===b.ScaleManager.SHOW_ALL&&this.setShowAll():this.scaleMode===b.ScaleManager.EXACT_FIT?this.setExactFit():this.scaleMode===b.ScaleManager.SHOW_ALL&&this.setShowAll(),this.setSize(),clearInterval(this._check),this._check=null)},setSize:function(){this.incorrectOrientation||(this.maxWidth&&this.width>this.maxWidth&&(this.width=this.maxWidth),this.maxHeight&&this.height>this.maxHeight&&(this.height=this.maxHeight),this.minWidth&&this.width<this.minWidth&&(this.width=this.minWidth),this.minHeight&&this.height<this.minHeight&&(this.height=this.minHeight)),this.game.canvas.style.width=this.width+"px",this.game.canvas.style.height=this.height+"px",this.game.input.scale.setTo(this.game.width/this.width,this.game.height/this.height),this.pageAlignHorizontally&&(this.width<window.innerWidth&&!this.incorrectOrientation?(this.margin.x=Math.round((window.innerWidth-this.width)/2),this.game.canvas.style.marginLeft=this.margin.x+"px"):(this.margin.x=0,this.game.canvas.style.marginLeft="0px")),this.pageAlignVertically&&(this.height<window.innerHeight&&!this.incorrectOrientation?(this.margin.y=Math.round((window.innerHeight-this.height)/2),this.game.canvas.style.marginTop=this.margin.y+"px"):(this.margin.y=0,this.game.canvas.style.marginTop="0px")),b.Canvas.getOffset(this.game.canvas,this.game.stage.offset),this.bounds.setTo(this.game.stage.offset.x,this.game.stage.offset.y,this.width,this.height),this.aspectRatio=this.width/this.height,this.scaleFactor.x=this.game.width/this.width,this.scaleFactor.y=this.game.height/this.height,this.scaleFactorInversed.x=this.width/this.game.width,this.scaleFactorInversed.y=this.height/this.game.height,this.hasResized.dispatch(this.width,this.height),this.checkOrientationState()},setMaximum:function(){this.width=window.innerWidth,this.height=window.innerHeight},setShowAll:function(){var a=Math.min(window.innerHeight/this.game.height,window.innerWidth/this.game.width);this.width=Math.round(this.game.width*a),this.height=Math.round(this.game.height*a)},setExactFit:function(){var a=window.innerWidth,b=window.innerHeight;this.width=this.maxWidth&&a>this.maxWidth?this.maxWidth:a,this.height=this.maxHeight&&b>this.maxHeight?this.maxHeight:b}},b.ScaleManager.prototype.constructor=b.ScaleManager,Object.defineProperty(b.ScaleManager.prototype,"isFullScreen",{get:function(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement}}),Object.defineProperty(b.ScaleManager.prototype,"isPortrait",{get:function(){return 0===this.orientation||180===this.orientation}}),Object.defineProperty(b.ScaleManager.prototype,"isLandscape",{get:function(){return 90===this.orientation||-90===this.orientation}}),b.Game=function(a,c,d,e,f,g,h,i){this.id=b.GAMES.push(this)-1,this.config=null,this.physicsConfig=i,this.parent="",this.width=800,this.height=600,this.transparent=!1,this.antialias=!0,this.preserveDrawingBuffer=!1,this.renderer=null,this.renderType=b.AUTO,this.state=null,this.isBooted=!1,this.isRunning=!1,this.raf=null,this.add=null,this.make=null,this.cache=null,this.input=null,this.load=null,this.math=null,this.net=null,this.scale=null,this.sound=null,this.stage=null,this.time=null,this.tweens=null,this.world=null,this.physics=null,this.rnd=null,this.device=null,this.camera=null,this.canvas=null,this.context=null,this.debug=null,this.particles=null,this.stepping=!1,this.pendingStep=!1,this.stepCount=0,this.onPause=null,this.onResume=null,this.onBlur=null,this.onFocus=null,this._paused=!1,this._codePaused=!1,1===arguments.length&&"object"==typeof arguments[0]?this.parseConfig(arguments[0]):(this.config={enableDebug:!0},"undefined"!=typeof a&&(this.width=a),"undefined"!=typeof c&&(this.height=c),"undefined"!=typeof d&&(this.renderer=d,this.renderType=d),"undefined"!=typeof e&&(this.parent=e),"undefined"!=typeof g&&(this.transparent=g),"undefined"!=typeof h&&(this.antialias=h),this.rnd=new b.RandomDataGenerator([(Date.now()*Math.random()).toString()]),this.state=new b.StateManager(this,f));var j=this;return this._onBoot=function(){return j.boot()},"complete"===document.readyState||"interactive"===document.readyState?window.setTimeout(this._onBoot,0):(document.addEventListener("DOMContentLoaded",this._onBoot,!1),window.addEventListener("load",this._onBoot,!1)),this},b.Game.prototype={parseConfig:function(a){this.config=a,a.width&&(this.width=b.Utils.parseDimension(a.width,0)),a.height&&(this.height=b.Utils.parseDimension(a.height,1)),a.renderer&&(this.renderer=a.renderer,this.renderType=a.renderer),a.parent&&(this.parent=a.parent),a.transparent&&(this.transparent=a.transparent),a.antialias&&(this.antialias=a.antialias),a.preserveDrawingBuffer&&(this.preserveDrawingBuffer=a.preserveDrawingBuffer),a.physicsConfig&&(this.physicsConfig=a.physicsConfig);var c=[(Date.now()*Math.random()).toString()];a.seed&&(c=a.seed),this.rnd=new b.RandomDataGenerator(c);var d=null;a.state&&(d=a.state),this.state=new b.StateManager(this,d)},boot:function(){this.isBooted||(document.body?(document.removeEventListener("DOMContentLoaded",this._onBoot),window.removeEventListener("load",this._onBoot),this.onPause=new b.Signal,this.onResume=new b.Signal,this.onBlur=new b.Signal,this.onFocus=new b.Signal,this.isBooted=!0,this.device=new b.Device(this),this.math=b.Math,this.stage=new b.Stage(this,this.width,this.height),this.setUpRenderer(),this.scale=new b.ScaleManager(this,this.width,this.height),this.device.checkFullScreenSupport(),this.world=new b.World(this),this.add=new b.GameObjectFactory(this),this.make=new b.GameObjectCreator(this),this.cache=new b.Cache(this),this.load=new b.Loader(this),this.time=new b.Time(this),this.tweens=new b.TweenManager(this),this.input=new b.Input(this),this.sound=new b.SoundManager(this),this.physics=new b.Physics(this,this.physicsConfig),this.particles=new b.Particles(this),this.plugins=new b.PluginManager(this),this.net=new b.Net(this),this.time.boot(),this.stage.boot(),this.world.boot(),this.input.boot(),this.sound.boot(),this.state.boot(),this.config.enableDebug&&(this.debug=new b.Utils.Debug(this),this.debug.boot()),this.showDebugHeader(),this.isRunning=!0,this.raf=this.config&&this.config.forceSetTimeOut?new b.RequestAnimationFrame(this,this.config.forceSetTimeOut):new b.RequestAnimationFrame(this,!1),this.raf.start()):window.setTimeout(this._onBoot,20))},showDebugHeader:function(){var a=b.VERSION,c="Canvas",d="HTML Audio",e=1;if(this.renderType===b.WEBGL?(c="WebGL",e++):this.renderType==b.HEADLESS&&(c="Headless"),this.device.webAudio&&(d="WebAudio",e++),this.device.chrome){for(var f=["%c %c %c Phaser v"+a+" | Pixi.js "+PIXI.VERSION+" | "+c+" | "+d+"  %c %c  http://phaser.io  %c %c ♥%c♥%c♥ ","background: #0cf300","background: #00bc17","color: #ffffff; background: #00711f;","background: #00bc17","background: #0cf300","background: #00bc17"],g=0;3>g;g++)f.push(e>g?"color: #ff2424; background: #fff":"color: #959595; background: #fff");console.log.apply(console,f)}else window.console&&console.log("Phaser v"+a+" | Pixi.js "+PIXI.VERSION+" | "+c+" | "+d+" | http://phaser.io")},setUpRenderer:function(){if(this.device.trident&&(this.renderType=b.CANVAS),this.canvas=this.config.canvasID?b.Canvas.create(this.width,this.height,this.config.canvasID):b.Canvas.create(this.width,this.height),this.config.canvasStyle?this.canvas.style=this.config.canvasStyle:this.canvas.style["-webkit-full-screen"]="width: 100%; height: 100%",this.device.cocoonJS&&(this.canvas.screencanvas=!0),this.renderType===b.HEADLESS||this.renderType===b.CANVAS||this.renderType===b.AUTO&&this.device.webGL===!1){if(!this.device.canvas)throw new Error("Phaser.Game - cannot create Canvas or WebGL context, aborting.");this.renderType===b.AUTO&&(this.renderType=b.CANVAS),this.renderer=new PIXI.CanvasRenderer(this.width,this.height,this.canvas,this.transparent),this.context=this.renderer.context}else this.renderType=b.WEBGL,this.renderer=new PIXI.WebGLRenderer(this.width,this.height,this.canvas,this.transparent,this.antialias,this.preserveDrawingBuffer),this.context=null;
this.renderType!==b.HEADLESS&&(this.stage.smoothed=this.antialias,b.Canvas.addToDOM(this.canvas,this.parent,!1),b.Canvas.setTouchAction(this.canvas))},update:function(a){this.time.update(a),this._paused||this.pendingStep?(this.state.pauseUpdate(),this.config.enableDebug&&this.debug.preUpdate()):(this.stepping&&(this.pendingStep=!0),this.config.enableDebug&&this.debug.preUpdate(),this.physics.preUpdate(),this.state.preUpdate(),this.plugins.preUpdate(),this.stage.preUpdate(),this.state.update(),this.stage.update(),this.tweens.update(),this.sound.update(),this.input.update(),this.physics.update(),this.particles.update(),this.plugins.update(),this.stage.postUpdate(),this.plugins.postUpdate()),this.renderType!=b.HEADLESS&&(this.state.preRender(),this.renderer.render(this.stage),this.plugins.render(),this.state.render(),this.plugins.postRender(),this.device.cocoonJS&&this.renderType===b.CANVAS&&1===this.stage.currentRenderOrderID&&this.context.fillRect(0,0,0,0))},enableStep:function(){this.stepping=!0,this.pendingStep=!1,this.stepCount=0},disableStep:function(){this.stepping=!1,this.pendingStep=!1},step:function(){this.pendingStep=!1,this.stepCount++},destroy:function(){this.raf.stop(),this.input.destroy(),this.state.destroy(),this.physics.destroy(),this.state=null,this.cache=null,this.input=null,this.load=null,this.sound=null,this.stage=null,this.time=null,this.world=null,this.isBooted=!1},gamePaused:function(a){this._paused||(this._paused=!0,this.time.gamePaused(),this.sound.setMute(),this.onPause.dispatch(a))},gameResumed:function(a){this._paused&&!this._codePaused&&(this._paused=!1,this.time.gameResumed(),this.input.reset(),this.sound.unsetMute(),this.onResume.dispatch(a))},focusLoss:function(a){this.onBlur.dispatch(a),this.stage.disableVisibilityChange||this.gamePaused(a)},focusGain:function(a){this.onFocus.dispatch(a),this.stage.disableVisibilityChange||this.gameResumed(a)}},b.Game.prototype.constructor=b.Game,Object.defineProperty(b.Game.prototype,"paused",{get:function(){return this._paused},set:function(a){a===!0?(this._paused===!1&&(this._paused=!0,this.sound.setMute(),this.time.gamePaused(),this.onPause.dispatch(this)),this._codePaused=!0):(this._paused&&(this._paused=!1,this.input.reset(),this.sound.unsetMute(),this.time.gameResumed(),this.onResume.dispatch(this)),this._codePaused=!1)}}),b.Input=function(a){this.game=a,this.hitCanvas=null,this.hitContext=null,this.moveCallbacks=[],this.moveCallback=null,this.moveCallbackContext=this,this.pollRate=0,this.disabled=!1,this.multiInputOverride=b.Input.MOUSE_TOUCH_COMBINE,this.position=null,this.speed=null,this.circle=null,this.scale=null,this.maxPointers=10,this.currentPointers=0,this.tapRate=200,this.doubleTapRate=300,this.holdRate=2e3,this.justPressedRate=200,this.justReleasedRate=200,this.recordPointerHistory=!1,this.recordRate=100,this.recordLimit=100,this.pointer1=null,this.pointer2=null,this.pointer3=null,this.pointer4=null,this.pointer5=null,this.pointer6=null,this.pointer7=null,this.pointer8=null,this.pointer9=null,this.pointer10=null,this.activePointer=null,this.mousePointer=null,this.mouse=null,this.keyboard=null,this.touch=null,this.mspointer=null,this.gamepad=null,this.resetLocked=!1,this.onDown=null,this.onUp=null,this.onTap=null,this.onHold=null,this.minPriorityID=0,this.interactiveItems=new b.ArrayList,this._localPoint=new b.Point,this._pollCounter=0,this._oldPosition=null,this._x=0,this._y=0},b.Input.MOUSE_OVERRIDES_TOUCH=0,b.Input.TOUCH_OVERRIDES_MOUSE=1,b.Input.MOUSE_TOUCH_COMBINE=2,b.Input.prototype={boot:function(){this.mousePointer=new b.Pointer(this.game,0),this.pointer1=new b.Pointer(this.game,1),this.pointer2=new b.Pointer(this.game,2),this.mouse=new b.Mouse(this.game),this.keyboard=new b.Keyboard(this.game),this.touch=new b.Touch(this.game),this.mspointer=new b.MSPointer(this.game),this.gamepad=new b.Gamepad(this.game),this.onDown=new b.Signal,this.onUp=new b.Signal,this.onTap=new b.Signal,this.onHold=new b.Signal,this.scale=new b.Point(1,1),this.speed=new b.Point,this.position=new b.Point,this._oldPosition=new b.Point,this.circle=new b.Circle(0,0,44),this.activePointer=this.mousePointer,this.currentPointers=0,this.hitCanvas=document.createElement("canvas"),this.hitCanvas.width=1,this.hitCanvas.height=1,this.hitContext=this.hitCanvas.getContext("2d"),this.mouse.start(),this.keyboard.start(),this.touch.start(),this.mspointer.start(),this.mousePointer.active=!0},destroy:function(){this.mouse.stop(),this.keyboard.stop(),this.touch.stop(),this.mspointer.stop(),this.gamepad.stop(),this.moveCallbacks=[],this.moveCallback=null},setMoveCallback:function(a,b){this.moveCallback=a,this.moveCallbackContext=b},addMoveCallback:function(a,b){return this.moveCallbacks.push({callback:a,context:b})-1},deleteMoveCallback:function(a){this.moveCallbacks[a]&&this.moveCallbacks.splice(a,1)},addPointer:function(){for(var a=0,c=10;c>0;c--)null===this["pointer"+c]&&(a=c);return 0===a?(console.warn("You can only have 10 Pointer objects"),null):(this["pointer"+a]=new b.Pointer(this.game,a),this["pointer"+a])},update:function(){return this.keyboard.update(),this.pollRate>0&&this._pollCounter<this.pollRate?void this._pollCounter++:(this.speed.x=this.position.x-this._oldPosition.x,this.speed.y=this.position.y-this._oldPosition.y,this._oldPosition.copyFrom(this.position),this.mousePointer.update(),this.gamepad.active&&this.gamepad.update(),this.pointer1.update(),this.pointer2.update(),this.pointer3&&this.pointer3.update(),this.pointer4&&this.pointer4.update(),this.pointer5&&this.pointer5.update(),this.pointer6&&this.pointer6.update(),this.pointer7&&this.pointer7.update(),this.pointer8&&this.pointer8.update(),this.pointer9&&this.pointer9.update(),this.pointer10&&this.pointer10.update(),void(this._pollCounter=0))},reset:function(a){if(this.game.isBooted&&!this.resetLocked){"undefined"==typeof a&&(a=!1),this.keyboard.reset(a),this.mousePointer.reset(),this.gamepad.reset();for(var c=1;10>=c;c++)this["pointer"+c]&&this["pointer"+c].reset();this.currentPointers=0,"none"!==this.game.canvas.style.cursor&&(this.game.canvas.style.cursor="inherit"),a&&(this.onDown.dispose(),this.onUp.dispose(),this.onTap.dispose(),this.onHold.dispose(),this.onDown=new b.Signal,this.onUp=new b.Signal,this.onTap=new b.Signal,this.onHold=new b.Signal,this.moveCallbacks=[]),this._pollCounter=0}},resetSpeed:function(a,b){this._oldPosition.setTo(a,b),this.speed.setTo(0,0)},startPointer:function(a){if(this.maxPointers<10&&this.totalActivePointers==this.maxPointers)return null;if(this.pointer1.active===!1)return this.pointer1.start(a);if(this.pointer2.active===!1)return this.pointer2.start(a);for(var b=3;10>=b;b++)if(this["pointer"+b]&&this["pointer"+b].active===!1)return this["pointer"+b].start(a);return null},updatePointer:function(a){if(this.pointer1.active&&this.pointer1.identifier==a.identifier)return this.pointer1.move(a);if(this.pointer2.active&&this.pointer2.identifier==a.identifier)return this.pointer2.move(a);for(var b=3;10>=b;b++)if(this["pointer"+b]&&this["pointer"+b].active&&this["pointer"+b].identifier==a.identifier)return this["pointer"+b].move(a);return null},stopPointer:function(a){if(this.pointer1.active&&this.pointer1.identifier==a.identifier)return this.pointer1.stop(a);if(this.pointer2.active&&this.pointer2.identifier==a.identifier)return this.pointer2.stop(a);for(var b=3;10>=b;b++)if(this["pointer"+b]&&this["pointer"+b].active&&this["pointer"+b].identifier==a.identifier)return this["pointer"+b].stop(a);return null},getPointer:function(a){if(a=a||!1,this.pointer1.active==a)return this.pointer1;if(this.pointer2.active==a)return this.pointer2;for(var b=3;10>=b;b++)if(this["pointer"+b]&&this["pointer"+b].active==a)return this["pointer"+b];return null},getPointerFromIdentifier:function(a){if(this.pointer1.identifier===a)return this.pointer1;if(this.pointer2.identifier===a)return this.pointer2;for(var b=3;10>=b;b++)if(this["pointer"+b]&&this["pointer"+b].identifier===a)return this["pointer"+b];return null},getPointerFromId:function(a){if(this.pointer1.pointerId===a)return this.pointer1;if(this.pointer2.pointerId===a)return this.pointer2;for(var b=3;10>=b;b++)if(this["pointer"+b]&&this["pointer"+b].pointerId===a)return this["pointer"+b];return null},getLocalPosition:function(a,c,d){"undefined"==typeof d&&(d=new b.Point);var e=a.worldTransform,f=1/(e.a*e.d+e.b*-e.c);return d.setTo(e.d*f*c.x+-e.b*f*c.y+(e.ty*e.b-e.tx*e.d)*f,e.a*f*c.y+-e.c*f*c.x+(-e.ty*e.a+e.tx*e.c)*f)},hitTest:function(a,c,d){if(!a.worldVisible)return!1;if(this.getLocalPosition(a,c,this._localPoint),d.copyFrom(this._localPoint),a.hitArea&&a.hitArea.contains)return a.hitArea.contains(this._localPoint.x,this._localPoint.y)?!0:!1;if(a instanceof b.TileSprite){var e=a.width,f=a.height,g=-e*a.anchor.x;if(this._localPoint.x>g&&this._localPoint.x<g+e){var h=-f*a.anchor.y;if(this._localPoint.y>h&&this._localPoint.y<h+f)return!0}}else if(a instanceof PIXI.Sprite){var e=a.texture.frame.width,f=a.texture.frame.height,g=-e*a.anchor.x;if(this._localPoint.x>g&&this._localPoint.x<g+e){var h=-f*a.anchor.y;if(this._localPoint.y>h&&this._localPoint.y<h+f)return!0}}for(var i=0,j=a.children.length;j>i;i++)if(this.hitTest(a.children[i],c,d))return!0;return!1}},b.Input.prototype.constructor=b.Input,Object.defineProperty(b.Input.prototype,"x",{get:function(){return this._x},set:function(a){this._x=Math.floor(a)}}),Object.defineProperty(b.Input.prototype,"y",{get:function(){return this._y},set:function(a){this._y=Math.floor(a)}}),Object.defineProperty(b.Input.prototype,"pollLocked",{get:function(){return this.pollRate>0&&this._pollCounter<this.pollRate}}),Object.defineProperty(b.Input.prototype,"totalInactivePointers",{get:function(){return 10-this.currentPointers}}),Object.defineProperty(b.Input.prototype,"totalActivePointers",{get:function(){this.currentPointers=0;for(var a=1;10>=a;a++)this["pointer"+a]&&this["pointer"+a].active&&this.currentPointers++;return this.currentPointers}}),Object.defineProperty(b.Input.prototype,"worldX",{get:function(){return this.game.camera.view.x+this.x}}),Object.defineProperty(b.Input.prototype,"worldY",{get:function(){return this.game.camera.view.y+this.y}}),b.Key=function(a,c){this.game=a,this.enabled=!0,this.event=null,this.isDown=!1,this.isUp=!0,this.altKey=!1,this.ctrlKey=!1,this.shiftKey=!1,this.timeDown=0,this.duration=0,this.timeUp=-2500,this.repeats=0,this.keyCode=c,this.onDown=new b.Signal,this.onHoldCallback=null,this.onHoldContext=null,this.onUp=new b.Signal},b.Key.prototype={update:function(){this.enabled&&this.isDown&&(this.duration=this.game.time.now-this.timeDown,this.repeats++,this.onHoldCallback&&this.onHoldCallback.call(this.onHoldContext,this))},processKeyDown:function(a){this.enabled&&(this.event=a,this.isDown||(this.altKey=a.altKey,this.ctrlKey=a.ctrlKey,this.shiftKey=a.shiftKey,this.isDown=!0,this.isUp=!1,this.timeDown=this.game.time.now,this.duration=0,this.repeats=0,this.onDown.dispatch(this)))},processKeyUp:function(a){this.enabled&&(this.event=a,this.isUp||(this.isDown=!1,this.isUp=!0,this.timeUp=this.game.time.now,this.duration=this.game.time.now-this.timeDown,this.onUp.dispatch(this)))},reset:function(a){"undefined"==typeof a&&(a=!0),this.isDown=!1,this.isUp=!0,this.timeUp=this.game.time.now,this.duration=0,this.enabled=!0,a&&(this.onDown.removeAll(),this.onUp.removeAll(),this.onHoldCallback=null,this.onHoldContext=null)},justPressed:function(a){return"undefined"==typeof a&&(a=50),this.isDown&&this.duration<a},justReleased:function(a){return"undefined"==typeof a&&(a=50),!this.isDown&&this.game.time.now-this.timeUp<a}},b.Key.prototype.constructor=b.Key,b.Keyboard=function(a){this.game=a,this.disabled=!1,this.event=null,this.pressEvent=null,this.callbackContext=this,this.onDownCallback=null,this.onPressCallback=null,this.onUpCallback=null,this._keys=[],this._capture=[],this._onKeyDown=null,this._onKeyPress=null,this._onKeyUp=null,this._i=0,this._k=0},b.Keyboard.prototype={addCallbacks:function(a,b,c,d){this.callbackContext=a,"undefined"!=typeof b&&(this.onDownCallback=b),"undefined"!=typeof c&&(this.onUpCallback=c),"undefined"!=typeof d&&(this.onPressCallback=d)},addKey:function(a){return this._keys[a]||(this._keys[a]=new b.Key(this.game,a),this.addKeyCapture(a)),this._keys[a]},removeKey:function(a){this._keys[a]&&(this._keys[a]=null,this.removeKeyCapture(a))},createCursorKeys:function(){return{up:this.addKey(b.Keyboard.UP),down:this.addKey(b.Keyboard.DOWN),left:this.addKey(b.Keyboard.LEFT),right:this.addKey(b.Keyboard.RIGHT)}},start:function(){if(!this.game.device.cocoonJS&&null===this._onKeyDown){var a=this;this._onKeyDown=function(b){return a.processKeyDown(b)},this._onKeyUp=function(b){return a.processKeyUp(b)},this._onKeyPress=function(b){return a.processKeyPress(b)},window.addEventListener("keydown",this._onKeyDown,!1),window.addEventListener("keyup",this._onKeyUp,!1),window.addEventListener("keypress",this._onKeyPress,!1)}},stop:function(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),window.removeEventListener("keypress",this._onKeyPress),this._onKeyDown=null,this._onKeyUp=null,this._onKeyPress=null},destroy:function(){this.stop(),this.clearCaptures(),this._keys.length=0,this._i=0},addKeyCapture:function(a){if("object"==typeof a)for(var b in a)this._capture[a[b]]=!0;else this._capture[a]=!0},removeKeyCapture:function(a){delete this._capture[a]},clearCaptures:function(){this._capture={}},update:function(){for(this._i=this._keys.length;this._i--;)this._keys[this._i]&&this._keys[this._i].update()},processKeyDown:function(a){this.event=a,this.game.input.disabled||this.disabled||(this._capture[a.keyCode]&&a.preventDefault(),this._keys[a.keyCode]||(this._keys[a.keyCode]=new b.Key(this.game,a.keyCode)),this._keys[a.keyCode].processKeyDown(a),this._k=a.keyCode,this.onDownCallback&&this.onDownCallback.call(this.callbackContext,a))},processKeyPress:function(a){this.pressEvent=a,this.game.input.disabled||this.disabled||this.onPressCallback&&this.onPressCallback.call(this.callbackContext,String.fromCharCode(a.charCode),a)},processKeyUp:function(a){this.event=a,this.game.input.disabled||this.disabled||(this._capture[a.keyCode]&&a.preventDefault(),this._keys[a.keyCode]||(this._keys[a.keyCode]=new b.Key(this.game,a.keyCode)),this._keys[a.keyCode].processKeyUp(a),this.onUpCallback&&this.onUpCallback.call(this.callbackContext,a))},reset:function(a){"undefined"==typeof a&&(a=!0),this.event=null;for(var b=this._keys.length;b--;)this._keys[b]&&this._keys[b].reset(a)},justPressed:function(a,b){return"undefined"==typeof b&&(b=50),this._keys[a]?this._keys[a].justPressed(b):!1},justReleased:function(a,b){return"undefined"==typeof b&&(b=50),this._keys[a]?this._keys[a].justReleased(b):!1},isDown:function(a){return this._keys[a]?this._keys[a].isDown:!1}},Object.defineProperty(b.Keyboard.prototype,"lastChar",{get:function(){return 32===this.event.charCode?"":String.fromCharCode(this.pressEvent.charCode)}}),Object.defineProperty(b.Keyboard.prototype,"lastKey",{get:function(){return this._keys[this._k]}}),b.Keyboard.prototype.constructor=b.Keyboard,b.Keyboard.A="A".charCodeAt(0),b.Keyboard.B="B".charCodeAt(0),b.Keyboard.C="C".charCodeAt(0),b.Keyboard.D="D".charCodeAt(0),b.Keyboard.E="E".charCodeAt(0),b.Keyboard.F="F".charCodeAt(0),b.Keyboard.G="G".charCodeAt(0),b.Keyboard.H="H".charCodeAt(0),b.Keyboard.I="I".charCodeAt(0),b.Keyboard.J="J".charCodeAt(0),b.Keyboard.K="K".charCodeAt(0),b.Keyboard.L="L".charCodeAt(0),b.Keyboard.M="M".charCodeAt(0),b.Keyboard.N="N".charCodeAt(0),b.Keyboard.O="O".charCodeAt(0),b.Keyboard.P="P".charCodeAt(0),b.Keyboard.Q="Q".charCodeAt(0),b.Keyboard.R="R".charCodeAt(0),b.Keyboard.S="S".charCodeAt(0),b.Keyboard.T="T".charCodeAt(0),b.Keyboard.U="U".charCodeAt(0),b.Keyboard.V="V".charCodeAt(0),b.Keyboard.W="W".charCodeAt(0),b.Keyboard.X="X".charCodeAt(0),b.Keyboard.Y="Y".charCodeAt(0),b.Keyboard.Z="Z".charCodeAt(0),b.Keyboard.ZERO="0".charCodeAt(0),b.Keyboard.ONE="1".charCodeAt(0),b.Keyboard.TWO="2".charCodeAt(0),b.Keyboard.THREE="3".charCodeAt(0),b.Keyboard.FOUR="4".charCodeAt(0),b.Keyboard.FIVE="5".charCodeAt(0),b.Keyboard.SIX="6".charCodeAt(0),b.Keyboard.SEVEN="7".charCodeAt(0),b.Keyboard.EIGHT="8".charCodeAt(0),b.Keyboard.NINE="9".charCodeAt(0),b.Keyboard.NUMPAD_0=96,b.Keyboard.NUMPAD_1=97,b.Keyboard.NUMPAD_2=98,b.Keyboard.NUMPAD_3=99,b.Keyboard.NUMPAD_4=100,b.Keyboard.NUMPAD_5=101,b.Keyboard.NUMPAD_6=102,b.Keyboard.NUMPAD_7=103,b.Keyboard.NUMPAD_8=104,b.Keyboard.NUMPAD_9=105,b.Keyboard.NUMPAD_MULTIPLY=106,b.Keyboard.NUMPAD_ADD=107,b.Keyboard.NUMPAD_ENTER=108,b.Keyboard.NUMPAD_SUBTRACT=109,b.Keyboard.NUMPAD_DECIMAL=110,b.Keyboard.NUMPAD_DIVIDE=111,b.Keyboard.F1=112,b.Keyboard.F2=113,b.Keyboard.F3=114,b.Keyboard.F4=115,b.Keyboard.F5=116,b.Keyboard.F6=117,b.Keyboard.F7=118,b.Keyboard.F8=119,b.Keyboard.F9=120,b.Keyboard.F10=121,b.Keyboard.F11=122,b.Keyboard.F12=123,b.Keyboard.F13=124,b.Keyboard.F14=125,b.Keyboard.F15=126,b.Keyboard.COLON=186,b.Keyboard.EQUALS=187,b.Keyboard.UNDERSCORE=189,b.Keyboard.QUESTION_MARK=191,b.Keyboard.TILDE=192,b.Keyboard.OPEN_BRACKET=219,b.Keyboard.BACKWARD_SLASH=220,b.Keyboard.CLOSED_BRACKET=221,b.Keyboard.QUOTES=222,b.Keyboard.BACKSPACE=8,b.Keyboard.TAB=9,b.Keyboard.CLEAR=12,b.Keyboard.ENTER=13,b.Keyboard.SHIFT=16,b.Keyboard.CONTROL=17,b.Keyboard.ALT=18,b.Keyboard.CAPS_LOCK=20,b.Keyboard.ESC=27,b.Keyboard.SPACEBAR=32,b.Keyboard.PAGE_UP=33,b.Keyboard.PAGE_DOWN=34,b.Keyboard.END=35,b.Keyboard.HOME=36,b.Keyboard.LEFT=37,b.Keyboard.UP=38,b.Keyboard.RIGHT=39,b.Keyboard.DOWN=40,b.Keyboard.INSERT=45,b.Keyboard.DELETE=46,b.Keyboard.HELP=47,b.Keyboard.NUM_LOCK=144,b.Mouse=function(a){this.game=a,this.callbackContext=this.game,this.mouseDownCallback=null,this.mouseMoveCallback=null,this.mouseUpCallback=null,this.mouseOutCallback=null,this.mouseOverCallback=null,this.mouseWheelCallback=null,this.capture=!1,this.button=-1,this.wheelDelta=0,this.disabled=!1,this.locked=!1,this.stopOnGameOut=!1,this.pointerLock=new b.Signal,this.event=null,this._onMouseDown=null,this._onMouseMove=null,this._onMouseUp=null,this._onMouseOut=null,this._onMouseOver=null,this._onMouseWheel=null},b.Mouse.NO_BUTTON=-1,b.Mouse.LEFT_BUTTON=0,b.Mouse.MIDDLE_BUTTON=1,b.Mouse.RIGHT_BUTTON=2,b.Mouse.WHEEL_UP=1,b.Mouse.WHEEL_DOWN=-1,b.Mouse.prototype={start:function(){if((!this.game.device.android||this.game.device.chrome!==!1)&&null===this._onMouseDown){var a=this;this._onMouseDown=function(b){return a.onMouseDown(b)},this._onMouseMove=function(b){return a.onMouseMove(b)},this._onMouseUp=function(b){return a.onMouseUp(b)},this._onMouseOut=function(b){return a.onMouseOut(b)},this._onMouseOver=function(b){return a.onMouseOver(b)},this._onMouseWheel=function(b){return a.onMouseWheel(b)},this.game.canvas.addEventListener("mousedown",this._onMouseDown,!0),this.game.canvas.addEventListener("mousemove",this._onMouseMove,!0),this.game.canvas.addEventListener("mouseup",this._onMouseUp,!0),this.game.canvas.addEventListener("mousewheel",this._onMouseWheel,!0),this.game.canvas.addEventListener("DOMMouseScroll",this._onMouseWheel,!0),this.game.device.cocoonJS||(this.game.canvas.addEventListener("mouseover",this._onMouseOver,!0),this.game.canvas.addEventListener("mouseout",this._onMouseOut,!0))}},onMouseDown:function(a){this.event=a,this.capture&&a.preventDefault(),this.button=a.button,this.mouseDownCallback&&this.mouseDownCallback.call(this.callbackContext,a),this.game.input.disabled||this.disabled||(a.identifier=0,this.game.input.mousePointer.start(a))},onMouseMove:function(a){this.event=a,this.capture&&a.preventDefault(),this.mouseMoveCallback&&this.mouseMoveCallback.call(this.callbackContext,a),this.game.input.disabled||this.disabled||(a.identifier=0,this.game.input.mousePointer.move(a))},onMouseUp:function(a){this.event=a,this.capture&&a.preventDefault(),this.button=b.Mouse.NO_BUTTON,this.mouseUpCallback&&this.mouseUpCallback.call(this.callbackContext,a),this.game.input.disabled||this.disabled||(a.identifier=0,this.game.input.mousePointer.stop(a))},onMouseOut:function(a){this.event=a,this.capture&&a.preventDefault(),this.mouseOutCallback&&this.mouseOutCallback.call(this.callbackContext,a),this.game.input.disabled||this.disabled||(this.game.input.mousePointer.withinGame=!1,this.stopOnGameOut&&(a.identifier=0,this.game.input.mousePointer.stop(a)))},onMouseWheel:function(a){this.event=a,this.capture&&a.preventDefault(),this.wheelDelta=Math.max(-1,Math.min(1,a.wheelDelta||-a.detail)),this.mouseWheelCallback&&this.mouseWheelCallback.call(this.callbackContext,a)},onMouseOver:function(a){this.event=a,this.capture&&a.preventDefault(),this.mouseOverCallback&&this.mouseOverCallback.call(this.callbackContext,a),this.game.input.disabled||this.disabled||(this.game.input.mousePointer.withinGame=!0)},requestPointerLock:function(){if(this.game.device.pointerLock){var a=this.game.canvas;a.requestPointerLock=a.requestPointerLock||a.mozRequestPointerLock||a.webkitRequestPointerLock,a.requestPointerLock();var b=this;this._pointerLockChange=function(a){return b.pointerLockChange(a)},document.addEventListener("pointerlockchange",this._pointerLockChange,!0),document.addEventListener("mozpointerlockchange",this._pointerLockChange,!0),document.addEventListener("webkitpointerlockchange",this._pointerLockChange,!0)}},pointerLockChange:function(a){var b=this.game.canvas;document.pointerLockElement===b||document.mozPointerLockElement===b||document.webkitPointerLockElement===b?(this.locked=!0,this.pointerLock.dispatch(!0,a)):(this.locked=!1,this.pointerLock.dispatch(!1,a))},releasePointerLock:function(){document.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock,document.exitPointerLock(),document.removeEventListener("pointerlockchange",this._pointerLockChange,!0),document.removeEventListener("mozpointerlockchange",this._pointerLockChange,!0),document.removeEventListener("webkitpointerlockchange",this._pointerLockChange,!0)},stop:function(){this.game.canvas.removeEventListener("mousedown",this._onMouseDown,!0),this.game.canvas.removeEventListener("mousemove",this._onMouseMove,!0),this.game.canvas.removeEventListener("mouseup",this._onMouseUp,!0),this.game.canvas.removeEventListener("mouseover",this._onMouseOver,!0),this.game.canvas.removeEventListener("mouseout",this._onMouseOut,!0),this.game.canvas.removeEventListener("mousewheel",this._onMouseWheel,!0),this.game.canvas.removeEventListener("DOMMouseScroll",this._onMouseWheel,!0)}},b.Mouse.prototype.constructor=b.Mouse,b.MSPointer=function(a){this.game=a,this.callbackContext=this.game,this.disabled=!1,this._onMSPointerDown=null,this._onMSPointerMove=null,this._onMSPointerUp=null},b.MSPointer.prototype={start:function(){if(null===this._onMSPointerDown){var a=this;this.game.device.mspointer===!0&&(this._onMSPointerDown=function(b){return a.onPointerDown(b)},this._onMSPointerMove=function(b){return a.onPointerMove(b)},this._onMSPointerUp=function(b){return a.onPointerUp(b)},this.game.renderer.view.addEventListener("MSPointerDown",this._onMSPointerDown,!1),this.game.renderer.view.addEventListener("MSPointerMove",this._onMSPointerMove,!1),this.game.renderer.view.addEventListener("MSPointerUp",this._onMSPointerUp,!1),this.game.renderer.view.addEventListener("pointerDown",this._onMSPointerDown,!1),this.game.renderer.view.addEventListener("pointerMove",this._onMSPointerMove,!1),this.game.renderer.view.addEventListener("pointerUp",this._onMSPointerUp,!1),this.game.renderer.view.style["-ms-content-zooming"]="none",this.game.renderer.view.style["-ms-touch-action"]="none")}},onPointerDown:function(a){this.game.input.disabled||this.disabled||(a.preventDefault(),a.identifier=a.pointerId,this.game.input.startPointer(a))},onPointerMove:function(a){this.game.input.disabled||this.disabled||(a.preventDefault(),a.identifier=a.pointerId,this.game.input.updatePointer(a))},onPointerUp:function(a){this.game.input.disabled||this.disabled||(a.preventDefault(),a.identifier=a.pointerId,this.game.input.stopPointer(a))},stop:function(){this.game.canvas.removeEventListener("MSPointerDown",this._onMSPointerDown),this.game.canvas.removeEventListener("MSPointerMove",this._onMSPointerMove),this.game.canvas.removeEventListener("MSPointerUp",this._onMSPointerUp),this.game.canvas.removeEventListener("pointerDown",this._onMSPointerDown),this.game.canvas.removeEventListener("pointerMove",this._onMSPointerMove),this.game.canvas.removeEventListener("pointerUp",this._onMSPointerUp)}},b.MSPointer.prototype.constructor=b.MSPointer,b.Pointer=function(a,c){this.game=a,this.id=c,this.type=b.POINTER,this.exists=!0,this.identifier=0,this.pointerId=null,this.target=null,this.button=null,this._holdSent=!1,this._history=[],this._nextDrop=0,this._stateReset=!1,this.withinGame=!1,this.clientX=-1,this.clientY=-1,this.pageX=-1,this.pageY=-1,this.screenX=-1,this.screenY=-1,this.rawMovementX=0,this.rawMovementY=0,this.movementX=0,this.movementY=0,this.x=-1,this.y=-1,this.isMouse=!1,this.isDown=!1,this.isUp=!0,this.timeDown=0,this.timeUp=0,this.previousTapTime=0,this.totalTouches=0,this.msSinceLastClick=Number.MAX_VALUE,this.targetObject=null,this.active=!1,this.position=new b.Point,this.positionDown=new b.Point,this.positionUp=new b.Point,this.circle=new b.Circle(0,0,44),0===c&&(this.isMouse=!0)},b.Pointer.prototype={start:function(a){return a.pointerId&&(this.pointerId=a.pointerId),this.identifier=a.identifier,this.target=a.target,"undefined"!=typeof a.button&&(this.button=a.button),this._history=[],this.active=!0,this.withinGame=!0,this.isDown=!0,this.isUp=!1,this.msSinceLastClick=this.game.time.now-this.timeDown,this.timeDown=this.game.time.now,this._holdSent=!1,this.move(a,!0),this.positionDown.setTo(this.x,this.y),(this.game.input.multiInputOverride===b.Input.MOUSE_OVERRIDES_TOUCH||this.game.input.multiInputOverride===b.Input.MOUSE_TOUCH_COMBINE||this.game.input.multiInputOverride===b.Input.TOUCH_OVERRIDES_MOUSE&&0===this.game.input.currentPointers)&&(this.game.input.x=this.x,this.game.input.y=this.y,this.game.input.position.setTo(this.x,this.y),this.game.input.onDown.dispatch(this,a),this.game.input.resetSpeed(this.x,this.y)),this._stateReset=!1,this.totalTouches++,this.isMouse||this.game.input.currentPointers++,null!==this.targetObject&&this.targetObject._touchedHandler(this),this},update:function(){this.active&&(this._holdSent===!1&&this.duration>=this.game.input.holdRate&&((this.game.input.multiInputOverride==b.Input.MOUSE_OVERRIDES_TOUCH||this.game.input.multiInputOverride==b.Input.MOUSE_TOUCH_COMBINE||this.game.input.multiInputOverride==b.Input.TOUCH_OVERRIDES_MOUSE&&0===this.game.input.currentPointers)&&this.game.input.onHold.dispatch(this),this._holdSent=!0),this.game.input.recordPointerHistory&&this.game.time.now>=this._nextDrop&&(this._nextDrop=this.game.time.now+this.game.input.recordRate,this._history.push({x:this.position.x,y:this.position.y}),this._history.length>this.game.input.recordLimit&&this._history.shift()))},move:function(a,c){if(!this.game.input.pollLocked){if("undefined"==typeof c&&(c=!1),"undefined"!=typeof a.button&&(this.button=a.button),this.clientX=a.clientX,this.clientY=a.clientY,this.pageX=a.pageX,this.pageY=a.pageY,this.screenX=a.screenX,this.screenY=a.screenY,this.isMouse&&this.game.input.mouse.locked&&!c&&(this.rawMovementX=a.movementX||a.mozMovementX||a.webkitMovementX||0,this.rawMovementY=a.movementY||a.mozMovementY||a.webkitMovementY||0,this.movementX+=this.rawMovementX,this.movementY+=this.rawMovementY),this.x=(this.pageX-this.game.stage.offset.x)*this.game.input.scale.x,this.y=(this.pageY-this.game.stage.offset.y)*this.game.input.scale.y,this.position.setTo(this.x,this.y),this.circle.x=this.x,this.circle.y=this.y,(this.game.input.multiInputOverride===b.Input.MOUSE_OVERRIDES_TOUCH||this.game.input.multiInputOverride===b.Input.MOUSE_TOUCH_COMBINE||this.game.input.multiInputOverride===b.Input.TOUCH_OVERRIDES_MOUSE&&0===this.game.input.currentPointers)&&(this.game.input.activePointer=this,this.game.input.x=this.x,this.game.input.y=this.y,this.game.input.position.setTo(this.game.input.x,this.game.input.y),this.game.input.circle.x=this.game.input.x,this.game.input.circle.y=this.game.input.y),this.withinGame=this.game.scale.bounds.contains(this.pageX,this.pageY),this.game.paused)return this;this.game.input.moveCallback&&this.game.input.moveCallback.call(this.game.input.moveCallbackContext,this,this.x,this.y);for(var d=this.game.input.moveCallbacks.length;d--;)this.game.input.moveCallbacks[d].callback.call(this.game.input.moveCallbacks[d].context,this,this.x,this.y);return null!==this.targetObject&&this.targetObject.isDragged===!0?(this.targetObject.update(this)===!1&&(this.targetObject=null),this):(this.game.input.interactiveItems.total>0&&this.processInteractiveObjects(c),this)}},processInteractiveObjects:function(a){this.game.input.interactiveItems.setAll("checked",!1),this._highestRenderOrderID=Number.MAX_SAFE_INTEGER,this._highestRenderObject=null,this._highestInputPriorityID=-1;var b=this.game.input.interactiveItems.first;do b&&b.validForInput(this._highestInputPriorityID,this._highestRenderOrderID,!1)&&(b.checked=!0,(a&&b.checkPointerDown(this,!0)||!a&&b.checkPointerOver(this,!0))&&(this._highestRenderOrderID=b.sprite._cache[3],this._highestInputPriorityID=b.priorityID,this._highestRenderObject=b)),b=this.game.input.interactiveItems.next;while(null!==b);var b=this.game.input.interactiveItems.first;do b&&!b.checked&&b.validForInput(this._highestInputPriorityID,this._highestRenderOrderID,!0)&&(a&&b.checkPointerDown(this,!1)||!a&&b.checkPointerOver(this,!1))&&(this._highestRenderOrderID=b.sprite._cache[3],this._highestInputPriorityID=b.priorityID,this._highestRenderObject=b),b=this.game.input.interactiveItems.next;while(null!==b);null===this._highestRenderObject?this.targetObject&&(this.targetObject._pointerOutHandler(this),this.targetObject=null):null===this.targetObject?(this.targetObject=this._highestRenderObject,this._highestRenderObject._pointerOverHandler(this)):this.targetObject===this._highestRenderObject?this._highestRenderObject.update(this)===!1&&(this.targetObject=null):(this.targetObject._pointerOutHandler(this),this.targetObject=this._highestRenderObject,this.targetObject._pointerOverHandler(this))},leave:function(a){this.withinGame=!1,this.move(a,!1)},stop:function(a){return this._stateReset?void a.preventDefault():(this.timeUp=this.game.time.now,(this.game.input.multiInputOverride===b.Input.MOUSE_OVERRIDES_TOUCH||this.game.input.multiInputOverride===b.Input.MOUSE_TOUCH_COMBINE||this.game.input.multiInputOverride===b.Input.TOUCH_OVERRIDES_MOUSE&&0===this.game.input.currentPointers)&&(this.game.input.onUp.dispatch(this,a),this.duration>=0&&this.duration<=this.game.input.tapRate&&(this.timeUp-this.previousTapTime<this.game.input.doubleTapRate?this.game.input.onTap.dispatch(this,!0):this.game.input.onTap.dispatch(this,!1),this.previousTapTime=this.timeUp)),this.id>0&&(this.active=!1),this.withinGame=!1,this.isDown=!1,this.isUp=!0,this.pointerId=null,this.identifier=null,this.positionUp.setTo(this.x,this.y),this.isMouse===!1&&this.game.input.currentPointers--,this.game.input.interactiveItems.callAll("_releasedHandler",this),this.targetObject=null,this)},justPressed:function(a){return a=a||this.game.input.justPressedRate,this.isDown===!0&&this.timeDown+a>this.game.time.now},justReleased:function(a){return a=a||this.game.input.justReleasedRate,this.isUp===!0&&this.timeUp+a>this.game.time.now},reset:function(){this.isMouse===!1&&(this.active=!1),this.pointerId=null,this.identifier=null,this.isDown=!1,this.isUp=!0,this.totalTouches=0,this._holdSent=!1,this._history.length=0,this._stateReset=!0,this.targetObject&&this.targetObject._releasedHandler(this),this.targetObject=null},resetMovement:function(){this.movementX=0,this.movementY=0}},b.Pointer.prototype.constructor=b.Pointer,Object.defineProperty(b.Pointer.prototype,"duration",{get:function(){return this.isUp?-1:this.game.time.now-this.timeDown}}),Object.defineProperty(b.Pointer.prototype,"worldX",{get:function(){return this.game.world.camera.x+this.x
}}),Object.defineProperty(b.Pointer.prototype,"worldY",{get:function(){return this.game.world.camera.y+this.y}}),b.Touch=function(a){this.game=a,this.disabled=!1,this.callbackContext=this.game,this.touchStartCallback=null,this.touchMoveCallback=null,this.touchEndCallback=null,this.touchEnterCallback=null,this.touchLeaveCallback=null,this.touchCancelCallback=null,this.preventDefault=!0,this.event=null,this._onTouchStart=null,this._onTouchMove=null,this._onTouchEnd=null,this._onTouchEnter=null,this._onTouchLeave=null,this._onTouchCancel=null,this._onTouchMove=null},b.Touch.prototype={start:function(){if(null===this._onTouchStart){var a=this;this.game.device.touch&&(this._onTouchStart=function(b){return a.onTouchStart(b)},this._onTouchMove=function(b){return a.onTouchMove(b)},this._onTouchEnd=function(b){return a.onTouchEnd(b)},this._onTouchEnter=function(b){return a.onTouchEnter(b)},this._onTouchLeave=function(b){return a.onTouchLeave(b)},this._onTouchCancel=function(b){return a.onTouchCancel(b)},this.game.canvas.addEventListener("touchstart",this._onTouchStart,!1),this.game.canvas.addEventListener("touchmove",this._onTouchMove,!1),this.game.canvas.addEventListener("touchend",this._onTouchEnd,!1),this.game.canvas.addEventListener("touchcancel",this._onTouchCancel,!1),this.game.device.cocoonJS||(this.game.canvas.addEventListener("touchenter",this._onTouchEnter,!1),this.game.canvas.addEventListener("touchleave",this._onTouchLeave,!1)))}},consumeDocumentTouches:function(){this._documentTouchMove=function(a){a.preventDefault()},document.addEventListener("touchmove",this._documentTouchMove,!1)},onTouchStart:function(a){if(this.event=a,this.touchStartCallback&&this.touchStartCallback.call(this.callbackContext,a),!this.game.input.disabled&&!this.disabled){this.preventDefault&&a.preventDefault();for(var b=0;b<a.changedTouches.length;b++)this.game.input.startPointer(a.changedTouches[b])}},onTouchCancel:function(a){if(this.event=a,this.touchCancelCallback&&this.touchCancelCallback.call(this.callbackContext,a),!this.game.input.disabled&&!this.disabled){this.preventDefault&&a.preventDefault();for(var b=0;b<a.changedTouches.length;b++)this.game.input.stopPointer(a.changedTouches[b])}},onTouchEnter:function(a){this.event=a,this.touchEnterCallback&&this.touchEnterCallback.call(this.callbackContext,a),this.game.input.disabled||this.disabled||this.preventDefault&&a.preventDefault()},onTouchLeave:function(a){this.event=a,this.touchLeaveCallback&&this.touchLeaveCallback.call(this.callbackContext,a),this.preventDefault&&a.preventDefault()},onTouchMove:function(a){this.event=a,this.touchMoveCallback&&this.touchMoveCallback.call(this.callbackContext,a),this.preventDefault&&a.preventDefault();for(var b=0;b<a.changedTouches.length;b++)this.game.input.updatePointer(a.changedTouches[b])},onTouchEnd:function(a){this.event=a,this.touchEndCallback&&this.touchEndCallback.call(this.callbackContext,a),this.preventDefault&&a.preventDefault();for(var b=0;b<a.changedTouches.length;b++)this.game.input.stopPointer(a.changedTouches[b])},stop:function(){this.game.device.touch&&(this.game.canvas.removeEventListener("touchstart",this._onTouchStart),this.game.canvas.removeEventListener("touchmove",this._onTouchMove),this.game.canvas.removeEventListener("touchend",this._onTouchEnd),this.game.canvas.removeEventListener("touchenter",this._onTouchEnter),this.game.canvas.removeEventListener("touchleave",this._onTouchLeave),this.game.canvas.removeEventListener("touchcancel",this._onTouchCancel))}},b.Touch.prototype.constructor=b.Touch,b.Gamepad=function(a){this.game=a,this._gamepads=[new b.SinglePad(a,this),new b.SinglePad(a,this),new b.SinglePad(a,this),new b.SinglePad(a,this)],this._gamepadIndexMap={},this._rawPads=[],this._active=!1,this.disabled=!1,this._gamepadSupportAvailable=!!navigator.webkitGetGamepads||!!navigator.webkitGamepads||-1!=navigator.userAgent.indexOf("Firefox/")||!!navigator.getGamepads,this._prevRawGamepadTypes=[],this._prevTimestamps=[],this.callbackContext=this,this.onConnectCallback=null,this.onDisconnectCallback=null,this.onDownCallback=null,this.onUpCallback=null,this.onAxisCallback=null,this.onFloatCallback=null,this._ongamepadconnected=null,this._gamepaddisconnected=null},b.Gamepad.prototype={addCallbacks:function(a,b){"undefined"!=typeof b&&(this.onConnectCallback="function"==typeof b.onConnect?b.onConnect:this.onConnectCallback,this.onDisconnectCallback="function"==typeof b.onDisconnect?b.onDisconnect:this.onDisconnectCallback,this.onDownCallback="function"==typeof b.onDown?b.onDown:this.onDownCallback,this.onUpCallback="function"==typeof b.onUp?b.onUp:this.onUpCallback,this.onAxisCallback="function"==typeof b.onAxis?b.onAxis:this.onAxisCallback,this.onFloatCallback="function"==typeof b.onFloat?b.onFloat:this.onFloatCallback)},start:function(){if(!this._active){this._active=!0;var a=this;this._ongamepadconnected=function(b){var c=b.gamepad;a._rawPads.push(c),a._gamepads[c.index].connect(c)},window.addEventListener("gamepadconnected",this._ongamepadconnected,!1),this._ongamepaddisconnected=function(b){var c=b.gamepad;for(var d in a._rawPads)a._rawPads[d].index===c.index&&a._rawPads.splice(d,1);a._gamepads[c.index].disconnect()},window.addEventListener("gamepaddisconnected",this._ongamepaddisconnected,!1)}},update:function(){this._pollGamepads(),this.pad1.pollStatus(),this.pad2.pollStatus(),this.pad3.pollStatus(),this.pad4.pollStatus()},_pollGamepads:function(){if(navigator.getGamepads)var a=navigator.getGamepads();else if(navigator.webkitGetGamepads)var a=navigator.webkitGetGamepads();else if(navigator.webkitGamepads)var a=navigator.webkitGamepads();if(a){this._rawPads=[];for(var b=!1,c=0;c<a.length&&(typeof a[c]!==this._prevRawGamepadTypes[c]&&(b=!0,this._prevRawGamepadTypes[c]=typeof a[c]),a[c]&&this._rawPads.push(a[c]),3!==c);c++);if(b){for(var d,e={rawIndices:{},padIndices:{}},f=0;f<this._gamepads.length;f++)if(d=this._gamepads[f],d.connected)for(var g=0;g<this._rawPads.length;g++)this._rawPads[g].index===d.index&&(e.rawIndices[d.index]=!0,e.padIndices[f]=!0);for(var h=0;h<this._gamepads.length;h++)if(d=this._gamepads[h],!e.padIndices[h]){this._rawPads.length<1&&d.disconnect();for(var i=0;i<this._rawPads.length&&!e.padIndices[h];i++){var j=this._rawPads[i];if(j){if(e.rawIndices[j.index]){d.disconnect();continue}d.connect(j),e.rawIndices[j.index]=!0,e.padIndices[h]=!0}else d.disconnect()}}}}},setDeadZones:function(a){for(var b=0;b<this._gamepads.length;b++)this._gamepads[b].deadZone=a},stop:function(){this._active=!1,window.removeEventListener("gamepadconnected",this._ongamepadconnected),window.removeEventListener("gamepaddisconnected",this._ongamepaddisconnected)},reset:function(){this.update();for(var a=0;a<this._gamepads.length;a++)this._gamepads[a].reset()},justPressed:function(a,b){for(var c=0;c<this._gamepads.length;c++)if(this._gamepads[c].justPressed(a,b)===!0)return!0;return!1},justReleased:function(a,b){for(var c=0;c<this._gamepads.length;c++)if(this._gamepads[c].justReleased(a,b)===!0)return!0;return!1},isDown:function(a){for(var b=0;b<this._gamepads.length;b++)if(this._gamepads[b].isDown(a)===!0)return!0;return!1}},b.Gamepad.prototype.constructor=b.Gamepad,Object.defineProperty(b.Gamepad.prototype,"active",{get:function(){return this._active}}),Object.defineProperty(b.Gamepad.prototype,"supported",{get:function(){return this._gamepadSupportAvailable}}),Object.defineProperty(b.Gamepad.prototype,"padsConnected",{get:function(){return this._rawPads.length}}),Object.defineProperty(b.Gamepad.prototype,"pad1",{get:function(){return this._gamepads[0]}}),Object.defineProperty(b.Gamepad.prototype,"pad2",{get:function(){return this._gamepads[1]}}),Object.defineProperty(b.Gamepad.prototype,"pad3",{get:function(){return this._gamepads[2]}}),Object.defineProperty(b.Gamepad.prototype,"pad4",{get:function(){return this._gamepads[3]}}),b.Gamepad.BUTTON_0=0,b.Gamepad.BUTTON_1=1,b.Gamepad.BUTTON_2=2,b.Gamepad.BUTTON_3=3,b.Gamepad.BUTTON_4=4,b.Gamepad.BUTTON_5=5,b.Gamepad.BUTTON_6=6,b.Gamepad.BUTTON_7=7,b.Gamepad.BUTTON_8=8,b.Gamepad.BUTTON_9=9,b.Gamepad.BUTTON_10=10,b.Gamepad.BUTTON_11=11,b.Gamepad.BUTTON_12=12,b.Gamepad.BUTTON_13=13,b.Gamepad.BUTTON_14=14,b.Gamepad.BUTTON_15=15,b.Gamepad.AXIS_0=0,b.Gamepad.AXIS_1=1,b.Gamepad.AXIS_2=2,b.Gamepad.AXIS_3=3,b.Gamepad.AXIS_4=4,b.Gamepad.AXIS_5=5,b.Gamepad.AXIS_6=6,b.Gamepad.AXIS_7=7,b.Gamepad.AXIS_8=8,b.Gamepad.AXIS_9=9,b.Gamepad.XBOX360_A=0,b.Gamepad.XBOX360_B=1,b.Gamepad.XBOX360_X=2,b.Gamepad.XBOX360_Y=3,b.Gamepad.XBOX360_LEFT_BUMPER=4,b.Gamepad.XBOX360_RIGHT_BUMPER=5,b.Gamepad.XBOX360_LEFT_TRIGGER=6,b.Gamepad.XBOX360_RIGHT_TRIGGER=7,b.Gamepad.XBOX360_BACK=8,b.Gamepad.XBOX360_START=9,b.Gamepad.XBOX360_STICK_LEFT_BUTTON=10,b.Gamepad.XBOX360_STICK_RIGHT_BUTTON=11,b.Gamepad.XBOX360_DPAD_LEFT=14,b.Gamepad.XBOX360_DPAD_RIGHT=15,b.Gamepad.XBOX360_DPAD_UP=12,b.Gamepad.XBOX360_DPAD_DOWN=13,b.Gamepad.XBOX360_STICK_LEFT_X=0,b.Gamepad.XBOX360_STICK_LEFT_Y=1,b.Gamepad.XBOX360_STICK_RIGHT_X=2,b.Gamepad.XBOX360_STICK_RIGHT_Y=3,b.Gamepad.PS3XC_X=0,b.Gamepad.PS3XC_CIRCLE=1,b.Gamepad.PS3XC_SQUARE=2,b.Gamepad.PS3XC_TRIANGLE=3,b.Gamepad.PS3XC_L1=4,b.Gamepad.PS3XC_R1=5,b.Gamepad.PS3XC_L2=6,b.Gamepad.PS3XC_R2=7,b.Gamepad.PS3XC_SELECT=8,b.Gamepad.PS3XC_START=9,b.Gamepad.PS3XC_STICK_LEFT_BUTTON=10,b.Gamepad.PS3XC_STICK_RIGHT_BUTTON=11,b.Gamepad.PS3XC_DPAD_UP=12,b.Gamepad.PS3XC_DPAD_DOWN=13,b.Gamepad.PS3XC_DPAD_LEFT=14,b.Gamepad.PS3XC_DPAD_RIGHT=15,b.Gamepad.PS3XC_STICK_LEFT_X=0,b.Gamepad.PS3XC_STICK_LEFT_Y=1,b.Gamepad.PS3XC_STICK_RIGHT_X=2,b.Gamepad.PS3XC_STICK_RIGHT_Y=3,b.SinglePad=function(a,b){this.game=a,this.index=null,this.connected=!1,this.callbackContext=this,this.onConnectCallback=null,this.onDisconnectCallback=null,this.onDownCallback=null,this.onUpCallback=null,this.onAxisCallback=null,this.onFloatCallback=null,this.deadZone=.26,this._padParent=b,this._rawPad=null,this._prevTimestamp=null,this._buttons=[],this._buttonsLen=0,this._axes=[],this._axesLen=0},b.SinglePad.prototype={addCallbacks:function(a,b){"undefined"!=typeof b&&(this.onConnectCallback="function"==typeof b.onConnect?b.onConnect:this.onConnectCallback,this.onDisconnectCallback="function"==typeof b.onDisconnect?b.onDisconnect:this.onDisconnectCallback,this.onDownCallback="function"==typeof b.onDown?b.onDown:this.onDownCallback,this.onUpCallback="function"==typeof b.onUp?b.onUp:this.onUpCallback,this.onAxisCallback="function"==typeof b.onAxis?b.onAxis:this.onAxisCallback,this.onFloatCallback="function"==typeof b.onFloat?b.onFloat:this.onFloatCallback)},addButton:function(a){return this.getButton(a)},getButton:function(a){return this._buttons[a]?this._buttons[a]:null},pollStatus:function(){if(!(!this.connected||this.game.input.disabled||this.game.input.gamepad.disabled||this._rawPad.timestamp&&this._rawPad.timestamp===this._prevTimestamp)){for(var a=0;a<this._buttonsLen;a++){var b=isNaN(this._rawPad.buttons[a])?this._rawPad.buttons[a].value:this._rawPad.buttons[a];b!==this._buttons[a].value&&(1===b?this.processButtonDown(a,b):0===b?this.processButtonUp(a,b):this.processButtonFloat(a,b))}for(var c=0;c<this._axesLen;c++){var d=this._rawPad.axes[c];this.processAxisChange(d>0&&d>this.deadZone||0>d&&d<-this.deadZone?{axis:c,value:d}:{axis:c,value:0})}this._prevTimestamp=this._rawPad.timestamp}},connect:function(a){var c=!this.connected;this.connected=!0,this.index=a.index,this._rawPad=a,this._buttons=[],this._buttonsLen=a.buttons.length,this._axes=a.axes,this._axesLen=a.axes.length;for(var d in a.buttons)d=parseInt(d,10),this._buttons[d]=new b.GamepadButton(this,d);c&&this._padParent.onConnectCallback&&this._padParent.onConnectCallback.call(this._padParent.callbackContext,this.index),c&&this.onConnectCallback&&this.onConnectCallback.call(this.callbackContext)},disconnect:function(){var a=this.connected,b=this.index;this.connected=!1,this.index=null,this._rawPad=void 0;for(var c=0;c<this._buttonsLen;c++)this._buttons[c].destroy();this._buttons=[],this._buttonsLen=0,this._axes=[],this._axesLen=0,a&&this._padParent.onDisconnectCallback&&this._padParent.onDisconnectCallback.call(this._padParent.callbackContext,b),a&&this.onDisconnectCallback&&this.onDisconnectCallback.call(this.callbackContext)},processAxisChange:function(a){this._axes[a.axis]!==a.value&&(this._axes[a.axis]=a.value,this._padParent.onAxisCallback&&this._padParent.onAxisCallback.call(this._padParent.callbackContext,a,this.index),this.onAxisCallback&&this.onAxisCallback.call(this.callbackContext,a))},processButtonDown:function(a,b){this._padParent.onDownCallback&&this._padParent.onDownCallback.call(this._padParent.callbackContext,a,b,this.index),this.onDownCallback&&this.onDownCallback.call(this.callbackContext,a,b),this._buttons[a]&&this._buttons[a].processButtonDown(b)},processButtonUp:function(a,b){this._padParent.onUpCallback&&this._padParent.onUpCallback.call(this._padParent.callbackContext,a,b,this.index),this.onUpCallback&&this.onUpCallback.call(this.callbackContext,a,b),this._buttons[a]&&this._buttons[a].processButtonUp(b)},processButtonFloat:function(a,b){this._padParent.onFloatCallback&&this._padParent.onFloatCallback.call(this._padParent.callbackContext,a,b,this.index),this.onFloatCallback&&this.onFloatCallback.call(this.callbackContext,a,b),this._buttons[a]&&this._buttons[a].processButtonFloat(b)},axis:function(a){return this._axes[a]?this._axes[a]:!1},isDown:function(a){return this._buttons[a]?this._buttons[a].isDown:!1},isUp:function(a){return this._buttons[a]?this._buttons[a].isUp:!1},justReleased:function(a,b){return this._buttons[a]?this._buttons[a].justReleased(b):void 0},justPressed:function(a,b){return this._buttons[a]?this._buttons[a].justPressed(b):void 0},buttonValue:function(a){return this._buttons[a]?this._buttons[a].value:null},reset:function(){for(var a=0;a<this._axes.length;a++)this._axes[a]=0}},b.SinglePad.prototype.constructor=b.SinglePad,b.GamepadButton=function(a,c){this.pad=a,this.game=a.game,this.isDown=!1,this.isUp=!0,this.timeDown=0,this.duration=0,this.timeUp=0,this.repeats=0,this.value=0,this.buttonCode=c,this.onDown=new b.Signal,this.onUp=new b.Signal,this.onFloat=new b.Signal},b.GamepadButton.prototype={processButtonDown:function(a){this.isDown?(this.duration=this.game.time.now-this.timeDown,this.repeats++):(this.isDown=!0,this.isUp=!1,this.timeDown=this.game.time.now,this.duration=0,this.repeats=0,this.value=a,this.onDown.dispatch(this,a))},processButtonUp:function(a){this.isDown&&(this.isDown=!1,this.isUp=!0,this.timeUp=this.game.time.now,this.value=a,this.onUp.dispatch(this,a))},processButtonFloat:function(a){this.value=a,this.onFloat.dispatch(this,a)},justPressed:function(a){return"undefined"==typeof a&&(a=250),this.isDown&&this.duration<a},justReleased:function(a){return"undefined"==typeof a&&(a=250),this.isDown===!1&&this.game.time.now-this.timeUp<a},reset:function(){this.isDown=!1,this.isUp=!0,this.timeDown=this.game.time.now,this.duration=0,this.repeats=0},destroy:function(){this.onDown.dispose(),this.onUp.dispose(),this.onFloat.dispose(),this.pad=null,this.game=null}},b.GamepadButton.prototype.constructor=b.GamepadButton,b.InputHandler=function(a){this.sprite=a,this.game=a.game,this.enabled=!1,this.checked=!1,this.priorityID=0,this.useHandCursor=!1,this._setHandCursor=!1,this.isDragged=!1,this.allowHorizontalDrag=!0,this.allowVerticalDrag=!0,this.bringToTop=!1,this.snapOffset=null,this.snapOnDrag=!1,this.snapOnRelease=!1,this.snapX=0,this.snapY=0,this.snapOffsetX=0,this.snapOffsetY=0,this.pixelPerfectOver=!1,this.pixelPerfectClick=!1,this.pixelPerfectAlpha=255,this.draggable=!1,this.boundsRect=null,this.boundsSprite=null,this.consumePointerEvent=!1,this._dragPhase=!1,this._wasEnabled=!1,this._tempPoint=new b.Point,this._pointerData=[],this._pointerData.push({id:0,x:0,y:0,isDown:!1,isUp:!1,isOver:!1,isOut:!1,timeOver:0,timeOut:0,timeDown:0,timeUp:0,downDuration:0,isDragged:!1})},b.InputHandler.prototype={start:function(a,c){if(a=a||0,"undefined"==typeof c&&(c=!1),this.enabled===!1){this.game.input.interactiveItems.add(this),this.useHandCursor=c,this.priorityID=a;for(var d=0;10>d;d++)this._pointerData[d]={id:d,x:0,y:0,isDown:!1,isUp:!1,isOver:!1,isOut:!1,timeOver:0,timeOut:0,timeDown:0,timeUp:0,downDuration:0,isDragged:!1};this.snapOffset=new b.Point,this.enabled=!0,this._wasEnabled=!0,this.sprite.events&&null===this.sprite.events.onInputOver&&(this.sprite.events.onInputOver=new b.Signal,this.sprite.events.onInputOut=new b.Signal,this.sprite.events.onInputDown=new b.Signal,this.sprite.events.onInputUp=new b.Signal,this.sprite.events.onDragStart=new b.Signal,this.sprite.events.onDragStop=new b.Signal)}return this.sprite.events.onAddedToGroup.add(this.addedToGroup,this),this.sprite.events.onRemovedFromGroup.add(this.removedFromGroup,this),this.flagged=!1,this.sprite},addedToGroup:function(){this._dragPhase||this._wasEnabled&&!this.enabled&&this.start()},removedFromGroup:function(){this._dragPhase||(this.enabled?(this._wasEnabled=!0,this.stop()):this._wasEnabled=!1)},reset:function(){this.enabled=!1,this.flagged=!1;for(var a=0;10>a;a++)this._pointerData[a]={id:a,x:0,y:0,isDown:!1,isUp:!1,isOver:!1,isOut:!1,timeOver:0,timeOut:0,timeDown:0,timeUp:0,downDuration:0,isDragged:!1}},stop:function(){this.enabled!==!1&&(this.enabled=!1,this.game.input.interactiveItems.remove(this))},destroy:function(){this.sprite&&(this._setHandCursor&&(this.game.canvas.style.cursor="default",this._setHandCursor=!1),this.enabled=!1,this.game.input.interactiveItems.remove(this),this._pointerData.length=0,this.boundsRect=null,this.boundsSprite=null,this.sprite=null)},validForInput:function(a,b,c){return"undefined"==typeof c&&(c=!0),0===this.sprite.scale.x||0===this.sprite.scale.y||this.priorityID<this.game.input.minPriorityID?!1:(c||!this.pixelPerfectClick&&!this.pixelPerfectOver)&&(this.priorityID>a||this.priorityID===a&&this.sprite._cache[3]<b)?!0:!1},isPixelPerfect:function(){return this.pixelPerfectClick||this.pixelPerfectOver},pointerX:function(a){return a=a||0,this._pointerData[a].x},pointerY:function(a){return a=a||0,this._pointerData[a].y},pointerDown:function(a){return a=a||0,this._pointerData[a].isDown},pointerUp:function(a){return a=a||0,this._pointerData[a].isUp},pointerTimeDown:function(a){return a=a||0,this._pointerData[a].timeDown},pointerTimeUp:function(a){return a=a||0,this._pointerData[a].timeUp},pointerOver:function(a){if(this.enabled){if("undefined"!=typeof a)return this._pointerData[a].isOver;for(var b=0;10>b;b++)if(this._pointerData[b].isOver)return!0}return!1},pointerOut:function(a){if(this.enabled){if("undefined"!=typeof a)return this._pointerData[a].isOut;for(var b=0;10>b;b++)if(this._pointerData[b].isOut)return!0}return!1},pointerTimeOver:function(a){return a=a||0,this._pointerData[a].timeOver},pointerTimeOut:function(a){return a=a||0,this._pointerData[a].timeOut},pointerDragged:function(a){return a=a||0,this._pointerData[a].isDragged},checkPointerDown:function(a,b){return a.isDown&&this.enabled&&this.sprite&&this.sprite.parent&&this.sprite.visible&&this.sprite.parent.visible&&this.game.input.hitTest(this.sprite,a,this._tempPoint)?("undefined"==typeof b&&(b=!1),!b&&this.pixelPerfectClick?this.checkPixel(this._tempPoint.x,this._tempPoint.y):!0):!1},checkPointerOver:function(a,b){return this.enabled&&this.sprite&&this.sprite.parent&&this.sprite.visible&&this.sprite.parent.visible&&this.game.input.hitTest(this.sprite,a,this._tempPoint)?("undefined"==typeof b&&(b=!1),!b&&this.pixelPerfectOver?this.checkPixel(this._tempPoint.x,this._tempPoint.y):!0):!1},checkPixel:function(a,b,c){if(this.sprite.texture.baseTexture.source){if(this.game.input.hitContext.clearRect(0,0,1,1),null===a&&null===b){this.game.input.getLocalPosition(this.sprite,c,this._tempPoint);var a=this._tempPoint.x,b=this._tempPoint.y}0!==this.sprite.anchor.x&&(a-=-this.sprite.texture.frame.width*this.sprite.anchor.x),0!==this.sprite.anchor.y&&(b-=-this.sprite.texture.frame.height*this.sprite.anchor.y),a+=this.sprite.texture.frame.x,b+=this.sprite.texture.frame.y,this.game.input.hitContext.drawImage(this.sprite.texture.baseTexture.source,a,b,1,1,0,0,1,1);var d=this.game.input.hitContext.getImageData(0,0,1,1);if(d.data[3]>=this.pixelPerfectAlpha)return!0}return!1},update:function(a){return null!==this.sprite&&void 0!==this.sprite.parent?this.enabled&&this.sprite.visible&&this.sprite.parent.visible?this.draggable&&this._draggedPointerID==a.id?this.updateDrag(a):this._pointerData[a.id].isOver===!0?this.checkPointerOver(a)?(this._pointerData[a.id].x=a.x-this.sprite.x,this._pointerData[a.id].y=a.y-this.sprite.y,!0):(this._pointerOutHandler(a),!1):void 0:(this._pointerOutHandler(a),!1):void 0},_pointerOverHandler:function(a){null!==this.sprite&&this._pointerData[a.id].isOver===!1&&(this._pointerData[a.id].isOver=!0,this._pointerData[a.id].isOut=!1,this._pointerData[a.id].timeOver=this.game.time.now,this._pointerData[a.id].x=a.x-this.sprite.x,this._pointerData[a.id].y=a.y-this.sprite.y,this.useHandCursor&&this._pointerData[a.id].isDragged===!1&&(this.game.canvas.style.cursor="pointer",this._setHandCursor=!0),this.sprite&&this.sprite.events&&this.sprite.events.onInputOver.dispatch(this.sprite,a))},_pointerOutHandler:function(a){null!==this.sprite&&(this._pointerData[a.id].isOver=!1,this._pointerData[a.id].isOut=!0,this._pointerData[a.id].timeOut=this.game.time.now,this.useHandCursor&&this._pointerData[a.id].isDragged===!1&&(this.game.canvas.style.cursor="default",this._setHandCursor=!1),this.sprite&&this.sprite.events&&this.sprite.events.onInputOut.dispatch(this.sprite,a))},_touchedHandler:function(a){if(null!==this.sprite){if(this._pointerData[a.id].isDown===!1&&this._pointerData[a.id].isOver===!0){if(this.pixelPerfectClick&&!this.checkPixel(null,null,a))return;this._pointerData[a.id].isDown=!0,this._pointerData[a.id].isUp=!1,this._pointerData[a.id].timeDown=this.game.time.now,this.sprite&&this.sprite.events&&this.sprite.events.onInputDown.dispatch(this.sprite,a),this.draggable&&this.isDragged===!1&&this.startDrag(a),this.bringToTop&&this.sprite.bringToTop()}return this.consumePointerEvent}},_releasedHandler:function(a){null!==this.sprite&&this._pointerData[a.id].isDown&&a.isUp&&(this._pointerData[a.id].isDown=!1,this._pointerData[a.id].isUp=!0,this._pointerData[a.id].timeUp=this.game.time.now,this._pointerData[a.id].downDuration=this._pointerData[a.id].timeUp-this._pointerData[a.id].timeDown,this.checkPointerOver(a)?this.sprite&&this.sprite.events&&this.sprite.events.onInputUp.dispatch(this.sprite,a,!0):(this.sprite&&this.sprite.events&&this.sprite.events.onInputUp.dispatch(this.sprite,a,!1),this.useHandCursor&&(this.game.canvas.style.cursor="default",this._setHandCursor=!1)),this.draggable&&this.isDragged&&this._draggedPointerID===a.id&&this.stopDrag(a))},updateDrag:function(a){return a.isUp?(this.stopDrag(a),!1):(this.sprite.fixedToCamera?(this.allowHorizontalDrag&&(this.sprite.cameraOffset.x=a.x+this._dragPoint.x+this.dragOffset.x),this.allowVerticalDrag&&(this.sprite.cameraOffset.y=a.y+this._dragPoint.y+this.dragOffset.y),this.boundsRect&&this.checkBoundsRect(),this.boundsSprite&&this.checkBoundsSprite(),this.snapOnDrag&&(this.sprite.cameraOffset.x=Math.round((this.sprite.cameraOffset.x-this.snapOffsetX%this.snapX)/this.snapX)*this.snapX+this.snapOffsetX%this.snapX,this.sprite.cameraOffset.y=Math.round((this.sprite.cameraOffset.y-this.snapOffsetY%this.snapY)/this.snapY)*this.snapY+this.snapOffsetY%this.snapY)):(this.allowHorizontalDrag&&(this.sprite.x=a.x+this._dragPoint.x+this.dragOffset.x),this.allowVerticalDrag&&(this.sprite.y=a.y+this._dragPoint.y+this.dragOffset.y),this.boundsRect&&this.checkBoundsRect(),this.boundsSprite&&this.checkBoundsSprite(),this.snapOnDrag&&(this.sprite.x=Math.round((this.sprite.x-this.snapOffsetX%this.snapX)/this.snapX)*this.snapX+this.snapOffsetX%this.snapX,this.sprite.y=Math.round((this.sprite.y-this.snapOffsetY%this.snapY)/this.snapY)*this.snapY+this.snapOffsetY%this.snapY)),!0)},justOver:function(a,b){return a=a||0,b=b||500,this._pointerData[a].isOver&&this.overDuration(a)<b},justOut:function(a,b){return a=a||0,b=b||500,this._pointerData[a].isOut&&this.game.time.now-this._pointerData[a].timeOut<b},justPressed:function(a,b){return a=a||0,b=b||500,this._pointerData[a].isDown&&this.downDuration(a)<b},justReleased:function(a,b){return a=a||0,b=b||500,this._pointerData[a].isUp&&this.game.time.now-this._pointerData[a].timeUp<b},overDuration:function(a){return a=a||0,this._pointerData[a].isOver?this.game.time.now-this._pointerData[a].timeOver:-1},downDuration:function(a){return a=a||0,this._pointerData[a].isDown?this.game.time.now-this._pointerData[a].timeDown:-1},enableDrag:function(a,c,d,e,f,g){"undefined"==typeof a&&(a=!1),"undefined"==typeof c&&(c=!1),"undefined"==typeof d&&(d=!1),"undefined"==typeof e&&(e=255),"undefined"==typeof f&&(f=null),"undefined"==typeof g&&(g=null),this._dragPoint=new b.Point,this.draggable=!0,this.bringToTop=c,this.dragOffset=new b.Point,this.dragFromCenter=a,this.pixelPerfectClick=d,this.pixelPerfectAlpha=e,f&&(this.boundsRect=f),g&&(this.boundsSprite=g)},disableDrag:function(){if(this._pointerData)for(var a=0;10>a;a++)this._pointerData[a].isDragged=!1;this.draggable=!1,this.isDragged=!1,this._draggedPointerID=-1},startDrag:function(a){if(this.isDragged=!0,this._draggedPointerID=a.id,this._pointerData[a.id].isDragged=!0,this.sprite.fixedToCamera)this.dragFromCenter?(this.sprite.centerOn(a.x,a.y),this._dragPoint.setTo(this.sprite.cameraOffset.x-a.x,this.sprite.cameraOffset.y-a.y)):this._dragPoint.setTo(this.sprite.cameraOffset.x-a.x,this.sprite.cameraOffset.y-a.y);else if(this.dragFromCenter){var b=this.sprite.getBounds();this.sprite.x=a.x+(this.sprite.x-b.centerX),this.sprite.y=a.y+(this.sprite.y-b.centerY),this._dragPoint.setTo(this.sprite.x-a.x,this.sprite.y-a.y)}else this._dragPoint.setTo(this.sprite.x-a.x,this.sprite.y-a.y);this.updateDrag(a),this.bringToTop&&(this._dragPhase=!0,this.sprite.bringToTop()),this.sprite.events.onDragStart.dispatch(this.sprite,a)},stopDrag:function(a){this.isDragged=!1,this._draggedPointerID=-1,this._pointerData[a.id].isDragged=!1,this._dragPhase=!1,this.snapOnRelease&&(this.sprite.fixedToCamera?(this.sprite.cameraOffset.x=Math.round((this.sprite.cameraOffset.x-this.snapOffsetX%this.snapX)/this.snapX)*this.snapX+this.snapOffsetX%this.snapX,this.sprite.cameraOffset.y=Math.round((this.sprite.cameraOffset.y-this.snapOffsetY%this.snapY)/this.snapY)*this.snapY+this.snapOffsetY%this.snapY):(this.sprite.x=Math.round((this.sprite.x-this.snapOffsetX%this.snapX)/this.snapX)*this.snapX+this.snapOffsetX%this.snapX,this.sprite.y=Math.round((this.sprite.y-this.snapOffsetY%this.snapY)/this.snapY)*this.snapY+this.snapOffsetY%this.snapY)),this.sprite.events.onDragStop.dispatch(this.sprite,a),this.checkPointerOver(a)===!1&&this._pointerOutHandler(a)},setDragLock:function(a,b){"undefined"==typeof a&&(a=!0),"undefined"==typeof b&&(b=!0),this.allowHorizontalDrag=a,this.allowVerticalDrag=b},enableSnap:function(a,b,c,d,e,f){"undefined"==typeof c&&(c=!0),"undefined"==typeof d&&(d=!1),"undefined"==typeof e&&(e=0),"undefined"==typeof f&&(f=0),this.snapX=a,this.snapY=b,this.snapOffsetX=e,this.snapOffsetY=f,this.snapOnDrag=c,this.snapOnRelease=d},disableSnap:function(){this.snapOnDrag=!1,this.snapOnRelease=!1},checkBoundsRect:function(){this.sprite.fixedToCamera?(this.sprite.cameraOffset.x<this.boundsRect.left?this.sprite.cameraOffset.x=this.boundsRect.cameraOffset.x:this.sprite.cameraOffset.x+this.sprite.width>this.boundsRect.right&&(this.sprite.cameraOffset.x=this.boundsRect.right-this.sprite.width),this.sprite.cameraOffset.y<this.boundsRect.top?this.sprite.cameraOffset.y=this.boundsRect.top:this.sprite.cameraOffset.y+this.sprite.height>this.boundsRect.bottom&&(this.sprite.cameraOffset.y=this.boundsRect.bottom-this.sprite.height)):(this.sprite.x<this.boundsRect.left?this.sprite.x=this.boundsRect.x:this.sprite.x+this.sprite.width>this.boundsRect.right&&(this.sprite.x=this.boundsRect.right-this.sprite.width),this.sprite.y<this.boundsRect.top?this.sprite.y=this.boundsRect.top:this.sprite.y+this.sprite.height>this.boundsRect.bottom&&(this.sprite.y=this.boundsRect.bottom-this.sprite.height))},checkBoundsSprite:function(){this.sprite.fixedToCamera&&this.boundsSprite.fixedToCamera?(this.sprite.cameraOffset.x<this.boundsSprite.camerOffset.x?this.sprite.cameraOffset.x=this.boundsSprite.camerOffset.x:this.sprite.cameraOffset.x+this.sprite.width>this.boundsSprite.camerOffset.x+this.boundsSprite.width&&(this.sprite.cameraOffset.x=this.boundsSprite.camerOffset.x+this.boundsSprite.width-this.sprite.width),this.sprite.cameraOffset.y<this.boundsSprite.camerOffset.y?this.sprite.cameraOffset.y=this.boundsSprite.camerOffset.y:this.sprite.cameraOffset.y+this.sprite.height>this.boundsSprite.camerOffset.y+this.boundsSprite.height&&(this.sprite.cameraOffset.y=this.boundsSprite.camerOffset.y+this.boundsSprite.height-this.sprite.height)):(this.sprite.x<this.boundsSprite.x?this.sprite.x=this.boundsSprite.x:this.sprite.x+this.sprite.width>this.boundsSprite.x+this.boundsSprite.width&&(this.sprite.x=this.boundsSprite.x+this.boundsSprite.width-this.sprite.width),this.sprite.y<this.boundsSprite.y?this.sprite.y=this.boundsSprite.y:this.sprite.y+this.sprite.height>this.boundsSprite.y+this.boundsSprite.height&&(this.sprite.y=this.boundsSprite.y+this.boundsSprite.height-this.sprite.height))}},b.InputHandler.prototype.constructor=b.InputHandler,b.Events=function(a){this.parent=a,this.onAddedToGroup=new b.Signal,this.onRemovedFromGroup=new b.Signal,this.onKilled=new b.Signal,this.onRevived=new b.Signal,this.onOutOfBounds=new b.Signal,this.onEnterBounds=new b.Signal,this.onInputOver=null,this.onInputOut=null,this.onInputDown=null,this.onInputUp=null,this.onDragStart=null,this.onDragStop=null,this.onAnimationStart=null,this.onAnimationComplete=null,this.onAnimationLoop=null},b.Events.prototype={destroy:function(){this.parent=null,this.onAddedToGroup.dispose(),this.onRemovedFromGroup.dispose(),this.onKilled.dispose(),this.onRevived.dispose(),this.onOutOfBounds.dispose(),this.onInputOver&&(this.onInputOver.dispose(),this.onInputOut.dispose(),this.onInputDown.dispose(),this.onInputUp.dispose(),this.onDragStart.dispose(),this.onDragStop.dispose()),this.onAnimationStart&&(this.onAnimationStart.dispose(),this.onAnimationComplete.dispose(),this.onAnimationLoop.dispose())}},b.Events.prototype.constructor=b.Events,b.GameObjectFactory=function(a){this.game=a,this.world=this.game.world},b.GameObjectFactory.prototype={existing:function(a){return this.world.add(a)},image:function(a,c,d,e,f){return"undefined"==typeof f&&(f=this.world),f.add(new b.Image(this.game,a,c,d,e))},sprite:function(a,b,c,d,e){return"undefined"==typeof e&&(e=this.world),e.create(a,b,c,d)},tween:function(a){return this.game.tweens.create(a)},group:function(a,c,d,e,f){return new b.Group(this.game,a,c,d,e,f)},physicsGroup:function(a,c,d,e){return new b.Group(this.game,c,d,e,!0,a)},spriteBatch:function(a,c,d){return"undefined"==typeof a&&(a=null),"undefined"==typeof c&&(c="group"),"undefined"==typeof d&&(d=!1),new b.SpriteBatch(this.game,a,c,d)},audio:function(a,b,c,d){return this.game.sound.add(a,b,c,d)},sound:function(a,b,c,d){return this.game.sound.add(a,b,c,d)},tileSprite:function(a,c,d,e,f,g,h){return"undefined"==typeof h&&(h=this.world),h.add(new b.TileSprite(this.game,a,c,d,e,f,g))},text:function(a,c,d,e,f){return"undefined"==typeof f&&(f=this.world),f.add(new b.Text(this.game,a,c,d,e))},button:function(a,c,d,e,f,g,h,i,j,k){return"undefined"==typeof k&&(k=this.world),k.add(new b.Button(this.game,a,c,d,e,f,g,h,i,j))},graphics:function(a,c,d){return"undefined"==typeof d&&(d=this.world),d.add(new b.Graphics(this.game,a,c))},emitter:function(a,c,d){return this.game.particles.add(new b.Particles.Arcade.Emitter(this.game,a,c,d))},retroFont:function(a,c,d,e,f,g,h,i,j){return new b.RetroFont(this.game,a,c,d,e,f,g,h,i,j)},bitmapText:function(a,c,d,e,f,g){return"undefined"==typeof g&&(g=this.world),g.add(new b.BitmapText(this.game,a,c,d,e,f))},tilemap:function(a,c,d,e,f){return new b.Tilemap(this.game,a,c,d,e,f)
},renderTexture:function(a,c,d,e){("undefined"==typeof d||""===d)&&(d=this.game.rnd.uuid()),"undefined"==typeof e&&(e=!1);var f=new b.RenderTexture(this.game,a,c,d);return e&&this.game.cache.addRenderTexture(d,f),f},bitmapData:function(a,c,d,e){"undefined"==typeof e&&(e=!1),("undefined"==typeof d||""===d)&&(d=this.game.rnd.uuid());var f=new b.BitmapData(this.game,d,a,c);return e&&this.game.cache.addBitmapData(d,f),f},filter:function(a){var c=Array.prototype.splice.call(arguments,1),a=new b.Filter[a](this.game);return a.init.apply(a,c),a},plugin:function(a){return this.game.plugins.add(a)}},b.GameObjectFactory.prototype.constructor=b.GameObjectFactory,b.GameObjectCreator=function(a){this.game=a,this.world=this.game.world},b.GameObjectCreator.prototype={image:function(a,c,d,e){return new b.Image(this.game,a,c,d,e)},sprite:function(a,c,d,e){return new b.Sprite(this.game,a,c,d,e)},tween:function(a){return new b.Tween(a,this.game)},group:function(a,c,d,e,f){return new b.Group(this.game,null,c,d,e,f)},spriteBatch:function(a,c,d){return"undefined"==typeof c&&(c="group"),"undefined"==typeof d&&(d=!1),new b.SpriteBatch(this.game,a,c,d)},audio:function(a,b,c,d){return this.game.sound.add(a,b,c,d)},sound:function(a,b,c,d){return this.game.sound.add(a,b,c,d)},tileSprite:function(a,c,d,e,f,g){return new b.TileSprite(this.game,a,c,d,e,f,g)},text:function(a,c,d,e){return new b.Text(this.game,a,c,d,e)},button:function(a,c,d,e,f,g,h,i,j){return new b.Button(this.game,a,c,d,e,f,g,h,i,j)},graphics:function(a,c){return new b.Graphics(this.game,a,c)},emitter:function(a,c,d){return new b.Particles.Arcade.Emitter(this.game,a,c,d)},retroFont:function(a,c,d,e,f,g,h,i,j){return new b.RetroFont(this.game,a,c,d,e,f,g,h,i,j)},bitmapText:function(a,c,d,e,f){return new b.BitmapText(this.game,a,c,d,e,f)},tilemap:function(a,c,d,e,f){return new b.Tilemap(this.game,a,c,d,e,f)},renderTexture:function(a,c,d,e){("undefined"==typeof d||""===d)&&(d=this.game.rnd.uuid()),"undefined"==typeof e&&(e=!1);var f=new b.RenderTexture(this.game,a,c,d);return e&&this.game.cache.addRenderTexture(d,f),f},bitmapData:function(a,c,d,e){"undefined"==typeof e&&(e=!1),("undefined"==typeof d||""===d)&&(d=this.game.rnd.uuid());var f=new b.BitmapData(this.game,d,a,c);return e&&this.game.cache.addBitmapData(d,f),f},filter:function(a){var c=Array.prototype.splice.call(arguments,1),a=new b.Filter[a](this.game);return a.init.apply(a,c),a}},b.GameObjectCreator.prototype.constructor=b.GameObjectCreator,b.BitmapData=function(a,c,d,e){"undefined"==typeof d&&(d=100),"undefined"==typeof e&&(e=100),this.game=a,this.key=c,this.width=d,this.height=e,this.canvas=b.Canvas.create(d,e,"",!0),this.context=this.canvas.getContext("2d"),this.ctx=this.context,this.imageData=this.context.getImageData(0,0,d,e),this.data=this.imageData.data,this.pixels=null,this.imageData.data.buffer?(this.buffer=this.imageData.data.buffer,this.pixels=new Uint32Array(this.buffer)):window.ArrayBuffer?(this.buffer=new ArrayBuffer(this.imageData.data.length),this.pixels=new Uint32Array(this.buffer)):this.pixels=this.imageData.data,this.baseTexture=new PIXI.BaseTexture(this.canvas),this.texture=new PIXI.Texture(this.baseTexture),this.textureFrame=new b.Frame(0,0,0,d,e,"bitmapData",a.rnd.uuid()),this.texture.frame=this.textureFrame,this.type=b.BITMAPDATA,this.disableTextureUpload=!1,this.dirty=!1,this.cls=this.clear,this.update=this.refreshBuffer,this._tempR=0,this._tempG=0,this._tempB=0},b.BitmapData.prototype={add:function(a){if(Array.isArray(a))for(var b=0;b<a.length;b++)a[b].loadTexture&&a[b].loadTexture(this);else a.loadTexture(this)},load:function(a){"string"==typeof a&&(a=this.game.cache.getImage(a)),this.resize(a.width,a.height),this.cls(),a instanceof b.Image||a instanceof b.Sprite?this.drawSprite(a,0,0):this.draw(a,0,0),this.update()},clear:function(){this.context.clearRect(0,0,this.width,this.height),this.dirty=!0},fill:function(a,b,c,d){"undefined"==typeof d&&(d=1),this.context.fillStyle="rgba("+a+","+b+","+c+","+d+")",this.context.fillRect(0,0,this.width,this.height),this.dirty=!0},resize:function(a,b){(a!==this.width||b!==this.height)&&(this.width=a,this.height=b,this.canvas.width=a,this.canvas.height=b,this.baseTexture.width=a,this.baseTexture.height=b,this.textureFrame.width=a,this.textureFrame.height=b,this.texture.width=a,this.texture.height=b,this.texture.crop.width=a,this.texture.crop.height=b,this.refreshBuffer(),this.dirty=!0)},refreshBuffer:function(a,b,c,d){"undefined"==typeof a&&(a=0),"undefined"==typeof b&&(b=0),"undefined"==typeof c&&(c=this.width),"undefined"==typeof d&&(d=this.height),this.imageData=this.context.getImageData(a,b,c,d),this.data=this.imageData.data,this.imageData.data.buffer?(this.buffer=this.imageData.data.buffer,this.pixels=new Uint32Array(this.buffer)):window.ArrayBuffer?(this.buffer=new ArrayBuffer(this.imageData.data.length),this.pixels=new Uint32Array(this.buffer)):this.pixels=this.imageData.data},processPixelRGB:function(a,c,d,e,f,g){"undefined"==typeof d&&(d=0),"undefined"==typeof e&&(e=0),"undefined"==typeof f&&(f=this.width),"undefined"==typeof g&&(g=this.height);for(var h=d+f,i=e+g,j=b.Color.createColor(),k={r:0,g:0,b:0,a:0},l=!1,m=e;i>m;m++)for(var n=d;h>n;n++)b.Color.unpackPixel(this.getPixel32(n,m),j),k=a.call(c,j,n,m),k!==!1&&null!==k&&void 0!==k&&(this.setPixel32(n,m,k.r,k.g,k.b,k.a,!1),l=!0);l&&(this.context.putImageData(this.imageData,0,0),this.dirty=!0)},processPixel:function(a,b,c,d,e,f){"undefined"==typeof c&&(c=0),"undefined"==typeof d&&(d=0),"undefined"==typeof e&&(e=this.width),"undefined"==typeof f&&(f=this.height);for(var g=c+e,h=d+f,i=0,j=0,k=!1,l=d;h>l;l++)for(var m=c;g>m;m++)i=this.getPixel32(m,l),j=a.call(b,i,m,l),j!==i&&(this.pixels[l*this.width+m]=j,k=!0);k&&(this.context.putImageData(this.imageData,0,0),this.dirty=!0)},replaceRGB:function(a,c,d,e,f,g,h,i,j){var k=0,l=0,m=this.width,n=this.height,o=b.Color.packPixel(a,c,d,e);void 0!==j&&j instanceof b.Rectangle&&(k=j.x,l=j.y,m=j.width,n=j.height);for(var p=0;n>p;p++)for(var q=0;m>q;q++)this.getPixel32(k+q,l+p)===o&&this.setPixel32(k+q,l+p,f,g,h,i,!1);this.context.putImageData(this.imageData,0,0),this.dirty=!0},setHSL:function(a,c,d,e){if(("undefined"==typeof a||null===a)&&(a=!1),("undefined"==typeof c||null===c)&&(c=!1),("undefined"==typeof d||null===d)&&(d=!1),a||c||d){"undefined"==typeof e&&(e=new b.Rectangle(0,0,this.width,this.height));for(var f=b.Color.createColor(),g=e.y;g<e.bottom;g++)for(var h=e.x;h<e.right;h++)b.Color.unpackPixel(this.getPixel32(h,g),f,!0),a&&(f.h=a),c&&(f.s=c),d&&(f.l=d),b.Color.HSLtoRGB(f.h,f.s,f.l,f),this.setPixel32(h,g,f.r,f.g,f.b,f.a,!1);this.context.putImageData(this.imageData,0,0),this.dirty=!0}},shiftHSL:function(a,c,d,e){if(("undefined"==typeof a||null===a)&&(a=!1),("undefined"==typeof c||null===c)&&(c=!1),("undefined"==typeof d||null===d)&&(d=!1),a||c||d){"undefined"==typeof e&&(e=new b.Rectangle(0,0,this.width,this.height));for(var f=b.Color.createColor(),g=e.y;g<e.bottom;g++)for(var h=e.x;h<e.right;h++)b.Color.unpackPixel(this.getPixel32(h,g),f,!0),a&&(f.h=this.game.math.wrap(f.h+a,0,1)),c&&(f.s=this.game.math.limitValue(f.s+c,0,1)),d&&(f.l=this.game.math.limitValue(f.l+d,0,1)),b.Color.HSLtoRGB(f.h,f.s,f.l,f),this.setPixel32(h,g,f.r,f.g,f.b,f.a,!1);this.context.putImageData(this.imageData,0,0),this.dirty=!0}},setPixel32:function(a,c,d,e,f,g,h){"undefined"==typeof h&&(h=!0),a>=0&&a<=this.width&&c>=0&&c<=this.height&&(this.pixels[c*this.width+a]=b.Device.LITTLE_ENDIAN?g<<24|f<<16|e<<8|d:d<<24|e<<16|f<<8|g,h&&(this.context.putImageData(this.imageData,0,0),this.dirty=!0))},setPixel:function(a,b,c,d,e,f){this.setPixel32(a,b,c,d,e,255,f)},getPixel:function(a,c,d){d||(d=b.Color.createColor());var e=~~(a+c*this.width);return e*=4,d.r=this.data[e],d.g=this.data[++e],d.b=this.data[++e],d.a=this.data[++e],d},getPixel32:function(a,b){return a>=0&&a<=this.width&&b>=0&&b<=this.height?this.pixels[b*this.width+a]:void 0},getPixelRGB:function(a,c,d,e,f){return b.Color.unpackPixel(this.getPixel32(a,c),d,e,f)},getPixels:function(a){return this.context.getImageData(a.x,a.y,a.width,a.height)},addToWorld:function(a,b){return this.game.add.image(a,b,this)},copyPixels:function(a,c,d,e){"string"==typeof a&&(a=this.game.cache.getImage(a));var f=a,g=0,h=0;if(a instanceof b.Image||a instanceof b.Sprite){f=a.texture.baseTexture.source;var i=a.texture.frame;g=i.x,h=i.y}else a instanceof b.BitmapData&&(f=a.canvas);this.context.drawImage(f,g+c.x,h+c.y,c.width,c.height,d,e,c.width,c.height),this.dirty=!0},draw:function(a,c,d,e,f){"undefined"==typeof c&&(c=0),"undefined"==typeof d&&(d=0),"string"==typeof a&&(a=this.game.cache.getImage(a));var g=a,h=0,i=0,j=0,k=0;if(a instanceof b.Image||a instanceof b.Sprite){g=a.texture.baseTexture.source;var l=a.texture.frame;h=l.x,i=l.y,j=l.width,k=l.height}else a instanceof b.BitmapData&&(g=a.canvas),j=a.width,k=a.height;"undefined"==typeof e&&(e=j),"undefined"==typeof f&&(f=k),this.context.drawImage(g,h,i,j,k,c,d,e,f),this.dirty=!0},drawSprite:function(a,b,c){"undefined"==typeof b&&(b=0),"undefined"==typeof c&&(c=0),this.draw(a,b,c)},alphaMask:function(a,b,c,d){("undefined"==typeof b||null===b)&&(b=this);var e=this.context.globalCompositeOperation;"undefined"==typeof d||null===d?this.draw(b):this.draw(b,d.x,d.y,d.width,d.height),this.context.globalCompositeOperation="source-atop","undefined"==typeof c||null===c?this.draw(a):this.draw(a,c.x,c.y,c.width,c.height),this.context.globalCompositeOperation=e,this.update(),this.dirty=!0},extract:function(a,b,c,d,e,f,g,h,i){return"undefined"==typeof e&&(e=255),"undefined"==typeof f&&(f=!1),"undefined"==typeof g&&(g=b),"undefined"==typeof h&&(h=c),"undefined"==typeof i&&(i=d),f&&a.resize(this.width,this.height),this.processPixelRGB(function(f,j,k){return f.r===b&&f.g===c&&f.b===d&&a.setPixel32(j,k,g,h,i,e,!1),!1},this),a.context.putImageData(a.imageData,0,0),a.dirty=!0,a},rect:function(a,b,c,d,e){"undefined"!=typeof e&&(this.context.fillStyle=e),this.context.fillRect(a,b,c,d)},circle:function(a,b,c,d){"undefined"!=typeof d&&(this.context.fillStyle=d),this.context.beginPath(),this.context.arc(a,b,c,0,2*Math.PI,!1),this.context.closePath(),this.context.fill()},render:function(){!this.disableTextureUpload&&this.game.renderType===b.WEBGL&&this.dirty&&(PIXI.updateWebGLTexture(this.baseTexture,this.game.renderer.gl),this.dirty=!1)}},b.BitmapData.prototype.constructor=b.BitmapData,b.Sprite=function(a,c,d,e,f){c=c||0,d=d||0,e=e||null,f=f||null,this.game=a,this.name="",this.type=b.SPRITE,this.z=0,this.events=new b.Events(this),this.animations=new b.AnimationManager(this),this.key=e,PIXI.Sprite.call(this,PIXI.TextureCache.__default),this.position.set(c,d),this.world=new b.Point(c,d),this.autoCull=!1,this.input=null,this.body=null,this.alive=!0,this.health=1,this.lifespan=0,this.checkWorldBounds=!1,this.outOfBoundsKill=!1,this.debug=!1,this.cameraOffset=new b.Point,this.cropRect=null,this._cache=[0,0,0,0,1,0,1,0],this._crop=null,this._frame=null,this._bounds=new b.Rectangle,this.loadTexture(e,f)},b.Sprite.prototype=Object.create(PIXI.Sprite.prototype),b.Sprite.prototype.constructor=b.Sprite,b.Sprite.prototype.preUpdate=function(){if(1===this._cache[4]&&this.exists)return this.world.setTo(this.parent.position.x+this.position.x,this.parent.position.y+this.position.y),this.worldTransform.tx=this.world.x,this.worldTransform.ty=this.world.y,this._cache[0]=this.world.x,this._cache[1]=this.world.y,this._cache[2]=this.rotation,this.body&&this.body.preUpdate(),this._cache[4]=0,!1;if(this._cache[0]=this.world.x,this._cache[1]=this.world.y,this._cache[2]=this.rotation,!this.exists||!this.parent.exists)return this._cache[3]=-1,!1;if(this.lifespan>0&&(this.lifespan-=this.game.time.elapsed,this.lifespan<=0))return this.kill(),!1;if((this.autoCull||this.checkWorldBounds)&&this._bounds.copyFrom(this.getBounds()),this.autoCull&&(this.renderable=this.game.world.camera.screenView.intersects(this._bounds)),this.checkWorldBounds)if(1===this._cache[5]&&this.game.world.bounds.intersects(this._bounds))this._cache[5]=0,this.events.onEnterBounds.dispatch(this);else if(0===this._cache[5]&&!this.game.world.bounds.intersects(this._bounds)&&(this._cache[5]=1,this.events.onOutOfBounds.dispatch(this),this.outOfBoundsKill))return this.kill(),!1;this.world.setTo(this.game.camera.x+this.worldTransform.tx,this.game.camera.y+this.worldTransform.ty),this.visible&&(this._cache[3]=this.game.stage.currentRenderOrderID++),this.animations.update(),this.body&&this.body.preUpdate();for(var a=0,b=this.children.length;b>a;a++)this.children[a].preUpdate();return!0},b.Sprite.prototype.update=function(){},b.Sprite.prototype.postUpdate=function(){this.key instanceof b.BitmapData&&this.key.render(),this.exists&&this.body&&this.body.postUpdate(),1===this._cache[7]&&(this.position.x=(this.game.camera.view.x+this.cameraOffset.x)/this.game.camera.scale.x,this.position.y=(this.game.camera.view.y+this.cameraOffset.y)/this.game.camera.scale.y);for(var a=0,c=this.children.length;c>a;a++)this.children[a].postUpdate()},b.Sprite.prototype.loadTexture=function(a,c,d){c=c||0,(d||"undefined"==typeof d)&&this.animations.stop(),this.key=a;var e=!0,f=this.smoothed;a instanceof b.RenderTexture?(this.key=a.key,this.setTexture(a)):a instanceof b.BitmapData?this.setTexture(a.texture):a instanceof PIXI.Texture?this.setTexture(a):null===a||"undefined"==typeof a?(this.key="__default",this.setTexture(PIXI.TextureCache[this.key])):"string"!=typeof a||this.game.cache.checkImageKey(a)?(this.setTexture(new PIXI.Texture(PIXI.BaseTextureCache[a])),e=!this.animations.loadFrameData(this.game.cache.getFrameData(a),c)):(console.warn("Texture with key '"+a+"' not found."),this.key="__missing",this.setTexture(PIXI.TextureCache[this.key])),e&&(this._frame=b.Rectangle.clone(this.texture.frame)),f||(this.smoothed=!1)},b.Sprite.prototype.setFrame=function(a){this._frame=a,this.texture.frame.x=a.x,this.texture.frame.y=a.y,this.texture.frame.width=a.width,this.texture.frame.height=a.height,this.texture.crop.x=a.x,this.texture.crop.y=a.y,this.texture.crop.width=a.width,this.texture.crop.height=a.height,a.trimmed&&(this.texture.trim?(this.texture.trim.x=a.spriteSourceSizeX,this.texture.trim.y=a.spriteSourceSizeY,this.texture.trim.width=a.sourceSizeW,this.texture.trim.height=a.sourceSizeH):this.texture.trim={x:a.spriteSourceSizeX,y:a.spriteSourceSizeY,width:a.sourceSizeW,height:a.sourceSizeH},this.texture.width=a.sourceSizeW,this.texture.height=a.sourceSizeH,this.texture.frame.width=a.sourceSizeW,this.texture.frame.height=a.sourceSizeH),this.cropRect?this.updateCrop():this.game.renderType===b.WEBGL&&PIXI.WebGLRenderer.updateTextureFrame(this.texture)},b.Sprite.prototype.resetFrame=function(){this._frame&&this.setFrame(this._frame)},b.Sprite.prototype.crop=function(a,c){"undefined"==typeof c&&(c=!1),a?(c&&null!==this.cropRect?this.cropRect.setTo(a.x,a.y,a.width,a.height):this.cropRect=c&&null===this.cropRect?new b.Rectangle(a.x,a.y,a.width,a.height):a,this.updateCrop()):(this._crop=null,this.cropRect=null,this.resetFrame())},b.Sprite.prototype.updateCrop=function(){if(this.cropRect){this._crop=b.Rectangle.clone(this.cropRect,this._crop),this._crop.x+=this._frame.x,this._crop.y+=this._frame.y;var a=Math.max(this._frame.x,this._crop.x),c=Math.max(this._frame.y,this._crop.y),d=Math.min(this._frame.right,this._crop.right)-a,e=Math.min(this._frame.bottom,this._crop.bottom)-c;this.texture.crop.x=a,this.texture.crop.y=c,this.texture.crop.width=d,this.texture.crop.height=e,this.texture.frame.width=Math.min(d,this.cropRect.width),this.texture.frame.height=Math.min(e,this.cropRect.height),this.texture.width=this.texture.frame.width,this.texture.height=this.texture.frame.height,this.game.renderType===b.WEBGL&&PIXI.WebGLRenderer.updateTextureFrame(this.texture)}},b.Sprite.prototype.revive=function(a){return"undefined"==typeof a&&(a=1),this.alive=!0,this.exists=!0,this.visible=!0,this.health=a,this.events&&this.events.onRevived.dispatch(this),this},b.Sprite.prototype.kill=function(){return this.alive=!1,this.exists=!1,this.visible=!1,this.events&&this.events.onKilled.dispatch(this),this},b.Sprite.prototype.destroy=function(a){if(null!==this.game&&1!==this._cache[8]){"undefined"==typeof a&&(a=!0),this._cache[8]=1,this.parent&&(this.parent instanceof b.Group?this.parent.remove(this):this.parent.removeChild(this)),this.input&&this.input.destroy(),this.animations&&this.animations.destroy(),this.body&&this.body.destroy(),this.events&&this.events.destroy();var c=this.children.length;if(a)for(;c--;)this.children[c].destroy(a);else for(;c--;)this.removeChild(this.children[c]);this._crop&&(this._crop=null),this._frame&&(this._frame=null),this.alive=!1,this.exists=!1,this.visible=!1,this.filters=null,this.mask=null,this.game=null,this._cache[8]=0}},b.Sprite.prototype.damage=function(a){return this.alive&&(this.health-=a,this.health<=0&&this.kill()),this},b.Sprite.prototype.reset=function(a,b,c){return"undefined"==typeof c&&(c=1),this.world.setTo(a,b),this.position.x=a,this.position.y=b,this.alive=!0,this.exists=!0,this.visible=!0,this.renderable=!0,this._outOfBoundsFired=!1,this.health=c,this.body&&this.body.reset(a,b,!1,!1),this._cache[4]=1,this},b.Sprite.prototype.bringToTop=function(){return this.parent&&this.parent.bringToTop(this),this},b.Sprite.prototype.play=function(a,b,c,d){return this.animations?this.animations.play(a,b,c,d):void 0},b.Sprite.prototype.overlap=function(a){return b.Rectangle.intersects(this.getBounds(),a.getBounds())},Object.defineProperty(b.Sprite.prototype,"angle",{get:function(){return b.Math.wrapAngle(b.Math.radToDeg(this.rotation))},set:function(a){this.rotation=b.Math.degToRad(b.Math.wrapAngle(a))}}),Object.defineProperty(b.Sprite.prototype,"deltaX",{get:function(){return this.world.x-this._cache[0]}}),Object.defineProperty(b.Sprite.prototype,"deltaY",{get:function(){return this.world.y-this._cache[1]}}),Object.defineProperty(b.Sprite.prototype,"deltaZ",{get:function(){return this.rotation-this._cache[2]}}),Object.defineProperty(b.Sprite.prototype,"inWorld",{get:function(){return this.game.world.bounds.intersects(this.getBounds())}}),Object.defineProperty(b.Sprite.prototype,"inCamera",{get:function(){return this.game.world.camera.screenView.intersects(this.getBounds())}}),Object.defineProperty(b.Sprite.prototype,"frame",{get:function(){return this.animations.frame},set:function(a){this.animations.frame=a}}),Object.defineProperty(b.Sprite.prototype,"frameName",{get:function(){return this.animations.frameName},set:function(a){this.animations.frameName=a}}),Object.defineProperty(b.Sprite.prototype,"renderOrderID",{get:function(){return this._cache[3]}}),Object.defineProperty(b.Sprite.prototype,"inputEnabled",{get:function(){return this.input&&this.input.enabled},set:function(a){a?null===this.input?(this.input=new b.InputHandler(this),this.input.start()):this.input&&!this.input.enabled&&this.input.start():this.input&&this.input.enabled&&this.input.stop()}}),Object.defineProperty(b.Sprite.prototype,"exists",{get:function(){return!!this._cache[6]},set:function(a){a?(this._cache[6]=1,this.body&&this.body.type===b.Physics.P2JS&&this.body.addToWorld(),this.visible=!0):(this._cache[6]=0,this.body&&this.body.type===b.Physics.P2JS&&this.body.removeFromWorld(),this.visible=!1)}}),Object.defineProperty(b.Sprite.prototype,"fixedToCamera",{get:function(){return!!this._cache[7]},set:function(a){a?(this._cache[7]=1,this.cameraOffset.set(this.x,this.y)):this._cache[7]=0}}),Object.defineProperty(b.Sprite.prototype,"smoothed",{get:function(){return!this.texture.baseTexture.scaleMode},set:function(a){a?this.texture&&(this.texture.baseTexture.scaleMode=0):this.texture&&(this.texture.baseTexture.scaleMode=1)}}),Object.defineProperty(b.Sprite.prototype,"x",{get:function(){return this.position.x},set:function(a){this.position.x=a,this.body&&this.body.type===b.Physics.ARCADE&&2===this.body.phase&&(this.body._reset=1)}}),Object.defineProperty(b.Sprite.prototype,"y",{get:function(){return this.position.y},set:function(a){this.position.y=a,this.body&&this.body.type===b.Physics.ARCADE&&2===this.body.phase&&(this.body._reset=1)}}),Object.defineProperty(b.Sprite.prototype,"destroyPhase",{get:function(){return!!this._cache[8]}}),b.Image=function(a,c,d,e,f){c=c||0,d=d||0,e=e||null,f=f||null,this.game=a,this.exists=!0,this.name="",this.type=b.IMAGE,this.z=0,this.events=new b.Events(this),this.key=e,this._frame=0,this._frameName="",PIXI.Sprite.call(this,PIXI.TextureCache.__default),this.loadTexture(e,f),this.position.set(c,d),this.world=new b.Point(c,d),this.autoCull=!1,this.input=null,this.cameraOffset=new b.Point,this._cache=[0,0,0,0,1,0,1,0,0]},b.Image.prototype=Object.create(PIXI.Sprite.prototype),b.Image.prototype.constructor=b.Image,b.Image.prototype.preUpdate=function(){if(this._cache[0]=this.world.x,this._cache[1]=this.world.y,this._cache[2]=this.rotation,!this.exists||!this.parent.exists)return this._cache[3]=-1,!1;this.autoCull&&(this.renderable=this.game.world.camera.screenView.intersects(this.getBounds())),this.world.setTo(this.game.camera.x+this.worldTransform.tx,this.game.camera.y+this.worldTransform.ty),this.visible&&(this._cache[3]=this.game.stage.currentRenderOrderID++);for(var a=0,b=this.children.length;b>a;a++)this.children[a].preUpdate();return!0},b.Image.prototype.update=function(){},b.Image.prototype.postUpdate=function(){this.key instanceof b.BitmapData&&this.key.render(),1===this._cache[7]&&(this.position.x=(this.game.camera.view.x+this.cameraOffset.x)/this.game.camera.scale.x,this.position.y=(this.game.camera.view.y+this.cameraOffset.y)/this.game.camera.scale.y);for(var a=0,c=this.children.length;c>a;a++)this.children[a].postUpdate()},b.Image.prototype.loadTexture=function(a,c){if(c=c||0,a instanceof b.RenderTexture)return this.key=a.key,void this.setTexture(a);if(a instanceof b.BitmapData)return this.key=a,void this.setTexture(a.texture);if(a instanceof PIXI.Texture)return this.key=a,void this.setTexture(a);if(null===a||"undefined"==typeof a)return this.key="__default",void this.setTexture(PIXI.TextureCache[this.key]);if("string"==typeof a&&!this.game.cache.checkImageKey(a))return this.key="__missing",void this.setTexture(PIXI.TextureCache[this.key]);if(this.game.cache.isSpriteSheet(a)){this.key=a;var d=this.game.cache.getFrameData(a);return"string"==typeof c?(this._frame=0,this._frameName=c,void this.setTexture(PIXI.TextureCache[d.getFrameByName(c).uuid])):(this._frame=c,this._frameName="",void this.setTexture(PIXI.TextureCache[d.getFrame(c).uuid]))}return this.key=a,void this.setTexture(PIXI.TextureCache[a])},b.Image.prototype.crop=function(a){if("undefined"==typeof a||null===a)this.texture.hasOwnProperty("sourceWidth")&&this.texture.setFrame(new b.Rectangle(0,0,this.texture.sourceWidth,this.texture.sourceHeight));else if(this.texture instanceof PIXI.Texture){var c={};b.Utils.extend(!0,c,this.texture),c.sourceWidth=c.width,c.sourceHeight=c.height,c.frame=a,c.width=a.width,c.height=a.height,this.texture=c,this.texture.updateFrame=!0,PIXI.Texture.frameUpdates.push(this.texture)}else this.texture.setFrame(a)},b.Image.prototype.revive=function(){return this.alive=!0,this.exists=!0,this.visible=!0,this.events&&this.events.onRevived.dispatch(this),this},b.Image.prototype.kill=function(){return this.alive=!1,this.exists=!1,this.visible=!1,this.events&&this.events.onKilled.dispatch(this),this},b.Image.prototype.destroy=function(a){if(null!==this.game&&!this.destroyPhase){"undefined"==typeof a&&(a=!0),this._cache[8]=1,this.parent&&(this.parent instanceof b.Group?this.parent.remove(this):this.parent.removeChild(this)),this.events&&this.events.destroy(),this.input&&this.input.destroy();var c=this.children.length;if(a)for(;c--;)this.children[c].destroy(a);else for(;c--;)this.removeChild(this.children[c]);this.alive=!1,this.exists=!1,this.visible=!1,this.filters=null,this.mask=null,this.game=null,this._cache[8]=0}},b.Image.prototype.reset=function(a,b){return this.world.setTo(a,b),this.position.x=a,this.position.y=b,this.alive=!0,this.exists=!0,this.visible=!0,this.renderable=!0,this},b.Image.prototype.bringToTop=function(){return this.parent&&this.parent.bringToTop(this),this},Object.defineProperty(b.Image.prototype,"angle",{get:function(){return b.Math.wrapAngle(b.Math.radToDeg(this.rotation))},set:function(a){this.rotation=b.Math.degToRad(b.Math.wrapAngle(a))}}),Object.defineProperty(b.Image.prototype,"deltaX",{get:function(){return this.world.x-this._cache[0]}}),Object.defineProperty(b.Image.prototype,"deltaY",{get:function(){return this.world.y-this._cache[1]}}),Object.defineProperty(b.Image.prototype,"deltaZ",{get:function(){return this.rotation-this._cache[2]}}),Object.defineProperty(b.Image.prototype,"inWorld",{get:function(){return this.game.world.bounds.intersects(this.getBounds())}}),Object.defineProperty(b.Image.prototype,"inCamera",{get:function(){return this.game.world.camera.screenView.intersects(this.getBounds())}}),Object.defineProperty(b.Image.prototype,"frame",{get:function(){return this._frame},set:function(a){if(a!==this.frame&&this.game.cache.isSpriteSheet(this.key)){var b=this.game.cache.getFrameData(this.key);b&&a<b.total&&b.getFrame(a)&&(this.setTexture(PIXI.TextureCache[b.getFrame(a).uuid]),this._frame=a)}}}),Object.defineProperty(b.Image.prototype,"frameName",{get:function(){return this._frameName},set:function(a){if(a!==this.frameName&&this.game.cache.isSpriteSheet(this.key)){var b=this.game.cache.getFrameData(this.key);b&&b.getFrameByName(a)&&(this.setTexture(PIXI.TextureCache[b.getFrameByName(a).uuid]),this._frameName=a)}}}),Object.defineProperty(b.Image.prototype,"renderOrderID",{get:function(){return this._cache[3]}}),Object.defineProperty(b.Image.prototype,"inputEnabled",{get:function(){return this.input&&this.input.enabled},set:function(a){a?null===this.input?(this.input=new b.InputHandler(this),this.input.start()):this.input&&!this.input.enabled&&this.input.start():this.input&&this.input.enabled&&this.input.stop()}}),Object.defineProperty(b.Image.prototype,"fixedToCamera",{get:function(){return!!this._cache[7]},set:function(a){a?(this._cache[7]=1,this.cameraOffset.set(this.x,this.y)):this._cache[7]=0}}),Object.defineProperty(b.Image.prototype,"smoothed",{get:function(){return!this.texture.baseTexture.scaleMode},set:function(a){a?this.texture&&(this.texture.baseTexture.scaleMode=0):this.texture&&(this.texture.baseTexture.scaleMode=1)}}),Object.defineProperty(b.Image.prototype,"destroyPhase",{get:function(){return!!this._cache[8]}}),b.TileSprite=function(a,c,d,e,f,g,h){c=c||0,d=d||0,e=e||256,f=f||256,g=g||null,h=h||null,this.game=a,this.name="",this.type=b.TILESPRITE,this.z=0,this.events=new b.Events(this),this.animations=new b.AnimationManager(this),this.key=g,this._frame=0,this._frameName="",this._scroll=new b.Point,PIXI.TilingSprite.call(this,PIXI.TextureCache.__default,e,f),this.position.set(c,d),this.input=null,this.world=new b.Point(c,d),this.autoCull=!1,this.checkWorldBounds=!1,this.cameraOffset=new b.Point,this.body=null,this._cache=[0,0,0,0,1,0,1,0,0],this.loadTexture(g,h)},b.TileSprite.prototype=Object.create(PIXI.TilingSprite.prototype),b.TileSprite.prototype.constructor=b.TileSprite,b.TileSprite.prototype.preUpdate=function(){if(1===this._cache[4]&&this.exists)return this.world.setTo(this.parent.position.x+this.position.x,this.parent.position.y+this.position.y),this.worldTransform.tx=this.world.x,this.worldTransform.ty=this.world.y,this._cache[0]=this.world.x,this._cache[1]=this.world.y,this._cache[2]=this.rotation,this.body&&this.body.preUpdate(),this._cache[4]=0,!1;if(this._cache[0]=this.world.x,this._cache[1]=this.world.y,this._cache[2]=this.rotation,!this.exists||!this.parent.exists)return this._cache[3]=-1,!1;(this.autoCull||this.checkWorldBounds)&&this._bounds.copyFrom(this.getBounds()),this.autoCull&&(this.renderable=this.game.world.camera.screenView.intersects(this._bounds)),this.checkWorldBounds&&(1===this._cache[5]&&this.game.world.bounds.intersects(this._bounds)?(this._cache[5]=0,this.events.onEnterBounds.dispatch(this)):0!==this._cache[5]||this.game.world.bounds.intersects(this._bounds)||(this._cache[5]=1,this.events.onOutOfBounds.dispatch(this))),this.world.setTo(this.game.camera.x+this.worldTransform.tx,this.game.camera.y+this.worldTransform.ty),this.visible&&(this._cache[3]=this.game.stage.currentRenderOrderID++),this.animations.update(),0!==this._scroll.x&&(this.tilePosition.x+=this._scroll.x*this.game.time.physicsElapsed),0!==this._scroll.y&&(this.tilePosition.y+=this._scroll.y*this.game.time.physicsElapsed),this.body&&this.body.preUpdate();for(var a=0,b=this.children.length;b>a;a++)this.children[a].preUpdate();return!0},b.TileSprite.prototype.update=function(){},b.TileSprite.prototype.postUpdate=function(){this.exists&&this.body&&this.body.postUpdate(),1===this._cache[7]&&(this.position.x=this.game.camera.view.x+this.cameraOffset.x,this.position.y=this.game.camera.view.y+this.cameraOffset.y);for(var a=0,b=this.children.length;b>a;a++)this.children[a].postUpdate()},b.TileSprite.prototype.autoScroll=function(a,b){this._scroll.set(a,b)},b.TileSprite.prototype.stopScroll=function(){this._scroll.set(0,0)},b.TileSprite.prototype.loadTexture=function(a,c){c=c||0,this.key=a,a instanceof b.RenderTexture?(this.key=a.key,this.setTexture(a)):a instanceof b.BitmapData?this.setTexture(a.texture):a instanceof PIXI.Texture?this.setTexture(a):null===a||"undefined"==typeof a?(this.key="__default",this.setTexture(PIXI.TextureCache[this.key])):"string"!=typeof a||this.game.cache.checkImageKey(a)?(this.setTexture(new PIXI.Texture(PIXI.BaseTextureCache[a])),this.animations.loadFrameData(this.game.cache.getFrameData(a),c)):(console.warn("Texture with key '"+a+"' not found."),this.key="__missing",this.setTexture(PIXI.TextureCache[this.key]))},b.TileSprite.prototype.setFrame=function(a){this.texture.frame.x=a.x,this.texture.frame.y=a.y,this.texture.frame.width=a.width,this.texture.frame.height=a.height,this.texture.crop.x=a.x,this.texture.crop.y=a.y,this.texture.crop.width=a.width,this.texture.crop.height=a.height,a.trimmed&&(this.texture.trim?(this.texture.trim.x=a.spriteSourceSizeX,this.texture.trim.y=a.spriteSourceSizeY,this.texture.trim.width=a.sourceSizeW,this.texture.trim.height=a.sourceSizeH):this.texture.trim={x:a.spriteSourceSizeX,y:a.spriteSourceSizeY,width:a.sourceSizeW,height:a.sourceSizeH},this.texture.width=a.sourceSizeW,this.texture.height=a.sourceSizeH,this.texture.frame.width=a.sourceSizeW,this.texture.frame.height=a.sourceSizeH),this.game.renderType===b.WEBGL&&PIXI.WebGLRenderer.updateTextureFrame(this.texture)},b.TileSprite.prototype.destroy=function(a){if(null!==this.game&&!this.destroyPhase){"undefined"==typeof a&&(a=!0),this._cache[8]=1,this.filters&&(this.filters=null),this.parent&&(this.parent instanceof b.Group?this.parent.remove(this):this.parent.removeChild(this)),this.animations.destroy(),this.events.destroy();var c=this.children.length;if(a)for(;c--;)this.children[c].destroy(a);else for(;c--;)this.removeChild(this.children[c]);this.exists=!1,this.visible=!1,this.filters=null,this.mask=null,this.game=null,this._cache[8]=0}},b.TileSprite.prototype.play=function(a,b,c,d){return this.animations.play(a,b,c,d)},b.TileSprite.prototype.reset=function(a,b){return this.world.setTo(a,b),this.position.x=a,this.position.y=b,this.alive=!0,this.exists=!0,this.visible=!0,this.renderable=!0,this._outOfBoundsFired=!1,this.tilePosition.x=0,this.tilePosition.y=0,this.body&&this.body.reset(a,b,!1,!1),this._cache[4]=1,this},Object.defineProperty(b.TileSprite.prototype,"angle",{get:function(){return b.Math.wrapAngle(b.Math.radToDeg(this.rotation))},set:function(a){this.rotation=b.Math.degToRad(b.Math.wrapAngle(a))}}),Object.defineProperty(b.TileSprite.prototype,"frame",{get:function(){return this.animations.frame},set:function(a){a!==this.animations.frame&&(this.animations.frame=a)}}),Object.defineProperty(b.TileSprite.prototype,"frameName",{get:function(){return this.animations.frameName},set:function(a){a!==this.animations.frameName&&(this.animations.frameName=a)
}}),Object.defineProperty(b.TileSprite.prototype,"fixedToCamera",{get:function(){return!!this._cache[7]},set:function(a){a?(this._cache[7]=1,this.cameraOffset.set(this.x,this.y)):this._cache[7]=0}}),Object.defineProperty(b.TileSprite.prototype,"exists",{get:function(){return!!this._cache[6]},set:function(a){a?(this._cache[6]=1,this.body&&this.body.type===b.Physics.P2JS&&this.body.addToWorld(),this.visible=!0):(this._cache[6]=0,this.body&&this.body.type===b.Physics.P2JS&&(this.body.safeRemove=!0),this.visible=!1)}}),Object.defineProperty(b.TileSprite.prototype,"inputEnabled",{get:function(){return this.input&&this.input.enabled},set:function(a){a?null===this.input?(this.input=new b.InputHandler(this),this.input.start()):this.input&&!this.input.enabled&&this.input.start():this.input&&this.input.enabled&&this.input.stop()}}),Object.defineProperty(b.TileSprite.prototype,"x",{get:function(){return this.position.x},set:function(a){this.position.x=a,this.body&&this.body.type===b.Physics.ARCADE&&2===this.body.phase&&(this.body._reset=1)}}),Object.defineProperty(b.TileSprite.prototype,"y",{get:function(){return this.position.y},set:function(a){this.position.y=a,this.body&&this.body.type===b.Physics.ARCADE&&2===this.body.phase&&(this.body._reset=1)}}),Object.defineProperty(b.TileSprite.prototype,"destroyPhase",{get:function(){return!!this._cache[8]}}),b.Text=function(a,c,d,e,f){c=c||0,d=d||0,e=e||" ",f=f||{},e=0===e.length?" ":e.toString(),this.game=a,this.exists=!0,this.name="",this.type=b.TEXT,this.z=0,this.world=new b.Point(c,d),this._text=e,this._font="",this._fontSize=32,this._fontWeight="normal",this._lineSpacing=0,this.events=new b.Events(this),this.input=null,this.cameraOffset=new b.Point,this.setStyle(f),PIXI.Text.call(this,e,this.style),this.position.set(c,d),this._cache=[0,0,0,0,1,0,1,0,0]},b.Text.prototype=Object.create(PIXI.Text.prototype),b.Text.prototype.constructor=b.Text,b.Text.prototype.preUpdate=function(){if(this._cache[0]=this.world.x,this._cache[1]=this.world.y,this._cache[2]=this.rotation,!this.exists||!this.parent.exists)return this.renderOrderID=-1,!1;this.autoCull&&(this.renderable=this.game.world.camera.screenView.intersects(this.getBounds())),this.world.setTo(this.game.camera.x+this.worldTransform.tx,this.game.camera.y+this.worldTransform.ty),this.visible&&(this._cache[3]=this.game.stage.currentRenderOrderID++);for(var a=0,b=this.children.length;b>a;a++)this.children[a].preUpdate();return!0},b.Text.prototype.update=function(){},b.Text.prototype.postUpdate=function(){1===this._cache[7]&&(this.position.x=(this.game.camera.view.x+this.cameraOffset.x)/this.game.camera.scale.x,this.position.y=(this.game.camera.view.y+this.cameraOffset.y)/this.game.camera.scale.y);for(var a=0,b=this.children.length;b>a;a++)this.children[a].postUpdate()},b.Text.prototype.destroy=function(a){if(null!==this.game&&!this.destroyPhase){"undefined"==typeof a&&(a=!0),this._cache[8]=1,this.parent&&(this.parent instanceof b.Group?this.parent.remove(this):this.parent.removeChild(this)),this.texture.destroy(),this.canvas.parentNode?this.canvas.parentNode.removeChild(this.canvas):(this.canvas=null,this.context=null);var c=this.children.length;if(a)for(;c--;)this.children[c].destroy(a);else for(;c--;)this.removeChild(this.children[c]);this.exists=!1,this.visible=!1,this.filters=null,this.mask=null,this.game=null,this._cache[8]=0}},b.Text.prototype.setShadow=function(a,b,c,d){this.style.shadowOffsetX=a||0,this.style.shadowOffsetY=b||0,this.style.shadowColor=c||"rgba(0,0,0,0)",this.style.shadowBlur=d||0,this.dirty=!0},b.Text.prototype.setStyle=function(a){a=a||{},a.font=a.font||"bold 20pt Arial",a.fill=a.fill||"black",a.align=a.align||"left",a.stroke=a.stroke||"black",a.strokeThickness=a.strokeThickness||0,a.wordWrap=a.wordWrap||!1,a.wordWrapWidth=a.wordWrapWidth||100,a.shadowOffsetX=a.shadowOffsetX||0,a.shadowOffsetY=a.shadowOffsetY||0,a.shadowColor=a.shadowColor||"rgba(0,0,0,0)",a.shadowBlur=a.shadowBlur||0,this.style=a,this.dirty=!0},b.Text.prototype.updateText=function(){this.context.font=this.style.font;var a=this.text;this.style.wordWrap&&(a=this.runWordWrap(this.text));for(var b=a.split(/(?:\r\n|\r|\n)/),c=[],d=0,e=0;e<b.length;e++){var f=this.context.measureText(b[e]).width;c[e]=f,d=Math.max(d,f)}this.canvas.width=d+this.style.strokeThickness;var g=this.determineFontHeight("font: "+this.style.font+";")+this.style.strokeThickness+this._lineSpacing+this.style.shadowOffsetY;for(this.canvas.height=g*b.length,navigator.isCocoonJS&&this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.style.fill,this.context.font=this.style.font,this.context.strokeStyle=this.style.stroke,this.context.lineWidth=this.style.strokeThickness,this.context.shadowOffsetX=this.style.shadowOffsetX,this.context.shadowOffsetY=this.style.shadowOffsetY,this.context.shadowColor=this.style.shadowColor,this.context.shadowBlur=this.style.shadowBlur,this.context.textBaseline="top",this.context.lineCap="round",this.context.lineJoin="round",e=0;e<b.length;e++){var h=new PIXI.Point(this.style.strokeThickness/2,this.style.strokeThickness/2+e*g);"right"===this.style.align?h.x+=d-c[e]:"center"===this.style.align&&(h.x+=(d-c[e])/2),h.y+=this._lineSpacing,this.style.stroke&&this.style.strokeThickness&&this.context.strokeText(b[e],h.x,h.y),this.style.fill&&this.context.fillText(b[e],h.x,h.y)}this.updateTexture()},b.Text.prototype.runWordWrap=function(a){for(var b="",c=a.split("\n"),d=0;d<c.length;d++){for(var e=this.style.wordWrapWidth,f=c[d].split(" "),g=0;g<f.length;g++){var h=this.context.measureText(f[g]).width,i=h+this.context.measureText(" ").width;i>e?(g>0&&(b+="\n"),b+=f[g]+" ",e=this.style.wordWrapWidth-h):(e-=i,b+=f[g]+" ")}d<c.length-1&&(b+="\n")}return b},Object.defineProperty(b.Text.prototype,"angle",{get:function(){return b.Math.radToDeg(this.rotation)},set:function(a){this.rotation=b.Math.degToRad(a)}}),Object.defineProperty(b.Text.prototype,"text",{get:function(){return this._text},set:function(a){a!==this._text&&(this._text=a.toString()||" ",this.dirty=!0,this.updateTransform())}}),Object.defineProperty(b.Text.prototype,"font",{get:function(){return this._font},set:function(a){a!==this._font&&(this._font=a.trim(),this.style.font=this._fontWeight+" "+this._fontSize+"px '"+this._font+"'",this.dirty=!0,this.updateTransform())}}),Object.defineProperty(b.Text.prototype,"fontSize",{get:function(){return this._fontSize},set:function(a){a=parseInt(a,10),a!==this._fontSize&&(this._fontSize=a,this.style.font=this._fontWeight+" "+this._fontSize+"px '"+this._font+"'",this.dirty=!0,this.updateTransform())}}),Object.defineProperty(b.Text.prototype,"fontWeight",{get:function(){return this._fontWeight},set:function(a){a!==this._fontWeight&&(this._fontWeight=a,this.style.font=this._fontWeight+" "+this._fontSize+"px '"+this._font+"'",this.dirty=!0,this.updateTransform())}}),Object.defineProperty(b.Text.prototype,"fill",{get:function(){return this.style.fill},set:function(a){a!==this.style.fill&&(this.style.fill=a,this.dirty=!0)}}),Object.defineProperty(b.Text.prototype,"align",{get:function(){return this.style.align},set:function(a){a!==this.style.align&&(this.style.align=a,this.dirty=!0)}}),Object.defineProperty(b.Text.prototype,"stroke",{get:function(){return this.style.stroke},set:function(a){a!==this.style.stroke&&(this.style.stroke=a,this.dirty=!0)}}),Object.defineProperty(b.Text.prototype,"strokeThickness",{get:function(){return this.style.strokeThickness},set:function(a){a!==this.style.strokeThickness&&(this.style.strokeThickness=a,this.dirty=!0)}}),Object.defineProperty(b.Text.prototype,"wordWrap",{get:function(){return this.style.wordWrap},set:function(a){a!==this.style.wordWrap&&(this.style.wordWrap=a,this.dirty=!0)}}),Object.defineProperty(b.Text.prototype,"wordWrapWidth",{get:function(){return this.style.wordWrapWidth},set:function(a){a!==this.style.wordWrapWidth&&(this.style.wordWrapWidth=a,this.dirty=!0)}}),Object.defineProperty(b.Text.prototype,"lineSpacing",{get:function(){return this._lineSpacing},set:function(a){a!==this._lineSpacing&&(this._lineSpacing=parseFloat(a),this.dirty=!0,this.updateTransform())}}),Object.defineProperty(b.Text.prototype,"shadowOffsetX",{get:function(){return this.style.shadowOffsetX},set:function(a){a!==this.style.shadowOffsetX&&(this.style.shadowOffsetX=a,this.dirty=!0)}}),Object.defineProperty(b.Text.prototype,"shadowOffsetY",{get:function(){return this.style.shadowOffsetY},set:function(a){a!==this.style.shadowOffsetY&&(this.style.shadowOffsetY=a,this.dirty=!0)}}),Object.defineProperty(b.Text.prototype,"shadowColor",{get:function(){return this.style.shadowColor},set:function(a){a!==this.style.shadowColor&&(this.style.shadowColor=a,this.dirty=!0)}}),Object.defineProperty(b.Text.prototype,"shadowBlur",{get:function(){return this.style.shadowBlur},set:function(a){a!==this.style.shadowBlur&&(this.style.shadowBlur=a,this.dirty=!0)}}),Object.defineProperty(b.Text.prototype,"inputEnabled",{get:function(){return this.input&&this.input.enabled},set:function(a){a?null===this.input?(this.input=new b.InputHandler(this),this.input.start()):this.input&&!this.input.enabled&&this.input.start():this.input&&this.input.enabled&&this.input.stop()}}),Object.defineProperty(b.Text.prototype,"fixedToCamera",{get:function(){return!!this._cache[7]},set:function(a){a?(this._cache[7]=1,this.cameraOffset.set(this.x,this.y)):this._cache[7]=0}}),Object.defineProperty(b.Text.prototype,"destroyPhase",{get:function(){return!!this._cache[8]}}),b.BitmapText=function(a,c,d,e,f,g){c=c||0,d=d||0,e=e||"",f=f||"",g=g||32,this.game=a,this.exists=!0,this.name="",this.type=b.BITMAPTEXT,this.z=0,this.world=new b.Point(c,d),this._text=f,this._font=e,this._fontSize=g,this._align="left",this._tint=16777215,this.events=new b.Events(this),this.input=null,this.cameraOffset=new b.Point,PIXI.BitmapText.call(this,f),this.position.set(c,d),this._cache=[0,0,0,0,1,0,1,0,0]},b.BitmapText.prototype=Object.create(PIXI.BitmapText.prototype),b.BitmapText.prototype.constructor=b.BitmapText,b.BitmapText.prototype.setStyle=function(){this.style={align:this._align},this.fontName=this._font,this.fontSize=this._fontSize,this.dirty=!0},b.BitmapText.prototype.preUpdate=function(){return this._cache[0]=this.world.x,this._cache[1]=this.world.y,this._cache[2]=this.rotation,this.exists&&this.parent.exists?(this.autoCull&&(this.renderable=this.game.world.camera.screenView.intersects(this.getBounds())),this.world.setTo(this.game.camera.x+this.worldTransform.tx,this.game.camera.y+this.worldTransform.ty),this.visible&&(this._cache[3]=this.game.stage.currentRenderOrderID++),!0):(this.renderOrderID=-1,!1)},b.BitmapText.prototype.update=function(){},b.BitmapText.prototype.postUpdate=function(){1===this._cache[7]&&(this.position.x=(this.game.camera.view.x+this.cameraOffset.x)/this.game.camera.scale.x,this.position.y=(this.game.camera.view.y+this.cameraOffset.y)/this.game.camera.scale.y)},b.BitmapText.prototype.destroy=function(a){if(null!==this.game&&!this.destroyPhase){"undefined"==typeof a&&(a=!0),this._cache[8]=1,this.parent&&(this.parent instanceof b.Group?this.parent.remove(this):this.parent.removeChild(this));var c=this.children.length;if(a)for(;c--;)this.children[c].destroy?this.children[c].destroy(a):this.removeChild(this.children[c]);else for(;c--;)this.removeChild(this.children[c]);this.exists=!1,this.visible=!1,this.filters=null,this.mask=null,this.game=null,this._cache[8]=0}},Object.defineProperty(b.BitmapText.prototype,"align",{get:function(){return this._align},set:function(a){a!==this._align&&(this._align=a,this.setStyle())}}),Object.defineProperty(b.BitmapText.prototype,"tint",{get:function(){return this._tint},set:function(a){a!==this._tint&&(this._tint=a,this.dirty=!0)}}),Object.defineProperty(b.BitmapText.prototype,"angle",{get:function(){return b.Math.radToDeg(this.rotation)},set:function(a){this.rotation=b.Math.degToRad(a)}}),Object.defineProperty(b.BitmapText.prototype,"font",{get:function(){return this._font},set:function(a){a!==this._font&&(this._font=a.trim(),this.style.font=this._fontSize+"px '"+this._font+"'",this.dirty=!0)}}),Object.defineProperty(b.BitmapText.prototype,"fontSize",{get:function(){return this._fontSize},set:function(a){a=parseInt(a,10),a!==this._fontSize&&(this._fontSize=a,this.style.font=this._fontSize+"px '"+this._font+"'",this.dirty=!0)}}),Object.defineProperty(b.BitmapText.prototype,"text",{get:function(){return this._text},set:function(a){a!==this._text&&(this._text=a.toString()||" ",this.dirty=!0)}}),Object.defineProperty(b.BitmapText.prototype,"inputEnabled",{get:function(){return this.input&&this.input.enabled},set:function(a){a?null===this.input?(this.input=new b.InputHandler(this),this.input.start()):this.input&&!this.input.enabled&&this.input.start():this.input&&this.input.enabled&&this.input.stop()}}),Object.defineProperty(b.BitmapText.prototype,"fixedToCamera",{get:function(){return!!this._cache[7]},set:function(a){a?(this._cache[7]=1,this.cameraOffset.set(this.x,this.y)):this._cache[7]=0}}),Object.defineProperty(b.BitmapText.prototype,"destroyPhase",{get:function(){return!!this._cache[8]}}),b.Button=function(a,c,d,e,f,g,h,i,j,k){c=c||0,d=d||0,e=e||null,f=f||null,g=g||this,b.Image.call(this,a,c,d,e,i),this.type=b.BUTTON,this._onOverFrameName=null,this._onOutFrameName=null,this._onDownFrameName=null,this._onUpFrameName=null,this._onOverFrameID=null,this._onOutFrameID=null,this._onDownFrameID=null,this._onUpFrameID=null,this.onOverMouseOnly=!1,this.onOverSound=null,this.onOutSound=null,this.onDownSound=null,this.onUpSound=null,this.onOverSoundMarker="",this.onOutSoundMarker="",this.onDownSoundMarker="",this.onUpSoundMarker="",this.onInputOver=new b.Signal,this.onInputOut=new b.Signal,this.onInputDown=new b.Signal,this.onInputUp=new b.Signal,this.freezeFrames=!1,this.forceOut=!1,this.inputEnabled=!0,this.input.start(0,!0),this.setFrames(h,i,j,k),null!==f&&this.onInputUp.add(f,g),this.events.onInputOver.add(this.onInputOverHandler,this),this.events.onInputOut.add(this.onInputOutHandler,this),this.events.onInputDown.add(this.onInputDownHandler,this),this.events.onInputUp.add(this.onInputUpHandler,this)},b.Button.prototype=Object.create(b.Image.prototype),b.Button.prototype.constructor=b.Button,b.Button.prototype.clearFrames=function(){this._onOverFrameName=null,this._onOverFrameID=null,this._onOutFrameName=null,this._onOutFrameID=null,this._onDownFrameName=null,this._onDownFrameID=null,this._onUpFrameName=null,this._onUpFrameID=null},b.Button.prototype.setFrames=function(a,b,c,d){this.clearFrames(),null!==a&&("string"==typeof a?(this._onOverFrameName=a,this.input.pointerOver()&&(this.frameName=a)):(this._onOverFrameID=a,this.input.pointerOver()&&(this.frame=a))),null!==b&&("string"==typeof b?(this._onOutFrameName=b,this.input.pointerOver()===!1&&(this.frameName=b)):(this._onOutFrameID=b,this.input.pointerOver()===!1&&(this.frame=b))),null!==c&&("string"==typeof c?(this._onDownFrameName=c,this.input.pointerDown()&&(this.frameName=c)):(this._onDownFrameID=c,this.input.pointerDown()&&(this.frame=c))),null!==d&&("string"==typeof d?(this._onUpFrameName=d,this.input.pointerUp()&&(this.frameName=d)):(this._onUpFrameID=d,this.input.pointerUp()&&(this.frame=d)))},b.Button.prototype.setSounds=function(a,b,c,d,e,f,g,h){this.setOverSound(a,b),this.setOutSound(e,f),this.setDownSound(c,d),this.setUpSound(g,h)},b.Button.prototype.setOverSound=function(a,c){this.onOverSound=null,this.onOverSoundMarker="",a instanceof b.Sound&&(this.onOverSound=a),"string"==typeof c&&(this.onOverSoundMarker=c)},b.Button.prototype.setOutSound=function(a,c){this.onOutSound=null,this.onOutSoundMarker="",a instanceof b.Sound&&(this.onOutSound=a),"string"==typeof c&&(this.onOutSoundMarker=c)},b.Button.prototype.setDownSound=function(a,c){this.onDownSound=null,this.onDownSoundMarker="",a instanceof b.Sound&&(this.onDownSound=a),"string"==typeof c&&(this.onDownSoundMarker=c)},b.Button.prototype.setUpSound=function(a,c){this.onUpSound=null,this.onUpSoundMarker="",a instanceof b.Sound&&(this.onUpSound=a),"string"==typeof c&&(this.onUpSoundMarker=c)},b.Button.prototype.onInputOverHandler=function(a,b){this.freezeFrames===!1&&this.setState(1),(!this.onOverMouseOnly||b.isMouse)&&(this.onOverSound&&this.onOverSound.play(this.onOverSoundMarker),this.onInputOver&&this.onInputOver.dispatch(this,b))},b.Button.prototype.onInputOutHandler=function(a,b){this.freezeFrames===!1&&this.setState(2),this.onOutSound&&this.onOutSound.play(this.onOutSoundMarker),this.onInputOut&&this.onInputOut.dispatch(this,b)},b.Button.prototype.onInputDownHandler=function(a,b){this.freezeFrames===!1&&this.setState(3),this.onDownSound&&this.onDownSound.play(this.onDownSoundMarker),this.onInputDown&&this.onInputDown.dispatch(this,b)},b.Button.prototype.onInputUpHandler=function(a,b,c){this.onUpSound&&this.onUpSound.play(this.onUpSoundMarker),this.onInputUp&&this.onInputUp.dispatch(this,b,c),this.freezeFrames||this.setState(this.forceOut?2:null!==this._onUpFrameName||null!==this._onUpFrameID?4:c?1:2)},b.Button.prototype.setState=function(a){1===a?null!=this._onOverFrameName?this.frameName=this._onOverFrameName:null!=this._onOverFrameID&&(this.frame=this._onOverFrameID):2===a?null!=this._onOutFrameName?this.frameName=this._onOutFrameName:null!=this._onOutFrameID&&(this.frame=this._onOutFrameID):3===a?null!=this._onDownFrameName?this.frameName=this._onDownFrameName:null!=this._onDownFrameID&&(this.frame=this._onDownFrameID):4===a&&(null!=this._onUpFrameName?this.frameName=this._onUpFrameName:null!=this._onUpFrameID&&(this.frame=this._onUpFrameID))},b.Graphics=function(a,c,d){c=c||0,d=d||0,this.game=a,this.exists=!0,this.name="",this.type=b.GRAPHICS,this.z=0,this.world=new b.Point(c,d),this.cameraOffset=new b.Point,PIXI.Graphics.call(this),this.position.set(c,d),this._cache=[0,0,0,0,1,0,1,0,0]},b.Graphics.prototype=Object.create(PIXI.Graphics.prototype),b.Graphics.prototype.constructor=b.Graphics,b.Graphics.prototype.preUpdate=function(){return this._cache[0]=this.world.x,this._cache[1]=this.world.y,this._cache[2]=this.rotation,this.exists&&this.parent.exists?(this.autoCull&&(this.renderable=this.game.world.camera.screenView.intersects(this.getBounds())),this.world.setTo(this.game.camera.x+this.worldTransform.tx,this.game.camera.y+this.worldTransform.ty),this.visible&&(this._cache[3]=this.game.stage.currentRenderOrderID++),!0):(this.renderOrderID=-1,!1)},b.Graphics.prototype.update=function(){},b.Graphics.prototype.postUpdate=function(){1===this._cache[7]&&(this.position.x=(this.game.camera.view.x+this.cameraOffset.x)/this.game.camera.scale.x,this.position.y=(this.game.camera.view.y+this.cameraOffset.y)/this.game.camera.scale.y)},b.Graphics.prototype.destroy=function(a){if(null!==this.game&&!this.destroyPhase){"undefined"==typeof a&&(a=!0),this._cache[8]=1,this.clear(),this.parent&&(this.parent instanceof b.Group?this.parent.remove(this):this.parent.removeChild(this));var c=this.children.length;if(a)for(;c--;)this.children[c].destroy(a);else for(;c--;)this.removeChild(this.children[c]);this.exists=!1,this.visible=!1,this.game=null,this._cache[8]=0}},b.Graphics.prototype.drawPolygon=function(a){this.moveTo(a.points[0].x,a.points[0].y);for(var b=1;b<a.points.length;b+=1)this.lineTo(a.points[b].x,a.points[b].y);this.lineTo(a.points[0].x,a.points[0].y)},b.Graphics.prototype.drawTriangle=function(a,c){"undefined"==typeof c&&(c=!1);var d=new b.Polygon(a);if(c){var e=new b.Point(this.game.camera.x-a[0].x,this.game.camera.y-a[0].y),f=new b.Point(a[1].x-a[0].x,a[1].y-a[0].y),g=new b.Point(a[1].x-a[2].x,a[1].y-a[2].y),h=g.cross(f);e.dot(h)>0&&this.drawPolygon(d)}else this.drawPolygon(d)},b.Graphics.prototype.drawTriangles=function(a,c,d){"undefined"==typeof d&&(d=!1);var e,f=new b.Point,g=new b.Point,h=new b.Point,i=[];if(c)if(a[0]instanceof b.Point)for(e=0;e<c.length/3;e++)i.push(a[c[3*e]]),i.push(a[c[3*e+1]]),i.push(a[c[3*e+2]]),3===i.length&&(this.drawTriangle(i,d),i=[]);else for(e=0;e<c.length;e++)f.x=a[2*c[e]],f.y=a[2*c[e]+1],i.push(f.copyTo({})),3===i.length&&(this.drawTriangle(i,d),i=[]);else if(a[0]instanceof b.Point)for(e=0;e<a.length/3;e++)this.drawTriangle([a[3*e],a[3*e+1],a[3*e+2]],d);else for(e=0;e<a.length/6;e++)f.x=a[6*e+0],f.y=a[6*e+1],g.x=a[6*e+2],g.y=a[6*e+3],h.x=a[6*e+4],h.y=a[6*e+5],this.drawTriangle([f,g,h],d)},Object.defineProperty(b.Graphics.prototype,"angle",{get:function(){return b.Math.radToDeg(this.rotation)},set:function(a){this.rotation=b.Math.degToRad(a)}}),Object.defineProperty(b.Graphics.prototype,"fixedToCamera",{get:function(){return!!this._cache[7]},set:function(a){a?(this._cache[7]=1,this.cameraOffset.set(this.x,this.y)):this._cache[7]=0}}),Object.defineProperty(b.Graphics.prototype,"destroyPhase",{get:function(){return!!this._cache[8]}}),b.RenderTexture=function(a,c,d,e,f){"undefined"==typeof e&&(e=""),"undefined"==typeof f&&(f=b.scaleModes.DEFAULT),this.game=a,this.key=e,this.type=b.RENDERTEXTURE,this._temp=new b.Point,PIXI.RenderTexture.call(this,c,d,this.game.renderer,f)},b.RenderTexture.prototype=Object.create(PIXI.RenderTexture.prototype),b.RenderTexture.prototype.constructor=b.RenderTexture,b.RenderTexture.prototype.renderXY=function(a,b,c,d){this._temp.set(b,c),this.render(a,this._temp,d)},b.SpriteBatch=function(a,c,d,e){("undefined"==typeof c||null===c)&&(c=a.world),PIXI.SpriteBatch.call(this),b.Group.call(this,a,c,d,e),this.type=b.SPRITEBATCH},b.SpriteBatch.prototype=b.Utils.extend(!0,b.SpriteBatch.prototype,b.Group.prototype,PIXI.SpriteBatch.prototype),b.SpriteBatch.prototype.constructor=b.SpriteBatch,b.RetroFont=function(a,c,d,e,f,g,h,i,j,k){if(!a.cache.checkImageKey(c))return!1;("undefined"==typeof g||null===g)&&(g=a.cache.getImage(c).width/d),this.characterWidth=d,this.characterHeight=e,this.characterSpacingX=h||0,this.characterSpacingY=i||0,this.characterPerRow=g,this.offsetX=j||0,this.offsetY=k||0,this.align="left",this.multiLine=!1,this.autoUpperCase=!0,this.customSpacingX=0,this.customSpacingY=0,this.fixedWidth=0,this.fontSet=a.cache.getImage(c),this._text="",this.grabData=[];for(var l=this.offsetX,m=this.offsetY,n=0,o=new b.FrameData,p=0;p<f.length;p++){var q=a.rnd.uuid(),r=o.addFrame(new b.Frame(p,l,m,this.characterWidth,this.characterHeight,"",q));this.grabData[f.charCodeAt(p)]=r.index,PIXI.TextureCache[q]=new PIXI.Texture(PIXI.BaseTextureCache[c],{x:l,y:m,width:this.characterWidth,height:this.characterHeight}),n++,n==this.characterPerRow?(n=0,l=this.offsetX,m+=this.characterHeight+this.characterSpacingY):l+=this.characterWidth+this.characterSpacingX}a.cache.updateFrameData(c,o),this.stamp=new b.Image(a,0,0,c,0),b.RenderTexture.call(this,a,100,100,"",b.scaleModes.NEAREST),this.type=b.RETROFONT},b.RetroFont.prototype=Object.create(b.RenderTexture.prototype),b.RetroFont.prototype.constructor=b.RetroFont,b.RetroFont.ALIGN_LEFT="left",b.RetroFont.ALIGN_RIGHT="right",b.RetroFont.ALIGN_CENTER="center",b.RetroFont.TEXT_SET1=" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",b.RetroFont.TEXT_SET2=" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ",b.RetroFont.TEXT_SET3="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ",b.RetroFont.TEXT_SET4="ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789",b.RetroFont.TEXT_SET5="ABCDEFGHIJKLMNOPQRSTUVWXYZ.,/() '!?-*:0123456789",b.RetroFont.TEXT_SET6="ABCDEFGHIJKLMNOPQRSTUVWXYZ!?:;0123456789\"(),-.' ",b.RetroFont.TEXT_SET7="AGMSY+:4BHNTZ!;5CIOU.?06DJPV,(17EKQW\")28FLRX-'39",b.RetroFont.TEXT_SET8="0123456789 .ABCDEFGHIJKLMNOPQRSTUVWXYZ",b.RetroFont.TEXT_SET9="ABCDEFGHIJKLMNOPQRSTUVWXYZ()-0123456789.:,'\"?!",b.RetroFont.TEXT_SET10="ABCDEFGHIJKLMNOPQRSTUVWXYZ",b.RetroFont.TEXT_SET11="ABCDEFGHIJKLMNOPQRSTUVWXYZ.,\"-+!?()':;0123456789",b.RetroFont.prototype.setFixedWidth=function(a,b){"undefined"==typeof b&&(b="left"),this.fixedWidth=a,this.align=b},b.RetroFont.prototype.setText=function(a,b,c,d,e,f){this.multiLine=b||!1,this.customSpacingX=c||0,this.customSpacingY=d||0,this.align=e||"left",this.autoUpperCase=f?!1:!0,a.length>0&&(this.text=a)},b.RetroFont.prototype.buildRetroFontText=function(){var a=0,c=0;if(this.clear(),this.multiLine){var d=this._text.split("\n");this.fixedWidth>0?this.resize(this.fixedWidth,d.length*(this.characterHeight+this.customSpacingY)-this.customSpacingY,!0):this.resize(this.getLongestLine()*(this.characterWidth+this.customSpacingX),d.length*(this.characterHeight+this.customSpacingY)-this.customSpacingY,!0);for(var e=0;e<d.length;e++){switch(this.align){case b.RetroFont.ALIGN_LEFT:a=0;break;case b.RetroFont.ALIGN_RIGHT:a=this.width-d[e].length*(this.characterWidth+this.customSpacingX);break;case b.RetroFont.ALIGN_CENTER:a=this.width/2-d[e].length*(this.characterWidth+this.customSpacingX)/2,a+=this.customSpacingX/2}0>a&&(a=0),this.pasteLine(d[e],a,c,this.customSpacingX),c+=this.characterHeight+this.customSpacingY}}else{switch(this.fixedWidth>0?this.resize(this.fixedWidth,this.characterHeight,!0):this.resize(this._text.length*(this.characterWidth+this.customSpacingX),this.characterHeight,!0),this.align){case b.RetroFont.ALIGN_LEFT:a=0;break;case b.RetroFont.ALIGN_RIGHT:a=this.width-this._text.length*(this.characterWidth+this.customSpacingX);break;case b.RetroFont.ALIGN_CENTER:a=this.width/2-this._text.length*(this.characterWidth+this.customSpacingX)/2,a+=this.customSpacingX/2}this.textureBuffer.clear(),this.pasteLine(this._text,a,0,this.customSpacingX)}},b.RetroFont.prototype.pasteLine=function(a,c,d,e){for(var f=new b.Point,g=0;g<a.length;g++)if(" "==a.charAt(g))c+=this.characterWidth+e;else if(this.grabData[a.charCodeAt(g)]>=0&&(this.stamp.frame=this.grabData[a.charCodeAt(g)],f.set(c,d),this.render(this.stamp,f,!1),c+=this.characterWidth+e,c>this.width))break},b.RetroFont.prototype.getLongestLine=function(){var a=0;if(this._text.length>0)for(var b=this._text.split("\n"),c=0;c<b.length;c++)b[c].length>a&&(a=b[c].length);return a},b.RetroFont.prototype.removeUnsupportedCharacters=function(a){for(var b="",c=0;c<this._text.length;c++){var d=this._text[c],e=d.charCodeAt(0);(this.grabData[e]>=0||!a&&"\n"===d)&&(b=b.concat(d))}return b},b.RetroFont.prototype.updateOffset=function(a,b){if(this.offsetX!==a||this.offsetY!==b){for(var c=a-this.offsetX,d=b-this.offsetY,e=this.game.cache.getFrameData(this.stamp.key).getFrames(),f=e.length;f--;)e[f].x+=c,e[f].y+=d,PIXI.TextureCache[e[f].uuid].frame.x=e[f].x,PIXI.TextureCache[e[f].uuid].frame.y=e[f].y;this.buildRetroFontText()}},Object.defineProperty(b.RetroFont.prototype,"text",{get:function(){return this._text},set:function(a){var b;b=this.autoUpperCase?a.toUpperCase():a,b!==this._text&&(this._text=b,this.removeUnsupportedCharacters(this.multiLine),this.buildRetroFontText())}}),Object.defineProperty(b.RetroFont.prototype,"smoothed",{get:function(){return this.stamp.smoothed},set:function(a){this.stamp.smoothed=a,this.buildRetroFontText()}}),b.Particle=function(a,c,d,e,f){b.Sprite.call(this,a,c,d,e,f),this.autoScale=!1,this.scaleData=null,this._s=0,this.autoAlpha=!1,this.alphaData=null,this._a=0},b.Particle.prototype=Object.create(b.Sprite.prototype),b.Particle.prototype.constructor=b.Particle,b.Particle.prototype.update=function(){this.autoScale&&(this._s--,this._s?this.scale.set(this.scaleData[this._s].x,this.scaleData[this._s].y):this.autoScale=!1),this.autoAlpha&&(this._a--,this._a?this.alpha=this.alphaData[this._a].v:this.autoAlpha=!1)},b.Particle.prototype.onEmit=function(){},b.Particle.prototype.setAlphaData=function(a){this.alphaData=a,this._a=a.length-1,this.alpha=this.alphaData[this._a].v,this.autoAlpha=!0},b.Particle.prototype.setScaleData=function(a){this.scaleData=a,this._s=a.length-1,this.scale.set(this.scaleData[this._s].x,this.scaleData[this._s].y),this.autoScale=!0},b.Particle.prototype.reset=function(a,b,c){return"undefined"==typeof c&&(c=1),this.world.setTo(a,b),this.position.x=a,this.position.y=b,this.alive=!0,this.exists=!0,this.visible=!0,this.renderable=!0,this._outOfBoundsFired=!1,this.health=c,this.body&&this.body.reset(a,b,!1,!1),this._cache[4]=1,this.alpha=1,this.scale.set(1),this.autoScale=!1,this.autoAlpha=!1,this},b.Canvas={create:function(a,b,c,d){"undefined"==typeof d&&(d=!1),a=a||256,b=b||256;var e=document.createElement("canvas");return"string"==typeof c&&""!==c&&(e.id=c),e.width=a,e.height=b,e.style.display="block",e},getOffset:function(a,c){c=c||new b.Point;var d=a.getBoundingClientRect(),e=a.clientTop||document.body.clientTop||0,f=a.clientLeft||document.body.clientLeft||0,g=0,h=0;return"CSS1Compat"===document.compatMode?(g=window.pageYOffset||document.documentElement.scrollTop||a.scrollTop||0,h=window.pageXOffset||document.documentElement.scrollLeft||a.scrollLeft||0):(g=window.pageYOffset||document.body.scrollTop||a.scrollTop||0,h=window.pageXOffset||document.body.scrollLeft||a.scrollLeft||0),c.x=d.left+h-f,c.y=d.top+g-e,c},getAspectRatio:function(a){return a.width/a.height},setBackgroundColor:function(a,b){return b=b||"rgb(0,0,0)",a.style.backgroundColor=b,a},setTouchAction:function(a,b){return b=b||"none",a.style.msTouchAction=b,a.style["ms-touch-action"]=b,a.style["touch-action"]=b,a},setUserSelect:function(a,b){return b=b||"none",a.style["-webkit-touch-callout"]=b,a.style["-webkit-user-select"]=b,a.style["-khtml-user-select"]=b,a.style["-moz-user-select"]=b,a.style["-ms-user-select"]=b,a.style["user-select"]=b,a.style["-webkit-tap-highlight-color"]="rgba(0, 0, 0, 0)",a},addToDOM:function(a,b,c){var d;return"undefined"==typeof c&&(c=!0),b&&("string"==typeof b?d=document.getElementById(b):"object"==typeof b&&1===b.nodeType&&(d=b)),d||(d=document.body),c&&d.style&&(d.style.overflow="hidden"),d.appendChild(a),a},setTransform:function(a,b,c,d,e,f,g){return a.setTransform(d,f,g,e,b,c),a},setSmoothingEnabled:function(a,b){return a.imageSmoothingEnabled=b,a.mozImageSmoothingEnabled=b,a.oImageSmoothingEnabled=b,a.webkitImageSmoothingEnabled=b,a.msImageSmoothingEnabled=b,a},setImageRenderingCrisp:function(a){return a.style["image-rendering"]="optimizeSpeed",a.style["image-rendering"]="crisp-edges",a.style["image-rendering"]="-moz-crisp-edges",a.style["image-rendering"]="-webkit-optimize-contrast",a.style["image-rendering"]="optimize-contrast",a.style.msInterpolationMode="nearest-neighbor",a},setImageRenderingBicubic:function(a){return a.style["image-rendering"]="auto",a.style.msInterpolationMode="bicubic",a}},b.Device=function(a){this.game=a,this.desktop=!1,this.iOS=!1,this.cocoonJS=!1,this.ejecta=!1,this.crosswalk=!1,this.android=!1,this.chromeOS=!1,this.linux=!1,this.macOS=!1,this.windows=!1,this.windowsPhone=!1,this.canvas=!1,this.file=!1,this.fileSystem=!1,this.localStorage=!1,this.webGL=!1,this.worker=!1,this.touch=!1,this.mspointer=!1,this.css3D=!1,this.pointerLock=!1,this.typedArray=!1,this.vibration=!1,this.getUserMedia=!1,this.quirksMode=!1,this.arora=!1,this.chrome=!1,this.epiphany=!1,this.firefox=!1,this.ie=!1,this.ieVersion=0,this.trident=!1,this.tridentVersion=0,this.mobileSafari=!1,this.midori=!1,this.opera=!1,this.safari=!1,this.webApp=!1,this.silk=!1,this.audioData=!1,this.webAudio=!1,this.ogg=!1,this.opus=!1,this.mp3=!1,this.wav=!1,this.m4a=!1,this.webm=!1,this.iPhone=!1,this.iPhone4=!1,this.iPad=!1,this.pixelRatio=0,this.littleEndian=!1,this.support32bit=!1,this.fullscreen=!1,this.requestFullscreen="",this.cancelFullscreen="",this.fullscreenKeyboard=!1,this._checkOS(),this._checkAudio(),this._checkBrowser(),this._checkCSS3D(),this._checkDevice(),this._checkFeatures()},b.Device.LITTLE_ENDIAN=!1,b.Device.prototype={_checkOS:function(){var a=navigator.userAgent;/Android/.test(a)?this.android=!0:/CrOS/.test(a)?this.chromeOS=!0:/iP[ao]d|iPhone/i.test(a)?this.iOS=!0:/Linux/.test(a)?this.linux=!0:/Mac OS/.test(a)?this.macOS=!0:/Windows/.test(a)&&(this.windows=!0,/Windows Phone/i.test(a)&&(this.windowsPhone=!0)),(this.windows||this.macOS||this.linux&&this.silk===!1)&&(this.desktop=!0),(this.windowsPhone||/Windows NT/i.test(a)&&/Touch/i.test(a))&&(this.desktop=!1)},_checkFeatures:function(){this.canvas=!!window.CanvasRenderingContext2D||this.cocoonJS;try{this.localStorage=!!localStorage.getItem
}catch(a){this.localStorage=!1}this.file=!!(window.File&&window.FileReader&&window.FileList&&window.Blob),this.fileSystem=!!window.requestFileSystem,this.webGL=function(){try{var a=document.createElement("canvas");return!!window.WebGLRenderingContext&&(a.getContext("webgl")||a.getContext("experimental-webgl"))}catch(b){return!1}}(),this.webGL=null===this.webGL||this.webGL===!1?!1:!0,this.worker=!!window.Worker,("ontouchstart"in document.documentElement||window.navigator.maxTouchPoints&&window.navigator.maxTouchPoints>1)&&(this.touch=!0),(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&(this.mspointer=!0),this.pointerLock="pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document,this.quirksMode="CSS1Compat"===document.compatMode?!1:!0,this.getUserMedia=!!(navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia)},checkFullScreenSupport:function(){for(var a=["requestFullscreen","requestFullScreen","webkitRequestFullscreen","webkitRequestFullScreen","msRequestFullscreen","msRequestFullScreen","mozRequestFullScreen","mozRequestFullscreen"],b=0;b<a.length;b++)if(this.game.canvas[a[b]]){this.fullscreen=!0,this.requestFullscreen=a[b];break}var c=["cancelFullScreen","exitFullscreen","webkitCancelFullScreen","webkitExitFullscreen","msCancelFullScreen","msExitFullscreen","mozCancelFullScreen","mozExitFullscreen"];if(this.fullscreen)for(var b=0;b<c.length;b++)if(document[c[b]]){this.cancelFullscreen=c[b];break}window.Element&&Element.ALLOW_KEYBOARD_INPUT&&(this.fullscreenKeyboard=!0)},_checkBrowser:function(){var a=navigator.userAgent;/Arora/.test(a)?this.arora=!0:/Chrome/.test(a)?this.chrome=!0:/Epiphany/.test(a)?this.epiphany=!0:/Firefox/.test(a)?this.firefox=!0:/AppleWebKit/.test(a)&&this.iOS?this.mobileSafari=!0:/MSIE (\d+\.\d+);/.test(a)?(this.ie=!0,this.ieVersion=parseInt(RegExp.$1,10)):/Midori/.test(a)?this.midori=!0:/Opera/.test(a)?this.opera=!0:/Safari/.test(a)?this.safari=!0:/Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(a)&&(this.ie=!0,this.trident=!0,this.tridentVersion=parseInt(RegExp.$1,10),this.ieVersion=parseInt(RegExp.$3,10)),/Silk/.test(a)&&(this.silk=!0),navigator.standalone&&(this.webApp=!0),navigator.isCocoonJS&&(this.cocoonJS=!0),"undefined"!=typeof window.ejecta&&(this.ejecta=!0),/Crosswalk/.test(a)&&(this.crosswalk=!0)},_checkAudio:function(){this.audioData=!!window.Audio,this.webAudio=!(!window.webkitAudioContext&&!window.AudioContext);var a=document.createElement("audio"),b=!1;try{(b=!!a.canPlayType)&&(a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"")&&(this.ogg=!0),a.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,"")&&(this.opus=!0),a.canPlayType("audio/mpeg;").replace(/^no$/,"")&&(this.mp3=!0),a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"")&&(this.wav=!0),(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;").replace(/^no$/,""))&&(this.m4a=!0),a.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")&&(this.webm=!0))}catch(c){}},_checkDevice:function(){this.pixelRatio=window.devicePixelRatio||1,this.iPhone=-1!=navigator.userAgent.toLowerCase().indexOf("iphone"),this.iPhone4=2==this.pixelRatio&&this.iPhone,this.iPad=-1!=navigator.userAgent.toLowerCase().indexOf("ipad"),this.typedArray="undefined"!=typeof Int8Array?!0:!1,"undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint32Array&&(this.littleEndian=this._checkIsLittleEndian(),b.Device.LITTLE_ENDIAN=this.littleEndian),this.support32bit="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof Int32Array&&null!==this.littleEndian&&this._checkIsUint8ClampedImageData(),navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate&&(this.vibration=!0)},_checkIsLittleEndian:function(){var a=new ArrayBuffer(4),b=new Uint8Array(a),c=new Uint32Array(a);return b[0]=161,b[1]=178,b[2]=195,b[3]=212,3569595041==c[0]?!0:2712847316==c[0]?!1:null},_checkIsUint8ClampedImageData:function(){if("undefined"==typeof Uint8ClampedArray)return!1;var a=document.createElement("canvas"),b=a.getContext("2d");if(!b)return!1;var c=b.createImageData(1,1);return c.data instanceof Uint8ClampedArray},_checkCSS3D:function(){var a,b=document.createElement("p"),c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(b,null);for(var d in c)void 0!==b.style[d]&&(b.style[d]="translate3d(1px,1px,1px)",a=window.getComputedStyle(b).getPropertyValue(c[d]));document.body.removeChild(b),this.css3D=void 0!==a&&a.length>0&&"none"!==a},canPlayAudio:function(a){return"mp3"==a&&this.mp3?!0:"ogg"==a&&(this.ogg||this.opus)?!0:"m4a"==a&&this.m4a?!0:"wav"==a&&this.wav?!0:"webm"==a&&this.webm?!0:!1},isConsoleOpen:function(){return window.console&&window.console.firebug?!0:window.console&&(console.profile(),console.profileEnd(),console.clear&&console.clear(),console.profiles)?console.profiles.length>0:!1}},b.Device.prototype.constructor=b.Device,b.RequestAnimationFrame=function(a,b){"undefined"==typeof b&&(b=!1),this.game=a,this.isRunning=!1,this.forceSetTimeOut=b;for(var c=["ms","moz","webkit","o"],d=0;d<c.length&&!window.requestAnimationFrame;d++)window.requestAnimationFrame=window[c[d]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[d]+"CancelAnimationFrame"];this._isSetTimeOut=!1,this._onLoop=null,this._timeOutID=null},b.RequestAnimationFrame.prototype={start:function(){this.isRunning=!0;var a=this;!window.requestAnimationFrame||this.forceSetTimeOut?(this._isSetTimeOut=!0,this._onLoop=function(){return a.updateSetTimeout()},this._timeOutID=window.setTimeout(this._onLoop,0)):(this._isSetTimeOut=!1,this._onLoop=function(b){return a.updateRAF(b)},this._timeOutID=window.requestAnimationFrame(this._onLoop))},updateRAF:function(){this.game.update(Date.now()),this._timeOutID=window.requestAnimationFrame(this._onLoop)},updateSetTimeout:function(){this.game.update(Date.now()),this._timeOutID=window.setTimeout(this._onLoop,this.game.time.timeToCall)},stop:function(){this._isSetTimeOut?clearTimeout(this._timeOutID):window.cancelAnimationFrame(this._timeOutID),this.isRunning=!1},isSetTimeOut:function(){return this._isSetTimeOut},isRAF:function(){return this._isSetTimeOut===!1}},b.RequestAnimationFrame.prototype.constructor=b.RequestAnimationFrame,b.Math={PI2:2*Math.PI,fuzzyEqual:function(a,b,c){return"undefined"==typeof c&&(c=1e-4),Math.abs(a-b)<c},fuzzyLessThan:function(a,b,c){return"undefined"==typeof c&&(c=1e-4),b+c>a},fuzzyGreaterThan:function(a,b,c){return"undefined"==typeof c&&(c=1e-4),a>b-c},fuzzyCeil:function(a,b){return"undefined"==typeof b&&(b=1e-4),Math.ceil(a-b)},fuzzyFloor:function(a,b){return"undefined"==typeof b&&(b=1e-4),Math.floor(a+b)},average:function(){for(var a=[],b=0;b<arguments.length-0;b++)a[b]=arguments[b+0];for(var c=0,d=0;d<a.length;d++)c+=a[d];return c/a.length},truncate:function(a){return a>0?Math.floor(a):Math.ceil(a)},shear:function(a){return a%1},snapTo:function(a,b,c){return"undefined"==typeof c&&(c=0),0===b?a:(a-=c,a=b*Math.round(a/b),c+a)},snapToFloor:function(a,b,c){return"undefined"==typeof c&&(c=0),0===b?a:(a-=c,a=b*Math.floor(a/b),c+a)},snapToCeil:function(a,b,c){return"undefined"==typeof c&&(c=0),0===b?a:(a-=c,a=b*Math.ceil(a/b),c+a)},snapToInArray:function(a,b,c){if("undefined"==typeof c&&(c=!0),c&&b.sort(),a<b[0])return b[0];for(var d=1;b[d]<a;)d++;var e=b[d-1],f=d<b.length?b[d]:Number.POSITIVE_INFINITY;return a-e>=f-a?f:e},roundTo:function(a,b,c){"undefined"==typeof b&&(b=0),"undefined"==typeof c&&(c=10);var d=Math.pow(c,-b);return Math.round(a*d)/d},floorTo:function(a,b,c){"undefined"==typeof b&&(b=0),"undefined"==typeof c&&(c=10);var d=Math.pow(c,-b);return Math.floor(a*d)/d},ceilTo:function(a,b,c){"undefined"==typeof b&&(b=0),"undefined"==typeof c&&(c=10);var d=Math.pow(c,-b);return Math.ceil(a*d)/d},interpolateFloat:function(a,b,c){return(b-a)*c+a},angleBetween:function(a,b,c,d){return Math.atan2(d-b,c-a)},angleBetweenPoints:function(a,b){return Math.atan2(b.y-a.y,b.x-a.x)},reverseAngle:function(a){return this.normalizeAngle(a+Math.PI,!0)},normalizeAngle:function(a){return a%=2*Math.PI,a>=0?a:a+2*Math.PI},normalizeLatitude:function(a){return Math.max(-90,Math.min(90,a))},normalizeLongitude:function(a){return a%360==180?180:(a%=360,-180>a?a+360:a>180?a-360:a)},chanceRoll:function(a){return"undefined"==typeof a&&(a=50),0>=a?!1:a>=100?!0:100*Math.random()>=a?!1:!0},numberArray:function(a,b){for(var c=[],d=a;b>=d;d++)c.push(d);return c},maxAdd:function(a,b,c){return a+=b,a>c&&(a=c),a},minSub:function(a,b,c){return a-=b,c>a&&(a=c),a},wrap:function(a,b,c){var d=c-b;if(0>=d)return 0;var e=(a-b)%d;return 0>e&&(e+=d),e+b},wrapValue:function(a,b,c){var d;return a=Math.abs(a),b=Math.abs(b),c=Math.abs(c),d=(a+b)%c},limitValue:function(a,b,c){return b>a?b:a>c?c:a},randomSign:function(){return Math.random()>.5?1:-1},isOdd:function(a){return 1&a},isEven:function(a){return 1&a?!1:!0},min:function(){if(1===arguments.length&&"object"==typeof arguments[0])var a=arguments[0];else var a=arguments;for(var b=1,c=0,d=a.length;d>b;b++)a[b]<a[c]&&(c=b);return a[c]},max:function(){if(1===arguments.length&&"object"==typeof arguments[0])var a=arguments[0];else var a=arguments;for(var b=1,c=0,d=a.length;d>b;b++)a[b]>a[c]&&(c=b);return a[c]},minProperty:function(a){if(2===arguments.length&&"object"==typeof arguments[1])var b=arguments[1];else var b=arguments.slice(1);for(var c=1,d=0,e=b.length;e>c;c++)b[c][a]<b[d][a]&&(d=c);return b[d][a]},maxProperty:function(a){if(2===arguments.length&&"object"==typeof arguments[1])var b=arguments[1];else var b=arguments.slice(1);for(var c=1,d=0,e=b.length;e>c;c++)b[c][a]>b[d][a]&&(d=c);return b[d][a]},wrapAngle:function(a,b){var c=b?Math.PI/180:1;return this.wrap(a,-180*c,180*c)},angleLimit:function(a,b,c){var d=a;return a>c?d=c:b>a&&(d=b),d},linearInterpolation:function(a,b){var c=a.length-1,d=c*b,e=Math.floor(d);return 0>b?this.linear(a[0],a[1],d):b>1?this.linear(a[c],a[c-1],c-d):this.linear(a[e],a[e+1>c?c:e+1],d-e)},bezierInterpolation:function(a,b){for(var c=0,d=a.length-1,e=0;d>=e;e++)c+=Math.pow(1-b,d-e)*Math.pow(b,e)*a[e]*this.bernstein(d,e);return c},catmullRomInterpolation:function(a,b){var c=a.length-1,d=c*b,e=Math.floor(d);return a[0]===a[c]?(0>b&&(e=Math.floor(d=c*(1+b))),this.catmullRom(a[(e-1+c)%c],a[e],a[(e+1)%c],a[(e+2)%c],d-e)):0>b?a[0]-(this.catmullRom(a[0],a[0],a[1],a[1],-d)-a[0]):b>1?a[c]-(this.catmullRom(a[c],a[c],a[c-1],a[c-1],d-c)-a[c]):this.catmullRom(a[e?e-1:0],a[e],a[e+1>c?c:e+1],a[e+2>c?c:e+2],d-e)},linear:function(a,b,c){return(b-a)*c+a},bernstein:function(a,b){return this.factorial(a)/this.factorial(b)/this.factorial(a-b)},factorial:function(a){if(0===a)return 1;for(var b=a;--a;)b*=a;return b},catmullRom:function(a,b,c,d,e){var f=.5*(c-a),g=.5*(d-b),h=e*e,i=e*h;return(2*b-2*c+f+g)*i+(-3*b+3*c-2*f-g)*h+f*e+b},difference:function(a,b){return Math.abs(a-b)},getRandom:function(a,b,c){if("undefined"==typeof b&&(b=0),"undefined"==typeof c&&(c=0),null!=a){var d=c;if((0===d||d>a.length-b)&&(d=a.length-b),d>0)return a[b+Math.floor(Math.random()*d)]}return null},removeRandom:function(a,b,c){if("undefined"==typeof b&&(b=0),"undefined"==typeof c&&(c=0),null!=a){var d=c;if((0===d||d>a.length-b)&&(d=a.length-b),d>0){var e=b+Math.floor(Math.random()*d),f=a.splice(e,1);return f[0]}}return null},floor:function(a){var b=0|a;return a>0?b:b!=a?b-1:b},ceil:function(a){var b=0|a;return a>0&&b!=a?b+1:b},sinCosGenerator:function(a,b,c,d){"undefined"==typeof b&&(b=1),"undefined"==typeof c&&(c=1),"undefined"==typeof d&&(d=1);for(var e=b,f=c,g=d*Math.PI/a,h=[],i=[],j=0;a>j;j++)f-=e*g,e+=f*g,h[j]=f,i[j]=e;return{sin:i,cos:h,length:a}},shift:function(a){var b=a.shift();return a.push(b),b},shuffleArray:function(a){for(var b=a.length-1;b>0;b--){var c=Math.floor(Math.random()*(b+1)),d=a[b];a[b]=a[c],a[c]=d}return a},distance:function(a,b,c,d){var e=a-c,f=b-d;return Math.sqrt(e*e+f*f)},distancePow:function(a,b,c,d,e){return"undefined"==typeof e&&(e=2),Math.sqrt(Math.pow(c-a,e)+Math.pow(d-b,e))},distanceRounded:function(a,c,d,e){return Math.round(b.Math.distance(a,c,d,e))},clamp:function(a,b,c){return b>a?b:a>c?c:a},clampBottom:function(a,b){return b>a?b:a},within:function(a,b,c){return Math.abs(a-b)<=c},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},smoothstep:function(a,b,c){return a=Math.max(0,Math.min(1,(a-b)/(c-b))),a*a*(3-2*a)},smootherstep:function(a,b,c){return a=Math.max(0,Math.min(1,(a-b)/(c-b))),a*a*a*(a*(6*a-15)+10)},sign:function(a){return 0>a?-1:a>0?1:0},percent:function(a,b,c){return"undefined"==typeof c&&(c=0),a>b||c>b?1:c>a||c>a?0:(a-c)/b},degToRad:function(){var a=Math.PI/180;return function(b){return b*a}}(),radToDeg:function(){var a=180/Math.PI;return function(b){return b*a}}()},b.RandomDataGenerator=function(a){"undefined"==typeof a&&(a=[]),this.c=1,this.s0=0,this.s1=0,this.s2=0,this.sow(a)},b.RandomDataGenerator.prototype={rnd:function(){var a=2091639*this.s0+2.3283064365386963e-10*this.c;return this.c=0|a,this.s0=this.s1,this.s1=this.s2,this.s2=a-this.c,this.s2},sow:function(a){"undefined"==typeof a&&(a=[]),this.s0=this.hash(" "),this.s1=this.hash(this.s0),this.s2=this.hash(this.s1),this.c=1;for(var b,c=0;b=a[c++];)this.s0-=this.hash(b),this.s0+=~~(this.s0<0),this.s1-=this.hash(b),this.s1+=~~(this.s1<0),this.s2-=this.hash(b),this.s2+=~~(this.s2<0)},hash:function(a){var b,c,d;for(d=4022871197,a=a.toString(),c=0;c<a.length;c++)d+=a.charCodeAt(c),b=.02519603282416938*d,d=b>>>0,b-=d,b*=d,d=b>>>0,b-=d,d+=4294967296*b;return 2.3283064365386963e-10*(d>>>0)},integer:function(){return 4294967296*this.rnd.apply(this)},frac:function(){return this.rnd.apply(this)+1.1102230246251565e-16*(2097152*this.rnd.apply(this)|0)},real:function(){return this.integer()+this.frac()},integerInRange:function(a,b){return Math.floor(this.realInRange(0,b-a+1)+a)},between:function(a,b){return this.integerInRange(a,b)},realInRange:function(a,b){return this.frac()*(b-a)+a},normal:function(){return 1-2*this.frac()},uuid:function(){var a="",b="";for(b=a="";a++<36;b+=~a%5|3*a&4?(15^a?8^this.frac()*(20^a?16:4):4).toString(16):"-");return b},pick:function(a){return a[this.integerInRange(0,a.length-1)]},weightedPick:function(a){return a[~~(Math.pow(this.frac(),2)*(a.length-1))]},timestamp:function(a,b){return this.realInRange(a||9466848e5,b||1577862e6)},angle:function(){return this.integerInRange(-180,180)}},b.RandomDataGenerator.prototype.constructor=b.RandomDataGenerator,b.QuadTree=function(a,b,c,d,e,f,g){this.maxObjects=10,this.maxLevels=4,this.level=0,this.bounds={},this.objects=[],this.nodes=[],this._empty=[],this.reset(a,b,c,d,e,f,g)},b.QuadTree.prototype={reset:function(a,b,c,d,e,f,g){this.maxObjects=e||10,this.maxLevels=f||4,this.level=g||0,this.bounds={x:Math.round(a),y:Math.round(b),width:c,height:d,subWidth:Math.floor(c/2),subHeight:Math.floor(d/2),right:Math.round(a)+Math.floor(c/2),bottom:Math.round(b)+Math.floor(d/2)},this.objects.length=0,this.nodes.length=0},populate:function(a){a.forEach(this.populateHandler,this,!0)},populateHandler:function(a){a.body&&a.exists&&this.insert(a.body)},split:function(){this.nodes[0]=new b.QuadTree(this.bounds.right,this.bounds.y,this.bounds.subWidth,this.bounds.subHeight,this.maxObjects,this.maxLevels,this.level+1),this.nodes[1]=new b.QuadTree(this.bounds.x,this.bounds.y,this.bounds.subWidth,this.bounds.subHeight,this.maxObjects,this.maxLevels,this.level+1),this.nodes[2]=new b.QuadTree(this.bounds.x,this.bounds.bottom,this.bounds.subWidth,this.bounds.subHeight,this.maxObjects,this.maxLevels,this.level+1),this.nodes[3]=new b.QuadTree(this.bounds.right,this.bounds.bottom,this.bounds.subWidth,this.bounds.subHeight,this.maxObjects,this.maxLevels,this.level+1)},insert:function(a){var b,c=0;if(null!=this.nodes[0]&&(b=this.getIndex(a),-1!==b))return void this.nodes[b].insert(a);if(this.objects.push(a),this.objects.length>this.maxObjects&&this.level<this.maxLevels)for(null==this.nodes[0]&&this.split();c<this.objects.length;)b=this.getIndex(this.objects[c]),-1!==b?this.nodes[b].insert(this.objects.splice(c,1)[0]):c++},getIndex:function(a){var b=-1;return a.x<this.bounds.right&&a.right<this.bounds.right?a.y<this.bounds.bottom&&a.bottom<this.bounds.bottom?b=1:a.y>this.bounds.bottom&&(b=2):a.x>this.bounds.right&&(a.y<this.bounds.bottom&&a.bottom<this.bounds.bottom?b=0:a.y>this.bounds.bottom&&(b=3)),b},retrieve:function(a){if(a instanceof b.Rectangle)var c=this.objects,d=this.getIndex(a);else{if(!a.body)return this._empty;var c=this.objects,d=this.getIndex(a.body)}return this.nodes[0]&&(-1!==d?c=c.concat(this.nodes[d].retrieve(a)):(c=c.concat(this.nodes[0].retrieve(a)),c=c.concat(this.nodes[1].retrieve(a)),c=c.concat(this.nodes[2].retrieve(a)),c=c.concat(this.nodes[3].retrieve(a)))),c},clear:function(){this.objects.length=0;for(var a=this.nodes.length;a--;)this.nodes[a].clear(),this.nodes.splice(a,1);this.nodes.length=0}},b.QuadTree.prototype.constructor=b.QuadTree,b.Net=function(a){this.game=a},b.Net.prototype={getHostName:function(){return window.location&&window.location.hostname?window.location.hostname:null},checkDomainName:function(a){return-1!==window.location.hostname.indexOf(a)},updateQueryString:function(a,b,c,d){"undefined"==typeof c&&(c=!1),("undefined"==typeof d||""===d)&&(d=window.location.href);var e="",f=new RegExp("([?|&])"+a+"=.*?(&|#|$)(.*)","gi");if(f.test(d))e="undefined"!=typeof b&&null!==b?d.replace(f,"$1"+a+"="+b+"$2$3"):d.replace(f,"$1$3").replace(/(&|\?)$/,"");else if("undefined"!=typeof b&&null!==b){var g=-1!==d.indexOf("?")?"&":"?",h=d.split("#");d=h[0]+g+a+"="+b,h[1]&&(d+="#"+h[1]),e=d}else e=d;return c?void(window.location.href=e):e},getQueryString:function(a){"undefined"==typeof a&&(a="");var b={},c=location.search.substring(1).split("&");for(var d in c){var e=c[d].split("=");if(e.length>1){if(a&&a==this.decodeURI(e[0]))return this.decodeURI(e[1]);b[this.decodeURI(e[0])]=this.decodeURI(e[1])}}return b},decodeURI:function(a){return decodeURIComponent(a.replace(/\+/g," "))}},b.Net.prototype.constructor=b.Net,b.TweenManager=function(a){this.game=a,this._tweens=[],this._add=[],this.game.onPause.add(this._pauseAll,this),this.game.onResume.add(this._resumeAll,this)},b.TweenManager.prototype={getAll:function(){return this._tweens},removeAll:function(){for(var a=0;a<this._tweens.length;a++)this._tweens[a].pendingDelete=!0;this._add=[]},add:function(a){a._manager=this,this._add.push(a)},create:function(a){return new b.Tween(a,this.game,this)},remove:function(a){var b=this._tweens.indexOf(a);-1!==b?this._tweens[b].pendingDelete=!0:(b=this._add.indexOf(a),-1!==b&&(this._add[b].pendingDelete=!0))},update:function(){var a=this._add.length,b=this._tweens.length;if(0===b&&0===a)return!1;for(var c=0;b>c;)this._tweens[c].update(this.game.time.now)?c++:(this._tweens.splice(c,1),b--);return a>0&&(this._tweens=this._tweens.concat(this._add),this._add.length=0),!0},isTweening:function(a){return this._tweens.some(function(b){return b._object===a})},_pauseAll:function(){for(var a=this._tweens.length-1;a>=0;a--)this._tweens[a]._pause()},_resumeAll:function(){for(var a=this._tweens.length-1;a>=0;a--)this._tweens[a]._resume()},pauseAll:function(){for(var a=this._tweens.length-1;a>=0;a--)this._tweens[a].pause()},resumeAll:function(){for(var a=this._tweens.length-1;a>=0;a--)this._tweens[a].resume(!0)}},b.TweenManager.prototype.constructor=b.TweenManager,b.Tween=function(a,c,d){this._object=a,this.game=c,this._manager=d,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._yoyo=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=b.Easing.Linear.None,this._interpolationFunction=b.Math.linearInterpolation,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onUpdateCallbackContext=null,this._paused=!1,this._pausedTime=0,this._codePaused=!1,this.pendingDelete=!1,this.onStart=new b.Signal,this.onLoop=new b.Signal,this.onComplete=new b.Signal,this.isRunning=!1},b.Tween.prototype={to:function(a,b,c,d,e,f,g){b=b||1e3,c=c||null,d=d||!1,e=e||0,f=f||0,g=g||!1,g&&0===f&&(f=1);var h;return this._parent?(h=this._manager.create(this._object),this._lastChild.chain(h),this._lastChild=h):(h=this,this._parent=this,this._lastChild=this),h._repeat=f,h._duration=b,h._valuesEnd=a,null!==c&&(h._easingFunction=c),e>0&&(h._delayTime=e),h._yoyo=g,d?this.start():this},from:function(a,b,c,d,e,f,g){var h={};for(var i in a)h[i]=this._object[i],this._object[i]=a[i];return this.to(h,b,c,d,e,f,g)},start:function(){if(null!==this.game&&null!==this._object){this._manager.add(this),this.isRunning=!0,this._onStartCallbackFired=!1,this._startTime=this.game.time.now+this._delayTime;for(var a in this._valuesEnd){if(Array.isArray(this._valuesEnd[a])){if(0===this._valuesEnd[a].length)continue;this._valuesEnd[a]=[this._object[a]].concat(this._valuesEnd[a])}this._valuesStart[a]=this._object[a],Array.isArray(this._valuesStart[a])||(this._valuesStart[a]*=1),this._valuesStartRepeat[a]=this._valuesStart[a]||0}return this}},generateData:function(a,b){if(null===this.game||null===this._object)return null;this._startTime=0;for(var c in this._valuesEnd){if(Array.isArray(this._valuesEnd[c])){if(0===this._valuesEnd[c].length)continue;this._valuesEnd[c]=[this._object[c]].concat(this._valuesEnd[c])}this._valuesStart[c]=this._object[c],Array.isArray(this._valuesStart[c])||(this._valuesStart[c]*=1),this._valuesStartRepeat[c]=this._valuesStart[c]||0}for(var d=0,e=Math.floor(a*(this._duration/1e3)),f=this._duration/e,g=[];e--;){var c,h=(d-this._startTime)/this._duration;h=h>1?1:h;var i=this._easingFunction(h),j={};for(c in this._valuesEnd){var k=this._valuesStart[c]||0,l=this._valuesEnd[c];l instanceof Array?j[c]=this._interpolationFunction(l,i):("string"==typeof l&&(l=k+parseFloat(l,10)),"number"==typeof l&&(j[c]=k+(l-k)*i))}g.push(j),d+=f}if(this._yoyo){var m=g.slice();m.reverse(),g=g.concat(m)}return"undefined"!=typeof b?b=b.concat(g):g},stop:function(){return this.isRunning=!1,this._onUpdateCallback=null,this._manager.remove(this),this},delay:function(a){return this._delayTime=a,this},repeat:function(a){return this._repeat=a,this},yoyo:function(a){return this._yoyo=a,a&&0===this._repeat&&(this._repeat=1),this},easing:function(a){return this._easingFunction=a,this},interpolation:function(a){return this._interpolationFunction=a,this},chain:function(){return this._chainedTweens=arguments,this},loop:function(){return this._lastChild.chain(this),this},onUpdateCallback:function(a,b){return this._onUpdateCallback=a,this._onUpdateCallbackContext=b,this},pause:function(){this._codePaused=!0,this._paused=!0,this._pausedTime=this.game.time.now},_pause:function(){this._codePaused||(this._paused=!0,this._pausedTime=this.game.time.now)},resume:function(){this._paused&&(this._paused=!1,this._codePaused=!1,this._startTime+=this.game.time.now-this._pausedTime)},_resume:function(){this._codePaused||(this._startTime+=this.game.time.pauseDuration,this._paused=!1)},update:function(a){if(this.pendingDelete)return!1;if(this._paused||a<this._startTime)return!0;var b;if(a<this._startTime)return!0;this._onStartCallbackFired===!1&&(this.onStart.dispatch(this._object),this._onStartCallbackFired=!0);var c=(a-this._startTime)/this._duration;c=c>1?1:c;var d=this._easingFunction(c);for(b in this._valuesEnd){var e=this._valuesStart[b]||0,f=this._valuesEnd[b];f instanceof Array?this._object[b]=this._interpolationFunction(f,d):("string"==typeof f&&(f=e+parseFloat(f,10)),"number"==typeof f&&(this._object[b]=e+(f-e)*d))}if(null!==this._onUpdateCallback&&(this._onUpdateCallback.call(this._onUpdateCallbackContext,this,d),!this.isRunning))return!1;if(1==c){if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(b in this._valuesStartRepeat){if("string"==typeof this._valuesEnd[b]&&(this._valuesStartRepeat[b]=this._valuesStartRepeat[b]+parseFloat(this._valuesEnd[b],10)),this._yoyo){var g=this._valuesStartRepeat[b];this._valuesStartRepeat[b]=this._valuesEnd[b],this._valuesEnd[b]=g}this._valuesStart[b]=this._valuesStartRepeat[b]}return this._yoyo&&(this._reversed=!this._reversed),this._startTime=a+this._delayTime,this.onLoop.dispatch(this._object),!0}this.isRunning=!1,this.onComplete.dispatch(this._object);for(var h=0,i=this._chainedTweens.length;i>h;h++)this._chainedTweens[h].start(a);return!1}return!0}},b.Tween.prototype.constructor=b.Tween,b.Easing={Linear:{None:function(a){return a}},Quadratic:{In:function(a){return a*a},Out:function(a){return a*(2-a)},InOut:function(a){return(a*=2)<1?.5*a*a:-.5*(--a*(a-2)-1)}},Cubic:{In:function(a){return a*a*a},Out:function(a){return--a*a*a+1},InOut:function(a){return(a*=2)<1?.5*a*a*a:.5*((a-=2)*a*a+2)}},Quartic:{In:function(a){return a*a*a*a},Out:function(a){return 1- --a*a*a*a},InOut:function(a){return(a*=2)<1?.5*a*a*a*a:-.5*((a-=2)*a*a*a-2)}},Quintic:{In:function(a){return a*a*a*a*a},Out:function(a){return--a*a*a*a*a+1},InOut:function(a){return(a*=2)<1?.5*a*a*a*a*a:.5*((a-=2)*a*a*a*a+2)}},Sinusoidal:{In:function(a){return 1-Math.cos(a*Math.PI/2)},Out:function(a){return Math.sin(a*Math.PI/2)},InOut:function(a){return.5*(1-Math.cos(Math.PI*a))}},Exponential:{In:function(a){return 0===a?0:Math.pow(1024,a-1)},Out:function(a){return 1===a?1:1-Math.pow(2,-10*a)},InOut:function(a){return 0===a?0:1===a?1:(a*=2)<1?.5*Math.pow(1024,a-1):.5*(-Math.pow(2,-10*(a-1))+2)}},Circular:{In:function(a){return 1-Math.sqrt(1-a*a)},Out:function(a){return Math.sqrt(1- --a*a)},InOut:function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)}},Elastic:{In:function(a){var b,c=.1,d=.4;return 0===a?0:1===a?1:(!c||1>c?(c=1,b=d/4):b=d*Math.asin(1/c)/(2*Math.PI),-(c*Math.pow(2,10*(a-=1))*Math.sin(2*(a-b)*Math.PI/d)))},Out:function(a){var b,c=.1,d=.4;return 0===a?0:1===a?1:(!c||1>c?(c=1,b=d/4):b=d*Math.asin(1/c)/(2*Math.PI),c*Math.pow(2,-10*a)*Math.sin(2*(a-b)*Math.PI/d)+1)},InOut:function(a){var b,c=.1,d=.4;return 0===a?0:1===a?1:(!c||1>c?(c=1,b=d/4):b=d*Math.asin(1/c)/(2*Math.PI),(a*=2)<1?-.5*c*Math.pow(2,10*(a-=1))*Math.sin(2*(a-b)*Math.PI/d):c*Math.pow(2,-10*(a-=1))*Math.sin(2*(a-b)*Math.PI/d)*.5+1)}},Back:{In:function(a){var b=1.70158;return a*a*((b+1)*a-b)},Out:function(a){var b=1.70158;return--a*a*((b+1)*a+b)+1},InOut:function(a){var b=2.5949095;return(a*=2)<1?.5*a*a*((b+1)*a-b):.5*((a-=2)*a*((b+1)*a+b)+2)}},Bounce:{In:function(a){return 1-b.Easing.Bounce.Out(1-a)},Out:function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},InOut:function(a){return.5>a?.5*b.Easing.Bounce.In(2*a):.5*b.Easing.Bounce.Out(2*a-1)+.5}}},b.Time=function(a){this.game=a,this.time=0,this.now=0,this.elapsed=0,this.pausedTime=0,this.advancedTiming=!1,this.fps=0,this.fpsMin=1e3,this.fpsMax=0,this.msMin=1e3,this.msMax=0,this.physicsElapsed=0,this.deltaCap=0,this.timeCap=1e3,this.frames=0,this.pauseDuration=0,this.timeToCall=0,this.lastTime=0,this.events=new b.Timer(this.game,!1),this._started=0,this._timeLastSecond=0,this._pauseStarted=0,this._justResumed=!1,this._timers=[],this._len=0,this._i=0},b.Time.prototype={boot:function(){this._started=Date.now(),this.events.start()},add:function(a){return this._timers.push(a),a},create:function(a){"undefined"==typeof a&&(a=!0);var c=new b.Timer(this.game,a);return this._timers.push(c),c},removeAll:function(){for(var a=0;a<this._timers.length;a++)this._timers[a].destroy();this._timers=[],this.events.removeAll()},update:function(a){if(this.now=a,this.timeToCall=this.game.math.max(0,16-(a-this.lastTime)),this.elapsed=this.now-this.time,this.elapsed>this.timeCap&&(this.elapsed=1/60),this.physicsElapsed=this.elapsed/1e3||1/60,this.deltaCap>0&&this.physicsElapsed>this.deltaCap&&(this.physicsElapsed=this.deltaCap),this.advancedTiming&&(this.msMin=this.game.math.min(this.msMin,this.elapsed),this.msMax=this.game.math.max(this.msMax,this.elapsed),this.frames++,this.now>this._timeLastSecond+1e3&&(this.fps=Math.round(1e3*this.frames/(this.now-this._timeLastSecond)),this.fpsMin=this.game.math.min(this.fpsMin,this.fps),this.fpsMax=this.game.math.max(this.fpsMax,this.fps),this._timeLastSecond=this.now,this.frames=0)),this.time=this.now,this.lastTime=a+this.timeToCall,!this.game.paused)for(this.events.update(this.now),this._i=0,this._len=this._timers.length;this._i<this._len;)this._timers[this._i].update(this.now)?this._i++:(this._timers.splice(this._i,1),this._len--)},gamePaused:function(){this._pauseStarted=this.now,this.events.pause();for(var a=this._timers.length;a--;)this._timers[a]._pause()},gameResumed:function(){this.time=this.now=Date.now(),this.pauseDuration=this.time-this._pauseStarted,this.events.resume();for(var a=this._timers.length;a--;)this._timers[a]._resume()},totalElapsedSeconds:function(){return.001*(this.now-this._started)},elapsedSince:function(a){return this.now-a},elapsedSecondsSince:function(a){return.001*(this.now-a)},reset:function(){this._started=this.now,this.removeAll()}},b.Time.prototype.constructor=b.Time,b.Timer=function(a,c){"undefined"==typeof c&&(c=!0),this.game=a,this.running=!1,this.autoDestroy=c,this.expired=!1,this.elapsed=0,this.events=[],this.onComplete=new b.Signal,this.nextTick=0,this.timeCap=1e3,this.paused=!1,this._codePaused=!1,this._started=0,this._pauseStarted=0,this._pauseTotal=0,this._now=Date.now(),this._len=0,this._marked=0,this._i=0,this._diff=0,this._newTick=0},b.Timer.MINUTE=6e4,b.Timer.SECOND=1e3,b.Timer.HALF=500,b.Timer.QUARTER=250,b.Timer.prototype={create:function(a,c,d,e,f,g){var h=a;h+=0===this._now?this.game.time.now:this._now;var i=new b.TimerEvent(this,a,h,d,c,e,f,g);return this.events.push(i),this.order(),this.expired=!1,i},add:function(a,b,c){return this.create(a,!1,0,b,c,Array.prototype.splice.call(arguments,3))},repeat:function(a,b,c,d){return this.create(a,!1,b,c,d,Array.prototype.splice.call(arguments,4))},loop:function(a,b,c){return this.create(a,!0,0,b,c,Array.prototype.splice.call(arguments,3))},start:function(a){if(!this.running){this._started=this.game.time.now+(a||0),this.running=!0;for(var b=0;b<this.events.length;b++)this.events[b].tick=this.events[b].delay+this._started}},stop:function(a){this.running=!1,"undefined"==typeof a&&(a=!0),a&&(this.events.length=0)},remove:function(a){for(var b=0;b<this.events.length;b++)if(this.events[b]===a)return this.events[b].pendingDelete=!0,!0;return!1},order:function(){this.events.length>0&&(this.events.sort(this.sortHandler),this.nextTick=this.events[0].tick)},sortHandler:function(a,b){return a.tick<b.tick?-1:a.tick>b.tick?1:0},clearPendingEvents:function(){for(this._i=this.events.length;this._i--;)this.events[this._i].pendingDelete&&this.events.splice(this._i,1);this._len=this.events.length,this._i=0},update:function(a){if(this.paused)return!0;if(this.elapsed=a-this._now,this._now=a,this.elapsed>this.timeCap&&this.adjustEvents(a-this.elapsed),this._marked=0,this.clearPendingEvents(),this.running&&this._now>=this.nextTick&&this._len>0){for(;this._i<this._len&&this.running&&this._now>=this.events[this._i].tick;)this._newTick=this._now+this.events[this._i].delay-(this._now-this.events[this._i].tick),this._newTick<0&&(this._newTick=this._now+this.events[this._i].delay),this.events[this._i].loop===!0?(this.events[this._i].tick=this._newTick,this.events[this._i].callback.apply(this.events[this._i].callbackContext,this.events[this._i].args)):this.events[this._i].repeatCount>0?(this.events[this._i].repeatCount--,this.events[this._i].tick=this._newTick,this.events[this._i].callback.apply(this.events[this._i].callbackContext,this.events[this._i].args)):(this._marked++,this.events[this._i].pendingDelete=!0,this.events[this._i].callback.apply(this.events[this._i].callbackContext,this.events[this._i].args)),this._i++;this.events.length>this._marked?this.order():(this.expired=!0,this.onComplete.dispatch(this))}return this.expired&&this.autoDestroy?!1:!0
},pause:function(){this.running&&(this._codePaused=!0,this.paused||(this._pauseStarted=this.game.time.now,this.paused=!0))},_pause:function(){!this.paused&&this.running&&(this._pauseStarted=this.game.time.now,this.paused=!0)},adjustEvents:function(a){for(var b=0;b<this.events.length;b++)if(!this.events[b].pendingDelete){var c=this.events[b].tick-a;0>c&&(c=0),this.events[b].tick=this._now+c}var d=this.nextTick-a;this.nextTick=0>d?this._now:this._now+d},resume:function(){if(this.paused){var a=this.game.time.now;this._pauseTotal+=a-this._now,this._now=a,this.adjustEvents(this._pauseStarted),this.paused=!1,this._codePaused=!1}},_resume:function(){this._codePaused||this.resume()},removeAll:function(){this.onComplete.removeAll(),this.events.length=0,this._len=0,this._i=0},destroy:function(){this.onComplete.removeAll(),this.running=!1,this.events=[],this._len=0,this._i=0}},Object.defineProperty(b.Timer.prototype,"next",{get:function(){return this.nextTick}}),Object.defineProperty(b.Timer.prototype,"duration",{get:function(){return this.running&&this.nextTick>this._now?this.nextTick-this._now:0}}),Object.defineProperty(b.Timer.prototype,"length",{get:function(){return this.events.length}}),Object.defineProperty(b.Timer.prototype,"ms",{get:function(){return this.running?this._now-this._started-this._pauseTotal:0}}),Object.defineProperty(b.Timer.prototype,"seconds",{get:function(){return this.running?.001*this.ms:0}}),b.Timer.prototype.constructor=b.Timer,b.TimerEvent=function(a,b,c,d,e,f,g,h){this.timer=a,this.delay=b,this.tick=c,this.repeatCount=d-1,this.loop=e,this.callback=f,this.callbackContext=g,this.args=h,this.pendingDelete=!1},b.TimerEvent.prototype.constructor=b.TimerEvent,b.AnimationManager=function(a){this.sprite=a,this.game=a.game,this.currentFrame=null,this.currentAnim=null,this.updateIfVisible=!0,this.isLoaded=!1,this._frameData=null,this._anims={},this._outputFrames=[]},b.AnimationManager.prototype={loadFrameData:function(a,b){if(this.isLoaded)for(var c in this._anims)this._anims[c].updateFrameData(a);return this._frameData=a,"undefined"==typeof b||null===b?this.frame=0:"string"==typeof b?this.frameName=b:this.frame=b,this.isLoaded=!0,this._frameData?!0:!1},add:function(a,c,d,e,f){return null===this._frameData?void console.warn("No FrameData available for Phaser.Animation "+a):(c=c||[],d=d||60,"undefined"==typeof e&&(e=!1),"undefined"==typeof f&&(f=c&&"number"==typeof c[0]?!0:!1),null===this.sprite.events.onAnimationStart&&(this.sprite.events.onAnimationStart=new b.Signal,this.sprite.events.onAnimationComplete=new b.Signal,this.sprite.events.onAnimationLoop=new b.Signal),this._outputFrames.length=0,this._frameData.getFrameIndexes(c,f,this._outputFrames),this._anims[a]=new b.Animation(this.game,this.sprite,a,this._frameData,this._outputFrames,d,e),this.currentAnim=this._anims[a],this.currentFrame=this.currentAnim.currentFrame,this.sprite.__tilePattern&&(this.sprite.__tilePattern=!1,this.tilingTexture=!1),this._anims[a])},validateFrames:function(a,b){"undefined"==typeof b&&(b=!0);for(var c=0;c<a.length;c++)if(b===!0){if(a[c]>this._frameData.total)return!1}else if(this._frameData.checkFrameName(a[c])===!1)return!1;return!0},play:function(a,b,c,d){return this._anims[a]?this.currentAnim===this._anims[a]?this.currentAnim.isPlaying===!1?(this.currentAnim.paused=!1,this.currentAnim.play(b,c,d)):this.currentAnim:(this.currentAnim&&this.currentAnim.isPlaying&&this.currentAnim.stop(),this.currentAnim=this._anims[a],this.currentAnim.paused=!1,this.currentFrame=this.currentAnim.currentFrame,this.currentAnim.play(b,c,d)):void 0},stop:function(a,b){"undefined"==typeof b&&(b=!1),"string"==typeof a?this._anims[a]&&(this.currentAnim=this._anims[a],this.currentAnim.stop(b)):this.currentAnim&&this.currentAnim.stop(b)},update:function(){return this.updateIfVisible&&!this.sprite.visible?!1:this.currentAnim&&this.currentAnim.update()===!0?(this.currentFrame=this.currentAnim.currentFrame,!0):!1},next:function(a){this.currentAnim&&(this.currentAnim.next(a),this.currentFrame=this.currentAnim.currentFrame)},previous:function(a){this.currentAnim&&(this.currentAnim.previous(a),this.currentFrame=this.currentAnim.currentFrame)},getAnimation:function(a){return"string"==typeof a&&this._anims[a]?this._anims[a]:null},refreshFrame:function(){this.sprite.setTexture(PIXI.TextureCache[this.currentFrame.uuid]),this.sprite.__tilePattern&&(this.__tilePattern=!1,this.tilingTexture=!1)},destroy:function(){var a=null;for(var a in this._anims)this._anims.hasOwnProperty(a)&&this._anims[a].destroy();this._anims={},this._frameData=null,this._frameIndex=0,this.currentAnim=null,this.currentFrame=null}},b.AnimationManager.prototype.constructor=b.AnimationManager,Object.defineProperty(b.AnimationManager.prototype,"frameData",{get:function(){return this._frameData}}),Object.defineProperty(b.AnimationManager.prototype,"frameTotal",{get:function(){return this._frameData?this._frameData.total:-1}}),Object.defineProperty(b.AnimationManager.prototype,"paused",{get:function(){return this.currentAnim.isPaused},set:function(a){this.currentAnim.paused=a}}),Object.defineProperty(b.AnimationManager.prototype,"frame",{get:function(){return this.currentFrame?this._frameIndex:void 0},set:function(a){"number"==typeof a&&this._frameData&&null!==this._frameData.getFrame(a)&&(this.currentFrame=this._frameData.getFrame(a),this.currentFrame&&(this._frameIndex=a,this.sprite.setFrame(this.currentFrame),this.sprite.__tilePattern&&(this.__tilePattern=!1,this.tilingTexture=!1)))}}),Object.defineProperty(b.AnimationManager.prototype,"frameName",{get:function(){return this.currentFrame?this.currentFrame.name:void 0},set:function(a){"string"==typeof a&&this._frameData&&null!==this._frameData.getFrameByName(a)?(this.currentFrame=this._frameData.getFrameByName(a),this.currentFrame&&(this._frameIndex=this.currentFrame.index,this.sprite.setFrame(this.currentFrame),this.sprite.__tilePattern&&(this.__tilePattern=!1,this.tilingTexture=!1))):console.warn("Cannot set frameName: "+a)}}),b.Animation=function(a,c,d,e,f,g,h){this.game=a,this._parent=c,this._frameData=e,this.name=d,this._frames=[],this._frames=this._frames.concat(f),this.delay=1e3/g,this.loop=h,this.loopCount=0,this.killOnComplete=!1,this.isFinished=!1,this.isPlaying=!1,this.isPaused=!1,this._pauseStartTime=0,this._frameIndex=0,this._frameDiff=0,this._frameSkip=1,this.currentFrame=this._frameData.getFrame(this._frames[this._frameIndex]),this.onStart=new b.Signal,this.onComplete=new b.Signal,this.onLoop=new b.Signal,this.game.onPause.add(this.onPause,this),this.game.onResume.add(this.onResume,this)},b.Animation.prototype={play:function(a,b,c){return"number"==typeof a&&(this.delay=1e3/a),"boolean"==typeof b&&(this.loop=b),"undefined"!=typeof c&&(this.killOnComplete=c),this.isPlaying=!0,this.isFinished=!1,this.paused=!1,this.loopCount=0,this._timeLastFrame=this.game.time.now,this._timeNextFrame=this.game.time.now+this.delay,this._frameIndex=0,this.currentFrame=this._frameData.getFrame(this._frames[this._frameIndex]),this._parent.setFrame(this.currentFrame),this._parent.__tilePattern&&(this._parent.__tilePattern=!1,this._parent.tilingTexture=!1),this._parent.events.onAnimationStart.dispatch(this._parent,this),this.onStart.dispatch(this._parent,this),this},restart:function(){this.isPlaying=!0,this.isFinished=!1,this.paused=!1,this.loopCount=0,this._timeLastFrame=this.game.time.now,this._timeNextFrame=this.game.time.now+this.delay,this._frameIndex=0,this.currentFrame=this._frameData.getFrame(this._frames[this._frameIndex]),this._parent.setFrame(this.currentFrame),this.onStart.dispatch(this._parent,this)},setFrame:function(a,b){var c;if("undefined"==typeof b&&(b=!1),"string"==typeof a)for(var d=0;d<this._frames.length;d++)this._frameData.getFrame(this._frames[d]).name===a&&(c=d);else if("number"==typeof a)if(b)c=a;else for(var d=0;d<this._frames.length;d++)this.frames[d]===c&&(c=d);c&&(this._frameIndex=c-1,this._timeNextFrame=this.game.time.now,this.update())},stop:function(a,b){"undefined"==typeof a&&(a=!1),"undefined"==typeof b&&(b=!1),this.isPlaying=!1,this.isFinished=!0,this.paused=!1,a&&(this.currentFrame=this._frameData.getFrame(this._frames[0]),this._parent.setFrame(this.currentFrame)),b&&(this._parent.events.onAnimationComplete.dispatch(this._parent,this),this.onComplete.dispatch(this._parent,this))},onPause:function(){this.isPlaying&&(this._frameDiff=this._timeNextFrame-this.game.time.now)},onResume:function(){this.isPlaying&&(this._timeNextFrame=this.game.time.now+this._frameDiff)},update:function(){return this.isPaused?!1:this.isPlaying&&this.game.time.now>=this._timeNextFrame?(this._frameSkip=1,this._frameDiff=this.game.time.now-this._timeNextFrame,this._timeLastFrame=this.game.time.now,this._frameDiff>this.delay&&(this._frameSkip=Math.floor(this._frameDiff/this.delay),this._frameDiff-=this._frameSkip*this.delay),this._timeNextFrame=this.game.time.now+(this.delay-this._frameDiff),this._frameIndex+=this._frameSkip,this._frameIndex>=this._frames.length&&(this.loop?(this._frameIndex%=this._frames.length,this.currentFrame=this._frameData.getFrame(this._frames[this._frameIndex]),this.loopCount++,this._parent.events.onAnimationLoop.dispatch(this._parent,this),this.onLoop.dispatch(this._parent,this)):this.complete()),this.currentFrame=this._frameData.getFrame(this._frames[this._frameIndex]),this.currentFrame&&(this._parent.setFrame(this.currentFrame),this._parent.__tilePattern&&(this._parent.__tilePattern=!1,this._parent.tilingTexture=!1)),!0):!1},next:function(a){"undefined"==typeof a&&(a=1);var b=this._frameIndex+a;b>=this._frames.length&&(this.loop?b%=this._frames.length:b=this._frames.length-1),b!==this._frameIndex&&(this._frameIndex=b,this.currentFrame=this._frameData.getFrame(this._frames[this._frameIndex]),this.currentFrame&&(this._parent.setFrame(this.currentFrame),this._parent.__tilePattern&&(this._parent.__tilePattern=!1,this._parent.tilingTexture=!1)))},previous:function(a){"undefined"==typeof a&&(a=1);var b=this._frameIndex-a;0>b&&(this.loop?b=this._frames.length+b:b++),b!==this._frameIndex&&(this._frameIndex=b,this.currentFrame=this._frameData.getFrame(this._frames[this._frameIndex]),this.currentFrame&&(this._parent.setFrame(this.currentFrame),this._parent.__tilePattern&&(this._parent.__tilePattern=!1,this._parent.tilingTexture=!1)))},updateFrameData:function(a){this._frameData=a,this.currentFrame=this._frameData?this._frameData.getFrame(this._frames[this._frameIndex%this._frames.length]):null},destroy:function(){this.game.onPause.remove(this.onPause,this),this.game.onResume.remove(this.onResume,this),this.game=null,this._parent=null,this._frames=null,this._frameData=null,this.currentFrame=null,this.isPlaying=!1,this.onStart.dispose(),this.onLoop.dispose(),this.onComplete.dispose()},complete:function(){this.isPlaying=!1,this.isFinished=!0,this.paused=!1,this._parent.events.onAnimationComplete.dispatch(this._parent,this),this.onComplete.dispatch(this._parent,this),this.killOnComplete&&this._parent.kill()}},b.Animation.prototype.constructor=b.Animation,Object.defineProperty(b.Animation.prototype,"paused",{get:function(){return this.isPaused},set:function(a){this.isPaused=a,a?this._pauseStartTime=this.game.time.now:this.isPlaying&&(this._timeNextFrame=this.game.time.now+this.delay)}}),Object.defineProperty(b.Animation.prototype,"frameTotal",{get:function(){return this._frames.length}}),Object.defineProperty(b.Animation.prototype,"frame",{get:function(){return null!==this.currentFrame?this.currentFrame.index:this._frameIndex},set:function(a){this.currentFrame=this._frameData.getFrame(this._frames[a]),null!==this.currentFrame&&(this._frameIndex=a,this._parent.setFrame(this.currentFrame))}}),Object.defineProperty(b.Animation.prototype,"speed",{get:function(){return Math.round(1e3/this.delay)},set:function(a){a>=1&&(this.delay=1e3/a)}}),b.Animation.generateFrameNames=function(a,c,d,e,f){"undefined"==typeof e&&(e="");var g=[],h="";if(d>c)for(var i=c;d>=i;i++)h="number"==typeof f?b.Utils.pad(i.toString(),f,"0",1):i.toString(),h=a+h+e,g.push(h);else for(var i=c;i>=d;i--)h="number"==typeof f?b.Utils.pad(i.toString(),f,"0",1):i.toString(),h=a+h+e,g.push(h);return g},b.Frame=function(a,c,d,e,f,g,h){this.index=a,this.x=c,this.y=d,this.width=e,this.height=f,this.name=g,this.uuid=h,this.centerX=Math.floor(e/2),this.centerY=Math.floor(f/2),this.distance=b.Math.distance(0,0,e,f),this.rotated=!1,this.rotationDirection="cw",this.trimmed=!1,this.sourceSizeW=e,this.sourceSizeH=f,this.spriteSourceSizeX=0,this.spriteSourceSizeY=0,this.spriteSourceSizeW=0,this.spriteSourceSizeH=0,this.right=this.x+this.width,this.bottom=this.y+this.height},b.Frame.prototype={setTrim:function(a,b,c,d,e,f,g){this.trimmed=a,a&&(this.sourceSizeW=b,this.sourceSizeH=c,this.centerX=Math.floor(b/2),this.centerY=Math.floor(c/2),this.spriteSourceSizeX=d,this.spriteSourceSizeY=e,this.spriteSourceSizeW=f,this.spriteSourceSizeH=g)},getRect:function(a){return"undefined"==typeof a?a=new b.Rectangle(this.x,this.y,this.width,this.height):a.setTo(this.x,this.y,this.width,this.height),a}},b.Frame.prototype.constructor=b.Frame,b.FrameData=function(){this._frames=[],this._frameNames=[]},b.FrameData.prototype={addFrame:function(a){return a.index=this._frames.length,this._frames.push(a),""!==a.name&&(this._frameNames[a.name]=a.index),a},getFrame:function(a){return a>this._frames.length&&(a=0),this._frames[a]},getFrameByName:function(a){return"number"==typeof this._frameNames[a]?this._frames[this._frameNames[a]]:null},checkFrameName:function(a){return null==this._frameNames[a]?!1:!0},getFrameRange:function(a,b,c){"undefined"==typeof c&&(c=[]);for(var d=a;b>=d;d++)c.push(this._frames[d]);return c},getFrames:function(a,b,c){if("undefined"==typeof b&&(b=!0),"undefined"==typeof c&&(c=[]),"undefined"==typeof a||0===a.length)for(var d=0;d<this._frames.length;d++)c.push(this._frames[d]);else for(var d=0,e=a.length;e>d;d++)c.push(b?this.getFrame(a[d]):this.getFrameByName(a[d]));return c},getFrameIndexes:function(a,b,c){if("undefined"==typeof b&&(b=!0),"undefined"==typeof c&&(c=[]),"undefined"==typeof a||0===a.length)for(var d=0,e=this._frames.length;e>d;d++)c.push(this._frames[d].index);else for(var d=0,e=a.length;e>d;d++)b?c.push(a[d]):this.getFrameByName(a[d])&&c.push(this.getFrameByName(a[d]).index);return c}},b.FrameData.prototype.constructor=b.FrameData,Object.defineProperty(b.FrameData.prototype,"total",{get:function(){return this._frames.length}}),b.AnimationParser={spriteSheet:function(a,c,d,e,f,g,h){var i=a.cache.getImage(c);if(null==i)return null;var j=i.width,k=i.height;0>=d&&(d=Math.floor(-j/Math.min(-1,d))),0>=e&&(e=Math.floor(-k/Math.min(-1,e)));var l=Math.floor((j-g)/(d+h)),m=Math.floor((k-g)/(e+h)),n=l*m;if(-1!==f&&(n=f),0===j||0===k||d>j||e>k||0===n)return console.warn("Phaser.AnimationParser.spriteSheet: '"+c+"'s width/height zero or width/height < given frameWidth/frameHeight"),null;for(var o=new b.FrameData,p=g,q=g,r=0;n>r;r++){var s=a.rnd.uuid();o.addFrame(new b.Frame(r,p,q,d,e,"",s)),PIXI.TextureCache[s]=new PIXI.Texture(PIXI.BaseTextureCache[c],{x:p,y:q,width:d,height:e}),p+=d+h,p+d>j&&(p=g,q+=e+h)}return o},JSONData:function(a,c,d){if(!c.frames)return console.warn("Phaser.AnimationParser.JSONData: Invalid Texture Atlas JSON given, missing 'frames' array"),void console.log(c);for(var e,f=new b.FrameData,g=c.frames,h=0;h<g.length;h++){var i=a.rnd.uuid();e=f.addFrame(new b.Frame(h,g[h].frame.x,g[h].frame.y,g[h].frame.w,g[h].frame.h,g[h].filename,i)),PIXI.TextureCache[i]=new PIXI.Texture(PIXI.BaseTextureCache[d],{x:g[h].frame.x,y:g[h].frame.y,width:g[h].frame.w,height:g[h].frame.h}),g[h].trimmed&&e.setTrim(g[h].trimmed,g[h].sourceSize.w,g[h].sourceSize.h,g[h].spriteSourceSize.x,g[h].spriteSourceSize.y,g[h].spriteSourceSize.w,g[h].spriteSourceSize.h)}return f},JSONDataHash:function(a,c,d){if(!c.frames)return console.warn("Phaser.AnimationParser.JSONDataHash: Invalid Texture Atlas JSON given, missing 'frames' object"),void console.log(c);var e,f=new b.FrameData,g=c.frames,h=0;for(var i in g){var j=a.rnd.uuid();e=f.addFrame(new b.Frame(h,g[i].frame.x,g[i].frame.y,g[i].frame.w,g[i].frame.h,i,j)),PIXI.TextureCache[j]=new PIXI.Texture(PIXI.BaseTextureCache[d],{x:g[i].frame.x,y:g[i].frame.y,width:g[i].frame.w,height:g[i].frame.h}),g[i].trimmed&&e.setTrim(g[i].trimmed,g[i].sourceSize.w,g[i].sourceSize.h,g[i].spriteSourceSize.x,g[i].spriteSourceSize.y,g[i].spriteSourceSize.w,g[i].spriteSourceSize.h),h++}return f},XMLData:function(a,c,d){if(!c.getElementsByTagName("TextureAtlas"))return void console.warn("Phaser.AnimationParser.XMLData: Invalid Texture Atlas XML given, missing <TextureAtlas> tag");for(var e,f,g,h,i,j,k,l,m,n,o,p,q=new b.FrameData,r=c.getElementsByTagName("SubTexture"),s=0;s<r.length;s++)f=a.rnd.uuid(),h=r[s].attributes,g=h.name.nodeValue,i=parseInt(h.x.nodeValue,10),j=parseInt(h.y.nodeValue,10),k=parseInt(h.width.nodeValue,10),l=parseInt(h.height.nodeValue,10),m=null,n=null,h.frameX&&(m=Math.abs(parseInt(h.frameX.nodeValue,10)),n=Math.abs(parseInt(h.frameY.nodeValue,10)),o=parseInt(h.frameWidth.nodeValue,10),p=parseInt(h.frameHeight.nodeValue,10)),e=q.addFrame(new b.Frame(s,i,j,k,l,g,f)),PIXI.TextureCache[f]=new PIXI.Texture(PIXI.BaseTextureCache[d],{x:i,y:j,width:k,height:l}),(null!==m||null!==n)&&e.setTrim(!0,k,l,m,n,o,p);return q}},b.Cache=function(a){this.game=a,this._canvases={},this._images={},this._textures={},this._sounds={},this._text={},this._json={},this._physics={},this._tilemaps={},this._binary={},this._bitmapDatas={},this._bitmapFont={},this.addDefaultImage(),this.addMissingImage(),this.onSoundUnlock=new b.Signal,this._cacheMap=[],this._cacheMap[b.Cache.CANVAS]=this._canvases,this._cacheMap[b.Cache.IMAGE]=this._images,this._cacheMap[b.Cache.TEXTURE]=this._textures,this._cacheMap[b.Cache.SOUND]=this._sounds,this._cacheMap[b.Cache.TEXT]=this._text,this._cacheMap[b.Cache.PHYSICS]=this._physics,this._cacheMap[b.Cache.TILEMAP]=this._tilemaps,this._cacheMap[b.Cache.BINARY]=this._binary,this._cacheMap[b.Cache.BITMAPDATA]=this._bitmapDatas,this._cacheMap[b.Cache.BITMAPFONT]=this._bitmapFont,this._cacheMap[b.Cache.JSON]=this._json},b.Cache.CANVAS=1,b.Cache.IMAGE=2,b.Cache.TEXTURE=3,b.Cache.SOUND=4,b.Cache.TEXT=5,b.Cache.PHYSICS=6,b.Cache.TILEMAP=7,b.Cache.BINARY=8,b.Cache.BITMAPDATA=9,b.Cache.BITMAPFONT=10,b.Cache.JSON=11,b.Cache.prototype={addCanvas:function(a,b,c){this._canvases[a]={canvas:b,context:c}},addBinary:function(a,b){this._binary[a]=b},addBitmapData:function(a,b){return this._bitmapDatas[a]=b,b},addRenderTexture:function(a,c){var d=new b.Frame(0,0,0,c.width,c.height,"","");this._textures[a]={texture:c,frame:d}},addSpriteSheet:function(a,c,d,e,f,g,h,i){this._images[a]={url:c,data:d,spriteSheet:!0,frameWidth:e,frameHeight:f,margin:h,spacing:i},PIXI.BaseTextureCache[a]=new PIXI.BaseTexture(d),PIXI.TextureCache[a]=new PIXI.Texture(PIXI.BaseTextureCache[a]),this._images[a].frameData=b.AnimationParser.spriteSheet(this.game,a,e,f,g,h,i)},addTilemap:function(a,b,c,d){this._tilemaps[a]={url:b,data:c,format:d}},addTextureAtlas:function(a,c,d,e,f){this._images[a]={url:c,data:d,spriteSheet:!0},PIXI.BaseTextureCache[a]=new PIXI.BaseTexture(d),PIXI.TextureCache[a]=new PIXI.Texture(PIXI.BaseTextureCache[a]),f==b.Loader.TEXTURE_ATLAS_JSON_ARRAY?this._images[a].frameData=b.AnimationParser.JSONData(this.game,e,a):f==b.Loader.TEXTURE_ATLAS_JSON_HASH?this._images[a].frameData=b.AnimationParser.JSONDataHash(this.game,e,a):f==b.Loader.TEXTURE_ATLAS_XML_STARLING&&(this._images[a].frameData=b.AnimationParser.XMLData(this.game,e,a))},addBitmapFont:function(a,c,d,e,f,g){this._images[a]={url:c,data:d,spriteSheet:!0},PIXI.BaseTextureCache[a]=new PIXI.BaseTexture(d),PIXI.TextureCache[a]=new PIXI.Texture(PIXI.BaseTextureCache[a]),b.LoaderParser.bitmapFont(this.game,e,a,f,g)},addPhysicsData:function(a,b,c,d){this._physics[a]={url:b,data:c,format:d}},addDefaultImage:function(){var a=new Image;a.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABVJREFUeF7NwIEAAAAAgKD9qdeocAMAoAABm3DkcAAAAABJRU5ErkJggg==",this._images.__default={url:null,data:a,spriteSheet:!1},this._images.__default.frame=new b.Frame(0,0,0,32,32,"",""),PIXI.BaseTextureCache.__default=new PIXI.BaseTexture(a),PIXI.TextureCache.__default=new PIXI.Texture(PIXI.BaseTextureCache.__default)},addMissingImage:function(){var a=new Image;a.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJ9JREFUeNq01ssOwyAMRFG46v//Mt1ESmgh+DFmE2GPOBARKb2NVjo+17PXLD8a1+pl5+A+wSgFygymWYHBb0FtsKhJDdZlncG2IzJ4ayoMDv20wTmSMzClEgbWYNTAkQ0Z+OJ+A/eWnAaR9+oxCF4Os0H8htsMUp+pwcgBBiMNnAwF8GqIgL2hAzaGFFgZauDPKABmowZ4GL369/0rwACp2yA/ttmvsQAAAABJRU5ErkJggg==",this._images.__missing={url:null,data:a,spriteSheet:!1},this._images.__missing.frame=new b.Frame(0,0,0,32,32,"",""),PIXI.BaseTextureCache.__missing=new PIXI.BaseTexture(a),PIXI.TextureCache.__missing=new PIXI.Texture(PIXI.BaseTextureCache.__missing)},addText:function(a,b,c){this._text[a]={url:b,data:c}},addJSON:function(a,b,c){this._json[a]={url:b,data:c}},addImage:function(a,c,d){this._images[a]={url:c,data:d,spriteSheet:!1},this._images[a].frame=new b.Frame(0,0,0,d.width,d.height,a,this.game.rnd.uuid()),PIXI.BaseTextureCache[a]=new PIXI.BaseTexture(d),PIXI.TextureCache[a]=new PIXI.Texture(PIXI.BaseTextureCache[a])},addSound:function(a,b,c,d,e){d=d||!0,e=e||!1;var f=!1;e&&(f=!0),this._sounds[a]={url:b,data:c,isDecoding:!1,decoded:f,webAudio:d,audioTag:e,locked:this.game.sound.touchLocked}},reloadSound:function(a){var b=this;this._sounds[a]&&(this._sounds[a].data.src=this._sounds[a].url,this._sounds[a].data.addEventListener("canplaythrough",function(){return b.reloadSoundComplete(a)},!1),this._sounds[a].data.load())},reloadSoundComplete:function(a){this._sounds[a]&&(this._sounds[a].locked=!1,this.onSoundUnlock.dispatch(a))},updateSound:function(a,b,c){this._sounds[a]&&(this._sounds[a][b]=c)},decodedSound:function(a,b){this._sounds[a].data=b,this._sounds[a].decoded=!0,this._sounds[a].isDecoding=!1},getCanvas:function(a){return this._canvases[a]?this._canvases[a].canvas:void console.warn('Phaser.Cache.getCanvas: Invalid key: "'+a+'"')},getBitmapData:function(a){return this._bitmapDatas[a]?this._bitmapDatas[a]:void console.warn('Phaser.Cache.getBitmapData: Invalid key: "'+a+'"')},getBitmapFont:function(a){return this._bitmapFont[a]?this._bitmapFont[a]:void console.warn('Phaser.Cache.getBitmapFont: Invalid key: "'+a+'"')},getPhysicsData:function(a,b,c){if("undefined"==typeof b||null===b){if(this._physics[a])return this._physics[a].data;console.warn('Phaser.Cache.getPhysicsData: Invalid key: "'+a+'"')}else if(this._physics[a]&&this._physics[a].data[b]){var d=this._physics[a].data[b];if(!d||!c)return d;for(var e in d)if(e=d[e],e.fixtureKey===c)return e;console.warn('Phaser.Cache.getPhysicsData: Could not find given fixtureKey: "'+c+" in "+a+'"')}else console.warn('Phaser.Cache.getPhysicsData: Invalid key/object: "'+a+" / "+b+'"');return null},checkKey:function(a,b){return this._cacheMap[a][b]?!0:!1},checkCanvasKey:function(a){return this.checkKey(b.Cache.CANVAS,a)},checkImageKey:function(a){return this.checkKey(b.Cache.IMAGE,a)},checkTextureKey:function(a){return this.checkKey(b.Cache.TEXTURE,a)},checkSoundKey:function(a){return this.checkKey(b.Cache.SOUND,a)},checkTextKey:function(a){return this.checkKey(b.Cache.TEXT,a)},checkPhysicsKey:function(a){return this.checkKey(b.Cache.PHYSICS,a)},checkTilemapKey:function(a){return this.checkKey(b.Cache.TILEMAP,a)},checkBinaryKey:function(a){return this.checkKey(b.Cache.BINARY,a)},checkBitmapDataKey:function(a){return this.checkKey(b.Cache.BITMAPDATA,a)},checkBitmapFontKey:function(a){return this.checkKey(b.Cache.BITMAPFONT,a)},checkJSONKey:function(a){return this.checkKey(b.Cache.JSON,a)},getImage:function(a){return this._images[a]?this._images[a].data:void console.warn('Phaser.Cache.getImage: Invalid key: "'+a+'"')},getTilemapData:function(a){return this._tilemaps[a]?this._tilemaps[a]:void console.warn('Phaser.Cache.getTilemapData: Invalid key: "'+a+'"')},getFrameData:function(a){return this._images[a]&&this._images[a].frameData?this._images[a].frameData:null},updateFrameData:function(a,b){this._images[a]&&(this._images[a].spriteSheet=!0,this._images[a].frameData=b)},getFrameByIndex:function(a,b){return this._images[a]&&this._images[a].frameData?this._images[a].frameData.getFrame(b):null},getFrameByName:function(a,b){return this._images[a]&&this._images[a].frameData?this._images[a].frameData.getFrameByName(b):null},getFrame:function(a){return this._images[a]&&this._images[a].spriteSheet===!1?this._images[a].frame:null},getTextureFrame:function(a){return this._textures[a]?this._textures[a].frame:null},getTexture:function(a){return this._textures[a]?this._textures[a]:void console.warn('Phaser.Cache.getTexture: Invalid key: "'+a+'"')},getSound:function(a){return this._sounds[a]?this._sounds[a]:void console.warn('Phaser.Cache.getSound: Invalid key: "'+a+'"')},getSoundData:function(a){return this._sounds[a]?this._sounds[a].data:void console.warn('Phaser.Cache.getSoundData: Invalid key: "'+a+'"')},isSoundDecoded:function(a){return this._sounds[a]?this._sounds[a].decoded:void 0},isSoundReady:function(a){return this._sounds[a]&&this._sounds[a].decoded&&this.game.sound.touchLocked===!1},isSpriteSheet:function(a){return this._images[a]?this._images[a].spriteSheet:!1},getText:function(a){return this._text[a]?this._text[a].data:void console.warn('Phaser.Cache.getText: Invalid key: "'+a+'"')},getJSON:function(a){return this._json[a]?this._json[a].data:void console.warn('Phaser.Cache.getJSON: Invalid key: "'+a+'"')},getBinary:function(a){return this._binary[a]?this._binary[a]:void console.warn('Phaser.Cache.getBinary: Invalid key: "'+a+'"')},getKeys:function(a){var c=null;switch(a){case b.Cache.CANVAS:c=this._canvases;break;case b.Cache.IMAGE:c=this._images;break;case b.Cache.TEXTURE:c=this._textures;break;case b.Cache.SOUND:c=this._sounds;break;case b.Cache.TEXT:c=this._text;break;case b.Cache.PHYSICS:c=this._physics;break;case b.Cache.TILEMAP:c=this._tilemaps;break;case b.Cache.BINARY:c=this._binary;break;case b.Cache.BITMAPDATA:c=this._bitmapDatas;break;case b.Cache.BITMAPFONT:c=this._bitmapFont;break;case b.Cache.JSON:c=this._json}if(c){var d=[];for(var e in c)"__default"!==e&&"__missing"!==e&&d.push(e);return d}},removeCanvas:function(a){delete this._canvases[a]},removeImage:function(a){delete this._images[a]},removeSound:function(a){delete this._sounds[a]},removeText:function(a){delete this._text[a]},removeJSON:function(a){delete this._json[a]},removePhysics:function(a){delete this._physics[a]},removeTilemap:function(a){delete this._tilemaps[a]},removeBinary:function(a){delete this._binary[a]},removeBitmapData:function(a){delete this._bitmapDatas[a]},removeBitmapFont:function(a){delete this._bitmapFont[a]},destroy:function(){for(var a in this._canvases)delete this._canvases[a];for(var a in this._images)"__default"!==a&&"__missing"!==a&&delete this._images[a];for(var a in this._sounds)delete this._sounds[a];for(var a in this._text)delete this._text[a];for(var a in this._json)delete this._json[a];for(var a in this._textures)delete this._textures[a];for(var a in this._physics)delete this._physics[a];for(var a in this._tilemaps)delete this._tilemaps[a];for(var a in this._binary)delete this._binary[a];for(var a in this._bitmapDatas)delete this._bitmapDatas[a];for(var a in this._bitmapFont)delete this._bitmapFont[a]}},b.Cache.prototype.constructor=b.Cache,b.Loader=function(a){this.game=a,this.isLoading=!1,this.hasLoaded=!1,this.progress=0,this.progressFloat=0,this.preloadSprite=null,this.crossOrigin=!1,this.baseURL="",this.onLoadStart=new b.Signal,this.onFileStart=new b.Signal,this.onFileComplete=new b.Signal,this.onFileError=new b.Signal,this.onLoadComplete=new b.Signal,this.onPackComplete=new b.Signal,this._packList=[],this._packIndex=0,this._fileList=[],this._fileIndex=0,this._progressChunk=0,this._xhr=new XMLHttpRequest,this._ajax=null},b.Loader.TEXTURE_ATLAS_JSON_ARRAY=0,b.Loader.TEXTURE_ATLAS_JSON_HASH=1,b.Loader.TEXTURE_ATLAS_XML_STARLING=2,b.Loader.PHYSICS_LIME_CORONA_JSON=3,b.Loader.PHYSICS_PHASER_JSON=4,b.Loader.prototype={setPreloadSprite:function(a,c){c=c||0,this.preloadSprite={sprite:a,direction:c,width:a.width,height:a.height,rect:null},this.preloadSprite.rect=0===c?new b.Rectangle(0,0,1,a.height):new b.Rectangle(0,0,a.width,1),a.crop(this.preloadSprite.rect),a.visible=!0},checkKeyExists:function(a,b){if(this._fileList.length>0)for(var c=0;c<this._fileList.length;c++)if(this._fileList[c].type===a&&this._fileList[c].key===b)return!0;return!1},getAssetIndex:function(a,b){if(this._fileList.length>0)for(var c=0;c<this._fileList.length;c++)if(this._fileList[c].type===a&&this._fileList[c].key===b)return c;return-1},getAsset:function(a,b){if(this._fileList.length>0)for(var c=0;c<this._fileList.length;c++)if(this._fileList[c].type===a&&this._fileList[c].key===b)return{index:c,file:this._fileList[c]};return!1},reset:function(){this.preloadSprite=null,this.isLoading=!1,this._packList.length=0,this._packIndex=0,this._fileList.length=0,this._fileIndex=0},addToFileList:function(a,b,c,d){var e={type:a,key:b,url:c,data:null,error:!1,loaded:!1};if("undefined"!=typeof d)for(var f in d)e[f]=d[f];this.checkKeyExists(a,b)===!1&&this._fileList.push(e)},replaceInFileList:function(a,b,c,d){var e={type:a,key:b,url:c,data:null,error:!1,loaded:!1};if("undefined"!=typeof d)for(var f in d)e[f]=d[f];var g=this.getAssetIndex(a,b);-1===g?this._fileList.push(e):this._fileList[g]=e},pack:function(a,b,c,d){return"undefined"==typeof b&&(b=null),"undefined"==typeof c&&(c=null),"undefined"==typeof d&&(d=this),null===b&&null===c?(console.warn("Phaser.Loader.pack - Both url and data are null. One must be set."),this):(c&&"string"==typeof c&&(c=JSON.parse(c)),this._packList.push({key:a,url:b,data:c,loaded:!1,error:!1,callbackContext:d}),this)},image:function(a,b,c){return"undefined"==typeof c&&(c=!1),c?this.replaceInFileList("image",a,b):this.addToFileList("image",a,b),this},text:function(a,b,c){return"undefined"==typeof c&&(c=!1),c?this.replaceInFileList("text",a,b):this.addToFileList("text",a,b),this},json:function(a,b,c){return"undefined"==typeof c&&(c=!1),c?this.replaceInFileList("json",a,b):this.addToFileList("json",a,b),this},script:function(a,b,c,d){return"undefined"==typeof c&&(c=!1),c!==!1&&"undefined"==typeof d&&(d=c),this.addToFileList("script",a,b,{callback:c,callbackContext:d}),this},binary:function(a,b,c,d){return"undefined"==typeof c&&(c=!1),c!==!1&&"undefined"==typeof d&&(d=c),this.addToFileList("binary",a,b,{callback:c,callbackContext:d}),this},spritesheet:function(a,b,c,d,e,f,g){return"undefined"==typeof e&&(e=-1),"undefined"==typeof f&&(f=0),"undefined"==typeof g&&(g=0),this.addToFileList("spritesheet",a,b,{frameWidth:c,frameHeight:d,frameMax:e,margin:f,spacing:g}),this},audio:function(a,b,c){return"undefined"==typeof c&&(c=!0),this.addToFileList("audio",a,b,{buffer:null,autoDecode:c}),this},tilemap:function(a,c,d,e){if("undefined"==typeof c&&(c=null),"undefined"==typeof d&&(d=null),"undefined"==typeof e&&(e=b.Tilemap.CSV),null==c&&null==d)return console.warn("Phaser.Loader.tilemap - Both url and data are null. One must be set."),this;if(d){switch(e){case b.Tilemap.CSV:break;case b.Tilemap.TILED_JSON:"string"==typeof d&&(d=JSON.parse(d))}this.game.cache.addTilemap(a,null,d,e)}else this.addToFileList("tilemap",a,c,{format:e});return this},physics:function(a,c,d,e){return"undefined"==typeof c&&(c=null),"undefined"==typeof d&&(d=null),"undefined"==typeof e&&(e=b.Physics.LIME_CORONA_JSON),null==c&&null==d?(console.warn("Phaser.Loader.physics - Both url and data are null. One must be set."),this):(d?("string"==typeof d&&(d=JSON.parse(d)),this.game.cache.addPhysicsData(a,null,d,e)):this.addToFileList("physics",a,c,{format:e}),this)},bitmapFont:function(a,b,c,d,e,f){if("undefined"==typeof c&&(c=null),"undefined"==typeof d&&(d=null),"undefined"==typeof e&&(e=0),"undefined"==typeof f&&(f=0),c)this.addToFileList("bitmapfont",a,b,{xmlURL:c,xSpacing:e,ySpacing:f});
else if("string"==typeof d){var g;try{if(window.DOMParser){var h=new DOMParser;g=h.parseFromString(d,"text/xml")}else g=new ActiveXObject("Microsoft.XMLDOM"),g.async="false",g.loadXML(d)}catch(i){g=void 0}if(!g||!g.documentElement||g.getElementsByTagName("parsererror").length)throw new Error("Phaser.Loader. Invalid Bitmap Font XML given");this.addToFileList("bitmapfont",a,b,{xmlURL:null,xmlData:g,xSpacing:e,ySpacing:f})}return this},atlasJSONArray:function(a,c,d,e){return this.atlas(a,c,d,e,b.Loader.TEXTURE_ATLAS_JSON_ARRAY)},atlasJSONHash:function(a,c,d,e){return this.atlas(a,c,d,e,b.Loader.TEXTURE_ATLAS_JSON_HASH)},atlasXML:function(a,c,d,e){return this.atlas(a,c,d,e,b.Loader.TEXTURE_ATLAS_XML_STARLING)},atlas:function(a,c,d,e,f){if("undefined"==typeof d&&(d=null),"undefined"==typeof e&&(e=null),"undefined"==typeof f&&(f=b.Loader.TEXTURE_ATLAS_JSON_ARRAY),d)this.addToFileList("textureatlas",a,c,{atlasURL:d,format:f});else{switch(f){case b.Loader.TEXTURE_ATLAS_JSON_ARRAY:"string"==typeof e&&(e=JSON.parse(e));break;case b.Loader.TEXTURE_ATLAS_XML_STARLING:if("string"==typeof e){var g;try{if(window.DOMParser){var h=new DOMParser;g=h.parseFromString(e,"text/xml")}else g=new ActiveXObject("Microsoft.XMLDOM"),g.async="false",g.loadXML(e)}catch(i){g=void 0}if(!g||!g.documentElement||g.getElementsByTagName("parsererror").length)throw new Error("Phaser.Loader. Invalid Texture Atlas XML given");e=g}}this.addToFileList("textureatlas",a,c,{atlasURL:null,atlasData:e,format:f})}return this},removeFile:function(a,b){var c=this.getAsset(a,b);c!==!1&&this._fileList.splice(c.index,1)},removeAll:function(){this._fileList.length=0},start:function(){this.isLoading||(this._packList.length>0?(this._packIndex=0,this.loadPack()):this.beginLoad())},beginLoad:function(){this.progress=0,this.progressFloat=0,this.hasLoaded=!1,this.isLoading=!0,this.onLoadStart.dispatch(this._fileList.length),this._fileList.length>0?(this._fileIndex=0,this._progressChunk=100/this._fileList.length,this.loadFile()):(this.progress=100,this.progressFloat=100,this.hasLoaded=!0,this.isLoading=!1,this.onLoadComplete.dispatch())},loadPack:function(){if(!this._packList[this._packIndex])return void console.warn("Phaser.Loader loadPackList invalid index "+this._packIndex);var a=this._packList[this._packIndex];null!==a.data?this.packLoadComplete(this._packIndex,!1):this.xhrLoad(this._packIndex,this.baseURL+a.url,"text","packLoadComplete","packLoadError")},packLoadComplete:function(a,c){if("undefined"==typeof c&&(c=!0),!this._packList[a])return void console.warn("Phaser.Loader packLoadComplete invalid index "+a);var d=this._packList[a];if(d.loaded=!0,c)var e=JSON.parse(this._xhr.responseText);else var e=this._packList[a].data;if(e[d.key])for(var f,g=0;g<e[d.key].length;g++)switch(f=e[d.key][g],f.type){case"image":this.image(f.key,f.url,f.overwrite);break;case"text":this.text(f.key,f.url,f.overwrite);break;case"json":this.json(f.key,f.url,f.overwrite);break;case"script":this.script(f.key,f.url,f.callback,d.callbackContext);break;case"binary":this.binary(f.key,f.url,f.callback,d.callbackContext);break;case"spritesheet":this.spritesheet(f.key,f.url,f.frameWidth,f.frameHeight,f.frameMax,f.margin,f.spacing);break;case"audio":this.audio(f.key,f.urls,f.autoDecode);break;case"tilemap":this.tilemap(f.key,f.url,f.data,b.Tilemap[f.format]);break;case"physics":this.physics(f.key,f.url,f.data,b.Loader[f.format]);break;case"bitmapFont":this.bitmapFont(f.key,f.textureURL,f.xmlURL,f.xmlData,f.xSpacing,f.ySpacing);break;case"atlasJSONArray":this.atlasJSONArray(f.key,f.textureURL,f.atlasURL,f.atlasData);break;case"atlasJSONHash":this.atlasJSONHash(f.key,f.textureURL,f.atlasURL,f.atlasData);break;case"atlasXML":this.atlasXML(f.key,f.textureURL,f.atlasURL,f.atlasData);break;case"atlas":this.atlas(f.key,f.textureURL,f.atlasURL,f.atlasData,b.Loader[f.format])}this.nextPack(a,!0)},packError:function(a){this._packList[a].loaded=!0,this._packList[a].error=!0,this.onFileError.dispatch(this._packList[a].key,this._packList[a]),console.warn("Phaser.Loader error loading pack file: "+this._packList[a].key+" from URL "+this._packList[a].url),this.nextPack(a,!1)},nextPack:function(a,b){this.onPackComplete.dispatch(this._packList[a].key,b,this.totalLoadedPacks(),this._packList.length),this._packIndex++,this._packIndex<this._packList.length?this.loadPack():this.beginLoad()},loadFile:function(){if(!this._fileList[this._fileIndex])return void console.warn("Phaser.Loader loadFile invalid index "+this._fileIndex);var a=this._fileList[this._fileIndex],c=this;switch(this.onFileStart.dispatch(this.progress,a.key),a.type){case"image":case"spritesheet":case"textureatlas":case"bitmapfont":a.data=new Image,a.data.name=a.key,a.data.onload=function(){return c.fileComplete(c._fileIndex)},a.data.onerror=function(){return c.fileError(c._fileIndex)},this.crossOrigin&&(a.data.crossOrigin=this.crossOrigin),a.data.src=this.baseURL+a.url;break;case"audio":a.url=this.getAudioURL(a.url),null!==a.url?this.game.sound.usingWebAudio?this.xhrLoad(this._fileIndex,this.baseURL+a.url,"arraybuffer","fileComplete","fileError"):this.game.sound.usingAudioTag&&(this.game.sound.touchLocked?(a.data=new Audio,a.data.name=a.key,a.data.preload="auto",a.data.src=this.baseURL+a.url,this.fileComplete(this._fileIndex)):(a.data=new Audio,a.data.name=a.key,a.data.onerror=function(){return c.fileError(c._fileIndex)},a.data.preload="auto",a.data.src=this.baseURL+a.url,a.data.addEventListener("canplaythrough",b.GAMES[this.game.id].load.fileComplete(this._fileIndex),!1),a.data.load())):this.fileError(this._fileIndex);break;case"json":window.XDomainRequest?(this._ajax=new window.XDomainRequest,this._ajax.timeout=3e3,this._ajax.onerror=function(){return c.dataLoadError(c._fileIndex)},this._ajax.ontimeout=function(){return c.dataLoadError(c._fileIndex)},this._ajax.onprogress=function(){},this._ajax.onload=function(){return c.jsonLoadComplete(c._fileIndex)},this._ajax.open("GET",this.baseURL+a.url,!0),this._ajax.send()):this.xhrLoad(this._fileIndex,this.baseURL+a.url,"text","jsonLoadComplete","dataLoadError");break;case"tilemap":if(a.format===b.Tilemap.TILED_JSON)this.xhrLoad(this._fileIndex,this.baseURL+a.url,"text","jsonLoadComplete","dataLoadError");else{if(a.format!==b.Tilemap.CSV)throw new Error("Phaser.Loader. Invalid Tilemap format: "+a.format);this.xhrLoad(this._fileIndex,this.baseURL+a.url,"text","csvLoadComplete","dataLoadError")}break;case"text":case"script":case"physics":this.xhrLoad(this._fileIndex,this.baseURL+a.url,"text","fileComplete","fileError");break;case"binary":this.xhrLoad(this._fileIndex,this.baseURL+a.url,"arraybuffer","fileComplete","fileError")}},xhrLoad:function(a,b,c,d,e){this._xhr.open("GET",b,!0),this._xhr.responseType=c;var f=this;this._xhr.onload=function(){return f[d](a)},this._xhr.onerror=function(){return f[e](a)},this._xhr.send()},getAudioURL:function(a){var b;"string"==typeof a&&(a=[a]);for(var c=0;c<a.length;c++)if(b=a[c].toLowerCase(),b=b.substr((Math.max(0,b.lastIndexOf("."))||1/0)+1),this.game.device.canPlayAudio(b))return a[c];return null},fileError:function(a){this._fileList[a].loaded=!0,this._fileList[a].error=!0,this.onFileError.dispatch(this._fileList[a].key,this._fileList[a]),console.warn("Phaser.Loader error loading file: "+this._fileList[a].key+" from URL "+this._fileList[a].url),this.nextFile(a,!1)},fileComplete:function(a){if(!this._fileList[a])return void console.warn("Phaser.Loader fileComplete invalid index "+a);var c=this._fileList[a];c.loaded=!0;var d=!0;switch(c.type){case"image":this.game.cache.addImage(c.key,c.url,c.data);break;case"spritesheet":this.game.cache.addSpriteSheet(c.key,c.url,c.data,c.frameWidth,c.frameHeight,c.frameMax,c.margin,c.spacing);break;case"textureatlas":if(null==c.atlasURL)this.game.cache.addTextureAtlas(c.key,c.url,c.data,c.atlasData,c.format);else if(d=!1,c.format==b.Loader.TEXTURE_ATLAS_JSON_ARRAY||c.format==b.Loader.TEXTURE_ATLAS_JSON_HASH)this.xhrLoad(this._fileIndex,this.baseURL+c.atlasURL,"text","jsonLoadComplete","dataLoadError");else{if(c.format!=b.Loader.TEXTURE_ATLAS_XML_STARLING)throw new Error("Phaser.Loader. Invalid Texture Atlas format: "+c.format);this.xhrLoad(this._fileIndex,this.baseURL+c.atlasURL,"text","xmlLoadComplete","dataLoadError")}break;case"bitmapfont":null==c.xmlURL?this.game.cache.addBitmapFont(c.key,c.url,c.data,c.xmlData,c.xSpacing,c.ySpacing):(d=!1,this.xhrLoad(this._fileIndex,this.baseURL+c.xmlURL,"text","xmlLoadComplete","dataLoadError"));break;case"audio":if(this.game.sound.usingWebAudio){if(c.data=this._xhr.response,this.game.cache.addSound(c.key,c.url,c.data,!0,!1),c.autoDecode){var e=this,f=c.key;this.game.cache.updateSound(f,"isDecoding",!0),this.game.sound.context.decodeAudioData(c.data,function(a){a&&(e.game.cache.decodedSound(f,a),e.game.sound.onSoundDecode.dispatch(f,e.game.cache.getSound(f)))})}}else c.data.removeEventListener("canplaythrough",b.GAMES[this.game.id].load.fileComplete),this.game.cache.addSound(c.key,c.url,c.data,!1,!0);break;case"text":c.data=this._xhr.responseText,this.game.cache.addText(c.key,c.url,c.data);break;case"physics":var g=JSON.parse(this._xhr.responseText);this.game.cache.addPhysicsData(c.key,c.url,g,c.format);break;case"script":c.data=document.createElement("script"),c.data.language="javascript",c.data.type="text/javascript",c.data.defer=!1,c.data.text=this._xhr.responseText,document.head.appendChild(c.data),c.callback&&(c.data=c.callback.call(c.callbackContext,c.key,this._xhr.responseText));break;case"binary":c.data=c.callback?c.callback.call(c.callbackContext,c.key,this._xhr.response):this._xhr.response,this.game.cache.addBinary(c.key,c.data)}d&&this.nextFile(a,!0)},jsonLoadComplete:function(a){if(!this._fileList[a])return void console.warn("Phaser.Loader jsonLoadComplete invalid index "+a);var b=this._fileList[a],c=JSON.parse(this._xhr.responseText);b.loaded=!0,"tilemap"===b.type?this.game.cache.addTilemap(b.key,b.url,c,b.format):"json"===b.type?this.game.cache.addJSON(b.key,b.url,c):this.game.cache.addTextureAtlas(b.key,b.url,b.data,c,b.format),this.nextFile(a,!0)},csvLoadComplete:function(a){if(!this._fileList[a])return void console.warn("Phaser.Loader csvLoadComplete invalid index "+a);var b=this._fileList[a],c=this._xhr.responseText;b.loaded=!0,this.game.cache.addTilemap(b.key,b.url,c,b.format),this.nextFile(a,!0)},dataLoadError:function(a){var b=this._fileList[a];b.loaded=!0,b.error=!0,console.warn("Phaser.Loader dataLoadError: "+b.key),this.nextFile(a,!0)},xmlLoadComplete:function(a){var b,c=this._xhr.responseText;try{if(window.DOMParser){var d=new DOMParser;b=d.parseFromString(c,"text/xml")}else b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(c)}catch(e){b=void 0}if(!b||!b.documentElement||b.getElementsByTagName("parsererror").length)throw new Error("Phaser.Loader. Invalid XML given");var f=this._fileList[a];f.loaded=!0,"bitmapfont"==f.type?this.game.cache.addBitmapFont(f.key,f.url,f.data,b,f.xSpacing,f.ySpacing):"textureatlas"==f.type&&this.game.cache.addTextureAtlas(f.key,f.url,f.data,b,f.format),this.nextFile(a,!0)},nextFile:function(a,b){this.progressFloat+=this._progressChunk,this.progress=Math.round(this.progressFloat),this.progress>100&&(this.progress=100),null!==this.preloadSprite&&(0===this.preloadSprite.direction?(this.preloadSprite.rect.width=Math.floor(this.preloadSprite.width/100*this.progress),this.preloadSprite.sprite.crop(this.preloadSprite.rect)):(this.preloadSprite.rect.height=Math.floor(this.preloadSprite.height/100*this.progress),this.preloadSprite.sprite.crop(this.preloadSprite.rect))),this.onFileComplete.dispatch(this.progress,this._fileList[a].key,b,this.totalLoadedFiles(),this._fileList.length),this.totalQueuedFiles()>0?(this._fileIndex++,this.loadFile()):(this.hasLoaded=!0,this.isLoading=!1,this.removeAll(),this.onLoadComplete.dispatch())},totalLoadedFiles:function(){for(var a=0,b=0;b<this._fileList.length;b++)this._fileList[b].loaded&&a++;return a},totalQueuedFiles:function(){for(var a=0,b=0;b<this._fileList.length;b++)this._fileList[b].loaded===!1&&a++;return a},totalLoadedPacks:function(){for(var a=0,b=0;b<this._packList.length;b++)this._packList[b].loaded&&a++;return a},totalQueuedPacks:function(){for(var a=0,b=0;b<this._packList.length;b++)this._packList[b].loaded===!1&&a++;return a}},b.Loader.prototype.constructor=b.Loader,b.LoaderParser={bitmapFont:function(a,b,c,d,e){var f={},g=b.getElementsByTagName("info")[0],h=b.getElementsByTagName("common")[0];f.font=g.getAttribute("face"),f.size=parseInt(g.getAttribute("size"),10),f.lineHeight=parseInt(h.getAttribute("lineHeight"),10)+e,f.chars={};for(var i=b.getElementsByTagName("char"),j=0;j<i.length;j++){var k=parseInt(i[j].getAttribute("id"),10),l=new PIXI.Rectangle(parseInt(i[j].getAttribute("x"),10),parseInt(i[j].getAttribute("y"),10),parseInt(i[j].getAttribute("width"),10),parseInt(i[j].getAttribute("height"),10));f.chars[k]={xOffset:parseInt(i[j].getAttribute("xoffset"),10),yOffset:parseInt(i[j].getAttribute("yoffset"),10),xAdvance:parseInt(i[j].getAttribute("xadvance"),10)+d,kerning:{},texture:PIXI.TextureCache[c]=new PIXI.Texture(PIXI.BaseTextureCache[c],l)}}var m=b.getElementsByTagName("kerning");for(j=0;j<m.length;j++){var n=parseInt(m[j].getAttribute("first"),10),o=parseInt(m[j].getAttribute("second"),10),p=parseInt(m[j].getAttribute("amount"),10);f.chars[o].kerning[n]=p}PIXI.BitmapText.fonts[c]=f}},b.Sound=function(a,c,d,e,f){"undefined"==typeof d&&(d=1),"undefined"==typeof e&&(e=!1),"undefined"==typeof f&&(f=a.sound.connectToMaster),this.game=a,this.name=c,this.key=c,this.loop=e,this.volume=d,this.markers={},this.context=null,this.autoplay=!1,this.totalDuration=0,this.startTime=0,this.currentTime=0,this.duration=0,this.durationMS=0,this.position=0,this.stopTime=0,this.paused=!1,this.pausedPosition=0,this.pausedTime=0,this.isPlaying=!1,this.currentMarker="",this.pendingPlayback=!1,this.override=!1,this.usingWebAudio=this.game.sound.usingWebAudio,this.usingAudioTag=this.game.sound.usingAudioTag,this.externalNode=null,this.masterGainNode=null,this.gainNode=null,this.usingWebAudio?(this.context=this.game.sound.context,this.masterGainNode=this.game.sound.masterGain,this.gainNode="undefined"==typeof this.context.createGain?this.context.createGainNode():this.context.createGain(),this.gainNode.gain.value=d*this.game.sound.volume,f&&this.gainNode.connect(this.masterGainNode)):this.game.cache.getSound(c)&&this.game.cache.isSoundReady(c)?(this._sound=this.game.cache.getSoundData(c),this.totalDuration=0,this._sound.duration&&(this.totalDuration=this._sound.duration)):this.game.cache.onSoundUnlock.add(this.soundHasUnlocked,this),this.onDecoded=new b.Signal,this.onPlay=new b.Signal,this.onPause=new b.Signal,this.onResume=new b.Signal,this.onLoop=new b.Signal,this.onStop=new b.Signal,this.onMute=new b.Signal,this.onMarkerComplete=new b.Signal,this._volume=d,this._buffer=null,this._muted=!1,this._tempMarker=0,this._tempPosition=0,this._tempVolume=0,this._tempLoop=0,this._paused=!1,this._onDecodedEventDispatched=!1},b.Sound.prototype={soundHasUnlocked:function(a){a==this.key&&(this._sound=this.game.cache.getSoundData(this.key),this.totalDuration=this._sound.duration)},addMarker:function(a,b,c,d,e){"undefined"==typeof d&&(d=1),"undefined"==typeof e&&(e=!1),this.markers[a]={name:a,start:b,stop:b+c,volume:d,duration:c,durationMS:1e3*c,loop:e}},removeMarker:function(a){delete this.markers[a]},update:function(){this.isDecoded&&!this._onDecodedEventDispatched&&(this.onDecoded.dispatch(this),this._onDecodedEventDispatched=!0),this.pendingPlayback&&this.game.cache.isSoundReady(this.key)&&(this.pendingPlayback=!1,this.play(this._tempMarker,this._tempPosition,this._tempVolume,this._tempLoop)),this.isPlaying&&(this.currentTime=this.game.time.now-this.startTime,this.currentTime>=this.durationMS&&(this.usingWebAudio?this.loop?(this.onLoop.dispatch(this),""===this.currentMarker?(this.currentTime=0,this.startTime=this.game.time.now):(this.onMarkerComplete.dispatch(this.currentMarker,this),this.play(this.currentMarker,0,this.volume,!0,!0))):this.stop():this.loop?(this.onLoop.dispatch(this),this.play(this.currentMarker,0,this.volume,!0,!0)):this.stop()))},play:function(a,b,c,d,e){if("undefined"==typeof a&&(a=""),"undefined"==typeof e&&(e=!0),this.isPlaying===!0&&e===!1&&this.override===!1)return this;if(this.isPlaying&&this.override&&(this.usingWebAudio?"undefined"==typeof this._sound.stop?this._sound.noteOff(0):this._sound.stop(0):this.usingAudioTag&&(this._sound.pause(),this._sound.currentTime=0)),this.currentMarker=a,""!==a){if(!this.markers[a])return console.warn("Phaser.Sound.play: audio marker "+a+" doesn't exist"),this;this.position=this.markers[a].start,this.volume=this.markers[a].volume,this.loop=this.markers[a].loop,this.duration=this.markers[a].duration,this.durationMS=this.markers[a].durationMS,"undefined"!=typeof c&&(this.volume=c),"undefined"!=typeof d&&(this.loop=d),this._tempMarker=a,this._tempPosition=this.position,this._tempVolume=this.volume,this._tempLoop=this.loop}else b=b||0,"undefined"==typeof c&&(c=this._volume),"undefined"==typeof d&&(d=this.loop),this.position=b,this.volume=c,this.loop=d,this.duration=0,this.durationMS=0,this._tempMarker=a,this._tempPosition=b,this._tempVolume=c,this._tempLoop=d;return this.usingWebAudio?this.game.cache.isSoundDecoded(this.key)?(null==this._buffer&&(this._buffer=this.game.cache.getSoundData(this.key)),this._sound=this.context.createBufferSource(),this._sound.buffer=this._buffer,this._sound.connect(this.externalNode?this.externalNode:this.gainNode),this.totalDuration=this._sound.buffer.duration,0===this.duration&&(this.duration=this.totalDuration,this.durationMS=1e3*this.totalDuration),this.loop&&""===a&&(this._sound.loop=!0),"undefined"==typeof this._sound.start?this._sound.noteGrainOn(0,this.position,this.duration):this._sound.start(0,this.position,this.duration),this.isPlaying=!0,this.startTime=this.game.time.now,this.currentTime=0,this.stopTime=this.startTime+this.durationMS,this.onPlay.dispatch(this)):(this.pendingPlayback=!0,this.game.cache.getSound(this.key)&&this.game.cache.getSound(this.key).isDecoding===!1&&this.game.sound.decode(this.key,this)):this.game.cache.getSound(this.key)&&this.game.cache.getSound(this.key).locked?(this.game.cache.reloadSound(this.key),this.pendingPlayback=!0):this._sound&&(this.game.device.cocoonJS||4===this._sound.readyState)?(this._sound.play(),this.totalDuration=this._sound.duration,0===this.duration&&(this.duration=this.totalDuration,this.durationMS=1e3*this.totalDuration),this._sound.currentTime=this.position,this._sound.muted=this._muted,this._sound.volume=this._muted?0:this._volume,this.isPlaying=!0,this.startTime=this.game.time.now,this.currentTime=0,this.stopTime=this.startTime+this.durationMS,this.onPlay.dispatch(this)):this.pendingPlayback=!0,this},restart:function(a,b,c,d){a=a||"",b=b||0,c=c||1,"undefined"==typeof d&&(d=!1),this.play(a,b,c,d,!0)},pause:function(){this.isPlaying&&this._sound&&(this.paused=!0,this.pausedPosition=this.currentTime,this.pausedTime=this.game.time.now,this.onPause.dispatch(this),this.stop())},resume:function(){if(this.paused&&this._sound){if(this.usingWebAudio){var a=this.position+this.pausedPosition/1e3;this._sound=this.context.createBufferSource(),this._sound.buffer=this._buffer,this._sound.connect(this.externalNode?this.externalNode:this.gainNode),this.loop&&(this._sound.loop=!0),"undefined"==typeof this._sound.start?this._sound.noteGrainOn(0,a,this.duration):this._sound.start(0,a,this.duration)}else this._sound.play();this.isPlaying=!0,this.paused=!1,this.startTime+=this.game.time.now-this.pausedTime,this.onResume.dispatch(this)}},stop:function(){if(this.isPlaying&&this._sound)if(this.usingWebAudio)if("undefined"==typeof this._sound.stop)this._sound.noteOff(0);else try{this._sound.stop(0)}catch(a){}else this.usingAudioTag&&(this._sound.pause(),this._sound.currentTime=0);this.isPlaying=!1;var b=this.currentMarker;""!==this.currentMarker&&this.onMarkerComplete.dispatch(this.currentMarker,this),this.currentMarker="",this.paused||this.onStop.dispatch(this,b)},destroy:function(a){"undefined"==typeof a&&(a=!0),this.stop(),a?this.game.sound.remove(this):(this.markers={},this.context=null,this._buffer=null,this.externalNode=null,this.onDecoded.dispose(),this.onPlay.dispose(),this.onPause.dispose(),this.onResume.dispose(),this.onLoop.dispose(),this.onStop.dispose(),this.onMute.dispose(),this.onMarkerComplete.dispose())}},b.Sound.prototype.constructor=b.Sound,Object.defineProperty(b.Sound.prototype,"isDecoding",{get:function(){return this.game.cache.getSound(this.key).isDecoding}}),Object.defineProperty(b.Sound.prototype,"isDecoded",{get:function(){return this.game.cache.isSoundDecoded(this.key)}}),Object.defineProperty(b.Sound.prototype,"mute",{get:function(){return this._muted||this.game.sound.mute},set:function(a){a=a||null,a?(this._muted=!0,this.usingWebAudio?(this._muteVolume=this.gainNode.gain.value,this.gainNode.gain.value=0):this.usingAudioTag&&this._sound&&(this._muteVolume=this._sound.volume,this._sound.volume=0)):(this._muted=!1,this.usingWebAudio?this.gainNode.gain.value=this._muteVolume:this.usingAudioTag&&this._sound&&(this._sound.volume=this._muteVolume)),this.onMute.dispatch(this)}}),Object.defineProperty(b.Sound.prototype,"volume",{get:function(){return this._volume},set:function(a){this.usingWebAudio?(this._volume=a,this.gainNode.gain.value=a):this.usingAudioTag&&this._sound&&a>=0&&1>=a&&(this._volume=a,this._sound.volume=a)}}),b.SoundManager=function(a){this.game=a,this.onSoundDecode=new b.Signal,this._codeMuted=!1,this._muted=!1,this._unlockSource=null,this._volume=1,this._sounds=[],this.context=null,this.usingWebAudio=!0,this.usingAudioTag=!1,this.noAudio=!1,this.connectToMaster=!0,this.touchLocked=!1,this.channels=32},b.SoundManager.prototype={boot:function(){if(this.game.device.iOS&&this.game.device.webAudio===!1&&(this.channels=1),!this.game.device.cocoonJS&&this.game.device.iOS||window.PhaserGlobal&&window.PhaserGlobal.fakeiOSTouchLock?(this.game.input.touch.callbackContext=this,this.game.input.touch.touchStartCallback=this.unlock,this.game.input.mouse.callbackContext=this,this.game.input.mouse.mouseDownCallback=this.unlock,this.touchLocked=!0):this.touchLocked=!1,window.PhaserGlobal){if(window.PhaserGlobal.disableAudio===!0)return this.usingWebAudio=!1,void(this.noAudio=!0);if(window.PhaserGlobal.disableWebAudio===!0)return this.usingWebAudio=!1,this.usingAudioTag=!0,void(this.noAudio=!1)}if(window.AudioContext)try{this.context=new window.AudioContext}catch(a){this.context=null,this.usingWebAudio=!1,this.noAudio=!0}else if(window.webkitAudioContext)try{this.context=new window.webkitAudioContext}catch(a){this.context=null,this.usingWebAudio=!1,this.noAudio=!0}window.Audio&&null===this.context&&(this.usingWebAudio=!1,this.usingAudioTag=!0,this.noAudio=!1),null!==this.context&&(this.masterGain="undefined"==typeof this.context.createGain?this.context.createGainNode():this.context.createGain(),this.masterGain.gain.value=1,this.masterGain.connect(this.context.destination))},unlock:function(){if(this.touchLocked!==!1)if(this.game.device.webAudio===!1||window.PhaserGlobal&&window.PhaserGlobal.disableWebAudio===!0)this.touchLocked=!1,this._unlockSource=null,this.game.input.touch.callbackContext=null,this.game.input.touch.touchStartCallback=null,this.game.input.mouse.callbackContext=null,this.game.input.mouse.mouseDownCallback=null;else{var a=this.context.createBuffer(1,1,22050);this._unlockSource=this.context.createBufferSource(),this._unlockSource.buffer=a,this._unlockSource.connect(this.context.destination),this._unlockSource.noteOn(0)}},stopAll:function(){for(var a=0;a<this._sounds.length;a++)this._sounds[a]&&this._sounds[a].stop()},pauseAll:function(){for(var a=0;a<this._sounds.length;a++)this._sounds[a]&&this._sounds[a].pause()},resumeAll:function(){for(var a=0;a<this._sounds.length;a++)this._sounds[a]&&this._sounds[a].resume()},decode:function(a,b){b=b||null;var c=this.game.cache.getSoundData(a);if(c&&this.game.cache.isSoundDecoded(a)===!1){this.game.cache.updateSound(a,"isDecoding",!0);var d=this;this.context.decodeAudioData(c,function(c){d.game.cache.decodedSound(a,c),b&&d.onSoundDecode.dispatch(a,b)})}},update:function(){this.touchLocked&&this.game.device.webAudio&&null!==this._unlockSource&&(this._unlockSource.playbackState===this._unlockSource.PLAYING_STATE||this._unlockSource.playbackState===this._unlockSource.FINISHED_STATE)&&(this.touchLocked=!1,this._unlockSource=null,this.game.input.touch.callbackContext=null,this.game.input.touch.touchStartCallback=null);for(var a=0;a<this._sounds.length;a++)this._sounds[a].update()},add:function(a,c,d,e){"undefined"==typeof c&&(c=1),"undefined"==typeof d&&(d=!1),"undefined"==typeof e&&(e=this.connectToMaster);var f=new b.Sound(this.game,a,c,d,e);return this._sounds.push(f),f},remove:function(a){for(var b=this._sounds.length;b--;)if(this._sounds[b]===a)return this._sounds[b].destroy(!1),this._sounds.splice(b,1),!0;return!1},removeByKey:function(a){for(var b=this._sounds.length,c=0;b--;)this._sounds[b].key===a&&(this._sounds[b].destroy(!1),this._sounds.splice(b,1),c++);return c},play:function(a,b,c){var d=this.add(a,b,c);return d.play(),d},setMute:function(){if(!this._muted){this._muted=!0,this.usingWebAudio&&(this._muteVolume=this.masterGain.gain.value,this.masterGain.gain.value=0);for(var a=0;a<this._sounds.length;a++)this._sounds[a].usingAudioTag&&(this._sounds[a].mute=!0)}},unsetMute:function(){if(this._muted&&!this._codeMuted){this._muted=!1,this.usingWebAudio&&(this.masterGain.gain.value=this._muteVolume);for(var a=0;a<this._sounds.length;a++)this._sounds[a].usingAudioTag&&(this._sounds[a].mute=!1)}}},b.SoundManager.prototype.constructor=b.SoundManager,Object.defineProperty(b.SoundManager.prototype,"mute",{get:function(){return this._muted},set:function(a){if(a=a||null){if(this._muted)return;this._codeMuted=!0,this.setMute()}else{if(!this._muted)return;this._codeMuted=!1,this.unsetMute()}}}),Object.defineProperty(b.SoundManager.prototype,"volume",{get:function(){return this.usingWebAudio?this.masterGain.gain.value:this._volume},set:function(a){if(this._volume=a,this.usingWebAudio)this.masterGain.gain.value=a;else for(var b=0;b<this._sounds.length;b++)this._sounds[b].usingAudioTag&&(this._sounds[b].volume=this._sounds[b].volume*a)}}),b.Utils.Debug=function(a){this.game=a,this.sprite=null,this.canvas=null,this.baseTexture=null,this.texture=null,this.textureFrame=null,this.context=null,this.font="14px Courier",this.columnWidth=100,this.lineHeight=16,this.renderShadow=!0,this.currentX=0,this.currentY=0,this.currentAlpha=1,this.dirty=!1},b.Utils.Debug.prototype={boot:function(){this.game.renderType===b.CANVAS?this.context=this.game.context:(this.canvas=b.Canvas.create(this.game.width,this.game.height,"",!0),this.context=this.canvas.getContext("2d"),this.baseTexture=new PIXI.BaseTexture(this.canvas),this.texture=new PIXI.Texture(this.baseTexture),this.textureFrame=new b.Frame(0,0,0,this.game.width,this.game.height,"debug",this.game.rnd.uuid()),this.sprite=this.game.make.image(0,0,this.texture,this.textureFrame),this.game.stage.addChild(this.sprite))},preUpdate:function(){this.dirty&&this.sprite&&(this.context.clearRect(0,0,this.game.width,this.game.height),this.dirty=!1)},start:function(a,b,c,d){"number"!=typeof a&&(a=0),"number"!=typeof b&&(b=0),c=c||"rgb(255,255,255)","undefined"==typeof d&&(d=0),this.currentX=a,this.currentY=b,this.currentColor=c,this.currentAlpha=this.context.globalAlpha,this.columnWidth=d,this.sprite&&(this.dirty=!0),this.context.save(),this.context.setTransform(1,0,0,1,0,0),this.context.strokeStyle=c,this.context.fillStyle=c,this.context.font=this.font,this.context.globalAlpha=1},stop:function(){this.context.restore(),this.context.globalAlpha=this.currentAlpha,this.sprite&&PIXI.updateWebGLTexture(this.baseTexture,this.game.renderer.gl)},line:function(){for(var a=this.currentX,b=0;b<arguments.length;b++)this.renderShadow&&(this.context.fillStyle="rgb(0,0,0)",this.context.fillText(arguments[b],a+1,this.currentY+1),this.context.fillStyle=this.currentColor),this.context.fillText(arguments[b],a,this.currentY),a+=this.columnWidth;this.currentY+=this.lineHeight},soundInfo:function(a,b,c,d){this.start(b,c,d),this.line("Sound: "+a.key+" Locked: "+a.game.sound.touchLocked),this.line("Is Ready?: "+this.game.cache.isSoundReady(a.key)+" Pending Playback: "+a.pendingPlayback),this.line("Decoded: "+a.isDecoded+" Decoding: "+a.isDecoding),this.line("Total Duration: "+a.totalDuration+" Playing: "+a.isPlaying),this.line("Time: "+a.currentTime),this.line("Volume: "+a.volume+" Muted: "+a.mute),this.line("WebAudio: "+a.usingWebAudio+" Audio: "+a.usingAudioTag),""!==a.currentMarker&&(this.line("Marker: "+a.currentMarker+" Duration: "+a.duration+" (ms: "+a.durationMS+")"),this.line("Start: "+a.markers[a.currentMarker].start+" Stop: "+a.markers[a.currentMarker].stop),this.line("Position: "+a.position)),this.stop()},cameraInfo:function(a,b,c,d){this.start(b,c,d),this.line("Camera ("+a.width+" x "+a.height+")"),this.line("X: "+a.x+" Y: "+a.y),this.line("Bounds x: "+a.bounds.x+" Y: "+a.bounds.y+" w: "+a.bounds.width+" h: "+a.bounds.height),this.line("View x: "+a.view.x+" Y: "+a.view.y+" w: "+a.view.width+" h: "+a.view.height),this.stop()},timer:function(a,b,c,d){this.start(b,c,d),this.line("Timer (running: "+a.running+" expired: "+a.expired+")"),this.line("Next Tick: "+a.next+" Duration: "+a.duration),this.line("Paused: "+a.paused+" Length: "+a.length),this.stop()},pointer:function(a,b,c,d,e){null!=a&&("undefined"==typeof b&&(b=!1),c=c||"rgba(0,255,0,0.5)",d=d||"rgba(255,0,0,0.5)",(b!==!0||a.isUp!==!0)&&(this.start(a.x,a.y-100,e),this.context.beginPath(),this.context.arc(a.x,a.y,a.circle.radius,0,2*Math.PI),this.context.fillStyle=a.active?c:d,this.context.fill(),this.context.closePath(),this.context.beginPath(),this.context.moveTo(a.positionDown.x,a.positionDown.y),this.context.lineTo(a.position.x,a.position.y),this.context.lineWidth=2,this.context.stroke(),this.context.closePath(),this.line("ID: "+a.id+" Active: "+a.active),this.line("World X: "+a.worldX+" World Y: "+a.worldY),this.line("Screen X: "+a.x+" Screen Y: "+a.y),this.line("Duration: "+a.duration+" ms"),this.line("is Down: "+a.isDown+" is Up: "+a.isUp),this.stop()))},spriteInputInfo:function(a,b,c,d){this.start(b,c,d),this.line("Sprite Input: ("+a.width+" x "+a.height+")"),this.line("x: "+a.input.pointerX().toFixed(1)+" y: "+a.input.pointerY().toFixed(1)),this.line("over: "+a.input.pointerOver()+" duration: "+a.input.overDuration().toFixed(0)),this.line("down: "+a.input.pointerDown()+" duration: "+a.input.downDuration().toFixed(0)),this.line("just over: "+a.input.justOver()+" just out: "+a.input.justOut()),this.stop()},key:function(a,b,c,d){this.start(b,c,d,150),this.line("Key:",a.keyCode,"isDown:",a.isDown),this.line("justPressed:",a.justPressed(),"justReleased:",a.justReleased()),this.line("Time Down:",a.timeDown.toFixed(0),"duration:",a.duration.toFixed(0)),this.stop()},inputInfo:function(a,b,c){this.start(a,b,c),this.line("Input"),this.line("X: "+this.game.input.x+" Y: "+this.game.input.y),this.line("World X: "+this.game.input.worldX+" World Y: "+this.game.input.worldY),this.line("Scale X: "+this.game.input.scale.x.toFixed(1)+" Scale Y: "+this.game.input.scale.x.toFixed(1)),this.line("Screen X: "+this.game.input.activePointer.screenX+" Screen Y: "+this.game.input.activePointer.screenY),this.stop()},spriteBounds:function(a,b,c){var d=a.getBounds();d.x+=this.game.camera.x,d.y+=this.game.camera.y,this.rectangle(d,b,c)},spriteInfo:function(a,b,c,d){this.start(b,c,d),this.line("Sprite:  ("+a.width+" x "+a.height+") anchor: "+a.anchor.x+" x "+a.anchor.y),this.line("x: "+a.x.toFixed(1)+" y: "+a.y.toFixed(1)),this.line("angle: "+a.angle.toFixed(1)+" rotation: "+a.rotation.toFixed(1)),this.line("visible: "+a.visible+" in camera: "+a.inCamera),this.stop()},spriteCoords:function(a,b,c,d){this.start(b,c,d,100),a.name&&this.line(a.name),this.line("x:",a.x.toFixed(2),"y:",a.y.toFixed(2)),this.line("pos x:",a.position.x.toFixed(2),"pos y:",a.position.y.toFixed(2)),this.line("world x:",a.world.x.toFixed(2),"world y:",a.world.y.toFixed(2)),this.stop()
},lineInfo:function(a,b,c,d){this.start(b,c,d,80),this.line("start.x:",a.start.x.toFixed(2),"start.y:",a.start.y.toFixed(2)),this.line("end.x:",a.end.x.toFixed(2),"end.y:",a.end.y.toFixed(2)),this.line("length:",a.length.toFixed(2),"angle:",a.angle),this.stop()},pixel:function(a,b,c,d){d=d||2,this.start(),this.context.fillStyle=c,this.context.fillRect(a,b,d,d),this.stop()},geom:function(a,c,d,e){"undefined"==typeof d&&(d=!0),"undefined"==typeof e&&(e=0),c=c||"rgba(0,255,0,0.4)",this.start(),this.context.fillStyle=c,this.context.strokeStyle=c,a instanceof b.Rectangle||1===e?d?this.context.fillRect(a.x-this.game.camera.x,a.y-this.game.camera.y,a.width,a.height):this.context.strokeRect(a.x-this.game.camera.x,a.y-this.game.camera.y,a.width,a.height):a instanceof b.Circle||2===e?(this.context.beginPath(),this.context.arc(a.x-this.game.camera.x,a.y-this.game.camera.y,a.radius,0,2*Math.PI,!1),this.context.closePath(),d?this.context.fill():this.context.stroke()):a instanceof b.Point||3===e?this.context.fillRect(a.x-this.game.camera.x,a.y-this.game.camera.y,4,4):(a instanceof b.Line||4===e)&&(this.context.lineWidth=1,this.context.beginPath(),this.context.moveTo(a.start.x+.5-this.game.camera.x,a.start.y+.5-this.game.camera.y),this.context.lineTo(a.end.x+.5-this.game.camera.x,a.end.y+.5-this.game.camera.y),this.context.closePath(),this.context.stroke()),this.stop()},rectangle:function(a,b,c){"undefined"==typeof c&&(c=!0),b=b||"rgba(0, 255, 0, 0.4)",this.start(),c?(this.context.fillStyle=b,this.context.fillRect(a.x-this.game.camera.x,a.y-this.game.camera.y,a.width,a.height)):(this.context.strokeStyle=b,this.context.strokeRect(a.x-this.game.camera.x,a.y-this.game.camera.y,a.width,a.height)),this.stop()},text:function(a,b,c,d,e){d=d||"rgb(255,255,255)",e=e||"16px Courier",this.start(),this.context.font=e,this.renderShadow&&(this.context.fillStyle="rgb(0,0,0)",this.context.fillText(a,b+1,c+1)),this.context.fillStyle=d,this.context.fillText(a,b,c),this.stop()},quadTree:function(a,b){b=b||"rgba(255,0,0,0.3)",this.start();var c=a.bounds;if(0===a.nodes.length){this.context.strokeStyle=b,this.context.strokeRect(c.x,c.y,c.width,c.height),this.text("size: "+a.objects.length,c.x+4,c.y+16,"rgb(0,200,0)","12px Courier"),this.context.strokeStyle="rgb(0,255,0)";for(var d=0;d<a.objects.length;d++)this.context.strokeRect(a.objects[d].x,a.objects[d].y,a.objects[d].width,a.objects[d].height)}else for(var d=0;d<a.nodes.length;d++)this.quadTree(a.nodes[d]);this.stop()},body:function(a,c,d){a.body&&(a.body.type===b.Physics.ARCADE?(this.start(),b.Physics.Arcade.Body.render(this.context,a.body,c,d),this.stop()):a.body.type===b.Physics.NINJA&&(this.start(),b.Physics.Ninja.Body.render(this.context,a.body,c,d),this.stop()))},bodyInfo:function(a,c,d,e){a.body&&a.body.type===b.Physics.ARCADE&&(this.start(c,d,e,210),b.Physics.Arcade.Body.renderBodyInfo(this,a.body),this.stop())}},b.Utils.Debug.prototype.constructor=b.Utils.Debug,b.Color={packPixel:function(a,c,d,e){return b.Device.LITTLE_ENDIAN?(e<<24|d<<16|c<<8|a)>>>0:(a<<24|c<<16|d<<8|e)>>>0},unpackPixel:function(a,c,d,e){return("undefined"==typeof c||null===c)&&(c=b.Color.createColor()),("undefined"==typeof d||null===d)&&(d=!1),("undefined"==typeof e||null===e)&&(e=!1),b.Device.LITTLE_ENDIAN?(c.a=(4278190080&a)>>>24,c.b=(16711680&a)>>>16,c.g=(65280&a)>>>8,c.r=255&a):(c.r=(4278190080&a)>>>24,c.g=(16711680&a)>>>16,c.b=(65280&a)>>>8,c.a=255&a),c.color=a,c.rgba="rgba("+c.r+","+c.g+","+c.b+","+c.a/255+")",d&&b.Color.RGBtoHSL(c.r,c.g,c.b,c),e&&b.Color.RGBtoHSV(c.r,c.g,c.b,c),c},fromRGBA:function(a,c){return c||(c=b.Color.createColor()),c.r=(4278190080&a)>>>24,c.g=(16711680&a)>>>16,c.b=(65280&a)>>>8,c.a=255&a,c.rgba="rgba("+c.r+","+c.g+","+c.b+","+c.a+")",c},toRGBA:function(a,b,c,d){return a<<24|b<<16|c<<8|d},RGBtoHSL:function(a,c,d,e){e||(e=b.Color.createColor(a,c,d,1)),a/=255,c/=255,d/=255;var f=Math.min(a,c,d),g=Math.max(a,c,d);if(e.h=0,e.s=0,e.l=(g+f)/2,g!==f){var h=g-f;e.s=e.l>.5?h/(2-g-f):h/(g+f),g===a?e.h=(c-d)/h+(d>c?6:0):g===c?e.h=(d-a)/h+2:g===d&&(e.h=(a-c)/h+4),e.h/=6}return e},HSLtoRGB:function(a,c,d,e){if(e?(e.r=d,e.g=d,e.b=d):e=b.Color.createColor(d,d,d),0!==c){var f=.5>d?d*(1+c):d+c-d*c,g=2*d-f;e.r=b.Color.hueToColor(g,f,a+1/3),e.g=b.Color.hueToColor(g,f,a),e.b=b.Color.hueToColor(g,f,a-1/3)}return e.r=Math.floor(255*e.r|0),e.g=Math.floor(255*e.g|0),e.b=Math.floor(255*e.b|0),b.Color.updateColor(e),e},RGBtoHSV:function(a,c,d,e){e||(e=b.Color.createColor(a,c,d,255)),a/=255,c/=255,d/=255;var f=Math.min(a,c,d),g=Math.max(a,c,d),h=g-f;return e.h=0,e.s=0===g?0:h/g,e.v=g,g!==f&&(g===a?e.h=(c-d)/h+(d>c?6:0):g===c?e.h=(d-a)/h+2:g===d&&(e.h=(a-c)/h+4),e.h/=6),e},HSVtoRGB:function(a,c,d,e){"undefined"==typeof e&&(e=b.Color.createColor(0,0,0,1,a,c,0,d));var f,g,h,i=Math.floor(6*a),j=6*a-i,k=d*(1-c),l=d*(1-j*c),m=d*(1-(1-j)*c);switch(i%6){case 0:f=d,g=m,h=k;break;case 1:f=l,g=d,h=k;break;case 2:f=k,g=d,h=m;break;case 3:f=k,g=l,h=d;break;case 4:f=m,g=k,h=d;break;case 5:f=d,g=k,h=l}return e.r=Math.floor(255*f),e.g=Math.floor(255*g),e.b=Math.floor(255*h),b.Color.updateColor(e),e},hueToColor:function(a,b,c){return 0>c&&(c+=1),c>1&&(c-=1),1/6>c?a+6*(b-a)*c:.5>c?b:2/3>c?a+(b-a)*(2/3-c)*6:a},createColor:function(a,b,c,d,e,f,g,h){var i={r:a||0,g:b||0,b:c||0,a:d||1,h:e||0,s:f||0,l:g||0,v:h||0,color:0};return i.rgba="rgba("+i.r+","+i.g+","+i.b+","+i.a+")",i},updateColor:function(a){return a.rgba="rgba("+a.r+","+a.g+","+a.b+","+a.a+")",a},getColor32:function(a,b,c,d){return a<<24|b<<16|c<<8|d},getColor:function(a,b,c){return a<<16|b<<8|c},RGBtoString:function(a,c,d,e,f){return"undefined"==typeof e&&(e=255),"undefined"==typeof f&&(f="#"),"#"===f?"#"+((1<<24)+(a<<16)+(c<<8)+d).toString(16).slice(1):"0x"+b.Color.componentToHex(e)+b.Color.componentToHex(a)+b.Color.componentToHex(c)+b.Color.componentToHex(d)},hexToRGB:function(a){var c=b.Color.hexToColor(a);return c?b.Color.getColor32(c.a,c.r,c.g,c.b):void 0},hexToColor:function(a,c){c||(c=b.Color.createColor());var d=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;a=a.replace(d,function(a,b,c,d){return b+b+c+c+d+d});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return e&&(c.r=parseInt(e[1],16),c.g=parseInt(e[2],16),c.b=parseInt(e[3],16)),c},componentToHex:function(a){var b=a.toString(16);return 1==b.length?"0"+b:b},HSVColorWheel:function(a,c){"undefined"==typeof a&&(a=1),"undefined"==typeof c&&(c=1);for(var d=[],e=0;359>=e;e++)d.push(b.Color.HSVtoRGB(e/359,a,c));return d},HSLColorWheel:function(a,c){"undefined"==typeof a&&(a=.5),"undefined"==typeof c&&(c=.5);for(var d=[],e=0;359>=e;e++)d.push(b.Color.HSLtoRGB(e/359,a,c));return d},interpolateColor:function(a,c,d,e,f){"undefined"==typeof f&&(f=255);var g=b.Color.getRGB(a),h=b.Color.getRGB(c),i=(h.red-g.red)*e/d+g.red,j=(h.green-g.green)*e/d+g.green,k=(h.blue-g.blue)*e/d+g.blue;return b.Color.getColor32(f,i,j,k)},interpolateColorWithRGB:function(a,c,d,e,f,g){var h=b.Color.getRGB(a),i=(c-h.red)*g/f+h.red,j=(d-h.green)*g/f+h.green,k=(e-h.blue)*g/f+h.blue;return b.Color.getColor(i,j,k)},interpolateRGB:function(a,c,d,e,f,g,h,i){var j=(e-a)*i/h+a,k=(f-c)*i/h+c,l=(g-d)*i/h+d;return b.Color.getColor(j,k,l)},getRandomColor:function(a,c,d){if("undefined"==typeof a&&(a=0),"undefined"==typeof c&&(c=255),"undefined"==typeof d&&(d=255),c>255||a>c)return b.Color.getColor(255,255,255);var e=a+Math.round(Math.random()*(c-a)),f=a+Math.round(Math.random()*(c-a)),g=a+Math.round(Math.random()*(c-a));return b.Color.getColor32(d,e,f,g)},getRGB:function(a){return a>16777215?{alpha:a>>>24,red:a>>16&255,green:a>>8&255,blue:255&a,a:a>>>24,r:a>>16&255,g:a>>8&255,b:255&a}:{alpha:255,red:a>>16&255,green:a>>8&255,blue:255&a,a:255,r:a>>16&255,g:a>>8&255,b:255&a}},getWebRGB:function(a){if("object"==typeof a)return"rgba("+a.r.toString()+","+a.g.toString()+","+a.b.toString()+","+(a.a/255).toString()+")";var c=b.Color.getRGB(a);return"rgba("+c.r.toString()+","+c.g.toString()+","+c.b.toString()+","+(c.a/255).toString()+")"},getAlpha:function(a){return a>>>24},getAlphaFloat:function(a){return(a>>>24)/255},getRed:function(a){return a>>16&255},getGreen:function(a){return a>>8&255},getBlue:function(a){return 255&a},getColorInfo:function(a){var c=b.Color.getRGB(a),d=b.Color.RGBtoHexstring(a)+"\n";return d=d.concat("Alpha: "+c.alpha+" Red: "+c.red+" Green: "+c.green+" Blue: "+c.blue)+"\n"},RGBtoHexstring:function(a){var c=b.Color.getRGB(a);return"0x"+b.Color.colorToHexstring(c.alpha)+b.Color.colorToHexstring(c.red)+b.Color.colorToHexstring(c.green)+b.Color.colorToHexstring(c.blue)},RGBtoWebstring:function(a){var c=b.Color.getRGB(a);return"#"+b.Color.colorToHexstring(c.red)+b.Color.colorToHexstring(c.green)+b.Color.colorToHexstring(c.blue)},colorToHexstring:function(a){var b="0123456789ABCDEF",c=a%16,d=(a-c)/16,e=b.charAt(d)+b.charAt(c);return e}},b.Physics=function(a,b){b=b||{},this.game=a,this.config=b,this.arcade=null,this.p2=null,this.ninja=null,this.box2d=null,this.chipmunk=null,this.parseConfig()},b.Physics.ARCADE=0,b.Physics.P2JS=1,b.Physics.NINJA=2,b.Physics.BOX2D=3,b.Physics.CHIPMUNK=5,b.Physics.prototype={parseConfig:function(){this.config.hasOwnProperty("arcade")&&this.config.arcade!==!0||!b.Physics.hasOwnProperty("Arcade")||(this.arcade=new b.Physics.Arcade(this.game),this.game.time.deltaCap=.2),this.config.hasOwnProperty("ninja")&&this.config.ninja===!0&&b.Physics.hasOwnProperty("Ninja")&&(this.ninja=new b.Physics.Ninja(this.game)),this.config.hasOwnProperty("p2")&&this.config.p2===!0&&b.Physics.hasOwnProperty("P2")&&(this.p2=new b.Physics.P2(this.game,this.config))},startSystem:function(a){if(a===b.Physics.ARCADE?this.arcade=new b.Physics.Arcade(this.game):a===b.Physics.P2JS&&(this.p2=new b.Physics.P2(this.game,this.config)),a===b.Physics.NINJA)this.ninja=new b.Physics.Ninja(this.game);else{if(a===b.Physics.BOX2D&&null===this.box2d)throw new Error("The Box2D physics system has not been implemented yet.");if(a===b.Physics.CHIPMUNK&&null===this.chipmunk)throw new Error("The Chipmunk physics system has not been implemented yet.")}this.setBoundsToWorld()},enable:function(a,c,d){"undefined"==typeof c&&(c=b.Physics.ARCADE),"undefined"==typeof d&&(d=!1),c===b.Physics.ARCADE?this.arcade.enable(a):c===b.Physics.P2JS&&this.p2?this.p2.enable(a,d):c===b.Physics.NINJA&&this.ninja&&this.ninja.enableAABB(a)},preUpdate:function(){this.p2&&this.p2.preUpdate()},update:function(){this.p2&&this.p2.update()},setBoundsToWorld:function(){this.arcade&&this.arcade.setBoundsToWorld(),this.ninja&&this.ninja.setBoundsToWorld(),this.p2&&this.p2.setBoundsToWorld()},clear:function(){this.p2&&this.p2.clear()},destroy:function(){this.p2&&this.p2.destroy(),this.arcade=null,this.ninja=null,this.p2=null}},b.Physics.prototype.constructor=b.Physics,b.Physics.Arcade=function(a){this.game=a,this.gravity=new b.Point,this.bounds=new b.Rectangle(0,0,a.world.width,a.world.height),this.checkCollision={up:!0,down:!0,left:!0,right:!0},this.maxObjects=10,this.maxLevels=4,this.OVERLAP_BIAS=4,this.TILE_BIAS=16,this.forceX=!1,this.quadTree=new b.QuadTree(this.game.world.bounds.x,this.game.world.bounds.y,this.game.world.bounds.width,this.game.world.bounds.height,this.maxObjects,this.maxLevels),this._overlap=0,this._maxOverlap=0,this._velocity1=0,this._velocity2=0,this._newVelocity1=0,this._newVelocity2=0,this._average=0,this._mapData=[],this._result=!1,this._total=0,this._angle=0,this._dx=0,this._dy=0},b.Physics.Arcade.prototype.constructor=b.Physics.Arcade,b.Physics.Arcade.prototype={setBounds:function(a,b,c,d){this.bounds.setTo(a,b,c,d)},setBoundsToWorld:function(){this.bounds.setTo(this.game.world.bounds.x,this.game.world.bounds.y,this.game.world.bounds.width,this.game.world.bounds.height)},enable:function(a,c){"undefined"==typeof c&&(c=!0);var d=1;if(Array.isArray(a))for(d=a.length;d--;)a[d]instanceof b.Group?this.enable(a[d].children,c):(this.enableBody(a[d]),c&&a[d].hasOwnProperty("children")&&a[d].children.length>0&&this.enable(a[d],!0));else a instanceof b.Group?this.enable(a.children,c):(this.enableBody(a),c&&a.hasOwnProperty("children")&&a.children.length>0&&this.enable(a.children,!0))},enableBody:function(a){a.hasOwnProperty("body")&&null===a.body&&(a.body=new b.Physics.Arcade.Body(a))},updateMotion:function(a){this._velocityDelta=this.computeVelocity(0,a,a.angularVelocity,a.angularAcceleration,a.angularDrag,a.maxAngular)-a.angularVelocity,a.angularVelocity+=this._velocityDelta,a.rotation+=a.angularVelocity*this.game.time.physicsElapsed,a.velocity.x=this.computeVelocity(1,a,a.velocity.x,a.acceleration.x,a.drag.x,a.maxVelocity.x),a.velocity.y=this.computeVelocity(2,a,a.velocity.y,a.acceleration.y,a.drag.y,a.maxVelocity.y)},computeVelocity:function(a,b,c,d,e,f){return f=f||1e4,1==a&&b.allowGravity?c+=(this.gravity.x+b.gravity.x)*this.game.time.physicsElapsed:2==a&&b.allowGravity&&(c+=(this.gravity.y+b.gravity.y)*this.game.time.physicsElapsed),d?c+=d*this.game.time.physicsElapsed:e&&(this._drag=e*this.game.time.physicsElapsed,c-this._drag>0?c-=this._drag:c+this._drag<0?c+=this._drag:c=0),c>f?c=f:-f>c&&(c=-f),c},overlap:function(a,b,c,d,e){if(c=c||null,d=d||null,e=e||c,this._result=!1,this._total=0,Array.isArray(b))for(var f=0,g=b.length;g>f;f++)this.collideHandler(a,b[f],c,d,e,!0);else this.collideHandler(a,b,c,d,e,!0);return this._total>0},collide:function(a,b,c,d,e){if(c=c||null,d=d||null,e=e||c,this._result=!1,this._total=0,Array.isArray(b))for(var f=0,g=b.length;g>f;f++)this.collideHandler(a,b[f],c,d,e,!1);else this.collideHandler(a,b,c,d,e,!1);return this._total>0},collideHandler:function(a,c,d,e,f,g){return"undefined"!=typeof c||a.type!==b.GROUP&&a.type!==b.EMITTER?void(a&&c&&a.exists&&c.exists&&(a.type==b.SPRITE||a.type==b.TILESPRITE?c.type==b.SPRITE||c.type==b.TILESPRITE?this.collideSpriteVsSprite(a,c,d,e,f,g):c.type==b.GROUP||c.type==b.EMITTER?this.collideSpriteVsGroup(a,c,d,e,f,g):c.type==b.TILEMAPLAYER&&this.collideSpriteVsTilemapLayer(a,c,d,e,f):a.type==b.GROUP?c.type==b.SPRITE||c.type==b.TILESPRITE?this.collideSpriteVsGroup(c,a,d,e,f,g):c.type==b.GROUP||c.type==b.EMITTER?this.collideGroupVsGroup(a,c,d,e,f,g):c.type==b.TILEMAPLAYER&&this.collideGroupVsTilemapLayer(a,c,d,e,f):a.type==b.TILEMAPLAYER?c.type==b.SPRITE||c.type==b.TILESPRITE?this.collideSpriteVsTilemapLayer(c,a,d,e,f):(c.type==b.GROUP||c.type==b.EMITTER)&&this.collideGroupVsTilemapLayer(c,a,d,e,f):a.type==b.EMITTER&&(c.type==b.SPRITE||c.type==b.TILESPRITE?this.collideSpriteVsGroup(c,a,d,e,f,g):c.type==b.GROUP||c.type==b.EMITTER?this.collideGroupVsGroup(a,c,d,e,f,g):c.type==b.TILEMAPLAYER&&this.collideGroupVsTilemapLayer(a,c,d,e,f)))):void this.collideGroupVsSelf(a,d,e,f,g)},collideSpriteVsSprite:function(a,b,c,d,e,f){return a.body&&b.body?(this.separate(a.body,b.body,d,e,f)&&(c&&c.call(e,a,b),this._total++),!0):!1},collideSpriteVsGroup:function(a,b,c,d,e,f){if(0!==b.length&&a.body){this.quadTree.clear(),this.quadTree.reset(this.game.world.bounds.x,this.game.world.bounds.y,this.game.world.bounds.width,this.game.world.bounds.height,this.maxObjects,this.maxLevels),this.quadTree.populate(b),this._potentials=this.quadTree.retrieve(a);for(var g=0,h=this._potentials.length;h>g;g++)this.separate(a.body,this._potentials[g],d,e,f)&&(c&&c.call(e,a,this._potentials[g].sprite),this._total++)}},collideGroupVsSelf:function(a,b,c,d,e){if(0!==a.length)for(var f=a.children.length,g=0;f>g;g++)for(var h=g+1;f>=h;h++)a.children[g]&&a.children[h]&&a.children[g].exists&&a.children[h].exists&&this.collideSpriteVsSprite(a.children[g],a.children[h],b,c,d,e)},collideGroupVsGroup:function(a,b,c,d,e,f){if(0!==a.length&&0!==b.length)for(var g=0,h=a.children.length;h>g;g++)a.children[g].exists&&this.collideSpriteVsGroup(a.children[g],b,c,d,e,f)},collideSpriteVsTilemapLayer:function(a,b,c,d,e){if(a.body&&(this._mapData=b.getTiles(a.body.position.x-a.body.tilePadding.x,a.body.position.y-a.body.tilePadding.y,a.body.width+a.body.tilePadding.x,a.body.height+a.body.tilePadding.y,!1,!1),0!==this._mapData.length))for(var f=0;f<this._mapData.length;f++)d?d.call(e,a,this._mapData[f])&&this.separateTile(f,a.body,this._mapData[f])&&(this._total++,c&&c.call(e,a,this._mapData[f])):this.separateTile(f,a.body,this._mapData[f])&&(this._total++,c&&c.call(e,a,this._mapData[f]))},collideGroupVsTilemapLayer:function(a,b,c,d,e){if(0!==a.length)for(var f=0,g=a.children.length;g>f;f++)a.children[f].exists&&this.collideSpriteVsTilemapLayer(a.children[f],b,c,d,e)},separate:function(a,b,c,d,e){return a.enable&&b.enable&&this.intersects(a,b)?c&&c.call(d,a.sprite,b.sprite)===!1?!1:e?!0:(this._result=this.forceX||Math.abs(this.gravity.y+a.gravity.y)<Math.abs(this.gravity.x+a.gravity.x)?this.separateX(a,b,e)||this.separateY(a,b,e):this.separateY(a,b,e)||this.separateX(a,b,e),this._result):!1},intersects:function(a,b){return a.right<=b.position.x?!1:a.bottom<=b.position.y?!1:a.position.x>=b.right?!1:a.position.y>=b.bottom?!1:!0},separateX:function(a,b,c){return a.immovable&&b.immovable?!1:(this._overlap=0,this.intersects(a,b)&&(this._maxOverlap=a.deltaAbsX()+b.deltaAbsX()+this.OVERLAP_BIAS,0===a.deltaX()&&0===b.deltaX()?(a.embedded=!0,b.embedded=!0):a.deltaX()>b.deltaX()?(this._overlap=a.right-b.x,this._overlap>this._maxOverlap||a.checkCollision.right===!1||b.checkCollision.left===!1?this._overlap=0:(a.touching.none=!1,a.touching.right=!0,b.touching.none=!1,b.touching.left=!0)):a.deltaX()<b.deltaX()&&(this._overlap=a.x-b.width-b.x,-this._overlap>this._maxOverlap||a.checkCollision.left===!1||b.checkCollision.right===!1?this._overlap=0:(a.touching.none=!1,a.touching.left=!0,b.touching.none=!1,b.touching.right=!0)),0!==this._overlap)?(a.overlapX=this._overlap,b.overlapX=this._overlap,c||a.customSeparateX||b.customSeparateX?!0:(this._velocity1=a.velocity.x,this._velocity2=b.velocity.x,a.immovable||b.immovable?a.immovable?b.immovable||(b.x+=this._overlap,b.velocity.x=this._velocity1-this._velocity2*b.bounce.x):(a.x=a.x-this._overlap,a.velocity.x=this._velocity2-this._velocity1*a.bounce.x):(this._overlap*=.5,a.x=a.x-this._overlap,b.x+=this._overlap,this._newVelocity1=Math.sqrt(this._velocity2*this._velocity2*b.mass/a.mass)*(this._velocity2>0?1:-1),this._newVelocity2=Math.sqrt(this._velocity1*this._velocity1*a.mass/b.mass)*(this._velocity1>0?1:-1),this._average=.5*(this._newVelocity1+this._newVelocity2),this._newVelocity1-=this._average,this._newVelocity2-=this._average,a.velocity.x=this._average+this._newVelocity1*a.bounce.x,b.velocity.x=this._average+this._newVelocity2*b.bounce.x),!0)):!1)},separateY:function(a,b,c){return a.immovable&&b.immovable?!1:(this._overlap=0,this.intersects(a,b)&&(this._maxOverlap=a.deltaAbsY()+b.deltaAbsY()+this.OVERLAP_BIAS,0===a.deltaY()&&0===b.deltaY()?(a.embedded=!0,b.embedded=!0):a.deltaY()>b.deltaY()?(this._overlap=a.bottom-b.y,this._overlap>this._maxOverlap||a.checkCollision.down===!1||b.checkCollision.up===!1?this._overlap=0:(a.touching.none=!1,a.touching.down=!0,b.touching.none=!1,b.touching.up=!0)):a.deltaY()<b.deltaY()&&(this._overlap=a.y-b.bottom,-this._overlap>this._maxOverlap||a.checkCollision.up===!1||b.checkCollision.down===!1?this._overlap=0:(a.touching.none=!1,a.touching.up=!0,b.touching.none=!1,b.touching.down=!0)),0!==this._overlap)?(a.overlapY=this._overlap,b.overlapY=this._overlap,c||a.customSeparateY||b.customSeparateY?!0:(this._velocity1=a.velocity.y,this._velocity2=b.velocity.y,a.immovable||b.immovable?a.immovable?b.immovable||(b.y+=this._overlap,b.velocity.y=this._velocity1-this._velocity2*b.bounce.y,a.moves&&(b.x+=a.x-a.prev.x)):(a.y=a.y-this._overlap,a.velocity.y=this._velocity2-this._velocity1*a.bounce.y,b.moves&&(a.x+=b.x-b.prev.x)):(this._overlap*=.5,a.y=a.y-this._overlap,b.y+=this._overlap,this._newVelocity1=Math.sqrt(this._velocity2*this._velocity2*b.mass/a.mass)*(this._velocity2>0?1:-1),this._newVelocity2=Math.sqrt(this._velocity1*this._velocity1*a.mass/b.mass)*(this._velocity1>0?1:-1),this._average=.5*(this._newVelocity1+this._newVelocity2),this._newVelocity1-=this._average,this._newVelocity2-=this._average,a.velocity.y=this._average+this._newVelocity1*a.bounce.y,b.velocity.y=this._average+this._newVelocity2*b.bounce.y),!0)):!1)},separateTile:function(a,b,c){if(!b.enable||!c.intersects(b.position.x,b.position.y,b.right,b.bottom))return!1;if(c.collisionCallback&&!c.collisionCallback.call(c.collisionCallbackContext,b.sprite,c))return!1;if(c.layer.callbacks[c.index]&&!c.layer.callbacks[c.index].callback.call(c.layer.callbacks[c.index].callbackContext,b.sprite,c))return!1;if(!(c.faceLeft||c.faceRight||c.faceTop||c.faceBottom))return!1;var d=0,e=0,f=0,g=1;if(b.deltaAbsX()>b.deltaAbsY()?f=-1:b.deltaAbsX()<b.deltaAbsY()&&(g=-1),0!==b.deltaX()&&0!==b.deltaY()&&(c.faceLeft||c.faceRight)&&(c.faceTop||c.faceBottom)&&(f=Math.min(Math.abs(b.position.x-c.right),Math.abs(b.right-c.left)),g=Math.min(Math.abs(b.position.y-c.bottom),Math.abs(b.bottom-c.top))),g>f){if((c.faceLeft||c.faceRight)&&(d=this.tileCheckX(b,c),0!==d&&!c.intersects(b.position.x,b.position.y,b.right,b.bottom)))return!0;(c.faceTop||c.faceBottom)&&(e=this.tileCheckY(b,c))}else{if((c.faceTop||c.faceBottom)&&(e=this.tileCheckY(b,c),0!==e&&!c.intersects(b.position.x,b.position.y,b.right,b.bottom)))return!0;(c.faceLeft||c.faceRight)&&(d=this.tileCheckX(b,c))}return 0!==d||0!==e},tileCheckX:function(a,b){var c=0;return a.deltaX()<0&&!a.blocked.left&&b.collideRight&&a.checkCollision.left?b.faceRight&&a.x<b.right&&(c=a.x-b.right,c<-this.TILE_BIAS&&(c=0)):a.deltaX()>0&&!a.blocked.right&&b.collideLeft&&a.checkCollision.right&&b.faceLeft&&a.right>b.left&&(c=a.right-b.left,c>this.TILE_BIAS&&(c=0)),0!==c&&this.processTileSeparationX(a,c),c},tileCheckY:function(a,b){var c=0;return a.deltaY()<0&&!a.blocked.up&&b.collideDown&&a.checkCollision.up?b.faceBottom&&a.y<b.bottom&&(c=a.y-b.bottom,c<-this.TILE_BIAS&&(c=0)):a.deltaY()>0&&!a.blocked.down&&b.collideUp&&a.checkCollision.down&&b.faceTop&&a.bottom>b.top&&(c=a.bottom-b.top,c>this.TILE_BIAS&&(c=0)),0!==c&&this.processTileSeparationY(a,c),c},processTileSeparationX:function(a,b){0>b?a.blocked.left=!0:b>0&&(a.blocked.right=!0),a.position.x-=b,a.velocity.x=0===a.bounce.x?0:-a.velocity.x*a.bounce.x},processTileSeparationY:function(a,b){0>b?a.blocked.up=!0:b>0&&(a.blocked.down=!0),a.position.y-=b,a.velocity.y=0===a.bounce.y?0:-a.velocity.y*a.bounce.y},getObjectsUnderPointer:function(a,c,d,e){if(0!==c.length&&a.exists){this.quadTree.clear(),this.quadTree.reset(this.game.world.bounds.x,this.game.world.bounds.y,this.game.world.bounds.width,this.game.world.bounds.height,this.maxObjects,this.maxLevels),this.quadTree.populate(c);var f=new b.Rectangle(a.x,a.y,1,1),g=[];this._potentials=this.quadTree.retrieve(f);for(var h=0,i=this._potentials.length;i>h;h++)this._potentials[h].hitTest(a.x,a.y)&&(d&&d.call(e,a,this._potentials[h].sprite),g.push(this._potentials[h].sprite));return g}},moveToObject:function(a,b,c,d){return"undefined"==typeof c&&(c=60),"undefined"==typeof d&&(d=0),this._angle=Math.atan2(b.y-a.y,b.x-a.x),d>0&&(c=this.distanceBetween(a,b)/(d/1e3)),a.body.velocity.x=Math.cos(this._angle)*c,a.body.velocity.y=Math.sin(this._angle)*c,this._angle},moveToPointer:function(a,b,c,d){return"undefined"==typeof b&&(b=60),c=c||this.game.input.activePointer,"undefined"==typeof d&&(d=0),this._angle=this.angleToPointer(a,c),d>0&&(b=this.distanceToPointer(a,c)/(d/1e3)),a.body.velocity.x=Math.cos(this._angle)*b,a.body.velocity.y=Math.sin(this._angle)*b,this._angle},moveToXY:function(a,b,c,d,e){return"undefined"==typeof d&&(d=60),"undefined"==typeof e&&(e=0),this._angle=Math.atan2(c-a.y,b-a.x),e>0&&(d=this.distanceToXY(a,b,c)/(e/1e3)),a.body.velocity.x=Math.cos(this._angle)*d,a.body.velocity.y=Math.sin(this._angle)*d,this._angle},velocityFromAngle:function(a,c,d){return"undefined"==typeof c&&(c=60),d=d||new b.Point,d.setTo(Math.cos(this.game.math.degToRad(a))*c,Math.sin(this.game.math.degToRad(a))*c)},velocityFromRotation:function(a,c,d){return"undefined"==typeof c&&(c=60),d=d||new b.Point,d.setTo(Math.cos(a)*c,Math.sin(a)*c)},accelerationFromRotation:function(a,c,d){return"undefined"==typeof c&&(c=60),d=d||new b.Point,d.setTo(Math.cos(a)*c,Math.sin(a)*c)},accelerateToObject:function(a,b,c,d,e){return"undefined"==typeof c&&(c=60),"undefined"==typeof d&&(d=1e3),"undefined"==typeof e&&(e=1e3),this._angle=this.angleBetween(a,b),a.body.acceleration.setTo(Math.cos(this._angle)*c,Math.sin(this._angle)*c),a.body.maxVelocity.setTo(d,e),this._angle},accelerateToPointer:function(a,b,c,d,e){return"undefined"==typeof c&&(c=60),"undefined"==typeof b&&(b=this.game.input.activePointer),"undefined"==typeof d&&(d=1e3),"undefined"==typeof e&&(e=1e3),this._angle=this.angleToPointer(a,b),a.body.acceleration.setTo(Math.cos(this._angle)*c,Math.sin(this._angle)*c),a.body.maxVelocity.setTo(d,e),this._angle},accelerateToXY:function(a,b,c,d,e,f){return"undefined"==typeof d&&(d=60),"undefined"==typeof e&&(e=1e3),"undefined"==typeof f&&(f=1e3),this._angle=this.angleToXY(a,b,c),a.body.acceleration.setTo(Math.cos(this._angle)*d,Math.sin(this._angle)*d),a.body.maxVelocity.setTo(e,f),this._angle},distanceBetween:function(a,b){return this._dx=a.x-b.x,this._dy=a.y-b.y,Math.sqrt(this._dx*this._dx+this._dy*this._dy)},distanceToXY:function(a,b,c){return this._dx=a.x-b,this._dy=a.y-c,Math.sqrt(this._dx*this._dx+this._dy*this._dy)},distanceToPointer:function(a,b){return b=b||this.game.input.activePointer,this._dx=a.x-b.x,this._dy=a.y-b.y,Math.sqrt(this._dx*this._dx+this._dy*this._dy)},angleBetween:function(a,b){return this._dx=b.x-a.x,this._dy=b.y-a.y,Math.atan2(this._dy,this._dx)},angleToXY:function(a,b,c){return this._dx=b-a.x,this._dy=c-a.y,Math.atan2(this._dy,this._dx)},angleToPointer:function(a,b){return b=b||this.game.input.activePointer,this._dx=b.worldX-a.x,this._dy=b.worldY-a.y,Math.atan2(this._dy,this._dx)}},b.Physics.Arcade.Body=function(a){this.sprite=a,this.game=a.game,this.type=b.Physics.ARCADE,this.enable=!0,this.offset=new b.Point,this.position=new b.Point(a.x,a.y),this.prev=new b.Point(this.position.x,this.position.y),this.allowRotation=!0,this.rotation=a.rotation,this.preRotation=a.rotation,this.sourceWidth=a.texture.frame.width,this.sourceHeight=a.texture.frame.height,this.width=a.width,this.height=a.height,this.halfWidth=Math.abs(a.width/2),this.halfHeight=Math.abs(a.height/2),this.center=new b.Point(a.x+this.halfWidth,a.y+this.halfHeight),this.velocity=new b.Point,this.newVelocity=new b.Point(0,0),this.deltaMax=new b.Point(0,0),this.acceleration=new b.Point,this.drag=new b.Point,this.allowGravity=!0,this.gravity=new b.Point(0,0),this.bounce=new b.Point,this.maxVelocity=new b.Point(1e4,1e4),this.angularVelocity=0,this.angularAcceleration=0,this.angularDrag=0,this.maxAngular=1e3,this.mass=1,this.angle=0,this.speed=0,this.facing=b.NONE,this.immovable=!1,this.moves=!0,this.customSeparateX=!1,this.customSeparateY=!1,this.overlapX=0,this.overlapY=0,this.embedded=!1,this.collideWorldBounds=!1,this.checkCollision={none:!1,any:!0,up:!0,down:!0,left:!0,right:!0},this.touching={none:!0,up:!1,down:!1,left:!1,right:!1},this.wasTouching={none:!0,up:!1,down:!1,left:!1,right:!1},this.blocked={up:!1,down:!1,left:!1,right:!1},this.tilePadding=new b.Point,this.phase=0,this._reset=!0,this._sx=a.scale.x,this._sy=a.scale.y,this._dx=0,this._dy=0},b.Physics.Arcade.Body.prototype={updateBounds:function(){var a=Math.abs(this.sprite.scale.x),b=Math.abs(this.sprite.scale.y);(a!==this._sx||b!==this._sy)&&(this.width=this.sourceWidth*a,this.height=this.sourceHeight*b,this.halfWidth=Math.floor(this.width/2),this.halfHeight=Math.floor(this.height/2),this._sx=a,this._sy=b,this.center.setTo(this.position.x+this.halfWidth,this.position.y+this.halfHeight),this._reset=!0)},preUpdate:function(){this.enable&&(this.phase=1,this.wasTouching.none=this.touching.none,this.wasTouching.up=this.touching.up,this.wasTouching.down=this.touching.down,this.wasTouching.left=this.touching.left,this.wasTouching.right=this.touching.right,this.touching.none=!0,this.touching.up=!1,this.touching.down=!1,this.touching.left=!1,this.touching.right=!1,this.blocked.up=!1,this.blocked.down=!1,this.blocked.left=!1,this.blocked.right=!1,this.embedded=!1,this.updateBounds(),this.position.x=this.sprite.world.x-this.sprite.anchor.x*this.width+this.offset.x,this.position.y=this.sprite.world.y-this.sprite.anchor.y*this.height+this.offset.y,this.rotation=this.sprite.angle,this.preRotation=this.rotation,(this._reset||1===this.sprite._cache[4])&&(this.prev.x=this.position.x,this.prev.y=this.position.y),this.moves&&(this.game.physics.arcade.updateMotion(this),this.newVelocity.set(this.velocity.x*this.game.time.physicsElapsed,this.velocity.y*this.game.time.physicsElapsed),this.position.x+=this.newVelocity.x,this.position.y+=this.newVelocity.y,(this.position.x!==this.prev.x||this.position.y!==this.prev.y)&&(this.speed=Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y),this.angle=Math.atan2(this.velocity.y,this.velocity.x)),this.collideWorldBounds&&this.checkWorldBounds()),this._dx=this.deltaX(),this._dy=this.deltaY(),this._reset=!1)},postUpdate:function(){this.enable&&2!==this.phase&&(this.phase=2,this.deltaX()<0?this.facing=b.LEFT:this.deltaX()>0&&(this.facing=b.RIGHT),this.deltaY()<0?this.facing=b.UP:this.deltaY()>0&&(this.facing=b.DOWN),this.moves&&(this._dx=this.deltaX(),this._dy=this.deltaY(),0!==this.deltaMax.x&&0!==this._dx&&(this._dx<0&&this._dx<-this.deltaMax.x?this._dx=-this.deltaMax.x:this._dx>0&&this._dx>this.deltaMax.x&&(this._dx=this.deltaMax.x)),0!==this.deltaMax.y&&0!==this._dy&&(this._dy<0&&this._dy<-this.deltaMax.y?this._dy=-this.deltaMax.y:this._dy>0&&this._dy>this.deltaMax.y&&(this._dy=this.deltaMax.y)),this.sprite.x+=this._dx,this.sprite.y+=this._dy),this.center.setTo(this.position.x+this.halfWidth,this.position.y+this.halfHeight),this.allowRotation&&(this.sprite.angle+=this.deltaZ()),this.prev.x=this.position.x,this.prev.y=this.position.y)},destroy:function(){this.sprite=null},checkWorldBounds:function(){this.position.x<this.game.physics.arcade.bounds.x&&this.game.physics.arcade.checkCollision.left?(this.position.x=this.game.physics.arcade.bounds.x,this.velocity.x*=-this.bounce.x,this.blocked.left=!0):this.right>this.game.physics.arcade.bounds.right&&this.game.physics.arcade.checkCollision.right&&(this.position.x=this.game.physics.arcade.bounds.right-this.width,this.velocity.x*=-this.bounce.x,this.blocked.right=!0),this.position.y<this.game.physics.arcade.bounds.y&&this.game.physics.arcade.checkCollision.up?(this.position.y=this.game.physics.arcade.bounds.y,this.velocity.y*=-this.bounce.y,this.blocked.up=!0):this.bottom>this.game.physics.arcade.bounds.bottom&&this.game.physics.arcade.checkCollision.down&&(this.position.y=this.game.physics.arcade.bounds.bottom-this.height,this.velocity.y*=-this.bounce.y,this.blocked.down=!0)},setSize:function(a,b,c,d){"undefined"==typeof c&&(c=this.offset.x),"undefined"==typeof d&&(d=this.offset.y),this.sourceWidth=a,this.sourceHeight=b,this.width=this.sourceWidth*this._sx,this.height=this.sourceHeight*this._sy,this.halfWidth=Math.floor(this.width/2),this.halfHeight=Math.floor(this.height/2),this.offset.setTo(c,d),this.center.setTo(this.position.x+this.halfWidth,this.position.y+this.halfHeight)},reset:function(a,b){this.velocity.set(0),this.acceleration.set(0),this.angularVelocity=0,this.angularAcceleration=0,this.position.x=a-this.sprite.anchor.x*this.width+this.offset.x,this.position.y=b-this.sprite.anchor.y*this.height+this.offset.y,this.prev.x=this.position.x,this.prev.y=this.position.y,this.rotation=this.sprite.angle,this.preRotation=this.rotation,this._sx=this.sprite.scale.x,this._sy=this.sprite.scale.y,this.center.setTo(this.position.x+this.halfWidth,this.position.y+this.halfHeight)},hitTest:function(a,c){return b.Rectangle.contains(this,a,c)},onFloor:function(){return this.blocked.down},onWall:function(){return this.blocked.left||this.blocked.right},deltaAbsX:function(){return this.deltaX()>0?this.deltaX():-this.deltaX()},deltaAbsY:function(){return this.deltaY()>0?this.deltaY():-this.deltaY()},deltaX:function(){return this.position.x-this.prev.x},deltaY:function(){return this.position.y-this.prev.y},deltaZ:function(){return this.rotation-this.preRotation
}},Object.defineProperty(b.Physics.Arcade.Body.prototype,"bottom",{get:function(){return this.position.y+this.height}}),Object.defineProperty(b.Physics.Arcade.Body.prototype,"right",{get:function(){return this.position.x+this.width}}),Object.defineProperty(b.Physics.Arcade.Body.prototype,"x",{get:function(){return this.position.x},set:function(a){this.position.x=a}}),Object.defineProperty(b.Physics.Arcade.Body.prototype,"y",{get:function(){return this.position.y},set:function(a){this.position.y=a}}),b.Physics.Arcade.Body.render=function(a,b,c,d){"undefined"==typeof d&&(d=!0),c=c||"rgba(0,255,0,0.4)",d?(a.fillStyle=c,a.fillRect(b.position.x-b.game.camera.x,b.position.y-b.game.camera.y,b.width,b.height)):(a.strokeStyle=c,a.strokeRect(b.position.x-b.game.camera.x,b.position.y-b.game.camera.y,b.width,b.height))},b.Physics.Arcade.Body.renderBodyInfo=function(a,b){a.line("x: "+b.x.toFixed(2),"y: "+b.y.toFixed(2),"width: "+b.width,"height: "+b.height),a.line("velocity x: "+b.velocity.x.toFixed(2),"y: "+b.velocity.y.toFixed(2),"deltaX: "+b._dx.toFixed(2),"deltaY: "+b._dy.toFixed(2)),a.line("acceleration x: "+b.acceleration.x.toFixed(2),"y: "+b.acceleration.y.toFixed(2),"speed: "+b.speed.toFixed(2),"angle: "+b.angle.toFixed(2)),a.line("gravity x: "+b.gravity.x,"y: "+b.gravity.y,"bounce x: "+b.bounce.x.toFixed(2),"y: "+b.bounce.y.toFixed(2)),a.line("touching left: "+b.touching.left,"right: "+b.touching.right,"up: "+b.touching.up,"down: "+b.touching.down),a.line("blocked left: "+b.blocked.left,"right: "+b.blocked.right,"up: "+b.blocked.up,"down: "+b.blocked.down)},b.Physics.Arcade.Body.prototype.constructor=b.Physics.Arcade.Body,b.Particles=function(a){this.game=a,this.emitters={},this.ID=0},b.Particles.prototype={add:function(a){return this.emitters[a.name]=a,a},remove:function(a){delete this.emitters[a.name]},update:function(){for(var a in this.emitters)this.emitters[a].exists&&this.emitters[a].update()}},b.Particles.prototype.constructor=b.Particles,b.Particles.Arcade={},b.Particles.Arcade.Emitter=function(a,c,d,e){this.maxParticles=e||50,b.Group.call(this,a),this.name="emitter"+this.game.particles.ID++,this.type=b.EMITTER,this.area=new b.Rectangle(c,d,1,1),this.minParticleSpeed=new b.Point(-100,-100),this.maxParticleSpeed=new b.Point(100,100),this.minParticleScale=1,this.maxParticleScale=1,this.scaleData=null,this.minRotation=-360,this.maxRotation=360,this.minParticleAlpha=1,this.maxParticleAlpha=1,this.alphaData=null,this.gravity=100,this.particleClass=b.Particle,this.particleDrag=new b.Point,this.angularDrag=0,this.frequency=100,this.lifespan=2e3,this.bounce=new b.Point,this.on=!1,this.particleAnchor=new b.Point(.5,.5),this.blendMode=b.blendModes.NORMAL,this.emitX=c,this.emitY=d,this.autoScale=!1,this.autoAlpha=!1,this.particleBringToTop=!1,this.particleSendToBack=!1,this._minParticleScale=new b.Point(1,1),this._maxParticleScale=new b.Point(1,1),this._quantity=0,this._timer=0,this._counter=0,this._explode=!0,this._frames=null},b.Particles.Arcade.Emitter.prototype=Object.create(b.Group.prototype),b.Particles.Arcade.Emitter.prototype.constructor=b.Particles.Arcade.Emitter,b.Particles.Arcade.Emitter.prototype.update=function(){if(this.on)if(this._explode){this._counter=0;do this.emitParticle(),this._counter++;while(this._counter<this._quantity);this.on=!1}else this.game.time.now>=this._timer&&(this.emitParticle(),this._counter++,this._quantity>0&&this._counter>=this._quantity&&(this.on=!1),this._timer=this.game.time.now+this.frequency);for(var a=this.children.length;a--;)this.children[a].exists&&this.children[a].update()},b.Particles.Arcade.Emitter.prototype.makeParticles=function(a,b,c,d,e){"undefined"==typeof b&&(b=0),"undefined"==typeof c&&(c=this.maxParticles),"undefined"==typeof d&&(d=!1),"undefined"==typeof e&&(e=!1);var f,g=0,h=a,i=b;for(this._frames=b;c>g;)Array.isArray(a)&&(h=this.game.rnd.pick(a)),Array.isArray(b)&&(i=this.game.rnd.pick(b)),f=new this.particleClass(this.game,0,0,h,i),this.game.physics.arcade.enable(f,!1),d?(f.body.checkCollision.any=!0,f.body.checkCollision.none=!1):f.body.checkCollision.none=!0,f.body.collideWorldBounds=e,f.exists=!1,f.visible=!1,f.anchor.copyFrom(this.particleAnchor),this.add(f),g++;return this},b.Particles.Arcade.Emitter.prototype.kill=function(){this.on=!1,this.alive=!1,this.exists=!1},b.Particles.Arcade.Emitter.prototype.revive=function(){this.alive=!0,this.exists=!0},b.Particles.Arcade.Emitter.prototype.explode=function(a,b){this.start(!0,a,0,b,!1)},b.Particles.Arcade.Emitter.prototype.flow=function(a,b,c){this.start(!1,a,b,c,!0)},b.Particles.Arcade.Emitter.prototype.start=function(a,b,c,d,e){"undefined"==typeof a&&(a=!0),"undefined"==typeof b&&(b=0),("undefined"==typeof c||null===c)&&(c=250),"undefined"==typeof d&&(d=0),"undefined"==typeof e&&(e=!1),this.revive(),this.visible=!0,this.on=!0,this._explode=a,this.lifespan=b,this.frequency=c,a||e?this._quantity=d:this._quantity+=d,this._counter=0,this._timer=this.game.time.now+c},b.Particles.Arcade.Emitter.prototype.emitParticle=function(){var a=this.getFirstExists(!1);null!==a&&(this.width>1||this.height>1?a.reset(this.game.rnd.integerInRange(this.left,this.right),this.game.rnd.integerInRange(this.top,this.bottom)):a.reset(this.emitX,this.emitY),a.angle=0,a.lifespan=this.lifespan,this.particleBringToTop?this.bringToTop(a):this.particleSendToBack&&this.sendToBack(a),this.autoScale?a.setScaleData(this.scaleData):1!==this.minParticleScale||1!==this.maxParticleScale?a.scale.set(this.game.rnd.realInRange(this.minParticleScale,this.maxParticleScale)):(this._minParticleScale.x!==this._maxParticleScale.x||this._minParticleScale.y!==this._maxParticleScale.y)&&a.scale.set(this.game.rnd.realInRange(this._minParticleScale.x,this._maxParticleScale.x),this.game.rnd.realInRange(this._minParticleScale.y,this._maxParticleScale.y)),a.frame=Array.isArray("object"===this._frames)?this.game.rnd.pick(this._frames):this._frames,this.autoAlpha?a.setAlphaData(this.alphaData):a.alpha=this.game.rnd.realInRange(this.minParticleAlpha,this.maxParticleAlpha),a.blendMode=this.blendMode,a.body.updateBounds(),a.body.bounce.setTo(this.bounce.x,this.bounce.y),a.body.velocity.x=this.game.rnd.integerInRange(this.minParticleSpeed.x,this.maxParticleSpeed.x),a.body.velocity.y=this.game.rnd.integerInRange(this.minParticleSpeed.y,this.maxParticleSpeed.y),a.body.angularVelocity=this.game.rnd.integerInRange(this.minRotation,this.maxRotation),a.body.gravity.y=this.gravity,a.body.drag.x=this.particleDrag.x,a.body.drag.y=this.particleDrag.y,a.body.angularDrag=this.angularDrag,a.onEmit())},b.Particles.Arcade.Emitter.prototype.setSize=function(a,b){this.area.width=a,this.area.height=b},b.Particles.Arcade.Emitter.prototype.setXSpeed=function(a,b){a=a||0,b=b||0,this.minParticleSpeed.x=a,this.maxParticleSpeed.x=b},b.Particles.Arcade.Emitter.prototype.setYSpeed=function(a,b){a=a||0,b=b||0,this.minParticleSpeed.y=a,this.maxParticleSpeed.y=b},b.Particles.Arcade.Emitter.prototype.setRotation=function(a,b){a=a||0,b=b||0,this.minRotation=a,this.maxRotation=b},b.Particles.Arcade.Emitter.prototype.setAlpha=function(a,c,d,e,f){if("undefined"==typeof a&&(a=1),"undefined"==typeof c&&(c=1),"undefined"==typeof d&&(d=0),"undefined"==typeof e&&(e=b.Easing.Linear.None),"undefined"==typeof f&&(f=!1),this.minParticleAlpha=a,this.maxParticleAlpha=c,this.autoAlpha=!1,d>0&&a!==c){var g={v:a},h=this.game.make.tween(g).to({v:c},d,e);h.yoyo(f),this.alphaData=h.generateData(60),this.alphaData.reverse(),this.autoAlpha=!0}},b.Particles.Arcade.Emitter.prototype.setScale=function(a,c,d,e,f,g,h){if("undefined"==typeof a&&(a=1),"undefined"==typeof c&&(c=1),"undefined"==typeof d&&(d=1),"undefined"==typeof e&&(e=1),"undefined"==typeof f&&(f=0),"undefined"==typeof g&&(g=b.Easing.Linear.None),"undefined"==typeof h&&(h=!1),this.minParticleScale=1,this.maxParticleScale=1,this._minParticleScale.set(a,d),this._maxParticleScale.set(c,e),this.autoScale=!1,f>0&&a!==c||d!==e){var i={x:a,y:d},j=this.game.make.tween(i).to({x:c,y:e},f,g);j.yoyo(h),this.scaleData=j.generateData(60),this.scaleData.reverse(),this.autoScale=!0}},b.Particles.Arcade.Emitter.prototype.at=function(a){a.center?(this.emitX=a.center.x,this.emitY=a.center.y):(this.emitX=a.world.x+a.anchor.x*a.width,this.emitY=a.world.y+a.anchor.y*a.height)},Object.defineProperty(b.Particles.Arcade.Emitter.prototype,"width",{get:function(){return this.area.width},set:function(a){this.area.width=a}}),Object.defineProperty(b.Particles.Arcade.Emitter.prototype,"height",{get:function(){return this.area.height},set:function(a){this.area.height=a}}),Object.defineProperty(b.Particles.Arcade.Emitter.prototype,"x",{get:function(){return this.emitX},set:function(a){this.emitX=a}}),Object.defineProperty(b.Particles.Arcade.Emitter.prototype,"y",{get:function(){return this.emitY},set:function(a){this.emitY=a}}),Object.defineProperty(b.Particles.Arcade.Emitter.prototype,"left",{get:function(){return Math.floor(this.x-this.area.width/2)}}),Object.defineProperty(b.Particles.Arcade.Emitter.prototype,"right",{get:function(){return Math.floor(this.x+this.area.width/2)}}),Object.defineProperty(b.Particles.Arcade.Emitter.prototype,"top",{get:function(){return Math.floor(this.y-this.area.height/2)}}),Object.defineProperty(b.Particles.Arcade.Emitter.prototype,"bottom",{get:function(){return Math.floor(this.y+this.area.height/2)}}),b.Tile=function(a,b,c,d,e,f){this.layer=a,this.index=b,this.x=c,this.y=d,this.worldX=c*e,this.worldY=d*f,this.width=e,this.height=f,this.centerX=Math.abs(e/2),this.centerY=Math.abs(f/2),this.alpha=1,this.properties={},this.scanned=!1,this.faceTop=!1,this.faceBottom=!1,this.faceLeft=!1,this.faceRight=!1,this.collideLeft=!1,this.collideRight=!1,this.collideUp=!1,this.collideDown=!1,this.collisionCallback=null,this.collisionCallbackContext=this},b.Tile.prototype={containsPoint:function(a,b){return!(a<this.worldX||b<this.worldY||a>this.right||b>this.bottom)},intersects:function(a,b,c,d){return c<=this.worldX?!1:d<=this.worldY?!1:a>=this.worldX+this.width?!1:b>=this.worldY+this.height?!1:!0},setCollisionCallback:function(a,b){this.collisionCallback=a,this.collisionCallbackContext=b},destroy:function(){this.collisionCallback=null,this.collisionCallbackContext=null,this.properties=null},setCollision:function(a,b,c,d){this.collideLeft=a,this.collideRight=b,this.collideUp=c,this.collideDown=d},resetCollision:function(){this.collideLeft=!1,this.collideRight=!1,this.collideUp=!1,this.collideDown=!1,this.faceTop=!1,this.faceBottom=!1,this.faceLeft=!1,this.faceRight=!1},isInteresting:function(a,b){return a&&b?this.collideLeft||this.collideRight||this.collideUp||this.collideDown||this.faceTop||this.faceBottom||this.faceLeft||this.faceRight||this.collisionCallback:a?this.collideLeft||this.collideRight||this.collideUp||this.collideDown:b?this.faceTop||this.faceBottom||this.faceLeft||this.faceRight:!1},copy:function(a){this.index=a.index,this.alpha=a.alpha,this.properties=a.properties,this.collideUp=a.collideUp,this.collideDown=a.collideDown,this.collideLeft=a.collideLeft,this.collideRight=a.collideRight,this.collisionCallback=a.collisionCallback,this.collisionCallbackContext=a.collisionCallbackContext}},b.Tile.prototype.constructor=b.Tile,Object.defineProperty(b.Tile.prototype,"collides",{get:function(){return this.collideLeft||this.collideRight||this.collideUp||this.collideDown}}),Object.defineProperty(b.Tile.prototype,"canCollide",{get:function(){return this.collideLeft||this.collideRight||this.collideUp||this.collideDown||this.collisionCallback}}),Object.defineProperty(b.Tile.prototype,"left",{get:function(){return this.worldX}}),Object.defineProperty(b.Tile.prototype,"right",{get:function(){return this.worldX+this.width}}),Object.defineProperty(b.Tile.prototype,"top",{get:function(){return this.worldY}}),Object.defineProperty(b.Tile.prototype,"bottom",{get:function(){return this.worldY+this.height}}),b.Tilemap=function(a,c,d,e,f,g){this.game=a,this.key=c;var h=b.TilemapParser.parse(this.game,c,d,e,f,g);null!==h&&(this.width=h.width,this.height=h.height,this.tileWidth=h.tileWidth,this.tileHeight=h.tileHeight,this.orientation=h.orientation,this.format=h.format,this.version=h.version,this.properties=h.properties,this.widthInPixels=h.widthInPixels,this.heightInPixels=h.heightInPixels,this.layers=h.layers,this.tilesets=h.tilesets,this.tiles=h.tiles,this.objects=h.objects,this.collideIndexes=[],this.collision=h.collision,this.images=h.images,this.currentLayer=0,this.debugMap=[],this._results=[],this._tempA=0,this._tempB=0)},b.Tilemap.CSV=0,b.Tilemap.TILED_JSON=1,b.Tilemap.NORTH=0,b.Tilemap.EAST=1,b.Tilemap.SOUTH=2,b.Tilemap.WEST=3,b.Tilemap.prototype={create:function(a,b,c,d,e,f){return"undefined"==typeof f&&(f=this.game.world),this.width=b,this.height=c,this.setTileSize(d,e),this.layers.length=0,this.createBlankLayer(a,b,c,d,e,f)},setTileSize:function(a,b){this.tileWidth=a,this.tileHeight=b,this.widthInPixels=this.width*a,this.heightInPixels=this.height*b},addTilesetImage:function(a,c,d,e,f,g,h){if("undefined"==typeof d&&(d=this.tileWidth),"undefined"==typeof e&&(e=this.tileHeight),"undefined"==typeof f&&(f=0),"undefined"==typeof g&&(g=0),"undefined"==typeof h&&(h=0),0===d&&(d=32),0===e&&(e=32),"undefined"==typeof c){if("string"!=typeof a)return null;if(c=a,!this.game.cache.checkImageKey(c))return console.warn('Phaser.Tilemap.addTilesetImage: Invalid image key given: "'+c+'"'),null}if("string"==typeof a&&(a=this.getTilesetIndex(a),null===a&&this.format===b.Tilemap.TILED_JSON))return console.warn('Phaser.Tilemap.addTilesetImage: No data found in the JSON matching the tileset name: "'+c+'"'),null;if(this.tilesets[a])return this.tilesets[a].setImage(this.game.cache.getImage(c)),this.tilesets[a];var i=new b.Tileset(c,h,d,e,f,g,{});i.setImage(this.game.cache.getImage(c)),this.tilesets.push(i);for(var j=this.tilesets.length-1,k=f,l=f,m=0,n=0,o=0,p=h;p<h+i.total&&(this.tiles[p]=[k,l,j],k+=d+g,m++,m!==i.total)&&(n++,n!==i.columns||(k=f,l+=e+g,n=0,o++,o!==i.rows));p++);return i},createFromObjects:function(a,c,d,e,f,g,h,i,j){if("undefined"==typeof f&&(f=!0),"undefined"==typeof g&&(g=!1),"undefined"==typeof h&&(h=this.game.world),"undefined"==typeof i&&(i=b.Sprite),"undefined"==typeof j&&(j=!0),!this.objects[a])return void console.warn("Tilemap.createFromObjects: Invalid objectgroup name given: "+a);for(var k,l=0,m=this.objects[a].length;m>l;l++)if(this.objects[a][l].gid===c){k=new i(this.game,this.objects[a][l].x,this.objects[a][l].y,d,e),k.name=this.objects[a][l].name,k.visible=this.objects[a][l].visible,k.autoCull=g,k.exists=f,j&&(k.y-=k.height),h.add(k);for(var n in this.objects[a][l].properties)h.set(k,n,this.objects[a][l].properties[n],!1,!1,0,!0)}},createLayer:function(a,c,d,e){"undefined"==typeof c&&(c=this.game.width),"undefined"==typeof d&&(d=this.game.height),"undefined"==typeof e&&(e=this.game.world);var f=a;return"string"==typeof a&&(f=this.getLayerIndex(a)),null===f||f>this.layers.length?void console.warn("Tilemap.createLayer: Invalid layer ID given: "+f):e.add(new b.TilemapLayer(this.game,this,f,c,d))},createBlankLayer:function(a,c,d,e,f,g){if("undefined"==typeof g&&(g=this.game.world),null!==this.getLayerIndex(a))return void console.warn("Tilemap.createBlankLayer: Layer with matching name already exists");for(var h,i={name:a,x:0,y:0,width:c,height:d,widthInPixels:c*e,heightInPixels:d*f,alpha:1,visible:!0,properties:{},indexes:[],callbacks:[],bodies:[],data:null},j=[],k=0;d>k;k++){h=[];for(var l=0;c>l;l++)h.push(new b.Tile(i,-1,l,k,e,f));j.push(h)}i.data=j,this.layers.push(i),this.currentLayer=this.layers.length-1;var m=i.widthInPixels,n=i.heightInPixels;m>this.game.width&&(m=this.game.width),n>this.game.height&&(n=this.game.height);var j=new b.TilemapLayer(this.game,this,this.layers.length-1,m,n);return j.name=a,g.add(j)},getIndex:function(a,b){for(var c=0;c<a.length;c++)if(a[c].name===b)return c;return null},getLayerIndex:function(a){return this.getIndex(this.layers,a)},getTilesetIndex:function(a){return this.getIndex(this.tilesets,a)},getImageIndex:function(a){return this.getIndex(this.images,a)},getObjectIndex:function(a){return this.getIndex(this.objects,a)},setTileIndexCallback:function(a,b,c,d){if(d=this.getLayer(d),"number"==typeof a)this.layers[d].callbacks[a]={callback:b,callbackContext:c};else for(var e=0,f=a.length;f>e;e++)this.layers[d].callbacks[a[e]]={callback:b,callbackContext:c}},setTileLocationCallback:function(a,b,c,d,e,f,g){if(g=this.getLayer(g),this.copy(a,b,c,d,g),!(this._results.length<2))for(var h=1;h<this._results.length;h++)this._results[h].setCollisionCallback(e,f)},setCollision:function(a,b,c,d){if("undefined"==typeof b&&(b=!0),"undefined"==typeof d&&(d=!0),c=this.getLayer(c),"number"==typeof a)return this.setCollisionByIndex(a,b,c,!0);for(var e=0,f=a.length;f>e;e++)this.setCollisionByIndex(a[e],b,c,!1);d&&this.calculateFaces(c)},setCollisionBetween:function(a,b,c,d,e){if("undefined"==typeof c&&(c=!0),"undefined"==typeof e&&(e=!0),d=this.getLayer(d),!(a>b)){for(var f=a;b>=f;f++)this.setCollisionByIndex(f,c,d,!1);e&&this.calculateFaces(d)}},setCollisionByExclusion:function(a,b,c,d){"undefined"==typeof b&&(b=!0),"undefined"==typeof d&&(d=!0),c=this.getLayer(c);for(var e=0,f=this.tiles.length;f>e;e++)-1===a.indexOf(e)&&this.setCollisionByIndex(e,b,c,!1);d&&this.calculateFaces(c)},setCollisionByIndex:function(a,b,c,d){if("undefined"==typeof b&&(b=!0),"undefined"==typeof c&&(c=this.currentLayer),"undefined"==typeof d&&(d=!0),b)this.collideIndexes.push(a);else{var e=this.collideIndexes.indexOf(a);e>-1&&this.collideIndexes.splice(e,1)}for(var f=0;f<this.layers[c].height;f++)for(var g=0;g<this.layers[c].width;g++){var h=this.layers[c].data[f][g];h&&h.index===a&&(b?h.setCollision(!0,!0,!0,!0):h.resetCollision(),h.faceTop=b,h.faceBottom=b,h.faceLeft=b,h.faceRight=b)}return d&&this.calculateFaces(c),c},getLayer:function(a){return"undefined"==typeof a?a=this.currentLayer:"string"==typeof a?a=this.getLayerIndex(a):a instanceof b.TilemapLayer&&(a=a.index),a},setPreventRecalculate:function(a){if(a===!0&&this.preventingRecalculate!==!0&&(this.preventingRecalculate=!0,this.needToRecalculate={}),a===!1&&this.preventingRecalculate===!0){this.preventingRecalculate=!1;for(var b in this.needToRecalculate)this.calculateFaces(b);this.needToRecalculate=!1}},calculateFaces:function(a){if(this.preventingRecalculate===!0)return void(this.needToRecalculate[a]=!0);for(var b=null,c=null,d=null,e=null,f=0,g=this.layers[a].height;g>f;f++)for(var h=0,i=this.layers[a].width;i>h;h++){var j=this.layers[a].data[f][h];j&&(b=this.getTileAbove(a,h,f),c=this.getTileBelow(a,h,f),d=this.getTileLeft(a,h,f),e=this.getTileRight(a,h,f),j.collides&&(j.faceTop=!0,j.faceBottom=!0,j.faceLeft=!0,j.faceRight=!0),b&&b.collides&&(j.faceTop=!1),c&&c.collides&&(j.faceBottom=!1),d&&d.collides&&(j.faceLeft=!1),e&&e.collides&&(j.faceRight=!1))}},getTileAbove:function(a,b,c){return c>0?this.layers[a].data[c-1][b]:null},getTileBelow:function(a,b,c){return c<this.layers[a].height-1?this.layers[a].data[c+1][b]:null},getTileLeft:function(a,b,c){return b>0?this.layers[a].data[c][b-1]:null},getTileRight:function(a,b,c){return b<this.layers[a].width-1?this.layers[a].data[c][b+1]:null},setLayer:function(a){a=this.getLayer(a),this.layers[a]&&(this.currentLayer=a)},hasTile:function(a,b,c){return c=this.getLayer(c),null!==this.layers[c].data[b]&&null!==this.layers[c].data[b][a]},removeTile:function(a,c,d){if(d=this.getLayer(d),a>=0&&a<this.layers[d].width&&c>=0&&c<this.layers[d].height&&this.hasTile(a,c,d)){var e=this.layers[d].data[c][a];return this.layers[d].data[c][a]=new b.Tile(this.layers[d],-1,a,c,this.tileWidth,this.tileHeight),this.layers[d].dirty=!0,this.calculateFaces(d),e}},removeTileWorldXY:function(a,b,c,d,e){return e=this.getLayer(e),a=this.game.math.snapToFloor(a,c)/c,b=this.game.math.snapToFloor(b,d)/d,this.removeTile(a,b,e)},putTile:function(a,c,d,e){if(null===a)return this.removeTile(c,d,e);if(e=this.getLayer(e),c>=0&&c<this.layers[e].width&&d>=0&&d<this.layers[e].height){var f;return a instanceof b.Tile?(f=a.index,this.hasTile(c,d,e)?this.layers[e].data[d][c].copy(a):this.layers[e].data[d][c]=new b.Tile(e,f,c,d,a.width,a.height)):(f=a,this.hasTile(c,d,e)?this.layers[e].data[d][c].index=f:this.layers[e].data[d][c]=new b.Tile(this.layers[e],f,c,d,this.tileWidth,this.tileHeight)),this.collideIndexes.indexOf(f)>-1?this.layers[e].data[d][c].setCollision(!0,!0,!0,!0):this.layers[e].data[d][c].resetCollision(),this.layers[e].dirty=!0,this.calculateFaces(e),this.layers[e].data[d][c]}return null},putTileWorldXY:function(a,b,c,d,e,f){return f=this.getLayer(f),b=this.game.math.snapToFloor(b,d)/d,c=this.game.math.snapToFloor(c,e)/e,this.putTile(a,b,c,f)},searchTileIndex:function(a,b,c,d){"undefined"==typeof b&&(b=0),"undefined"==typeof c&&(c=!1),d=this.getLayer(d);var e=0;if(c){for(var f=this.layers[d].height-1;f>=0;f--)for(var g=this.layers[d].width-1;g>=0;g--)if(this.layers[d].data[f][g].index===a){if(e===b)return this.layers[d].data[f][g];e++}}else for(var f=0;f<this.layers[d].height;f++)for(var g=0;g<this.layers[d].width;g++)if(this.layers[d].data[f][g].index===a){if(e===b)return this.layers[d].data[f][g];e++}return null},getTile:function(a,b,c,d){return"undefined"==typeof d&&(d=!1),c=this.getLayer(c),a>=0&&a<this.layers[c].width&&b>=0&&b<this.layers[c].height?-1===this.layers[c].data[b][a].index?d?this.layers[c].data[b][a]:null:this.layers[c].data[b][a]:null},getTileWorldXY:function(a,b,c,d,e){return"undefined"==typeof c&&(c=this.tileWidth),"undefined"==typeof d&&(d=this.tileHeight),e=this.getLayer(e),a=this.game.math.snapToFloor(a,c)/c,b=this.game.math.snapToFloor(b,d)/d,this.getTile(a,b,e)},copy:function(a,b,c,d,e){if(e=this.getLayer(e),!this.layers[e])return void(this._results.length=0);"undefined"==typeof a&&(a=0),"undefined"==typeof b&&(b=0),"undefined"==typeof c&&(c=this.layers[e].width),"undefined"==typeof d&&(d=this.layers[e].height),0>a&&(a=0),0>b&&(b=0),c>this.layers[e].width&&(c=this.layers[e].width),d>this.layers[e].height&&(d=this.layers[e].height),this._results.length=0,this._results.push({x:a,y:b,width:c,height:d,layer:e});for(var f=b;b+d>f;f++)for(var g=a;a+c>g;g++)this._results.push(this.layers[e].data[f][g]);return this._results},paste:function(a,b,c,d){if("undefined"==typeof a&&(a=0),"undefined"==typeof b&&(b=0),d=this.getLayer(d),c&&!(c.length<2)){for(var e=c[1].x-a,f=c[1].y-b,g=1;g<c.length;g++)this.layers[d].data[f+c[g].y][e+c[g].x].copy(c[g]);this.layers[d].dirty=!0,this.calculateFaces(d)}},swap:function(a,b,c,d,e,f,g){g=this.getLayer(g),this.copy(c,d,e,f,g),this._results.length<2||(this._tempA=a,this._tempB=b,this._results.forEach(this.swapHandler,this),this.paste(c,d,this._results,g))},swapHandler:function(a){a.index===this._tempA?a.index=this._tempB:a.index===this._tempB&&(a.index=this._tempA)},forEach:function(a,b,c,d,e,f,g){g=this.getLayer(g),this.copy(c,d,e,f,g),this._results.length<2||(this._results.forEach(a,b),this.paste(c,d,this._results,g))},replace:function(a,b,c,d,e,f,g){if(g=this.getLayer(g),this.copy(c,d,e,f,g),!(this._results.length<2)){for(var h=1;h<this._results.length;h++)this._results[h].index===a&&(this._results[h].index=b);this.paste(c,d,this._results,g)}},random:function(a,b,c,d,e){if(e=this.getLayer(e),this.copy(a,b,c,d,e),!(this._results.length<2)){for(var f=[],g=1;g<this._results.length;g++)if(this._results[g].index){var h=this._results[g].index;-1===f.indexOf(h)&&f.push(h)}for(var i=1;i<this._results.length;i++)this._results[i].index=this.game.rnd.pick(f);this.paste(a,b,this._results,e)}},shuffle:function(a,c,d,e,f){if(f=this.getLayer(f),this.copy(a,c,d,e,f),!(this._results.length<2)){for(var g=[],h=1;h<this._results.length;h++)this._results[h].index&&g.push(this._results[h].index);b.Utils.shuffle(g);for(var i=1;i<this._results.length;i++)this._results[i].index=g[i-1];this.paste(a,c,this._results,f)}},fill:function(a,b,c,d,e,f){if(f=this.getLayer(f),this.copy(b,c,d,e,f),!(this._results.length<2)){for(var g=1;g<this._results.length;g++)this._results[g].index=a;this.paste(b,c,this._results,f)}},removeAllLayers:function(){this.layers.length=0,this.currentLayer=0},dump:function(){for(var a="",b=[""],c=0;c<this.layers[this.currentLayer].height;c++){for(var d=0;d<this.layers[this.currentLayer].width;d++)a+="%c  ",b.push(this.layers[this.currentLayer].data[c][d]>1?this.debugMap[this.layers[this.currentLayer].data[c][d]]?"background: "+this.debugMap[this.layers[this.currentLayer].data[c][d]]:"background: #ffffff":"background: rgb(0, 0, 0)");a+="\n"}b[0]=a,console.log.apply(console,b)},destroy:function(){this.removeAllLayers(),this.data=[],this.game=null}},b.Tilemap.prototype.constructor=b.Tilemap,Object.defineProperty(b.Tilemap.prototype,"layer",{get:function(){return this.layers[this.currentLayer]},set:function(a){a!==this.currentLayer&&this.setLayer(a)}}),b.TilemapLayer=function(a,c,d,e,f){this.game=a,this.map=c,this.index=d,this.layer=c.layers[d],this.canvas=b.Canvas.create(e,f,"",!0),this.context=this.canvas.getContext("2d"),this.baseTexture=new PIXI.BaseTexture(this.canvas),this.texture=new PIXI.Texture(this.baseTexture),this.textureFrame=new b.Frame(0,0,0,e,f,"tilemapLayer",a.rnd.uuid()),b.Image.call(this,this.game,0,0,this.texture,this.textureFrame),this.name="",this.type=b.TILEMAPLAYER,this.fixedToCamera=!0,this.cameraOffset=new b.Point(0,0),this.tileColor="rgb(255, 255, 255)",this.debug=!1,this.debugAlpha=.5,this.debugColor="rgba(0, 255, 0, 1)",this.debugFill=!1,this.debugFillColor="rgba(0, 255, 0, 0.2)",this.debugCallbackColor="rgba(255, 0, 0, 1)",this.scrollFactorX=1,this.scrollFactorY=1,this.dirty=!0,this.rayStepRate=4,this.wrap=!1,this._mc={cw:c.tileWidth,ch:c.tileHeight,ga:1,dx:0,dy:0,dw:0,dh:0,tx:0,ty:0,tw:0,th:0,tl:0,maxX:0,maxY:0,startX:0,startY:0,x:0,y:0,prevX:0,prevY:0},this._results=[],this.updateMax()},b.TilemapLayer.prototype=Object.create(b.Image.prototype),b.TilemapLayer.prototype.constructor=b.TilemapLayer,b.TilemapLayer.prototype.postUpdate=function(){b.Image.prototype.postUpdate.call(this),this.scrollX=this.game.camera.x*this.scrollFactorX,this.scrollY=this.game.camera.y*this.scrollFactorY,this.render(),1===this._cache[7]&&(this.position.x=(this.game.camera.view.x+this.cameraOffset.x)/this.game.camera.scale.x,this.position.y=(this.game.camera.view.y+this.cameraOffset.y)/this.game.camera.scale.y)},b.TilemapLayer.prototype.resizeWorld=function(){this.game.world.setBounds(0,0,this.layer.widthInPixels,this.layer.heightInPixels)},b.TilemapLayer.prototype._fixX=function(a){return 0>a&&(a=0),1===this.scrollFactorX?a:this._mc.x+(a-this._mc.x/this.scrollFactorX)},b.TilemapLayer.prototype._unfixX=function(a){return 1===this.scrollFactorX?a:this._mc.x/this.scrollFactorX+(a-this._mc.x)},b.TilemapLayer.prototype._fixY=function(a){return 0>a&&(a=0),1===this.scrollFactorY?a:this._mc.y+(a-this._mc.y/this.scrollFactorY)},b.TilemapLayer.prototype._unfixY=function(a){return 1===this.scrollFactorY?a:this._mc.y/this.scrollFactorY+(a-this._mc.y)},b.TilemapLayer.prototype.getTileX=function(a){return this.game.math.snapToFloor(this._fixX(a),this.map.tileWidth)/this.map.tileWidth},b.TilemapLayer.prototype.getTileY=function(a){return this.game.math.snapToFloor(this._fixY(a),this.map.tileHeight)/this.map.tileHeight},b.TilemapLayer.prototype.getTileXY=function(a,b,c){return c.x=this.getTileX(a),c.y=this.getTileY(b),c},b.TilemapLayer.prototype.getRayCastTiles=function(a,b,c,d){("undefined"==typeof b||null===b)&&(b=this.rayStepRate),"undefined"==typeof c&&(c=!1),"undefined"==typeof d&&(d=!1);var e=this.getTiles(a.x,a.y,a.width,a.height,c,d);if(0===e.length)return[];for(var f=a.coordinatesOnLine(b),g=f.length,h=[],i=0;i<e.length;i++)for(var j=0;g>j;j++)if(e[i].containsPoint(f[j][0],f[j][1])){h.push(e[i]);break}return h},b.TilemapLayer.prototype.getTiles=function(a,b,c,d,e,f){"undefined"==typeof e&&(e=!1),"undefined"==typeof f&&(f=!1),a=this._fixX(a),b=this._fixY(b),c>this.layer.widthInPixels&&(c=this.layer.widthInPixels),d>this.layer.heightInPixels&&(d=this.layer.heightInPixels),this._mc.tx=this.game.math.snapToFloor(a,this._mc.cw)/this._mc.cw,this._mc.ty=this.game.math.snapToFloor(b,this._mc.ch)/this._mc.ch,this._mc.tw=(this.game.math.snapToCeil(c,this._mc.cw)+this._mc.cw)/this._mc.cw,this._mc.th=(this.game.math.snapToCeil(d,this._mc.ch)+this._mc.ch)/this._mc.ch,this._results.length=0;for(var g=this._mc.ty;g<this._mc.ty+this._mc.th;g++)for(var h=this._mc.tx;h<this._mc.tx+this._mc.tw;h++)this.layer.data[g]&&this.layer.data[g][h]&&(!e&&!f||this.layer.data[g][h].isInteresting(e,f))&&this._results.push(this.layer.data[g][h]);return this._results},b.TilemapLayer.prototype.updateMax=function(){this._mc.maxX=this.game.math.ceil(this.canvas.width/this.map.tileWidth)+1,this._mc.maxY=this.game.math.ceil(this.canvas.height/this.map.tileHeight)+1,this.dirty=!0},b.TilemapLayer.prototype.render=function(){if(this.layer.dirty&&(this.dirty=!0),this.dirty&&this.visible){this._mc.prevX=this._mc.dx,this._mc.prevY=this._mc.dy,this._mc.dx=-(this._mc.x-this._mc.startX*this.map.tileWidth),this._mc.dy=-(this._mc.y-this._mc.startY*this.map.tileHeight),this._mc.tx=this._mc.dx,this._mc.ty=this._mc.dy,this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.tileColor;var a,c;this.debug&&(this.context.globalAlpha=this.debugAlpha);for(var d=this._mc.startY,e=this._mc.startY+this._mc.maxY;e>d;d++){if(this._column=null,0>d&&this.wrap?this._column=this.layer.data[d+this.map.height]:d>=this.map.height&&this.wrap?this._column=this.layer.data[d-this.map.height]:this.layer.data[d]&&(this._column=this.layer.data[d]),this._column)for(var f=this._mc.startX,g=this._mc.startX+this._mc.maxX;g>f;f++){var a=null;0>f&&this.wrap?a=this._column[f+this.map.width]:f>=this.map.width&&this.wrap?a=this._column[f-this.map.width]:this._column[f]&&(a=this._column[f]),a&&a.index>-1&&(c=this.map.tilesets[this.map.tiles[a.index][2]],this.debug===!1&&a.alpha!==this.context.globalAlpha&&(this.context.globalAlpha=a.alpha),c.draw(this.context,Math.floor(this._mc.tx),Math.floor(this._mc.ty),a.index),a.debug&&(this.context.fillStyle="rgba(0, 255, 0, 0.4)",this.context.fillRect(Math.floor(this._mc.tx),Math.floor(this._mc.ty),this.map.tileWidth,this.map.tileHeight))),this._mc.tx+=this.map.tileWidth}this._mc.tx=this._mc.dx,this._mc.ty+=this.map.tileHeight}return this.debug&&(this.context.globalAlpha=1,this.renderDebug()),this.game.renderType===b.WEBGL&&PIXI.updateWebGLTexture(this.baseTexture,this.game.renderer.gl),this.dirty=!1,this.layer.dirty=!1,!0}},b.TilemapLayer.prototype.renderDebug=function(){this._mc.tx=this._mc.dx,this._mc.ty=this._mc.dy,this.context.strokeStyle=this.debugColor,this.context.fillStyle=this.debugFillColor;for(var a=this._mc.startY,b=this._mc.startY+this._mc.maxY;b>a;a++){if(this._column=null,0>a&&this.wrap?this._column=this.layer.data[a+this.map.height]:a>=this.map.height&&this.wrap?this._column=this.layer.data[a-this.map.height]:this.layer.data[a]&&(this._column=this.layer.data[a]),this._column)for(var c=this._mc.startX,d=this._mc.startX+this._mc.maxX;d>c;c++){var e=null;0>c&&this.wrap?e=this._column[c+this.map.width]:c>=this.map.width&&this.wrap?e=this._column[c-this.map.width]:this._column[c]&&(e=this._column[c]),e&&(e.faceTop||e.faceBottom||e.faceLeft||e.faceRight)&&(this._mc.tx=Math.floor(this._mc.tx),this.debugFill&&this.context.fillRect(this._mc.tx,this._mc.ty,this._mc.cw,this._mc.ch),this.context.beginPath(),e.faceTop&&(this.context.moveTo(this._mc.tx,this._mc.ty),this.context.lineTo(this._mc.tx+this._mc.cw,this._mc.ty)),e.faceBottom&&(this.context.moveTo(this._mc.tx,this._mc.ty+this._mc.ch),this.context.lineTo(this._mc.tx+this._mc.cw,this._mc.ty+this._mc.ch)),e.faceLeft&&(this.context.moveTo(this._mc.tx,this._mc.ty),this.context.lineTo(this._mc.tx,this._mc.ty+this._mc.ch)),e.faceRight&&(this.context.moveTo(this._mc.tx+this._mc.cw,this._mc.ty),this.context.lineTo(this._mc.tx+this._mc.cw,this._mc.ty+this._mc.ch)),this.context.stroke()),this._mc.tx+=this.map.tileWidth}this._mc.tx=this._mc.dx,this._mc.ty+=this.map.tileHeight}},Object.defineProperty(b.TilemapLayer.prototype,"scrollX",{get:function(){return this._mc.x
},set:function(a){a!==this._mc.x&&(this._mc.x=a,this._mc.startX=this.game.math.floor(this._mc.x/this.map.tileWidth),this.dirty=!0)}}),Object.defineProperty(b.TilemapLayer.prototype,"scrollY",{get:function(){return this._mc.y},set:function(a){a!==this._mc.y&&(this._mc.y=a,this._mc.startY=this.game.math.floor(this._mc.y/this.map.tileHeight),this.dirty=!0)}}),Object.defineProperty(b.TilemapLayer.prototype,"collisionWidth",{get:function(){return this._mc.cw},set:function(a){this._mc.cw=a,this.dirty=!0}}),Object.defineProperty(b.TilemapLayer.prototype,"collisionHeight",{get:function(){return this._mc.ch},set:function(a){this._mc.ch=a,this.dirty=!0}}),b.TilemapParser={parse:function(a,c,d,e,f,g){if("undefined"==typeof d&&(d=32),"undefined"==typeof e&&(e=32),"undefined"==typeof f&&(f=10),"undefined"==typeof g&&(g=10),"undefined"==typeof c)return this.getEmptyData();if(null===c)return this.getEmptyData(d,e,f,g);var h=a.cache.getTilemapData(c);if(h){if(h.format===b.Tilemap.CSV)return this.parseCSV(c,h.data,d,e);if(!h.format||h.format===b.Tilemap.TILED_JSON)return this.parseTiledJSON(h.data)}else console.warn("Phaser.TilemapParser.parse - No map data found for key "+c)},parseCSV:function(a,c,d,e){var f=this.getEmptyData();c=c.trim();for(var g=[],h=c.split("\n"),i=h.length,j=0,k=0;k<h.length;k++){g[k]=[];for(var l=h[k].split(","),m=0;m<l.length;m++)g[k][m]=new b.Tile(f.layers[0],parseInt(l[m],10),m,k,d,e);0===j&&(j=l.length)}return f.format=b.Tilemap.CSV,f.name=a,f.width=j,f.height=i,f.tileWidth=d,f.tileHeight=e,f.widthInPixels=j*d,f.heightInPixels=i*e,f.layers[0].width=j,f.layers[0].height=i,f.layers[0].widthInPixels=f.widthInPixels,f.layers[0].heightInPixels=f.heightInPixels,f.layers[0].data=g,f},getEmptyData:function(a,b,c,d){var e={};e.width=0,e.height=0,e.tileWidth=0,e.tileHeight=0,"undefined"!=typeof a&&null!==a&&(e.tileWidth=a),"undefined"!=typeof b&&null!==b&&(e.tileHeight=b),"undefined"!=typeof c&&null!==c&&(e.width=c),"undefined"!=typeof d&&null!==d&&(e.height=d),e.orientation="orthogonal",e.version="1",e.properties={},e.widthInPixels=0,e.heightInPixels=0;var f=[],g={name:"layer",x:0,y:0,width:0,height:0,widthInPixels:0,heightInPixels:0,alpha:1,visible:!0,properties:{},indexes:[],callbacks:[],data:[]};return f.push(g),e.layers=f,e.images=[],e.objects={},e.collision={},e.tilesets=[],e.tiles=[],e},parseTiledJSON:function(a){function c(a,b){var c={};for(var d in b){var e=b[d];c[e]=a[e]}return c}if("orthogonal"!==a.orientation)return console.warn("TilemapParser.parseTiledJSON: Only orthogonal map types are supported in this version of Phaser"),null;var d={};d.width=a.width,d.height=a.height,d.tileWidth=a.tilewidth,d.tileHeight=a.tileheight,d.orientation=a.orientation,d.format=b.Tilemap.TILED_JSON,d.version=a.version,d.properties=a.properties,d.widthInPixels=d.width*d.tileWidth,d.heightInPixels=d.height*d.tileHeight;for(var e=[],f=0;f<a.layers.length;f++)if("tilelayer"===a.layers[f].type){var g={name:a.layers[f].name,x:a.layers[f].x,y:a.layers[f].y,width:a.layers[f].width,height:a.layers[f].height,widthInPixels:a.layers[f].width*a.tilewidth,heightInPixels:a.layers[f].height*a.tileheight,alpha:a.layers[f].opacity,visible:a.layers[f].visible,properties:{},indexes:[],callbacks:[],bodies:[]};a.layers[f].properties&&(g.properties=a.layers[f].properties);for(var h=0,i=[],j=[],k=0,l=a.layers[f].data.length;l>k;k++)i.push(a.layers[f].data[k]>0?new b.Tile(g,a.layers[f].data[k],h,j.length,a.tilewidth,a.tileheight):new b.Tile(g,-1,h,j.length,a.tilewidth,a.tileheight)),h++,h===a.layers[f].width&&(j.push(i),h=0,i=[]);g.data=j,e.push(g)}d.layers=e;for(var m=[],f=0;f<a.layers.length;f++)if("imagelayer"===a.layers[f].type){var n={name:a.layers[f].name,image:a.layers[f].image,x:a.layers[f].x,y:a.layers[f].y,alpha:a.layers[f].opacity,visible:a.layers[f].visible,properties:{}};a.layers[f].properties&&(n.properties=a.layers[f].properties),m.push(n)}d.images=m;for(var o=[],f=0;f<a.tilesets.length;f++){var p=a.tilesets[f],q=new b.Tileset(p.name,p.firstgid,p.tilewidth,p.tileheight,p.margin,p.spacing,p.properties);p.tileproperties&&(q.tileProperties=p.tileproperties),q.rows=Math.round((p.imageheight-p.margin)/(p.tileheight+p.spacing)),q.columns=Math.round((p.imagewidth-p.margin)/(p.tilewidth+p.spacing)),q.total=q.rows*q.columns,q.rows%1!==0||q.columns%1!==0?console.warn("TileSet image dimensions do not match expected dimensions. Tileset width/height must be evenly divisible by Tilemap tile width/height."):o.push(q)}d.tilesets=o;for(var r={},s={},f=0;f<a.layers.length;f++)if("objectgroup"===a.layers[f].type){r[a.layers[f].name]=[],s[a.layers[f].name]=[];for(var t=0,l=a.layers[f].objects.length;l>t;t++)if(a.layers[f].objects[t].gid){var u={gid:a.layers[f].objects[t].gid,name:a.layers[f].objects[t].name,x:a.layers[f].objects[t].x,y:a.layers[f].objects[t].y,visible:a.layers[f].objects[t].visible,properties:a.layers[f].objects[t].properties};r[a.layers[f].name].push(u)}else if(a.layers[f].objects[t].polyline){var u={name:a.layers[f].objects[t].name,x:a.layers[f].objects[t].x,y:a.layers[f].objects[t].y,width:a.layers[f].objects[t].width,height:a.layers[f].objects[t].height,visible:a.layers[f].objects[t].visible,properties:a.layers[f].objects[t].properties};u.polyline=[];for(var v=0;v<a.layers[f].objects[t].polyline.length;v++)u.polyline.push([a.layers[f].objects[t].polyline[v].x,a.layers[f].objects[t].polyline[v].y]);s[a.layers[f].name].push(u)}else if(a.layers[f].objects[t].polygon){var u=c(a.layers[f].objects[t],["name","x","y","visible","properties"]);u.polygon=[];for(var v=0;v<a.layers[f].objects[t].polygon.length;v++)u.polygon.push([a.layers[f].objects[t].polygon[v].x,a.layers[f].objects[t].polygon[v].y]);r[a.layers[f].name].push(u)}else if(a.layers[f].objects[t].ellipse){var u=c(a.layers[f].objects[t],["name","ellipse","x","y","width","height","visible","properties"]);r[a.layers[f].name].push(u)}else{var u=c(a.layers[f].objects[t],["name","x","y","width","height","visible","properties"]);u.rectangle=!0,r[a.layers[f].name].push(u)}}d.objects=r,d.collision=s,d.tiles=[];for(var f=0;f<d.tilesets.length;f++)for(var p=d.tilesets[f],h=p.tileMargin,w=p.tileMargin,x=0,y=0,z=0,k=p.firstgid;k<p.firstgid+p.total&&(d.tiles[k]=[h,w,f],h+=p.tileWidth+p.tileSpacing,x++,x!==p.total)&&(y++,y!==p.columns||(h=p.tileMargin,w+=p.tileHeight+p.tileSpacing,y=0,z++,z!==p.rows));k++);return d}},b.Tileset=function(a,b,c,d,e,f,g){("undefined"==typeof c||0>=c)&&(c=32),("undefined"==typeof d||0>=d)&&(d=32),"undefined"==typeof e&&(e=0),"undefined"==typeof f&&(f=0),this.name=a,this.firstgid=b,this.tileWidth=c,this.tileHeight=d,this.tileMargin=e,this.tileSpacing=f,this.properties=g,this.image=null,this.rows=0,this.columns=0,this.total=0,this.drawCoords=[]},b.Tileset.prototype={draw:function(a,b,c,d){this.image&&this.drawCoords[d]&&a.drawImage(this.image,this.drawCoords[d][0],this.drawCoords[d][1],this.tileWidth,this.tileHeight,b,c,this.tileWidth,this.tileHeight)},setImage:function(a){this.image=a,this.rows=Math.round((a.height-this.tileMargin)/(this.tileHeight+this.tileSpacing)),this.columns=Math.round((a.width-this.tileMargin)/(this.tileWidth+this.tileSpacing)),this.total=this.rows*this.columns,this.drawCoords.length=0;for(var b=this.tileMargin,c=this.tileMargin,d=this.firstgid,e=0;e<this.rows;e++){for(var f=0;f<this.columns;f++)this.drawCoords[d]=[b,c],b+=this.tileWidth+this.tileSpacing,d++;b=this.tileMargin,c+=this.tileHeight+this.tileSpacing}},setSpacing:function(a,b){this.tileMargin=a,this.tileSpacing=b,this.setImage(this.image)}},b.Tileset.prototype.constructor=b.Tileset,"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=b),exports.Phaser=b):"undefined"!=typeof define&&define.amd?define("Phaser",function(){return a.Phaser=b}()):a.Phaser=b}.call(this),Phaser.Physics.Ninja=function(a){this.game=a,this.time=this.game.time,this.gravity=.2,this.bounds=new Phaser.Rectangle(0,0,a.world.width,a.world.height),this.maxObjects=10,this.maxLevels=4,this.quadTree=new Phaser.QuadTree(this.game.world.bounds.x,this.game.world.bounds.y,this.game.world.bounds.width,this.game.world.bounds.height,this.maxObjects,this.maxLevels)},Phaser.Physics.Ninja.prototype.constructor=Phaser.Physics.Ninja,Phaser.Physics.Ninja.prototype={enableAABB:function(a,b){this.enable(a,1,0,0,b)},enableCircle:function(a,b,c){this.enable(a,2,0,b,c)},enableTile:function(a,b,c){this.enable(a,3,b,0,c)},enable:function(a,b,c,d,e){if("undefined"==typeof b&&(b=1),"undefined"==typeof c&&(c=1),"undefined"==typeof d&&(d=0),"undefined"==typeof e&&(e=!0),Array.isArray(a))for(var f=a.length;f--;)a[f]instanceof Phaser.Group?this.enable(a[f].children,b,c,d,e):(this.enableBody(a[f],b,c,d),e&&a[f].hasOwnProperty("children")&&a[f].children.length>0&&this.enable(a[f],b,c,d,!0));else a instanceof Phaser.Group?this.enable(a.children,b,c,d,e):(this.enableBody(a,b,c,d),e&&a.hasOwnProperty("children")&&a.children.length>0&&this.enable(a.children,b,c,d,!0))},enableBody:function(a,b,c,d){a.hasOwnProperty("body")&&null===a.body&&(a.body=new Phaser.Physics.Ninja.Body(this,a,b,c,d),a.anchor.set(.5))},setBounds:function(a,b,c,d){this.bounds.setTo(a,b,c,d)},setBoundsToWorld:function(){this.bounds.setTo(this.game.world.bounds.x,this.game.world.bounds.y,this.game.world.bounds.width,this.game.world.bounds.height)},clearTilemapLayerBodies:function(a,b){b=a.getLayer(b);for(var c=a.layers[b].bodies.length;c--;)a.layers[b].bodies[c].destroy();a.layers[b].bodies.length=[]},convertTilemap:function(a,b,c){b=a.getLayer(b),this.clearTilemapLayerBodies(a,b);for(var d=0,e=a.layers[b].height;e>d;d++)for(var f=0,g=a.layers[b].width;g>f;f++){var h=a.layers[b].data[d][f];if(h&&c.hasOwnProperty(h.index)){var i=new Phaser.Physics.Ninja.Body(this,null,3,c[h.index],0,h.worldX+h.centerX,h.worldY+h.centerY,h.width,h.height);a.layers[b].bodies.push(i)}}return a.layers[b].bodies},overlap:function(a,b,c,d,e){if(c=c||null,d=d||null,e=e||c,this._result=!1,this._total=0,Array.isArray(b))for(var f=0,g=b.length;g>f;f++)this.collideHandler(a,b[f],c,d,e,!0);else this.collideHandler(a,b,c,d,e,!0);return this._total>0},collide:function(a,b,c,d,e){if(c=c||null,d=d||null,e=e||c,this._result=!1,this._total=0,Array.isArray(b))for(var f=0,g=b.length;g>f;f++)this.collideHandler(a,b[f],c,d,e,!1);else this.collideHandler(a,b,c,d,e,!1);return this._total>0},collideHandler:function(a,b,c,d,e,f){return"undefined"!=typeof b||a.type!==Phaser.GROUP&&a.type!==Phaser.EMITTER?void(a&&b&&a.exists&&b.exists&&(a.type==Phaser.SPRITE||a.type==Phaser.TILESPRITE?b.type==Phaser.SPRITE||b.type==Phaser.TILESPRITE?this.collideSpriteVsSprite(a,b,c,d,e,f):b.type==Phaser.GROUP||b.type==Phaser.EMITTER?this.collideSpriteVsGroup(a,b,c,d,e,f):b.type==Phaser.TILEMAPLAYER&&this.collideSpriteVsTilemapLayer(a,b,c,d,e):a.type==Phaser.GROUP?b.type==Phaser.SPRITE||b.type==Phaser.TILESPRITE?this.collideSpriteVsGroup(b,a,c,d,e,f):b.type==Phaser.GROUP||b.type==Phaser.EMITTER?this.collideGroupVsGroup(a,b,c,d,e,f):b.type==Phaser.TILEMAPLAYER&&this.collideGroupVsTilemapLayer(a,b,c,d,e):a.type==Phaser.TILEMAPLAYER?b.type==Phaser.SPRITE||b.type==Phaser.TILESPRITE?this.collideSpriteVsTilemapLayer(b,a,c,d,e):(b.type==Phaser.GROUP||b.type==Phaser.EMITTER)&&this.collideGroupVsTilemapLayer(b,a,c,d,e):a.type==Phaser.EMITTER&&(b.type==Phaser.SPRITE||b.type==Phaser.TILESPRITE?this.collideSpriteVsGroup(b,a,c,d,e,f):b.type==Phaser.GROUP||b.type==Phaser.EMITTER?this.collideGroupVsGroup(a,b,c,d,e,f):b.type==Phaser.TILEMAPLAYER&&this.collideGroupVsTilemapLayer(a,b,c,d,e)))):void this.collideGroupVsSelf(a,c,d,e,f)},collideSpriteVsSprite:function(a,b,c,d,e,f){this.separate(a.body,b.body,d,e,f)&&(c&&c.call(e,a,b),this._total++)},collideSpriteVsGroup:function(a,b,c,d,e,f){if(0!==b.length)for(var g=0,h=b.children.length;h>g;g++)b.children[g].exists&&b.children[g].body&&this.separate(a.body,b.children[g].body,d,e,f)&&(c&&c.call(e,a,b.children[g]),this._total++)},collideGroupVsSelf:function(a,b,c,d,e){if(0!==a.length)for(var f=a.children.length,g=0;f>g;g++)for(var h=g+1;f>=h;h++)a.children[g]&&a.children[h]&&a.children[g].exists&&a.children[h].exists&&this.collideSpriteVsSprite(a.children[g],a.children[h],b,c,d,e)},collideGroupVsGroup:function(a,b,c,d,e,f){if(0!==a.length&&0!==b.length)for(var g=0,h=a.children.length;h>g;g++)a.children[g].exists&&this.collideSpriteVsGroup(a.children[g],b,c,d,e,f)},separate:function(a,b){return a.type!==Phaser.Physics.NINJA||b.type!==Phaser.Physics.NINJA?!1:a.aabb&&b.aabb?a.aabb.collideAABBVsAABB(b.aabb):a.aabb&&b.tile?a.aabb.collideAABBVsTile(b.tile):a.tile&&b.aabb?b.aabb.collideAABBVsTile(a.tile):a.circle&&b.tile?a.circle.collideCircleVsTile(b.tile):a.tile&&b.circle?b.circle.collideCircleVsTile(a.tile):void 0}},Phaser.Physics.Ninja.Body=function(a,b,c,d,e,f,g,h,i){b=b||null,"undefined"==typeof c&&(c=1),"undefined"==typeof d&&(d=1),"undefined"==typeof e&&(e=16),this.sprite=b,this.game=a.game,this.type=Phaser.Physics.NINJA,this.system=a,this.aabb=null,this.tile=null,this.circle=null,this.shape=null,this.drag=1,this.friction=.05,this.gravityScale=1,this.bounce=.3,this.velocity=new Phaser.Point,this.facing=Phaser.NONE,this.immovable=!1,this.collideWorldBounds=!0,this.checkCollision={none:!1,any:!0,up:!0,down:!0,left:!0,right:!0},this.touching={none:!0,up:!1,down:!1,left:!1,right:!1},this.wasTouching={none:!0,up:!1,down:!1,left:!1,right:!1},this.maxSpeed=8,b&&(f=b.x,g=b.y,h=b.width,i=b.height,0===b.anchor.x&&(f+=.5*b.width),0===b.anchor.y&&(g+=.5*b.height)),1===c?(this.aabb=new Phaser.Physics.Ninja.AABB(this,f,g,h,i),this.shape=this.aabb):2===c?(this.circle=new Phaser.Physics.Ninja.Circle(this,f,g,e),this.shape=this.circle):3===c&&(this.tile=new Phaser.Physics.Ninja.Tile(this,f,g,h,i,d),this.shape=this.tile)},Phaser.Physics.Ninja.Body.prototype={preUpdate:function(){this.wasTouching.none=this.touching.none,this.wasTouching.up=this.touching.up,this.wasTouching.down=this.touching.down,this.wasTouching.left=this.touching.left,this.wasTouching.right=this.touching.right,this.touching.none=!0,this.touching.up=!1,this.touching.down=!1,this.touching.left=!1,this.touching.right=!1,this.shape.integrate(),this.collideWorldBounds&&this.shape.collideWorldBounds()},postUpdate:function(){this.sprite&&(this.sprite.type===Phaser.TILESPRITE?(this.sprite.x=this.shape.pos.x-this.shape.xw,this.sprite.y=this.shape.pos.y-this.shape.yw):(this.sprite.x=this.shape.pos.x,this.sprite.y=this.shape.pos.y)),this.velocity.x<0?this.facing=Phaser.LEFT:this.velocity.x>0&&(this.facing=Phaser.RIGHT),this.velocity.y<0?this.facing=Phaser.UP:this.velocity.y>0&&(this.facing=Phaser.DOWN)},setZeroVelocity:function(){this.shape.oldpos.x=this.shape.pos.x,this.shape.oldpos.y=this.shape.pos.y},moveTo:function(a,b){var c=a*this.game.time.physicsElapsed,b=this.game.math.degToRad(b);this.shape.pos.x=this.shape.oldpos.x+c*Math.cos(b),this.shape.pos.y=this.shape.oldpos.y+c*Math.sin(b)},moveFrom:function(a,b){var c=-a*this.game.time.physicsElapsed,b=this.game.math.degToRad(b);this.shape.pos.x=this.shape.oldpos.x+c*Math.cos(b),this.shape.pos.y=this.shape.oldpos.y+c*Math.sin(b)},moveLeft:function(a){var b=-a*this.game.time.physicsElapsed;this.shape.pos.x=this.shape.oldpos.x+Math.min(this.maxSpeed,Math.max(-this.maxSpeed,this.shape.pos.x-this.shape.oldpos.x+b))},moveRight:function(a){var b=a*this.game.time.physicsElapsed;this.shape.pos.x=this.shape.oldpos.x+Math.min(this.maxSpeed,Math.max(-this.maxSpeed,this.shape.pos.x-this.shape.oldpos.x+b))},moveUp:function(a){var b=-a*this.game.time.physicsElapsed;this.shape.pos.y=this.shape.oldpos.y+Math.min(this.maxSpeed,Math.max(-this.maxSpeed,this.shape.pos.y-this.shape.oldpos.y+b))},moveDown:function(a){var b=a*this.game.time.physicsElapsed;this.shape.pos.y=this.shape.oldpos.y+Math.min(this.maxSpeed,Math.max(-this.maxSpeed,this.shape.pos.y-this.shape.oldpos.y+b))},reset:function(){this.velocity.set(0),this.shape.pos.x=this.sprite.x,this.shape.pos.y=this.sprite.y,this.shape.oldpos.copyFrom(this.shape.pos)},deltaAbsX:function(){return this.deltaX()>0?this.deltaX():-this.deltaX()},deltaAbsY:function(){return this.deltaY()>0?this.deltaY():-this.deltaY()},deltaX:function(){return this.shape.pos.x-this.shape.oldpos.x},deltaY:function(){return this.shape.pos.y-this.shape.oldpos.y},destroy:function(){this.sprite=null,this.system=null,this.aabb=null,this.tile=null,this.circle=null,this.shape.destroy(),this.shape=null}},Object.defineProperty(Phaser.Physics.Ninja.Body.prototype,"x",{get:function(){return this.shape.pos.x},set:function(a){this.shape.pos.x=a}}),Object.defineProperty(Phaser.Physics.Ninja.Body.prototype,"y",{get:function(){return this.shape.pos.y},set:function(a){this.shape.pos.y=a}}),Object.defineProperty(Phaser.Physics.Ninja.Body.prototype,"width",{get:function(){return this.shape.width}}),Object.defineProperty(Phaser.Physics.Ninja.Body.prototype,"height",{get:function(){return this.shape.height}}),Object.defineProperty(Phaser.Physics.Ninja.Body.prototype,"bottom",{get:function(){return this.shape.pos.y+this.shape.yw}}),Object.defineProperty(Phaser.Physics.Ninja.Body.prototype,"right",{get:function(){return this.shape.pos.x+this.shape.xw}}),Object.defineProperty(Phaser.Physics.Ninja.Body.prototype,"speed",{get:function(){return Math.sqrt(this.shape.velocity.x*this.shape.velocity.x+this.shape.velocity.y*this.shape.velocity.y)}}),Object.defineProperty(Phaser.Physics.Ninja.Body.prototype,"angle",{get:function(){return Math.atan2(this.shape.velocity.y,this.shape.velocity.x)}}),Phaser.Physics.Ninja.Body.render=function(a,b,c,d){c=c||"rgba(0,255,0,0.4)","undefined"==typeof d&&(d=!0),(b.aabb||b.circle)&&b.shape.render(a,b.game.camera.x,b.game.camera.y,c,d)},Phaser.Physics.Ninja.AABB=function(a,b,c,d,e){this.body=a,this.system=a.system,this.pos=new Phaser.Point(b,c),this.oldpos=new Phaser.Point(b,c),this.xw=Math.abs(d/2),this.yw=Math.abs(e/2),this.width=d,this.height=e,this.oH=0,this.oV=0,this.velocity=new Phaser.Point,this.aabbTileProjections={},this.aabbTileProjections[Phaser.Physics.Ninja.Tile.TYPE_FULL]=this.projAABB_Full,this.aabbTileProjections[Phaser.Physics.Ninja.Tile.TYPE_45DEG]=this.projAABB_45Deg,this.aabbTileProjections[Phaser.Physics.Ninja.Tile.TYPE_CONCAVE]=this.projAABB_Concave,this.aabbTileProjections[Phaser.Physics.Ninja.Tile.TYPE_CONVEX]=this.projAABB_Convex,this.aabbTileProjections[Phaser.Physics.Ninja.Tile.TYPE_22DEGs]=this.projAABB_22DegS,this.aabbTileProjections[Phaser.Physics.Ninja.Tile.TYPE_22DEGb]=this.projAABB_22DegB,this.aabbTileProjections[Phaser.Physics.Ninja.Tile.TYPE_67DEGs]=this.projAABB_67DegS,this.aabbTileProjections[Phaser.Physics.Ninja.Tile.TYPE_67DEGb]=this.projAABB_67DegB,this.aabbTileProjections[Phaser.Physics.Ninja.Tile.TYPE_HALF]=this.projAABB_Half},Phaser.Physics.Ninja.AABB.prototype.constructor=Phaser.Physics.Ninja.AABB,Phaser.Physics.Ninja.AABB.COL_NONE=0,Phaser.Physics.Ninja.AABB.COL_AXIS=1,Phaser.Physics.Ninja.AABB.COL_OTHER=2,Phaser.Physics.Ninja.AABB.prototype={integrate:function(){var a=this.pos.x,b=this.pos.y;this.pos.x+=this.body.drag*this.pos.x-this.body.drag*this.oldpos.x,this.pos.y+=this.body.drag*this.pos.y-this.body.drag*this.oldpos.y+this.system.gravity*this.body.gravityScale,this.velocity.set(this.pos.x-a,this.pos.y-b),this.oldpos.set(a,b)},reportCollisionVsWorld:function(a,b,c,d){var e,f,g,h,i,j=this.pos,k=this.oldpos,l=j.x-k.x,m=j.y-k.y,n=l*c+m*d,o=n*c,p=n*d,q=l-o,r=m-p;0>n?(h=q*this.body.friction,i=r*this.body.friction,e=1+this.body.bounce,f=o*e,g=p*e,1===c?this.body.touching.left=!0:-1===c&&(this.body.touching.right=!0),1===d?this.body.touching.up=!0:-1===d&&(this.body.touching.down=!0)):f=g=h=i=0,j.x+=a,j.y+=b,k.x+=a+f+h,k.y+=b+g+i},reverse:function(){var a=this.pos.x-this.oldpos.x,b=this.pos.y-this.oldpos.y;this.oldpos.x<this.pos.x?this.oldpos.x=this.pos.x+a:this.oldpos.x>this.pos.x&&(this.oldpos.x=this.pos.x-a),this.oldpos.y<this.pos.y?this.oldpos.y=this.pos.y+b:this.oldpos.y>this.pos.y&&(this.oldpos.y=this.pos.y-b)},reportCollisionVsBody:function(a,b,c,d,e){var f=this.pos.x-this.oldpos.x,g=this.pos.y-this.oldpos.y,h=f*c+g*d;return this.body.immovable&&e.body.immovable?(a*=.5,b*=.5,this.pos.add(a,b),this.oldpos.set(this.pos.x,this.pos.y),e.pos.subtract(a,b),void e.oldpos.set(e.pos.x,e.pos.y)):void(this.body.immovable||e.body.immovable?this.body.immovable?e.body.immovable||(e.pos.subtract(a,b),0>h&&e.reverse()):(this.pos.subtract(a,b),0>h&&this.reverse()):(a*=.5,b*=.5,this.pos.add(a,b),e.pos.subtract(a,b),0>h&&(this.reverse(),e.reverse())))},collideWorldBounds:function(){var a=this.system.bounds.x-(this.pos.x-this.xw);a>0?this.reportCollisionVsWorld(a,0,1,0,null):(a=this.pos.x+this.xw-this.system.bounds.right,a>0&&this.reportCollisionVsWorld(-a,0,-1,0,null));var b=this.system.bounds.y-(this.pos.y-this.yw);b>0?this.reportCollisionVsWorld(0,b,0,1,null):(b=this.pos.y+this.yw-this.system.bounds.bottom,b>0&&this.reportCollisionVsWorld(0,-b,0,-1,null))},collideAABBVsAABB:function(a){var b=this.pos,c=a,d=c.pos.x,e=c.pos.y,f=c.xw,g=c.yw,h=b.x-d,i=f+this.xw-Math.abs(h);if(i>0){var j=b.y-e,k=g+this.yw-Math.abs(j);if(k>0){k>i?0>h?(i*=-1,k=0):k=0:0>j?(i=0,k*=-1):i=0;var l=Math.sqrt(i*i+k*k);return this.reportCollisionVsBody(i,k,i/l,k/l,c),Phaser.Physics.Ninja.AABB.COL_AXIS}}return!1},collideAABBVsTile:function(a){var b=this.pos.x-a.pos.x,c=a.xw+this.xw-Math.abs(b);if(c>0){var d=this.pos.y-a.pos.y,e=a.yw+this.yw-Math.abs(d);if(e>0)return e>c?0>b?(c*=-1,e=0):e=0:0>d?(c=0,e*=-1):c=0,this.resolveTile(c,e,this,a)}return!1},resolveTile:function(a,b,c,d){return 0<d.id?this.aabbTileProjections[d.type](a,b,c,d):!1},projAABB_Full:function(a,b,c,d){var e=Math.sqrt(a*a+b*b);return c.reportCollisionVsWorld(a,b,a/e,b/e,d),Phaser.Physics.Ninja.AABB.COL_AXIS},projAABB_Half:function(a,b,c,d){var e=d.signx,f=d.signy,g=c.pos.x-e*c.xw-d.pos.x,h=c.pos.y-f*c.yw-d.pos.y,i=g*e+h*f;if(0>i){e*=-i,f*=-i;var j=Math.sqrt(e*e+f*f),k=Math.sqrt(a*a+b*b);return j>k?(c.reportCollisionVsWorld(a,b,a/k,b/k,d),Phaser.Physics.Ninja.AABB.COL_AXIS):(c.reportCollisionVsWorld(e,f,d.signx,d.signy,d),Phaser.Physics.Ninja.AABB.COL_OTHER)}return Phaser.Physics.Ninja.AABB.COL_NONE},projAABB_45Deg:function(a,b,c,d){var e=d.signx,f=d.signy,g=c.pos.x-e*c.xw-d.pos.x,h=c.pos.y-f*c.yw-d.pos.y,i=d.sx,j=d.sy,k=g*i+h*j;if(0>k){i*=-k,j*=-k;var l=Math.sqrt(i*i+j*j),m=Math.sqrt(a*a+b*b);return l>m?(c.reportCollisionVsWorld(a,b,a/m,b/m,d),Phaser.Physics.Ninja.AABB.COL_AXIS):(c.reportCollisionVsWorld(i,j,d.sx,d.sy),Phaser.Physics.Ninja.AABB.COL_OTHER)}return Phaser.Physics.Ninja.AABB.COL_NONE},projAABB_22DegS:function(a,b,c,d){var e=d.signx,f=d.signy,g=c.pos.y-f*c.yw,h=d.pos.y-g;if(h*f>0){var i=c.pos.x-e*c.xw-(d.pos.x+e*d.xw),j=c.pos.y-f*c.yw-(d.pos.y-f*d.yw),k=d.sx,l=d.sy,m=i*k+j*l;if(0>m){k*=-m,l*=-m;var n=Math.sqrt(k*k+l*l),o=Math.sqrt(a*a+b*b),p=Math.abs(h);return n>o?o>p?(c.reportCollisionVsWorld(0,h,0,h/p,d),Phaser.Physics.Ninja.AABB.COL_OTHER):(c.reportCollisionVsWorld(a,b,a/o,b/o,d),Phaser.Physics.Ninja.AABB.COL_AXIS):n>p?(c.reportCollisionVsWorld(0,h,0,h/p,d),Phaser.Physics.Ninja.AABB.COL_OTHER):(c.reportCollisionVsWorld(k,l,d.sx,d.sy,d),Phaser.Physics.Ninja.AABB.COL_OTHER)}}return Phaser.Physics.Ninja.AABB.COL_NONE},projAABB_22DegB:function(a,b,c,d){var e=d.signx,f=d.signy,g=c.pos.x-e*c.xw-(d.pos.x-e*d.xw),h=c.pos.y-f*c.yw-(d.pos.y+f*d.yw),i=d.sx,j=d.sy,k=g*i+h*j;if(0>k){i*=-k,j*=-k;var l=Math.sqrt(i*i+j*j),m=Math.sqrt(a*a+b*b);return l>m?(c.reportCollisionVsWorld(a,b,a/m,b/m,d),Phaser.Physics.Ninja.AABB.COL_AXIS):(c.reportCollisionVsWorld(i,j,d.sx,d.sy,d),Phaser.Physics.Ninja.AABB.COL_OTHER)}return Phaser.Physics.Ninja.AABB.COL_NONE},projAABB_67DegS:function(a,b,c,d){var e=d.signx,f=d.signy,g=c.pos.x-e*c.xw,h=d.pos.x-g;if(h*e>0){var i=c.pos.x-e*c.xw-(d.pos.x-e*d.xw),j=c.pos.y-f*c.yw-(d.pos.y+f*d.yw),k=d.sx,l=d.sy,m=i*k+j*l;if(0>m){k*=-m,l*=-m;var n=Math.sqrt(k*k+l*l),o=Math.sqrt(a*a+b*b),p=Math.abs(h);return n>o?o>p?(c.reportCollisionVsWorld(h,0,h/p,0,d),Phaser.Physics.Ninja.AABB.COL_OTHER):(c.reportCollisionVsWorld(a,b,a/o,b/o,d),Phaser.Physics.Ninja.AABB.COL_AXIS):n>p?(c.reportCollisionVsWorld(h,0,h/p,0,d),Phaser.Physics.Ninja.AABB.COL_OTHER):(c.reportCollisionVsWorld(k,l,d.sx,d.sy,d),Phaser.Physics.Ninja.AABB.COL_OTHER)}}return Phaser.Physics.Ninja.AABB.COL_NONE},projAABB_67DegB:function(a,b,c,d){var e=d.signx,f=d.signy,g=c.pos.x-e*c.xw-(d.pos.x+e*d.xw),h=c.pos.y-f*c.yw-(d.pos.y-f*d.yw),i=d.sx,j=d.sy,k=g*i+h*j;if(0>k){i*=-k,j*=-k;var l=Math.sqrt(i*i+j*j),m=Math.sqrt(a*a+b*b);return l>m?(c.reportCollisionVsWorld(a,b,a/m,b/m,d),Phaser.Physics.Ninja.AABB.COL_AXIS):(c.reportCollisionVsWorld(i,j,d.sx,d.sy,d),Phaser.Physics.Ninja.AABB.COL_OTHER)}return Phaser.Physics.Ninja.AABB.COL_NONE},projAABB_Convex:function(a,b,c,d){var e=d.signx,f=d.signy,g=c.pos.x-e*c.xw-(d.pos.x-e*d.xw),h=c.pos.y-f*c.yw-(d.pos.y-f*d.yw),i=Math.sqrt(g*g+h*h),j=2*d.xw,k=Math.sqrt(j*j+0),l=k-i;if(0>e*g||0>f*h){var m=Math.sqrt(a*a+b*b);return c.reportCollisionVsWorld(a,b,a/m,b/m,d),Phaser.Physics.Ninja.AABB.COL_AXIS}return l>0?(g/=i,h/=i,c.reportCollisionVsWorld(g*l,h*l,g,h,d),Phaser.Physics.Ninja.AABB.COL_OTHER):Phaser.Physics.Ninja.AABB.COL_NONE},projAABB_Concave:function(a,b,c,d){var e=d.signx,f=d.signy,g=d.pos.x+e*d.xw-(c.pos.x-e*c.xw),h=d.pos.y+f*d.yw-(c.pos.y-f*c.yw),i=2*d.xw,j=Math.sqrt(i*i+0),k=Math.sqrt(g*g+h*h),l=k-j;if(l>0){var m=Math.sqrt(a*a+b*b);return l>m?(c.reportCollisionVsWorld(a,b,a/m,b/m,d),Phaser.Physics.Ninja.AABB.COL_AXIS):(g/=k,h/=k,c.reportCollisionVsWorld(g*l,h*l,g,h,d),Phaser.Physics.Ninja.AABB.COL_OTHER)}return Phaser.Physics.Ninja.AABB.COL_NONE},destroy:function(){this.body=null,this.system=null},render:function(a,b,c,d,e){var f=this.pos.x-this.xw-b,g=this.pos.y-this.yw-c;e?(a.fillStyle=d,a.fillRect(f,g,this.width,this.height)):(a.strokeStyle=d,a.strokeRect(f,g,this.width,this.height))}},Phaser.Physics.Ninja.Tile=function(a,b,c,d,e,f){"undefined"==typeof f&&(f=Phaser.Physics.Ninja.Tile.EMPTY),this.body=a,this.system=a.system,this.id=f,this.type=Phaser.Physics.Ninja.Tile.TYPE_EMPTY,this.pos=new Phaser.Point(b,c),this.oldpos=new Phaser.Point(b,c),this.id>1&&this.id<30&&(e=d),this.xw=Math.abs(d/2),this.yw=Math.abs(e/2),this.width=d,this.height=e,this.velocity=new Phaser.Point,this.signx=0,this.signy=0,this.sx=0,this.sy=0,this.body.gravityScale=0,this.body.collideWorldBounds=!1,this.id>0&&this.setType(this.id)},Phaser.Physics.Ninja.Tile.prototype.constructor=Phaser.Physics.Ninja.Tile,Phaser.Physics.Ninja.Tile.prototype={integrate:function(){var a=this.pos.x,b=this.pos.y;this.pos.x+=this.body.drag*this.pos.x-this.body.drag*this.oldpos.x,this.pos.y+=this.body.drag*this.pos.y-this.body.drag*this.oldpos.y+this.system.gravity*this.body.gravityScale,this.velocity.set(this.pos.x-a,this.pos.y-b),this.oldpos.set(a,b)},collideWorldBounds:function(){var a=this.system.bounds.x-(this.pos.x-this.xw);a>0?this.reportCollisionVsWorld(a,0,1,0,null):(a=this.pos.x+this.xw-this.system.bounds.right,a>0&&this.reportCollisionVsWorld(-a,0,-1,0,null));var b=this.system.bounds.y-(this.pos.y-this.yw);b>0?this.reportCollisionVsWorld(0,b,0,1,null):(b=this.pos.y+this.yw-this.system.bounds.bottom,b>0&&this.reportCollisionVsWorld(0,-b,0,-1,null))},reportCollisionVsWorld:function(a,b,c,d){var e,f,g,h,i,j=this.pos,k=this.oldpos,l=j.x-k.x,m=j.y-k.y,n=l*c+m*d,o=n*c,p=n*d,q=l-o,r=m-p;0>n?(h=q*this.body.friction,i=r*this.body.friction,e=1+this.body.bounce,f=o*e,g=p*e,1===c?this.body.touching.left=!0:-1===c&&(this.body.touching.right=!0),1===d?this.body.touching.up=!0:-1===d&&(this.body.touching.down=!0)):f=g=h=i=0,j.x+=a,j.y+=b,k.x+=a+f+h,k.y+=b+g+i},setType:function(a){return a===Phaser.Physics.Ninja.Tile.EMPTY?this.clear():(this.id=a,this.updateType()),this},clear:function(){this.id=Phaser.Physics.Ninja.Tile.EMPTY,this.updateType()},destroy:function(){this.body=null,this.system=null},updateType:function(){if(0===this.id)return this.type=Phaser.Physics.Ninja.Tile.TYPE_EMPTY,this.signx=0,this.signy=0,this.sx=0,this.sy=0,!0;if(this.id<Phaser.Physics.Ninja.Tile.TYPE_45DEG)this.type=Phaser.Physics.Ninja.Tile.TYPE_FULL,this.signx=0,this.signy=0,this.sx=0,this.sy=0;else if(this.id<Phaser.Physics.Ninja.Tile.TYPE_CONCAVE)if(this.type=Phaser.Physics.Ninja.Tile.TYPE_45DEG,this.id==Phaser.Physics.Ninja.Tile.SLOPE_45DEGpn)this.signx=1,this.signy=-1,this.sx=this.signx/Math.SQRT2,this.sy=this.signy/Math.SQRT2;else if(this.id==Phaser.Physics.Ninja.Tile.SLOPE_45DEGnn)this.signx=-1,this.signy=-1,this.sx=this.signx/Math.SQRT2,this.sy=this.signy/Math.SQRT2;else if(this.id==Phaser.Physics.Ninja.Tile.SLOPE_45DEGnp)this.signx=-1,this.signy=1,this.sx=this.signx/Math.SQRT2,this.sy=this.signy/Math.SQRT2;else{if(this.id!=Phaser.Physics.Ninja.Tile.SLOPE_45DEGpp)return!1;this.signx=1,this.signy=1,this.sx=this.signx/Math.SQRT2,this.sy=this.signy/Math.SQRT2}else if(this.id<Phaser.Physics.Ninja.Tile.TYPE_CONVEX)if(this.type=Phaser.Physics.Ninja.Tile.TYPE_CONCAVE,this.id==Phaser.Physics.Ninja.Tile.CONCAVEpn)this.signx=1,this.signy=-1,this.sx=0,this.sy=0;else if(this.id==Phaser.Physics.Ninja.Tile.CONCAVEnn)this.signx=-1,this.signy=-1,this.sx=0,this.sy=0;else if(this.id==Phaser.Physics.Ninja.Tile.CONCAVEnp)this.signx=-1,this.signy=1,this.sx=0,this.sy=0;else{if(this.id!=Phaser.Physics.Ninja.Tile.CONCAVEpp)return!1;this.signx=1,this.signy=1,this.sx=0,this.sy=0}else if(this.id<Phaser.Physics.Ninja.Tile.TYPE_22DEGs)if(this.type=Phaser.Physics.Ninja.Tile.TYPE_CONVEX,this.id==Phaser.Physics.Ninja.Tile.CONVEXpn)this.signx=1,this.signy=-1,this.sx=0,this.sy=0;else if(this.id==Phaser.Physics.Ninja.Tile.CONVEXnn)this.signx=-1,this.signy=-1,this.sx=0,this.sy=0;else if(this.id==Phaser.Physics.Ninja.Tile.CONVEXnp)this.signx=-1,this.signy=1,this.sx=0,this.sy=0;else{if(this.id!=Phaser.Physics.Ninja.Tile.CONVEXpp)return!1;this.signx=1,this.signy=1,this.sx=0,this.sy=0}else if(this.id<Phaser.Physics.Ninja.Tile.TYPE_22DEGb)if(this.type=Phaser.Physics.Ninja.Tile.TYPE_22DEGs,this.id==Phaser.Physics.Ninja.Tile.SLOPE_22DEGpnS){this.signx=1,this.signy=-1;var a=Math.sqrt(5);this.sx=1*this.signx/a,this.sy=2*this.signy/a}else if(this.id==Phaser.Physics.Ninja.Tile.SLOPE_22DEGnnS){this.signx=-1,this.signy=-1;var a=Math.sqrt(5);this.sx=1*this.signx/a,this.sy=2*this.signy/a}else if(this.id==Phaser.Physics.Ninja.Tile.SLOPE_22DEGnpS){this.signx=-1,this.signy=1;var a=Math.sqrt(5);this.sx=1*this.signx/a,this.sy=2*this.signy/a}else{if(this.id!=Phaser.Physics.Ninja.Tile.SLOPE_22DEGppS)return!1;this.signx=1,this.signy=1;var a=Math.sqrt(5);this.sx=1*this.signx/a,this.sy=2*this.signy/a}else if(this.id<Phaser.Physics.Ninja.Tile.TYPE_67DEGs)if(this.type=Phaser.Physics.Ninja.Tile.TYPE_22DEGb,this.id==Phaser.Physics.Ninja.Tile.SLOPE_22DEGpnB){this.signx=1,this.signy=-1;var a=Math.sqrt(5);this.sx=1*this.signx/a,this.sy=2*this.signy/a}else if(this.id==Phaser.Physics.Ninja.Tile.SLOPE_22DEGnnB){this.signx=-1,this.signy=-1;var a=Math.sqrt(5);this.sx=1*this.signx/a,this.sy=2*this.signy/a}else if(this.id==Phaser.Physics.Ninja.Tile.SLOPE_22DEGnpB){this.signx=-1,this.signy=1;var a=Math.sqrt(5);this.sx=1*this.signx/a,this.sy=2*this.signy/a}else{if(this.id!=Phaser.Physics.Ninja.Tile.SLOPE_22DEGppB)return!1;this.signx=1,this.signy=1;var a=Math.sqrt(5);this.sx=1*this.signx/a,this.sy=2*this.signy/a}else if(this.id<Phaser.Physics.Ninja.Tile.TYPE_67DEGb)if(this.type=Phaser.Physics.Ninja.Tile.TYPE_67DEGs,this.id==Phaser.Physics.Ninja.Tile.SLOPE_67DEGpnS){this.signx=1,this.signy=-1;var a=Math.sqrt(5);this.sx=2*this.signx/a,this.sy=1*this.signy/a}else if(this.id==Phaser.Physics.Ninja.Tile.SLOPE_67DEGnnS){this.signx=-1,this.signy=-1;var a=Math.sqrt(5);this.sx=2*this.signx/a,this.sy=1*this.signy/a}else if(this.id==Phaser.Physics.Ninja.Tile.SLOPE_67DEGnpS){this.signx=-1,this.signy=1;var a=Math.sqrt(5);this.sx=2*this.signx/a,this.sy=1*this.signy/a}else{if(this.id!=Phaser.Physics.Ninja.Tile.SLOPE_67DEGppS)return!1;this.signx=1,this.signy=1;var a=Math.sqrt(5);this.sx=2*this.signx/a,this.sy=1*this.signy/a}else if(this.id<Phaser.Physics.Ninja.Tile.TYPE_HALF)if(this.type=Phaser.Physics.Ninja.Tile.TYPE_67DEGb,this.id==Phaser.Physics.Ninja.Tile.SLOPE_67DEGpnB){this.signx=1,this.signy=-1;var a=Math.sqrt(5);this.sx=2*this.signx/a,this.sy=1*this.signy/a
}else if(this.id==Phaser.Physics.Ninja.Tile.SLOPE_67DEGnnB){this.signx=-1,this.signy=-1;var a=Math.sqrt(5);this.sx=2*this.signx/a,this.sy=1*this.signy/a}else if(this.id==Phaser.Physics.Ninja.Tile.SLOPE_67DEGnpB){this.signx=-1,this.signy=1;var a=Math.sqrt(5);this.sx=2*this.signx/a,this.sy=1*this.signy/a}else{if(this.id!=Phaser.Physics.Ninja.Tile.SLOPE_67DEGppB)return!1;this.signx=1,this.signy=1;var a=Math.sqrt(5);this.sx=2*this.signx/a,this.sy=1*this.signy/a}else if(this.type=Phaser.Physics.Ninja.Tile.TYPE_HALF,this.id==Phaser.Physics.Ninja.Tile.HALFd)this.signx=0,this.signy=-1,this.sx=this.signx,this.sy=this.signy;else if(this.id==Phaser.Physics.Ninja.Tile.HALFu)this.signx=0,this.signy=1,this.sx=this.signx,this.sy=this.signy;else if(this.id==Phaser.Physics.Ninja.Tile.HALFl)this.signx=1,this.signy=0,this.sx=this.signx,this.sy=this.signy;else{if(this.id!=Phaser.Physics.Ninja.Tile.HALFr)return!1;this.signx=-1,this.signy=0,this.sx=this.signx,this.sy=this.signy}}},Object.defineProperty(Phaser.Physics.Ninja.Tile.prototype,"x",{get:function(){return this.pos.x-this.xw},set:function(a){this.pos.x=a}}),Object.defineProperty(Phaser.Physics.Ninja.Tile.prototype,"y",{get:function(){return this.pos.y-this.yw},set:function(a){this.pos.y=a}}),Object.defineProperty(Phaser.Physics.Ninja.Tile.prototype,"bottom",{get:function(){return this.pos.y+this.yw}}),Object.defineProperty(Phaser.Physics.Ninja.Tile.prototype,"right",{get:function(){return this.pos.x+this.xw}}),Phaser.Physics.Ninja.Tile.EMPTY=0,Phaser.Physics.Ninja.Tile.FULL=1,Phaser.Physics.Ninja.Tile.SLOPE_45DEGpn=2,Phaser.Physics.Ninja.Tile.SLOPE_45DEGnn=3,Phaser.Physics.Ninja.Tile.SLOPE_45DEGnp=4,Phaser.Physics.Ninja.Tile.SLOPE_45DEGpp=5,Phaser.Physics.Ninja.Tile.CONCAVEpn=6,Phaser.Physics.Ninja.Tile.CONCAVEnn=7,Phaser.Physics.Ninja.Tile.CONCAVEnp=8,Phaser.Physics.Ninja.Tile.CONCAVEpp=9,Phaser.Physics.Ninja.Tile.CONVEXpn=10,Phaser.Physics.Ninja.Tile.CONVEXnn=11,Phaser.Physics.Ninja.Tile.CONVEXnp=12,Phaser.Physics.Ninja.Tile.CONVEXpp=13,Phaser.Physics.Ninja.Tile.SLOPE_22DEGpnS=14,Phaser.Physics.Ninja.Tile.SLOPE_22DEGnnS=15,Phaser.Physics.Ninja.Tile.SLOPE_22DEGnpS=16,Phaser.Physics.Ninja.Tile.SLOPE_22DEGppS=17,Phaser.Physics.Ninja.Tile.SLOPE_22DEGpnB=18,Phaser.Physics.Ninja.Tile.SLOPE_22DEGnnB=19,Phaser.Physics.Ninja.Tile.SLOPE_22DEGnpB=20,Phaser.Physics.Ninja.Tile.SLOPE_22DEGppB=21,Phaser.Physics.Ninja.Tile.SLOPE_67DEGpnS=22,Phaser.Physics.Ninja.Tile.SLOPE_67DEGnnS=23,Phaser.Physics.Ninja.Tile.SLOPE_67DEGnpS=24,Phaser.Physics.Ninja.Tile.SLOPE_67DEGppS=25,Phaser.Physics.Ninja.Tile.SLOPE_67DEGpnB=26,Phaser.Physics.Ninja.Tile.SLOPE_67DEGnnB=27,Phaser.Physics.Ninja.Tile.SLOPE_67DEGnpB=28,Phaser.Physics.Ninja.Tile.SLOPE_67DEGppB=29,Phaser.Physics.Ninja.Tile.HALFd=30,Phaser.Physics.Ninja.Tile.HALFr=31,Phaser.Physics.Ninja.Tile.HALFu=32,Phaser.Physics.Ninja.Tile.HALFl=33,Phaser.Physics.Ninja.Tile.TYPE_EMPTY=0,Phaser.Physics.Ninja.Tile.TYPE_FULL=1,Phaser.Physics.Ninja.Tile.TYPE_45DEG=2,Phaser.Physics.Ninja.Tile.TYPE_CONCAVE=6,Phaser.Physics.Ninja.Tile.TYPE_CONVEX=10,Phaser.Physics.Ninja.Tile.TYPE_22DEGs=14,Phaser.Physics.Ninja.Tile.TYPE_22DEGb=18,Phaser.Physics.Ninja.Tile.TYPE_67DEGs=22,Phaser.Physics.Ninja.Tile.TYPE_67DEGb=26,Phaser.Physics.Ninja.Tile.TYPE_HALF=30,Phaser.Physics.Ninja.Circle=function(a,b,c,d){this.body=a,this.system=a.system,this.pos=new Phaser.Point(b,c),this.oldpos=new Phaser.Point(b,c),this.radius=d,this.xw=d,this.yw=d,this.width=2*d,this.height=2*d,this.oH=0,this.oV=0,this.velocity=new Phaser.Point,this.circleTileProjections={},this.circleTileProjections[Phaser.Physics.Ninja.Tile.TYPE_FULL]=this.projCircle_Full,this.circleTileProjections[Phaser.Physics.Ninja.Tile.TYPE_45DEG]=this.projCircle_45Deg,this.circleTileProjections[Phaser.Physics.Ninja.Tile.TYPE_CONCAVE]=this.projCircle_Concave,this.circleTileProjections[Phaser.Physics.Ninja.Tile.TYPE_CONVEX]=this.projCircle_Convex,this.circleTileProjections[Phaser.Physics.Ninja.Tile.TYPE_22DEGs]=this.projCircle_22DegS,this.circleTileProjections[Phaser.Physics.Ninja.Tile.TYPE_22DEGb]=this.projCircle_22DegB,this.circleTileProjections[Phaser.Physics.Ninja.Tile.TYPE_67DEGs]=this.projCircle_67DegS,this.circleTileProjections[Phaser.Physics.Ninja.Tile.TYPE_67DEGb]=this.projCircle_67DegB,this.circleTileProjections[Phaser.Physics.Ninja.Tile.TYPE_HALF]=this.projCircle_Half},Phaser.Physics.Ninja.Circle.prototype.constructor=Phaser.Physics.Ninja.Circle,Phaser.Physics.Ninja.Circle.COL_NONE=0,Phaser.Physics.Ninja.Circle.COL_AXIS=1,Phaser.Physics.Ninja.Circle.COL_OTHER=2,Phaser.Physics.Ninja.Circle.prototype={integrate:function(){var a=this.pos.x,b=this.pos.y;this.pos.x+=this.body.drag*this.pos.x-this.body.drag*this.oldpos.x,this.pos.y+=this.body.drag*this.pos.y-this.body.drag*this.oldpos.y+this.system.gravity*this.body.gravityScale,this.velocity.set(this.pos.x-a,this.pos.y-b),this.oldpos.set(a,b)},reportCollisionVsWorld:function(a,b,c,d){var e,f,g,h,i,j=this.pos,k=this.oldpos,l=j.x-k.x,m=j.y-k.y,n=l*c+m*d,o=n*c,p=n*d,q=l-o,r=m-p;0>n?(h=q*this.body.friction,i=r*this.body.friction,e=1+this.body.bounce,f=o*e,g=p*e,1===c?this.body.touching.left=!0:-1===c&&(this.body.touching.right=!0),1===d?this.body.touching.up=!0:-1===d&&(this.body.touching.down=!0)):f=g=h=i=0,j.x+=a,j.y+=b,k.x+=a+f+h,k.y+=b+g+i},collideWorldBounds:function(){var a=this.system.bounds.x-(this.pos.x-this.radius);a>0?this.reportCollisionVsWorld(a,0,1,0,null):(a=this.pos.x+this.radius-this.system.bounds.right,a>0&&this.reportCollisionVsWorld(-a,0,-1,0,null));var b=this.system.bounds.y-(this.pos.y-this.radius);b>0?this.reportCollisionVsWorld(0,b,0,1,null):(b=this.pos.y+this.radius-this.system.bounds.bottom,b>0&&this.reportCollisionVsWorld(0,-b,0,-1,null))},collideCircleVsTile:function(a){var b=this.pos,c=this.radius,d=a,e=d.pos.x,f=d.pos.y,g=d.xw,h=d.yw,i=b.x-e,j=g+c-Math.abs(i);if(j>0){var k=b.y-f,l=h+c-Math.abs(k);if(l>0)return this.oH=0,this.oV=0,-g>i?this.oH=-1:i>g&&(this.oH=1),-h>k?this.oV=-1:k>h&&(this.oV=1),this.resolveCircleTile(j,l,this.oH,this.oV,this,d)}},resolveCircleTile:function(a,b,c,d,e,f){return 0<f.id?this.circleTileProjections[f.type](a,b,c,d,e,f):!1},projCircle_Full:function(a,b,c,d,e,f){if(0===c){if(0===d){if(b>a){var g=e.pos.x-f.pos.x;return 0>g?(e.reportCollisionVsWorld(-a,0,-1,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS):(e.reportCollisionVsWorld(a,0,1,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS)}var h=e.pos.y-f.pos.y;return 0>h?(e.reportCollisionVsWorld(0,-b,0,-1,f),Phaser.Physics.Ninja.Circle.COL_AXIS):(e.reportCollisionVsWorld(0,b,0,1,f),Phaser.Physics.Ninja.Circle.COL_AXIS)}return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS}if(0===d)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var i=f.pos.x+c*f.xw,j=f.pos.y+d*f.yw,g=e.pos.x-i,h=e.pos.y-j,k=Math.sqrt(g*g+h*h),l=e.radius-k;return l>0?(0===k?(g=c/Math.SQRT2,h=d/Math.SQRT2):(g/=k,h/=k),e.reportCollisionVsWorld(g*l,h*l,g,h,f),Phaser.Physics.Ninja.Circle.COL_OTHER):Phaser.Physics.Ninja.Circle.COL_NONE},projCircle_45Deg:function(a,b,c,d,e,f){var g,h=f.signx,i=f.signy;if(0===c)if(0===d){var j=f.sx,k=f.sy,l=e.pos.x-j*e.radius-f.pos.x,m=e.pos.y-k*e.radius-f.pos.y,n=l*j+m*k;if(0>n){j*=-n,k*=-n,b>a?(g=a,b=0,e.pos.x-f.pos.x<0&&(a*=-1)):(g=b,a=0,e.pos.y-f.pos.y<0&&(b*=-1));var o=Math.sqrt(j*j+k*k);return o>g?(e.reportCollisionVsWorld(a,b,a/g,b/g,f),Phaser.Physics.Ninja.Circle.COL_AXIS):(e.reportCollisionVsWorld(j,k,f.sx,f.sy,f),Phaser.Physics.Ninja.Circle.COL_OTHER)}}else{if(0>i*d)return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var j=f.sx,k=f.sy,l=e.pos.x-(f.pos.x-h*f.xw),m=e.pos.y-(f.pos.y+d*f.yw),p=l*-k+m*j;if(p*h*i>0){var q=Math.sqrt(l*l+m*m),r=e.radius-q;if(r>0)return l/=q,m/=q,e.reportCollisionVsWorld(l*r,m*r,l,m,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var n=l*j+m*k,r=e.radius-Math.abs(n);if(r>0)return e.reportCollisionVsWorld(j*r,k*r,j,k,f),Phaser.Physics.Ninja.Circle.COL_OTHER}}else if(0===d){if(0>h*c)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var j=f.sx,k=f.sy,l=e.pos.x-(f.pos.x+c*f.xw),m=e.pos.y-(f.pos.y-i*f.yw),p=l*-k+m*j;if(0>p*h*i){var q=Math.sqrt(l*l+m*m),r=e.radius-q;if(r>0)return l/=q,m/=q,e.reportCollisionVsWorld(l*r,m*r,l,m,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var n=l*j+m*k,r=e.radius-Math.abs(n);if(r>0)return e.reportCollisionVsWorld(j*r,k*r,j,k,f),Phaser.Physics.Ninja.Circle.COL_OTHER}}else{if(h*c+i*d>0)return Phaser.Physics.Ninja.Circle.COL_NONE;var s=f.pos.x+c*f.xw,t=f.pos.y+d*f.yw,u=e.pos.x-s,v=e.pos.y-t,q=Math.sqrt(u*u+v*v),r=e.radius-q;if(r>0)return 0===q?(u=c/Math.SQRT2,v=d/Math.SQRT2):(u/=q,v/=q),e.reportCollisionVsWorld(u*r,v*r,u,v,f),Phaser.Physics.Ninja.Circle.COL_OTHER}return Phaser.Physics.Ninja.Circle.COL_NONE},projCircle_Concave:function(a,b,c,d,e,f){var g,h=f.signx,i=f.signy;if(0===c){if(0===d){var j=f.pos.x+h*f.xw-e.pos.x,k=f.pos.y+i*f.yw-e.pos.y,l=2*f.xw,m=Math.sqrt(l*l+0),n=Math.sqrt(j*j+k*k),o=n+e.radius-m;return o>0?(b>a?(g=a,b=0,e.pos.x-f.pos.x<0&&(a*=-1)):(g=b,a=0,e.pos.y-f.pos.y<0&&(b*=-1)),o>g?(e.reportCollisionVsWorld(a,b,a/g,b/g,f),Phaser.Physics.Ninja.Circle.COL_AXIS):(j/=n,k/=n,e.reportCollisionVsWorld(j*o,k*o,j,k,f),Phaser.Physics.Ninja.Circle.COL_OTHER)):Phaser.Physics.Ninja.Circle.COL_NONE}if(0>i*d)return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var p=f.pos.x-h*f.xw,q=f.pos.y+d*f.yw,r=e.pos.x-p,s=e.pos.y-q,n=Math.sqrt(r*r+s*s),o=e.radius-n;if(o>0)return 0===n?(r=0,s=d):(r/=n,s/=n),e.reportCollisionVsWorld(r*o,s*o,r,s,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else if(0===d){if(0>h*c)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var p=f.pos.x+c*f.xw,q=f.pos.y-i*f.yw,r=e.pos.x-p,s=e.pos.y-q,n=Math.sqrt(r*r+s*s),o=e.radius-n;if(o>0)return 0===n?(r=c,s=0):(r/=n,s/=n),e.reportCollisionVsWorld(r*o,s*o,r,s,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{if(h*c+i*d>0)return Phaser.Physics.Ninja.Circle.COL_NONE;var p=f.pos.x+c*f.xw,q=f.pos.y+d*f.yw,r=e.pos.x-p,s=e.pos.y-q,n=Math.sqrt(r*r+s*s),o=e.radius-n;if(o>0)return 0===n?(r=c/Math.SQRT2,s=d/Math.SQRT2):(r/=n,s/=n),e.reportCollisionVsWorld(r*o,s*o,r,s,f),Phaser.Physics.Ninja.Circle.COL_OTHER}return Phaser.Physics.Ninja.Circle.COL_NONE},projCircle_Convex:function(a,b,c,d,e,f){var g,h=f.signx,i=f.signy;if(0===c)if(0===d){var j=e.pos.x-(f.pos.x-h*f.xw),k=e.pos.y-(f.pos.y-i*f.yw),l=2*f.xw,m=Math.sqrt(l*l+0),n=Math.sqrt(j*j+k*k),o=m+e.radius-n;if(o>0)return b>a?(g=a,b=0,e.pos.x-f.pos.x<0&&(a*=-1)):(g=b,a=0,e.pos.y-f.pos.y<0&&(b*=-1)),o>g?(e.reportCollisionVsWorld(a,b,a/g,b/g,f),Phaser.Physics.Ninja.Circle.COL_AXIS):(j/=n,k/=n,e.reportCollisionVsWorld(j*o,k*o,j,k,f),Phaser.Physics.Ninja.Circle.COL_OTHER)}else{if(0>i*d)return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var j=e.pos.x-(f.pos.x-h*f.xw),k=e.pos.y-(f.pos.y-i*f.yw),l=2*f.xw,m=Math.sqrt(l*l+0),n=Math.sqrt(j*j+k*k),o=m+e.radius-n;if(o>0)return j/=n,k/=n,e.reportCollisionVsWorld(j*o,k*o,j,k,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else if(0===d){if(0>h*c)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var j=e.pos.x-(f.pos.x-h*f.xw),k=e.pos.y-(f.pos.y-i*f.yw),l=2*f.xw,m=Math.sqrt(l*l+0),n=Math.sqrt(j*j+k*k),o=m+e.radius-n;if(o>0)return j/=n,k/=n,e.reportCollisionVsWorld(j*o,k*o,j,k,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else if(h*c+i*d>0){var j=e.pos.x-(f.pos.x-h*f.xw),k=e.pos.y-(f.pos.y-i*f.yw),l=2*f.xw,m=Math.sqrt(l*l+0),n=Math.sqrt(j*j+k*k),o=m+e.radius-n;if(o>0)return j/=n,k/=n,e.reportCollisionVsWorld(j*o,k*o,j,k,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var p=f.pos.x+c*f.xw,q=f.pos.y+d*f.yw,r=e.pos.x-p,s=e.pos.y-q,n=Math.sqrt(r*r+s*s),o=e.radius-n;if(o>0)return 0===n?(r=c/Math.SQRT2,s=d/Math.SQRT2):(r/=n,s/=n),e.reportCollisionVsWorld(r*o,s*o,r,s,f),Phaser.Physics.Ninja.Circle.COL_OTHER}return Phaser.Physics.Ninja.Circle.COL_NONE},projCircle_Half:function(a,b,c,d,e,f){var g=f.signx,h=f.signy,i=c*g+d*h;if(i>0)return Phaser.Physics.Ninja.Circle.COL_NONE;if(0===c)if(0===d){var j=e.radius,k=e.pos.x-g*j-f.pos.x,l=e.pos.y-h*j-f.pos.y,m=g,n=h,o=k*m+l*n;if(0>o){m*=-o,n*=-o;var p=Math.sqrt(m*m+n*n),q=Math.sqrt(a*a+b*b);return p>q?(e.reportCollisionVsWorld(a,b,a/q,b/q,f),Phaser.Physics.Ninja.Circle.COL_AXIS):(e.reportCollisionVsWorld(m,n,f.signx,f.signy),Phaser.Physics.Ninja.Circle.COL_OTHER)}}else{if(0!==i)return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var r=e.pos.x-f.pos.x;if(0>r*g)return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var s=e.pos.y-(f.pos.y+d*f.yw),t=Math.sqrt(r*r+s*s),u=e.radius-t;if(u>0)return 0===t?(r=g/Math.SQRT2,s=d/Math.SQRT2):(r/=t,s/=t),e.reportCollisionVsWorld(r*u,s*u,r,s,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else if(0===d){if(0!==i)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var s=e.pos.y-f.pos.y;if(0>s*h)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var r=e.pos.x-(f.pos.x+c*f.xw),t=Math.sqrt(r*r+s*s),u=e.radius-t;if(u>0)return 0===t?(r=g/Math.SQRT2,s=d/Math.SQRT2):(r/=t,s/=t),e.reportCollisionVsWorld(r*u,s*u,r,s,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var v=f.pos.x+c*f.xw,w=f.pos.y+d*f.yw,r=e.pos.x-v,s=e.pos.y-w,t=Math.sqrt(r*r+s*s),u=e.radius-t;if(u>0)return 0===t?(r=c/Math.SQRT2,s=d/Math.SQRT2):(r/=t,s/=t),e.reportCollisionVsWorld(r*u,s*u,r,s,f),Phaser.Physics.Ninja.Circle.COL_OTHER}return Phaser.Physics.Ninja.Circle.COL_NONE},projCircle_22DegS:function(a,b,c,d,e,f){var g,h=f.signx,i=f.signy;if(i*d>0)return Phaser.Physics.Ninja.Circle.COL_NONE;if(0===c){if(0!==d)return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var j=f.sx,k=f.sy,l=e.radius,m=e.pos.x-(f.pos.x-h*f.xw),n=e.pos.y-f.pos.y,o=m*-k+n*j;if(o*h*i>0){var p=Math.sqrt(m*m+n*n),q=l-p;if(q>0)return m/=p,n/=p,e.reportCollisionVsWorld(m*q,n*q,m,n,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{m-=l*j,n-=l*k;var r=m*j+n*k;if(0>r){j*=-r,k*=-r;var s=Math.sqrt(j*j+k*k);return b>a?(g=a,b=0,e.pos.x-f.pos.x<0&&(a*=-1)):(g=b,a=0,e.pos.y-f.pos.y<0&&(b*=-1)),s>g?(e.reportCollisionVsWorld(a,b,a/g,b/g,f),Phaser.Physics.Ninja.Circle.COL_AXIS):(e.reportCollisionVsWorld(j,k,f.sx,f.sy,f),Phaser.Physics.Ninja.Circle.COL_OTHER)}}}else if(0===d)if(0>h*c){var t=f.pos.x-h*f.xw,u=f.pos.y,v=e.pos.x-t,w=e.pos.y-u;if(0>w*i)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var p=Math.sqrt(v*v+w*w),q=e.radius-p;if(q>0)return 0===p?(v=c/Math.SQRT2,w=d/Math.SQRT2):(v/=p,w/=p),e.reportCollisionVsWorld(v*q,w*q,v,w,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var j=f.sx,k=f.sy,m=e.pos.x-(f.pos.x+c*f.xw),n=e.pos.y-(f.pos.y-i*f.yw),o=m*-k+n*j;if(0>o*h*i){var p=Math.sqrt(m*m+n*n),q=e.radius-p;if(q>0)return m/=p,n/=p,e.reportCollisionVsWorld(m*q,n*q,m,n,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var r=m*j+n*k,q=e.radius-Math.abs(r);if(q>0)return e.reportCollisionVsWorld(j*q,k*q,j,k,f),Phaser.Physics.Ninja.Circle.COL_OTHER}}else{var t=f.pos.x+c*f.xw,u=f.pos.y+d*f.yw,v=e.pos.x-t,w=e.pos.y-u,p=Math.sqrt(v*v+w*w),q=e.radius-p;if(q>0)return 0===p?(v=c/Math.SQRT2,w=d/Math.SQRT2):(v/=p,w/=p),e.reportCollisionVsWorld(v*q,w*q,v,w,f),Phaser.Physics.Ninja.Circle.COL_OTHER}return Phaser.Physics.Ninja.Circle.COL_NONE},projCircle_22DegB:function(a,b,c,d,e,f){var g,h=f.signx,i=f.signy;if(0===c)if(0===d){var j=f.sx,k=f.sy,l=e.radius,m=e.pos.x-j*l-(f.pos.x-h*f.xw),n=e.pos.y-k*l-(f.pos.y+i*f.yw),o=m*j+n*k;if(0>o){j*=-o,k*=-o;var p=Math.sqrt(j*j+k*k);return b>a?(g=a,b=0,e.pos.x-f.pos.x<0&&(a*=-1)):(g=b,a=0,e.pos.y-f.pos.y<0&&(b*=-1)),p>g?(e.reportCollisionVsWorld(a,b,a/g,b/g,f),Phaser.Physics.Ninja.Circle.COL_AXIS):(e.reportCollisionVsWorld(j,k,f.sx,f.sy,f),Phaser.Physics.Ninja.Circle.COL_OTHER)}}else{if(0>i*d)return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var j=f.sx,k=f.sy,m=e.pos.x-(f.pos.x-h*f.xw),n=e.pos.y-(f.pos.y+i*f.yw),q=m*-k+n*j;if(q*h*i>0){var r=Math.sqrt(m*m+n*n),s=e.radius-r;if(s>0)return m/=r,n/=r,e.reportCollisionVsWorld(m*s,n*s,m,n,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var o=m*j+n*k,s=e.radius-Math.abs(o);if(s>0)return e.reportCollisionVsWorld(j*s,k*s,j,k,f),Phaser.Physics.Ninja.Circle.COL_OTHER}}else if(0===d){if(0>h*c)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var m=e.pos.x-(f.pos.x+h*f.xw),n=e.pos.y-f.pos.y;if(0>n*i)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var j=f.sx,k=f.sy,q=m*-k+n*j;if(0>q*h*i){var r=Math.sqrt(m*m+n*n),s=e.radius-r;if(s>0)return m/=r,n/=r,e.reportCollisionVsWorld(m*s,n*s,m,n,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var o=m*j+n*k,s=e.radius-Math.abs(o);if(s>0)return e.reportCollisionVsWorld(j*s,k*s,f.sx,f.sy,f),Phaser.Physics.Ninja.Circle.COL_OTHER}}else{if(h*c+i*d>0){var t=Math.sqrt(5),j=1*h/t,k=2*i/t,l=e.radius,m=e.pos.x-j*l-(f.pos.x-h*f.xw),n=e.pos.y-k*l-(f.pos.y+i*f.yw),o=m*j+n*k;return 0>o?(e.reportCollisionVsWorld(-j*o,-k*o,f.sx,f.sy,f),Phaser.Physics.Ninja.Circle.COL_OTHER):Phaser.Physics.Ninja.Circle.COL_NONE}var u=f.pos.x+c*f.xw,v=f.pos.y+d*f.yw,w=e.pos.x-u,x=e.pos.y-v,r=Math.sqrt(w*w+x*x),s=e.radius-r;if(s>0)return 0===r?(w=c/Math.SQRT2,x=d/Math.SQRT2):(w/=r,x/=r),e.reportCollisionVsWorld(w*s,x*s,w,x,f),Phaser.Physics.Ninja.Circle.COL_OTHER}return Phaser.Physics.Ninja.Circle.COL_NONE},projCircle_67DegS:function(a,b,c,d,e,f){var g=f.signx,h=f.signy;if(g*c>0)return Phaser.Physics.Ninja.Circle.COL_NONE;if(0===c)if(0===d){var i,j=f.sx,k=f.sy,l=e.radius,m=e.pos.x-f.pos.x,n=e.pos.y-(f.pos.y-h*f.yw),o=m*-k+n*j;if(0>o*g*h){var p=Math.sqrt(m*m+n*n),q=l-p;if(q>0)return m/=p,n/=p,e.reportCollisionVsWorld(m*q,n*q,m,n,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{m-=l*j,n-=l*k;var r=m*j+n*k;if(0>r){j*=-r,k*=-r;var s=Math.sqrt(j*j+k*k);return b>a?(i=a,b=0,e.pos.x-f.pos.x<0&&(a*=-1)):(i=b,a=0,e.pos.y-f.pos.y<0&&(b*=-1)),s>i?(e.reportCollisionVsWorld(a,b,a/i,b/i,f),Phaser.Physics.Ninja.Circle.COL_AXIS):(e.reportCollisionVsWorld(j,k,f.sx,f.sy,f),Phaser.Physics.Ninja.Circle.COL_OTHER)}}}else if(0>h*d){var t=f.pos.x,u=f.pos.y-h*f.yw,v=e.pos.x-t,w=e.pos.y-u;if(0>v*g)return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var p=Math.sqrt(v*v+w*w),q=e.radius-p;if(q>0)return 0===p?(v=c/Math.SQRT2,w=d/Math.SQRT2):(v/=p,w/=p),e.reportCollisionVsWorld(v*q,w*q,v,w,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var j=f.sx,k=f.sy,m=e.pos.x-(f.pos.x-g*f.xw),n=e.pos.y-(f.pos.y+d*f.yw),o=m*-k+n*j;if(o*g*h>0){var p=Math.sqrt(m*m+n*n),q=e.radius-p;if(q>0)return m/=p,n/=p,e.reportCollisionVsWorld(m*q,n*q,m,n,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var r=m*j+n*k,q=e.radius-Math.abs(r);if(q>0)return e.reportCollisionVsWorld(j*q,k*q,f.sx,f.sy,f),Phaser.Physics.Ninja.Circle.COL_OTHER}}else{if(0===d)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var t=f.pos.x+c*f.xw,u=f.pos.y+d*f.yw,v=e.pos.x-t,w=e.pos.y-u,p=Math.sqrt(v*v+w*w),q=e.radius-p;if(q>0)return 0===p?(v=c/Math.SQRT2,w=d/Math.SQRT2):(v/=p,w/=p),e.reportCollisionVsWorld(v*q,w*q,v,w,f),Phaser.Physics.Ninja.Circle.COL_OTHER}return Phaser.Physics.Ninja.Circle.COL_NONE},projCircle_67DegB:function(a,b,c,d,e,f){var g=f.signx,h=f.signy;if(0===c)if(0===d){var i,j=f.sx,k=f.sy,l=e.radius,m=e.pos.x-j*l-(f.pos.x+g*f.xw),n=e.pos.y-k*l-(f.pos.y-h*f.yw),o=m*j+n*k;if(0>o){j*=-o,k*=-o;var p=Math.sqrt(j*j+k*k);return b>a?(i=a,b=0,e.pos.x-f.pos.x<0&&(a*=-1)):(i=b,a=0,e.pos.y-f.pos.y<0&&(b*=-1)),p>i?(e.reportCollisionVsWorld(a,b,a/i,b/i,f),Phaser.Physics.Ninja.Circle.COL_AXIS):(e.reportCollisionVsWorld(j,k,f.sx,f.sy,f),Phaser.Physics.Ninja.Circle.COL_OTHER)}}else{if(0>h*d)return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var m=e.pos.x-f.pos.x,n=e.pos.y-(f.pos.y+h*f.yw);if(0>m*g)return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var j=f.sx,k=f.sy,q=m*-k+n*j;if(q*g*h>0){var r=Math.sqrt(m*m+n*n),s=e.radius-r;if(s>0)return m/=r,n/=r,e.reportCollisionVsWorld(m*s,n*s,m,n,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var o=m*j+n*k,s=e.radius-Math.abs(o);if(s>0)return e.reportCollisionVsWorld(j*s,k*s,j,k,f),Phaser.Physics.Ninja.Circle.COL_OTHER}}else if(0===d){if(0>g*c)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var t=Math.sqrt(5),j=2*g/t,k=1*h/t,m=e.pos.x-(f.pos.x+g*f.xw),n=e.pos.y-(f.pos.y-h*f.yw),q=m*-k+n*j;if(0>q*g*h){var r=Math.sqrt(m*m+n*n),s=e.radius-r;if(s>0)return m/=r,n/=r,e.reportCollisionVsWorld(m*s,n*s,m,n,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var o=m*j+n*k,s=e.radius-Math.abs(o);if(s>0)return e.reportCollisionVsWorld(j*s,k*s,f.sx,f.sy,f),Phaser.Physics.Ninja.Circle.COL_OTHER}}else{if(g*c+h*d>0){var j=f.sx,k=f.sy,l=e.radius,m=e.pos.x-j*l-(f.pos.x+g*f.xw),n=e.pos.y-k*l-(f.pos.y-h*f.yw),o=m*j+n*k;return 0>o?(e.reportCollisionVsWorld(-j*o,-k*o,f.sx,f.sy,f),Phaser.Physics.Ninja.Circle.COL_OTHER):Phaser.Physics.Ninja.Circle.COL_NONE}var u=f.pos.x+c*f.xw,v=f.pos.y+d*f.yw,w=e.pos.x-u,x=e.pos.y-v,r=Math.sqrt(w*w+x*x),s=e.radius-r;if(s>0)return 0===r?(w=c/Math.SQRT2,x=d/Math.SQRT2):(w/=r,x/=r),e.reportCollisionVsWorld(w*s,x*s,w,x,f),Phaser.Physics.Ninja.Circle.COL_OTHER}return Phaser.Physics.Ninja.Circle.COL_NONE},destroy:function(){this.body=null,this.system=null},render:function(a,b,c,d,e){var f=this.pos.x-b,g=this.pos.y-c;a.beginPath(),a.arc(f,g,this.radius,0,2*Math.PI,!1),e?(a.fillStyle=d,a.fill()):(a.strokeStyle=d,a.stroke())}},!function(a){"object"==typeof exports?module.exports=a():"function"==typeof define&&define.amd?define("p2",function(){return this.p2=a()}()):"undefined"!=typeof window?window.p2=a():"undefined"!=typeof global?self.p2=a():"undefined"!=typeof self&&(self.p2=a())}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){if(!d)var d=1e-6;if(!e)var e="undefined"!=typeof Float32Array?Float32Array:Array;var f={};f.setMatrixArrayType=function(a){e=a},"undefined"!=typeof c&&(c.glMatrix=f);var g={};g.create=function(){var a=new e(2);return a[0]=0,a[1]=0,a},g.clone=function(a){var b=new e(2);return b[0]=a[0],b[1]=a[1],b},g.fromValues=function(a,b){var c=new e(2);return c[0]=a,c[1]=b,c},g.copy=function(a,b){return a[0]=b[0],a[1]=b[1],a},g.set=function(a,b,c){return a[0]=b,a[1]=c,a},g.add=function(a,b,c){return a[0]=b[0]+c[0],a[1]=b[1]+c[1],a},g.subtract=function(a,b,c){return a[0]=b[0]-c[0],a[1]=b[1]-c[1],a},g.sub=g.subtract,g.multiply=function(a,b,c){return a[0]=b[0]*c[0],a[1]=b[1]*c[1],a},g.mul=g.multiply,g.divide=function(a,b,c){return a[0]=b[0]/c[0],a[1]=b[1]/c[1],a},g.div=g.divide,g.min=function(a,b,c){return a[0]=Math.min(b[0],c[0]),a[1]=Math.min(b[1],c[1]),a},g.max=function(a,b,c){return a[0]=Math.max(b[0],c[0]),a[1]=Math.max(b[1],c[1]),a},g.scale=function(a,b,c){return a[0]=b[0]*c,a[1]=b[1]*c,a},g.distance=function(a,b){var c=b[0]-a[0],d=b[1]-a[1];return Math.sqrt(c*c+d*d)},g.dist=g.distance,g.squaredDistance=function(a,b){var c=b[0]-a[0],d=b[1]-a[1];return c*c+d*d},g.sqrDist=g.squaredDistance,g.length=function(a){var b=a[0],c=a[1];return Math.sqrt(b*b+c*c)},g.len=g.length,g.squaredLength=function(a){var b=a[0],c=a[1];return b*b+c*c},g.sqrLen=g.squaredLength,g.negate=function(a,b){return a[0]=-b[0],a[1]=-b[1],a},g.normalize=function(a,b){var c=b[0],d=b[1],e=c*c+d*d;return e>0&&(e=1/Math.sqrt(e),a[0]=b[0]*e,a[1]=b[1]*e),a},g.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]},g.cross=function(a,b,c){var d=b[0]*c[1]-b[1]*c[0];return a[0]=a[1]=0,a[2]=d,a},g.lerp=function(a,b,c,d){var e=b[0],f=b[1];return a[0]=e+d*(c[0]-e),a[1]=f+d*(c[1]-f),a},g.transformMat2=function(a,b,c){var d=b[0],e=b[1];return a[0]=c[0]*d+c[2]*e,a[1]=c[1]*d+c[3]*e,a},g.transformMat2d=function(a,b,c){var d=b[0],e=b[1];return a[0]=c[0]*d+c[2]*e+c[4],a[1]=c[1]*d+c[3]*e+c[5],a},g.transformMat3=function(a,b,c){var d=b[0],e=b[1];return a[0]=c[0]*d+c[3]*e+c[6],a[1]=c[1]*d+c[4]*e+c[7],a},g.transformMat4=function(a,b,c){var d=b[0],e=b[1];return a[0]=c[0]*d+c[4]*e+c[12],a[1]=c[1]*d+c[5]*e+c[13],a},g.forEach=function(){var a=g.create();return function(b,c,d,e,f,g){var h,i;for(c||(c=2),d||(d=0),i=e?Math.min(e*c+d,b.length):b.length,h=d;i>h;h+=c)a[0]=b[h],a[1]=b[h+1],f(a,a,g),b[h]=a[0],b[h+1]=a[1];return b}}(),g.str=function(a){return"vec2("+a[0]+", "+a[1]+")"},"undefined"!=typeof c&&(c.vec2=g)},{}],2:[function(a,b){function c(){}var d=a("./Scalar");b.exports=c,c.lineInt=function(a,b,c){c=c||0;var e,f,g,h,i,j,k,l=[0,0];return e=a[1][1]-a[0][1],f=a[0][0]-a[1][0],g=e*a[0][0]+f*a[0][1],h=b[1][1]-b[0][1],i=b[0][0]-b[1][0],j=h*b[0][0]+i*b[0][1],k=e*i-h*f,d.eq(k,0,c)||(l[0]=(i*g-f*j)/k,l[1]=(e*j-h*g)/k),l},c.segmentsIntersect=function(a,b,c,d){var e=b[0]-a[0],f=b[1]-a[1],g=d[0]-c[0],h=d[1]-c[1];if(g*f-h*e==0)return!1;var i=(e*(c[1]-a[1])+f*(a[0]-c[0]))/(g*f-h*e),j=(g*(a[1]-c[1])+h*(c[0]-a[0]))/(h*e-g*f);return i>=0&&1>=i&&j>=0&&1>=j}},{"./Scalar":5}],3:[function(a,b){function c(){}b.exports=c,c.area=function(a,b,c){return(b[0]-a[0])*(c[1]-a[1])-(c[0]-a[0])*(b[1]-a[1])},c.left=function(a,b,d){return c.area(a,b,d)>0},c.leftOn=function(a,b,d){return c.area(a,b,d)>=0},c.right=function(a,b,d){return c.area(a,b,d)<0},c.rightOn=function(a,b,d){return c.area(a,b,d)<=0};var d=[],e=[];c.collinear=function(a,b,f,g){if(g){var h=d,i=e;h[0]=b[0]-a[0],h[1]=b[1]-a[1],i[0]=f[0]-b[0],i[1]=f[1]-b[1];var j=h[0]*i[0]+h[1]*i[1],k=Math.sqrt(h[0]*h[0]+h[1]*h[1]),l=Math.sqrt(i[0]*i[0]+i[1]*i[1]),m=Math.acos(j/(k*l));return g>m}return 0==c.area(a,b,f)},c.sqdist=function(a,b){var c=b[0]-a[0],d=b[1]-a[1];return c*c+d*d}},{}],4:[function(a,b){function c(){this.vertices=[]}function d(a,b,c,d,e){e=e||0;var f=b[1]-a[1],h=a[0]-b[0],i=f*a[0]+h*a[1],j=d[1]-c[1],k=c[0]-d[0],l=j*c[0]+k*c[1],m=f*k-j*h;return g.eq(m,0,e)?[0,0]:[(k*i-h*l)/m,(f*l-j*i)/m]}var e=a("./Line"),f=a("./Point"),g=a("./Scalar");b.exports=c,c.prototype.at=function(a){var b=this.vertices,c=b.length;return b[0>a?a%c+c:a%c]},c.prototype.first=function(){return this.vertices[0]},c.prototype.last=function(){return this.vertices[this.vertices.length-1]},c.prototype.clear=function(){this.vertices.length=0},c.prototype.append=function(a,b,c){if("undefined"==typeof b)throw new Error("From is not given!");if("undefined"==typeof c)throw new Error("To is not given!");if(b>c-1)throw new Error("lol1");if(c>a.vertices.length)throw new Error("lol2");if(0>b)throw new Error("lol3");for(var d=b;c>d;d++)this.vertices.push(a.vertices[d])},c.prototype.makeCCW=function(){for(var a=0,b=this.vertices,c=1;c<this.vertices.length;++c)(b[c][1]<b[a][1]||b[c][1]==b[a][1]&&b[c][0]>b[a][0])&&(a=c);f.left(this.at(a-1),this.at(a),this.at(a+1))||this.reverse()},c.prototype.reverse=function(){for(var a=[],b=0,c=this.vertices.length;b!==c;b++)a.push(this.vertices.pop());this.vertices=a},c.prototype.isReflex=function(a){return f.right(this.at(a-1),this.at(a),this.at(a+1))};var h=[],i=[];c.prototype.canSee=function(a,b){var c,d,g=h,j=i;if(f.leftOn(this.at(a+1),this.at(a),this.at(b))&&f.rightOn(this.at(a-1),this.at(a),this.at(b)))return!1;d=f.sqdist(this.at(a),this.at(b));for(var k=0;k!==this.vertices.length;++k)if((k+1)%this.vertices.length!==a&&k!==a&&f.leftOn(this.at(a),this.at(b),this.at(k+1))&&f.rightOn(this.at(a),this.at(b),this.at(k))&&(g[0]=this.at(a),g[1]=this.at(b),j[0]=this.at(k),j[1]=this.at(k+1),c=e.lineInt(g,j),f.sqdist(this.at(a),c)<d))return!1;return!0},c.prototype.copy=function(a,b,d){var e=d||new c;if(e.clear(),b>a)for(var f=a;b>=f;f++)e.vertices.push(this.vertices[f]);else{for(var f=0;b>=f;f++)e.vertices.push(this.vertices[f]);for(var f=a;f<this.vertices.length;f++)e.vertices.push(this.vertices[f])}return e},c.prototype.getCutEdges=function(){for(var a=[],b=[],d=[],e=new c,f=Number.MAX_VALUE,g=0;g<this.vertices.length;++g)if(this.isReflex(g))for(var h=0;h<this.vertices.length;++h)if(this.canSee(g,h)){b=this.copy(g,h,e).getCutEdges(),d=this.copy(h,g,e).getCutEdges();for(var i=0;i<d.length;i++)b.push(d[i]);b.length<f&&(a=b,f=b.length,a.push([this.at(g),this.at(h)]))}return a},c.prototype.decomp=function(){var a=this.getCutEdges();return a.length>0?this.slice(a):[this]},c.prototype.slice=function(a){if(0==a.length)return[this];if(a instanceof Array&&a.length&&a[0]instanceof Array&&2==a[0].length&&a[0][0]instanceof Array){for(var b=[this],c=0;c<a.length;c++)for(var d=a[c],e=0;e<b.length;e++){var f=b[e],g=f.slice(d);if(g){b.splice(e,1),b.push(g[0],g[1]);break}}return b}var d=a,c=this.vertices.indexOf(d[0]),e=this.vertices.indexOf(d[1]);return-1!=c&&-1!=e?[this.copy(c,e),this.copy(e,c)]:!1},c.prototype.isSimple=function(){for(var a=this.vertices,b=0;b<a.length-1;b++)for(var c=0;b-1>c;c++)if(e.segmentsIntersect(a[b],a[b+1],a[c],a[c+1]))return!1;for(var b=1;b<a.length-2;b++)if(e.segmentsIntersect(a[0],a[a.length-1],a[b],a[b+1]))return!1;return!0},c.prototype.quickDecomp=function(a,b,e,g,h,i){h=h||100,i=i||0,g=g||25,a="undefined"!=typeof a?a:[],b=b||[],e=e||[];var j=[0,0],k=[0,0],l=[0,0],m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=new c,u=new c,v=this,w=this.vertices;if(w.length<3)return a;if(i++,i>h)return console.warn("quickDecomp: max level ("+h+") reached."),a;for(var x=0;x<this.vertices.length;++x)if(v.isReflex(x)){b.push(v.vertices[x]),m=n=Number.MAX_VALUE;for(var y=0;y<this.vertices.length;++y)f.left(v.at(x-1),v.at(x),v.at(y))&&f.rightOn(v.at(x-1),v.at(x),v.at(y-1))&&(l=d(v.at(x-1),v.at(x),v.at(y),v.at(y-1)),f.right(v.at(x+1),v.at(x),l)&&(o=f.sqdist(v.vertices[x],l),n>o&&(n=o,k=l,r=y))),f.left(v.at(x+1),v.at(x),v.at(y+1))&&f.rightOn(v.at(x+1),v.at(x),v.at(y))&&(l=d(v.at(x+1),v.at(x),v.at(y),v.at(y+1)),f.left(v.at(x-1),v.at(x),l)&&(o=f.sqdist(v.vertices[x],l),m>o&&(m=o,j=l,q=y)));if(r==(q+1)%this.vertices.length)l[0]=(k[0]+j[0])/2,l[1]=(k[1]+j[1])/2,e.push(l),q>x?(t.append(v,x,q+1),t.vertices.push(l),u.vertices.push(l),0!=r&&u.append(v,r,v.vertices.length),u.append(v,0,x+1)):(0!=x&&t.append(v,x,v.vertices.length),t.append(v,0,q+1),t.vertices.push(l),u.vertices.push(l),u.append(v,r,x+1));else{if(r>q&&(q+=this.vertices.length),p=Number.MAX_VALUE,r>q)return a;for(var y=r;q>=y;++y)f.leftOn(v.at(x-1),v.at(x),v.at(y))&&f.rightOn(v.at(x+1),v.at(x),v.at(y))&&(o=f.sqdist(v.at(x),v.at(y)),p>o&&(p=o,s=y%this.vertices.length));s>x?(t.append(v,x,s+1),0!=s&&u.append(v,s,w.length),u.append(v,0,x+1)):(0!=x&&t.append(v,x,w.length),t.append(v,0,s+1),u.append(v,s,x+1))}return t.vertices.length<u.vertices.length?(t.quickDecomp(a,b,e,g,h,i),u.quickDecomp(a,b,e,g,h,i)):(u.quickDecomp(a,b,e,g,h,i),t.quickDecomp(a,b,e,g,h,i)),a}return a.push(this),a},c.prototype.removeCollinearPoints=function(a){for(var b=0,c=this.vertices.length-1;this.vertices.length>3&&c>=0;--c)f.collinear(this.at(c-1),this.at(c),this.at(c+1),a)&&(this.vertices.splice(c%this.vertices.length,1),c--,b++);return b}},{"./Line":2,"./Point":3,"./Scalar":5}],5:[function(a,b){function c(){}b.exports=c,c.eq=function(a,b,c){return c=c||0,Math.abs(a-b)<c}},{}],6:[function(a,b){b.exports={Polygon:a("./Polygon"),Point:a("./Point")}},{"./Point":3,"./Polygon":4}],7:[function(a,b){b.exports={name:"p2",version:"0.5.0",description:"A JavaScript 2D physics engine.",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["p2.js","p2","physics","engine","2d"],main:"./src/p2.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/p2.js.git"},bugs:{url:"https://github.com/schteppe/p2.js/issues"},licenses:[{type:"MIT"}],devDependencies:{grunt:"~0.4.0","grunt-contrib-jshint":"~0.9.2","grunt-contrib-nodeunit":"~0.1.2","grunt-contrib-uglify":"~0.4.0","grunt-contrib-watch":"~0.5.0","grunt-browserify":"~2.0.1","z-schema":"~2.4.6"},dependencies:{"poly-decomp":"0.1.0","gl-matrix":"2.1.0"}}},{}],8:[function(a,b){function c(a){this.lowerBound=d.create(),a&&a.lowerBound&&d.copy(this.lowerBound,a.lowerBound),this.upperBound=d.create(),a&&a.upperBound&&d.copy(this.upperBound,a.upperBound)
}{var d=a("../math/vec2");a("../utils/Utils")}b.exports=c;var e=d.create();c.prototype.setFromPoints=function(a,b,c){var f=this.lowerBound,g=this.upperBound;d.set(f,Number.MAX_VALUE,Number.MAX_VALUE),d.set(g,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var h=0;h<a.length;h++){var i=a[h];"number"==typeof c&&(d.rotate(e,i,c),i=e);for(var j=0;2>j;j++)i[j]>g[j]&&(g[j]=i[j]),i[j]<f[j]&&(f[j]=i[j])}b&&(d.add(this.lowerBound,this.lowerBound,b),d.add(this.upperBound,this.upperBound,b))},c.prototype.copy=function(a){d.copy(this.lowerBound,a.lowerBound),d.copy(this.upperBound,a.upperBound)},c.prototype.extend=function(a){for(var b=0;2>b;b++)a.lowerBound[b]<this.lowerBound[b]&&(this.lowerBound[b]=a.lowerBound[b]),a.upperBound[b]>this.upperBound[b]&&(this.upperBound[b]=a.upperBound[b])},c.prototype.overlaps=function(a){var b=this.lowerBound,c=this.upperBound,d=a.lowerBound,e=a.upperBound;return(d[0]<=c[0]&&c[0]<=e[0]||b[0]<=e[0]&&e[0]<=c[0])&&(d[1]<=c[1]&&c[1]<=e[1]||b[1]<=e[1]&&e[1]<=c[1])}},{"../math/vec2":30,"../utils/Utils":47}],9:[function(a,b){function c(a){this.type=a,this.result=[],this.world=null,this.boundingVolumeType=c.AABB}var d=a("../math/vec2"),e=a("../objects/Body");b.exports=c,c.AABB=1,c.BOUNDING_CIRCLE=2,c.prototype.setWorld=function(a){this.world=a},c.prototype.getCollisionPairs=function(){throw new Error("getCollisionPairs must be implemented in a subclass!")};var f=d.create();c.boundingRadiusCheck=function(a,b){d.sub(f,a.position,b.position);var c=d.squaredLength(f),e=a.boundingRadius+b.boundingRadius;return e*e>=c},c.aabbCheck=function(a,b){return a.aabbNeedsUpdate&&a.updateAABB(),b.aabbNeedsUpdate&&b.updateAABB(),a.aabb.overlaps(b.aabb)},c.prototype.boundingVolumeCheck=function(a,b){var d;switch(this.boundingVolumeType){case c.BOUNDING_CIRCLE:d=c.boundingRadiusCheck(a,b);break;case c.AABB:d=c.aabbCheck(a,b);break;default:throw new Error("Bounding volume type not recognized: "+this.boundingVolumeType)}return d},c.canCollide=function(a,b){return a.motionState===e.STATIC&&b.motionState===e.STATIC?!1:a.motionState===e.KINEMATIC&&b.motionState===e.STATIC||a.motionState===e.STATIC&&b.motionState===e.KINEMATIC?!1:a.motionState===e.KINEMATIC&&b.motionState===e.KINEMATIC?!1:a.sleepState===e.SLEEPING&&b.sleepState===e.SLEEPING?!1:a.sleepState===e.SLEEPING&&b.motionState===e.STATIC||b.sleepState===e.SLEEPING&&a.motionState===e.STATIC?!1:!0},c.NAIVE=1,c.SAP=2},{"../math/vec2":30,"../objects/Body":31}],10:[function(a,b){function c(a){d.apply(this),a=e.defaults(a,{xmin:-100,xmax:100,ymin:-100,ymax:100,nx:10,ny:10}),this.xmin=a.xmin,this.ymin=a.ymin,this.xmax=a.xmax,this.ymax=a.ymax,this.nx=a.nx,this.ny=a.ny,this.binsizeX=(this.xmax-this.xmin)/this.nx,this.binsizeY=(this.ymax-this.ymin)/this.ny}var d=(a("../shapes/Circle"),a("../shapes/Plane"),a("../shapes/Particle"),a("../collision/Broadphase")),e=(a("../math/vec2"),a("../utils/Utils"));b.exports=c,c.prototype=new d,c.prototype.getCollisionPairs=function(a){for(var b=[],c=a.bodies,e=c.length,f=(this.binsizeX,this.binsizeY,this.nx),g=this.ny,h=this.xmin,i=this.ymin,j=this.xmax,k=this.ymax,l=[],m=f*g,n=0;m>n;n++)l.push([]);for(var o=f/(j-h),p=g/(k-i),n=0;n!==e;n++)for(var q=c[n],r=q.aabb,s=Math.max(r.lowerBound[0],h),t=Math.max(r.lowerBound[1],i),u=Math.min(r.upperBound[0],j),v=Math.min(r.upperBound[1],k),w=Math.floor(o*(s-h)),x=Math.floor(p*(t-i)),y=Math.floor(o*(u-h)),z=Math.floor(p*(v-i)),A=w;y>=A;A++)for(var B=x;z>=B;B++){var C=A,D=B,E=C*(g-1)+D;E>=0&&m>E&&l[E].push(q)}for(var n=0;n!==m;n++)for(var F=l[n],A=0,G=F.length;A!==G;A++)for(var q=F[A],B=0;B!==A;B++){var H=F[B];d.canCollide(q,H)&&this.boundingVolumeCheck(q,H)&&b.push(q,H)}return b}},{"../collision/Broadphase":9,"../math/vec2":30,"../shapes/Circle":35,"../shapes/Particle":39,"../shapes/Plane":40,"../utils/Utils":47}],11:[function(a,b){function c(){d.call(this,d.NAIVE)}{var d=(a("../shapes/Circle"),a("../shapes/Plane"),a("../shapes/Shape"),a("../shapes/Particle"),a("../collision/Broadphase"));a("../math/vec2")}b.exports=c,c.prototype=new d,c.prototype.getCollisionPairs=function(a){var b=a.bodies,c=this.result;c.length=0;for(var e=0,f=b.length;e!==f;e++)for(var g=b[e],h=0;e>h;h++){var i=b[h];d.canCollide(g,i)&&this.boundingVolumeCheck(g,i)&&c.push(g,i)}return c}},{"../collision/Broadphase":9,"../math/vec2":30,"../shapes/Circle":35,"../shapes/Particle":39,"../shapes/Plane":40,"../shapes/Shape":42}],12:[function(a,b){function c(){this.contactEquations=[],this.frictionEquations=[],this.enableFriction=!0,this.slipForce=10,this.frictionCoefficient=.3,this.surfaceVelocity=0,this.reuseObjects=!0,this.reusableContactEquations=[],this.reusableFrictionEquations=[],this.restitution=0,this.stiffness=l.DEFAULT_STIFFNESS,this.relaxation=l.DEFAULT_RELAXATION,this.frictionStiffness=l.DEFAULT_STIFFNESS,this.frictionRelaxation=l.DEFAULT_RELAXATION,this.collidingBodiesLastStep=new k}function d(a,b){f.set(a.vertices[0],.5*-b.length,-b.radius),f.set(a.vertices[1],.5*b.length,-b.radius),f.set(a.vertices[2],.5*b.length,b.radius),f.set(a.vertices[3],.5*-b.length,b.radius)}function e(a,b,c,d){for(var e=R,i=S,j=T,k=U,l=a,m=b.vertices,n=null,o=0;o!==m.length+1;o++){var p=m[o%m.length],q=m[(o+1)%m.length];f.rotate(e,p,d),f.rotate(i,q,d),h(e,e,c),h(i,i,c),g(j,e,l),g(k,i,l);var r=f.crossLength(j,k);if(null===n&&(n=r),0>=r*n)return!1;n=r}return!0}var f=a("../math/vec2"),g=f.sub,h=f.add,i=f.dot,j=a("../utils/Utils"),k=a("../utils/TupleDictionary"),l=a("../equations/Equation"),m=a("../equations/ContactEquation"),n=a("../equations/FrictionEquation"),o=a("../shapes/Circle"),p=a("../shapes/Convex"),q=a("../shapes/Shape"),r=(a("../objects/Body"),a("../shapes/Rectangle"));b.exports=c;var s=f.fromValues(0,1),t=f.fromValues(0,0),u=f.fromValues(0,0),v=f.fromValues(0,0),w=f.fromValues(0,0),x=f.fromValues(0,0),y=f.fromValues(0,0),z=f.fromValues(0,0),A=f.fromValues(0,0),B=f.fromValues(0,0),C=f.fromValues(0,0),D=f.fromValues(0,0),E=f.fromValues(0,0),F=f.fromValues(0,0),G=f.fromValues(0,0),H=f.fromValues(0,0),I=f.fromValues(0,0),J=f.fromValues(0,0),K=f.fromValues(0,0),L=[];c.prototype.collidedLastStep=function(a,b){var c=0|a.id,d=0|b.id;return!!this.collidingBodiesLastStep.get(c,d)},c.prototype.reset=function(){this.collidingBodiesLastStep.reset();for(var a=0;a!==this.contactEquations.length;a++){var b=this.contactEquations[a],c=0|b.bodyA.id,d=0|b.bodyB.id;this.collidingBodiesLastStep.set(c,d,!0)}if(this.reuseObjects){var e=this.contactEquations,f=this.frictionEquations,g=this.reusableFrictionEquations,h=this.reusableContactEquations;j.appendArray(h,e),j.appendArray(g,f)}this.contactEquations.length=this.frictionEquations.length=0},c.prototype.createContactEquation=function(a,b,c,d){var e=this.reusableContactEquations.length?this.reusableContactEquations.pop():new m(a,b);return e.bodyA=a,e.bodyB=b,e.shapeA=c,e.shapeB=d,e.restitution=this.restitution,e.firstImpact=!this.collidedLastStep(a,b),e.stiffness=this.stiffness,e.relaxation=this.relaxation,e.needsUpdate=!0,e.enabled=!0,e},c.prototype.createFrictionEquation=function(a,b,c,d){var e=this.reusableFrictionEquations.length?this.reusableFrictionEquations.pop():new n(a,b);return e.bodyA=a,e.bodyB=b,e.shapeA=c,e.shapeB=d,e.setSlipForce(this.slipForce),e.frictionCoefficient=this.frictionCoefficient,e.relativeVelocity=this.surfaceVelocity,e.enabled=!0,e.needsUpdate=!0,e.stiffness=this.frictionStiffness,e.relaxation=this.frictionRelaxation,e},c.prototype.createFrictionFromContact=function(a){var b=this.createFrictionEquation(a.bodyA,a.bodyB,a.shapeA,a.shapeB);return f.copy(b.contactPointA,a.contactPointA),f.copy(b.contactPointB,a.contactPointB),f.rotate90cw(b.t,a.normalA),b.contactEquation=a,b},c.prototype[q.LINE|q.CONVEX]=c.prototype.convexLine=function(a,b,c,d,e,f,g,h,i){return i?!1:0},c.prototype[q.LINE|q.RECTANGLE]=c.prototype.lineRectangle=function(a,b,c,d,e,f,g,h,i){return i?!1:0};var M=new r(1,1),N=f.create();c.prototype[q.CAPSULE|q.CONVEX]=c.prototype[q.CAPSULE|q.RECTANGLE]=c.prototype.convexCapsule=function(a,b,c,e,g,h,i,j,k){var l=N;f.set(l,h.length/2,0),f.rotate(l,l,j),f.add(l,l,i);var m=this.circleConvex(g,h,l,j,a,b,c,e,k,h.radius);f.set(l,-h.length/2,0),f.rotate(l,l,j),f.add(l,l,i);var n=this.circleConvex(g,h,l,j,a,b,c,e,k,h.radius);if(k&&(m||n))return!0;var o=M;d(o,h);var p=this.convexConvex(a,b,c,e,g,o,i,j,k);return p+m+n},c.prototype[q.CAPSULE|q.LINE]=c.prototype.lineCapsule=function(a,b,c,d,e,f,g,h,i){return i?!1:0};var O=f.create(),P=f.create(),Q=new r(1,1);c.prototype[q.CAPSULE|q.CAPSULE]=c.prototype.capsuleCapsule=function(a,b,c,e,g,h,i,j,k){for(var l=O,m=P,n=0,o=0;2>o;o++){f.set(l,(0==o?-1:1)*b.length/2,0),f.rotate(l,l,e),f.add(l,l,c);for(var p=0;2>p;p++){f.set(m,(0==p?-1:1)*h.length/2,0),f.rotate(m,m,j),f.add(m,m,i);var q=this.circleCircle(a,b,l,e,g,h,m,j,k,b.radius,h.radius);if(k&&q)return!0;n+=q}}var r=Q;d(r,b);var s=this.convexCapsule(a,r,c,e,g,h,i,j,k);if(k&&s)return!0;n+=s,d(r,h);var t=this.convexCapsule(g,r,i,j,a,b,c,e,k);return k&&t?!0:n+=t},c.prototype[q.LINE|q.LINE]=c.prototype.lineLine=function(a,b,c,d,e,f,g,h,i){return i?!1:0},c.prototype[q.PLANE|q.LINE]=c.prototype.planeLine=function(a,b,c,d,e,j,k,l,m){var n=t,o=u,p=v,q=w,r=x,C=y,D=z,E=A,F=B,G=L;numContacts=0,f.set(n,-j.length/2,0),f.set(o,j.length/2,0),f.rotate(p,n,l),f.rotate(q,o,l),h(p,p,k),h(q,q,k),f.copy(n,p),f.copy(o,q),g(r,o,n),f.normalize(C,r),f.rotate90cw(F,C),f.rotate(E,s,d),G[0]=n,G[1]=o;for(var H=0;H<G.length;H++){var I=G[H];g(D,I,c);var J=i(D,E);if(0>J){if(m)return!0;var K=this.createContactEquation(a,e,b,j);numContacts++,f.copy(K.normalA,E),f.normalize(K.normalA,K.normalA),f.scale(D,E,J),g(K.contactPointA,I,D),g(K.contactPointA,K.contactPointA,a.position),g(K.contactPointB,I,k),h(K.contactPointB,K.contactPointB,k),g(K.contactPointB,K.contactPointB,e.position),this.contactEquations.push(K),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(K))}}return numContacts},c.prototype[q.PARTICLE|q.CAPSULE]=c.prototype.particleCapsule=function(a,b,c,d,e,f,g,h,i){return this.circleLine(a,b,c,d,e,f,g,h,i,f.radius,0)},c.prototype[q.CIRCLE|q.LINE]=c.prototype.circleLine=function(a,b,c,d,e,j,k,l,m,n,o){var p=j,q=l,r=e,s=k,H=c,I=a,J=b,n=n||0,o="undefined"!=typeof o?o:J.radius,K=t,M=u,N=v,O=w,P=x,Q=y,R=z,S=A,T=B,U=C,V=D,W=E,X=F,Y=G,Z=L;f.set(S,-p.length/2,0),f.set(T,p.length/2,0),f.rotate(U,S,q),f.rotate(V,T,q),h(U,U,s),h(V,V,s),f.copy(S,U),f.copy(T,V),g(Q,T,S),f.normalize(R,Q),f.rotate90cw(P,R),g(W,H,S);var $=i(W,P);if(g(O,S,s),g(X,H,s),Math.abs($)<o+n){f.scale(K,P,$),g(N,H,K),f.scale(M,P,i(P,X)),f.normalize(M,M),f.scale(M,M,n),h(N,N,M);var _=i(R,N),ab=i(R,S),bb=i(R,T);if(_>ab&&bb>_){if(m)return!0;var cb=this.createContactEquation(I,r,b,j);return f.scale(cb.normalA,K,-1),f.normalize(cb.normalA,cb.normalA),f.scale(cb.contactPointA,cb.normalA,o),h(cb.contactPointA,cb.contactPointA,H),g(cb.contactPointA,cb.contactPointA,I.position),g(cb.contactPointB,N,s),h(cb.contactPointB,cb.contactPointB,s),g(cb.contactPointB,cb.contactPointB,r.position),this.contactEquations.push(cb),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(cb)),1}}Z[0]=S,Z[1]=T;for(var db=0;db<Z.length;db++){var eb=Z[db];if(g(W,eb,H),f.squaredLength(W)<(o+n)*(o+n)){if(m)return!0;var cb=this.createContactEquation(I,r,b,j);return f.copy(cb.normalA,W),f.normalize(cb.normalA,cb.normalA),f.scale(cb.contactPointA,cb.normalA,o),h(cb.contactPointA,cb.contactPointA,H),g(cb.contactPointA,cb.contactPointA,I.position),g(cb.contactPointB,eb,s),f.scale(Y,cb.normalA,-n),h(cb.contactPointB,cb.contactPointB,Y),h(cb.contactPointB,cb.contactPointB,s),g(cb.contactPointB,cb.contactPointB,r.position),this.contactEquations.push(cb),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(cb)),1}}return 0},c.prototype[q.CIRCLE|q.CAPSULE]=c.prototype.circleCapsule=function(a,b,c,d,e,f,g,h,i){return this.circleLine(a,b,c,d,e,f,g,h,i,f.radius)},c.prototype[q.CIRCLE|q.CONVEX]=c.prototype[q.CIRCLE|q.RECTANGLE]=c.prototype.circleConvex=function(a,b,c,d,i,j,k,l,m,n){var o=j,p=l,q=i,r=k,s=c,y=a,z=b,n="number"==typeof n?n:z.radius,A=t,B=u,E=v,J=w,K=x,L=C,M=D,N=F,O=G,P=H,Q=I,R=!1,S=Number.MAX_VALUE;verts=o.vertices;for(var T=0;T!==verts.length+1;T++){var U=verts[T%verts.length],V=verts[(T+1)%verts.length];if(f.rotate(A,U,p),f.rotate(B,V,p),h(A,A,r),h(B,B,r),g(E,B,A),f.normalize(J,E),f.rotate90cw(K,J),f.scale(O,K,-z.radius),h(O,O,s),e(O,o,r,p)){f.sub(P,A,O);var W=Math.abs(f.dot(P,K));S>W&&(f.copy(Q,O),S=W,f.scale(N,K,W),f.add(N,N,O),R=!0)}}if(R){if(m)return!0;var X=this.createContactEquation(y,q,b,j);return f.sub(X.normalA,Q,s),f.normalize(X.normalA,X.normalA),f.scale(X.contactPointA,X.normalA,n),h(X.contactPointA,X.contactPointA,s),g(X.contactPointA,X.contactPointA,y.position),g(X.contactPointB,N,r),h(X.contactPointB,X.contactPointB,r),g(X.contactPointB,X.contactPointB,q.position),this.contactEquations.push(X),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(X)),1}if(n>0)for(var T=0;T<verts.length;T++){var Y=verts[T];if(f.rotate(M,Y,p),h(M,M,r),g(L,M,s),f.squaredLength(L)<n*n){if(m)return!0;var X=this.createContactEquation(y,q,b,j);return f.copy(X.normalA,L),f.normalize(X.normalA,X.normalA),f.scale(X.contactPointA,X.normalA,n),h(X.contactPointA,X.contactPointA,s),g(X.contactPointA,X.contactPointA,y.position),g(X.contactPointB,M,r),h(X.contactPointB,X.contactPointB,r),g(X.contactPointB,X.contactPointB,q.position),this.contactEquations.push(X),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(X)),1}}return 0};var R=f.create(),S=f.create(),T=f.create(),U=f.create();c.prototype[q.PARTICLE|q.CONVEX]=c.prototype[q.PARTICLE|q.RECTANGLE]=c.prototype.particleConvex=function(a,b,c,d,j,k,l,m,n){var o=k,p=m,q=j,r=l,s=c,A=a,B=t,D=u,E=v,G=w,H=x,I=y,L=z,M=C,N=F,O=J,P=K,Q=Number.MAX_VALUE,R=!1,S=o.vertices;if(!e(s,o,r,p))return 0;if(n)return!0;for(var T=0;T!==S.length+1;T++){var U=S[T%S.length],V=S[(T+1)%S.length];f.rotate(B,U,p),f.rotate(D,V,p),h(B,B,r),h(D,D,r),g(E,D,B),f.normalize(G,E),f.rotate90cw(H,G),g(M,s,B);{i(M,H)}g(I,B,r),g(L,s,r),f.sub(O,B,s);var W=Math.abs(f.dot(O,H));Q>W&&(Q=W,f.scale(N,H,W),f.add(N,N,s),f.copy(P,H),R=!0)}if(R){var X=this.createContactEquation(A,q,b,k);return f.scale(X.normalA,P,-1),f.normalize(X.normalA,X.normalA),f.set(X.contactPointA,0,0),h(X.contactPointA,X.contactPointA,s),g(X.contactPointA,X.contactPointA,A.position),g(X.contactPointB,N,r),h(X.contactPointB,X.contactPointB,r),g(X.contactPointB,X.contactPointB,q.position),this.contactEquations.push(X),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(X)),1}return 0},c.prototype[q.CIRCLE]=c.prototype.circleCircle=function(a,b,c,d,e,i,j,k,l,m,n){var o=a,p=b,q=c,r=e,s=i,u=j,v=t,m=m||p.radius,n=n||s.radius;g(v,c,j);var w=m+n;if(f.squaredLength(v)>w*w)return 0;if(l)return!0;var x=this.createContactEquation(o,r,b,i);return g(x.normalA,u,q),f.normalize(x.normalA,x.normalA),f.scale(x.contactPointA,x.normalA,m),f.scale(x.contactPointB,x.normalA,-n),h(x.contactPointA,x.contactPointA,q),g(x.contactPointA,x.contactPointA,o.position),h(x.contactPointB,x.contactPointB,u),g(x.contactPointB,x.contactPointB,r.position),this.contactEquations.push(x),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(x)),1},c.prototype[q.PLANE|q.CONVEX]=c.prototype[q.PLANE|q.RECTANGLE]=c.prototype.planeConvex=function(a,b,d,e,j,k,l,m,n){var o=j,p=l,q=k,r=m,w=a,x=b,y=d,z=e,A=t,B=u,C=v,D=0;f.rotate(B,s,z);for(var E=0;E<q.vertices.length;E++){var F=q.vertices[E];if(f.rotate(A,F,r),h(A,A,p),g(C,A,y),i(C,B)<=c.convexPrecision){if(n)return!0;D++;var G=this.createContactEquation(w,o,x,q);g(C,A,y),f.copy(G.normalA,B);var H=i(C,G.normalA);f.scale(C,G.normalA,H),g(G.contactPointB,A,o.position),g(G.contactPointA,A,C),g(G.contactPointA,G.contactPointA,w.position),this.contactEquations.push(G),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(G))}}return D},c.prototype.convexPlane=function(a,b,c,d,e,f,g,h,i){return console.warn("Narrowphase.prototype.convexPlane is deprecated. Use planeConvex instead!"),this.planeConvex(e,f,g,h,a,b,c,d,i)},c.prototype[q.PARTICLE|q.PLANE]=c.prototype.particlePlane=function(a,b,c,d,e,h,j,k,l){var m=a,n=c,o=e,p=j,q=k,r=t,v=u;q=q||0,g(r,n,p),f.rotate(v,s,q);var w=i(r,v);if(w>0)return 0;if(l)return!0;var x=this.createContactEquation(o,m,h,b);return f.copy(x.normalA,v),f.scale(r,x.normalA,w),g(x.contactPointA,n,r),g(x.contactPointA,x.contactPointA,o.position),g(x.contactPointB,n,m.position),this.contactEquations.push(x),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(x)),1},c.prototype[q.CIRCLE|q.PARTICLE]=c.prototype.circleParticle=function(a,b,c,d,e,i,j,k,l){var m=a,n=b,o=c,p=e,q=j,r=t;if(g(r,q,o),f.squaredLength(r)>n.radius*n.radius)return 0;if(l)return!0;var s=this.createContactEquation(m,p,b,i);return f.copy(s.normalA,r),f.normalize(s.normalA,s.normalA),f.scale(s.contactPointA,s.normalA,n.radius),h(s.contactPointA,s.contactPointA,o),g(s.contactPointA,s.contactPointA,m.position),g(s.contactPointB,q,p.position),this.contactEquations.push(s),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(s)),1};{var V=new o(1),W=f.create(),X=f.create();f.create()}c.prototype[q.PLANE|q.CAPSULE]=c.prototype.planeCapsule=function(a,b,c,d,e,g,i,j,k){var l=W,m=X,n=V;f.set(l,-g.length/2,0),f.rotate(l,l,j),h(l,l,i),f.set(m,g.length/2,0),f.rotate(m,m,j),h(m,m,i),n.radius=g.radius;var o=this.circlePlane(e,n,l,0,a,b,c,d,k),p=this.circlePlane(e,n,m,0,a,b,c,d,k);return k?o||p:o+p},c.prototype.capsulePlane=function(a,b,c,d,e,f,g,h,i){return console.warn("Narrowphase.prototype.capsulePlane() is deprecated. Use .planeCapsule() instead!"),this.planeCapsule(e,f,g,h,a,b,c,d,i)},c.prototype[q.CIRCLE|q.PLANE]=c.prototype.circlePlane=function(a,b,c,d,e,j,k,l,m){var n=a,o=b,p=c,q=e,r=k,w=l;w=w||0;var x=t,y=u,z=v;g(x,p,r),f.rotate(y,s,w);var A=i(y,x);if(A>o.radius)return 0;if(m)return!0;var B=this.createContactEquation(q,n,j,b);return f.copy(B.normalA,y),f.scale(B.contactPointB,B.normalA,-o.radius),h(B.contactPointB,B.contactPointB,p),g(B.contactPointB,B.contactPointB,n.position),f.scale(z,B.normalA,A),g(B.contactPointA,x,z),h(B.contactPointA,B.contactPointA,r),g(B.contactPointA,B.contactPointA,q.position),this.contactEquations.push(B),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(B)),1},c.convexPrecision=1e-7,c.prototype[q.CONVEX]=c.prototype[q.CONVEX|q.RECTANGLE]=c.prototype[q.RECTANGLE]=c.prototype.convexConvex=function(a,b,d,e,j,k,l,m,n,o){var p=t,q=u,r=v,s=w,y=x,C=z,D=A,E=B,F=0,o=o||c.convexPrecision,G=c.findSeparatingAxis(b,d,e,k,l,m,p);if(!G)return 0;g(D,l,d),i(p,D)>0&&f.scale(p,p,-1);var H=c.getClosestEdge(b,e,p,!0),I=c.getClosestEdge(k,m,p);if(-1===H||-1===I)return 0;for(var J=0;2>J;J++){var K=H,L=I,M=b,N=k,O=d,P=l,Q=e,R=m,S=a,T=j;if(0===J){var U;U=K,K=L,L=U,U=M,M=N,N=U,U=O,O=P,P=U,U=Q,Q=R,R=U,U=S,S=T,T=U}for(var V=L;L+2>V;V++){var W=N.vertices[(V+N.vertices.length)%N.vertices.length];f.rotate(q,W,R),h(q,q,P);for(var X=0,Y=K-1;K+2>Y;Y++){var Z=M.vertices[(Y+M.vertices.length)%M.vertices.length],$=M.vertices[(Y+1+M.vertices.length)%M.vertices.length];f.rotate(r,Z,Q),f.rotate(s,$,Q),h(r,r,O),h(s,s,O),g(y,s,r),f.rotate90cw(E,y),f.normalize(E,E),g(D,q,r);var _=i(E,D);o>=_&&X++}if(X>=3){if(n)return!0;var ab=this.createContactEquation(S,T,M,N);F++;var Z=M.vertices[K%M.vertices.length],$=M.vertices[(K+1)%M.vertices.length];f.rotate(r,Z,Q),f.rotate(s,$,Q),h(r,r,O),h(s,s,O),g(y,s,r),f.rotate90cw(ab.normalA,y),f.normalize(ab.normalA,ab.normalA),g(D,q,r);var _=i(ab.normalA,D);f.scale(C,ab.normalA,_),g(ab.contactPointA,q,O),g(ab.contactPointA,ab.contactPointA,C),h(ab.contactPointA,ab.contactPointA,O),g(ab.contactPointA,ab.contactPointA,S.position),g(ab.contactPointB,q,P),h(ab.contactPointB,ab.contactPointB,P),g(ab.contactPointB,ab.contactPointB,T.position),this.contactEquations.push(ab),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(ab))}}}return F};var Y=f.fromValues(0,0);c.projectConvexOntoAxis=function(a,b,c,d,e){var g,h,j=null,k=null,l=Y;f.rotate(l,d,-c);for(var m=0;m<a.vertices.length;m++)g=a.vertices[m],h=i(g,l),(null===j||h>j)&&(j=h),(null===k||k>h)&&(k=h);if(k>j){var n=k;k=j,j=n}var o=i(b,d);f.set(e,k+o,j+o)};var Z=f.fromValues(0,0),$=f.fromValues(0,0),_=f.fromValues(0,0),ab=f.fromValues(0,0),bb=f.fromValues(0,0),cb=f.fromValues(0,0);c.findSeparatingAxis=function(a,b,d,e,h,i,j){for(var k=null,l=!1,m=!1,n=Z,o=$,p=_,q=ab,r=bb,s=cb,t=0;2!==t;t++){var u=a,v=d;1===t&&(u=e,v=i);for(var w=0;w!==u.vertices.length;w++){f.rotate(o,u.vertices[w],v),f.rotate(p,u.vertices[(w+1)%u.vertices.length],v),g(n,p,o),f.rotate90cw(q,n),f.normalize(q,q),c.projectConvexOntoAxis(a,b,d,q,r),c.projectConvexOntoAxis(e,h,i,q,s);var x=r,y=s,z=!1;r[0]>s[0]&&(y=r,x=s,z=!0);var A=y[0]-x[1];l=A<=c.convexPrecision,(null===k||A>k)&&(f.copy(j,q),k=A,m=l)}}return m};var db=f.fromValues(0,0),eb=f.fromValues(0,0),fb=f.fromValues(0,0);c.getClosestEdge=function(a,b,c,d){var e=db,h=eb,j=fb;f.rotate(e,c,-b),d&&f.scale(e,e,-1);for(var k=-1,l=a.vertices.length,m=0;m!==l;m++){g(h,a.vertices[(m+1)%l],a.vertices[m%l]),f.rotate90cw(j,h),f.normalize(j,j);var n=i(j,e);(-1==k||n>maxDot)&&(k=m%l,maxDot=n)}return k};var gb=f.create(),hb=f.create(),ib=f.create(),jb=f.create(),kb=f.create(),lb=f.create(),mb=f.create();c.prototype[q.CIRCLE|q.HEIGHTFIELD]=c.prototype.circleHeightfield=function(a,b,c,d,e,i,j,k,l,m){var n=i.data,m=m||b.radius,o=i.elementWidth,p=hb,q=gb,r=kb,s=mb,t=lb,u=ib,v=jb,w=Math.floor((c[0]-m-j[0])/o),x=Math.ceil((c[0]+m-j[0])/o);0>w&&(w=0),x>=n.length&&(x=n.length-1);for(var y=n[w],z=n[x],A=w;x>A;A++)n[A]<z&&(z=n[A]),n[A]>y&&(y=n[A]);if(c[1]-m>y)return l?!1:0;c[1]+m<z;for(var B=!1,A=w;x>A;A++){f.set(u,A*o,n[A]),f.set(v,(A+1)*o,n[A+1]),f.add(u,u,j),f.add(v,v,j),f.sub(t,v,u),f.rotate(t,t,Math.PI/2),f.normalize(t,t),f.scale(q,t,-m),f.add(q,q,c),f.sub(p,q,u);var C=f.dot(p,t);if(q[0]>=u[0]&&q[0]<v[0]&&0>=C){if(l)return!0;B=!0,f.scale(p,t,-C),f.add(r,q,p),f.copy(s,t);var D=this.createContactEquation(e,a,i,b);f.copy(D.normalA,s),f.scale(D.contactPointB,D.normalA,-m),h(D.contactPointB,D.contactPointB,c),g(D.contactPointB,D.contactPointB,a.position),f.copy(D.contactPointA,r),f.sub(D.contactPointA,D.contactPointA,e.position),this.contactEquations.push(D),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(D))}}if(B=!1,m>0)for(var A=w;x>=A;A++)if(f.set(u,A*o,n[A]),f.add(u,u,j),f.sub(p,c,u),f.squaredLength(p)<m*m){if(l)return!0;B=!0;var D=this.createContactEquation(e,a,i,b);f.copy(D.normalA,p),f.normalize(D.normalA,D.normalA),f.scale(D.contactPointB,D.normalA,-m),h(D.contactPointB,D.contactPointB,c),g(D.contactPointB,D.contactPointB,a.position),g(D.contactPointA,u,j),h(D.contactPointA,D.contactPointA,j),g(D.contactPointA,D.contactPointA,e.position),this.contactEquations.push(D),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(D))}return B?1:0};var nb=f.create(),ob=f.create(),pb=f.create(),qb=new p([f.create(),f.create(),f.create(),f.create()]);c.prototype[q.RECTANGLE|q.HEIGHTFIELD]=c.prototype[q.CONVEX|q.HEIGHTFIELD]=c.prototype.convexHeightfield=function(a,b,c,d,e,g,h,i,j){var k=g.data,l=g.elementWidth,m=nb,n=ob,o=pb,p=qb,q=Math.floor((a.aabb.lowerBound[0]-h[0])/l),r=Math.ceil((a.aabb.upperBound[0]-h[0])/l);0>q&&(q=0),r>=k.length&&(r=k.length-1);for(var s=k[q],t=k[r],u=q;r>u;u++)k[u]<t&&(t=k[u]),k[u]>s&&(s=k[u]);if(a.aabb.lowerBound[1]>s)return j?!1:0;for(var v=0,u=q;r>u;u++){f.set(m,u*l,k[u]),f.set(n,(u+1)*l,k[u+1]),f.add(m,m,h),f.add(n,n,h);var w=100;f.set(o,.5*(n[0]+m[0]),.5*(n[1]+m[1]-w)),f.sub(p.vertices[0],n,o),f.sub(p.vertices[1],m,o),f.copy(p.vertices[2],p.vertices[1]),f.copy(p.vertices[3],p.vertices[0]),p.vertices[2][1]-=w,p.vertices[3][1]-=w,v+=this.convexConvex(a,b,c,d,e,p,o,0,j)}return v}},{"../equations/ContactEquation":21,"../equations/Equation":22,"../equations/FrictionEquation":23,"../math/vec2":30,"../objects/Body":31,"../shapes/Circle":35,"../shapes/Convex":36,"../shapes/Rectangle":41,"../shapes/Shape":42,"../utils/TupleDictionary":46,"../utils/Utils":47}],13:[function(a,b){function c(){e.call(this,e.SAP),this.axisList=[],this.world=null,this.axisIndex=0;var a=this.axisList;this._addBodyHandler=function(b){a.push(b.body)},this._removeBodyHandler=function(b){var c=a.indexOf(b.body);-1!==c&&a.splice(c,1)}}var d=a("../utils/Utils"),e=a("../collision/Broadphase");b.exports=c,c.prototype=new e,c.prototype.setWorld=function(a){this.axisList.length=0,d.appendArray(this.axisList,a.bodies),a.off("addBody",this._addBodyHandler).off("removeBody",this._removeBodyHandler),a.on("addBody",this._addBodyHandler).on("removeBody",this._removeBodyHandler),this.world=a},c.sortAxisList=function(a,b){b=0|b;for(var c=1,d=a.length;d>c;c++){for(var e=a[c],f=c-1;f>=0&&!(a[f].aabb.lowerBound[b]<=e.aabb.lowerBound[b]);f--)a[f+1]=a[f];a[f+1]=e}return a},c.prototype.getCollisionPairs=function(){var a=this.axisList,b=this.result,d=this.axisIndex;b.length=0;for(var f=a.length;f--;){var g=a[f];g.aabbNeedsUpdate&&g.updateAABB()}c.sortAxisList(a,d);for(var h=0,i=0|a.length;h!==i;h++)for(var j=a[h],k=h+1;i>k;k++){var l=a[k],m=l.aabb.lowerBound[d]<=j.aabb.upperBound[d];if(!m)break;e.canCollide(j,l)&&this.boundingVolumeCheck(j,l)&&b.push(j,l)}return b}},{"../collision/Broadphase":9,"../utils/Utils":47}],14:[function(a,b){function c(a,b,c,e){this.type=c,e=d.defaults(e,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=a,this.bodyB=b,this.collideConnected=e.collideConnected,e.wakeUpBodies&&(a&&a.wakeUp(),b&&b.wakeUp())}b.exports=c;var d=a("../utils/Utils");c.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},c.DISTANCE=1,c.GEAR=2,c.LOCK=3,c.PRISMATIC=4,c.REVOLUTE=5,c.prototype.setStiffness=function(a){for(var b=this.equations,c=0;c!==b.length;c++){var d=b[c];d.stiffness=a,d.needsUpdate=!0}},c.prototype.setRelaxation=function(a){for(var b=this.equations,c=0;c!==b.length;c++){var d=b[c];d.relaxation=a,d.needsUpdate=!0}}},{"../utils/Utils":47}],15:[function(a,b){function c(a,b,c,g){g=g||{},d.call(this,a,b,d.DISTANCE,g),this.distance=c,this.localAnchorA=f.create(),this.localAnchorB=f.create();var h,i=this.localAnchorA,j=this.localAnchorB;h="undefined"==typeof g.maxForce?Number.MAX_VALUE:g.maxForce;var k=new e(a,b,-h,h);this.equations=[k];var l=f.create(),m=f.create(),n=f.create(),o=this;k.computeGq=function(){{var a=this.bodyA,b=this.bodyB,c=a.position;b.position}return f.rotate(m,i,a.angle),f.rotate(n,j,b.angle),f.add(l,c,n),f.sub(l,l,m),f.sub(l,l,c),f.sub(l,b.position,a.position),f.length(l)-o.distance},this.setMaxForce(h)}var d=a("./Constraint"),e=a("../equations/Equation"),f=a("../math/vec2");b.exports=c,c.prototype=new d;var g=f.create(),h=f.create(),i=f.create();c.prototype.update=function(){var a=this.equations[0],b=this.bodyA,c=this.bodyB,d=(this.distance,b.position,c.position,a.G);f.rotate(h,this.localAnchorA,b.angle),f.rotate(i,this.localAnchorB,c.angle);f.crossLength(h,g),f.crossLength(i,g);f.sub(g,c.position,b.position),f.normalize(g,g),d[0]=-g[0],d[1]=-g[1],d[3]=g[0],d[4]=g[1]},c.prototype.setMaxForce=function(a){var b=this.equations[0];b.minForce=-a,b.maxForce=a},c.prototype.getMaxForce=function(){var a=this.equations[0];return a.maxForce}},{"../equations/Equation":22,"../math/vec2":30,"./Constraint":14}],16:[function(a,b){function c(a,b,c){c=c||{},d.call(this,a,b,d.GEAR,c),this.equations=[new e(a,b,c)],this.angle="number"==typeof c.angle?c.angle:0,this.ratio="number"==typeof c.ratio?c.ratio:1,"number"==typeof c.maxTorque&&this.setMaxTorque(c.maxTorque)}{var d=a("./Constraint"),e=(a("../equations/Equation"),a("../equations/AngleLockEquation"));a("../math/vec2")}b.exports=c,c.prototype=new d,c.prototype.update=function(){var a=this.equations[0];a.ratio!==this.ratio&&a.setRatio(this.ratio),a.angle=this.angle},c.prototype.setMaxTorque=function(a){this.equations[0].setMaxTorque(a)},c.prototype.getMaxTorque=function(){return this.equations[0].maxForce}},{"../equations/AngleLockEquation":20,"../equations/Equation":22,"../math/vec2":30,"./Constraint":14}],17:[function(a,b){function c(a,b,c){c=c||{},d.call(this,a,b,d.LOCK,c);var g="undefined"==typeof c.maxForce?Number.MAX_VALUE:c.maxForce,h=c.localOffsetB||e.fromValues(0,0);h=e.fromValues(h[0],h[1]);var i=c.localAngleB||0,j=new f(a,b,-g,g),k=new f(a,b,-g,g),l=new f(a,b,-g,g),m=e.create(),n=e.create(),o=this;j.computeGq=function(){return e.rotate(m,o.localOffsetB,a.angle),e.sub(n,b.position,a.position),e.sub(n,n,m),n[0]},k.computeGq=function(){return e.rotate(m,o.localOffsetB,a.angle),e.sub(n,b.position,a.position),e.sub(n,n,m),n[1]};var p=e.create(),q=e.create();l.computeGq=function(){return e.rotate(p,o.localOffsetB,b.angle-o.localAngleB),e.scale(p,p,-1),e.sub(n,a.position,b.position),e.add(n,n,p),e.rotate(q,p,-Math.PI/2),e.normalize(q,q),e.dot(n,q)},this.localOffsetB=h,this.localAngleB=i,this.equations.push(j,k,l),this.setMaxForce(g)}var d=a("./Constraint"),e=a("../math/vec2"),f=a("../equations/Equation");b.exports=c,c.prototype=new d,c.prototype.setMaxForce=function(a){for(var b=this.equations,c=0;c<this.equations.length;c++)b[c].maxForce=a,b[c].minForce=-a},c.prototype.getMaxForce=function(){return this.equations[0].maxForce};var g=e.create(),h=e.create(),i=e.create(),j=e.fromValues(1,0),k=e.fromValues(0,1);c.prototype.update=function(){var a=this.equations[0],b=this.equations[1],c=this.equations[2],d=this.bodyA,f=this.bodyB;e.rotate(g,this.localOffsetB,d.angle),e.rotate(h,this.localOffsetB,f.angle-this.localAngleB),e.scale(h,h,-1),e.rotate(i,h,Math.PI/2),e.normalize(i,i),a.G[0]=-1,a.G[1]=0,a.G[2]=-e.crossLength(g,j),a.G[3]=1,b.G[0]=0,b.G[1]=-1,b.G[2]=-e.crossLength(g,k),b.G[4]=1,c.G[0]=-i[0],c.G[1]=-i[1],c.G[3]=i[0],c.G[4]=i[1],c.G[5]=e.crossLength(h,i)}},{"../equations/Equation":22,"../math/vec2":30,"./Constraint":14}],18:[function(a,b){function c(a,b,c){c=c||{},d.call(this,a,b,d.PRISMATIC,c);var i=g.fromValues(0,0),j=g.fromValues(1,0),k=g.fromValues(0,0);c.localAnchorA&&g.copy(i,c.localAnchorA),c.localAxisA&&g.copy(j,c.localAxisA),c.localAnchorB&&g.copy(k,c.localAnchorB),this.localAnchorA=i,this.localAnchorB=k,this.localAxisA=j;var l=this.maxForce="undefined"!=typeof c.maxForce?c.maxForce:Number.MAX_VALUE,m=new f(a,b,-l,l),n=new g.create,o=new g.create,p=new g.create,q=new g.create;if(m.computeGq=function(){return g.dot(p,q)},m.updateJacobian=function(){var c=this.G,d=a.position,e=b.position;g.rotate(n,i,a.angle),g.rotate(o,k,b.angle),g.add(p,e,o),g.sub(p,p,d),g.sub(p,p,n),g.rotate(q,j,a.angle+Math.PI/2),c[0]=-q[0],c[1]=-q[1],c[2]=-g.crossLength(n,q)+g.crossLength(q,p),c[3]=q[0],c[4]=q[1],c[5]=g.crossLength(o,q)},this.equations.push(m),!c.disableRotationalLock){var r=new h(a,b,-l,l);this.equations.push(r)}this.position=0,this.velocity=0,this.lowerLimitEnabled="undefined"!=typeof c.lowerLimit?!0:!1,this.upperLimitEnabled="undefined"!=typeof c.upperLimit?!0:!1,this.lowerLimit="undefined"!=typeof c.lowerLimit?c.lowerLimit:0,this.upperLimit="undefined"!=typeof c.upperLimit?c.upperLimit:1,this.upperLimitEquation=new e(a,b),this.lowerLimitEquation=new e(a,b),this.upperLimitEquation.minForce=this.lowerLimitEquation.minForce=0,this.upperLimitEquation.maxForce=this.lowerLimitEquation.maxForce=l,this.motorEquation=new f(a,b),this.motorEnabled=!1,this.motorSpeed=0;{var s=this,t=this.motorEquation;t.computeGW}t.computeGq=function(){return 0},t.computeGW=function(){var a=this.G,b=this.bodyA,c=this.bodyB,d=b.velocity,e=c.velocity,f=b.angularVelocity,g=c.angularVelocity;return this.transformedGmult(a,d,f,e,g)+s.motorSpeed}}var d=a("./Constraint"),e=a("../equations/ContactEquation"),f=a("../equations/Equation"),g=a("../math/vec2"),h=a("../equations/RotationalLockEquation");b.exports=c,c.prototype=new d;var i=g.create(),j=g.create(),k=g.create(),l=g.create(),m=g.create(),n=g.create();c.prototype.update=function(){var a=this.equations,b=a[0],c=this.upperLimit,d=this.lowerLimit,e=this.upperLimitEquation,f=this.lowerLimitEquation,h=this.bodyA,o=this.bodyB,p=this.localAxisA,q=this.localAnchorA,r=this.localAnchorB;
b.updateJacobian(),g.rotate(i,p,h.angle),g.rotate(l,q,h.angle),g.add(j,l,h.position),g.rotate(m,r,o.angle),g.add(k,m,o.position);var s=this.position=g.dot(k,i)-g.dot(j,i);if(this.motorEnabled){var t=this.motorEquation.G;t[0]=i[0],t[1]=i[1],t[2]=g.crossLength(i,m),t[3]=-i[0],t[4]=-i[1],t[5]=-g.crossLength(i,l)}if(this.upperLimitEnabled&&s>c)g.scale(e.normalA,i,-1),g.sub(e.contactPointA,j,h.position),g.sub(e.contactPointB,k,o.position),g.scale(n,i,c),g.add(e.contactPointA,e.contactPointA,n),-1==a.indexOf(e)&&a.push(e);else{var u=a.indexOf(e);-1!=u&&a.splice(u,1)}if(this.lowerLimitEnabled&&d>s)g.scale(f.normalA,i,1),g.sub(f.contactPointA,j,h.position),g.sub(f.contactPointB,k,o.position),g.scale(n,i,d),g.sub(f.contactPointB,f.contactPointB,n),-1==a.indexOf(f)&&a.push(f);else{var u=a.indexOf(f);-1!=u&&a.splice(u,1)}},c.prototype.enableMotor=function(){this.motorEnabled||(this.equations.push(this.motorEquation),this.motorEnabled=!0)},c.prototype.disableMotor=function(){if(this.motorEnabled){var a=this.equations.indexOf(this.motorEquation);this.equations.splice(a,1),this.motorEnabled=!1}}},{"../equations/ContactEquation":21,"../equations/Equation":22,"../equations/RotationalLockEquation":24,"../math/vec2":30,"./Constraint":14}],19:[function(a,b){function c(a,b,c,n,o){o=o||{},d.call(this,a,c,d.REVOLUTE,o);var p=this.maxForce="undefined"!=typeof o.maxForce?o.maxForce:Number.MAX_VALUE;this.pivotA=h.fromValues(b[0],b[1]),this.pivotB=h.fromValues(n[0],n[1]);var q=this.equations=[new e(a,c,-p,p),new e(a,c,-p,p)],r=q[0],s=q[1],t=this;r.computeGq=function(){return h.rotate(i,t.pivotA,a.angle),h.rotate(j,t.pivotB,c.angle),h.add(m,c.position,j),h.sub(m,m,a.position),h.sub(m,m,i),h.dot(m,k)},s.computeGq=function(){return h.rotate(i,t.pivotA,a.angle),h.rotate(j,t.pivotB,c.angle),h.add(m,c.position,j),h.sub(m,m,a.position),h.sub(m,m,i),h.dot(m,l)},s.minForce=r.minForce=-p,s.maxForce=r.maxForce=p,this.motorEquation=new f(a,c),this.motorEnabled=!1,this.angle=0,this.lowerLimitEnabled=!1,this.upperLimitEnabled=!1,this.lowerLimit=0,this.upperLimit=0,this.upperLimitEquation=new g(a,c),this.lowerLimitEquation=new g(a,c),this.upperLimitEquation.minForce=0,this.lowerLimitEquation.maxForce=0}var d=a("./Constraint"),e=a("../equations/Equation"),f=a("../equations/RotationalVelocityEquation"),g=a("../equations/RotationalLockEquation"),h=a("../math/vec2");b.exports=c;var i=h.create(),j=h.create(),k=h.fromValues(1,0),l=h.fromValues(0,1),m=h.create();c.prototype=new d,c.prototype.update=function(){var a=this.bodyA,b=this.bodyB,c=this.pivotA,d=this.pivotB,e=this.equations,f=(e[0],e[1],e[0]),g=e[1],m=this.upperLimit,n=this.lowerLimit,o=this.upperLimitEquation,p=this.lowerLimitEquation,q=this.angle=b.angle-a.angle;if(this.upperLimitEnabled&&q>m)o.angle=m,-1==e.indexOf(o)&&e.push(o);else{var r=e.indexOf(o);-1!=r&&e.splice(r,1)}if(this.lowerLimitEnabled&&n>q)p.angle=n,-1==e.indexOf(p)&&e.push(p);else{var r=e.indexOf(p);-1!=r&&e.splice(r,1)}h.rotate(i,c,a.angle),h.rotate(j,d,b.angle),f.G[0]=-1,f.G[1]=0,f.G[2]=-h.crossLength(i,k),f.G[3]=1,f.G[4]=0,f.G[5]=h.crossLength(j,k),g.G[0]=0,g.G[1]=-1,g.G[2]=-h.crossLength(i,l),g.G[3]=0,g.G[4]=1,g.G[5]=h.crossLength(j,l)},c.prototype.enableMotor=function(){this.motorEnabled||(this.equations.push(this.motorEquation),this.motorEnabled=!0)},c.prototype.disableMotor=function(){if(this.motorEnabled){var a=this.equations.indexOf(this.motorEquation);this.equations.splice(a,1),this.motorEnabled=!1}},c.prototype.motorIsEnabled=function(){return!!this.motorEnabled},c.prototype.setMotorSpeed=function(a){if(this.motorEnabled){var b=this.equations.indexOf(this.motorEquation);this.equations[b].relativeVelocity=a}},c.prototype.getMotorSpeed=function(){return this.motorEnabled?this.motorEquation.relativeVelocity:!1}},{"../equations/Equation":22,"../equations/RotationalLockEquation":24,"../equations/RotationalVelocityEquation":25,"../math/vec2":30,"./Constraint":14}],20:[function(a,b){function c(a,b,c){c=c||{},d.call(this,a,b,-Number.MAX_VALUE,Number.MAX_VALUE),this.angle=c.angle||0,this.ratio="number"==typeof c.ratio?c.ratio:1,this.setRatio(this.ratio)}{var d=a("./Equation");a("../math/vec2")}b.exports=c,c.prototype=new d,c.prototype.constructor=c,c.prototype.computeGq=function(){return this.ratio*this.bodyA.angle-this.bodyB.angle+this.angle},c.prototype.setRatio=function(a){var b=this.G;b[2]=a,b[5]=-1,this.ratio=a},c.prototype.setMaxTorque=function(a){this.maxForce=a,this.minForce=-a}},{"../math/vec2":30,"./Equation":22}],21:[function(a,b){function c(a,b){d.call(this,a,b,0,Number.MAX_VALUE),this.contactPointA=e.create(),this.penetrationVec=e.create(),this.contactPointB=e.create(),this.normalA=e.create(),this.restitution=0,this.firstImpact=!1,this.shapeA=null,this.shapeB=null}var d=a("./Equation"),e=a("../math/vec2");b.exports=c,c.prototype=new d,c.prototype.constructor=c,c.prototype.computeB=function(a,b,c){var d=this.bodyA,f=this.bodyB,g=this.contactPointA,h=this.contactPointB,i=d.position,j=f.position,k=this.penetrationVec,l=this.normalA,m=this.G,n=e.crossLength(g,l),o=e.crossLength(h,l);m[0]=-l[0],m[1]=-l[1],m[2]=-n,m[3]=l[0],m[4]=l[1],m[5]=o,e.add(k,j,h),e.sub(k,k,i),e.sub(k,k,g);var p,q;this.firstImpact&&0!==this.restitution?(q=0,p=1/b*(1+this.restitution)*this.computeGW()):(q=e.dot(l,k),p=this.computeGW());var r=this.computeGiMf(),s=-q*a-p*b-c*r;return s}},{"../math/vec2":30,"./Equation":22}],22:[function(a,b){function c(a,b,d,e){this.minForce="undefined"==typeof d?-Number.MAX_VALUE:d,this.maxForce="undefined"==typeof e?Number.MAX_VALUE:e,this.bodyA=a,this.bodyB=b,this.stiffness=c.DEFAULT_STIFFNESS,this.relaxation=c.DEFAULT_RELAXATION,this.G=new h.ARRAY_TYPE(6);for(var f=0;6>f;f++)this.G[f]=0;this.offset=0,this.a=0,this.b=0,this.epsilon=0,this.timeStep=1/60,this.needsUpdate=!0,this.multiplier=0,this.relativeVelocity=0,this.enabled=!0}function d(a,b,c,d,e){return a[0]*b[0]+a[1]*b[1]+a[2]*c+a[3]*d[0]+a[4]*d[1]+a[5]*e}function e(a){return a.sleepState===i.SLEEPING?0:a.invMass}function f(a){return a.sleepState===i.SLEEPING?0:a.invInertia}b.exports=c;var g=a("../math/vec2"),h=a("../utils/Utils"),i=a("../objects/Body");c.prototype.constructor=c,c.DEFAULT_STIFFNESS=1e6,c.DEFAULT_RELAXATION=4,c.prototype.update=function(){var a=this.stiffness,b=this.relaxation,c=this.timeStep;this.a=4/(c*(1+4*b)),this.b=4*b/(1+4*b),this.epsilon=4/(c*c*a*(1+4*b)),this.needsUpdate=!1},c.prototype.computeB=function(a,b,c){var d=this.computeGW(),e=this.computeGq(),f=this.computeGiMf();return-e*a-d*b-f*c};var j=g.create(),k=g.create();c.prototype.computeGq=function(){var a=this.G,b=this.bodyA,c=this.bodyB,e=(b.position,c.position,b.angle),f=c.angle;return d(a,j,e,k,f)+this.offset},c.prototype.computeGW=function(){var a=this.G,b=this.bodyA,c=this.bodyB,e=b.velocity,f=c.velocity,g=b.angularVelocity,h=c.angularVelocity;return d(a,e,g,f,h)+this.relativeVelocity},c.prototype.computeGWlambda=function(){var a=this.G,b=this.bodyA,c=this.bodyB,e=b.vlambda,f=c.vlambda,g=b.wlambda,h=c.wlambda;return d(a,e,g,f,h)};var l=g.create(),m=g.create();c.prototype.computeGiMf=function(){var a=this.bodyA,b=this.bodyB,c=a.force,h=a.angularForce,i=b.force,j=b.angularForce,k=e(a),n=e(b),o=f(a),p=f(b),q=this.G;return g.scale(l,c,k),g.scale(m,i,n),d(q,l,h*o,m,j*p)},c.prototype.computeGiMGt=function(){var a=this.bodyA,b=this.bodyB,c=e(a),d=e(b),g=f(a),h=f(b),i=this.G;return i[0]*i[0]*c+i[1]*i[1]*c+i[2]*i[2]*g+i[3]*i[3]*d+i[4]*i[4]*d+i[5]*i[5]*h};{var n=g.create(),o=g.create(),p=g.create();g.create(),g.create(),g.create()}c.prototype.addToWlambda=function(a){var b=this.bodyA,c=this.bodyB,d=n,h=o,i=p,j=e(b),k=e(c),l=f(b),m=f(c),q=this.G;h[0]=q[0],h[1]=q[1],i[0]=q[3],i[1]=q[4],g.scale(d,h,j*a),g.add(b.vlambda,b.vlambda,d),b.wlambda+=l*q[2]*a,g.scale(d,i,k*a),g.add(c.vlambda,c.vlambda,d),c.wlambda+=m*q[5]*a},c.prototype.computeInvC=function(a){return 1/(this.computeGiMGt()+a)}},{"../math/vec2":30,"../objects/Body":31,"../utils/Utils":47}],23:[function(a,b){function c(a,b,c){e.call(this,a,b,-c,c),this.contactPointA=d.create(),this.contactPointB=d.create(),this.t=d.create(),this.contactEquation=null,this.shapeA=null,this.shapeB=null,this.frictionCoefficient=.3}{var d=a("../math/vec2"),e=a("./Equation");a("../utils/Utils")}b.exports=c,c.prototype=new e,c.prototype.constructor=c,c.prototype.setSlipForce=function(a){this.maxForce=a,this.minForce=-a},c.prototype.getSlipForce=function(){return this.maxForce},c.prototype.computeB=function(a,b,c){var e=(this.bodyA,this.bodyB,this.contactPointA),f=this.contactPointB,g=this.t,h=this.G;h[0]=-g[0],h[1]=-g[1],h[2]=-d.crossLength(e,g),h[3]=g[0],h[4]=g[1],h[5]=d.crossLength(f,g);var i=this.computeGW(),j=this.computeGiMf(),k=-i*b-c*j;return k}},{"../math/vec2":30,"../utils/Utils":47,"./Equation":22}],24:[function(a,b){function c(a,b,c){c=c||{},d.call(this,a,b,-Number.MAX_VALUE,Number.MAX_VALUE),this.angle=c.angle||0;var e=this.G;e[2]=1,e[5]=-1}var d=a("./Equation"),e=a("../math/vec2");b.exports=c,c.prototype=new d,c.prototype.constructor=c;var f=e.create(),g=e.create(),h=e.fromValues(1,0),i=e.fromValues(0,1);c.prototype.computeGq=function(){return e.rotate(f,h,this.bodyA.angle+this.angle),e.rotate(g,i,this.bodyB.angle),e.dot(f,g)}},{"../math/vec2":30,"./Equation":22}],25:[function(a,b){function c(a,b){d.call(this,a,b,-Number.MAX_VALUE,Number.MAX_VALUE),this.relativeVelocity=1,this.ratio=1}{var d=a("./Equation");a("../math/vec2")}b.exports=c,c.prototype=new d,c.prototype.constructor=c,c.prototype.computeB=function(a,b,c){var d=this.G;d[2]=-1,d[5]=this.ratio;var e=this.computeGiMf(),f=this.computeGW(),g=-f*b-c*e;return g}},{"../math/vec2":30,"./Equation":22}],26:[function(a,b){var c=function(){};b.exports=c,c.prototype={constructor:c,on:function(a,b,c){b.context=c||this,void 0===this._listeners&&(this._listeners={});var d=this._listeners;return void 0===d[a]&&(d[a]=[]),-1===d[a].indexOf(b)&&d[a].push(b),this},has:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;if(b){if(void 0!==c[a]&&-1!==c[a].indexOf(b))return!0}else if(void 0!==c[a])return!0;return!1},off:function(a,b){if(void 0===this._listeners)return this;var c=this._listeners,d=c[a].indexOf(b);return-1!==d&&c[a].splice(d,1),this},emit:function(a){if(void 0===this._listeners)return this;var b=this._listeners,c=b[a.type];if(void 0!==c){a.target=this;for(var d=0,e=c.length;e>d;d++){var f=c[d];f.call(f.context,a)}}return this}}},{}],27:[function(a,b){function c(a,b,f){if(f=f||{},!(a instanceof d&&b instanceof d))throw new Error("First two arguments must be Material instances.");this.id=c.idCounter++,this.materialA=a,this.materialB=b,this.friction="undefined"!=typeof f.friction?Number(f.friction):.3,this.restitution="undefined"!=typeof f.restitution?Number(f.restitution):0,this.stiffness="undefined"!=typeof f.stiffness?Number(f.stiffness):e.DEFAULT_STIFFNESS,this.relaxation="undefined"!=typeof f.relaxation?Number(f.relaxation):e.DEFAULT_RELAXATION,this.frictionStiffness="undefined"!=typeof f.frictionStiffness?Number(f.frictionStiffness):e.DEFAULT_STIFFNESS,this.frictionRelaxation="undefined"!=typeof f.frictionRelaxation?Number(f.frictionRelaxation):e.DEFAULT_RELAXATION,this.surfaceVelocity="undefined"!=typeof f.surfaceVelocity?Number(f.surfaceVelocity):0}var d=a("./Material"),e=a("../equations/Equation");b.exports=c,c.idCounter=0},{"../equations/Equation":22,"./Material":28}],28:[function(a,b){function c(){this.id=c.idCounter++}b.exports=c,c.idCounter=0},{}],29:[function(a,b){var c={};c.GetArea=function(a){if(a.length<6)return 0;for(var b=a.length-2,c=0,d=0;b>d;d+=2)c+=(a[d+2]-a[d])*(a[d+1]+a[d+3]);return c+=(a[0]-a[b])*(a[b+1]+a[1]),.5*-c},c.Triangulate=function(a){var b=a.length>>1;if(3>b)return[];for(var d=[],e=[],f=0;b>f;f++)e.push(f);for(var f=0,g=b;g>3;){var h=e[(f+0)%g],i=e[(f+1)%g],j=e[(f+2)%g],k=a[2*h],l=a[2*h+1],m=a[2*i],n=a[2*i+1],o=a[2*j],p=a[2*j+1],q=!1;if(c._convex(k,l,m,n,o,p)){q=!0;for(var r=0;g>r;r++){var s=e[r];if(s!=h&&s!=i&&s!=j&&c._PointInTriangle(a[2*s],a[2*s+1],k,l,m,n,o,p)){q=!1;break}}}if(q)d.push(h,i,j),e.splice((f+1)%g,1),g--,f=0;else if(f++>3*g)break}return d.push(e[0],e[1],e[2]),d},c._PointInTriangle=function(a,b,c,d,e,f,g,h){var i=g-c,j=h-d,k=e-c,l=f-d,m=a-c,n=b-d,o=i*i+j*j,p=i*k+j*l,q=i*m+j*n,r=k*k+l*l,s=k*m+l*n,t=1/(o*r-p*p),u=(r*q-p*s)*t,v=(o*s-p*q)*t;return u>=0&&v>=0&&1>u+v},c._convex=function(a,b,c,d,e,f){return(b-d)*(e-c)+(c-a)*(f-d)>=0},b.exports=c},{}],30:[function(a,b){var c=a("../../build/vec2").vec2;c.crossLength=function(a,b){return a[0]*b[1]-a[1]*b[0]},c.crossVZ=function(a,b,d){return c.rotate(a,b,-Math.PI/2),c.scale(a,a,d),a},c.crossZV=function(a,b,d){return c.rotate(a,d,Math.PI/2),c.scale(a,a,b),a},c.rotate=function(a,b,c){var d=Math.cos(c),e=Math.sin(c),f=b[0],g=b[1];a[0]=d*f-e*g,a[1]=e*f+d*g},c.rotate90cw=function(a,b){a[0]=b[1],a[1]=-b[0]},c.toLocalFrame=function(a,b,d,e){c.copy(a,b),c.sub(a,a,d),c.rotate(a,a,-e)},c.toGlobalFrame=function(a,b,d,e){c.copy(a,b),c.rotate(a,a,e),c.add(a,a,d)},c.centroid=function(a,b,d,e){return c.add(a,b,d),c.add(a,a,e),c.scale(a,a,1/3),a},b.exports=c},{"../../build/vec2":1}],31:[function(a,b){function c(a){a=a||{},h.call(this),this.id=++c._idCounter,this.world=null,this.shapes=[],this.shapeOffsets=[],this.shapeAngles=[],this.mass=a.mass||0,this.invMass=0,this.inertia=0,this.invInertia=0,this.fixedRotation=!!a.fixedRotation||!1,this.position=d.fromValues(0,0),a.position&&d.copy(this.position,a.position),this.interpolatedPosition=d.fromValues(0,0),this.interpolatedAngle=0,this.previousPosition=d.fromValues(0,0),this.previousAngle=0,this.velocity=d.fromValues(0,0),a.velocity&&d.copy(this.velocity,a.velocity),this.vlambda=d.fromValues(0,0),this.wlambda=0,this.angle=a.angle||0,this.angularVelocity=a.angularVelocity||0,this.force=d.create(),a.force&&d.copy(this.force,a.force),this.angularForce=a.angularForce||0,this.damping="number"==typeof a.damping?a.damping:.1,this.angularDamping="number"==typeof a.angularDamping?a.angularDamping:.1,this.motionState=0===this.mass?c.STATIC:c.DYNAMIC,this.boundingRadius=0,this.aabb=new g,this.aabbNeedsUpdate=!0,this.allowSleep=!0,this.wantsToSleep=!1,this.sleepState=c.AWAKE,this.sleepSpeedLimit=.2,this.sleepTimeLimit=1,this.gravityScale=1,this.timeLastSleepy=0,this.concavePath=null,this.lastDampingScale=1,this.lastAngularDampingScale=1,this.lastDampingTimeStep=-1,this._wakeUpAfterNarrowphase=!1,this.updateMassProperties()}var d=a("../math/vec2"),e=a("poly-decomp"),f=a("../shapes/Convex"),g=a("../collision/AABB"),h=a("../events/EventEmitter");b.exports=c,c.prototype=new h,c._idCounter=0,c.prototype.setDensity=function(a){var b=this.getArea();this.mass=b*a,this.updateMassProperties()},c.prototype.getArea=function(){for(var a=0,b=0;b<this.shapes.length;b++)a+=this.shapes[b].area;return a};var i=new g,j=d.create();c.prototype.updateAABB=function(){for(var a=this.shapes,b=this.shapeOffsets,c=this.shapeAngles,e=a.length,f=0;f!==e;f++){var g=a[f],h=j,k=c[f]+this.angle;d.rotate(h,b[f],this.angle),d.add(h,h,this.position),g.computeAABB(i,h,k),0===f?this.aabb.copy(i):this.aabb.extend(i)}this.aabbNeedsUpdate=!1},c.prototype.updateBoundingRadius=function(){for(var a=this.shapes,b=this.shapeOffsets,c=a.length,e=0,f=0;f!==c;f++){var g=a[f],h=d.length(b[f]),i=g.boundingRadius;h+i>e&&(e=h+i)}this.boundingRadius=e},c.prototype.addShape=function(a,b,c){c=c||0,b=b?d.fromValues(b[0],b[1]):d.fromValues(0,0),this.shapes.push(a),this.shapeOffsets.push(b),this.shapeAngles.push(c),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0},c.prototype.removeShape=function(a){var b=this.shapes.indexOf(a);return-1!==b?(this.shapes.splice(b,1),this.shapeOffsets.splice(b,1),this.shapeAngles.splice(b,1),this.aabbNeedsUpdate=!0,!0):!1},c.prototype.updateMassProperties=function(){if(this.motionState===c.STATIC||this.motionState===c.KINEMATIC)this.mass=Number.MAX_VALUE,this.invMass=0,this.inertia=Number.MAX_VALUE,this.invInertia=0;else{var a=this.shapes,b=a.length,e=this.mass/b,f=0;if(this.fixedRotation)this.inertia=Number.MAX_VALUE,this.invInertia=0;else{for(var g=0;b>g;g++){var h=a[g],i=d.squaredLength(this.shapeOffsets[g]),j=h.computeMomentOfInertia(e);f+=j+e*i}this.inertia=f,this.invInertia=f>0?1/f:0}this.invMass=1/this.mass}};var k=d.create();c.prototype.applyForce=function(a,b){var c=k;d.sub(c,b,this.position),d.add(this.force,this.force,a);var e=d.crossLength(c,a);this.angularForce+=e},c.prototype.toLocalFrame=function(a,b){d.toLocalFrame(a,b,this.position,this.angle)},c.prototype.toWorldFrame=function(a,b){d.toGlobalFrame(a,b,this.position,this.angle)},c.prototype.fromPolygon=function(a,b){b=b||{};for(var c=this.shapes.length;c>=0;--c)this.removeShape(this.shapes[c]);var g=new e.Polygon;if(g.vertices=a,g.makeCCW(),"number"==typeof b.removeCollinearPoints&&g.removeCollinearPoints(b.removeCollinearPoints),"undefined"==typeof b.skipSimpleCheck&&!g.isSimple())return!1;this.concavePath=g.vertices.slice(0);for(var c=0;c<this.concavePath.length;c++){var h=[0,0];d.copy(h,this.concavePath[c]),this.concavePath[c]=h}var i;i=b.optimalDecomp?g.decomp():g.quickDecomp();for(var j=d.create(),c=0;c!==i.length;c++){for(var k=new f(i[c].vertices),l=0;l!==k.vertices.length;l++){var h=k.vertices[l];d.sub(h,h,k.centerOfMass)}d.scale(j,k.centerOfMass,1),k.updateTriangles(),k.updateCenterOfMass(),k.updateBoundingRadius(),this.addShape(k,j)}return this.adjustCenterOfMass(),this.aabbNeedsUpdate=!0,!0};var l=(d.fromValues(0,0),d.fromValues(0,0)),m=d.fromValues(0,0),n=d.fromValues(0,0);c.prototype.adjustCenterOfMass=function(){var a=l,b=m,c=n,e=0;d.set(b,0,0);for(var f=0;f!==this.shapes.length;f++){var g=this.shapes[f],h=this.shapeOffsets[f];d.scale(a,h,g.area),d.add(b,b,a),e+=g.area}d.scale(c,b,1/e);for(var f=0;f!==this.shapes.length;f++){var g=this.shapes[f],h=this.shapeOffsets[f];h||(h=this.shapeOffsets[f]=d.create()),d.sub(h,h,c)}d.add(this.position,this.position,c);for(var f=0;this.concavePath&&f<this.concavePath.length;f++)d.sub(this.concavePath[f],this.concavePath[f],c);this.updateMassProperties(),this.updateBoundingRadius()},c.prototype.setZeroForce=function(){d.set(this.force,0,0),this.angularForce=0},c.prototype.resetConstraintVelocity=function(){var a=this,b=a.vlambda;d.set(b,0,0),a.wlambda=0},c.prototype.addConstraintVelocity=function(){var a=this,b=a.velocity;d.add(b,b,a.vlambda),a.angularVelocity+=a.wlambda},c.prototype.applyDamping=function(a){if(this.motionState===c.DYNAMIC){a!==this.lastDampingTimeStep&&(this.lastDampingScale=Math.pow(1-this.damping,a),this.lastAngularDampingScale=Math.pow(1-this.angularDamping,a),this.lastDampingTimeStep=a);var b=this.velocity;d.scale(b,b,this.lastDampingScale),this.angularVelocity*=this.lastAngularDampingScale}},c.prototype.wakeUp=function(){var a=this.sleepState;this.sleepState=c.AWAKE,this.idleTime=0,a!==c.AWAKE&&this.emit(c.wakeUpEvent)},c.prototype.sleep=function(){this.sleepState=c.SLEEPING,this.angularVelocity=0,this.angularForce=0,d.set(this.velocity,0,0),d.set(this.force,0,0),this.emit(c.sleepEvent)},c.prototype.sleepTick=function(a,b,e){if(this.allowSleep&&this.motionState!==c.SLEEPING){this.wantsToSleep=!1;var f=(this.sleepState,d.squaredLength(this.velocity)+Math.pow(this.angularVelocity,2)),g=Math.pow(this.sleepSpeedLimit,2);f>=g?(this.idleTime=0,this.sleepState=c.AWAKE):(this.idleTime+=e,this.sleepState=c.SLEEPY),this.idleTime>this.sleepTimeLimit&&(b?this.wantsToSleep=!0:this.sleep())}},c.prototype.getVelocityFromPosition=function(a,b){return a=a||d.create(),d.sub(a,this.position,this.previousPosition),d.scale(a,a,1/b),a},c.prototype.getAngularVelocityFromPosition=function(a){return(this.angle-this.previousAngle)/a},c.sleepyEvent={type:"sleepy"},c.sleepEvent={type:"sleep"},c.wakeUpEvent={type:"wakeup"},c.DYNAMIC=1,c.STATIC=2,c.KINEMATIC=4,c.AWAKE=0,c.SLEEPY=1,c.SLEEPING=2},{"../collision/AABB":8,"../events/EventEmitter":26,"../math/vec2":30,"../shapes/Convex":36,"poly-decomp":6}],32:[function(a,b){function c(a,b,c){c=e.defaults(c,{restLength:1,stiffness:100,damping:1,localAnchorA:[0,0],localAnchorB:[0,0]}),this.restLength=c.restLength,this.stiffness=c.stiffness,this.damping=c.damping,this.bodyA=a,this.bodyB=b,this.localAnchorA=d.create(),d.copy(this.localAnchorA,c.localAnchorA),this.localAnchorB=d.create(),d.copy(this.localAnchorB,c.localAnchorB),c.worldAnchorA&&this.setWorldAnchorA(c.worldAnchorA),c.worldAnchorB&&this.setWorldAnchorB(c.worldAnchorB)}var d=a("../math/vec2"),e=a("../utils/Utils");b.exports=c,c.prototype.setWorldAnchorA=function(a){this.bodyA.toLocalFrame(this.localAnchorA,a)},c.prototype.setWorldAnchorB=function(a){this.bodyB.toLocalFrame(this.localAnchorB,a)},c.prototype.getWorldAnchorA=function(a){this.bodyA.toWorldFrame(a,this.localAnchorA)},c.prototype.getWorldAnchorB=function(a){this.bodyB.toWorldFrame(a,this.localAnchorB)};var f=d.create(),g=d.create(),h=d.create(),i=d.create(),j=d.create(),k=d.create(),l=d.create(),m=d.create(),n=d.create();c.prototype.applyForce=function(){var a=this.stiffness,b=this.damping,c=this.restLength,e=this.bodyA,o=this.bodyB,p=f,q=g,r=h,s=i,t=n,u=j,v=k,w=l,x=m;this.getWorldAnchorA(u),this.getWorldAnchorB(v),d.sub(w,u,e.position),d.sub(x,v,o.position),d.sub(p,v,u);var y=d.len(p);d.normalize(q,p),d.sub(r,o.velocity,e.velocity),d.crossZV(t,o.angularVelocity,x),d.add(r,r,t),d.crossZV(t,e.angularVelocity,w),d.sub(r,r,t),d.scale(s,q,-a*(y-c)-b*d.dot(r,q)),d.sub(e.force,e.force,s),d.add(o.force,o.force,s);var z=d.crossLength(w,s),A=d.crossLength(x,s);e.angularForce-=z,o.angularForce+=A}},{"../math/vec2":30,"../utils/Utils":47}],33:[function(a,b){b.exports={AABB:a("./collision/AABB"),AngleLockEquation:a("./equations/AngleLockEquation"),Body:a("./objects/Body"),Broadphase:a("./collision/Broadphase"),Capsule:a("./shapes/Capsule"),Circle:a("./shapes/Circle"),Constraint:a("./constraints/Constraint"),ContactEquation:a("./equations/ContactEquation"),ContactMaterial:a("./material/ContactMaterial"),Convex:a("./shapes/Convex"),DistanceConstraint:a("./constraints/DistanceConstraint"),Equation:a("./equations/Equation"),EventEmitter:a("./events/EventEmitter"),FrictionEquation:a("./equations/FrictionEquation"),GearConstraint:a("./constraints/GearConstraint"),GridBroadphase:a("./collision/GridBroadphase"),GSSolver:a("./solver/GSSolver"),Heightfield:a("./shapes/Heightfield"),Line:a("./shapes/Line"),LockConstraint:a("./constraints/LockConstraint"),Material:a("./material/Material"),Narrowphase:a("./collision/Narrowphase"),NaiveBroadphase:a("./collision/NaiveBroadphase"),Particle:a("./shapes/Particle"),Plane:a("./shapes/Plane"),RevoluteConstraint:a("./constraints/RevoluteConstraint"),PrismaticConstraint:a("./constraints/PrismaticConstraint"),Rectangle:a("./shapes/Rectangle"),RotationalVelocityEquation:a("./equations/RotationalVelocityEquation"),SAPBroadphase:a("./collision/SAPBroadphase"),Shape:a("./shapes/Shape"),Solver:a("./solver/Solver"),Spring:a("./objects/Spring"),Utils:a("./utils/Utils"),World:a("./world/World"),vec2:a("./math/vec2"),version:a("../package.json").version}},{"../package.json":7,"./collision/AABB":8,"./collision/Broadphase":9,"./collision/GridBroadphase":10,"./collision/NaiveBroadphase":11,"./collision/Narrowphase":12,"./collision/SAPBroadphase":13,"./constraints/Constraint":14,"./constraints/DistanceConstraint":15,"./constraints/GearConstraint":16,"./constraints/LockConstraint":17,"./constraints/PrismaticConstraint":18,"./constraints/RevoluteConstraint":19,"./equations/AngleLockEquation":20,"./equations/ContactEquation":21,"./equations/Equation":22,"./equations/FrictionEquation":23,"./equations/RotationalVelocityEquation":25,"./events/EventEmitter":26,"./material/ContactMaterial":27,"./material/Material":28,"./math/vec2":30,"./objects/Body":31,"./objects/Spring":32,"./shapes/Capsule":34,"./shapes/Circle":35,"./shapes/Convex":36,"./shapes/Heightfield":37,"./shapes/Line":38,"./shapes/Particle":39,"./shapes/Plane":40,"./shapes/Rectangle":41,"./shapes/Shape":42,"./solver/GSSolver":43,"./solver/Solver":44,"./utils/Utils":47,"./world/World":51}],34:[function(a,b){function c(a,b){this.length=a||1,this.radius=b||1,d.call(this,d.CAPSULE)}var d=a("./Shape"),e=a("../math/vec2");b.exports=c,c.prototype=new d,c.prototype.computeMomentOfInertia=function(a){var b=this.radius,c=this.length+b,d=2*b;return a*(d*d+c*c)/12},c.prototype.updateBoundingRadius=function(){this.boundingRadius=this.radius+this.length/2},c.prototype.updateArea=function(){this.area=Math.PI*this.radius*this.radius+2*this.radius*this.length};var f=e.create();c.prototype.computeAABB=function(a,b,c){var d=this.radius;e.set(f,this.length,0),e.rotate(f,f,c),e.set(a.upperBound,Math.max(f[0]+d,-f[0]+d),Math.max(f[1]+d,-f[1]+d)),e.set(a.lowerBound,Math.min(f[0]-d,-f[0]-d),Math.min(f[1]-d,-f[1]-d)),e.add(a.lowerBound,a.lowerBound,b),e.add(a.upperBound,a.upperBound,b)}},{"../math/vec2":30,"./Shape":42}],35:[function(a,b){function c(a){this.radius=a||1,d.call(this,d.CIRCLE)}var d=a("./Shape"),e=a("../math/vec2");b.exports=c,c.prototype=new d,c.prototype.computeMomentOfInertia=function(a){var b=this.radius;return a*b*b/2},c.prototype.updateBoundingRadius=function(){this.boundingRadius=this.radius},c.prototype.updateArea=function(){this.area=Math.PI*this.radius*this.radius},c.prototype.computeAABB=function(a,b){var c=this.radius;e.set(a.upperBound,c,c),e.set(a.lowerBound,-c,-c),b&&(e.add(a.lowerBound,a.lowerBound,b),e.add(a.upperBound,a.upperBound,b))}},{"../math/vec2":30,"./Shape":42}],36:[function(a,b){function c(a){this.vertices=[];for(var b=0;b<a.length;b++){var c=e.create();e.copy(c,a[b]),this.vertices.push(c)}if(this.centerOfMass=e.fromValues(0,0),this.triangles=[],this.vertices.length&&(this.updateTriangles(),this.updateCenterOfMass()),this.boundingRadius=0,d.call(this,d.CONVEX),this.updateBoundingRadius(),this.updateArea(),this.area<0)throw new Error("Convex vertices must be given in conter-clockwise winding.")}{var d=a("./Shape"),e=a("../math/vec2"),f=a("../math/polyk");a("poly-decomp")}b.exports=c,c.prototype=new d,c.prototype.updateTriangles=function(){this.triangles.length=0;for(var a=[],b=0;b<this.vertices.length;b++){var c=this.vertices[b];a.push(c[0],c[1])}for(var d=f.Triangulate(a),b=0;b<d.length;b+=3){var e=d[b],g=d[b+1],h=d[b+2];this.triangles.push([e,g,h])}};{var g=e.create(),h=e.create(),i=e.create(),j=e.create(),k=e.create();e.create(),e.create(),e.create(),e.create()}c.prototype.updateCenterOfMass=function(){var a=this.triangles,b=this.vertices,d=this.centerOfMass,f=g,l=i,m=j,n=k,o=h;e.set(d,0,0);for(var p=0,q=0;q!==a.length;q++){var r=a[q],l=b[r[0]],m=b[r[1]],n=b[r[2]];e.centroid(f,l,m,n);var s=c.triangleArea(l,m,n);p+=s,e.scale(o,f,s),e.add(d,d,o)}e.scale(d,d,1/p)},c.prototype.computeMomentOfInertia=function(a){for(var b=0,c=0,d=this.vertices.length,f=d-1,g=0;d>g;f=g,g++){var h=this.vertices[f],i=this.vertices[g],j=Math.abs(e.crossLength(h,i)),k=e.dot(i,i)+e.dot(i,h)+e.dot(h,h);b+=j*k,c+=j}return a/6*(b/c)},c.prototype.updateBoundingRadius=function(){for(var a=this.vertices,b=0,c=0;c!==a.length;c++){var d=e.squaredLength(a[c]);d>b&&(b=d)}this.boundingRadius=Math.sqrt(b)},c.triangleArea=function(a,b,c){return.5*((b[0]-a[0])*(c[1]-a[1])-(c[0]-a[0])*(b[1]-a[1]))},c.prototype.updateArea=function(){this.updateTriangles(),this.area=0;for(var a=this.triangles,b=this.vertices,d=0;d!==a.length;d++){var e=a[d],f=b[e[0]],g=b[e[1]],h=b[e[2]],i=c.triangleArea(f,g,h);this.area+=i}},c.prototype.computeAABB=function(a,b,c){a.setFromPoints(this.vertices,b,c)}},{"../math/polyk":29,"../math/vec2":30,"./Shape":42,"poly-decomp":6}],37:[function(a,b){function c(a,b){if(b=e.defaults(b,{maxValue:null,minValue:null,elementWidth:.1}),null===b.minValue||null===b.maxValue){b.maxValue=a[0],b.minValue=a[0];for(var c=0;c!==a.length;c++){var f=a[c];f>b.maxValue&&(b.maxValue=f),f<b.minValue&&(b.minValue=f)}}this.data=a,this.maxValue=b.maxValue,this.minValue=b.minValue,this.elementWidth=b.elementWidth,d.call(this,d.HEIGHTFIELD)}var d=a("./Shape"),e=(a("../math/vec2"),a("../utils/Utils"));b.exports=c,c.prototype=new d,c.prototype.computeMomentOfInertia=function(){return Number.MAX_VALUE},c.prototype.updateBoundingRadius=function(){this.boundingRadius=Number.MAX_VALUE},c.prototype.updateArea=function(){for(var a=this.data,b=0,c=0;c<a.length-1;c++)b+=(a[c]+a[c+1])/2*this.elementWidth;this.area=b},c.prototype.computeAABB=function(a,b){a.upperBound[0]=this.elementWidth*this.data.length+b[0],a.upperBound[1]=this.maxValue+b[1],a.lowerBound[0]=b[0],a.lowerBound[1]=-Number.MAX_VALUE}},{"../math/vec2":30,"../utils/Utils":47,"./Shape":42}],38:[function(a,b){function c(a){this.length=a||1,d.call(this,d.LINE)}var d=a("./Shape"),e=a("../math/vec2");b.exports=c,c.prototype=new d,c.prototype.computeMomentOfInertia=function(a){return a*Math.pow(this.length,2)/12},c.prototype.updateBoundingRadius=function(){this.boundingRadius=this.length/2};var f=[e.create(),e.create()];c.prototype.computeAABB=function(a,b,c){var d=this.length;e.set(f[0],-d/2,0),e.set(f[1],d/2,0),a.setFromPoints(f,b,c)}},{"../math/vec2":30,"./Shape":42}],39:[function(a,b){function c(){d.call(this,d.PARTICLE)}var d=a("./Shape"),e=a("../math/vec2");b.exports=c,c.prototype=new d,c.prototype.computeMomentOfInertia=function(){return 0},c.prototype.updateBoundingRadius=function(){this.boundingRadius=0},c.prototype.computeAABB=function(a,b){this.length;e.copy(a.lowerBound,b),e.copy(a.upperBound,b)}},{"../math/vec2":30,"./Shape":42}],40:[function(a,b){function c(){d.call(this,d.PLANE)}{var d=a("./Shape"),e=a("../math/vec2");a("../utils/Utils")}b.exports=c,c.prototype=new d,c.prototype.computeMomentOfInertia=function(){return 0},c.prototype.updateBoundingRadius=function(){this.boundingRadius=Number.MAX_VALUE},c.prototype.computeAABB=function(a,b,c){var d=0,f=e.set;"number"==typeof c&&(d=c%(2*Math.PI)),0==d?(f(a.lowerBound,-Number.MAX_VALUE,-Number.MAX_VALUE),f(a.upperBound,Number.MAX_VALUE,0)):d==Math.PI/2?(f(a.lowerBound,0,-Number.MAX_VALUE),f(a.upperBound,Number.MAX_VALUE,Number.MAX_VALUE)):d==Math.PI?(f(a.lowerBound,-Number.MAX_VALUE,0),f(a.upperBound,Number.MAX_VALUE,Number.MAX_VALUE)):d==3*Math.PI/2?(f(a.lowerBound,-Number.MAX_VALUE,-Number.MAX_VALUE),f(a.upperBound,0,Number.MAX_VALUE)):(f(a.lowerBound,-Number.MAX_VALUE,-Number.MAX_VALUE),f(a.upperBound,Number.MAX_VALUE,Number.MAX_VALUE)),e.add(a.lowerBound,a.lowerBound,b),e.add(a.upperBound,a.upperBound,b)},c.prototype.updateArea=function(){this.area=Number.MAX_VALUE}},{"../math/vec2":30,"../utils/Utils":47,"./Shape":42}],41:[function(a,b){function c(a,b){a=a||1,b=b||1;var c=[d.fromValues(-a/2,-b/2),d.fromValues(a/2,-b/2),d.fromValues(a/2,b/2),d.fromValues(-a/2,b/2)];this.width=a,this.height=b,f.call(this,c),this.type=e.RECTANGLE}var d=a("../math/vec2"),e=a("./Shape"),f=a("./Convex");b.exports=c,c.prototype=new f([]),c.prototype.computeMomentOfInertia=function(a){var b=this.width,c=this.height;return a*(c*c+b*b)/12},c.prototype.updateBoundingRadius=function(){var a=this.width,b=this.height;this.boundingRadius=Math.sqrt(a*a+b*b)/2};d.create(),d.create(),d.create(),d.create();c.prototype.computeAABB=function(a,b,c){a.setFromPoints(this.vertices,b,c)},c.prototype.updateArea=function(){this.area=this.width*this.height}},{"../math/vec2":30,"./Convex":36,"./Shape":42}],42:[function(a,b){function c(a){this.type=a,this.id=c.idCounter++,this.boundingRadius=0,this.collisionGroup=1,this.collisionMask=1,a&&this.updateBoundingRadius(),this.material=null,this.area=0,this.sensor=!1,this.updateArea()}b.exports=c,c.idCounter=0,c.CIRCLE=1,c.PARTICLE=2,c.PLANE=4,c.CONVEX=8,c.LINE=16,c.RECTANGLE=32,c.CAPSULE=64,c.HEIGHTFIELD=128,c.prototype.computeMomentOfInertia=function(){throw new Error("Shape.computeMomentOfInertia is not implemented in this Shape...")},c.prototype.updateBoundingRadius=function(){throw new Error("Shape.updateBoundingRadius is not implemented in this Shape...")},c.prototype.updateArea=function(){},c.prototype.computeAABB=function(){}},{}],43:[function(a,b){function c(a){f.call(this,a,f.GS),a=a||{},this.iterations=a.iterations||10,this.tolerance=a.tolerance||1e-10,this.arrayStep=30,this.lambda=new g.ARRAY_TYPE(this.arrayStep),this.Bs=new g.ARRAY_TYPE(this.arrayStep),this.invCs=new g.ARRAY_TYPE(this.arrayStep),this.useZeroRHS=!1,this.frictionIterations=0,this.usedIterations=0
}function d(a){for(var b=a.length;b--;)a[b]=0}var e=a("../math/vec2"),f=a("./Solver"),g=a("../utils/Utils"),h=a("../equations/FrictionEquation");b.exports=c,c.prototype=new f,c.prototype.solve=function(a,b){this.sortEquations();var f=0,i=this.iterations,j=this.frictionIterations,k=this.equations,l=k.length,m=Math.pow(this.tolerance*l,2),n=b.bodies,o=b.bodies.length,p=(e.add,e.set,this.useZeroRHS),q=this.lambda;this.usedIterations=0,q.length<l&&(q=this.lambda=new g.ARRAY_TYPE(l+this.arrayStep),this.Bs=new g.ARRAY_TYPE(l+this.arrayStep),this.invCs=new g.ARRAY_TYPE(l+this.arrayStep)),d(q);for(var r=this.invCs,s=this.Bs,q=this.lambda,t=0;t!==k.length;t++){var u=k[t];(u.timeStep!==a||u.needsUpdate)&&(u.timeStep=a,u.update()),s[t]=u.computeB(u.a,u.b,a),r[t]=u.computeInvC(u.epsilon)}var u,v,t,w;if(0!==l){for(t=0;t!==o;t++)n[t].resetConstraintVelocity();if(j){for(f=0;f!==j;f++){for(v=0,w=0;w!==l;w++){u=k[w];var x=c.iterateEquation(w,u,u.epsilon,s,r,q,p,a,f);v+=Math.abs(x)}if(this.usedIterations++,m>=v*v)break}for(c.updateMultipliers(k,q,1/a),w=0;w!==l;w++){var y=k[w];if(y instanceof h){var z=y.contactEquation.multiplier*y.frictionCoefficient;y.maxForce=z,y.minForce=-z}}}for(f=0;f!==i;f++){for(v=0,w=0;w!==l;w++){u=k[w];var x=c.iterateEquation(w,u,u.epsilon,s,r,q,p,a,f);v+=Math.abs(x)}if(this.usedIterations++,m>=v*v)break}for(t=0;t!==o;t++)n[t].addConstraintVelocity();c.updateMultipliers(k,q,1/a)}},c.updateMultipliers=function(a,b,c){for(var d=a.length;d--;)a[d].multiplier=b[d]*c},c.iterateEquation=function(a,b,c,d,e,f,g,h){var i=d[a],j=e[a],k=f[a],l=b.computeGWlambda(),m=b.maxForce,n=b.minForce;g&&(i=0);var o=j*(i-l-c*k),p=k+o;return n*h>p?o=n*h-k:p>m*h&&(o=m*h-k),f[a]+=o,b.addToWlambda(o),o}},{"../equations/FrictionEquation":23,"../math/vec2":30,"../utils/Utils":47,"./Solver":44}],44:[function(a,b){function c(a,b){a=a||{},d.call(this),this.type=b,this.equations=[],this.equationSortFunction=a.equationSortFunction||!1}var d=(a("../utils/Utils"),a("../events/EventEmitter"));b.exports=c,c.prototype=new d,c.prototype.solve=function(){throw new Error("Solver.solve should be implemented by subclasses!")};var e={bodies:[]};c.prototype.solveIsland=function(a,b){this.removeAllEquations(),b.equations.length&&(this.addEquations(b.equations),e.bodies.length=0,b.getBodies(e.bodies),e.bodies.length&&this.solve(a,e))},c.prototype.sortEquations=function(){this.equationSortFunction&&this.equations.sort(this.equationSortFunction)},c.prototype.addEquation=function(a){a.enabled&&this.equations.push(a)},c.prototype.addEquations=function(a){for(var b=0,c=a.length;b!==c;b++){var d=a[b];d.enabled&&this.equations.push(d)}},c.prototype.removeEquation=function(a){var b=this.equations.indexOf(a);-1!==b&&this.equations.splice(b,1)},c.prototype.removeAllEquations=function(){this.equations.length=0},c.GS=1,c.ISLAND=2},{"../events/EventEmitter":26,"../utils/Utils":47}],45:[function(a,b){function c(){this.overlappingLastState=new e,this.overlappingCurrentState=new e,this.recordPool=[],this.tmpDict=new e,this.tmpArray1=[]}function d(a,b,c,d){this.shapeA=b,this.shapeB=d,this.bodyA=a,this.bodyB=c}{var e=a("./TupleDictionary");a("./Utils")}b.exports=c,c.prototype.tick=function(){for(var a=this.overlappingLastState,b=this.overlappingCurrentState,c=b.keys.length;c--;){var d=b.keys[c];this.recordPool.push(b.getByKey(d))}a.reset(),a.copy(b),b.reset()},c.prototype.setOverlapping=function(a,b,c,e){var f=(this.overlappingLastState,this.overlappingCurrentState);if(!f.get(b.id,e.id)){var g;g=this.recordPool.length?this.recordPool.pop():new d(a,b,c,e),f.set(b.id,e.id,g)}},c.prototype.getNewOverlaps=function(a){return this.getDiff(this.overlappingLastState,this.overlappingCurrentState,a)},c.prototype.getEndOverlaps=function(a){return this.getDiff(this.overlappingCurrentState,this.overlappingLastState,a)},c.prototype.getDiff=function(a,b,c){var c=c||[],d=a,e=b;c.length=0;for(var f=e.keys.length;f--;){var g=e.keys[f],h=e.data[g];if(!h)throw new Error("Key "+g+" had no data!");var i=d.data[g];i||c.push(h)}return c},c.prototype.isNewOverlap=function(a,b){var c=0|a.id,d=0|b.id;return!this.overlappingLastState.get(c,d)&&!!this.overlappingCurrentState.get(c,d)},c.prototype.getNewBodyOverlaps=function(a){this.tmpArray1.length=0;var b=this.getNewOverlaps(this.tmpArray1);return this.getBodyDiff(b,a)},c.prototype.getEndBodyOverlaps=function(a){this.tmpArray1.length=0;var b=this.getEndOverlaps(this.tmpArray1);return this.getBodyDiff(b,a)},c.prototype.getBodyDiff=function(a,b){b=b||[];for(var c=this.tmpDict,d=a.length;d--;){var e=a[d];c.set(0|e.bodyA.id,0|e.bodyB.id,e)}for(d=c.keys.length;d--;){var e=c.keys[d];b.push(e.bodyA,e.bodyB)}return c.reset(),b},d.prototype.set=function(a,b,c,e){d.call(this,a,b,c,e)}},{"./TupleDictionary":46,"./Utils":47}],46:[function(a,b){function c(){this.data=[],this.keys=[]}var d=a("./Utils");b.exports=c,c.prototype.getKey=function(a,b){return a=0|a,b=0|b,(0|a)===(0|b)?-1:0|((0|a)>(0|b)?a<<16|65535&b:b<<16|65535&a)},c.prototype.getByKey=function(a){return a=0|a,this.data[a]},c.prototype.get=function(a,b){a=0|a,b=0|b;var c=0|this.getKey(a,b);return this.data[c]},c.prototype.set=function(a,b,c){if(!c)throw new Error("No data!");a=0|a,b=0|b;var d=0|this.getKey(a,b);return this.get(a,b)||this.keys.push(d),this.data[d]=c,d},c.prototype.reset=function(){for(var a=this.data,b=this.keys,c=0|b.length;c--;){var d=0|b[c];a[d]=void 0}b.length=0},c.prototype.copy=function(a){this.reset(),d.appendArray(this.keys,a.keys);for(var b=0|a.keys.length;b--;){var c=0|a.keys[b];this.data[c]=a.data[c]}}},{"./Utils":47}],47:[function(a,b){function c(){}b.exports=c,c.appendArray=function(a,b){if(b.length<15e4)a.push.apply(a,b);else for(var c=0,d=b.length;c!==d;++c)a.push(b[c])},c.splice=function(a,b,c){c=c||1;for(var d=b,e=a.length-c;e>d;d++)a[d]=a[d+c];a.length=e},c.ARRAY_TYPE=window.Float32Array||Array,c.extend=function(a,b){for(var c in b)a[c]=b[c]},c.defaults=function(a,b){a=a||{};for(var c in b)c in a||(a[c]=b[c]);return a}},{}],48:[function(a,b){function c(){this.equations=[],this.bodies=[]}var d=a("../objects/Body");b.exports=c,c.prototype.reset=function(){this.equations.length=this.bodies.length=0};var e=[];c.prototype.getBodies=function(a){var b=a||[],c=this.equations;e.length=0;for(var d=0;d!==c.length;d++){var f=c[d];-1===e.indexOf(f.bodyA.id)&&(b.push(f.bodyA),e.push(f.bodyA.id)),-1===e.indexOf(f.bodyB.id)&&(b.push(f.bodyB),e.push(f.bodyB.id))}return b},c.prototype.wantsToSleep=function(){for(var a=0;a<this.bodies.length;a++){var b=this.bodies[a];if(b.motionState===d.DYNAMIC&&!b.wantsToSleep)return!1}return!0},c.prototype.sleep=function(){for(var a=0;a<this.bodies.length;a++){var b=this.bodies[a];b.sleep()}return!0}},{"../objects/Body":31}],49:[function(a,b){function c(){this._nodePool=[],this._islandPool=[],this.equations=[],this.islands=[],this.nodes=[],this.queue=[]}var d=(a("../math/vec2"),a("./Island")),e=a("./IslandNode"),f=a("../objects/Body");b.exports=c,c.getUnvisitedNode=function(a){for(var b=a.length,c=0;c!==b;c++){var d=a[c];if(!d.visited&&d.body.motionState===f.DYNAMIC)return d}return!1},c.prototype.visit=function(a,b,c){b.push(a.body);for(var d=a.equations.length,e=0;e!==d;e++){var f=a.equations[e];-1===c.indexOf(f)&&c.push(f)}},c.prototype.bfs=function(a,b,d){var e=this.queue;for(e.length=0,e.push(a),a.visited=!0,this.visit(a,b,d);e.length;)for(var g,h=e.pop();g=c.getUnvisitedNode(h.neighbors);)g.visited=!0,this.visit(g,b,d),g.body.motionState===f.DYNAMIC&&e.push(g)},c.prototype.split=function(a){for(var b=a.bodies,f=this.nodes,g=this.equations;f.length;)this._nodePool.push(f.pop());for(var h=0;h!==b.length;h++)if(this._nodePool.length){var i=this._nodePool.pop();i.reset(),i.body=b[h],f.push(i)}else f.push(new e(b[h]));for(var j=0;j!==g.length;j++){var k=g[j],h=b.indexOf(k.bodyA),l=b.indexOf(k.bodyB),m=f[h],n=f[l];m.neighbors.push(n),n.neighbors.push(m),m.equations.push(k),n.equations.push(k)}for(var o=this.islands;o.length;){var p=o.pop();p.reset(),this._islandPool.push(p)}for(var q;q=c.getUnvisitedNode(f);){var p=this._islandPool.length?this._islandPool.pop():new d;this.bfs(q,p.bodies,p.equations),o.push(p)}return o}},{"../math/vec2":30,"../objects/Body":31,"./Island":48,"./IslandNode":50}],50:[function(a,b){function c(a){this.body=a,this.neighbors=[],this.equations=[],this.visited=!1}b.exports=c,c.prototype.reset=function(){this.equations.length=0,this.neighbors.length=0,this.visited=!1,this.body=null}},{}],51:[function(a,b){function c(a){r.apply(this),a=a||{},this.springs=[],this.bodies=[],this.disabledBodyCollisionPairs=[],this.solver=a.solver||new g,this.narrowphase=new G(this),this.islandManager=new J,this.gravity=j.fromValues(0,-9.78),a.gravity&&j.copy(this.gravity,a.gravity),this.frictionGravity=j.length(this.gravity)||10,this.useWorldGravityAsFrictionGravity=!0,this.useFrictionGravityOnZeroGravity=!0,this.doProfiling=a.doProfiling||!1,this.lastStepTime=0,this.broadphase=a.broadphase||new i,this.broadphase.setWorld(this),this.constraints=[],this.defaultMaterial=new v,this.defaultContactMaterial=new w(this.defaultMaterial,this.defaultMaterial),this.lastTimeStep=1/60,this.applySpringForces=!0,this.applyDamping=!0,this.applyGravity=!0,this.solveConstraints=!0,this.contactMaterials=[],this.time=0,this.stepping=!1,this.bodiesToBeRemoved=[],this.fixedStepTime=0,this.islandSplit="undefined"!=typeof a.islandSplit?!!a.islandSplit:!1,this.emitImpactEvent=!0,this._constraintIdCounter=0,this._bodyIdCounter=0,this.postStepEvent={type:"postStep"},this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.addSpringEvent={type:"addSpring",spring:null},this.impactEvent={type:"impact",bodyA:null,bodyB:null,shapeA:null,shapeB:null,contactEquation:null},this.postBroadphaseEvent={type:"postBroadphase",pairs:null},this.enableBodySleeping=!1,this.enableIslandSleeping=!1,this.beginContactEvent={type:"beginContact",shapeA:null,shapeB:null,bodyA:null,bodyB:null,contactEquations:[]},this.endContactEvent={type:"endContact",shapeA:null,shapeB:null,bodyA:null,bodyB:null},this.preSolveEvent={type:"preSolve",contactEquations:null,frictionEquations:null},this.overlappingShapesLastState={keys:[]},this.overlappingShapesCurrentState={keys:[]},this.overlapKeeper=new I}function d(a){return a?[a[0],a[1]]:a}function e(a,b){for(var c in b)a[c]=b[c]}function f(a){return{id:a.id,materialA:a.materialA.id,materialB:a.materialB.id,friction:a.friction,restitution:a.restitution,stiffness:a.stiffness,relaxation:a.relaxation,frictionStiffness:a.frictionStiffness,frictionRelaxation:a.frictionRelaxation}}var g=a("../solver/GSSolver"),h=a("../solver/Solver"),i=a("../collision/NaiveBroadphase"),j=a("../math/vec2"),k=a("../shapes/Circle"),l=a("../shapes/Rectangle"),m=a("../shapes/Convex"),n=a("../shapes/Line"),o=a("../shapes/Plane"),p=a("../shapes/Capsule"),q=a("../shapes/Particle"),r=a("../events/EventEmitter"),s=a("../objects/Body"),t=a("../shapes/Shape"),u=a("../objects/Spring"),v=a("../material/Material"),w=a("../material/ContactMaterial"),x=a("../constraints/DistanceConstraint"),y=a("../constraints/Constraint"),z=a("../constraints/LockConstraint"),A=a("../constraints/RevoluteConstraint"),B=a("../constraints/PrismaticConstraint"),C=a("../constraints/GearConstraint"),D=a("../../package.json"),E=a("../collision/Broadphase"),F=a("../collision/SAPBroadphase"),G=a("../collision/Narrowphase"),H=a("../utils/Utils"),I=a("../utils/OverlapKeeper"),J=a("./IslandManager");if(b.exports=c,"undefined"==typeof performance&&(performance={}),!performance.now){var K=Date.now();performance.timing&&performance.timing.navigationStart&&(K=performance.timing.navigationStart),performance.now=function(){return Date.now()-K}}c.prototype=new Object(r.prototype),c.prototype.addConstraint=function(a){this.constraints.push(a)},c.prototype.addContactMaterial=function(a){this.contactMaterials.push(a)},c.prototype.removeContactMaterial=function(a){var b=this.contactMaterials.indexOf(a);-1!==b&&H.splice(this.contactMaterials,b,1)},c.prototype.getContactMaterial=function(a,b){for(var c=this.contactMaterials,d=0,e=c.length;d!==e;d++){var f=c[d];if(f.materialA===a&&f.materialB===b||f.materialA===b&&f.materialB===a)return f}return!1},c.prototype.removeConstraint=function(a){var b=this.constraints.indexOf(a);-1!==b&&H.splice(this.constraints,b,1)};var L=(j.create(),j.create(),j.create(),j.create(),j.create(),j.create(),j.create()),M=j.fromValues(0,0),N=j.fromValues(0,0),O=(j.fromValues(0,0),j.fromValues(0,0));c.prototype.step=function(a,b,c){if(c=c||10,b=b||0,0===b)this.internalStep(a),this.time+=a;else{var d=Math.floor((this.time+b)/a)-Math.floor(this.time/a);d=Math.min(d,c);for(var e=0;e!==d;e++)this.internalStep(a);this.time+=b;for(var f=this.time%a,g=f/a,h=0;h!==this.bodies.length;h++){var i=this.bodies[h];i.motionState!==s.STATIC&&i.sleepState!==s.SLEEPING?(j.sub(O,i.position,i.previousPosition),j.scale(O,O,g),j.add(i.interpolatedPosition,i.position,O),i.interpolatedAngle=i.angle+(i.angle-i.previousAngle)*g):(j.copy(i.interpolatedPosition,i.position),i.interpolatedAngle=i.angle)}}};var P=[];c.prototype.internalStep=function(a){this.stepping=!0;var b,d,e=this,f=this.doProfiling,g=this.springs.length,h=this.springs,i=this.bodies,k=this.gravity,l=this.solver,m=this.bodies.length,n=this.broadphase,o=this.narrowphase,p=this.constraints,q=L,r=(j.scale,j.add),t=(j.rotate,this.islandManager);if(this.lastTimeStep=a,f&&(b=performance.now()),this.useWorldGravityAsFrictionGravity){var u=j.length(this.gravity);0===u&&this.useFrictionGravityOnZeroGravity||(this.frictionGravity=u)}if(this.applyGravity)for(var v=0;v!==m;v++){var w=i[v],x=w.force;w.motionState===s.DYNAMIC&&w.sleepState!==s.SLEEPING&&(j.scale(q,k,w.mass*w.gravityScale),r(x,x,q))}if(this.applySpringForces)for(var v=0;v!==g;v++){var y=h[v];y.applyForce()}if(this.applyDamping)for(var v=0;v!==m;v++){var w=i[v];w.motionState===s.DYNAMIC&&w.applyDamping(a)}for(var z=n.getCollisionPairs(this),A=this.disabledBodyCollisionPairs,v=A.length-2;v>=0;v-=2)for(var B=z.length-2;B>=0;B-=2)(A[v]===z[B]&&A[v+1]===z[B+1]||A[v+1]===z[B]&&A[v]===z[B+1])&&z.splice(B,2);var C=p.length;for(v=0;v!==C;v++){var D=p[v];if(!D.collideConnected)for(var B=z.length-2;B>=0;B-=2)(D.bodyA===z[B]&&D.bodyB===z[B+1]||D.bodyB===z[B]&&D.bodyA===z[B+1])&&z.splice(B,2)}this.postBroadphaseEvent.pairs=z,this.emit(this.postBroadphaseEvent),o.reset(this);for(var v=0,E=z.length;v!==E;v+=2)for(var F=z[v],G=z[v+1],I=0,J=F.shapes.length;I!==J;I++)for(var K=F.shapes[I],M=F.shapeOffsets[I],N=F.shapeAngles[I],O=0,Q=G.shapes.length;O!==Q;O++){var R=G.shapes[O],S=G.shapeOffsets[O],T=G.shapeAngles[O],U=this.defaultContactMaterial;if(K.material&&R.material){var V=this.getContactMaterial(K.material,R.material);V&&(U=V)}this.runNarrowphase(o,F,K,M,N,G,R,S,T,U,this.frictionGravity)}for(var v=0;v!==m;v++){var W=i[v];W._wakeUpAfterNarrowphase&&(W.wakeUp(),W._wakeUpAfterNarrowphase=!1)}if(this.has("endContact")){this.overlapKeeper.getEndOverlaps(P);for(var X=this.endContactEvent,O=P.length;O--;){var Y=P[O];X.shapeA=Y.shapeA,X.shapeB=Y.shapeB,X.bodyA=Y.bodyA,X.bodyB=Y.bodyA,this.emit(X)}}this.overlapKeeper.tick();var Z=this.preSolveEvent;Z.contactEquations=o.contactEquations,Z.frictionEquations=o.frictionEquations,this.emit(Z);var C=p.length;for(v=0;v!==C;v++)p[v].update();if(o.contactEquations.length||o.frictionEquations.length||p.length)if(this.islandSplit){for(t.equations.length=0,H.appendArray(t.equations,o.contactEquations),H.appendArray(t.equations,o.frictionEquations),v=0;v!==C;v++)H.appendArray(t.equations,p[v].equations);t.split(this);for(var v=0;v!==t.islands.length;v++){var $=t.islands[v];$.equations.length&&l.solveIsland(a,$)}}else{for(l.addEquations(o.contactEquations),l.addEquations(o.frictionEquations),v=0;v!==C;v++)l.addEquations(p[v].equations);this.solveConstraints&&l.solve(a,this),l.removeAllEquations()}for(var v=0;v!==m;v++){var W=i[v];W.sleepState!==s.SLEEPING&&W.motionState!==s.STATIC&&c.integrateBody(W,a)}for(var v=0;v!==m;v++)i[v].setZeroForce();if(f&&(d=performance.now(),e.lastStepTime=d-b),this.emitImpactEvent&&this.has("impact"))for(var _=this.impactEvent,v=0;v!==o.contactEquations.length;v++){var ab=o.contactEquations[v];ab.firstImpact&&(_.bodyA=ab.bodyA,_.bodyB=ab.bodyB,_.shapeA=ab.shapeA,_.shapeB=ab.shapeB,_.contactEquation=ab,this.emit(_))}if(this.enableBodySleeping)for(v=0;v!==m;v++)i[v].sleepTick(this.time,!1,a);else if(this.enableIslandSleeping&&this.islandSplit){for(v=0;v!==m;v++)i[v].sleepTick(this.time,!0,a);for(var v=0;v<this.islandManager.islands.length;v++){var $=this.islandManager.islands[v];$.wantsToSleep()&&$.sleep()}}if(this.stepping=!1,this.bodiesToBeRemoved.length){for(var v=0;v!==this.bodiesToBeRemoved.length;v++)this.removeBody(this.bodiesToBeRemoved[v]);this.bodiesToBeRemoved.length=0}this.emit(this.postStepEvent)};var Q=j.create(),R=j.create();c.integrateBody=function(a,b){var c=a.invMass,d=a.force,e=a.position,f=a.velocity;j.copy(a.previousPosition,a.position),a.previousAngle=a.angle,a.fixedRotation||(a.angularVelocity+=a.angularForce*a.invInertia*b,a.angle+=a.angularVelocity*b),j.scale(Q,d,b*c),j.add(f,Q,f),j.scale(R,f,b),j.add(e,e,R),a.aabbNeedsUpdate=!0},c.prototype.runNarrowphase=function(a,b,c,d,e,f,g,h,i,k,l){if(0!==(c.collisionGroup&g.collisionMask)&&0!==(g.collisionGroup&c.collisionMask)){j.rotate(M,d,b.angle),j.rotate(N,h,f.angle),j.add(M,M,b.position),j.add(N,N,f.position);var m=e+b.angle,n=i+f.angle;a.enableFriction=k.friction>0,a.frictionCoefficient=k.friction;var o;o=b.motionState===s.STATIC||b.motionState===s.KINEMATIC?f.mass:f.motionState===s.STATIC||f.motionState===s.KINEMATIC?b.mass:b.mass*f.mass/(b.mass+f.mass),a.slipForce=k.friction*l*o,a.restitution=k.restitution,a.surfaceVelocity=k.surfaceVelocity,a.frictionStiffness=k.frictionStiffness,a.frictionRelaxation=k.frictionRelaxation,a.stiffness=k.stiffness,a.relaxation=k.relaxation;var p=a[c.type|g.type],q=0;if(p){var r=c.sensor||g.sensor,t=a.frictionEquations.length;q=c.type<g.type?p.call(a,b,c,M,m,f,g,N,n,r):p.call(a,f,g,N,n,b,c,M,m,r);var u=a.frictionEquations.length-t;if(q){if(b.allowSleep&&b.motionState===s.DYNAMIC&&b.sleepState===s.SLEEPING&&f.sleepState===s.AWAKE&&f.motionState!==s.STATIC){var v=j.squaredLength(f.velocity)+Math.pow(f.angularVelocity,2),w=Math.pow(f.sleepSpeedLimit,2);v>=2*w&&(b._wakeUpAfterNarrowphase=!0)}if(f.allowSleep&&f.motionState===s.DYNAMIC&&f.sleepState===s.SLEEPING&&b.sleepState===s.AWAKE&&b.motionState!==s.STATIC){var x=j.squaredLength(b.velocity)+Math.pow(b.angularVelocity,2),y=Math.pow(b.sleepSpeedLimit,2);x>=2*y&&(f._wakeUpAfterNarrowphase=!0)}if(this.overlapKeeper.setOverlapping(b,c,f,g),this.has("beginContact")&&this.overlapKeeper.isNewOverlap(c,g)){var z=this.beginContactEvent;if(z.shapeA=c,z.shapeB=g,z.bodyA=b,z.bodyB=f,z.contactEquations.length=0,"number"==typeof q)for(var A=a.contactEquations.length-q;A<a.contactEquations.length;A++)z.contactEquations.push(a.contactEquations[A]);this.emit(z)}if("number"==typeof q&&u>1)for(var A=a.frictionEquations.length-u;A<a.frictionEquations.length;A++){var B=a.frictionEquations[A];B.setSlipForce(B.getSlipForce()/u)}}}}},c.prototype.addSpring=function(a){this.springs.push(a),this.addSpringEvent.spring=a,this.emit(this.addSpringEvent)},c.prototype.removeSpring=function(a){var b=this.springs.indexOf(a);-1===b&&H.splice(this.springs,b,1)},c.prototype.addBody=function(a){-1===this.bodies.indexOf(a)&&(this.bodies.push(a),a.world=this,this.addBodyEvent.body=a,this.emit(this.addBodyEvent))},c.prototype.removeBody=function(a){if(this.stepping)this.bodiesToBeRemoved.push(a);else{a.world=null;var b=this.bodies.indexOf(a);-1!==b&&(H.splice(this.bodies,b,1),this.removeBodyEvent.body=a,a.resetConstraintVelocity(),this.emit(this.removeBodyEvent))}},c.prototype.getBodyById=function(a){for(var b=this.bodies,c=0;c<b.length;c++){var d=b[c];if(d.id===a)return d}return!1},c.prototype.disableBodyCollision=function(a,b){this.disabledBodyCollisionPairs.push(a,b)},c.prototype.enableBodyCollision=function(a,b){for(var c=this.disabledBodyCollisionPairs,d=0;d<c.length;d+=2)if(c[d]===a&&c[d+1]===b||c[d+1]===a&&c[d]===b)return void c.splice(d,2)},c.prototype.toJSON=function(){var a=this,b={p2:D.version,bodies:[],springs:[],solver:{},gravity:d(a.gravity),broadphase:{},distanceConstraints:[],revoluteConstraints:[],prismaticConstraints:[],lockConstraints:[],gearConstraints:[],contactMaterials:[],materials:[],defaultContactMaterial:f(a.defaultContactMaterial),islandSplit:a.islandSplit,enableIslandSleeping:a.enableIslandSleeping,enableBodySleeping:a.enableBodySleeping},c=b.solver,g=a.solver;g.type===h.GS&&(c.type="GSSolver",c.iterations=g.iterations);var i=b.broadphase,j=a.broadphase;j.type===E.NAIVE?i.type="NaiveBroadphase":j.type===E.SAP?i.type="SAPBroadphase":console.error("Broadphase not supported: "+j.type);for(var k=0;k!==a.springs.length;k++){var g=a.springs[k];b.springs.push({bodyA:a.bodies.indexOf(g.bodyA),bodyB:a.bodies.indexOf(g.bodyB),stiffness:g.stiffness,damping:g.damping,restLength:g.restLength,localAnchorA:d(g.localAnchorA),localAnchorB:d(g.localAnchorB)})}for(var k=0;k<a.constraints.length;k++){var l=a.constraints[k],m={bodyA:a.bodies.indexOf(l.bodyA),bodyB:a.bodies.indexOf(l.bodyB),collideConnected:l.collideConnected};switch(l.type){case y.DISTANCE:e(m,{distance:l.distance,maxForce:l.getMaxForce()}),b.distanceConstraints.push(m);break;case y.REVOLUTE:e(m,{pivotA:d(l.pivotA),pivotB:d(l.pivotB),maxForce:l.maxForce,motorSpeed:l.getMotorSpeed()||0,motorEnabled:!!l.getMotorSpeed(),lowerLimit:l.lowerLimit,lowerLimitEnabled:l.lowerLimitEnabled,upperLimit:l.upperLimit,upperLimitEnabled:l.upperLimitEnabled}),b.revoluteConstraints.push(m);break;case y.PRISMATIC:e(m,{localAxisA:d(l.localAxisA),localAnchorA:d(l.localAnchorA),localAnchorB:d(l.localAnchorB),maxForce:l.maxForce,upperLimitEnabled:l.upperLimitEnabled,lowerLimitEnabled:l.lowerLimitEnabled,upperLimit:l.upperLimit,lowerLimit:l.lowerLimit,motorEnabled:l.motorEnabled,motorSpeed:l.motorSpeed}),b.prismaticConstraints.push(m);break;case y.LOCK:e(m,{localOffsetB:d(l.localOffsetB),localAngleB:l.localAngleB,maxForce:l.getMaxForce()}),b.lockConstraints.push(m);break;case y.GEAR:e(m,{angle:l.angle,ratio:l.ratio,maxForce:l.maxForce||1e6}),b.gearConstraints.push(m);break;default:console.error("Constraint not supported yet: ",l.type)}}for(var k=0;k!==a.bodies.length;k++){var n=a.bodies[k],o=n.shapes,p={id:n.id,mass:n.mass,angle:n.angle,position:d(n.position),velocity:d(n.velocity),angularVelocity:n.angularVelocity,force:d(n.force),motionState:n.motionState,fixedRotation:n.fixedRotation,circleShapes:[],planeShapes:[],particleShapes:[],lineShapes:[],rectangleShapes:[],convexShapes:[],capsuleShapes:[]};n.concavePath&&(p.concavePath=n.concavePath);for(var q=0;q<o.length;q++){var g=o[q],r={};switch(r.offset=d(n.shapeOffsets[q]),r.angle=n.shapeAngles[q],r.collisionGroup=g.collisionGroup,r.collisionMask=g.collisionMask,r.material=g.material?g.material.id:null,g.type){case t.CIRCLE:e(r,{radius:g.radius}),p.circleShapes.push(r);break;case t.PLANE:p.planeShapes.push(r);break;case t.PARTICLE:p.particleShapes.push(r);break;case t.LINE:r.length=g.length,p.lineShapes.push(r);break;case t.RECTANGLE:e(r,{width:g.width,height:g.height}),p.rectangleShapes.push(r);break;case t.CONVEX:for(var s=[],u=0;u<g.vertices.length;u++)s.push(d(g.vertices[u]));e(r,{vertices:s}),p.convexShapes.push(r);break;case t.CAPSULE:e(r,{length:g.length,radius:g.radius}),p.capsuleShapes.push(r);break;default:console.error("Shape type not supported yet!")}}b.bodies.push(p)}for(var k=0;k<a.contactMaterials.length;k++){var v=a.contactMaterials[k];b.contactMaterials.push(f(v))}for(var w={},k=0;k<a.contactMaterials.length;k++){var v=a.contactMaterials[k];w[v.materialA.id+""]=v.materialA,w[v.materialB.id+""]=v.materialB}for(var x in w){var z=w[parseInt(x)];b.materials.push({id:z.id})}return b},c.prototype.fromJSON=function(a){function b(a,b,c){b.collisionMask=c.collisionMask,b.collisionGroup=c.collisionGroup,c.material&&(b.material=h[c.material+""]),a.addShape(b,c.offset,c.angle)}if(this.clear(),!a.p2)return!1;var c=this;switch(j.copy(c.gravity,a.gravity),c.islandSplit=a.islandSplit,c.enableIslandSleeping=a.enableIslandSleeping,c.enableBodySleeping=a.enableBodySleeping,a.solver.type){case"GSSolver":var d=a.solver,e=new g;c.solver=e,e.iterations=d.iterations;break;default:throw new Error("Solver type not recognized: "+a.solver.type)}switch(a.broadphase.type){case"NaiveBroadphase":c.broadphase=new i;break;case"SAPBroadphase":c.broadphase=new F}c.broadphase.setWorld(c);for(var f=c.bodies,h={},r=0;r!==a.materials.length;r++){var t=a.materials[r],y=new v;h[t.id+""]=y,y.id=t.id}c.defaultMaterial.id=a.defaultContactMaterial.materialA;for(var r=0;r!==a.bodies.length;r++){var D=a.bodies[r],E=new s({mass:D.mass,position:D.position,angle:D.angle,velocity:D.velocity,angularVelocity:D.angularVelocity,force:D.force,fixedRotation:D.fixedRotation});E.id=D.id,E.motionState=D.motionState;for(var G=0;G<D.circleShapes.length;G++){var e=D.circleShapes[G];b(E,new k(e.radius),e)}for(var G=0;G<D.planeShapes.length;G++){var e=D.planeShapes[G];b(E,new o,e)}for(var G=0;G<D.particleShapes.length;G++){var e=D.particleShapes[G];b(E,new q,e)}for(var G=0;G<D.lineShapes.length;G++){var e=D.lineShapes[G];b(E,new n(e.length),e)}for(var G=0;G<D.rectangleShapes.length;G++){var e=D.rectangleShapes[G];b(E,new l(e.width,e.height),e)}for(var G=0;G<D.convexShapes.length;G++){var e=D.convexShapes[G];b(E,new m(e.vertices),e)}for(var G=0;G<D.capsuleShapes.length;G++){var e=D.capsuleShapes[G];b(E,new p(e.length,e.radius),e)}D.concavePath&&(E.concavePath=D.concavePath),c.addBody(E)}for(var r=0;r<a.springs.length;r++){var d=a.springs[r],H=f[d.bodyA],I=f[d.bodyB];if(!H)return this.error="instance.springs["+r+"] references instance.body["+d.bodyA+"], which does not exist.",!1;if(!I)return this.error="instance.springs["+r+"] references instance.body["+d.bodyB+"], which does not exist.",!1;var e=new u(H,I,{stiffness:d.stiffness,damping:d.damping,restLength:d.restLength,localAnchorA:d.localAnchorA,localAnchorB:d.localAnchorB});c.addSpring(e)}for(var r=0;r<a.contactMaterials.length;r++){var t=a.contactMaterials[r],J=h[t.materialA+""],K=h[t.materialB+""];if(!J)return this.error="Reference to material id "+t.materialA+": material not found",!1;if(!K)return this.error="Reference to material id "+t.materialB+": material not found",!1;var L=new w(J,K,{friction:t.friction,restitution:t.restitution,stiffness:t.stiffness,relaxation:t.relaxation,frictionStiffness:t.frictionStiffness,frictionRelaxation:t.frictionRelaxation});L.id=t.id,c.addContactMaterial(L)}var t=a.defaultContactMaterial,J=c.defaultMaterial,K=c.defaultMaterial,L=new w(J,K,{friction:t.friction,restitution:t.restitution,stiffness:t.stiffness,relaxation:t.relaxation,frictionStiffness:t.frictionStiffness,frictionRelaxation:t.frictionRelaxation});L.id=t.id,c.defaultContactMaterial=L;for(var r=0;r<a.distanceConstraints.length;r++){var M=a.distanceConstraints[r];c.addConstraint(new x(f[M.bodyA],f[M.bodyB],M.distance,{maxForce:M.maxForce,collideConnected:M.collideConnected}))}for(var r=0;r<a.revoluteConstraints.length;r++){var M=a.revoluteConstraints[r],N=new A(f[M.bodyA],M.pivotA,f[M.bodyB],M.pivotB,{maxForce:M.maxForce,collideConnected:M.collideConnected});M.motorEnabled&&N.enableMotor(),N.setMotorSpeed(M.motorSpeed),N.lowerLimit=M.lowerLimit,N.upperLimit=M.upperLimit,N.lowerLimitEnabled=M.lowerLimitEnabled,N.upperLimitEnabled=M.upperLimitEnabled,c.addConstraint(N)}for(var r=0;r<a.prismaticConstraints.length;r++){var M=a.prismaticConstraints[r],O=new B(f[M.bodyA],f[M.bodyB],{maxForce:M.maxForce,localAxisA:M.localAxisA,localAnchorA:M.localAnchorA,localAnchorB:M.localAnchorB,collideConnected:M.collideConnected});O.motorSpeed=M.motorSpeed,c.addConstraint(O)}for(var r=0;r<a.lockConstraints.length;r++){var M=a.lockConstraints[r];c.addConstraint(new z(f[M.bodyA],f[M.bodyB],{maxForce:M.maxForce,localOffsetB:M.localOffsetB,localAngleB:M.localAngleB,collideConnected:M.collideConnected}))}for(var r=0;r<a.gearConstraints.length;r++){var M=a.gearConstraints[r];c.addConstraint(new C(f[M.bodyA],f[M.bodyB],{maxForce:M.maxForce,angle:M.angle,ratio:M.ratio,collideConnected:M.collideConnected}))}return!0},c.prototype.clear=function(){this.time=0,this.fixedStepTime=0,this.solver&&this.solver.equations.length&&this.solver.removeAllEquations();for(var a=this.constraints,b=a.length-1;b>=0;b--)this.removeConstraint(a[b]);for(var d=this.bodies,b=d.length-1;b>=0;b--)this.removeBody(d[b]);for(var e=this.springs,b=e.length-1;b>=0;b--)this.removeSpring(e[b]);for(var f=this.contactMaterials,b=f.length-1;b>=0;b--)this.removeContactMaterial(f[b]);c.apply(this)},c.prototype.clone=function(){var a=new c;return a.fromJSON(this.toJSON()),a};var S=j.create(),T=j.fromValues(0,0),U=j.fromValues(0,0);c.prototype.hitTest=function(a,b,c){c=c||0;var d=new s({position:a}),e=new q,f=a,g=0,h=S,i=T,l=U;d.addShape(e);for(var n=this.narrowphase,r=[],t=0,u=b.length;t!==u;t++)for(var v=b[t],w=0,x=v.shapes.length;w!==x;w++){var y=v.shapes[w],z=v.shapeOffsets[w]||i,A=v.shapeAngles[w]||0;j.rotate(h,z,v.angle),j.add(h,h,v.position);var B=A+v.angle;(y instanceof k&&n.circleParticle(v,y,h,B,d,e,f,g,!0)||y instanceof m&&n.particleConvex(d,e,f,g,v,y,h,B,!0)||y instanceof o&&n.particlePlane(d,e,f,g,v,y,h,B,!0)||y instanceof p&&n.particleCapsule(d,e,f,g,v,y,h,B,!0)||y instanceof q&&j.squaredLength(j.sub(l,h,a))<c*c)&&r.push(v)}return r},c.prototype.setGlobalEquationParameters=function(a){a=a||{};for(var b=0;b!==this.constraints.length;b++)for(var c=this.constraints[b],d=0;d!==c.equations.length;d++){var e=c.equations[d];"undefined"!=typeof a.stiffness&&(e.stiffness=a.stiffness),"undefined"!=typeof a.relaxation&&(e.relaxation=a.relaxation),e.needsUpdate=!0}for(var b=0;b!==this.contactMaterials.length;b++){var c=this.contactMaterials[b];"undefined"!=typeof a.stiffness&&(c.stiffness=a.stiffness,c.frictionStiffness=a.stiffness),"undefined"!=typeof a.relaxation&&(c.relaxation=a.relaxation,c.frictionRelaxation=a.relaxation)}var c=this.defaultContactMaterial;"undefined"!=typeof a.stiffness&&(c.stiffness=a.stiffness,c.frictionStiffness=a.stiffness),"undefined"!=typeof a.relaxation&&(c.relaxation=a.relaxation,c.frictionRelaxation=a.relaxation)},c.prototype.setGlobalStiffness=function(a){this.setGlobalEquationParameters({stiffness:a})},c.prototype.setGlobalRelaxation=function(a){this.setGlobalEquationParameters({relaxation:a})}},{"../../package.json":7,"../collision/Broadphase":9,"../collision/NaiveBroadphase":11,"../collision/Narrowphase":12,"../collision/SAPBroadphase":13,"../constraints/Constraint":14,"../constraints/DistanceConstraint":15,"../constraints/GearConstraint":16,"../constraints/LockConstraint":17,"../constraints/PrismaticConstraint":18,"../constraints/RevoluteConstraint":19,"../events/EventEmitter":26,"../material/ContactMaterial":27,"../material/Material":28,"../math/vec2":30,"../objects/Body":31,"../objects/Spring":32,"../shapes/Capsule":34,"../shapes/Circle":35,"../shapes/Convex":36,"../shapes/Line":38,"../shapes/Particle":39,"../shapes/Plane":40,"../shapes/Rectangle":41,"../shapes/Shape":42,"../solver/GSSolver":43,"../solver/Solver":44,"../utils/OverlapKeeper":45,"../utils/Utils":47,"./IslandManager":49}]},{},[33])(33)}),p2.Body.prototype.parent=null,p2.Spring.prototype.parent=null,Phaser.Physics.P2=function(a,b){this.game=a,"undefined"!=typeof b&&b.hasOwnProperty("gravity")&&b.hasOwnProperty("broadphase")||(b={gravity:[0,0],broadphase:new p2.SAPBroadphase}),this.world=new p2.World(b),this.frameRate=1/60,this.useElapsedTime=!1,this.paused=!1,this.materials=[],this.gravity=new Phaser.Physics.P2.InversePointProxy(this,this.world.gravity),this.walls={left:null,right:null,top:null,bottom:null},this.onBodyAdded=new Phaser.Signal,this.onBodyRemoved=new Phaser.Signal,this.onSpringAdded=new Phaser.Signal,this.onSpringRemoved=new Phaser.Signal,this.onConstraintAdded=new Phaser.Signal,this.onConstraintRemoved=new Phaser.Signal,this.onContactMaterialAdded=new Phaser.Signal,this.onContactMaterialRemoved=new Phaser.Signal,this.postBroadphaseCallback=null,this.callbackContext=null,this.onBeginContact=new Phaser.Signal,this.onEndContact=new Phaser.Signal,b.hasOwnProperty("mpx")&&b.hasOwnProperty("pxm")&&b.hasOwnProperty("mpxi")&&b.hasOwnProperty("pxmi")&&(this.mpx=b.mpx,this.mpxi=b.mpxi,this.pxm=b.pxm,this.pxmi=b.pxmi),this.world.on("beginContact",this.beginContactHandler,this),this.world.on("endContact",this.endContactHandler,this),this.collisionGroups=[],this.nothingCollisionGroup=new Phaser.Physics.P2.CollisionGroup(1),this.boundsCollisionGroup=new Phaser.Physics.P2.CollisionGroup(2),this.everythingCollisionGroup=new Phaser.Physics.P2.CollisionGroup(2147483648),this.boundsCollidesWith=[],this._toRemove=[],this._collisionGroupID=2,this.setBoundsToWorld(!0,!0,!0,!0,!1)
},Phaser.Physics.P2.prototype={removeBodyNextStep:function(a){this._toRemove.push(a)},preUpdate:function(){for(var a=this._toRemove.length;a--;)this.removeBody(this._toRemove[a]);this._toRemove.length=0},enable:function(a,b,c){"undefined"==typeof b&&(b=!1),"undefined"==typeof c&&(c=!0);var d=1;if(Array.isArray(a))for(d=a.length;d--;)a[d]instanceof Phaser.Group?this.enable(a[d].children,b,c):(this.enableBody(a[d],b),c&&a[d].hasOwnProperty("children")&&a[d].children.length>0&&this.enable(a[d],b,!0));else a instanceof Phaser.Group?this.enable(a.children,b,c):(this.enableBody(a,b),c&&a.hasOwnProperty("children")&&a.children.length>0&&this.enable(a.children,b,!0))},enableBody:function(a,b){a.hasOwnProperty("body")&&null===a.body&&(a.body=new Phaser.Physics.P2.Body(this.game,a,a.x,a.y,1),a.body.debug=b,a.anchor.set(.5))},setImpactEvents:function(a){a?this.world.on("impact",this.impactHandler,this):this.world.off("impact",this.impactHandler,this)},setPostBroadphaseCallback:function(a,b){this.postBroadphaseCallback=a,this.callbackContext=b,null!==a?this.world.on("postBroadphase",this.postBroadphaseHandler,this):this.world.off("postBroadphase",this.postBroadphaseHandler,this)},postBroadphaseHandler:function(a){if(this.postBroadphaseCallback)for(var b=a.pairs.length;b-=2;)a.pairs[b].parent&&a.pairs[b+1].parent&&!this.postBroadphaseCallback.call(this.callbackContext,a.pairs[b].parent,a.pairs[b+1].parent)&&a.pairs.splice(b,2)},impactHandler:function(a){if(a.bodyA.parent&&a.bodyB.parent){var b=a.bodyA.parent,c=a.bodyB.parent;b._bodyCallbacks[a.bodyB.id]&&b._bodyCallbacks[a.bodyB.id].call(b._bodyCallbackContext[a.bodyB.id],b,c,a.shapeA,a.shapeB),c._bodyCallbacks[a.bodyA.id]&&c._bodyCallbacks[a.bodyA.id].call(c._bodyCallbackContext[a.bodyA.id],c,b,a.shapeB,a.shapeA),b._groupCallbacks[a.shapeB.collisionGroup]&&b._groupCallbacks[a.shapeB.collisionGroup].call(b._groupCallbackContext[a.shapeB.collisionGroup],b,c,a.shapeA,a.shapeB),c._groupCallbacks[a.shapeA.collisionGroup]&&c._groupCallbacks[a.shapeA.collisionGroup].call(c._groupCallbackContext[a.shapeA.collisionGroup],c,b,a.shapeB,a.shapeA)}},beginContactHandler:function(a){this.onBeginContact.dispatch(a.bodyA,a.bodyB,a.shapeA,a.shapeB,a.contactEquations),a.bodyA.parent&&a.bodyA.parent.onBeginContact.dispatch(a.bodyB.parent,a.shapeA,a.shapeB,a.contactEquations),a.bodyB.parent&&a.bodyB.parent.onBeginContact.dispatch(a.bodyA.parent,a.shapeB,a.shapeA,a.contactEquations)},endContactHandler:function(a){this.onEndContact.dispatch(a.bodyA,a.bodyB,a.shapeA,a.shapeB),a.bodyA.parent&&a.bodyA.parent.onEndContact.dispatch(a.bodyB.parent,a.shapeA,a.shapeB),a.bodyB.parent&&a.bodyB.parent.onEndContact.dispatch(a.bodyA.parent,a.shapeB,a.shapeA)},setBoundsToWorld:function(a,b,c,d,e){this.setBounds(this.game.world.bounds.x,this.game.world.bounds.y,this.game.world.bounds.width,this.game.world.bounds.height,a,b,c,d,e)},setWorldMaterial:function(a,b,c,d,e){"undefined"==typeof b&&(b=!0),"undefined"==typeof c&&(c=!0),"undefined"==typeof d&&(d=!0),"undefined"==typeof e&&(e=!0),b&&this.walls.left&&(this.walls.left.shapes[0].material=a),c&&this.walls.right&&(this.walls.right.shapes[0].material=a),d&&this.walls.top&&(this.walls.top.shapes[0].material=a),e&&this.walls.bottom&&(this.walls.bottom.shapes[0].material=a)},updateBoundsCollisionGroup:function(a){var b=this.everythingCollisionGroup.mask;"undefined"==typeof a&&(b=this.boundsCollisionGroup.mask),this.walls.left&&(this.walls.left.shapes[0].collisionGroup=b),this.walls.right&&(this.walls.right.shapes[0].collisionGroup=b),this.walls.top&&(this.walls.top.shapes[0].collisionGroup=b),this.walls.bottom&&(this.walls.bottom.shapes[0].collisionGroup=b)},setBounds:function(a,b,c,d,e,f,g,h,i){"undefined"==typeof e&&(e=!0),"undefined"==typeof f&&(f=!0),"undefined"==typeof g&&(g=!0),"undefined"==typeof h&&(h=!0),"undefined"==typeof i&&(i=!0),this.walls.left&&this.world.removeBody(this.walls.left),this.walls.right&&this.world.removeBody(this.walls.right),this.walls.top&&this.world.removeBody(this.walls.top),this.walls.bottom&&this.world.removeBody(this.walls.bottom),e&&(this.walls.left=new p2.Body({mass:0,position:[this.pxmi(a),this.pxmi(b)],angle:1.5707963267948966}),this.walls.left.addShape(new p2.Plane),i&&(this.walls.left.shapes[0].collisionGroup=this.boundsCollisionGroup.mask),this.world.addBody(this.walls.left)),f&&(this.walls.right=new p2.Body({mass:0,position:[this.pxmi(a+c),this.pxmi(b)],angle:-1.5707963267948966}),this.walls.right.addShape(new p2.Plane),i&&(this.walls.right.shapes[0].collisionGroup=this.boundsCollisionGroup.mask),this.world.addBody(this.walls.right)),g&&(this.walls.top=new p2.Body({mass:0,position:[this.pxmi(a),this.pxmi(b)],angle:-3.141592653589793}),this.walls.top.addShape(new p2.Plane),i&&(this.walls.top.shapes[0].collisionGroup=this.boundsCollisionGroup.mask),this.world.addBody(this.walls.top)),h&&(this.walls.bottom=new p2.Body({mass:0,position:[this.pxmi(a),this.pxmi(b+d)]}),this.walls.bottom.addShape(new p2.Plane),i&&(this.walls.bottom.shapes[0].collisionGroup=this.boundsCollisionGroup.mask),this.world.addBody(this.walls.bottom))},pause:function(){this.paused=!0},resume:function(){this.paused=!1},update:function(){this.paused||this.world.step(this.useElapsedTime?this.game.time.physicsElapsed:this.frameRate)},clear:function(){this.world.clear(),this.world.off("beginContact",this.beginContactHandler,this),this.world.off("endContact",this.endContactHandler,this),this.postBroadphaseCallback=null,this.callbackContext=null,this.impactCallback=null,this.collisionGroups=[],this._toRemove=[],this._collisionGroupID=2,this.boundsCollidesWith=[]},destroy:function(){this.clear(),this.game=null},addBody:function(a){return a.data.world?!1:(this.world.addBody(a.data),this.onBodyAdded.dispatch(a),!0)},removeBody:function(a){return a.data.world==this.world&&(this.world.removeBody(a.data),this.onBodyRemoved.dispatch(a)),a},addSpring:function(a){return this.world.addSpring(a),this.onSpringAdded.dispatch(a),a},removeSpring:function(a){return this.world.removeSpring(a),this.onSpringRemoved.dispatch(a),a},createDistanceConstraint:function(a,b,c,d){return a=this.getBody(a),b=this.getBody(b),a&&b?this.addConstraint(new Phaser.Physics.P2.DistanceConstraint(this,a,b,c,d)):void console.warn("Cannot create Constraint, invalid body objects given")},createGearConstraint:function(a,b,c,d){return a=this.getBody(a),b=this.getBody(b),a&&b?this.addConstraint(new Phaser.Physics.P2.GearConstraint(this,a,b,c,d)):void console.warn("Cannot create Constraint, invalid body objects given")},createRevoluteConstraint:function(a,b,c,d,e){return a=this.getBody(a),c=this.getBody(c),a&&c?this.addConstraint(new Phaser.Physics.P2.RevoluteConstraint(this,a,b,c,d,e)):void console.warn("Cannot create Constraint, invalid body objects given")},createLockConstraint:function(a,b,c,d,e){return a=this.getBody(a),b=this.getBody(b),a&&b?this.addConstraint(new Phaser.Physics.P2.LockConstraint(this,a,b,c,d,e)):void console.warn("Cannot create Constraint, invalid body objects given")},createPrismaticConstraint:function(a,b,c,d,e,f,g){return a=this.getBody(a),b=this.getBody(b),a&&b?this.addConstraint(new Phaser.Physics.P2.PrismaticConstraint(this,a,b,c,d,e,f,g)):void console.warn("Cannot create Constraint, invalid body objects given")},addConstraint:function(a){return this.world.addConstraint(a),this.onConstraintAdded.dispatch(a),a},removeConstraint:function(a){return this.world.removeConstraint(a),this.onConstraintRemoved.dispatch(a),a},addContactMaterial:function(a){return this.world.addContactMaterial(a),this.onContactMaterialAdded.dispatch(a),a},removeContactMaterial:function(a){return this.world.removeContactMaterial(a),this.onContactMaterialRemoved.dispatch(a),a},getContactMaterial:function(a,b){return this.world.getContactMaterial(a,b)},setMaterial:function(a,b){for(var c=b.length;c--;)b[c].setMaterial(a)},createMaterial:function(a,b){a=a||"";var c=new Phaser.Physics.P2.Material(a);return this.materials.push(c),"undefined"!=typeof b&&b.setMaterial(c),c},createContactMaterial:function(a,b,c){"undefined"==typeof a&&(a=this.createMaterial()),"undefined"==typeof b&&(b=this.createMaterial());var d=new Phaser.Physics.P2.ContactMaterial(a,b,c);return this.addContactMaterial(d)},getBodies:function(){for(var a=[],b=this.world.bodies.length;b--;)a.push(this.world.bodies[b].parent);return a},getBody:function(a){return a instanceof p2.Body?a:a instanceof Phaser.Physics.P2.Body?a.data:a.body&&a.body.type===Phaser.Physics.P2JS?a.body.data:null},getSprings:function(){for(var a=[],b=this.world.springs.length;b--;)a.push(this.world.springs[b].parent);return a},getConstraints:function(){for(var a=[],b=this.world.constraints.length;b--;)a.push(this.world.constraints[b].parent);return a},hitTest:function(a,b,c,d){"undefined"==typeof b&&(b=this.world.bodies),"undefined"==typeof c&&(c=5),"undefined"==typeof d&&(d=!1);for(var e=[this.pxmi(a.x),this.pxmi(a.y)],f=[],g=b.length;g--;)b[g]instanceof Phaser.Physics.P2.Body&&(!d||b[g].data.motionState!==p2.Body.STATIC)?f.push(b[g].data):b[g]instanceof p2.Body&&b[g].parent&&(!d||b[g].motionState!==p2.Body.STATIC)?f.push(b[g]):b[g]instanceof Phaser.Sprite&&b[g].hasOwnProperty("body")&&(!d||b[g].body.data.motionState!==p2.Body.STATIC)&&f.push(b[g].body.data);return this.world.hitTest(e,f,c)},toJSON:function(){return this.world.toJSON()},createCollisionGroup:function(a){var b=Math.pow(2,this._collisionGroupID);this.walls.left&&(this.walls.left.shapes[0].collisionMask=this.walls.left.shapes[0].collisionMask|b),this.walls.right&&(this.walls.right.shapes[0].collisionMask=this.walls.right.shapes[0].collisionMask|b),this.walls.top&&(this.walls.top.shapes[0].collisionMask=this.walls.top.shapes[0].collisionMask|b),this.walls.bottom&&(this.walls.bottom.shapes[0].collisionMask=this.walls.bottom.shapes[0].collisionMask|b),this._collisionGroupID++;var c=new Phaser.Physics.P2.CollisionGroup(b);return this.collisionGroups.push(c),a&&this.setCollisionGroup(a,c),c},setCollisionGroup:function(a,b){if(a instanceof Phaser.Group)for(var c=0;c<a.total;c++)a.children[c].body&&a.children[c].body.type===Phaser.Physics.P2JS&&a.children[c].body.setCollisionGroup(b);else a.body.setCollisionGroup(b)},createSpring:function(a,b,c,d,e,f,g,h,i){return a=this.getBody(a),b=this.getBody(b),a&&b?this.addSpring(new Phaser.Physics.P2.Spring(this,a,b,c,d,e,f,g,h,i)):void console.warn("Cannot create Spring, invalid body objects given")},createBody:function(a,b,c,d,e,f){"undefined"==typeof d&&(d=!1);var g=new Phaser.Physics.P2.Body(this.game,null,a,b,c);if(f){var h=g.addPolygon(e,f);if(!h)return!1}return d&&this.world.addBody(g.data),g},createParticle:function(a,b,c,d,e,f){"undefined"==typeof d&&(d=!1);var g=new Phaser.Physics.P2.Body(this.game,null,a,b,c);if(f){var h=g.addPolygon(e,f);if(!h)return!1}return d&&this.world.addBody(g.data),g},convertCollisionObjects:function(a,b,c){"undefined"==typeof c&&(c=!0);for(var d=[],e=0,f=a.collision[b].length;f>e;e++){var g=a.collision[b][e],h=this.createBody(g.x,g.y,0,c,{},g.polyline);h&&d.push(h)}return d},clearTilemapLayerBodies:function(a,b){b=a.getLayer(b);for(var c=a.layers[b].bodies.length;c--;)a.layers[b].bodies[c].destroy();a.layers[b].bodies.length=0},convertTilemap:function(a,b,c,d){b=a.getLayer(b),"undefined"==typeof c&&(c=!0),"undefined"==typeof d&&(d=!0),this.clearTilemapLayerBodies(a,b);for(var e=0,f=0,g=0,h=0,i=a.layers[b].height;i>h;h++){e=0;for(var j=0,k=a.layers[b].width;k>j;j++){var l=a.layers[b].data[h][j];if(l&&l.index>-1&&l.collides)if(d){var m=a.getTileRight(b,j,h);if(0===e&&(f=l.x*l.width,g=l.y*l.height,e=l.width),m&&m.collides)e+=l.width;else{var n=this.createBody(f,g,0,!1);n.addRectangle(e,l.height,e/2,l.height/2,0),c&&this.addBody(n),a.layers[b].bodies.push(n),e=0}}else{var n=this.createBody(l.x*l.width,l.y*l.height,0,!1);n.addRectangle(l.width,l.height,l.width/2,l.height/2,0),c&&this.addBody(n),a.layers[b].bodies.push(n)}}}return a.layers[b].bodies},mpx:function(a){return a*=20},pxm:function(a){return.05*a},mpxi:function(a){return a*=-20},pxmi:function(a){return a*-.05}},Object.defineProperty(Phaser.Physics.P2.prototype,"friction",{get:function(){return this.world.defaultContactMaterial.friction},set:function(a){this.world.defaultContactMaterial.friction=a}}),Object.defineProperty(Phaser.Physics.P2.prototype,"defaultFriction",{get:function(){return this.world.defaultContactMaterial.friction},set:function(a){this.world.defaultContactMaterial.friction=a}}),Object.defineProperty(Phaser.Physics.P2.prototype,"restitution",{get:function(){return this.world.defaultContactMaterial.restitution},set:function(a){this.world.defaultContactMaterial.restitution=a}}),Object.defineProperty(Phaser.Physics.P2.prototype,"defaultRestitution",{get:function(){return this.world.defaultContactMaterial.restitution},set:function(a){this.world.defaultContactMaterial.restitution=a}}),Object.defineProperty(Phaser.Physics.P2.prototype,"contactMaterial",{get:function(){return this.world.defaultContactMaterial},set:function(a){this.world.defaultContactMaterial=a}}),Object.defineProperty(Phaser.Physics.P2.prototype,"applySpringForces",{get:function(){return this.world.applySpringForces},set:function(a){this.world.applySpringForces=a}}),Object.defineProperty(Phaser.Physics.P2.prototype,"applyDamping",{get:function(){return this.world.applyDamping},set:function(a){this.world.applyDamping=a}}),Object.defineProperty(Phaser.Physics.P2.prototype,"applyGravity",{get:function(){return this.world.applyGravity},set:function(a){this.world.applyGravity=a}}),Object.defineProperty(Phaser.Physics.P2.prototype,"solveConstraints",{get:function(){return this.world.solveConstraints},set:function(a){this.world.solveConstraints=a}}),Object.defineProperty(Phaser.Physics.P2.prototype,"time",{get:function(){return this.world.time}}),Object.defineProperty(Phaser.Physics.P2.prototype,"emitImpactEvent",{get:function(){return this.world.emitImpactEvent},set:function(a){this.world.emitImpactEvent=a}}),Object.defineProperty(Phaser.Physics.P2.prototype,"enableBodySleeping",{get:function(){return this.world.enableBodySleeping},set:function(a){this.world.enableBodySleeping=a}}),Object.defineProperty(Phaser.Physics.P2.prototype,"total",{get:function(){return this.world.bodies.length}}),Phaser.Physics.P2.FixtureList=function(a){Array.isArray(a)||(a=[a]),this.rawList=a,this.init(),this.parse(this.rawList)},Phaser.Physics.P2.FixtureList.prototype={init:function(){this.namedFixtures={},this.groupedFixtures=[],this.allFixtures=[]},setCategory:function(a,b){var c=function(b){b.collisionGroup=a};this.getFixtures(b).forEach(c)},setMask:function(a,b){var c=function(b){b.collisionMask=a};this.getFixtures(b).forEach(c)},setSensor:function(a,b){var c=function(b){b.sensor=a};this.getFixtures(b).forEach(c)},setMaterial:function(a,b){var c=function(b){b.material=a};this.getFixtures(b).forEach(c)},getFixtures:function(a){var b=[];if(a){a instanceof Array||(a=[a]);var c=this;return a.forEach(function(a){c.namedFixtures[a]&&b.push(c.namedFixtures[a])}),this.flatten(b)}return this.allFixtures},getFixtureByKey:function(a){return this.namedFixtures[a]},getGroup:function(a){return this.groupedFixtures[a]},parse:function(){var a,b,c,d;c=this.rawList,d=[];for(a in c)b=c[a],isNaN(a-0)?this.namedFixtures[a]=this.flatten(b):(this.groupedFixtures[a]=this.groupedFixtures[a]||[],this.groupedFixtures[a]=this.groupedFixtures[a].concat(b)),d.push(this.allFixtures=this.flatten(this.groupedFixtures))},flatten:function(a){var b,c;return b=[],c=arguments.callee,a.forEach(function(a){return Array.prototype.push.apply(b,Array.isArray(a)?c(a):[a])}),b}},Phaser.Physics.P2.PointProxy=function(a,b){this.world=a,this.destination=b},Phaser.Physics.P2.PointProxy.prototype.constructor=Phaser.Physics.P2.PointProxy,Object.defineProperty(Phaser.Physics.P2.PointProxy.prototype,"x",{get:function(){return this.destination[0]},set:function(a){this.destination[0]=this.world.pxm(a)}}),Object.defineProperty(Phaser.Physics.P2.PointProxy.prototype,"y",{get:function(){return this.destination[1]},set:function(a){this.destination[1]=this.world.pxm(a)}}),Phaser.Physics.P2.InversePointProxy=function(a,b){this.world=a,this.destination=b},Phaser.Physics.P2.InversePointProxy.prototype.constructor=Phaser.Physics.P2.InversePointProxy,Object.defineProperty(Phaser.Physics.P2.InversePointProxy.prototype,"x",{get:function(){return this.destination[0]},set:function(a){this.destination[0]=this.world.pxm(-a)}}),Object.defineProperty(Phaser.Physics.P2.InversePointProxy.prototype,"y",{get:function(){return this.destination[1]},set:function(a){this.destination[1]=this.world.pxm(-a)}}),Phaser.Physics.P2.Body=function(a,b,c,d,e){b=b||null,c=c||0,d=d||0,"undefined"==typeof e&&(e=1),this.game=a,this.world=a.physics.p2,this.sprite=b,this.type=Phaser.Physics.P2JS,this.offset=new Phaser.Point,this.data=new p2.Body({position:[this.world.pxmi(c),this.world.pxmi(d)],mass:e}),this.data.parent=this,this.velocity=new Phaser.Physics.P2.InversePointProxy(this.world,this.data.velocity),this.force=new Phaser.Physics.P2.InversePointProxy(this.world,this.data.force),this.gravity=new Phaser.Point,this.onBeginContact=new Phaser.Signal,this.onEndContact=new Phaser.Signal,this.collidesWith=[],this.removeNextStep=!1,this.debugBody=null,this._collideWorldBounds=!0,this._bodyCallbacks={},this._bodyCallbackContext={},this._groupCallbacks={},this._groupCallbackContext={},b&&(this.setRectangleFromSprite(b),b.exists&&this.game.physics.p2.addBody(this))},Phaser.Physics.P2.Body.prototype={createBodyCallback:function(a,b,c){var d=-1;a.id?d=a.id:a.body&&(d=a.body.id),d>-1&&(null===b?(delete this._bodyCallbacks[d],delete this._bodyCallbackContext[d]):(this._bodyCallbacks[d]=b,this._bodyCallbackContext[d]=c))},createGroupCallback:function(a,b,c){null===b?(delete this._groupCallbacks[a.mask],delete this._groupCallbacksContext[a.mask]):(this._groupCallbacks[a.mask]=b,this._groupCallbackContext[a.mask]=c)},getCollisionMask:function(){var a=0;this._collideWorldBounds&&(a=this.game.physics.p2.boundsCollisionGroup.mask);for(var b=0;b<this.collidesWith.length;b++)a|=this.collidesWith[b].mask;return a},updateCollisionMask:function(a){var b=this.getCollisionMask();if("undefined"==typeof a)for(var c=this.data.shapes.length-1;c>=0;c--)this.data.shapes[c].collisionMask=b;else a.collisionMask=b},setCollisionGroup:function(a,b){var c=this.getCollisionMask();if("undefined"==typeof b)for(var d=this.data.shapes.length-1;d>=0;d--)this.data.shapes[d].collisionGroup=a.mask,this.data.shapes[d].collisionMask=c;else b.collisionGroup=a.mask,b.collisionMask=c},clearCollision:function(a,b,c){if("undefined"==typeof c)for(var d=this.data.shapes.length-1;d>=0;d--)a&&(this.data.shapes[d].collisionGroup=null),b&&(this.data.shapes[d].collisionMask=null);else a&&(c.collisionGroup=null),b&&(c.collisionMask=null);a&&(this.collidesWith.length=0)},collides:function(a,b,c,d){if(Array.isArray(a))for(var e=0;e<a.length;e++)-1===this.collidesWith.indexOf(a[e])&&(this.collidesWith.push(a[e]),b&&this.createGroupCallback(a[e],b,c));else-1===this.collidesWith.indexOf(a)&&(this.collidesWith.push(a),b&&this.createGroupCallback(a,b,c));var f=this.getCollisionMask();if("undefined"==typeof d)for(var e=this.data.shapes.length-1;e>=0;e--)this.data.shapes[e].collisionMask=f;else d.collisionMask=f},adjustCenterOfMass:function(){this.data.adjustCenterOfMass()},applyDamping:function(a){this.data.applyDamping(a)},applyForce:function(a,b,c){this.data.applyForce(a,[this.world.pxmi(b),this.world.pxmi(c)])},setZeroForce:function(){this.data.setZeroForce()},setZeroRotation:function(){this.data.angularVelocity=0},setZeroVelocity:function(){this.data.velocity[0]=0,this.data.velocity[1]=0},setZeroDamping:function(){this.data.damping=0,this.data.angularDamping=0},toLocalFrame:function(a,b){return this.data.toLocalFrame(a,b)},toWorldFrame:function(a,b){return this.data.toWorldFrame(a,b)},rotateLeft:function(a){this.data.angularVelocity=this.world.pxm(-a)},rotateRight:function(a){this.data.angularVelocity=this.world.pxm(a)},moveForward:function(a){var b=this.world.pxmi(-a),c=this.data.angle+Math.PI/2;this.data.velocity[0]=b*Math.cos(c),this.data.velocity[1]=b*Math.sin(c)},moveBackward:function(a){var b=this.world.pxmi(-a),c=this.data.angle+Math.PI/2;this.data.velocity[0]=-(b*Math.cos(c)),this.data.velocity[1]=-(b*Math.sin(c))},thrust:function(a){var b=this.world.pxmi(-a),c=this.data.angle+Math.PI/2;this.data.force[0]+=b*Math.cos(c),this.data.force[1]+=b*Math.sin(c)},reverse:function(a){var b=this.world.pxmi(-a),c=this.data.angle+Math.PI/2;this.data.force[0]-=b*Math.cos(c),this.data.force[1]-=b*Math.sin(c)},moveLeft:function(a){this.data.velocity[0]=this.world.pxmi(-a)},moveRight:function(a){this.data.velocity[0]=this.world.pxmi(a)},moveUp:function(a){this.data.velocity[1]=this.world.pxmi(-a)},moveDown:function(a){this.data.velocity[1]=this.world.pxmi(a)},preUpdate:function(){this.removeNextStep&&(this.removeFromWorld(),this.removeNextStep=!1)},postUpdate:function(){this.sprite.x=this.world.mpxi(this.data.position[0]),this.sprite.y=this.world.mpxi(this.data.position[1]),this.fixedRotation||(this.sprite.rotation=this.data.angle)},reset:function(a,b,c,d){"undefined"==typeof c&&(c=!1),"undefined"==typeof d&&(d=!1),this.setZeroForce(),this.setZeroVelocity(),this.setZeroRotation(),c&&this.setZeroDamping(),d&&(this.mass=1),this.x=a,this.y=b},addToWorld:function(){if(this.game.physics.p2._toRemove)for(var a=0;a<this.game.physics.p2._toRemove.length;a++)this.game.physics.p2._toRemove[a]===this&&this.game.physics.p2._toRemove.splice(a,1);this.data.world!==this.game.physics.p2.world&&this.game.physics.p2.addBody(this)},removeFromWorld:function(){this.data.world===this.game.physics.p2.world&&this.game.physics.p2.removeBodyNextStep(this)},destroy:function(){this.removeFromWorld(),this.clearShapes(),this._bodyCallbacks={},this._bodyCallbackContext={},this._groupCallbacks={},this._groupCallbackContext={},this.debugBody&&this.debugBody.destroy(),this.debugBody=null,this.sprite=null},clearShapes:function(){for(var a=this.data.shapes.length;a--;)this.data.removeShape(this.data.shapes[a]);this.shapeChanged()},addShape:function(a,b,c,d){return"undefined"==typeof b&&(b=0),"undefined"==typeof c&&(c=0),"undefined"==typeof d&&(d=0),this.data.addShape(a,[this.world.pxmi(b),this.world.pxmi(c)],d),this.shapeChanged(),a},addCircle:function(a,b,c,d){var e=new p2.Circle(this.world.pxm(a));return this.addShape(e,b,c,d)},addRectangle:function(a,b,c,d,e){var f=new p2.Rectangle(this.world.pxm(a),this.world.pxm(b));return this.addShape(f,c,d,e)},addPlane:function(a,b,c){var d=new p2.Plane;return this.addShape(d,a,b,c)},addParticle:function(a,b,c){var d=new p2.Particle;return this.addShape(d,a,b,c)},addLine:function(a,b,c,d){var e=new p2.Line(this.world.pxm(a));return this.addShape(e,b,c,d)},addCapsule:function(a,b,c,d,e){var f=new p2.Capsule(this.world.pxm(a),b);return this.addShape(f,c,d,e)},addPolygon:function(a,b){a=a||{},Array.isArray(b)||(b=Array.prototype.slice.call(arguments,1));var c=[];if(1===b.length&&Array.isArray(b[0]))c=b[0].slice(0);else if(Array.isArray(b[0]))c=b[0].slice(0);else if("number"==typeof b[0])for(var d=0,e=b.length;e>d;d+=2)c.push([b[d],b[d+1]]);var f=c.length-1;c[f][0]===c[0][0]&&c[f][1]===c[0][1]&&c.pop();for(var g=0;g<c.length;g++)c[g][0]=this.world.pxmi(c[g][0]),c[g][1]=this.world.pxmi(c[g][1]);var h=this.data.fromPolygon(c,a);return this.shapeChanged(),h},removeShape:function(a){var b=this.data.removeShape(a);return this.shapeChanged(),b},setCircle:function(a,b,c,d){return this.clearShapes(),this.addCircle(a,b,c,d)},setRectangle:function(a,b,c,d,e){return"undefined"==typeof a&&(a=16),"undefined"==typeof b&&(b=16),this.clearShapes(),this.addRectangle(a,b,c,d,e)},setRectangleFromSprite:function(a){return"undefined"==typeof a&&(a=this.sprite),this.clearShapes(),this.addRectangle(a.width,a.height,0,0,a.rotation)},setMaterial:function(a,b){if("undefined"==typeof b)for(var c=this.data.shapes.length-1;c>=0;c--)this.data.shapes[c].material=a;else b.material=a},shapeChanged:function(){this.debugBody&&this.debugBody.draw()},addPhaserPolygon:function(a,b){for(var c=this.game.cache.getPhysicsData(a,b),d=[],e=0;e<c.length;e++){var f=c[e],g=this.addFixture(f);d[f.filter.group]=d[f.filter.group]||[],d[f.filter.group]=d[f.filter.group].concat(g),f.fixtureKey&&(d[f.fixtureKey]=g)}return this.data.aabbNeedsUpdate=!0,this.shapeChanged(),d},addFixture:function(a){var b=[];if(a.circle){var c=new p2.Circle(this.world.pxm(a.circle.radius));c.collisionGroup=a.filter.categoryBits,c.collisionMask=a.filter.maskBits,c.sensor=a.isSensor;var d=p2.vec2.create();d[0]=this.world.pxmi(a.circle.position[0]-this.sprite.width/2),d[1]=this.world.pxmi(a.circle.position[1]-this.sprite.height/2),this.data.addShape(c,d),b.push(c)}else for(var e=a.polygons,f=p2.vec2.create(),g=0;g<e.length;g++){for(var h=e[g],i=[],j=0;j<h.length;j+=2)i.push([this.world.pxmi(h[j]),this.world.pxmi(h[j+1])]);for(var c=new p2.Convex(i),k=0;k!==c.vertices.length;k++){var l=c.vertices[k];p2.vec2.sub(l,l,c.centerOfMass)}p2.vec2.scale(f,c.centerOfMass,1),f[0]-=this.world.pxmi(this.sprite.width/2),f[1]-=this.world.pxmi(this.sprite.height/2),c.updateTriangles(),c.updateCenterOfMass(),c.updateBoundingRadius(),c.collisionGroup=a.filter.categoryBits,c.collisionMask=a.filter.maskBits,c.sensor=a.isSensor,this.data.addShape(c,f),b.push(c)}return b},loadPolygon:function(a,b){for(var c=this.game.cache.getPhysicsData(a,b),d=p2.vec2.create(),e=0;e<c.length;e++){for(var f=[],g=0;g<c[e].shape.length;g+=2)f.push([this.world.pxmi(c[e].shape[g]),this.world.pxmi(c[e].shape[g+1])]);for(var h=new p2.Convex(f),i=0;i!==h.vertices.length;i++){var j=h.vertices[i];p2.vec2.sub(j,j,h.centerOfMass)}p2.vec2.scale(d,h.centerOfMass,1),d[0]-=this.world.pxmi(this.sprite.width/2),d[1]-=this.world.pxmi(this.sprite.height/2),h.updateTriangles(),h.updateCenterOfMass(),h.updateBoundingRadius(),this.data.addShape(h,d)}return this.data.aabbNeedsUpdate=!0,this.shapeChanged(),!0},loadData:function(a,b){var c=this.game.cache.getPhysicsData(a,b);return c&&c.shape?(this.mass=c.density,this.loadPolygon(a,b)):void 0}},Phaser.Physics.P2.Body.prototype.constructor=Phaser.Physics.P2.Body,Phaser.Physics.P2.Body.DYNAMIC=1,Phaser.Physics.P2.Body.STATIC=2,Phaser.Physics.P2.Body.KINEMATIC=4,Object.defineProperty(Phaser.Physics.P2.Body.prototype,"static",{get:function(){return this.data.motionState===Phaser.Physics.P2.Body.STATIC},set:function(a){a&&this.data.motionState!==Phaser.Physics.P2.Body.STATIC?(this.data.motionState=Phaser.Physics.P2.Body.STATIC,this.mass=0):a||this.data.motionState!==Phaser.Physics.P2.Body.STATIC||(this.data.motionState=Phaser.Physics.P2.Body.DYNAMIC,0===this.mass&&(this.mass=1))}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"dynamic",{get:function(){return this.data.motionState===Phaser.Physics.P2.Body.DYNAMIC},set:function(a){a&&this.data.motionState!==Phaser.Physics.P2.Body.DYNAMIC?(this.data.motionState=Phaser.Physics.P2.Body.DYNAMIC,0===this.mass&&(this.mass=1)):a||this.data.motionState!==Phaser.Physics.P2.Body.DYNAMIC||(this.data.motionState=Phaser.Physics.P2.Body.STATIC,this.mass=0)}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"kinematic",{get:function(){return this.data.motionState===Phaser.Physics.P2.Body.KINEMATIC},set:function(a){a&&this.data.motionState!==Phaser.Physics.P2.Body.KINEMATIC?(this.data.motionState=Phaser.Physics.P2.Body.KINEMATIC,this.mass=4):a||this.data.motionState!==Phaser.Physics.P2.Body.KINEMATIC||(this.data.motionState=Phaser.Physics.P2.Body.STATIC,this.mass=0)}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"allowSleep",{get:function(){return this.data.allowSleep},set:function(a){a!==this.data.allowSleep&&(this.data.allowSleep=a)}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"angle",{get:function(){return Phaser.Math.wrapAngle(Phaser.Math.radToDeg(this.data.angle))},set:function(a){this.data.angle=Phaser.Math.degToRad(Phaser.Math.wrapAngle(a))}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"angularDamping",{get:function(){return this.data.angularDamping},set:function(a){this.data.angularDamping=a}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"angularForce",{get:function(){return this.data.angularForce},set:function(a){this.data.angularForce=a}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"angularVelocity",{get:function(){return this.data.angularVelocity},set:function(a){this.data.angularVelocity=a}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"damping",{get:function(){return this.data.damping},set:function(a){this.data.damping=a}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"fixedRotation",{get:function(){return this.data.fixedRotation},set:function(a){a!==this.data.fixedRotation&&(this.data.fixedRotation=a)}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"inertia",{get:function(){return this.data.inertia},set:function(a){this.data.inertia=a}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"mass",{get:function(){return this.data.mass},set:function(a){a!==this.data.mass&&(this.data.mass=a,this.data.updateMassProperties())}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"motionState",{get:function(){return this.data.motionState},set:function(a){a!==this.data.motionState&&(this.data.motionState=a)}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"rotation",{get:function(){return this.data.angle},set:function(a){this.data.angle=a}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"sleepSpeedLimit",{get:function(){return this.data.sleepSpeedLimit},set:function(a){this.data.sleepSpeedLimit=a}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"x",{get:function(){return this.world.mpxi(this.data.position[0])},set:function(a){this.data.position[0]=this.world.pxmi(a)}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"y",{get:function(){return this.world.mpxi(this.data.position[1])},set:function(a){this.data.position[1]=this.world.pxmi(a)}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"id",{get:function(){return this.data.id}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"debug",{get:function(){return null!==this.debugBody},set:function(a){a&&!this.debugBody?this.debugBody=new Phaser.Physics.P2.BodyDebug(this.game,this.data):!a&&this.debugBody&&(this.debugBody.destroy(),this.debugBody=null)}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"collideWorldBounds",{get:function(){return this._collideWorldBounds},set:function(a){a&&!this._collideWorldBounds?(this._collideWorldBounds=!0,this.updateCollisionMask()):!a&&this._collideWorldBounds&&(this._collideWorldBounds=!1,this.updateCollisionMask())}}),Phaser.Physics.P2.BodyDebug=function(a,b,c){Phaser.Group.call(this,a);var d={pixelsPerLengthUnit:20,debugPolygons:!1,lineWidth:1,alpha:.5};this.settings=Phaser.Utils.extend(d,c),this.ppu=this.settings.pixelsPerLengthUnit,this.ppu=-1*this.ppu,this.body=b,this.canvas=new Phaser.Graphics(a),this.canvas.alpha=this.settings.alpha,this.add(this.canvas),this.draw()},Phaser.Physics.P2.BodyDebug.prototype=Object.create(Phaser.Group.prototype),Phaser.Physics.P2.BodyDebug.prototype.constructor=Phaser.Physics.P2.BodyDebug,Phaser.Utils.extend(Phaser.Physics.P2.BodyDebug.prototype,{update:function(){this.updateSpriteTransform()},updateSpriteTransform:function(){return this.position.x=this.body.position[0]*this.ppu,this.position.y=this.body.position[1]*this.ppu,this.rotation=this.body.angle},draw:function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;if(h=this.body,j=this.canvas,j.clear(),c=parseInt(this.randomPastelHex(),16),f=16711680,g=this.lineWidth,h instanceof p2.Body&&h.shapes.length){var p=h.shapes.length;for(d=0;d!==p;){if(b=h.shapes[d],i=h.shapeOffsets[d],a=h.shapeAngles[d],i=i||0,a=a||0,b instanceof p2.Circle)this.drawCircle(j,i[0]*this.ppu,i[1]*this.ppu,a,b.radius*this.ppu,c,g);else if(b instanceof p2.Convex){for(l=[],m=p2.vec2.create(),e=n=0,o=b.vertices.length;o>=0?o>n:n>o;e=o>=0?++n:--n)k=b.vertices[e],p2.vec2.rotate(m,k,a),l.push([(m[0]+i[0])*this.ppu,-(m[1]+i[1])*this.ppu]);
this.drawConvex(j,l,b.triangles,f,c,g,this.settings.debugPolygons,[i[0]*this.ppu,-i[1]*this.ppu])}else b instanceof p2.Plane?this.drawPlane(j,i[0]*this.ppu,-i[1]*this.ppu,c,f,5*g,10*g,10*g,100*this.ppu,a):b instanceof p2.Line?this.drawLine(j,b.length*this.ppu,f,g):b instanceof p2.Rectangle&&this.drawRectangle(j,i[0]*this.ppu,-i[1]*this.ppu,a,b.width*this.ppu,b.height*this.ppu,f,c,g);d++}}},drawRectangle:function(a,b,c,d,e,f,g,h,i){"undefined"==typeof i&&(i=1),"undefined"==typeof g&&(g=0),a.lineStyle(i,g,1),a.beginFill(h),a.drawRect(b-e/2,c-f/2,e,f)},drawCircle:function(a,b,c,d,e,f,g){"undefined"==typeof g&&(g=1),"undefined"==typeof f&&(f=16777215),a.lineStyle(g,0,1),a.beginFill(f,1),a.drawCircle(b,c,-e),a.endFill(),a.moveTo(b,c),a.lineTo(b+e*Math.cos(-d),c+e*Math.sin(-d))},drawLine:function(a,b,c,d){"undefined"==typeof d&&(d=1),"undefined"==typeof c&&(c=0),a.lineStyle(5*d,c,1),a.moveTo(-b/2,0),a.lineTo(b/2,0)},drawConvex:function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s;if("undefined"==typeof f&&(f=1),"undefined"==typeof d&&(d=0),g){for(i=[16711680,65280,255],j=0;j!==b.length+1;)l=b[j%b.length],m=b[(j+1)%b.length],o=l[0],r=l[1],p=m[0],s=m[1],a.lineStyle(f,i[j%i.length],1),a.moveTo(o,-r),a.lineTo(p,-s),a.drawCircle(o,-r,2*f),j++;return a.lineStyle(f,0,1),a.drawCircle(h[0],h[1],2*f)}for(a.lineStyle(f,d,1),a.beginFill(e),j=0;j!==b.length;)k=b[j],n=k[0],q=k[1],0===j?a.moveTo(n,-q):a.lineTo(n,-q),j++;return a.endFill(),b.length>2?(a.moveTo(b[b.length-1][0],-b[b.length-1][1]),a.lineTo(b[0][0],-b[0][1])):void 0},drawPath:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r;for("undefined"==typeof e&&(e=1),"undefined"==typeof c&&(c=0),a.lineStyle(e,c,1),"number"==typeof d&&a.beginFill(d),h=null,i=null,g=0;g<b.length;)p=b[g],q=p[0],r=p[1],(q!==h||r!==i)&&(0===g?a.moveTo(q,r):(j=h,k=i,l=q,m=r,n=b[(g+1)%b.length][0],o=b[(g+1)%b.length][1],f=(l-j)*(o-k)-(n-j)*(m-k),0!==f&&a.lineTo(q,r)),h=q,i=r),g++;"number"==typeof d&&a.endFill(),b.length>2&&"number"==typeof d&&(a.moveTo(b[b.length-1][0],b[b.length-1][1]),a.lineTo(b[0][0],b[0][1]))},drawPlane:function(a,b,c,d,e,f,g,h,i,j){var k,l,m;"undefined"==typeof f&&(f=1),"undefined"==typeof d&&(d=16777215),a.lineStyle(f,e,11),a.beginFill(d),k=i,a.moveTo(b,-c),l=b+Math.cos(j)*this.game.width,m=c+Math.sin(j)*this.game.height,a.lineTo(l,-m),a.moveTo(b,-c),l=b+Math.cos(j)*-this.game.width,m=c+Math.sin(j)*-this.game.height,a.lineTo(l,-m)},randomPastelHex:function(){var a,b,c,d;return c=[255,255,255],d=Math.floor(256*Math.random()),b=Math.floor(256*Math.random()),a=Math.floor(256*Math.random()),d=Math.floor((d+3*c[0])/4),b=Math.floor((b+3*c[1])/4),a=Math.floor((a+3*c[2])/4),this.rgbToHex(d,b,a)},rgbToHex:function(a,b,c){return this.componentToHex(a)+this.componentToHex(b)+this.componentToHex(c)},componentToHex:function(a){var b;return b=a.toString(16),2===b.len?b:b+"0"}}),Phaser.Physics.P2.Spring=function(a,b,c,d,e,f,g,h,i,j){this.game=a.game,this.world=a,"undefined"==typeof d&&(d=1),"undefined"==typeof e&&(e=100),"undefined"==typeof f&&(f=1),d=a.pxm(d);var k={restLength:d,stiffness:e,damping:f};"undefined"!=typeof g&&null!==g&&(k.worldAnchorA=[a.pxm(g[0]),a.pxm(g[1])]),"undefined"!=typeof h&&null!==h&&(k.worldAnchorB=[a.pxm(h[0]),a.pxm(h[1])]),"undefined"!=typeof i&&null!==i&&(k.localAnchorA=[a.pxm(i[0]),a.pxm(i[1])]),"undefined"!=typeof j&&null!==j&&(k.localAnchorB=[a.pxm(j[0]),a.pxm(j[1])]),p2.Spring.call(this,b,c,k)},Phaser.Physics.P2.Spring.prototype=Object.create(p2.Spring.prototype),Phaser.Physics.P2.Spring.prototype.constructor=Phaser.Physics.P2.Spring,Phaser.Physics.P2.Material=function(a){this.name=a,p2.Material.call(this)},Phaser.Physics.P2.Material.prototype=Object.create(p2.Material.prototype),Phaser.Physics.P2.Material.prototype.constructor=Phaser.Physics.P2.Material,Phaser.Physics.P2.ContactMaterial=function(a,b,c){p2.ContactMaterial.call(this,a,b,c)},Phaser.Physics.P2.ContactMaterial.prototype=Object.create(p2.ContactMaterial.prototype),Phaser.Physics.P2.ContactMaterial.prototype.constructor=Phaser.Physics.P2.ContactMaterial,Phaser.Physics.P2.CollisionGroup=function(a){this.mask=a},Phaser.Physics.P2.DistanceConstraint=function(a,b,c,d,e){"undefined"==typeof d&&(d=100),this.game=a.game,this.world=a,d=a.pxm(d),p2.DistanceConstraint.call(this,b,c,d,{maxForce:e})},Phaser.Physics.P2.DistanceConstraint.prototype=Object.create(p2.DistanceConstraint.prototype),Phaser.Physics.P2.DistanceConstraint.prototype.constructor=Phaser.Physics.P2.DistanceConstraint,Phaser.Physics.P2.GearConstraint=function(a,b,c,d,e){"undefined"==typeof d&&(d=0),"undefined"==typeof e&&(e=1),this.game=a.game,this.world=a;var f={angle:d,ratio:e};p2.GearConstraint.call(this,b,c,f)},Phaser.Physics.P2.GearConstraint.prototype=Object.create(p2.GearConstraint.prototype),Phaser.Physics.P2.GearConstraint.prototype.constructor=Phaser.Physics.P2.GearConstraint,Phaser.Physics.P2.LockConstraint=function(a,b,c,d,e,f){"undefined"==typeof d&&(d=[0,0]),"undefined"==typeof e&&(e=0),"undefined"==typeof f&&(f=Number.MAX_VALUE),this.game=a.game,this.world=a,d=[a.pxm(d[0]),a.pxm(d[1])];var g={localOffsetB:d,localAngleB:e,maxForce:f};p2.LockConstraint.call(this,b,c,g)},Phaser.Physics.P2.LockConstraint.prototype=Object.create(p2.LockConstraint.prototype),Phaser.Physics.P2.LockConstraint.prototype.constructor=Phaser.Physics.P2.LockConstraint,Phaser.Physics.P2.PrismaticConstraint=function(a,b,c,d,e,f,g,h){"undefined"==typeof d&&(d=!0),"undefined"==typeof e&&(e=[0,0]),"undefined"==typeof f&&(f=[0,0]),"undefined"==typeof g&&(g=[0,0]),"undefined"==typeof h&&(h=Number.MAX_VALUE),this.game=a.game,this.world=a,e=[a.pxmi(e[0]),a.pxmi(e[1])],f=[a.pxmi(f[0]),a.pxmi(f[1])];var i={localAnchorA:e,localAnchorB:f,localAxisA:g,maxForce:h,disableRotationalLock:!d};p2.PrismaticConstraint.call(this,b,c,i)},Phaser.Physics.P2.PrismaticConstraint.prototype=Object.create(p2.PrismaticConstraint.prototype),Phaser.Physics.P2.PrismaticConstraint.prototype.constructor=Phaser.Physics.P2.PrismaticConstraint,Phaser.Physics.P2.RevoluteConstraint=function(a,b,c,d,e,f){"undefined"==typeof f&&(f=Number.MAX_VALUE),this.game=a.game,this.world=a,c=[a.pxmi(c[0]),a.pxmi(c[1])],e=[a.pxmi(e[0]),a.pxmi(e[1])],p2.RevoluteConstraint.call(this,b,c,d,e,{maxForce:f})},Phaser.Physics.P2.RevoluteConstraint.prototype=Object.create(p2.RevoluteConstraint.prototype),Phaser.Physics.P2.RevoluteConstraint.prototype.constructor=Phaser.Physics.P2.RevoluteConstraint;
//# sourceMappingURL=phaser.map

return Phaser;
	
});
 


/*!
 * jQuery JavaScript Library v2.0.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:30Z
 */
(function( window, undefined ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//
var
	// A central reference to the root jQuery(document)
	rootjQuery,

	// The deferred used on DOM ready
	readyList,

	// Support: IE9
	// For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
	core_strundefined = typeof undefined,

	// Use the correct document accordingly with window argument (sandbox)
	location = window.location,
	document = window.document,
	docElem = document.documentElement,

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// [[Class]] -> type pairs
	class2type = {},

	// List of deleted data cache ids, so we can reuse them
	core_deletedIds = [],

	core_version = "2.0.3",

	// Save a reference to some core methods
	core_concat = core_deletedIds.concat,
	core_push = core_deletedIds.push,
	core_slice = core_deletedIds.slice,
	core_indexOf = core_deletedIds.indexOf,
	core_toString = class2type.toString,
	core_hasOwn = class2type.hasOwnProperty,
	core_trim = core_version.trim,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},

	// Used for matching numbers
	core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

	// Used for splitting on whitespace
	core_rnotwhite = /\S+/g,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	},

	// The ready event handler and self cleanup method
	completed = function() {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );
		jQuery.ready();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	},

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return core_slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			( num < 0 ? this[ this.length + num ] : this[ num ] );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	ready: function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	},

	slice: function() {
		return this.pushStack( core_slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: core_push,
	sort: [].sort,
	splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),

	noConflict: function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.trigger ) {
			jQuery( document ).trigger("ready").off("ready");
		}
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		return !isNaN( parseFloat(obj) ) && isFinite( obj );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return String( obj );
		}
		// Support: Safari <= 5.1 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ core_toString.call(obj) ] || "object" :
			typeof obj;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		// Support: Firefox <20
		// The try/catch suppresses exceptions thrown when attempting to access
		// the "constructor" property of certain host objects, ie. |window.location|
		// https://bugzilla.mozilla.org/show_bug.cgi?id=814622
		try {
			if ( obj.constructor &&
					!core_hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
		} catch ( e ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	error: function( msg ) {
		throw new Error( msg );
	},

	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	parseHTML: function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts );

		if ( scripts ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	},

	parseJSON: JSON.parse,

	// Cross-browser xml parsing
	parseXML: function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			tmp = new DOMParser();
			xml = tmp.parseFromString( data , "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	},

	noop: function() {},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
				indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	trim: function( text ) {
		return text == null ? "" : core_trim.call( text );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				core_push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : core_indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var l = second.length,
			i = first.length,
			j = 0;

		if ( typeof l === "number" ) {
			for ( ; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}
		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, inv ) {
		var retVal,
			ret = [],
			i = 0,
			length = elems.length;
		inv = !!inv;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			retVal = !!callback( elems[ i ], i );
			if ( inv !== retVal ) {
				ret.push( elems[ i ] );
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}
		}

		// Flatten any nested arrays
		return core_concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = core_slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < length; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[0], key ) : emptyGet;
	},

	now: Date.now,

	// A method for quickly swapping in/out CSS properties to get correct calculations.
	// Note: this method belongs to the css module but it's needed here for the support module.
	// If support gets modularized, this method should be moved back to the css module.
	swap: function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	}
});

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || type !== "function" &&
		( length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj );
}

// All jQuery objects should point back to these
rootjQuery = jQuery(document);
/*!
 * Sizzle CSS Selector Engine v1.9.4-pre
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-06-03
 */
(function( window, undefined ) {

var i,
	support,
	cachedruns,
	Expr,
	getText,
	isXML,
	compile,
	outermostContext,
	sortInput,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + -(new Date()),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	hasDuplicate = false,
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}
		return 0;
	},

	// General-purpose constants
	strundefined = typeof undefined,
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf if we can't use a native one
	indexOf = arr.indexOf || function( elem ) {
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) {
			if ( this[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
		"*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

	// Prefer arguments quoted,
	//   then not containing pseudos/brackets,
	//   then attribute selectors/non-parenthetical expressions,
	//   then anything else
	// These preferences are here to reduce the number of selectors
	//   needing tokenize in the PSEUDO preFilter
	pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rsibling = new RegExp( whitespace + "*[+~]" ),
	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			// BMP codepoint
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
		return [];
	}

	if ( documentIsHTML && !seed ) {

		// Shortcuts
		if ( (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType === 9 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && context.parentNode || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key += " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Detect xml
 * @param {Element|Object} elem An element or a document
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var doc = node ? node.ownerDocument || node : preferredDoc,
		parent = doc.defaultView;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;

	// Support tests
	documentIsHTML = !isXML( doc );

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent.attachEvent && parent !== parent.top ) {
		parent.attachEvent( "onbeforeunload", function() {
			setDocument();
		});
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Check if getElementsByClassName can be trusted
	support.getElementsByClassName = assert(function( div ) {
		div.innerHTML = "<div class='a'></div><div class='a i'></div>";

		// Support: Safari<4
		// Catch class over-caching
		div.firstChild.className = "i";
		// Support: Opera<10
		// Catch gEBCN failure to find non-leading classes
		return div.getElementsByClassName("i").length === 2;
	});

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [m] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== strundefined ) {
				return context.getElementsByTagName( tag );
			}
		} :
		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select><option selected=''></option></select>";

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}
		});

		assert(function( div ) {

			// Support: Opera 10-12/IE8
			// ^= $= *= and empty values
			// Should not select anything
			// Support: Windows 8 Native Apps
			// The type attribute is restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "t", "" );

			if ( div.querySelectorAll("[t^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = rnative.test( docElem.contains ) || docElem.compareDocumentPosition ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = docElem.compareDocumentPosition ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition( b );

		if ( compare ) {
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === doc || contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		}

		// Not directly comparable, sort on existence of method
		return a.compareDocumentPosition ? -1 : 1;
	} :
	function( a, b ) {
		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// Parentless nodes are either documents or disconnected
		} else if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch(e) {}
	}

	return Sizzle( expr, document, null, [elem] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val === undefined ?
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null :
		val;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		for ( ; (node = elem[i]); i++ ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (see #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[5] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] && match[4] !== undefined ) {
				match[2] = match[4];

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
			//   not comment, processing instructions, or others
			// Thanks to Diego Perini for the nodeName shortcut
			//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
			// use getAttribute instead to test this case
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( tokens = [] );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var data, cache, outerCache,
				dirkey = dirruns + " " + doneName;

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (cache = outerCache[ dir ]) && cache[0] === dirkey ) {
							if ( (data = cache[1]) === true || data === cachedruns ) {
								return data === true;
							}
						} else {
							cache = outerCache[ dir ] = [ dirkey ];
							cache[1] = matcher( elem, context, xml ) || cachedruns;
							if ( cache[1] === true ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	// A counter to specify which element is currently being matched
	var matcherCachedRuns = 0,
		bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, expandContext ) {
			var elem, j, matcher,
				setMatched = [],
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				outermost = expandContext != null,
				contextBackup = outermostContext,
				// We must always have either seed elements or context
				elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);

			if ( outermost ) {
				outermostContext = context !== document && context;
				cachedruns = matcherCachedRuns;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
						cachedruns = ++matcherCachedRuns;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !group ) {
			group = tokenize( selector );
		}
		i = group.length;
		while ( i-- ) {
			cached = matcherFromTokens( group[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	}
	return cached;
};

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		match = tokenize( selector );

	if ( !seed ) {
		// Try to minimize operations if there is only one group
		if ( match.length === 1 ) {

			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
				}
				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && context.parentNode || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}
	}

	// Compile and execute a filtering function
	// Provide `match` to avoid retokenization if we modified the selector above
	compile( selector, match )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector )
	);
	return results;
}

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return (val = elem.getAttributeNode( name )) && val.specified ?
				val.value :
				elem[ name ] === true ? name.toLowerCase() : null;
		}
	});
}

jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})( window );
// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( core_rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};
jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var action = tuple[ 0 ],
								fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ action + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = core_slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
					if( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});
jQuery.support = (function( support ) {
	var input = document.createElement("input"),
		fragment = document.createDocumentFragment(),
		div = document.createElement("div"),
		select = document.createElement("select"),
		opt = select.appendChild( document.createElement("option") );

	// Finish early in limited environments
	if ( !input.type ) {
		return support;
	}

	input.type = "checkbox";

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// Check the default checkbox/radio value ("" on old WebKit; "on" elsewhere)
	support.checkOn = input.value !== "";

	// Must access the parent to make an option select properly
	// Support: IE9, IE10
	support.optSelected = opt.selected;

	// Will be defined later
	support.reliableMarginRight = true;
	support.boxSizingReliable = true;
	support.pixelPosition = false;

	// Make sure checked status is properly cloned
	// Support: IE9, IE10
	input.checked = true;
	support.noCloneChecked = input.cloneNode( true ).checked;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Check if an input maintains its value after becoming a radio
	// Support: IE9, IE10
	input = document.createElement("input");
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";

	// #11217 - WebKit loses check when the name is after the checked attribute
	input.setAttribute( "checked", "t" );
	input.setAttribute( "name", "t" );

	fragment.appendChild( input );

	// Support: Safari 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: Firefox, Chrome, Safari
	// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
	support.focusinBubbles = "onfocusin" in window;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	// Run tests that need a body at doc ready
	jQuery(function() {
		var container, marginDiv,
			// Support: Firefox, Android 2.3 (Prefixed box-sizing versions).
			divReset = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
			body = document.getElementsByTagName("body")[ 0 ];

		if ( !body ) {
			// Return for frameset docs that don't have a body
			return;
		}

		container = document.createElement("div");
		container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

		// Check box-sizing and margin behavior.
		body.appendChild( container ).appendChild( div );
		div.innerHTML = "";
		// Support: Firefox, Android 2.3 (Prefixed box-sizing versions).
		div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%";

		// Workaround failing boxSizing test due to offsetWidth returning wrong value
		// with some non-1 values of body zoom, ticket #13543
		jQuery.swap( body, body.style.zoom != null ? { zoom: 1 } : {}, function() {
			support.boxSizing = div.offsetWidth === 4;
		});

		// Use window.getComputedStyle because jsdom on node.js will break without it.
		if ( window.getComputedStyle ) {
			support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
			support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

			// Support: Android 2.3
			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			marginDiv = div.appendChild( document.createElement("div") );
			marginDiv.style.cssText = div.style.cssText = divReset;
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";

			support.reliableMarginRight =
				!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
		}

		body.removeChild( container );
	});

	return support;
})( {} );

/*
	Implementation Summary

	1. Enforce API surface and semantic compatibility with 1.9.x branch
	2. Improve the module's maintainability by reducing the storage
		paths to a single mechanism.
	3. Use the same single mechanism to support "private" and "user" data.
	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	5. Avoid exposing implementation details on user objects (eg. expando properties)
	6. Provide a clear path for implementation upgrade to WeakMap in 2014
*/
var data_user, data_priv,
	rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	rmultiDash = /([A-Z])/g;

function Data() {
	// Support: Android < 4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Math.random();
}

Data.uid = 1;

Data.accepts = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType ?
		owner.nodeType === 1 || owner.nodeType === 9 : true;
};

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android < 4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( core_rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};

// These may be used throughout the jQuery core codebase
data_user = new Data();
data_priv = new Data();


jQuery.extend({
	acceptData: Data.accepts,

	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var attrs, name,
			elem = this[ 0 ],
			i = 0,
			data = null;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					attrs = elem.attributes;
					for ( ; i < attrs.length; i++ ) {
						name = attrs[ i ].name;

						if ( name.indexOf( "data-" ) === 0 ) {
							name = jQuery.camelCase( name.slice(5) );
							dataAttr( elem, name, data[ name ] );
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return jQuery.access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? JSON.parse( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}
jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay: function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var nodeHook, boolHook,
	rclass = /[\t\r\n\f]/g,
	rreturn = /\r/g,
	rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	attr: function( name, value ) {
		return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	},

	prop: function( name, value ) {
		return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	},

	addClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}
					elem.className = jQuery.trim( cur );

				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = arguments.length === 0 || typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}
					elem.className = value ? jQuery.trim( cur ) : "";
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( core_rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === core_strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	},

	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map(val, function ( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				// attributes.value is undefined in Blackberry 4.7 but
				// uses .value. See #6932
				var val = elem.attributes.value;
				return !val || val.specified ? elem.value : elem.text;
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( jQuery(option).val(), values ) >= 0) ) {
						optionSet = true;
					}
				}

				// force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	},

	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === core_strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( core_rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = jQuery.expr.attrHandle[ name ] || jQuery.find.attr;

	jQuery.expr.attrHandle[ name ] = function( elem, name, isXML ) {
		var fn = jQuery.expr.attrHandle[ name ],
			ret = isXML ?
				undefined :
				/* jshint eqeqeq: false */
				// Temporarily disable this handler to check existence
				(jQuery.expr.attrHandle[ name ] = undefined) !=
					getter( elem, name, isXML ) ?

					name.toLowerCase() :
					null;

		// Restore handler
		jQuery.expr.attrHandle[ name ] = fn;

		return ret;
	};
});

// Support: IE9+
// Selectedness for an option in an optgroup can be inaccurate
if ( !jQuery.support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !jQuery.support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			// Support: Webkit
			// "" is returned instead of "on" if a value isn't specified
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});
var rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = core_hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = core_hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
				event.preventDefault();
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = core_slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome < 28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = ( src.defaultPrevented ||
			src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Create "bubbling" focus and blur events
// Support: Firefox, Chrome, Safari
if ( !jQuery.support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler while someone wants focusin/focusout
		var attaches = 0,
			handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				if ( attaches++ === 0 ) {
					document.addEventListener( orig, handler, true );
				}
			},
			teardown: function() {
				if ( --attaches === 0 ) {
					document.removeEventListener( orig, handler, true );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});
var isSimple = /^.[^:#\[\.,]*$/,
	rparentsprev = /^(?:parents|prev(?:Until|All))/,
	rneedsContext = jQuery.expr.match.needsContext,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},

	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},

	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},

	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = ( rneedsContext.test( selectors ) || typeof selectors !== "string" ) ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					cur = matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return core_indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return core_indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		var set = typeof selector === "string" ?
				jQuery( selector, context ) :
				jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
			all = jQuery.merge( this.get(), set );

		return this.pushStack( jQuery.unique(all) );
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}

	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});

jQuery.extend({
	filter: function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	},

	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( isSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( core_indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}
var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE 9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE 9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

jQuery.fn.extend({
	text: function( value ) {
		return jQuery.access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append( ( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value ) );
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	// keepData is for internal use only--do not document
	remove: function( selector, keepData ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function () {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return jQuery.access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var
			// Snapshot the DOM in case .domManip sweeps something relevant into its fragment
			args = jQuery.map( this, function( elem ) {
				return [ elem.nextSibling, elem.parentNode ];
			}),
			i = 0;

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			var next = args[ i++ ],
				parent = args[ i++ ];

			if ( parent ) {
				// Don't use the snapshot next if it has moved (#13810)
				if ( next && next.parentNode !== parent ) {
					next = this.nextSibling;
				}
				jQuery( this ).remove();
				parent.insertBefore( elem, next );
			}
		// Allow new content to include elements from the context set
		}, true );

		// Force removal if there was no new content (e.g., from empty arguments)
		return i ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback, allowIntersection ) {

		// Flatten any nested arrays
		args = core_concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction || !( l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback, allowIntersection );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, !allowIntersection && this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because core_push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Hope ajax is available...
								jQuery._evalUrl( node.src );
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because core_push.apply(_, arraylike) throws
			core_push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Support: IE >= 9
		// Fix Cloning issues
		if ( !jQuery.support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			i = 0,
			l = elems.length,
			fragment = context.createDocumentFragment(),
			nodes = [];

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit
					// jQuery.merge because core_push.apply(_, arraylike) throws
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || ["", ""] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit
					// jQuery.merge because core_push.apply(_, arraylike) throws
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Fixes #12346
					// Support: Webkit, IE
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, events, type, key, j,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( Data.accepts( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					events = Object.keys( data.events || {} );
					if ( events.length ) {
						for ( j = 0; (type = events[j]) !== undefined; j++ ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	},

	_evalUrl: function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	}
});

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType === 1 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var l = elems.length,
		i = 0;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}


function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Support: IE >= 9
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && manipulation_rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}
jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});
var curCSS, iframe,
	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rmargin = /^margin/,
	rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
	rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + core_pnum + ")", "i" ),
	elemdisplay = { BODY: "block" },

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: 0,
		fontWeight: 400
	},

	cssExpand = [ "Top", "Right", "Bottom", "Left" ],
	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt(0).toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function isHidden( elem, el ) {
	// isHidden might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem = el || elem;
	return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
}

// NOTE: we've included the "window" in window.getComputedStyle
// because jsdom on node.js will break without it.
function getStyles( elem ) {
	return window.getComputedStyle( elem, null );
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
			}
		} else {

			if ( !values[ index ] ) {
				hidden = isHidden( elem );

				if ( display && display !== "none" || !hidden ) {
					data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css(elem, "display") );
				}
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.fn.extend({
	css: function( name, value ) {
		return jQuery.access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that NaN and null values aren't set. See: #7116
			if ( value == null || type === "number" && isNaN( value ) ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Fixes #8908, it can be done more correctly by specifying setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

curCSS = function( elem, name, _computed ) {
	var width, minWidth, maxWidth,
		computed = _computed || getStyles( elem ),

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined,
		style = elem.style;

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: Safari 5.1
		// A tribute to the "awesome hack by Dean Edwards"
		// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret;
};


function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

// Try to determine the default display value of an element
function css_defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {
			// Use the already-created iframe if possible
			iframe = ( iframe ||
				jQuery("<iframe frameborder='0' width='0' height='0'/>")
				.css( "cssText", "display:block !important" )
			).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[0].contentWindow || iframe[0].contentDocument ).document;
			doc.write("<!doctype html><html><body>");
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}

// Called ONLY from within css_defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
		display = jQuery.css( elem[0], "display" );
	elem.remove();
	return display;
}

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return elem.offsetWidth === 0 && rdisplayswap.test( jQuery.css( elem, "display" ) ) ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// These hooks cannot be added until DOM ready because the support test
// for it is not run until after DOM ready
jQuery(function() {
	// Support: Android 2.3
	if ( !jQuery.support.reliableMarginRight ) {
		jQuery.cssHooks.marginRight = {
			get: function( elem, computed ) {
				if ( computed ) {
					// Support: Android 2.3
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// Work around by temporarily setting element display to inline-block
					return jQuery.swap( elem, { "display": "inline-block" },
						curCSS, [ elem, "marginRight" ] );
				}
			}
		};
	}

	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
		jQuery.each( [ "top", "left" ], function( i, prop ) {
			jQuery.cssHooks[ prop ] = {
				get: function( elem, computed ) {
					if ( computed ) {
						computed = curCSS( elem, prop );
						// if curCSS returns percentage, fallback to offset
						return rnumnonpx.test( computed ) ?
							jQuery( elem ).position()[ prop ] + "px" :
							computed;
					}
				}
			};
		});
	}

});

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
}

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});
var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function(){
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function(){
			var type = this.type;
			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !manipulation_rcheckableType.test( type ) );
		})
		.map(function( i, elem ){
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ){
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});

//Serialize an array of form elements or a set of
//key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}
jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});
var
	// Document location
	ajaxLocParts,
	ajaxLocation,

	ajax_nonce = jQuery.now(),

	ajax_rquery = /\?/,
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

	// Keep a copy of the old load method
	_load = jQuery.fn.load,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( core_rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = url.slice( off );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ){
	jQuery.fn[ type ] = function( fn ){
		return this.on( type, fn );
	};
});

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( core_rnotwhite ) || [""];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + ajax_nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ajax_nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}
// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});
var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( ajax_nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( ajax_rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});
jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrSupported = jQuery.ajaxSettings.xhr(),
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	// Support: IE9
	// We need to keep track of outbound xhr and abort them manually
	// because IE is not smart enough to do it all by itself
	xhrId = 0,
	xhrCallbacks = {};

if ( window.ActiveXObject ) {
	jQuery( window ).on( "unload", function() {
		for( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
		xhrCallbacks = undefined;
	});
}

jQuery.support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
jQuery.support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;
	// Cross domain only allowed if supported through XMLHttpRequest
	if ( jQuery.support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i, id,
					xhr = options.xhr();
				xhr.open( options.type, options.url, options.async, options.username, options.password );
				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}
				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}
				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}
				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}
				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;
							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file protocol always yields status 0, assume 404
									xhr.status || 404,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// #11426: When requesting binary data, IE9 will throw an exception
									// on any attempt to access responseText
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};
				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");
				// Create the abort callback
				callback = xhrCallbacks[( id = xhrId++ )] = callback("abort");
				// Do send the request
				// This may raise an exception which is actually
				// handled in jQuery.ajax (so no try/catch here)
				xhr.send( options.hasContent && options.data || null );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});
var fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*
					// Use a string for doubling factor so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur()
				// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		}]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// we're done with this property
			return tween;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		if ( jQuery.css( elem, "display" ) === "inline" &&
				jQuery.css( elem, "float" ) === "none" ) {

			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}


	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}
	}
}

function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth? 1 : 0;
	for( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p*Math.PI ) / 2;
	}
};

jQuery.timers = [];
jQuery.fx = Tween.prototype.init;
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	if ( timer() && jQuery.timers.push( timer ) ) {
		jQuery.fx.start();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};

// Back Compat <1.8 extension point
jQuery.fx.step = {};

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
}
jQuery.fn.offset = function( options ) {
	if ( arguments.length ) {
		return options === undefined ?
			this :
			this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
	}

	var docElem, win,
		elem = this[ 0 ],
		box = { top: 0, left: 0 },
		doc = elem && elem.ownerDocument;

	if ( !doc ) {
		return;
	}

	docElem = doc.documentElement;

	// Make sure it's not a disconnected DOM node
	if ( !jQuery.contains( docElem, elem ) ) {
		return box;
	}

	// If we don't have gBCR, just use 0,0 rather than error
	// BlackBerry 5, iOS 3 (original iPhone)
	if ( typeof elem.getBoundingClientRect !== core_strundefined ) {
		box = elem.getBoundingClientRect();
	}
	win = getWindow( doc );
	return {
		top: box.top + win.pageYOffset - docElem.clientTop,
		left: box.left + win.pageXOffset - docElem.clientLeft
	};
};

jQuery.offset = {

	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) && ( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};


jQuery.fn.extend({

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// We assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position") === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return jQuery.access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return jQuery.access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});
// Limit scope pollution from any deprecated API
// (function() {

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;

// })();
if ( typeof module === "object" && module && typeof module.exports === "object" ) {
	// Expose jQuery as module.exports in loaders that implement the Node
	// module pattern (including browserify). Do not create the global, since
	// the user will be storing it themselves locally, and globals are frowned
	// upon in the Node module world.
	module.exports = jQuery;
} else {
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	if ( typeof define === "function" && define.amd ) {
		define( "jquery", [], function () { return jQuery; } );
	}
}

// If there is a window object, that at least has a document property,
// define jQuery and $ identifiers
if ( typeof window === "object" && typeof window.document === "object" ) {
	window.jQuery = window.$ = jQuery;
}

})( window );

/********************/

/*  app consts  */


define('app/consts/appconsts',[], function() {
	
	
	
   	var AppConsts = function (){
			
    };
	
	AppConsts.GAME_SCENE = "gameScene";
	AppConsts.TUTORIAL_SCENE = "tutorialScene";
	AppConsts.COMM_SCENE = "commScene";
	AppConsts.MAIN_SCENE = "mainScene";
	AppConsts.LEVELS_SCENE = "levelsScene";
	
	return AppConsts;
});








define('app/game',[],

function(){
	
	
	
	var Game = function(){
		
	};
	
	Game.GRAVITY = 1000;
	
	Game.init = function(config){
		Game.config = config;
		Game.pauseSignal = new Phaser.Signal();
		Game.getInstance();
	};
	
	Game.getPhysics = function(){
		return Game.getInstance().physics.arcade;
	};
	
	Game.getInput = function(){
		return Game.getInstance().input;
	};
	
	Game.unPausePhysics = function(){
		if(Game.physicsPaused){
			Game.physicsPaused = false;
			Game.pauseSignal.dispatch();
		}
	};
	
	Game.pausePhysics = function(){
		if(!Game.physicsPaused){
			Game.physicsPaused = true;
			Game.pauseSignal.dispatch();
		}
	};
	
	Game.startPhysics = function(){
		if(!Game.physicsStarted){
			Game.physicsPaused = false;
			Game.getInstance().physics.startSystem(Phaser.Physics.ARCADE);
			Game.getPhysics().gravity.y = Game.GRAVITY;
		}
		else{
			Game.unpausePhysics();
		}
	};
	
	Game.getWidth = function(){
		var pRatio, w;
		pRatio = window.devicePixelRatio;
		w = Math.min(1024, document.body.offsetWidth);
		return pRatio * w;
	};
	
	Game.getHeight = function(){
		var pRatio, h;
		pRatio = window.devicePixelRatio;
		h = Math.min(768, document.body.offsetHeight);
		return pRatio * h;
	};
	
	Game.gonePortrait = function(){
		alert("portrait");
	};
	
	Game.w = function(){
		return Game.getInstance().camera.width;
	};
	
	Game.h = function(){
		return Game.getInstance().camera.height;
	};
	
	Game.cx = function(){
		return Game.getInstance().camera.width/2;
	};
	
	Game.cy = function(){
		return Game.getInstance().camera.height/2;
	};
	
	Game.setupScale = function(){
		Game.scaleManager = new Phaser.ScaleManager(Game.instance, 1024, 768);
		Game.scaleManager.forceLandscape = true;
		Game.scaleManager.scaleMode = Phaser.StageScaleMode.EXACT_FIT;
		Game.scaleManager.pageAlignHorizontally = true;
		Game.scaleManager.pageAlignVertically = true;
		Game.scaleManager.enterPortrait.add(Game.gonePortrait);
		Game.scaleManager.forceOrientation(true, false);
	};
	
	Game.create = function(){
		var w, h;
		w = Game.getWidth();
    	h = Game.getHeight();
    	console.log("size "+window.devicePixelRatio, document.body.offsetWidth, document.body.offsetHeight);
		Game.instance = new Phaser.Game(w, h, Phaser.AUTO, 'game', Game.config);
		Game.setupScale();
	};
	
	Game.getInstance = function(){
		if(!Game.instance){
			Game.create();
		}
		return Game.instance;
	};
	
	return Game;
	
});



define('app/utils/textfactory',['app/game'], function(Game){
	
	
	
	var TextFactory  = function(){
		
	};
	
	TextFactory.DEFAULT_FONT = {font: "100px Yanone", align: "center"};
	
	TextFactory.centreX = function(label){
		
	};
		
	TextFactory.make = function(x, y, label){
		var text = new Phaser.Text(Game.getInstance(), x, y, label, TextFactory.DEFAULT_FONT);
	    text.stroke = '#000044';
	    text.strokeThickness = 2;
	    var fill = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
		fill.addColorStop(0, '#ffffff');   
		fill.addColorStop(1, '#eeeeee');
		text.fill = fill;
		text.setShadow(3, 3, 'rgba(1, 1, 1, 0.5)', 5);
		return text;
	};
	
	return TextFactory;

});
	
	



define('app/consts/leveldata',[], function(){
	
	
	
	var LevelData = function(){
	
	};
	
	LevelData.getIndents = function(type){
		return (LevelData.INDENTS_TYPES.indexOf(type) >= 0);
	};
	
	LevelData.getUnindents = function(type){
		return (LevelData.UNINDENTS_TYPES.indexOf(type) >= 0);
	};
	
	LevelData.TILE_TYPE_FD = 		0;
	LevelData.TILE_TYPE_BACK = 		1
	LevelData.TILE_TYPE_RPT = 		2;
	LevelData.TILE_TYPE_ENDRPT = 	3;
	LevelData.TILE_TYPE_JUMPBACK = 	4;
	LevelData.TILE_TYPE_REPEAT2 = 	5;
	LevelData.TILE_TYPE_REPEAT3 = 	6;
	LevelData.TILE_TYPE_REPEAT4 = 	7;
	LevelData.TILE_TYPE_REPEAT5 = 	8;
	LevelData.TILE_TYPE_FN1 = 		9;
	LevelData.TILE_TYPE_FN2 = 		10;
	LevelData.TILE_TYPE_FN3 = 		11;
	
	LevelData.INDENTS_TYPES = 		[2];
	LevelData.UNINDENTS_TYPES = 	[3];
	
	LevelData.BLOCK0 = "assets/images/blocks/block0.png";
	LevelData.BLOCK1 = "assets/images/blocks/block1.png";
	LevelData.BLOCK2 = "assets/images/blocks/block2.png";
	LevelData.BLOCK3 = "assets/images/blocks/block3.png";

	LevelData.BLOCK = [LevelData.BLOCK0, LevelData.BLOCK1];

	LevelData.LEVEL0 = {"tiles": [3, 4, 3, 3], "tabs":3};
	LevelData.LEVEL1 = {"tiles": [2, 2, 3, 3], "tabs":2};

	LevelData.LEVELS = [LevelData.LEVEL0, LevelData.LEVEL1];
		
	return LevelData;

});








define('app/components/background',['app/game'], function(Game){
	
	
	
	var Background = function(options){
		this.options = options;
	};

	Background.prototype.preload = function(){
	
	};

	Background.prototype.create = function(){
		var w, h;
		w = Game.getWidth();
    	h = Game.getHeight();
    	this.sprite = new Phaser.TileSprite(Game.getInstance(), 0, 0, w, h, this.options.asset);
	    this.sprite.fixedToCamera = true;
	};
	
	return Background;

});






define('app/scenes/scene',['app/game', 'app/components/background'], function(Game, Background){
	
	
	
	var Scene  = function(key){
		this.key = key;
		this.navigationSignal = new Phaser.Signal();
	};

	Scene.prototype.preload = function() {
	
	};
	
	Scene.prototype.addChildren = function() {
		this.bg = new Background({"asset":'sky'});
		this.bg.create();
		Game.getInstance().world.add(this.bg.sprite);
	};
	
	Scene.prototype.create = function() {
		this.addChildren();
	};
	
	Scene.prototype.addListeners = function() {
		//
	};
	
	Scene.prototype.update = function() {
    	//
	};

	Scene.prototype.shutdown = function() {
		console.log("shutdown scene //TODO - tidy up");
	};
	
	return Scene;

});
	
	





define('app/components/buttons/abstractbutton',['app/game'], function(Game){
	
	
	
	var AbstractButton = function(options){
		this.options = options;
		this.asset = this.options.asset;
		this.mouseDownSignal = new Phaser.Signal();
		this.mouseUpSignal = new Phaser.Signal();
	};

	AbstractButton.prototype.preload = function(){
	
	};

	AbstractButton.prototype.goToFrame = function(i){
		this.sprite.setFrames(i, i, i, i);
	};

	AbstractButton.prototype.resetFrames = function(i){
		this.sprite.setFrames(0, 1, 2, 3);
	};

	AbstractButton.prototype.callback = function(){

	};

	AbstractButton.prototype.create = function(){
		//game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
		this.sprite = new Phaser.Button(Game.getInstance(), 0, 0, this.asset, this.callback, this, 0, 1, 2, 3);
		this.sprite.events.onInputUp.add(this.mouseUp, this);
		this.sprite.events.onInputDown.add(this.mouseDown, this);
		this.sprite.inputEnabled = true;
		this.sprite.x = this.options.x;
		this.sprite.y = this.options.y;
		this.resetFrames();
	};

	AbstractButton.prototype.mouseUp = function(){
		this.mouseUpSignal.dispatch({"target":this});
	};

	AbstractButton.prototype.mouseDown = function(){
		this.mouseDownSignal.dispatch({"target":this});
	}

	AbstractButton.prototype.update = function(){
	
	};
	
	AbstractButton.prototype.destroy = function(){
		this.mouseDownSignal = null;
		this.mouseUpSignal = null;
	};

	return AbstractButton;

});



define('app/components/buttons/navbutton',['app/components/buttons/abstractbutton'], function(AbstractButton){
	
	
	
	var NavButton = function(options){
		options.asset = 'play';
		AbstractButton.call(this, options);
	};
	
	NavButton.WIDTH = 120;
	
	NavButton.prototype = Object.create(AbstractButton.prototype);
	NavButton.prototype.constructor = NavButton;

	return NavButton;
	
});



define('app/components/buttons/pausebutton',['app/components/buttons/abstractbutton'], function(AbstractButton){
	
	
	
	var PauseButton = function(options){
		options.asset = 'pause';
		AbstractButton.call(this, options);
	};
	
	PauseButton.prototype = Object.create(AbstractButton.prototype);
	PauseButton.prototype.constructor = PauseButton;
	
	PauseButton.WIDTH = 120;
	PauseButton.HEIGHT = 120;
	
	return PauseButton;
	
});


define('app/scenes/comms/commslayout',[], function() {
	
	
	
	var CommsLayout = function(){
		
	};
	
	CommsLayout.getBlockHeight = function(type){
		return 75;
	};

	CommsLayout.TOP = 60;
	CommsLayout.XPOS = 550;
	CommsLayout.INDENT = 40;
	
  	return CommsLayout;
  	
});


define('app/scenes/game/gamemode',[], function(){
	
	
	
	var GameMode = function(){
		
	};

	GameMode.UNKNOWN = 0;
	GameMode.COMMANDS = 1;
	GameMode.INTERACTIVE = 2;
	
	return GameMode;
	
});


define('app/scenes/game/objectstate',[], function(){
	
	
	
	var ObjectState = function(body){
		this.body = body;
		this.state = null;
	};

	ObjectState.MAX_SPEED = 16;
	ObjectState.MAX_VX = 0.1;
	
	ObjectState.UP = 			"U";
	ObjectState.UPRIGHT = 		"UR";
	ObjectState.UPLEFT = 		"UL";
	ObjectState.RIGHT = 		"R";
	ObjectState.LEFT = 			"L";
	
	ObjectState.prototype.setState = function(s){
		this.state = s;
	};
	
	ObjectState.prototype.getState = function(){
		return this.state;
	};

	ObjectState.prototype.matches = function(char){
		return (this.state && this.state.indexOf(char) >= 0);
	};

	ObjectState.prototype.isLeft = function(){
		return this.matches(ObjectState.LEFT);
	};

	ObjectState.prototype.isRight = function(){
		return this.matches(ObjectState.RIGHT);
	};

	ObjectState.prototype.isUp = function(){
		return this.matches(ObjectState.UP);
	};

	ObjectState.prototype.remove = function(char){
		if(this.state){
			this.state = this.state.replace(char, "");
		}
	};

	ObjectState.prototype.isStill = function(){
		var v = this.body.velocity;
		var speed = this.body.speed;
		var still = (speed <= ObjectState.MAX_SPEED && Math.abs(v.x) <= ObjectState.MAX_VX && this.body.blocked.down);
		return still;
	}

	return ObjectState;
	
});


define('app/scenes/comms/commsdata',['app/scenes/comms/commslayout', 'app/consts/leveldata', 'app/scenes/game/gamemode', 'app/scenes/game/objectstate'],

function(CommsLayout, LevelData, GameMode, ObjectState) {
	
	
	
	var CommsData = function(){
		this.level = null;
		this.clear();
		this.selectedIndex = 0;
		this.layoutSignal = new Phaser.Signal();
		this.tabSignal = new Phaser.Signal();
		this.mode = GameMode.UNKNOWN;
	};
	
	CommsData.prototype.getMode = function(){
		return this.mode;
	};
	
	CommsData.prototype.setMode = function(mode){
		this.mode = mode;
	};
	
	CommsData.prototype.setSelectedTab = function(data){
		this.selectedIndex = data.index;
		this.tabSignal.dispatch();
	};

	CommsData.prototype.setLevel = function(level){
		this.level = level;
		this.clear();
	};

	CommsData.prototype.clear = function(){
		this.selectedIndex = 0;
		this.tiles = [];
		var that = this;
		if(this.level){
			$.each(Array(this.level.tabs), function(i) {
				that.tiles[i] = [];
			});
		}
		this.mode = GameMode.UNKNOWN;
	};

	CommsData.prototype.getTilesLayout = function(n){
		var tiles, p, x, y;
		tiles = this.tiles[n];
		p = [];
		y = CommsLayout.TOP;
		x = CommsLayout.XPOS;
		$.each(tiles, function(i, id){
			var obj, indents, unindents;
			indents = LevelData.getIndents(id.type);
			unindents = LevelData.getUnindents(id.type);
			if(unindents){
				x -= CommsLayout.INDENT;
			}
			obj = {"type":id.type, "index":id.index, "x":x, "y":y};
			p.push(obj);
			y += CommsLayout.getBlockHeight(id.type);
			if(indents){
				x += CommsLayout.INDENT;
			}
		});
		return {"index":n, "positions":p};
	};
	
	CommsData.prototype.getCommands = function(){
		return [ObjectState.UPRIGHT, ObjectState.UPLEFT, ObjectState.UP, ObjectState.RIGHT, ObjectState.UP, ObjectState.UPRIGHT];
	};
	
	CommsData.prototype.layoutCurrentTiles = function(){
		var positions = [];
		positions.push ( this.getTilesLayout(this.selectedIndex) );
		this.layoutSignal.dispatch(positions);
	};

	CommsData.prototype.layoutAllTiles = function(c){
		var that = this, positions = [];
		$.each(this.tiles, function(i){
			var p = that.getTilesLayout(i);
			positions.push(p);
		});
		this.layoutSignal.dispatch(positions);
	};

	CommsData.prototype.log = function(){
		var tiles = this.currentTiles();
		var s = "";
		$.each(tiles, function(i, obj){
			s += "\n"+i+"   "+JSON.stringify(obj);
		});
		console.log("LOG s: " + s);
	};
	
	CommsData.getInstance = function(){
		if(!CommsData.instance){
			CommsData.instance = new CommsData();
		}
		return CommsData.instance;
	};
	
	CommsData.prototype.currentTiles = function(){
		return this.tiles[this.selectedIndex];
	};

	CommsData.prototype.getDropPosition = function(block){
		var tiles, h, middleY, num, indents;
		tiles = this.currentTiles();
		h = CommsLayout.getBlockHeight(block.id.type);
		if(tiles.length === 0){
			return {"y":0, "indents":0};
		}
		middleY = block.sprite.y + (h/2);
		num = (middleY - CommsLayout.TOP) / h;
		num = Math.min(Math.floor(num + 0.5), tiles.length + 1);
		indents = (block.sprite.x - CommsLayout.XPOS)/CommsLayout.INDENT;
		indents = Math.max(0, indents);
		return {"y":num, "indents":indents};
	};

	CommsData.prototype.drop = function(block){
		var pos = this.getDropPosition(block);
		console.log("index "+pos.y+",  "+pos.indents);
		var tiles = this.currentTiles();
		tiles.splice(pos.y, 0, block.id);
		this.layoutCurrentTiles();
	};

	CommsData.prototype.reload = function(c){
		this.layoutAllTiles(c);
	};

	CommsData.prototype.getIndexOf = function(tiles, id){
		var i = -1;
		$.each(tiles, function(j, obj){
			if(obj.type === id.type && obj.index === id.index){
				i = j;
			}
		});
		return i;
	};

	CommsData.prototype.lift = function(block){
		var id = block.id;
		var tiles = this.currentTiles();
		var index = this.getIndexOf(tiles, block.id);
		tiles.splice(index, 1);
		this.layoutCurrentTiles();
	};

  	return CommsData;
});






define('app/components/buttons/controlbutton',['app/components/buttons/abstractbutton'], function(AbstractButton){
	
	
	
	var ControlButton = function(options){
		AbstractButton.call(this, options);
	};
	
	ControlButton.HEIGHT = 120;
	ControlButton.WIDTH = 120;
	
	ControlButton.prototype = Object.create(AbstractButton.prototype);
	ControlButton.prototype.constructor = ControlButton;


	ControlButton.prototype.create = function(){
		AbstractButton.prototype.create.apply(this, arguments);
	};

	return ControlButton;
	
});



define('app/components/container',['app/game'],function(Game){
	
	
	
	var Container = function(options){
		this.options = options || {};
		if(!this.options.bounds){
			this.options.bounds = {};
		}
		this.bounds = this.options.bounds;
	};

	Container.prototype.create = function(){
		this.group = new Phaser.Group(Game.getInstance());
	};
	
	Container.prototype.destroy = function() {
		this.group.removeAll(true);
	};

	return Container;

});




define('app/scenes/game/controls',['app/game', 'app/components/buttons/controlbutton', 'app/components/buttons/pausebutton', 'app/components/container'],

function(Game, ControlButton, PauseButton, Container){
	
	
	
	var Controls = function(options){
		Container.call(this, options);
		this.upSignal = new Phaser.Signal();
		this.downSignal = new Phaser.Signal();
		this.buttons = [];
	};
	
	Controls.prototype = Object.create(Container.prototype);
	Controls.prototype.constructor = Controls;
	
	Controls.prototype.preload = function(){
	
	};

	Controls.prototype.create = function () {
		Container.prototype.create.call(this);
		//this.group.fixedToCamera = true;
		var that = this, y, assets = ['left', 'right', 'up', 'down'];
		y = Game.h() - ControlButton.HEIGHT;
		$.each(Array(4), function(i) {
			var x, pos, b;
			x = 100 + ControlButton.WIDTH * i;
			pos = {"x":x, "y":y, 'asset':assets[i]};
			b = new ControlButton(pos);
			b.create();
			b.mouseDownSignal.add($.proxy(that.controlDown, that));
			b.mouseUpSignal.add($.proxy(that.controlUp, that));
			that.group.add(b.sprite);
			that.buttons.push(b);
		}); 
	};
	
	Controls.prototype.controlDown = function (data) {
		var index = this.group.getIndex(data.target.sprite);
		this.downSignal.dispatch({"index":index});
	};
	
	Controls.prototype.controlUp = function (data) {
		var index = this.group.getIndex(data.target.sprite);
		this.upSignal.dispatch({"index":index});
	};
	
	Controls.prototype.update = function() {
    
	};
	
	return Controls;
	
});




define('app/scenes/game/character',['app/scenes/game/objectstate', 'app/game'], function(ObjectState, Game){
	
	
	
	var Character = function(){
		Game.pauseSignal.add(this.pauseChanged, this);
	};
	
	Character.VELX = 200;
	Character.VELY = 400;
	Character.FORCE_DELAY = 20;
	
	Character.prototype.preload = function(){
	
	};

	Character.prototype.create = function () {
		this.makeSprite();
	    this.state = new ObjectState(this.sprite.body);
	};

	Character.prototype.isStill = function() {
		return this.state.isStill();
	};

	Character.prototype.makeSprite = function() {
	
	};

	Character.prototype.setForce = function(s) {
		var that = this;
		this.state.setState(s);
		this.forceTime = 0;
		this.forced = true;
	};
	
	Character.prototype.pauseChanged = function(){
		var paused = Game.physicsPaused;
		if(paused){
			this.pause();
		}
		else{
			this.unPause();
		}
	};
	
	Character.prototype.pause = function(){
		this.cachedVelocity = {'x':this.sprite.body.velocity.x, 'y':this.sprite.body.velocity.y};
		this.sprite.body.allowGravity = false;
		this.sprite.body.velocity.x = 0;
		this.sprite.body.velocity.y = 0;
		this.sprite.animations.stop();
	};
	
	Character.prototype.unPause = function(){
		this.sprite.body.allowGravity = true;
		this.sprite.body.velocity.x = this.cachedVelocity.x;
		this.sprite.body.velocity.y = this.cachedVelocity.y;
	};
	
	Character.prototype.controlDown = function(data) {
		if(this.state.getState() != null){
			return;
		}
		if(data.index === 0){
			this.setForce(ObjectState.LEFT);
		}
		else if(data.index === 1){
			this.setForce(ObjectState.RIGHT);
		}
		else if(data.index === 2){
			this.setForce(ObjectState.UPLEFT);
		}
		else if(data.index === 3){
			this.setForce(ObjectState.UPRIGHT);
		}
	};
	
	Character.prototype.controlUp = function(data) {
		
	};
	
	Character.prototype.update = function() {
		var left, right, up;
		if(Game.physicsPaused){
			return;
		}
		this.sprite.body.velocity.x = 0;
		left = this.state.isLeft();
		right = this.state.isRight();
		up = this.state.isUp();
	    if(left){
			this.sprite.body.velocity.x = -Character.VELX;
	        this.sprite.animations.play('left');
	    }
	    else if(right){
	        this.sprite.body.velocity.x = Character.VELX;
	        this.sprite.animations.play('right');
	    }
	    else{
	        this.sprite.animations.stop();
	        this.sprite.frame = 4;
	    }
	    if(up){
	        this.sprite.body.velocity.y = -Character.VELY;
			this.state.remove("U");
	    }
	    if(this.forced){
	    	this.forceTime++;
	    	if(this.forceTime === Character.FORCE_DELAY){
	    		this.state.setState(null);
	    		this.forced = false;
	    	}
	    }
	};
	
	return Character;
	
});
	



define('app/scenes/game/player',['app/scenes/game/character', 'app/game'], function(Character, Game){
	
	
	
	var Player = function(){
		Character.call(this);
	};

	Player.prototype = Object.create(Character.prototype);
	Player.prototype.constructor = Player;

	Player.prototype.preload = function(){
		Character.prototype.preload.call(this);
	};

	Player.prototype.makeSprite = function () {
		Character.prototype.makeSprite.call(this, arguments);
	    this.sprite = new Phaser.Sprite(Game.getInstance(), 32, 32, 'dude');
		this.sprite.enableBody = true;
		Game.getInstance().physics.enable(this.sprite, Phaser.Physics.ARCADE);
		var body = this.sprite.body;
	    body.bounce.y = 0.2;
	    body.gravity.y = 20;
		body.velocity.y = -5;
	    body.collideWorldBounds = true;
	    this.sprite.animations.add('left', [0, 1, 2, 3], 10, true);
	    this.sprite.animations.add('right', [5, 6, 7, 8], 10, true);
	};

	Player.prototype.create = function () {
		Character.prototype.create.call(this, arguments);
	};

	Player.prototype.update = function() {
	    Character.prototype.update.call(this, arguments);
	};
	
	return Player;
});
	

define('app/scenes/game/stars',['app/game'], function(Game){
	
	
	
	var Stars = function(){
		
	};

	Stars.prototype.preload = function(){
	
	};

	Stars.prototype.create = function () {
		this.group = new Phaser.Group(Game.getInstance());
		Game.getInstance().physics.enable(this.group, Phaser.Physics.ARCADE);
		this.group.enableBody = true;
	    var star = this.group.create(200, 0, 'star');
		star.body.bounce.y = 0.1;
	};

	Stars.prototype.update = function() {
    
	};
	
	return Stars;
	
});



define('app/scenes/game/platforms',['app/game'], function(Game){
	
	
	
	var Platforms = function(){
		
	};

	Platforms.prototype.preload = function(){
    
	};

	Platforms.prototype.create = function () {
		this.map = new Phaser.Tilemap(Game.getInstance(), 'level1');
	    this.map.addTilesetImage('tiles1');
	    this.map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);
	    this.tileMapLayer = this.map.createLayer('tileLayer1');
	    this.tileMapLayer.debug = true;
	    this.tileMapLayer.resizeWorld();
	};

	Platforms.prototype.update = function() {
    
	};
	
	return Platforms;
	
});
	





define('app/scenes/game/gameview',['app/game', 'app/scenes/game/player', 'app/components/background', 'app/scenes/game/stars', 'app/scenes/comms/commsdata', 'app/scenes/game/platforms', 'app/scenes/game/gamemode'],

function(Game, Player, Background, Stars, CommsData, Platforms, GameMode){
	
	
	
	var GameView  = function(){
		
	};
	
	GameView.CHECK_STILL = 500;
	
	GameView.prototype.nextCommand = function() {
		console.log("nextCommand");
		var s;
		this.commandNum++;
		if(this.commandNum === this.commandStack.length){
			alert("ended");
		}
		else{
			s = this.commandStack[this.commandNum];
			this.player.setForce(s);
		}
	};
	
	GameView.prototype.controlUp = function(data) {
		this.player.controlUp(data);
	};
	
	GameView.prototype.controlDown = function(data) {
		this.player.controlDown(data);
	};
	
	GameView.prototype.addBg = function() {
		this.bg = new Background({"asset":'background'});
		this.bg.create();
		Game.getInstance().world.add(this.bg.sprite);
	};
	
	GameView.prototype.addPlatforms = function() {
		this.platforms = new Platforms();
		this.platforms.create();
		Game.getInstance().world.add(this.platforms.tileMapLayer);
	};
	
	GameView.prototype.addPlayer = function() {
		this.player = new Player();
		this.player.create();
		Game.getInstance().world.add(this.player.sprite);
	};
	
	GameView.prototype.addStars = function() {
		this.stars = new Stars();
		this.stars.create();
		Game.getInstance().world.add(this.stars.group);
	};
	
	GameView.prototype.create = function() {
		this.commandStack = CommsData.getInstance().getCommands();
		this.commandNum = -1;
		this.addBg();
		this.addPlatforms();
		this.addPlayer();
		this.addStars();
		Game.getInstance().camera.follow(this.player.sprite);
	};

	GameView.prototype.update = function() {
	    var physics = Game.getPhysics();
	   	Game.getPhysics().collide(this.player.sprite, this.platforms.tileMapLayer);
		Game.getPhysics().collide(this.stars.group, this.platforms.tileMapLayer);
		Game.getPhysics().overlap(this.player.sprite, this.stars.group, this.collectStar, null, this);
		this.player.update();
		this.platforms.update();
		this.stars.update();
		if(CommsData.getInstance().getMode() === GameMode.COMMANDS){
			this.checkStill();
		}
	};
	
	GameView.prototype.playBack = function(){
		this.checkStill();
	};
	
	GameView.prototype.checkStill = function(){
		var that = this;
		if(this.player.isStill()){
			if(!this.still){
				this.still = true;
				if(this.checkEndTimeout){
					clearTimeout(this.checkEndTimeout);
				}
				this.checkEndTimeout = setTimeout(function(){
					that.nextCommand();
				}, GameView.CHECK_STILL);
			}
		}
		else{
			this.still = false;
		}
	};

	GameView.prototype.collectStar = function(player, star){
		star.kill();
	};

	GameView.prototype.shutdown = function() {
		
	};
	
	return GameView;

});
	
	



define('app/components/buttons/closebutton',['app/components/buttons/abstractbutton'], function(AbstractButton){
	
	
	
	var CloseButton = function(options){
		options.asset = 'close';
		AbstractButton.call(this, options);
	};
	
	CloseButton.prototype = Object.create(AbstractButton.prototype);
	CloseButton.prototype.constructor = CloseButton;

	return CloseButton;
	
});



define('app/components/buttons/listbutton',['app/components/buttons/abstractbutton'], function(AbstractButton){
	
	
	
	var ListButton = function(options){
		options.asset = 'list';
		AbstractButton.call(this, options);
	};

	ListButton.prototype = Object.create(AbstractButton.prototype);
	ListButton.prototype.constructor = ListButton;
	
	ListButton.WIDTH = 120;
	ListButton.HEIGHT = 120;
	
	return ListButton;

});











define('app/components/buttons/homebutton',['app/components/buttons/abstractbutton'], function(AbstractButton){
	
	
	
	var HomeButton = function(options){
		options.asset = 'home';
		AbstractButton.call(this, options);
	};
	
	HomeButton.prototype = Object.create(AbstractButton.prototype);
	HomeButton.prototype.constructor = HomeButton;

	return HomeButton;
	
});



define('app/scenes/game/gamemenu',['app/components/buttons/navbutton', 'app/components/buttons/closebutton', 'app/game', 'app/components/buttons/listbutton', 'app/components/buttons/homebutton', 'app/components/container'],

function(NavButton, CloseButton, Game, ListButton, HomeButton, Container){
	
	
		
	var GameMenu = function(options){
		Container.call(this, options);
		this.selectSignal = new Phaser.Signal();
		this.buttons = [];
	};
	
	GameMenu.prototype = Object.create(Container.prototype);
	GameMenu.prototype.constructor = GameMenu;
	
	GameMenu.prototype.preload = function(){
    
	};
	
	GameMenu.prototype.addRect = function () {
		this.panel = new Phaser.Sprite(Game.getInstance(), 0, 0, 'panel');
		this.buttonGroup = new Phaser.Group(Game.getInstance(), 0, 0);
		this.group.add(this.panel);
		this.group.add(this.buttonGroup);
	};
	
	GameMenu.prototype.addButton = function (_class, x, y) {
		var b = new _class({"x":x, "y":y});
		b.create();
		b.mouseUpSignal.add(this.buttonUp, this);
		this.buttonGroup.add(b.sprite);
		this.buttons.push(b);
	};
	
	GameMenu.prototype.create = function () {
		Container.prototype.create.call(this);
		this.addRect();
		this.addButton(NavButton, 100, 200);
		this.addButton(NavButton, 200, 200);
		this.addButton(ListButton, 300, 200);
		this.addButton(HomeButton, 400, 200);
		this.addButton(CloseButton, 500, 150);
	};
	
	GameMenu.prototype.buttonUp = function(data) {
		var index = this.buttonGroup.getIndex(data.target.sprite);
		this.selectSignal.dispatch({"index":index});
	};
	
	GameMenu.prototype.destroy = function() {
		$.each(this.buttons, function(i, b){
			b.mouseUpSignal.removeAll(this);
		});
		Container.prototype.destroy.call(this);
	};
	
	GameMenu.prototype.update = function() {
    
	};
	
	return GameMenu;
	
});
	








define('app/scenes/game/gamescene',['app/scenes/scene', 'app/components/buttons/navbutton', 'app/components/buttons/pausebutton', 'app/scenes/comms/commsdata', 'app/scenes/game/controls', 'app/scenes/game/gamemode', 'app/scenes/game/gameview', 'app/scenes/game/gamemenu', 'app/game'],

function(Scene, NavButton, PauseButton, CommsData, Controls, GameMode, GameView, GameMenu, Game){
	
	
	
	var GameScene  = function(key){
		Scene.call(this, key);
		this.gameMenu = null;
	};
	
	GameScene.prototype = Object.create(Scene.prototype);
	GameScene.prototype.constructor = GameScene;

	GameScene.prototype.preload = function() {
		Scene.prototype.preload.apply(this, arguments);
	};
	
	GameScene.prototype.addControls = function() {
		this.controls = new Controls({"bounds":{"x":0, "y":0}});
		this.controls.create();
		Game.getInstance().world.add(this.controls.group);
		this.controls.upSignal.add(this.gameView.controlUp, this.gameView);
		this.controls.downSignal.add(this.gameView.controlDown, this.gameView);
	};
	GameScene.prototype.showControls = function(tf) {
		this.controls.visible = tf;
	};
	
	GameScene.prototype.create = function() {
		Scene.prototype.create.apply(this, arguments);
		this.gameView = new GameView();
		this.pauseButton = new PauseButton({"x":Game.w() - PauseButton.WIDTH, "y":0});
		this.gameView.create();
	    this.pauseButton.create();
		this.pauseButton.sprite.fixedToCamera = true;
		this.pauseButton.mouseUpSignal.add(this.buttonClicked, this);
		Game.getInstance().world.add(this.pauseButton.sprite);
		if(1==1 || CommsData.getInstance().mode != GameMode.COMMANDS){
			this.addControls();
		}
		this.checkLaunch();
	};
	
	GameScene.prototype.checkLaunch = function() {
		var that = this;
		if(CommsData.getInstance().mode === GameMode.UNKNOWN){
			setTimeout(function(){
				that.showMenu();
			}, 500);
		}
		else if(CommsData.getInstance().mode === GameMode.COMMANDS){
			setTimeout(function(){
				that.gameView.playBack();
			}, 500);
		}
	};
	
	GameScene.prototype.showMenu = function(data) {
		var options, that = this;
		Game.pausePhysics();
		options = {"bounds":{"x":0, "y":0, "w":300, "h":200}};
		if(!this.gameMenu){
			this.gameMenu = new GameMenu(options);
			this.gameMenu.create();
			Game.getInstance().world.add(this.gameMenu.group);
			this.gameMenu.selectSignal.add(this.menuClick, this);
			Game.getInstance().add.tween(this.gameMenu.group).to({"y": -100, "x":200}, 250, Phaser.Easing.Quadratic.Out, true, 20, false);
		}
	};
	
	GameScene.prototype.menuClick = function(data) {
		if(data.index === 0){
			CommsData.getInstance().setMode(GameMode.INTERACTIVE);
			this.hideMenu();
		}
		else if(data.index === 1){
			CommsData.getInstance().setMode(GameMode.COMMANDS);
			this.navigationSignal.dispatch({"key":this.key, "target":"comms"});
		}
		else if(data.index === 2){
			this.navigationSignal.dispatch({"key":this.key, "target":"levels"});
		}
		else if(data.index === 3){
			this.navigationSignal.dispatch({"key":this.key, "target":"home"});
		}
		else if(data.index === 4){
			this.hideMenu();
		}
	};
	
	GameScene.prototype.hideMenu = function(data) {
		Game.unPausePhysics();
		Game.getInstance().world.remove(this.gameMenu.group);
		this.gameMenu.selectSignal.removeAll(this);
		this.gameMenu.destroy();
		this.gameMenu = null;
	};
	
	GameScene.prototype.buttonClicked = function(data) {
		this.showMenu();
	};

	GameScene.prototype.update = function() {
		Scene.prototype.update.apply(this, arguments);
		this.gameView.update();
	};
	
	GameScene.prototype.shutdown = function() {
		this.gameView.shutdown();
		this.hideMenu();
		Scene.prototype.shutdown.apply(this, arguments);
	};
	
	return GameScene;

});
	

define('app/scenes/comms/block',['app/game'], function(Game){
	
	
	
	var Block = function(type, img){
		this.type = type;
		this.img = img;
		this.clickSignal = new Phaser.Signal();
		this.releaseSignal = new Phaser.Signal();
	};

	Block.prototype.preload = function(){

	};

	Block.prototype.toString = function(){
		return "Block at " + this.sprite.x + "," + this.sprite.y + " of type " + this.type;
	};

	Block.prototype.create = function () {
		this.sprite = new Phaser.Sprite(Game.getInstance(), 0, 128*this.type, this.img);
		this.sprite.block = this;
		this.sprite.inputEnabled = true;
		this.sprite.input.enableDrag(false, true);
		this.sprite.events.onInputDown.add(this.clickBlock, this);
		this.sprite.events.onDragStop.add(this.releaseBlock, this);
	};

	Block.prototype.clickBlock = function() {
		this.clickSignal.dispatch({target:this});
	};

	Block.prototype.releaseBlock = function() {
		this.releaseSignal.dispatch({target:this});
	};
	
	return Block;
	
});

define('app/scenes/comms/blocksfactory',['app/scenes/comms/block'], function(Block){
	
	
	
	var BlockTypes = function(){
	
	};

	BlockTypes.create = function(type){
		if(type == 0){
			return new Block(0, 'block0');
		}
		else if(type == 1){
			return new Block(1, 'block1');
		}
		else if(type == 2){
			return new Block(2, 'block2');
		}
		else{
			return new Block(3, 'block3');
		}
	};
	
	return BlockTypes;
	
});





define('app/scenes/comms/commsgroup',['app/game','app/scenes/comms/commslayout', 'app/consts/leveldata'], function(Game, CommsLayout, LevelData) {
	
	
	
	var CommsGroup = function(game){
		Phaser.Group.call(this, game);
	};
	
	CommsGroup.prototype = Object.create(Phaser.Group.prototype);
	CommsGroup.prototype.constructor = CommsGroup;
	
	CommsGroup.prototype.create = function(){
		this.addGfx();
	};
	
	CommsGroup.prototype.add = function(child){
		Phaser.Group.prototype.add.call(this, child);
		this.addGfx();
	};
	
	CommsGroup.prototype.remove = function(child){
		Phaser.Group.prototype.remove.call(this, child);
		this.addGfx();
	};
	
	CommsGroup.prototype.forEach = function(callback){
		var that = this;
		Phaser.Group.prototype.forEach.call(this, function(sprite){
			if(sprite !== that.gfx){
				callback(sprite);
			}
		});
	};
	
	CommsGroup.prototype.drawGfx = function(){
		this.forEach(function(sprite){
			console.log(sprite.block+" "+sprite.block.id);
		});
		this.gfx.beginFill(0xFF3300);
   		this.gfx.lineStyle(10, 0xffd900, 1);
    	this.gfx.drawRect(CommsLayout.XPOS, 250, Math.random()*40, Math.random()*40);
	};
	
	CommsGroup.prototype.addGfx = function(){
		if(this.gfx){
			this.gfx.destroy();
			Phaser.Group.prototype.remove.call(this, this.gfx);
			this.gfx = null;
		}
		this.gfx = new Phaser.Graphics(Game.getInstance(), 0, 0);
		Phaser.Group.prototype.add.call(this, this.gfx);
		this.drawGfx();
	};

  	return CommsGroup;
});






define('app/scenes/comms/commands',['app/scenes/comms/blocksfactory', 'app/game', 'app/scenes/comms/commslayout', 'app/scenes/comms/commsgroup'],

function(BlocksFactory, Game, CommsLayout, CommsGroup){
	
	
	
	var Commands = function(commsData){
		this.mainGroup = null;
		this.targetGroups = [];
		this.commsData = commsData;
		commsData.layoutSignal.add(this.onLayout, this);
		commsData.tabSignal.add(this.onSelectTab, this);
	};

	Commands.prototype.onSelectTab = function(){
		var index = this.commsData.selectedIndex;
		$.each(this.targetGroups, function(i, group){
			group.visible = (i === index);
		});
		this.currentGroup = this.targetGroups[index];
	};

	Commands.prototype.onLayoutGroup = function(obj){
		var that = this;
		$.each(obj.positions, function(j, pos){
			var block, sprite, index;
			block = that.getBlockByIndexAndType(pos.index, pos.type);
			sprite = block.sprite;
			index = that.mainGroup.getIndex(sprite);
			if(index >= 0){
				// it's in the mainGroup
				that.mainGroup.remove(sprite);
				that.targetGroups[obj.index].add(sprite);
			}
			sprite.x = pos.x;
			sprite.y = pos.y;
		});
		this.update();
	};

	Commands.prototype.update = function(){
		$.each(this.targetGroups, function(i, group){
			group.dirty = true;
			group.update();
		});
		group.dirty = true;
		this.mainGroup.update();
	};

	Commands.prototype.onLayout = function(data){
		var that = this;
		$.each(data, function(i, obj){
			that.onLayoutGroup(obj);
		});
	};

	Commands.prototype.loadLevel = function(){
		var i, b, that = this, level = this.commsData.level;
		this.makeGroups(level.tabs);
		$.each(level.tiles, function(type, v){
			$.each(Array(v), function(i) {
				b = BlocksFactory.create(type);
				b.create();
				b.clickSignal.add($.proxy(that.blockDown, that));
				b.releaseSignal.add($.proxy(that.blockUp, that));
				b.origPos = {"x":b.sprite.x, "y":b.sprite.y};
				b.id = {"type":type, "index":i};
				that.mainGroup.add(b.sprite);
			});  
		});
		this.commsData.reload(this);
	};

	Commands.prototype.getBlockByIndexAndType = function(index, type){
		var blockFound = null;
		$.each(this.targetGroups, function(i, group){
			group.forEach(function(sprite){
				if(sprite.block.id.type === type && sprite.block.id.index === index){
					blockFound = sprite.block;
				}
			});
		});
		this.mainGroup.forEach(function(sprite){
			if(sprite.block.id.type === type && sprite.block.id.index === index){
				blockFound = sprite.block;
			}
		});
		return blockFound;
	};

	Commands.prototype.makeGroups = function(numTabs){
		var that = this;
		$.each(Array(numTabs), function(i) {
			var group = new CommsGroup(Game.getInstance());
			group.create();
			Game.getInstance().world.add(group);
			that.targetGroups.push(group);
		});
		this.mainGroup = new Phaser.Group(Game.getInstance());
		Game.getInstance().world.add(this.mainGroup);
		this.currentGroup = this.targetGroups[this.commsData.selectedIndex];
	};

	Commands.prototype.preload = function(){
	
	};

	Commands.prototype.create = function() {
		this.dragger = null;
		Game.getInput().onDown.add($.proxy(this.onDown, this));
	};

	Commands.prototype.onUp = function() {
		Game.getInput().moveCallback = null;
	};

	Commands.prototype.onDown = function() {
		var input = Game.getInput();
		var hits = this.mainGroup.hitTest(input) || this.currentGroup.hitTest(input);
		if(!hits){
			this.startY = this.currentGroup.y;
			this.y0 = input.activePointer.y;
			input.onUp.add($.proxy(this.onUp, this));
			input.moveCallback = $.proxy(this.move, this);
			input.mouse.mouseOutCallback = $.proxy(this.mouseOutCallback, this);
			
		}
	};
	
	Commands.prototype.mouseOutCallback = function() {
		this.onUp();
	};
	
	Commands.prototype.move = function() {
		var input = Game.getInput();
		var num = this.commsData.currentTiles().length;
		var miny = -1 * CommsLayout.getBlockHeight(1) * num;
		var maxy = 0;
		var y = this.startY - (this.y0 - input.activePointer.y);
		y = Math.min(y, maxy);
		y = Math.max(y, miny);
		this.currentGroup.y = y;
	};

	Commands.prototype.blockDown = function(data) {
		var mainIndex = this.mainGroup.getIndex(data.target.sprite);
		if(mainIndex >= 0){
			// on the left, don't do anything yet
		}
		else{
			// on the right, unsnap it!
			this.currentGroup.remove(data.target.sprite);
			this.mainGroup.add(data.target.sprite);
			data.target.sprite.y += this.currentGroup.y;
			this.lift(data);
		}
	};

	Commands.prototype.lift = function(data) {
		this.commsData.lift(data.target);
	};

	Commands.prototype.drop = function(data) {
		this.commsData.drop(data.target);
	};

	Commands.prototype.blockUp = function(data) {
		var input =  Game.getInput();
		input.onUp.removeAll();
		input.moveCallback = null;
		var block = data.target;
		var sprite = block.sprite;
		if(sprite.x > 200){
			data.target.sprite.y -= this.currentGroup.y;
			this.drop(data);
		}
		else{
			// go back
			sprite.x = block.origPos.x;
			sprite.y = block.origPos.y;
		}
	};

	Commands.prototype.update = function() {
    
	};

	Commands.prototype.shutdown = function(){
		this.commsData.layoutSignal.removeAll(this);
		this.commsData.tabSignal.removeAll(this);
	};
	
	return Commands;
	
});


define('app/components/buttons/tabbutton',['app/components/buttons/abstractbutton'],function(AbstractButton){
	
	
	
	var TabButton = function(options){
		options.asset = 'play';
		// overFrame, outFrame, downFrame, upFrame
		AbstractButton.call(this, options);
	};
	
	TabButton.WIDTH = 120;
	
	TabButton.prototype = Object.create(AbstractButton.prototype);
	TabButton.prototype.constructor = TabButton;

	TabButton.prototype.preload = function(){
		AbstractButton.prototype.preload.apply(this, arguments);
	}

	TabButton.prototype.create = function(){
		AbstractButton.prototype.create.apply(this, arguments);
	};

	TabButton.prototype.select = function(){
		this.goToFrame(2);
	};

	TabButton.prototype.deselect = function(){
		this.goToFrame(1);
	};
	
	return TabButton;

});









define('app/components/tabs',['app/components/buttons/tabbutton', 'app/game', 'app/components/container'],

function(TabButton, Game, Container){
	
	
	
	var Tabs = function(options){
		Container.call(this, options);
		this.commsData = this.options.commsData;
		this.selectSignal = new Phaser.Signal();
		this.buttons = [];
	};
	
	Tabs.prototype = Object.create(Container.prototype);
	Tabs.prototype.constructor = Tabs;
	
	Tabs.prototype.preload = function(){
	
	};

	Tabs.prototype.loadLevel = function(){
		var that = this, level = this.commsData.level, b;
		$.each(Array(level.tabs), function(i) {
			b = new TabButton({"x":that.options.bounds.x + i * TabButton.WIDTH, "y":0});
			b.create();
			if(i === 1){
				b.goToFrame(2);
			}
			b.mouseDownSignal.add($.proxy(that.click, that));
			that.group.add(b.sprite);
			that.buttons.push(b);
		}); 
		this.reload();
	};

	Tabs.prototype.selectIndex = function (index) {
		$.each(this.buttons, function(i, button){
			if(i === index){
				button.select();
			}
			else{
				button.deselect();
			}
		});
		this.selectSignal.dispatch({"index":index});
	};

	Tabs.prototype.click = function (data) {
		var index = this.group.getIndex(data.target.sprite);
		this.selectIndex(index);
	};

	Tabs.prototype.init = function () {
		var index = this.commsData.selectedIndex;
		this.selectIndex(index);
	};

	Tabs.prototype.create = function () {
		Container.prototype.create.call(this);
	};

	Tabs.prototype.reload = function(){

	};

	Tabs.prototype.onDown = function() {
		console.log("down");
	};

	Tabs.prototype.update = function() {
    
	};

	Tabs.prototype.shutdown = function(){
		//TODO, clean up
	};
	
	return Tabs;
	
});



define('app/scenes/comms/commscene',['app/scenes/scene', 'app/scenes/comms/commands', 'app/components/tabs', 'app/components/buttons/tabbutton', 'app/scenes/comms/commsdata', 'app/components/buttons/navbutton', 'app/components/buttons/homebutton', 'app/game'],

function(Scene, Commands, Tabs, TabButton, CommsData, NavButton, HomeButton, Game){
	
	
	
	var CommScene  = function(key){
		Scene.call(this, key);
	};
	
	CommScene.prototype = Object.create(Scene.prototype);
	CommScene.prototype.constructor = CommScene;

	CommScene.prototype.loadLevel = function() {
		this.commands.loadLevel();
		this.tabs.loadLevel();
		this.tabs.init();
	};

	CommScene.prototype.preload = function() {
		Scene.prototype.preload.call(this);
	};

	CommScene.prototype.create = function() {
		var bounds, numTabs, w;
		numTabs = CommsData.getInstance().level.tabs;
		w = numTabs * TabButton.WIDTH;
		Scene.prototype.create.apply(this, arguments);
		this.goButton = new NavButton({"x":110, "y":0});
		this.commands = new Commands(CommsData.getInstance());
		bounds = {"x": Game.w() - w, "y": 0, "w": w, "h": 50};
		this.tabs = new Tabs({"commsData":CommsData.getInstance(), "bounds":bounds});
		this.goButton.create();
		this.tabs.create();
		this.commands.create();
		this.tabs.selectSignal.add(this.tabSelected, this);
		this.backButton = new HomeButton({"x":0, "y":0});
		this.backButton.create();
		Game.getInstance().world.add(this.goButton.sprite);
		Game.getInstance().world.add(this.tabs.group);
		Game.getInstance().world.add(this.backButton.sprite);
		this.addListeners();
		this.loadLevel();
	};
	
	CommScene.prototype.addListeners = function(data) {
		this.goButton.mouseUpSignal.add(this.goButtonClicked, this);
		this.backButton.mouseUpSignal.add(this.backButtonClicked, this);
	};
	
	CommScene.prototype.tabSelected = function(data) {
		CommsData.getInstance().setSelectedTab(data);
	};
	
	CommScene.prototype.backButtonClicked = function(data) {
		this.navigationSignal.dispatch({"key": this.key, "button":"back"});
	};
	
	CommScene.prototype.goButtonClicked = function(data) {
		this.navigationSignal.dispatch({"key": this.key, "button":"go"});
	};

	CommScene.prototype.update = function() {
		Scene.prototype.update.apply(this, arguments);
	};

	CommScene.prototype.shutdown = function() {
		Scene.prototype.shutdown.apply(this, arguments);
		this.commands.shutdown();
		this.tabs.shutdown();
	};
	
	return CommScene;

});
	
	





define('app/preloader/preloader',['app/consts/leveldata', 'app/game'], function(LevelData, Game){
	
	
	
	var Preloader = function(){
		this.numLoaded = 0;
		this.loadSignal = new Phaser.Signal();
	};

	Preloader.BG_KEY = 'background';
	Preloader.LIST_KEY = 'list';
	Preloader.SOUND1_KEY = 'sound1';
	Preloader.SOUND2_KEY = 'sound2';
	Preloader.SOUND3_KEY = 'sound3';
	Preloader.SOUND4_KEY = 'sound4';
	Preloader.SOUND5_KEY = 'sound5';
	Preloader.CLOSE_KEY = 'close';
	Preloader.HOME_KEY = 'home';
	Preloader.MARKER_KEY = 'marker';
	Preloader.BLOCK_KEY0 = 'block0';
	Preloader.BLOCK_KEY1 = 'block1';
	Preloader.BLOCK_KEY2 = 'block2';
	Preloader.BLOCK_KEY3 = 'block3';
	Preloader.DUDE_KEY = 'dude';
	Preloader.STAR_KEY = 'star';
	Preloader.LEVEL1_JSON_KEY = 'level1';
	Preloader.LEVEL1_TILES_KEY = 'tiles1';
	Preloader.PANEL_KEY = 'panel';
	Preloader.LEFT_KEY = 'left';
	Preloader.RIGHT_KEY = 'right';
	Preloader.UP_KEY = 'up';
	Preloader.DOWN_KEY = 'down';

	Preloader.data = [
		{"type":"spritesheet", 	"asset":"assets/images/buttons/yellowLeft.png", 		"key":Preloader.LEFT_KEY, 			"w":120, 	"h":120},
		{"type":"spritesheet", 	"asset":"assets/images/buttons/yellowRight.png", 		"key":Preloader.RIGHT_KEY, 			"w":120, 	"h":120},
		{"type":"spritesheet", 	"asset":"assets/images/buttons/yellowUp.png", 			"key":Preloader.UP_KEY, 			"w":120, 	"h":120},
		{"type":"spritesheet", 	"asset":"assets/images/buttons/yellowDown.png", 		"key":Preloader.DOWN_KEY, 			"w":120, 	"h":120},
		{"type":"spritesheet", 	"asset":"assets/images/buttons/close.png", 				"key":Preloader.CLOSE_KEY, 			"w":50, 	"h":50},
		{"type":"spritesheet", 	"asset":"assets/images/buttons/yellowList.png", 		"key":Preloader.LIST_KEY, 			"w":120, 	"h":120},
		{"type":"spritesheet", 	"asset":"assets/images/buttons/greenHome.png", 			"key":Preloader.HOME_KEY, 			"w":120, 	"h":120},
		{"type":"sound", 		"asset":"assets/sound/sound1.mp3", 						"key":Preloader.SOUND1_KEY},
		{"type":"sound", 		"asset":"assets/sound/sound2.mp3", 						"key":Preloader.SOUND2_KEY},
		{"type":"sound", 		"asset":"assets/sound/sound3.mp3", 						"key":Preloader.SOUND3_KEY},
		{"type":"image", 		"asset":"assets/images/bg/background2.png", 			"key":Preloader.BG_KEY},
		{"type":"image", 		"asset":LevelData.BLOCK0, 								"key":Preloader.BLOCK_KEY0},
		{"type":"image", 		"asset":LevelData.BLOCK1, 								"key":Preloader.BLOCK_KEY1},
		{"type":"image", 		"asset":LevelData.BLOCK2, 								"key":Preloader.BLOCK_KEY2},
		{"type":"image", 		"asset":LevelData.BLOCK3, 								"key":Preloader.BLOCK_KEY3},
		{"type":"spritesheet", 	"asset":"assets/images/game/dude.png", 					"key":Preloader.DUDE_KEY, 			"w":32, 	"h":48},
		{"type":"image", 		"asset":"assets/images/game/star2.png", 				"key":Preloader.STAR_KEY},
		{"type":"tilemap", 		"asset":"assets/levels/level1.json", 					"key":Preloader.LEVEL1_JSON_KEY},
		{"type":"image", 		"asset":"assets/images/game/tiles1.png",	 			"key":Preloader.LEVEL1_TILES_KEY},
		{"type":"image", 		"asset":"assets/images/other/panel.png",	 			"key":Preloader.PANEL_KEY},
		{"type":"spritesheet", 	"asset":"assets/images/buttons/pagination.png", 		"key":Preloader.MARKER_KEY, 		"w":40, 	"h":40}
	];
	
	Preloader.prototype.loadNext = function(){
		var obj, type, game;
		game = Game.getInstance();
		obj = Preloader.data[this.numLoaded];
		type = obj.type;
		if(type === "image"){
			game.load.image(obj.key, obj.asset);
		}
		else if(type === "spritesheet"){
			game.load.spritesheet(obj.key, obj.asset, obj.w, obj.h);
		}
		else if(type === "tilemap"){
			game.load.tilemap(obj.key, obj.asset, null, Phaser.Tilemap.TILED_JSON);
		}
		else if(type === "sound"){
			game.load.audio(obj.key, [obj.asset]);
		}
	};
	
	Preloader.prototype.start = function(){
		var game = Game.getInstance();
		game.load.onFileComplete.add($.proxy(this.fileLoaded, this));
		this.loadNext();
	};

	Preloader.prototype.fileLoaded = function() {
		this.numLoaded++;
		this.loadSignal.dispatch({"numLoaded":this.numLoaded, "total":Preloader.data.length});
		if(this.numLoaded < Preloader.data.length){
			this.loadNext();
		}
	};

	return Preloader;

});







define('app/components/buttons/bulbbutton',['app/components/buttons/abstractbutton'], function(AbstractButton){
	
	
	
	var BulbButton = function(options){
		options.asset = 'bulb';
		AbstractButton.call(this, options);
	};
	
	BulbButton.prototype = Object.create(AbstractButton.prototype);
	BulbButton.prototype.constructor = BulbButton;
	
	BulbButton.WIDTH = 120;
	BulbButton.HEIGHT = 120;
	
	return BulbButton;
	
});



define('app/components/loaderbar',['app/game'], function(Game){
	
	
	
	var LoaderBar = function(options){
		this.options = options;
	};
	
	LoaderBar.WIDTH = 500;
	LoaderBar.HEIGHT = 60;
	
	LoaderBar.prototype.goToPercent = function(p){
		var g, numFrames;
		numFrames = 8;
		g = (numFrames - 1)/100;
		this.sprite.x = this.options.x;
		this.sprite.y = this.options.y;
		this.sprite.loadTexture('loaderBar', Math.round(p*g));
	};
	
	LoaderBar.prototype.create = function(){
		this.sprite = new Phaser.Sprite(Game.getInstance(), 500, 60, 'loaderBar');
	};
	
	return LoaderBar;

});



define('app/scenes/main/mainscene',['app/scenes/scene', 'app/preloader/preloader', 'app/components/buttons/navbutton', 'app/components/buttons/bulbbutton', 'app/components/loaderbar', 'app/utils/textfactory', 'app/game'],

function(Scene, Preloader, NavButton, BulbButton, LoaderBar, TextFactory, Game){
	
	
	
	var MainScene  = function(key){
		Scene.call(this, key);
		this.numLoaded = 0;
	};
	
	MainScene.created = false;
	
	MainScene.prototype = Object.create(Scene.prototype);
	MainScene.prototype.constructor = MainScene;

	MainScene.prototype.preload = function() {
		if(!MainScene.created){
			this.addChildren();
			this.preloader = new Preloader();
			this.preloader.loadSignal.add(this.loadProgress, this);
			this.preloader.start();
		}
	};
	
	MainScene.prototype.addChildren = function() {
		Scene.prototype.addChildren.call(this);
		this.addBar();
		this.addText();
		this.addButtons();
	};
	
	MainScene.prototype.addBar = function() {
		var x, y, options;
		x = Game.cx() - LoaderBar.WIDTH/2;
		y = Game.cy() - 20;
		options = {"x":x, "y":y};
		this.loaderBar = new LoaderBar(options);
		this.loaderBar.create();
		Game.getInstance().world.add(this.loaderBar.sprite);
	};
	
	MainScene.prototype.addText = function() {
		this.label = TextFactory.make(Game.cx() - 300, 0, "Main menu");
		Game.getInstance().world.add(this.label);
	};
	
	MainScene.prototype.addButtons = function() {
		var padding = 100;
		this.startButton = new NavButton({"x":Game.cx() - NavButton.WIDTH - padding, "y":Game.h() + 100});
		this.tutorialButton = new BulbButton({"x":Game.cx() + padding, "y":Game.h() + 100});
		this.startButton.create();
		this.tutorialButton.create();
		this.startButton.mouseUpSignal.add(this.startButtonClicked, this);
		this.tutorialButton.mouseUpSignal.add(this.tutorialButtonClicked, this);
		Game.getInstance().world.add(this.startButton.sprite);
		Game.getInstance().world.add(this.tutorialButton.sprite);
	};
	
	MainScene.prototype.loadProgress = function(data) {
		var p = Math.round(data.numLoaded * 100 / data.total);
		this.loaderBar.goToPercent(p);
	};

	MainScene.prototype.create = function() {
		Scene.prototype.create.call(this);
		this.loaderBar.goToPercent(100);
		if(MainScene.created){
			this.showButtons();
		}
		else{
			MainScene.created = true;
			setTimeout($.proxy(this.showButtons, this), 750);
		}
	};
	
	MainScene.prototype.showButtons = function() {
		var obj1, obj2, obj3;
		obj1 = {"y": Game.getInstance().world.height + 100};
		obj2 = {"y": Game.getInstance().world.centerY};
		obj3 = {"y": Game.getInstance().world.centerY};
		Game.getInstance().add.tween(this.loaderBar.sprite).to(obj1, 250, Phaser.Easing.Quadratic.Out, true, 20, false);
		Game.getInstance().add.tween(this.startButton.sprite).to(obj2, 250, Phaser.Easing.Quadratic.Out, true, 20, false);
		Game.getInstance().add.tween(this.tutorialButton.sprite).to(obj3, 250, Phaser.Easing.Quadratic.Out, true, 20, false);
	};
	
	MainScene.prototype.startButtonClicked = function(data) {
		this.navigationSignal.dispatch({"key":this.key, "button":"start"});
	};

	MainScene.prototype.tutorialButtonClicked = function(data) {
		this.navigationSignal.dispatch({"key":this.key, "button":"tutorial"});
	};

	MainScene.prototype.update = function() {
		Scene.prototype.update.apply(this, arguments);
	};

	MainScene.prototype.shutdown = function() {
		Scene.prototype.shutdown.apply(this, arguments);
	};

	return MainScene;

});
	
	

		





define('app/scenes/tutorial/tutorialscene',['app/scenes/scene', 'app/preloader/preloader', 'app/components/buttons/homebutton', 'app/utils/textfactory', 'app/game'],

function(Scene, Preloader, HomeButton, TextFactory, Game){
	
	
	
	var TutorialScene  = function(key){
		Scene.call(this, key);
	};

	TutorialScene.prototype = Object.create(Scene.prototype);
	TutorialScene.prototype.constructor = TutorialScene;

	TutorialScene.prototype.create = function() {
		Scene.prototype.create.apply(this, arguments);
		this.label = TextFactory.make(Game.getInstance().world.centerX - 300, 50, "Tutorial");
		this.startButton = new HomeButton({"x":0, "y":0});
		this.startButton.create();
		this.startButton.mouseUpSignal.add(this.startButtonClicked, this);
		Game.getInstance().world.add(this.startButton.sprite);
		Game.getInstance().world.add(this.label);
	};

	TutorialScene.prototype.startButtonClicked = function(data) {
		this.navigationSignal.dispatch({"key":this.key});
	};

	TutorialScene.prototype.tutorialButtonClicked = function(data) {
		this.navigationSignal.dispatch({"key":this.key});
	};

	TutorialScene.prototype.update = function() {
		Scene.prototype.update.apply(this, arguments);
	};

	TutorialScene.prototype.shutdown = function() {
		Scene.prototype.shutdown.apply(this, arguments);
	};

	return TutorialScene;

});
	
	







define('app/components/scroller',['app/game'],function(Game){
	
	
	
	var Scroller = function(options){
		this.options = options;
		this.x0 = null;
		this.dragging = false;
		this.minX = 0;
		this.selectSignal = new Phaser.Signal();
	};
	
	Scroller.MIN_MOVE = 10;
	
	Scroller.prototype.create = function(){
		this.group = new Phaser.Group(Game.getInstance());
	    this.addChildren();
		Game.getInput().onDown.add($.proxy(this.onDown, this));
		Game.getInput().mouse.mouseOutCallback = $.proxy(this.mouseOutCallback, this);
	};
	
	Scroller.prototype.mouseOutCallback = function() {
		this.onUp();
	};
	
	Scroller.prototype.add = function(child) {
		this.group.add(child.group);
		var x, w, worldWidth;
		x = child.options.bounds.x;
		w = child.options.bounds.w;
		worldWidth = Game.getInstance().world.width;
		this.minX = Math.min(this.minX, -1*(x + w - worldWidth));
		child.signal.add($.proxy(this.select, this));
	};
	
	Scroller.prototype.select = function(data){
		if(Math.abs(this.dx) < Scroller.MIN_MOVE){
			var page = this.group.getIndex(data.grid.group);
			this.selectSignal.dispatch({"key":this.key, "index":data.index, "page":page});
		}
	};
	
	Scroller.prototype.addChildren = function(){
		this.options.dataProvider.addAll(this);
	};
	
	Scroller.prototype.onDown = function() {
		this.startDragging();
	};
	
	Scroller.prototype.onUp = function() {
		this.dragging = false;
		Game.getInput().moveCallback = null;
		this.snap();
	};
	
	Scroller.prototype.snap = function() {
		var x = this.options.snapX * Math.round(this.group.x / this.options.snapX)
		Game.getInstance().add.tween(this.group).to({'x': x}, 250, Phaser.Easing.Quadratic.Out, true, 20, false);
	};

	Scroller.prototype.buttonUp = function(data) {
		Game.getInput().moveCallback = null;
		this.x0 = null;
		var targetIndex = this.group.getIndex(data.target.sprite);
		if(Math.abs(this.dx) > Scroller.MIN_MOVE){
			this.snap();
		}
		else{
			// button up?
		}
	};

	Scroller.prototype.move = function(pointer, x, y) {
		var x, minX;
		if(this.x0 === null){
			this.x0 = x;
		}
		this.dx = this.x0 - x;
		x = this.startX - this.dx;
		x = Math.min(Math.max(x, this.minX), 0);
		this.group.x = x;
	};
	
	Scroller.prototype.destroy = function() {
		this.group.destroy(true);
		Game.getInput().onDown.removeAll(this);
		Game.getInput().mouse.mouseOutCallback = null;
	};
	
	Scroller.prototype.startDragging = function(data) {
		this.startX = this.group.x;
		this.dx = 0;
		this.x0 = null;
		this.dragging = true;
		Game.getInput().onUp.add($.proxy(this.onUp, this));
		Game.getInput().moveCallback = $.proxy(this.move, this);
	};
	
	return Scroller;

});





define('app/components/buttons/markerbutton',['app/components/buttons/abstractbutton'], function(AbstractButton){
	
	
	
	var MarkerButton = function(options){
		options.asset = 'marker';
		AbstractButton.call(this, options);
	};

	MarkerButton.prototype = Object.create(AbstractButton.prototype);
	MarkerButton.prototype.constructor = MarkerButton;

	MarkerButton.prototype.select = function(){
		this.goToFrame(2);
	};

	MarkerButton.prototype.deselect = function(){
		this.goToFrame(1);
	};

	return MarkerButton;

});











define('app/components/groupmarker',['app/game', 'app/components/buttons/markerbutton', 'app/components/container'],function(Game, MarkerButton, Container){
	
	
	
	var GroupMarker = function(options){
		Container.call(this, options);
		this.buttons = [];
	};
	
	GroupMarker.prototype = Object.create(Container.prototype);
	GroupMarker.prototype.constructor = GroupMarker;
	
	GroupMarker.prototype.create = function(){
		Container.prototype.create.call(this);
		var b, i, x;
		for(i = 0; i <= this.options.num - 1; i++){
			x = Game.getInstance().world.centerX - 20 * this.options.num + i * 40;
			b = new MarkerButton({"x":x, "y":Game.getInstance().world.height - 40});
			b.create();
			this.group.add(b.sprite);
			this.buttons.push(b);
		}
		this.setSelected(0);
	};
	
	GroupMarker.prototype.setSelected = function(index) {
		$.each(this.buttons, function(i, button){
			if(i === index){
				button.select();
			}
			else{
				button.deselect();
			}
		});
	};

	return GroupMarker;

});





define('app/components/pager',['app/game', 'app/components/scroller', 'app/components/groupmarker'],function(Game, Scroller, GroupMarker){
	
	
	
	var Pager = function(options){
		options.snapX = Game.getInstance().world.width;
		Scroller.call(this, options);
	};
	
	Pager.prototype = Object.create(Scroller.prototype);
	Pager.prototype.constructor = Pager;
	
	Pager.prototype.addChildren = function(){
		Scroller.prototype.addChildren.call(this);
		this.groupMarker = new GroupMarker({"num":this.options.dataProvider.getNumPages()});
		this.groupMarker.create();
		Game.getInstance().world.add(this.groupMarker.group);
	};
	
	Pager.prototype.snap = function() {
		Scroller.prototype.snap.call(this);
		var pageNum = -1 * Math.round(this.group.x / Game.getInstance().world.width);
		if(this.groupMarker){
			this.groupMarker.setSelected(pageNum);
		}
	};

	return Pager;

});





define('app/components/buttons/levelsbutton',['app/components/buttons/abstractbutton'], function(AbstractButton){
	
	
	
	var LevelsButton = function(options){
		options.asset = 'play';
		AbstractButton.call(this, options);
	};

	LevelsButton.prototype = Object.create(AbstractButton.prototype);
	LevelsButton.prototype.constructor = LevelsButton;
	
	LevelsButton.WIDTH = 120;
	LevelsButton.HEIGHT = 120;
	
	return LevelsButton;

});











define('app/components/buttongrid',['app/game', 'app/components/container'],function(Game, Container){
	
	
	
	var ButtonGrid = function(options){
		Container.call(this, options);
		this.spaceX = this.bounds.w / this.options.numX;
		this.spaceY = this.bounds.h / this.options.numY;
		this.marginX = (this.spaceX - this.options.buttonClass.WIDTH)/2;
		this.marginY = (this.spaceY - this.options.buttonClass.HEIGHT)/2;
		this.signal = new Phaser.Signal();
	};
	
	ButtonGrid.prototype = Object.create(Container.prototype);
	ButtonGrid.prototype.constructor = ButtonGrid;
	
	ButtonGrid.prototype.create = function(){
		Container.prototype.create.call(this);
		this.addBg();
		this.addButtons();
	};
	
	ButtonGrid.prototype.addBg = function(){
		this.panel = new Phaser.Sprite(Game.getInstance(), this.bounds.x, this.bounds.y, 'panel');
		this.group.add(this.panel);
	};
	
	ButtonGrid.prototype.addButtons = function(){
		var pos, i, j, b;
		this.buttonGroup = new Phaser.Group(Game.getInstance(), 0, 0);
		for(i = 1; i <= this.options.numX; i++){
			for(j = 1; j <= this.options.numY; j++){
				pos = {"x":this.bounds.x + this.spaceX * (i - 1), "y":this.bounds.y + this.spaceY * (j - 1)};
				pos.x += this.marginX;
				pos.y += this.marginY;
				b = new this.options.buttonClass(pos);
				b.create();
				b.mouseUpSignal.add(this.buttonUp, this);
				this.buttonGroup.add(b.sprite);
			}
		}
		this.group.add(this.buttonGroup);
	};
	
	ButtonGrid.prototype.destroy = function() {
		Container.prototype.destroy.call(this);
	};
	
	ButtonGrid.prototype.buttonUp = function(data) {
		var index = this.buttonGroup.getIndex(data.target.sprite);
		this.signal.dispatch({"index":index, "grid":this});
	};
	
	return ButtonGrid;

});





define('app/scenes/levels/leveldataprovider',['app/game', 'app/components/buttongrid', 'app/components/buttons/levelsbutton'], function(Game, ButtonGrid, LevelsButton){
	
	
	
	var LevelDataProvider  = function(){
		
	};
	
	LevelDataProvider.prototype.getNumPages = function(){
		return 2;
	};
	
	LevelDataProvider.prototype.addPage = function(i, numX, numY, scroller){
		var options, grid, bounds, w;
		w = Game.getInstance().world.width;
		bounds = {"x":i * w, "y":50, "w":w, "h":Game.getInstance().world.height};
		options = {"bounds":bounds, "numX": numX, "numY": numY, "buttonClass": LevelsButton};
		grid = new ButtonGrid(options);
		grid.create();
		scroller.add(grid);
	};
	
	LevelDataProvider.prototype.addAll = function(scroller){
		this.addPage(0, 3, 3, scroller);
		this.addPage(1, 3, 3, scroller);
	};
	
	return LevelDataProvider;

});
	
	





define('app/scenes/levels/levelsscene',['app/scenes/scene', 'app/components/scroller', 'app/components/pager', 'app/utils/textfactory', 'app/components/buttons/levelsbutton', 'app/components/buttons/homebutton', 'app/game', 'app/scenes/levels/leveldataprovider'],

function(Scene, Scroller, Pager, TextFactory, LevelsButton, HomeButton, Game, LevelDataProvider){
	
	
	
	var LevelsScene  = function(key){
		Scene.call(this, key);
	};

	LevelsScene.prototype = Object.create(Scene.prototype);
	LevelsScene.prototype.constructor = LevelsScene;

	LevelsScene.prototype.preload = function() {
		Scene.prototype.preload.call(this);
	};

	LevelsScene.prototype.create = function() {
		Scene.prototype.create.apply(this, arguments);
		var options = {"snapX":100, "dataProvider" : new LevelDataProvider()};
		this.scroller = new Pager(options);
		this.scroller.create();
		this.scroller.selectSignal.add(this.levelSelect, this);
		this.text = TextFactory.make(Game.cx() - 300, 0, "Choose a level");
		this.backButton = new HomeButton({"x":0, "y":0});
		this.backButton.create();
		Game.getInstance().world.add(this.backButton.sprite);
		Game.getInstance().world.add(this.scroller.group);
		Game.getInstance().world.add(this.text);
		this.backButton.mouseUpSignal.add(this.backButtonClicked, this);
	};
	
	LevelsScene.prototype.backButtonClicked = function(data) {
		this.navigationSignal.dispatch({"key":this.key, "button":"back"});
	};
	
	LevelsScene.prototype.levelSelect = function(data) {
		this.navigationSignal.dispatch({"key":this.key, "button":"level", "index":data.index});
	};

	LevelsScene.prototype.update = function() {
		Scene.prototype.update.apply(this, arguments);
	};

	LevelsScene.prototype.shutdown = function() {
		Scene.prototype.shutdown.apply(this, arguments);
		if(this.scroller){
			this.scroller.destroy();
		}
	};

	return LevelsScene;

});
	
	





define('app/scenemanager/scenefactory',['app/consts/appconsts','app/scenes/game/gamescene','app/scenes/comms/commscene','app/scenes/main/mainscene','app/scenes/tutorial/tutorialscene','app/scenes/levels/levelsscene'], function(AppConsts, GameScene, CommScene, MainScene, TutorialScene, LevelsScene ){
	
	
	
	var SceneFactory = function(){

	};
	
	SceneFactory.getForKey = function(key){
		var _class = SceneFactory.getClassForKey(key);
		return new _class(key);
	};
	
	SceneFactory.getClassForKey = function(key){
		if(key === AppConsts.GAME_SCENE){
			return GameScene;
		}
		else if(key === AppConsts.COMM_SCENE){
			return CommScene;
		}
		else if(key === AppConsts.MAIN_SCENE){
			return MainScene;
		}
		else if(key === AppConsts.LEVELS_SCENE){
			return LevelsScene;
		}
		else if(key === AppConsts.TUTORIAL_SCENE){
			return TutorialScene;
		}
	};
	
	return SceneFactory;

});
	
	
define('phaserstatetrans',[], function(){
	
	 
(

function(t,e){function i(){this._cover&&this._cover.bringToTop()}function s(t){if(this.game.paused=!0,this._cover&&this._cover.destroy(),this._texture||(this._texture=new e.RenderTexture(this.game,this.game.width,this.game.height,"cover")),this._texture.renderXY(this.game.stage,-this.game.camera.x,-this.game.camera.y),t){var i=this.game.state.states[t].create,s=this;this._cover=new e.Sprite(this.game,0,0,this._texture),this._cover.fixedToCamera=!0,this._cover.anchor.setTo(.5,.5),this._cover.cameraOffset.x=this.game.width/2,this._cover.cameraOffset.y=this.game.height/2,this.game.state.states[t].create=function(){i.call(s.game.state.states[t]),s.game.add.existing(s._cover),r.call(s)},this.game.state.start(t)}this.game.paused=!1}function r(){if(o&&o.properties){for(var t in o.properties)if("object"!=typeof o.properties[t]){var e={};e[t]=o.properties[t],this._tween=this.game.add.tween(this._cover).to(e,o.duration,o.ease,!0)}else this._tween=this.game.add.tween(this._cover[t]).to(o.properties[t],o.duration,o.ease,!0);this._tween.onComplete.addOnce(a,this)}}function a(){this._cover&&this._cover.destroy(),this._cover=null,this._texture&&this._texture.destroy(),this._texture=null}e.Plugin.StateTransition=function(t,i){e.Plugin.call(this,t,i)},e.Plugin.StateTransition.prototype=Object.create(e.Plugin.prototype),e.Plugin.StateTransition.prototype.constructor=e.Plugin.StateTransition,e.Plugin.StateTransition.prototype.to=function(t){s.call(this,t)},e.Plugin.StateTransition.prototype.bringToTop=function(){i.call(this)},e.Plugin.StateTransition.prototype.settings=function(t){if(!t)return Object.create(o);for(var e in t)o[e]&&(o[e]=t[e])};var o={duration:300,ease:e.Easing.Exponential.InOut,properties:{alpha:0}}}

)


(window, Phaser);

return Phaser.Plugin.StateTransition;
	
});
 

define('app/scenemanager/scenemanager',['app/consts/appconsts', 'app/utils/textfactory', 'app/consts/leveldata', 'app/scenemanager/scenefactory', 'app/scenes/comms/commsdata', 'app/game', 'phaserstatetrans'],

function(AppConsts, TextFactory, LevelData, SceneFactory, CommsData, Game, PhaserStateTrans){
	
	
	
	var SceneManager = function(){

	};

	SceneManager.prototype.registerScenes = function(){
		this.addScene(AppConsts.GAME_SCENE);
		this.addScene(AppConsts.COMM_SCENE);
		this.addScene(AppConsts.MAIN_SCENE);
		this.addScene(AppConsts.LEVELS_SCENE);
		this.addScene(AppConsts.TUTORIAL_SCENE);
	};

	SceneManager.prototype.addScene = function(key) {
		var scene = SceneFactory.getForKey(key);
		scene.navigationSignal.add(this.navigationClicked, this);
		Game.getInstance().state.add(key, scene);
	};
	
	SceneManager.prototype.go = function(s){
		this.transitions.to(s);
	};
	
	SceneManager.prototype.navigationClicked = function(data){
		var level, target;
		if(data.key === AppConsts.LEVELS_SCENE){
			if(data.button === "back"){
				this.go(AppConsts.MAIN_SCENE);
			}
			else{
				level = LevelData.LEVELS[data.index];
				CommsData.getInstance().setLevel(level);
				Game.startPhysics();
				this.go(AppConsts.GAME_SCENE);
			}
		}
		else if(data.key === AppConsts.MAIN_SCENE){
			if(data.button === "start"){
				this.go(AppConsts.LEVELS_SCENE);
			}
			else if(data.button === "tutorial"){
				this.go(AppConsts.TUTORIAL_SCENE);
			}
		}
		else if(data.key === AppConsts.COMM_SCENE){
			if(data.button === "back"){
				this.go(AppConsts.LEVELS_SCENE);
			}
			else if(data.button === "go"){
				Game.startPhysics();
				this.go(AppConsts.GAME_SCENE);
			}
		}
		else if(data.key === AppConsts.TUTORIAL_SCENE){
			this.go(AppConsts.MAIN_SCENE);
		}
		else if(data.key === AppConsts.GAME_SCENE){
			if(data.target === "comms"){
				this.go(AppConsts.COMM_SCENE);
			}
			if(data.target === "home"){
				this.go(AppConsts.MAIN_SCENE);
			}
			if(data.target === "levels"){
				this.go(AppConsts.LEVELS_SCENE);
			}
		}
	};

	SceneManager.prototype.preload = function(){
		this.transitions = Game.getInstance().plugins.add(PhaserStateTrans);
		this.transitions.settings({'duration': 300,	'properties': {'alpha': 0, 'scale': {'x': 1.05, 'y': 1.05}}});
		Game.getInstance().load.spritesheet('play', 'assets/images/buttons/yellowPlay.png', 120, 120);
		Game.getInstance().load.spritesheet('bulb', 'assets/images/buttons/yellowBulb.png', 120, 120);
		Game.getInstance().load.spritesheet('pause', 'assets/images/buttons/yellowPause.png', 120, 120);
		Game.getInstance().load.image('sky', 'assets/images/bg/sky.png');
		Game.getInstance().load.spritesheet('loaderBar', 'assets/images/other/bar.png', 500, 60);
		var testLabel = TextFactory.make(Game.cx() - 300, 0, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
	};

	SceneManager.prototype.load = function(s) {
		Game.getInstance().state.start(s);
	};

	SceneManager.prototype.create = function() {
		this.registerScenes();
		this.load(AppConsts.MAIN_SCENE);
	};
	
	return SceneManager;

});
	
	
define('app/boot/boot',['jquery', 'app/scenemanager/scenemanager', 'app/game'],

function($, SceneManager, Game) {
	
	
	
   	var Boot = function ( ){

    };
	
	Boot.launch = function(){
		var config, sceneManager;
		sceneManager = new SceneManager();
		config = {
			"create":$.proxy(sceneManager.create, sceneManager),
			"preload":$.proxy(sceneManager.preload, sceneManager)
		};
		Game.init(config);
	};
	
	Boot.resize = function(){
		console.log("resize");
	};
	
	Boot.start = function(){
		$(window).resize($.proxy(Boot.resize, this));
		$(document).ready(Boot.launch);
	};
	
	return Boot;
	
});





define('app/utils/implementations',['phaser'], function(Phaser){
	
	
	
	Phaser.Group.prototype.hitTest = function(input){
		var hits = false;
		var pointer = input.activePointer;
		this.forEachAlive(function(child){
			var localPoint = input.getLocalPosition(child, pointer);
			if(input.hitTest(child, pointer, localPoint)){
				hits = true;
			}
		});
		return hits;
	};

});
	
	






require.config({
	shim: {
		
	},
	paths: {
		jquery: 					'../bower_components/jquery/jquery',
		phaser: 					'lib/phaser.min',
		phaserstatetrans: 			'lib/phaser-state-transition.min'
	}
});

require(['phaser', 'app/boot/boot', 'app/utils/implementations'],

function (Phaser, Boot) {
	
	Boot.start();
	
});


define("main", function(){});

