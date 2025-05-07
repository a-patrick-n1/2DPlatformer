window.addEventListener("keydown", event => {
    switch(event.key)
    {
        case "a":
            player.moving.left = true;
            break;
        case "d":
            player.moving.right = true;
            break;
        //jump
        case "w":
            if(player.jumps > 0)
            {
                player.velocity.y = -10;
                player.jumps -= 1;
            }
            break
        case "s":
            player.velocity.y = 30;
            break;
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
    }
})