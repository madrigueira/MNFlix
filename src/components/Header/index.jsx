import './index.scss'
import imgs from '../../assets/Images'
import { AiOutlineMenu } from 'react-icons/ai';

function openMenu(){
    const menu = document.querySelector('.nav')
    menu.classList.toggle('active')
}

function Header() {
    return ( 
        <div className='header'>
            <div className='container'>
                <img src={ imgs.logo } className='logo' />
                <div className='nav'>
                    <button className='close mobile' onClick={openMenu}>✕</button>
                    <a className='active'>Início</a>
                    <a>Lorem</a>
                    <a>Ipsum</a>
                    <a>Kekw</a>
                </div>
                <button className="menu mobile" onClick={openMenu}><AiOutlineMenu /></button>
            </div>
        </div>
    );
}

export default Header;