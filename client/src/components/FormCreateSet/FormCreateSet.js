import React from "react";
import {PageCreateSet} from '../PageCreateSet/PageCreateSet'
// import { useInput } from "../UserInput/UseInput";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import '../FormCreateCard/FormCreateCard.css'
import {createSet} from "../../actions/set";

export function FormCreateSet() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: "",
            description: ""
        }
    })
    const dispatch = useDispatch()

    //TODO package.json client "proxy":"http://localhost:5000"
    const onSubmit = async (data) => {
        dispatch(createSet(data))
        // console.log(data)
        // fetch("http://localhost:5000/api/set/create",
        //     {
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         method: "POST",
        //         body: JSON.stringify(data)
        //     })
        //     .then(function (res) {
        //         console.log(res)
        //     })
        //     .catch(function (res) {
        //         console.log(res)
        //     })

    }
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(name,description)
    // }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <PageCreateSet/>
            </div>
            <div className="form-lable">
                <label className="first-card">
                    название набора:
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    {...register("name", {
                        required: "Заполните поле Название набора", minLength: {
                            value: 4,
                            message: "Название набора содержит минимум 4 символа"
                        }
                    })}
                    // value={name}
                    // onChange={setName}
                />
                <p className="error-msg">{errors.name?.message}</p>
            </div>
            <div className="first-card">
                <label>
                    описание:
                </label>
                <textarea
                    name="description"
                    id="description"
                    {...register("description", {required: "Заполните поле Описание набора"})}
                    // value={discription}
                    // onChange={setDiscription}
                />
                <p className="error-msg">{errors.description?.message}</p>
                <div>
                    <input type="submit" value="создать сет"/>
                </div>
            </div>
        </form>
    )
}