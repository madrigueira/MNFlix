import './index.scss'
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import data from '../../dados.json'

function Banner(){
    const {bg,title,desc} = data.videos[Math.floor(Math.random() * data.videos.length)]

    return (
    <div className='banner'style={{backgroundImage:`linear-gradient(transparent 60%, #141414 98%), url(${bg})`}}>
            <div className="container">
                <h3 className={title.length > 36 ? 'small' : ""}>{title}</h3>
                <div className="top">
                    <a>top<br/>10</a>
                    <h4>Top 1 em sonegação hoje</h4>
                </div>
                <p>{desc}</p>
                <div className="buttons">
                    <button className="assistir"><BsFillPlayFill/>Assistir</button>
                    <button className="informacoes"><AiOutlineInfoCircle/>Mais Informações</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
