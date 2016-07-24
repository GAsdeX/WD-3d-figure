$(function() {

    var deg = 0,
        intervalId = 0,
        action = false;

    function setRotate(deg) {
        $('.container').css('transform', 'rotateY(' + deg + 'deg) rotateX(' + deg + 'deg)');
    }

    $('#start').click(function() {
        if (!action) {
            intervalId = setInterval(function() {
                deg++;
                setRotate(deg);
                if (deg == 360) {
                    deg = 0;
                }
            }, 16);
            action = true;
        }
    });
    

    $('#pause').click(function() {
        clearInterval(intervalId);
        action = false;
    });

    $('#stop').click(function() {
        clearInterval(intervalId);
        deg = 0;
        setRotate(deg);
        action = false;
    });

    $('.container').click(function() {
        
        if (action) {
            clearInterval(intervalId);
            action = false;
        } else {
            intervalId = setInterval(function() {
                deg++;
                setRotate(deg);
                if (deg == 360) {
                    deg = 0;
                }
            }, 16);
            action = true;
        }
        $(this).mousemove(function(event){
            var rotX = event.clientX;
            $('.container').css('transform', 'rotateY(' + rotX + 'deg) ');
            
        })
    });

})
