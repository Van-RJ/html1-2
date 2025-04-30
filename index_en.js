const app = new Vue({
    el: "#app",
    data: {
        message: "Photo Shoot Completed",
        seen: false
    },
    methods: {
        move() {
            const se = new Audio("camera.mp3")
            se.play()
            this.seen = true
            setTimeout(() => {
                this.message = "Photo Being Sent..."
            }, 800)
            setTimeout(() => {
                this.message = "Obtaining IP Adress in Progress..."
            }, 1600)
            setTimeout(() => {
                this.message = "Identifying Your Address from Your IP Address..."
            }, 2400)
            setTimeout(() => {
                this.message = "Information Being Sent..."
            }, 3200)
            setTimeout(() => {
                location.href = "invoice_en.html"
            }, 4000)
        }
    }
})