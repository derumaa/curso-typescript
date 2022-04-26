//Tipando objetos:

//Parte 1
//mostrar a cidade de um usuário
    // type UF = 'SP' | 'MG' | 'RJ'

    // interface User {
    //     name: string,
    //     address?: {
    //         city: string,
    //         UF: UF
    //     }
    // }

    // function showCity(user: User) {
    //     return user.address?.city
    // }

    // const response = showCity({
    //     name: 'Delmar',
    //     address: {
    //         city: 'sp',
    //         UF: 'SP'
    //     }
    // })

    // console.log(response)

//Parte 2
    // interface User {
    //     name?: string
    // }

    // function showCity(user: User) {
    //     return user.name?.toLowerCase()
    // }

//Parte 3
    // interface User {
    //     readonly name: string
    //     age: number
    // }

    // let user: User = {
    //     name: 'Delmar',
    //     age: 23
    // }

    // user.age = 24
    // user.name = 'Lucas'

//Extends
    // interface Veiculo {
    //     rodas: number
    //     acelerar: () => void
    //     frear: () => void
    // }

    // interface Moto extends Veiculo {
    //     capacete: boolean
    //     empinar: () => void
    // }

    // let bross: Moto
    // bross.acelerar

//Implements
    // interface Veiculo {
    //     rodas: number
    //     acelerar: () => void
    //     frear?: () => void
    // }

    // class CriarVeiculo implements Veiculo {
    //     rodas: number

    //     constructor(rodas: number){
    //         this.rodas = rodas
    //     }

    //     acelerar() {
    //         console.log('teste')
    //     }
    // }

//Pick
    // interface Post {
    //     id: number
    //     title: string
    //     description: string
    // }

    // type PostPreview = Pick<Post, 'id' | 'title'> //pega dados especificos da interface

    // let post: PostPreview
    // post.description //nao pegamos esta propriedade no pick, por isso nao aparece

//Omit
    // interface Post {
    //     id: number
    //     title: string
    //     description: string
    // }

    // type PostPreview = Omit<Post, 'id' | 'title'> //estamos omitindo id e title

    // let post: PostPreview
    // post.description

//permitir JS no import: precisa ativar o allowJS no tsconfig
    // import { sum } from "./calculator";

    // console.log(sum(5,5))

//lidando com dependencias:  
//se importarmos uma dependencia que nao tenha tipagem, podemos tentar npm i @types/<nome da dependencia> / ou a melhor opção seria criar um arquivo global.d.ts, onde declarariamos que tal dependencia é um modulo TS: 
//exemplo: declare module '<nome da dependencia>'
//no ultimo caso, é necessario consultar a documentacao

//Decorator
//não entendi rs