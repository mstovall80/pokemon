import React, {useState} from 'react';

const Form = () => {
    const [allPokemon , setAllPokemon] = useState([])


    const getPokemon = ()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(res=> {
            return res.json()
        })
        .then(res => {
            console.log("**********")
            console.log(res)
            setAllPokemon(res.results)
        })
        .catch(err => console.log("Error", err))
    }


    return (
        <div>
            <button onClick={getPokemon}>Fetch Pokemon</button>
            <h1>807 Pokemon</h1>
            {
                allPokemon.map((results, i) =>{
                    return <ul key = {i}>
                        <li className>{results.name}</li>
                    </ul>
                })
            }
        </div>
    );
};



export default Form;