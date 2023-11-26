import React from "react";
import { PageCreateSet } from '../PageCreateSet/PageCreateSet'
import { useInput } from "../UserInput/UseInput";
import { useForm } from "react-hook-form";

import './FormCreateCard.css'
import { Form } from "react-router-dom";

import {useParams} from "react-router-dom";
import {createSet} from "../../actions/set";
import {createCard} from "../../actions/card";
import {useDispatch} from "react-redux";


export function FormCreateCard() {

    const dispatch = useDispatch()
    const onSubmit = async (data) => {
        dispatch(createCard(data))}


    const param = useParams();
    console.log(param)

    const {register, handleSubmit, formState:{errors}} = useForm({
        defaultValues:{
            frontSide:"",
            backSide:"",
            setId: param.id
        }
    }) 

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
                    {...register("frontSide", {required:"Заполните поле", minLength:{
                        value:4,
                        message:"Содержит минимум 4 символа"
                    }})}
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
                    {...register("backSide", {required:"Заполните поле", minLength:{
                        value:4,
                        message:"Содержит минимум 4 символа"
                    }})}
                />
                <p className="error-msg">{errors.backSide?.message}</p>
                <div className="form-lable">
                    <input type="submit" value="создать карточку" />
                </div>
            </div>
        </form>
    )
}