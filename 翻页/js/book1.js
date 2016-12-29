$(function(){
	var index=0;
	for(var i=0;i<$('.next').length;i++){
		$('.next').eq(i).css("z-index",6-i*2);
		$('.next .text').eq(i).css("z-index",6-i*2);
		$('.next .imgBox').eq(i).css("z-index",5-i*2);
	}
	$('.rightBtn').on('click',function(){
		if(index<3){
			runNext(index);
			index++;	
		}
	})
	function runNext(pageNum){
		$('.next').eq(pageNum).addClass('active');
		indexChange(pageNum,$('.next').eq(pageNum));
	}
	function indexChange(num,element){
		if(num>1){
			element.css("z-index",2+2*num);
		}
		setTimeout(function(){
			if(num<=1){
				element.css("z-index",2+2*num);
			}
			element.children('.text').css("z-index",1+2*num);
			element.children('.imgBox').css("z-index",2+2*num);
		},1000)
		
	}
	$('.leftBtn').on('click',function(){
		if(index>=0){
			index--;
			runLast(index);
		}
	})
	function runLast(pageNum){
		$('.next').eq(pageNum).removeClass('active');
		indexChange_(pageNum,$('.next').eq(pageNum));
	}
	function indexChange_(num,element){
		if(num<1){
			element.css('z-index',6-2*num);
		}
		setTimeout(function(){
			if(num>=1){
				element.css('z-index',6-2*num);
			}
			element.children('.text').css('z-index',6-2*num);
			element.children('.imgBox').css('z-index',5-2*num);
		},1000)
	}

})