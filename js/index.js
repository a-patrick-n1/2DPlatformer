let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let player = new Player();
let playerSprite = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: "imgs/idleRight.png"
})
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
    c.fillStyle = "blue";
    c.fillRect(0, 0, canvas.width, canvas.height);

    //player movement
    if(player.moving.left)
    {
        playerSprite.image.src = "imgs/idleLeft.png"
        player.velocity.x = -5;
    } else if(player.moving.right)
    {
        playerSprite.image.src = "imgs/idleRight.png"
        player.velocity.x = 5;
    }
    else
    {
        player.velocity.x = 0;
    }

    //projectile firing
    projectiles.forEach(p => {
        p.velocity.x = 20
        p.draw()
        p.update()
        if(p.position.x >= canvas.width || p.position.x <= 0)
        {
            projectiles.shift()
        }
        if(enemy.isTouching(p))
        {
            console.log("hit")
        }
    });

    playerSprite.animate(player)
    player.update()

    enemy.draw()
    enemy.update()

    window.requestAnimationFrame(animate);
}

animate();