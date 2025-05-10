class Projectile
{
    constructor({position})
    {
        this.position = position
        this.velocity = {
            x: 0,
            y: 0
        }
        this.sides = {
            bottom: this.position.y + 50,
            right: this.position.x + 20
        }
    }
    draw()
    {
        c.fillStyle = "green";
        c.fillRect(this.position.x, this.position.y, 50, 20);
    }
    update()
    {
        //update position based off velocity
        this.position.x += this.velocity.x
        this.sides.bottom = this.position.y + 50
        this.sides.right = this.position.x + 20
    }
}