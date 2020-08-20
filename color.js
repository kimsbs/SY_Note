function setcolor(back, color, active_color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    
    document.querySelector('body').style.backgroundColor = back;
    document.querySelector('body').style.color = color;
    while (i < alist.length) {
        alist[i].style.color = color;
        console.log(alist[i]);
        i = i + 1;
      }
      document.querySelector('.active').style.color = active_color; 
    }
  function nightDayHandler(self) {
    if (self.value === 'night') {
      setcolor('black','green','yellow'); 
      self.value = 'day';
    }
    else {
      setcolor('white','black','red');
      self.value = 'night';      
    }
  }