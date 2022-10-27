class Camel {

    constructor(ctx, camelPosX, camelPosY, camelWidth, camelHeight, camelSpeed, canvasSize) {
        this.ctx = ctx
        this.camelSize = {
            w: camelWidth,
            h: camelHeight
        }
        this.camelPos = {
            x: camelPosX,
            y: camelPosY
        }
        this.camelSpeed = camelSpeed
        this.camelImage = 'img/camel.png'
        this.imageInstance = undefined
        this.canvasSize = canvasSize

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.camelImage
    }

    draw() {
        this.ctx.drawImage(
            this.imageInstance,
            this.camelPos.x,
            this.camelPos.y,
            this.camelSize.w,
            this.camelSize.h
        )
    }

    move() {

        if (this.camelPos.x >= this.canvasSize.w - this.camelSize.w) {
            this.camelSpeed *= -1
        }

        if (this.camelPos.x < 0) {
            this.camelSpeed *= -1
        }

        this.camelPos.x += this.camelSpeed
    }
}