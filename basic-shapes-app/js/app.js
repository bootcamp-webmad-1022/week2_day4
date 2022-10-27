const app = {
    appName: 'Mi primer camnvas yabadu',
    version: '1.0.0',
    license: undefined,
    author: 'Germán Álvarez',
    description: 'First Canvas app for basic shapes drawing',
    ctx: undefined,
    canvasSize: {
        w: undefined, h: undefined
    },
    init() {
        this.setDimensions()
        this.setContext()
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
        console.log(this.ctx)
    },
    drawSquare() {
        this.ctx.fillRect(200, this.canvasSize.h / 2 - 50, this.canvasSize.w - 400, 100)
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(300, 300, 300, 300)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(500, 400, 200, 200)
    },
    drawLines() {
        this.ctx.beginPath()
        this.ctx.moveTo(100, 100)
        this.ctx.lineTo(100, 600)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.strokeStyle = 'red'
        this.ctx.lineWidth = 20

        this.ctx.beginPath()
        this.ctx.setLineDash([60, 20])      // <-- patrón de repetición
        this.ctx.moveTo(500, 100)
        this.ctx.lineTo(100, 600)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawArc() {
        this.ctx.fillStyle = 'red'
        this.ctx.lineWidth = 20
        this.ctx.strokeStyle = 'green'

        this.ctx.arc(200, 200, 100, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.stroke()
    },
    drawText(text) {
        this.ctx.font = '50px arial'
        this.ctx.fillText(text, 100, 100)
    }
}