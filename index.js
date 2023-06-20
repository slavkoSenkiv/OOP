function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw ' + radius + ' radius');
        }
    }

}

const circle = createCircle(1);
circle.draw();