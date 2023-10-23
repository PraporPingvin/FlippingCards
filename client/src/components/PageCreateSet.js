import React from "react";
import {Header} from './Header'
import { Outlet } from "react-router-dom";

import './PageCreateSet.css'

export function PageCreateSet(){
    return <div>
        <Header/>
        <h2 className="create-card">Создание сета карточек</h2>
        <Outlet/>
    </div>
}