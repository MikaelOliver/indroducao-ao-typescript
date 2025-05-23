
// let ativo : boolean = false

// let nome: number


// const notas: number[] = []




// // function soma(a:number, b: number): number {
// //     return a + b
// // }



function calcularMedia(notas: number[]): number {

    const total: number = notas.reduce((acc: number, nota: number) => acc + nota, 0)

    return total / notas.length
}


console.log(calcularMedia([10,4,5,7]))