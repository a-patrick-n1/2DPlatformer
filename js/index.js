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
let HealthUI = new Sprite({
    imageSrc: "imgs/HealthUI.png",
    frames: 1,
    size: 0.8
})
let enemies = []
enemies.push(new Enemy({position: {x:600, y:0}}))
enemies.push(new Enemy({position: {x:800, y:0}}))
let invincibleFrames = 300

//animation loop
function animate()
{
    //adjustable window
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    player.size = canvas.width / 20;
    //background
    c.fillStyle = "gray";
    c.fillRect(0, 0, canvas.width, canvas.height);

    //only update game if player is alive
    if(player.health >= 1)
    {
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
        enemies.forEach(enemy => {
            if(player.isTouching(enemy))
            {
                if(!player.invincible)
                {
                    player.health -= 20
                    document.querySelector('#healthBar').style = `width: ${player.health * 3}px`
                    invincibleFrames = 180
                    player.invincible = true;
                }
            }
        });
        //add delay to getting hit
        invincibleFrames--
        if(invincibleFrames <= 0)
        {
            player.invincible = false
        }

        //projectile firing
        projectiles.forEach(p => {
            p.draw()
            p.update()
            if(p.position.x >= canvas.width || p.position.x <= 0)
            {
                projectiles.splice(projectiles.indexOf(p), 1)
            }
            //check if projectile is touching enemy
            enemies.forEach(enemy => {
                if(enemy.isTouching(p))
                {
                    projectiles.splice(projectiles.indexOf(p), 1)
                    enemy.health -= 20
                }
                //enemy death
                if(enemy.health <= 0)
                {
                    enemies.splice(enemies.indexOf(enemy), 1)
                }
            });
        });
        //projectile delay
        player.shotDelay--

        //enemy display
        enemies.forEach(enemy => {
            enemy.draw()
            enemy.update()
        });
        playerSprite.animate(player)
        player.update()
    }
    else
    {
        //death animation
        playerSprite.frames = 1
        playerSprite.size = 10
        playerSprite.image.src = "imgs/death.png"
        playerSprite.animate(player)
    }
    HealthUI.animateFixed(0, 0)
    window.requestAnimationFrame(animate);
}

animate();