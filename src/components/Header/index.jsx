import './index.scss'
import imgs from '../../assets/Images'

function Header() {
    return ( 
        <div className='header'>
            <div className='container'>
                <img src={ imgs.logo } className='logo' />
                <div className='nav'>
                    <a className='active'>Início</a>
                    <a>Gameplay</a>
                    <a>Shitpost</a>
                    <a>Minha lista</a>
                </div>
            </div>
        </div>
    );
}

export default Header;