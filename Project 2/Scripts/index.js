
document.addEventListener("DOMContentLoaded", () => {
    
    // Obtain inputs
    let input1 = document.getElementById("num1")
    let input2 = document.getElementById("num2")

    // Obtain buttons
    let sum = document.getElementById("sum")
    let rest = document.getElementById("rest")
    let mult = document.getElementById("mult")
    let div = document.getElementById("div")

    // Obtain result containers
    let result = document.getElementById("result")

    // --- Funcion Sumar ---
    sum.addEventListener("click", () => {
        let n1 = parseInt(input1.value)
        let n2 = parseInt(input2.value)

        let res = n1 + n2

        result.textContent = res
    })

    // --- Funcion Restar ---
    rest.addEventListener("click", () => {
        let n1 = parseInt(input1.value)
        let n2 = parseInt(input2.value)

        let res = n1 - n2

        result.textContent = res
    })

    // --- Funcion Multiplicar ---
    mult.addEventListener("click", () => {
        let n1 = parseInt(input1.value)
        let n2 = parseInt(input2.value)

        let res = n1 * n2

        result.textContent = res
    })

    // --- Funcion Dividir ---
    div.addEventListener("click", () => {
        let n1 = parseInt(input1.value)
        let n2 = parseInt(input2.value)
        
        let res

        if (n2 == 0) {
            res = "Imposible dividir entre cero."
        } else {
            res = n1 / n2
        }

        result.textContent = res
    })
})