let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let player = new Player();
let enemies = []
let enemy = new Enemy();

//animation loop
function animate()
{
    //adjustable window
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    player.size = canvas.width / 20;
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

    projectiles.forEach(p => {
        p.velocity.x = 20;
        p.draw()
        p.update()
        if(p.position.x >= canvas.width)
        {
            projectiles.shift()
        }
        if(enemy.isTouching(p))
        {
            console.log("hit")
        }
    });

    window.requestAnimationFrame(animate);
}

animate();