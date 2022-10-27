const app = {
    appName: 'Mi primer canvas yabadu',
    version: '1.0.0',
    license: undefined,
    author: 'Germán Álvarez',
    description: 'Second Canvas app for basic shapes controlling',
    ctx: undefined,
    camels: [],
    canvasSize: {
        w: undefined, h: undefined
    },
    framesCounter: 0,
    init() {
        this.setDimensions()
        this.setContext()
        this.createCamels()
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
    createCamels() {
        this.camels.push(
            new Camel(this.ctx, 0, 100, 100, 100, 10, this.canvasSize),
            new Camel(this.ctx, 0, 300, 60, 60, 14, this.canvasSize),
            new Camel(this.ctx, 0, 450, 80, 80, 8, this.canvasSize),
            new Camel(this.ctx, 0, 550, 120, 120, 4, this.canvasSize),
        )
    },
    start() {
        setInterval(() => {

            this.framesCounter++

            if (this.framesCounter % 120 === 0) this.createObstacle()

            this.clearAll()
            this.moveAll()
            this.drawAll()
        }, 20)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    moveAll() {
        this.camels.forEach(elm => elm.move())
    },
    drawAll() {
        this.camels.forEach(elm => elm.draw())
    },
    createObstacle() {
        console.warn('AQUI TE CREAS UN OBSTACULO')
    }
}