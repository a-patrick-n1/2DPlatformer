class Enemy
{
    constructor()
    {
        this.position = {
            x: 500,
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
        if (this.sides.bottom >= canvas.height)
        {
            this.velocity.y = 0;
            this.position.y = canvas.height - this.size;
        }
        else
        {
            this.velocity.y += 0.2;
        }
    }
}