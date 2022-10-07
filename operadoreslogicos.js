function compras (trabalho1, trabalho2) {
    const comprarsorvete = trabalho1 || trabalho2 // || significa OU
    const comprartv50 = trabalho1 && trabalho2 // && significa E
    // const comprartv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprartv32 = trabalho1 != trabalho2
    const vidasaudavel = !comprarsorvete // operador unário

    return {comprarsorvete, comprartv50, comprartv32, vidasaudavel }

}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
