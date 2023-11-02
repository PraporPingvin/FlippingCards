import React from "react";
import { PageCreateSet } from '../PageCreateSet/PageCreateSet'
import { useInput } from "../UserInput/UseInput";
import { useForm } from "react-hook-form";

import './FormCreateCard.css'
import { Form } from "react-router-dom";

export function FormCreateCard() {
    const {register, handleSubmit, formState:{errors}} = useForm({
        defaultValues:{
            fronttext:"",
            backtext:""
        }
    }) 

    return (
        <form onSubmit={handleSubmit((data)=>{
            console.log(data)
        })}>
            <div className="form-lable">
                <label className="first-card">
                    передняя сторона карточки:
                </label>
                <input
                    type="text"
                    name="fronttext"
                    id="fronttext"
                    {...register("fronttext", {required:"Заполните поле", minLength:{
                        value:4,
                        message:"Содержит минимум 4 символа"
                    }})}
                />
                <p className="error-msg">{errors.fronttext?.message}</p>
            </div>
            <div className="form-lable">
                <label className="first-card">
                    задняя сторона карточки:
                </label>
                <input
                    type="text"
                    name="backtext"
                    id="backtext"
                    {...register("backtext", {required:"Заполните поле", minLength:{
                        value:4,
                        message:"Содержит минимум 4 символа"
                    }})}
                />
                <p className="error-msg">{errors.backtext?.message}</p>
                <div className="form-lable">
                    <input type="submit" value="создать карточку" />
                </div>
            </div>
        </form>
    )
}