document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('my_canvas');
    const ctx = canvas.getContext("2d");
    canvas.width = screen.width;
    canvas.height = screen.height;
    //console.log(canvas.width,canvas.height);
    //console.log(canvas.width/2,canvas.height*10/11);

    const pad = new Pad(canvas.width,canvas.height,parseInt(canvas.width)/2,parseInt(canvas.height)*(3/4),70,10);
    const ball = new Ball(canvas.width,canvas.height,parseInt(canvas.width)/2,parseInt(canvas.height)*(2/4),10,10);
    //const ship = new Ship(200.5,200,100,100);


    
    animate();
    //car.draw(ctx);
    function animate() {
        canvas.width = screen.width;
        canvas.height = screen.height;
        pad.update();
        //console.log(pad.x,pad.y);
        ball.update(pad.x,pad.y,pad.width,pad.height);
        ctx.save();
        ball.draw(ctx);
        pad.draw(ctx);
        ctx.restore();
        requestAnimationFrame(animate);
    }
})