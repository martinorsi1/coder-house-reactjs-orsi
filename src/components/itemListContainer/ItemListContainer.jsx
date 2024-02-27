import './itemListContainer.css'
export const ItemLitsContainer = (props) => {
    console.log(props)
    return(
        <div className="greeting">
            <h1>{props.greeting}</h1>
        </div>
    )
}

// export const ItemLitsContainer = (props) => {
//     console.log(props)
//     return(
//         <div>
//             <h1>{props.greeting}</h1>
//             <h2>{props.saludo}</h2>
//         </div>
//     )
// }


//Ejemplos aplicnado Destructuring: Para no poner todo el tiempo props.

// Ej 1:

// export const ItemLitsContainer = (props) => {
//     console.log(props)
//     const {greeting, saludo} = props
//     return(
//         <div>
//             <h1>{greeting}</h1>
//             <h2>{saludo}</h2>
//         </div>
//     )
// }


// Ej 2: Se destructura en el parametro del componente.

// export const ItemLitsContainer = ({greeting, saludo}) => {
//     console.log(props)
//     return(
//         <div>
//             <h1>{greeting}</h1>
//             <h2>{saludo}</h2>
//         </div>
//     )
// }

