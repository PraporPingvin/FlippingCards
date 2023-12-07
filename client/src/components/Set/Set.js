import {useEffect, useState} from "react";
import {Card} from "../Card/Card";
import {Link, useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


import "./Set.css"
import {numberSlicer} from "../../store/numberReducer";
import {getCards, createCard} from "../../actions/card"


export function Set() {
    const dispatch = useDispatch()
    const param = useParams();
    console.log(param.id);

    const location = useLocation()
    const {set} = location.state;

    // const cards = require('../../data.json').filter((item) => (item.setName === set))
    const step = useSelector(state => state.number.number);

    const cards = useSelector(state => state.card.cards)
    console.log(cards)

    useEffect(() => {
        dispatch(getCards(param.id))
    }, [dispatch])

    const HandleBtnNextClick = () => {
        dispatch(numberSlicer.actions.INCREASE(1))
    }

    const HandleBtnPrevClick = () => {
        dispatch(numberSlicer.actions.DECREASE(1))
    }


    return (
        <div className="div-menu">
            <h2>Название набора</h2>
            {cards.length == 0 ? "Карточек еще нет" : (
                <>
                    <Card key={cards[step]?._id} front={cards[step]?.frontSide} back={cards[step]?.backSide}/>
                    <div>
                        <button className={"button"}
                            //     onClick={() => {
                            //     setStep(step - 1)
                            //     dispatch(numberSlicer.actions.DECREASE(1))
                            // }}
                                onClick={HandleBtnPrevClick}
                                disabled={step === 0}>Назад
                        </button>

                        <span>{step + 1} / {cards.length}</span>

                        <button className={"button"}
                            //     onClick={() => {
                            //     setStep(step + 1)
                            //     dispatch(numberSlicer.actions.INCREASE(1))
                            // }}
                                onClick={HandleBtnNextClick}
                                disabled={step >= cards.length - 1}>Далее
                        </button>
                    </div>
                </>
            )}
            {/*<Link to={`/admin/createcard/${param.id}`}>Создать карточку</Link>*/}
        </div>
    )
}