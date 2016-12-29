
		var img=document.querySelectorAll('.img');
		var point=document.querySelectorAll('.point');
		var container=document.querySelector('.container');
		var index=0;
		function lunbo(){
			index=index<img.length?index:0;
			index++;
			console.log("index: "+index);
			for(var i=0;i<img.length;i++){
				if(img[index-1]==img[i]){
					point[index-1].classList.add('active');
					img[index-1].classList.add('show')
				}else{
					point[i].classList.remove('active');
					img[i].classList.remove('show')
				}
			}
		}
		function pointClick(){
			for(var i=0;i<point.length;i++){
				point[i].index=i;
				point[i].onmousedown=function(){
					index = this.index;
					console.log("pcindex:"+index)
					for(var j=0;j<point.length;j++){
						if(j==this.index){
							img[index].classList.add('show')
							this.classList.add('active');
						}
						else{
							img[j].classList.remove('show')
							point[j].classList.remove('active');
						}
					}
					if(timer){
						console.log('clear timer');
						clearInterval(timer);
						timer=null;
						console.log(timer)
					}
				}
				point[i].onmouseup=function(){
					console.log("1")
					if(!timer){
						timer=setInterval(lunbo,3000)
						console.log(timer)
					}
				}
			}
		}
		var timer=setInterval(lunbo,3000);
		pointClick();
		var info=new Vue({
			el:'.main',
			data:{
				txt:[
					{text:'啦啦啦啦啦啦啦啦啦'},
					{text:'啦啦啦啦啦啦啦啦啦'},
					{text:'啦啦啦啦啦啦啦啦啦'},
					{text:'啦啦啦啦啦啦啦啦啦'},
					{text:'啦啦啦啦啦啦啦啦啦'},
					{text:'啦啦啦啦啦啦啦啦啦'},
					{text:'啦啦啦啦啦啦啦啦啦'},
					{text:'啦啦啦啦啦啦啦啦啦'},
					{text:'啦啦啦啦啦啦啦啦啦'},
				]
			}
		})

		container.addEventListener('touchstart',function(ev){
			var evObj=window.event||ev;
			var star=evObj.touches[0];
			oldX=star.pageX;
			oldY=star.pageY;
			console.log(evObj.touches[0])
		},false)
		document.addEventListener('touchmove',touchMoveFun,false);
		function touchMoveFun(){
			var evObj=window.event||ev;
			var star=evObj.touches[0];
			currX=star.pageX;
			currY=star.pageY;
			if(currX-oldX>0){
				
			}
			if(currX-oldX<0){
			}
		}