const monthEl = document.getElementById("month")
const dayEl = document.getElementById("day")
const dayNum = document.getElementById("day-number")
const yearEl = document.getElementById("year")

const date = new Date()
const month = date.getMonth()
monthEl.innerHTML = date.toLocaleDateString("ro", {
    month: "long",
})

dayEl.innerHTML = date.toLocaleDateString("ro", {weekday: "long",})


dayNum.innerHTML = date.getDate()
yearEl.innerHTML = date.getFullYear()
