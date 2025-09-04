
document.addEventListener("DOMContentLoaded", () => {
    let nums = document.getElementById("nums")

    let par = document.getElementById("pares")
    let impar = document.getElementById("impares")

    let gen = document.getElementById("gen")
    let type = document.getElementById("type")

    let clear = document.getElementById("clear")

    par.addEventListener("click", () => {
        let numeros = String(nums.value).split(" ")
        i = 0
        let res = ""
        while (i < numeros.length) {
            if (numeros[i] % 2 != 0) {
                res = res + numeros[i] + " "
            }
            i = i + 1
        }
        nums.value = res
    })

    impar.addEventListener("click", () => {
        let numeros = String(nums.value).split(" ")
        i = 0
        let res = ""
        while (i < numeros.length) {
            if (numeros[i] % 2 == 0) {
                res = res + numeros[i] + " "
            }
            i = i + 1
        }
        nums.value = res
    })

    gen.addEventListener("click", () => {
        let tipo = type.value
        switch (tipo) {
            case "Pares":
                for (let i = 0; i < 100; i = i + 2) {
                    nums.value = nums.value + i + " ";
                }
                break;
            
            case "Impares":
                for (let i = 0; i < 100; i++) {
                    if (i % 2 != 0) {
                        nums.value = nums.value + i + " ";
                    }
                }
                break;
            
            default:
                for (let i = 0; i < 100; i++) {
                    nums.value = nums.value + i + " ";
                }
                break;
        }
    })

    clear.addEventListener("click", () => {
        nums.value = ""
    })
})