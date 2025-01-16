type TipoFiltrarNumerosMayores = (lista : number[], limite : number) => number[]

export const filtrarNumerosMayores : TipoFiltrarNumerosMayores = (lista, limite) => {
    const listaFiltrada : number[] = []

    /*for (let i=0; i < lista.length ; i++) {
        const num = lista[i]
        if (num > limite) {
            listaFiltrada.push(num)
        }
    }*/

    for (let num of lista) {
        if (num > limite) {
            listaFiltrada.push(num)
        }
    }

    return listaFiltrada
}

export const filtrarNumerosMayoresFuncional = (lista : number[], limite : number) => {
    return lista.filter((elem : number) => {
        return elem > limite
    })

    /*const predicado = (elem : number) => {
        if (elem > limite) {
            return true
        } else {
            return false
        }
    }
    const listaFiltrada = lista.filter(predicado)
    return listaFiltrada*/
}

export const calcularPromedio = (lista : number[]) => {
    let total = 0
    for (let num of lista){
        total += num
    }

    return total / lista.length
}