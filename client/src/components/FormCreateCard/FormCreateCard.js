import React from "react";
import {PageCreateSet} from '../PageCreateSet/PageCreateSet'
import {useInput} from "../UserInput/UseInput";
import {set, useForm} from "react-hook-form";

import './FormCreateCard.css'
import {Form} from "react-router-dom";

import {useParams} from "react-router-dom";
import {createSet, getSets} from "../../actions/set";
import {createCard} from "../../actions/card";
import {useDispatch, useSelector} from "react-redux";
import {BtnSet} from "../BtnSet/BtnSet";


export function FormCreateCard() {

    const dispatch = useDispatch()
    const onSubmit = async (data) => {
        console.log(data)
        dispatch(createCard(data))
    }

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            frontSide: "",
            backSide: "",
            setId: ""
        }
    })

    React.useEffect(() => {
        dispatch(getSets())
    }, [dispatch])

    const sets = useSelector(state => state.set.sets)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <PageCreateSet/>
            </div>
            <div className="form-lable">
                <label className="first-card">
                    передняя сторона карточки:
                </label>
                <input
                    type="text"
                    name="frontSide"
                    // id="frontSide"
                    {...register("frontSide", {
                        required: "Заполните поле", minLength: {
                            value: 4,
                            message: "Содержит минимум 4 символа"
                        }
                    })}
                />
                <p className="error-msg">{errors.frontSide?.message}</p>
            </div>
            <div className="form-lable">
                <label className="first-card">
                    задняя сторона карточки:
                </label>
                <input
                    // type="text"
                    name="backSide"
                    // id="backSide"
                    {...register("backSide", {
                        required: "Заполните поле", minLength: {
                            value: 4,
                            message: "Содержит минимум 4 символа"
                        }
                    })}
                />
                <p className="error-msg">{errors.backSide?.message}</p>
                <div className="form-lable">
                    <label>Выберите сет</label>
                    <select {...register("setId", {required: "Заполните поле"})}>
                        <option selected disabled></option>
                        {/*<option value="chel">{getS}</option>*/}
                        {sets.map((set) => (
                            <option key={set._id} value={set._id}>{set.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-lable">
                    <input type="submit" value="создать карточку"/>
                </div>
            </div>
        </form>
    )
}