import {Link} from 'react-router-dom';
import './Header.css'
import {useSelector} from "react-redux";
import Logo from "../../assets/img/sun.svg"

export function Header(){
    const number = useSelector(state => {
        return state.number.number;
    })
    return(
        <div className="header">
            <h1>    
            <Link className='text-link' to="/">
                <img src={Logo} alt="" className="header__logo"/>
                Флеш-карточка
            </Link>
            </h1>
            <nav className='main-menu'>
                <ul>
                    <li className='main-menu-li'>
                        <Link className='main-menu__link' to="/admin/createset">Создать сет</Link>
                    </li>
                </ul>
            </nav>
            <p>Кол-во просмотренных карточек : {number}</p>
        </div>
    )
}