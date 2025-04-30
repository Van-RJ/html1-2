const app = new Vue({
    el: "#app",
    data: {
        message: "照片已拍摄",
        seen: false
    },
    methods: {
        move() {
            const se = new Audio("camera.mp3")
            se.play()
            this.seen = true
            setTimeout(() => {
                this.message = "照片上传中..."
            }, 800)
            setTimeout(() => {
                this.message = "正在获取 IP 地址..."
            }, 1600)
            setTimeout(() => {
                this.message = "正在通过 IP 地址获取位置信息..."
            }, 2400)
            setTimeout(() => {
                this.message = "信息上传中..."
            }, 3200)
            setTimeout(() => {
                location.href = "invoice_zh-CN.html"
            }, 4000)
        }
    }
})