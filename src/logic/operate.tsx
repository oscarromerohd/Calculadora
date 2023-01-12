import Big from "big.js"

export default function operate(numeroUno: any, numeroDos: any, operador: any) {
    const uno = Big(numeroUno || "0")
    const dos = Big(numeroDos || (operador === "/" || operador === "*" ? "1" : "0"))

    if (operador === "+") return uno.plus(dos).toString()
    if (operador === "-") return uno.minus(dos).toString()
    if (operador === "*") return uno.times(dos).toString()
    if (operador === "/") return uno.div(dos).toString()

}