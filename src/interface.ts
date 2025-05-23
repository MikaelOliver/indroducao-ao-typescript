interface Usuario{
    id: number
    name: string
    email: string
    idade?: number

}

function criarUsuario(usuario:Usuario): void {
    console.log(`Usuário ${usuario.name} criado`)
}


criarUsuario({id:18,name:"Lucas",email:"lucas@luk.com",idade: 19})