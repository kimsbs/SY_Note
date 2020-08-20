function setcolor(back, color, active_color) {
    var alist = document.querySelectorAll('a');
    var i = 0;

    $('body').css("backgroundColor", back);
    $('body').css("color", color);
    $('a').css("color", color);
    $('.active').css("color", active_color);

}

function nightDayHandler(self) {
    if (self.value === 'night') {
        setcolor('black', 'green', 'yellow');
        self.value = 'day';
    }
    else {
        setcolor('white', 'black', 'red');
        self.value = 'night';
    }
}