function game(obj,obj1,obj2){
	this.obj=obj;
	this.obj1=obj1;
	this.obj2=obj2;
 	this.letter=["A","D","S","F","G","H","J","K","L","P","O","I","U","Y","T","R","E","B"];
 	this.speed=3;
 	this.num=5;
 	this.score=0;
 	this.lift=10;
 	this.letterArr=[];
 	this.cw=document.documentElement.clientWidth;
 	this.ch=document.documentElement.clientHeight;
 	this.getLetter(this.num)
 	this.key();
 	this.star();
 	this.flag=true;
}
game.prototype={
	getLetter:function (num){
		for(var i=0;i<num;i++){
			var div=document.createElement('div');
			var img=['url(./images/1.png)','url(./images/2.png)','url(./images/3.png)','url(./images/4.png)']
			div.style.cssText="width:70px;font-size:40px;font-weight:bold;height:70px;background-position:center center;text-align:center;color:#fff;border-radius:50%;background-size:75px 70px;line-height:70px;position:absolute;left:"+(Math.random()*(this.cw-400)+200)+"px;top:"+(Math.random()*(-50)-90)+"px";
			div.innerHTML=this.letter[Math.floor(Math.random()*this.letter.length)];
			div.style.backgroundImage=img[Math.floor(Math.random()*img.length)]
			this.obj.appendChild(div);
			this.letterArr.push(div);
			
		}
	},
	play:function(){		
	var that=this;
	var t=setInterval(aa,50);
	function aa(){
		if(that.letterArr.length<that.num){
			that.getLetter(that.num-that.letterArr.length);
		}
		for(var i=0;i<that.letterArr.length;i++){
			that.letterArr[i].style.top=that.letterArr[i].offsetTop+that.speed+"px"	
			if((that.letterArr[i].offsetTop+that.speed)>that.ch){
					that.obj.removeChild(that.letterArr[i]);
					that.letterArr.splice(i,1)
				}
			
			}

			that.obj2.onclick=function(){
			clearInterval(t);
			that.flag=true;
			}
		}
	},
	key:function(){
		var that=this;
		document.onkeydown=function(e){
			var ev=e||window.event;
			var left=String.fromCharCode(ev.keyCode);
			for(var i=0;i<that.letterArr.length;i++){
				if(that.letterArr[i].innerHTML==left){
					that.obj.removeChild(that.letterArr[i]);
					that.letterArr.splice(i,1)
					// that.score+=1;
					break;
				}
			}
		}
	},
	star:function(){
		// console.log(this);
		var that=this;
		// var flag=true;
		this.obj1.onclick=function(){
			if(!that.flag){
				return;
			
			}

			that.play();
			that.key();
			that.flag=false;
			// that.obj1.style.display="none";
		}
	}
	/*end:function(){
		var that=this;
		var flag=true;
		this.obj2.onclick=function(){
			// console.log(this)
			// flag=false;
			// if(!flag){
			// 	return;
			// }
			// that.play();
			// that.key();
			clearInterval(t);
		}
	}*/
}


