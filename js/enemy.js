class Enemy
{
    constructor()
    {
        this.position = {
            x: 650,
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
    }
    draw()
    {
        c.fillStyle = "red";
        c.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
    update()
    {
        //update position based off velocity
        this.position.y += this.velocity.y
        this.sides.bottom = this.position.y + this.size;
        this.sides.right = this.position.x + this.size
        this.position.x += this.velocity.x;
        //stop character on screen bounds
        if (this.sides.bottom >= 650)
        {
            this.velocity.y = 0;
            this.position.y = 650 - this.size;
        }
        else
        {
            this.velocity.y += 0.2;
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
            return false
        }
    }
}