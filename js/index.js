let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let player = new Player();
let enemy = new Enemy();

//animation loop
function animate()
{
    //adjustable window
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    //background
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);

    //player movement
    if(player.moving.left)
    {
        player.velocity.x = -5;
    } else if(player.moving.right)
    {
        player.velocity.x = 5;
    }
    else
    {
        player.velocity.x = 0;
    }

    player.draw("blue")
    player.update()
    enemy.draw()
    enemy.update()
    window.requestAnimationFrame(animate);
}

animate();