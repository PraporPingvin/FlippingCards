import React from "react";
import {Header} from "../Header/Header";
import {BtnSet} from "../BtnSet/BtnSet";
import {useDispatch, useSelector} from "react-redux";
import {getSets} from "../../actions/set";

import '../Header/Header.css'


export function PageSelectSet() {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getSets())
    }, [dispatch])

    const sets = useSelector(state => state.set.sets).map(set =>
        <BtnSet key={set._id} name={set.name} id={set._id}/>
    )
    // const cards = require("../../data.json")
    // const sets = cards.reduce(
    //     (acc, item) => {
    //         if (acc.map[item.setName])
    //             return acc;
    //         acc.map[item.setName] = true;
    //         acc.sets.push(item.setName);
    //         return acc;
    //     },
    //     {
    //         map:{},
    //         sets:[],
    //     }
    // ).sets.map((item,index)=>(
    //     <BtnSet key={index} name={item} id={index}/>
    // ))


    return <div>
        <Header/>
        <h2 className="select_set">выбор сетов</h2>
        <ul className="set-list">
            {sets}
        </ul>
    </div>
}