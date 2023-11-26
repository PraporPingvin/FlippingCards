import {setCard, addCard} from "../store/cardReducer";

export function getCards(id){
    return async dispatch=>{
        try{
            await fetch(`http://localhost:5000/api/card/get?id=${id}`)
                .then(response => response.json())
                .then(json => dispatch(setCard(json)))
        }catch (e){
            console.log(e?.response?.data?.message)
        }
    }
}

export  function createCard(data){
    return async dispatch =>{
        try {
            console.log(data)
            await fetch("http://localhost:5000/api/card/create",
            {
                headers:{
                    'Accept' : 'application/json',
                    'Content-Type':'application/json'
                },
                method:"POST",
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(json => dispatch(addCard(json.data)))
        }
        catch (err){
            console.log(err.response.data.message)
        }
    }
}