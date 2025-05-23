
//  MINHA FORMA


function invertePar<T, U>(par: [T, U]): [U, T] {
    const reverso: [U, T] = [par[1], par[0]];
    return reverso;
}


const inverte = invertePar([1,"a"])

console.log(inverte)


//  FORMA DO JONAS

function reverseTupla<T,U>(a:T , b:U) :[U,T]{
    return [b, a]
}


console.log(reverseTupla("a",1))