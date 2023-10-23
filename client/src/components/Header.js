import {Link} from 'react-router-dom';
import './Header.css'


export function Header(){
    return(
        <div className="header">
            <h1>    
            <Link className='text-link' to="/">Флеш-карточка</Link>
            </h1>
            <nav className='main-menu'>
                <ul>
                    <li className='main-menu-li'>
                        <Link className='main-menu__link' to="/admin">Создать сет</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}