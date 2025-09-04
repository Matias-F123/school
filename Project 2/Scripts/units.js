
document.addEventListener("DOMContentLoaded", () => {
    let medidas = ["km", "hm", "dam", "m", "dm", "cm", "mm"]

    let sel1 = document.getElementById("type1")
    let sel2 = document.getElementById("type2")

    let num1 = document.getElementById("num1")

    let resu = document.getElementById("resultado")
    let conv = document.getElementById("conv")

    medidas.forEach(medida => {
        sel1.innerHTML = sel1.innerHTML + "<option value='" + medidas.indexOf(medida) + "'>" + medida + "</option>"
        sel2.innerHTML = sel1.innerHTML + "<option value='" + medidas.indexOf(medida) + "'>" + medida + "</option>"
    });

    conv.addEventListener("click", () => {
        val = 10 ** (sel2.value - sel1.value)
        resu.textContent = "Resultado: " + String(num1.value * val) + medidas[sel2.value]
    })
})