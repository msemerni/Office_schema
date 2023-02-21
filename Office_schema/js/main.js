$('.part').hover (
	function() {
		$('.description').html($(this).attr('description-data'));
		$('.description').fadeIn();
	},
	function() {
		$('.description').fadeOut(50);
	}
)
// Масштабирование
function zoom(event) {
	event.preventDefault();
	scale += event.deltaY * -0.005;
	// Restrict scale
	scale = Math.min(Math.max(.25, scale), 6);
	// Apply scale transform
	el.style.transform = `scale(${scale})`;
  }
  let scale = 1;
  const el = document.querySelector(".map");
  el.onwheel = zoom;

//   // Перемещение
// var div = document.getElementById('mySvg');
// var listener = function(e) {
//   div.style.left = e.pageX - 50 + "px";
//   div.style.top = e.pageY - 50 + "px";
// };

// mySvg.addEventListener('mousedown', e => {
//     document.addEventListener('mousemove', listener);
// });

// mySvg.addEventListener('mouseup', e => {
//     document.removeEventListener('mousemove', listener);
// });





//   var selected = null, // Object of the element to be moved
//     oldX, oldY, // Stores x & y coordinates of the mouse pointer
//     map, wrap; //stores elements


// //document.addEventListener('DOMContentLoaded', function () {
//     //load map element
//     map = document.getElementById('map');
//     //load map-wrap element
//     wrap = document.getElementById('bodyDiv');

//     //set it to center
//     map.style.top = (wrap.clientHeight - map.clientHeight) / 2 + 'px';
//     map.style.left = (wrap.clientWidth - map.clientWidth) / 2 + 'px';

//     // Bind the functions...
//     map.addEventListener('mousedown', function (e) {
//         initDrag(e, this);
//     });

//     document.addEventListener('mousemove', moveMap);
//     document.addEventListener('mouseup', offDrag);
// //});


// // Will be called when user starts dragging an element
// function initDrag(e, elem) {
//     //remember mouse coordinates
//     oldX = document.all ? window.event.clientX : e.pageX;
//     oldY = document.all ? window.event.clientY : e.pageY;

//     // Store the object of the element which needs to be moved
//     selected = elem;
// }

// // Will be called when user dragging an element
// function moveMap(e) {
//     //get new mouse coordinates
//     var newX = document.all ? window.event.clientX : e.pageX;
//     var newY = document.all ? window.event.clientY : e.pageY;

//     //if we have active element
//     if (selected !== null) {
//         //count deltas(old mouse coordinates minus new mouse coordinates)
//         var deltaX = newX - oldX;
//         var deltaY = newY - oldY;

//         //remember new mouse coordinates
//         oldX = newX;
//         oldY = newY;

//         //count new coordinates for map
//         var newMapX = selected.offsetLeft + deltaX;
//         var newMapY = selected.offsetTop + deltaY;


//         //fix for map not going out from the left border
//         if (newMapX > 0) {
//             newMapX = 0;
//             //@TODO: recount delta
//         }

//         //fix for map not to go out from the top border
//         if (newMapY > 0) {
//             newMapY = 0;
//             //@TODO: recount delta
//         }

//         //check if our new position isn't outside the wrap
//         if ((selected.width - Math.abs(newMapX) >= wrap.clientWidth) && (selected.height - Math.abs(newMapY) >= wrap.clientHeight)) {
//             //set new position to map
//             setNewPos(map, newMapX, newMapY);

//             //set new position to all tags on map
//             moveTags(deltaX, deltaY);
//         }
//     }
// }

// // Destroy the object when we are done
// function offDrag() {
//     selected = null;
// }

// //count new position of element
// function countNewPos(el, deltaX, deltaY) {
//     var newX = el.offsetLeft + deltaX;
//     var newY = el.offsetTop + deltaY;

//     //set new position to element
//     setNewPos(el, newX, newY);
// }

// //Set new position to element
// function setNewPos(el, newX, newY) {
//     el.style.left = newX + 'px';
//     el.style.top = newY + 'px';
// }

// //Sets new position for each tag
// function moveTags(deltaX, deltaY) {
//     //for each tag
//     // countNewPos(el, deltaX, deltaY);
// }














// 	// Перемещение

// 	// var img = document.getElementById('image');
// 	// var box = document.getElementById('box');
	
// 	// img.style.top = (box.clientHeight - img.clientHeight)/2 + 'px';
// 	// 	img.style.left = (box.clientWidth - img.clientWidth)/2 + 'px';
	
// 	// var selected = null, // Object of the element to be moved
// 	// 	x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
// 	// 	x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element
	
// 	// // Will be called when user starts dragging an element
// 	// function _drag_init(elem) {
// 	// 	// Store the object of the element which needs to be moved
// 	// 	selected = elem;
// 	// 	x_elem = x_pos - selected.offsetLeft;
// 	// 	y_elem = y_pos - selected.offsetTop;
// 	// }
	
// 	// // Will be called when user dragging an element
// 	// function _move_elem(e) {
// 	// 	x_pos = document.all ? window.event.clientX : e.pageX;
// 	// 	y_pos = document.all ? window.event.clientY : e.pageY;
// 	// 	if (selected !== null) {
// 	// 		var new_x = x_pos - x_elem,
// 	// 			new_y = y_pos - y_elem;
// 	// 		if((new_x < 0) && (new_y < 0)){
// 	// 			if((selected.width - Math.abs(new_x) >= box.clientWidth) && (selected.height - Math.abs(new_y) >= box.clientHeight)){
// 	// 				selected.style.left = new_x + 'px';
// 	// 				selected.style.top = new_y + 'px';
// 	// 			}
// 	// 		}
// 	// 	}
// 	// }
	
