

// GENERICS

function primeiroElemento<T>(arr: T[]) : T | undefined {
return arr[0]
}

const numero = primeiroElemento([1,2,3,4])