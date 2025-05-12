class Sprite
{
    constructor({position, imageSrc, frames})
    {
        this.position = position
        this.image = new Image()
        this.image.src = imageSrc
        //current frame, number of frames passed, and how long before next image
        this.current = 0
        this.elapsed = 0
        this.hold = 10
        this.frames = frames
    }
    //animate sprites
    animate(object)
    {
        c.drawImage(
            //crop
            this.image,
            this.current * (this.image.width / this.frames),
            0,
            this.image.width / this.frames,
            this.image.height,
            //position and size
            object.position.x,
            object.position.y,
            canvas.width / 20,
            canvas.width / 20
        )
        //increase elapsed for each frame then modulus by the delay
        this.elapsed++
        if(this.elapsed % this.hold === 0)
        {
            if(this.current < this.frames - 1)
            {
                this.current++
            }
            else
            {
                this.current = 0
            }
        }
        
    }
    //add still sprites
    draw()
    {

    }
}