// 	// // Destroy the object when we are done
// 	// function _destroy() {
// 	// 	selected = null;
// 	// }
	
// 	//zoom
// 	// function zoom(e){
// 	// 	e = e || window.event;
// 	// 	var delta = e.deltaY || e.detail || e.wheelDelta;
// 	// 	var new_h = img.clientHeight - delta*0.5;
// 	// 	var new_w = img.clientWidth - delta*0.8;
// 	// 	img.style.height = new_h + 'px';
// 	// 	img.style.width = new_w + 'px';
// 	// 	img.style.top = (box.clientHeight - img.clientHeight)/2 + 'px';
// 	// 	img.style.left = (box.clientWidth - img.clientWidth)/2 + 'px';
// 	// }
	
// 	// // Bind the functions...
// 	// img.onmousedown = function () {
// 	// 	_drag_init(this);
// 	// 	return false;
// 	// };
	
	
// 	// if ('onwheel' in document) {
// 	// 	// IE9+, FF17+, Ch31+
// 	// 	box.addEventListener("wheel", zoom);
// 	// } else if ('onmousewheel' in document) {
// 	// 	// устаревший вариант события
// 	// 	box.addEventListener("mousewheel", zoom);
// 	// } else {
// 	// 	// Firefox < 17
// 	// 	box.addEventListener("MozMousePixelScroll", zoom);
// 	// }
	
// 	// document.onmousemove = _move_elem;
// 	// document.onmouseup = _destroy;

// //   var ball = document.querySelector(".map");

// //   ball.onmousedown = function(e) { // 1. отследить нажатие
  
// // 	// подготовить к перемещению
// // 	// 2. разместить на том же месте, но в абсолютных координатах
// // 	ball.style.position = 'absolute';
// // 	moveAt(e);
// // 	// переместим в body, чтобы мяч был точно не внутри position:relative
// // 	document.body.appendChild(ball);
  
// // 	//ball.style.zIndex = 0; // показывать мяч над другими элементами
  
// // 	// передвинуть мяч под координаты курсора
// // 	// и сдвинуть на половину ширины/высоты для центрирования
// // 	function moveAt(e) {
// // 	  ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px';
// // 	  ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px';
// // 	}
  
// // 	// 3, перемещать по экрану
// // 	document.onmousemove = function(e) {
// // 	  moveAt(e);
// // 	}
  
// // 	// 4. отследить окончание переноса
// // 	ball.onmouseup = function() {
// // 	  document.onmousemove = null;
// // 	  ball.onmouseup = null;
// // 	}
// //   }

  
// //   $(document).ready(function(){
// //     $('.maindiv').bind('wheel mousewheel', function(e){
// //         var delta;

// //         if (e.originalEvent.wheelDelta !== undefined)
// //             delta = e.originalEvent.wheelDelta;
// //         else
// //             delta = e.originalEvent.deltaY * -1;

// //             if(delta > 0) {
// //                 $(".maindiv").css("width", "+=10");
// //             }
// //             else{
// //                 $(".maindiv").css("width", "-=10");
// //             }
// //         });
// //     });

// //   /**
// //  * Масштабирование и перемещение
// //  * Работает только с зажатой кнопокой Alt
// //  */

// // (function($) {
// // 	var c = $('#map-container');
// // 	var i = c.find('> *').eq(0);
// // 	var ow = i.width();
// // 	var oh = i.height();
  
// // 	c.css({ height: i.css('height') });
  
// // 	  // Масштабирование
// // 	var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
// // 	c.bind(mousewheelevt, function(e) {
// // 	  if (e.altKey) {
// // 		e.preventDefault();
  
// // 		var evt = window.event || e; //equalize event object
// // 		evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible
// // 		var delta = evt.detail ? evt.detail * (-40) : evt.wheelDelta; //check for detail first, because it is used by Opera and FF
  
// // 		if (delta > 0) {
// // 		  i.animate({width: '+=3%'}, 'fast');
// // 		} else if (parseInt(i.width()) >= ow) {
// // 		  i.animate({width: '-=3%'}, 'fast');
// // 		}
// // 	  }
// // 	});
	
// // 	// Перетаскивание
// // 	i.mousedown(function(e) {
// // 	  var left = parseFloat(i.css('left'));
// // 	  var top = parseFloat(i.css('top'));
// // 	  var startX = e.screenX;
// // 	  var startY = e.screenY;
  
// // 	  i.bind('mousemove', function (e) {
// // 		if (e.altKey) {
// // 		  var l = left + (e.screenX - startX);
// // 		  var t = top + (e.screenY - startY);
  
// // 		  if (l <= 0 && parseInt(i.width()) + l >= ow) i.css({ left: l });
// // 		  if (t <= 0 && parseInt(i.height()) + t >= oh) i.css({ top: t });
// // 		}
// // 	  });
// // 	  i.bind('mouseup', function () {
// // 		i.unbind('mousemove');
// // 		i.unbind('mouseup');
// // 	  });
// // 	});
// //   })(jQuery);