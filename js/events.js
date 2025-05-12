let projectiles = []
let lastKey = ""
window.addEventListener("click", event => {
    if(lastKey === "a")
    {
        projectiles.push(new Projectile({
            position: {
                x: player.position.x, 
                y: player.position.y + player.size / 2
            },
            velocity: {
                x: -30,
                y: 0
            } 
        }))
    }
    else if(lastKey === "d")
    {
        projectiles.push(new Projectile({
            position: {
                x: player.position.x, 
                y: player.position.y + player.size / 2
            },
            velocity: {
                x: 30,
                y: 0
            }
        }))
    }
})
window.addEventListener("keydown", event => {
    switch(event.key)
    {
        case "a":
            player.moving.left = true;
            lastKey = "a"
            break;
        case "d":
            player.moving.right = true;
            lastKey = "d"
            break;
        //jump
        case "w":
            if(player.jumps > 0)
            {
                player.velocity.y = -6;
                player.jumps -= 1;
            }
            break
        case "s":
            player.velocity.y = 30;
            break;
        case "A":
            player.moving.left = true;
            lastKey = "a"
            break;
        case "D":
            player.moving.right = true;
            lastKey = "d"
            break;
        //jump
        case "W":
            if(player.jumps > 0)
            {
                player.velocity.y = -6;
                player.jumps -= 1;
            }
            break
        //ground slam
        case "S":
            player.velocity.y = 30;
            break
        //shoot
        case " ":
            if(lastKey === "a")
            {
                projectiles.push(new Projectile({
                    position: {
                        x: player.position.x, 
                        y: player.position.y + player.size / 2
                    },
                    velocity: {
                        x: -30,
                        y: 0
                    } 
                }))
            }
            else if(lastKey === "d")
            {
                projectiles.push(new Projectile({
                    position: {
                        x: player.position.x, 
                        y: player.position.y + player.size / 2
                    },
                    velocity: {
                        x: 30,
                        y: 0
                    }
                }))
            }
            break
    }
})
window.addEventListener("keyup", event => {
    switch(event.key)
    {
        case "a":
            player.moving.left = false;
            break;
        case "d":
            player.moving.right = false;
            break;
        case "A":
            player.moving.left = false;
            break;
        case "D":
            player.moving.right = false;
            break;
    }
})