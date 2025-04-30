const app = new Vue({
    el: "#app",
    data: {
        count: 3 * 24 * 60 * 60,
        color: "black"
    },
    created() {
        setInterval(() => {
            this.count = this.count - 1
            if (this.color === "black") {
                this.color = "rgb(255, 71, 71)";
            } else {
                this.color = "black"
            }
        }, 1000)
    }
})