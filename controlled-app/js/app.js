const app = {
    appName: 'Mi primer canvas yabadu',
    version: '1.0.0',
    license: undefined,
    author: 'Germán Álvarez',
    description: 'Second Canvas app for basic shapes controlling',
    ctx: undefined,
    imageInstance: undefined,
    canvasSize: {
        w: undefined, h: undefined
    },
    ballData: {
        pos: { x: 300, y: 300 },
        size: { w: 100, h: 100 },
        image: 'img/ball.png'
    },
    init() {
        this.setDimensions()
        this.setContext()
        this.createBall()
        this.setEventHandlers()
        this.start()
    },
    setDimensions() {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        document.querySelector('#myCanvas').setAttribute('height', this.canvasSize.h)
        document.querySelector('#myCanvas').setAttribute('width', this.canvasSize.w)
    },
    setContext() {
        this.ctx = document.querySelector('#myCanvas').getContext('2d')
    },
    setEventHandlers() {
        document.onkeydown = event => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.ballData.pos.x -= 10
                    break;
                case 'ArrowRight':
                    this.ballData.pos.x += 10
                    break;
            }
        }
    },
    createBall() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.ballData.image
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 100)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawAll() {
        this.ctx.drawImage(
            this.imageInstance,
            this.ballData.pos.x,
            this.ballData.pos.y,
            this.ballData.size.w,
            this.ballData.size.h
        )
    }
}