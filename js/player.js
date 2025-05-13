class Player
{
    constructor()
    {
        this.position = {
            x: 0,
            y: 0,
        },
        this.velocity = {
            x: 0,
            y: 0
        },
        this.size = canvas.width / 20;
        this.sides = {
            bottom: this.position.y + this.size,
            right: this.position.x + this.size
        }
        this.moving = {
            left: false,
            right: false
        }
        this.jumps = 2;
        this.invincible = false
        this.health = 100
        this.shotDelay = 30
    }
    update()
    {
        //update position based off velocity
        this.position.y += this.velocity.y
        this.sides.bottom = this.position.y + this.size;
        this.sides.right = this.position.x + this.size
        this.position.x += this.velocity.x;
        //stop character on screen bounds
        if (this.sides.bottom >= canvas.height)
        {
            this.velocity.y = 0;
            this.position.y = canvas.height - this.size;
            this.jumps = 2;
        }
        else
        {
            this.velocity.y += 0.2;
        }
        if(this.position.x < 0)
        {
            this.velocity.x = 0;
            this.position.x = 0
        }
        if(this.sides.right > canvas.width)
        {
            this.velocity.x = 0
            this.position.x = canvas.width - this.size
        }
    }
    isTouching(object)
    {
        //right side collision
        if(this.sides.right >= object.position.x && this.sides.right <= object.sides.right && this.sides.bottom >= object.position.y && this.position.y <= object.sides.bottom)
        {
            return true
        }
        //left side collison
        else if(this.position.x <= object.sides.right && this.position.x >= object.position.x && this.sides.bottom >= object.position.y && this.position.y <= object.sides.bottom)
        {
            return true
        }
        else
        {
            return false;
        }
    }
}