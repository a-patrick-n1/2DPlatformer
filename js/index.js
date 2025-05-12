let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let player = new Player();
let playerSprite = new Sprite({
    imageSrc: "imgs/idleRight.png",
    frames: 6,
    size: 20
})
let deathSprite = new Sprite({
    imageSrc: "imgs/death.png",
    frames: 1,
    size: 8
})
let enemies = []
let enemy = new Enemy();
let invincibleFrames = 300

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

    //player enemy interaction
    if(player.isTouching(enemy))
    {
        if(!player.invincible)
        {
            player.health -= 20
            invincibleFrames = 1
            player.invincible = true;
        }
    }
    invincibleFrames--
    if(invincibleFrames <= 0)
    {
        player.invincible = false
    }
    console.log(player.health)

    //projectile firing
    projectiles.forEach(p => {
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

    enemy.draw()
    enemy.update()

    if(player.health >= 0)
    {
        playerSprite.animate(player)
        player.update()
        window.requestAnimationFrame(animate);
    }
    else
    {
        deathSprite.animate(player)
    }

}

animate();
