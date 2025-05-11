class Sprite
{
    constructor({position, imageSrc})
    {
        this.position = position
        this.image = new Image()
        this.image.src = imageSrc
        this.current = 0
        this.elapsed = 0
        this.hold = 10
    }
    animate(object)
    {
        c.drawImage(
            this.image,
            this.current * (this.image.width / 6),
            0,
            this.image.width / 6,
            this.image.height,
            object.position.x,
            object.position.y,
            canvas.width / 20,
            canvas.width / 20
        )
        this.elapsed++
        if(this.elapsed % this.hold === 0)
        {
            if(this.current < 6 - 1)
            {
                this.current++
            }
            else
            {
                this.current = 0
            }
        }
        
    }
    draw()
    {

    }
}