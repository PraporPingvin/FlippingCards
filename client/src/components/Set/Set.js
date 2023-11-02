import {useState} from "react";
import { Card } from "../Card/Card";
import { useLocation, useParams } from "react-router-dom";
import {useDispatch} from "react-redux";


import "./Set.css"

export function Set() {
    const dispatch = useDispatch()
    const param = useParams();
    console.log(param.id);

    const location = useLocation()
    const {set} = location.state;

    const cards = require('../../data.json').filter((item) => (item.setName === set))
    const [step, setStep] = useState(0);
    return(
        <div className="div-menu">
            <h2>Название набора</h2>
            <Card key={cards[step].id} front={cards[step].front} back={cards[step].back} />
            <div>
                <button className={"button"} onClick={()=>{
                    setStep (step - 1)
                    dispatch({type:"DECREASE", payload:1})
                }}
                disabled={step === 0}>Назад
                </button>

                <span>{step +1} / {cards.length}</span>

                <button className={"button"} onClick={()=>{
                    setStep (step + 1)
                    dispatch({type:"INCREASE", payload:1})
                }}
                disabled={step === cards.length-1}>Далее
                </button>
            </div>
        </div>
    )
}