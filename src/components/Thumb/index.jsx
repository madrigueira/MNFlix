import './index.scss'
import  '../../dados.json'

function Thumb({ bg, title }){   

    return(
        <div className="slider">
            <div className="container">
                <div className="item" style={{backgroundImage: `url(${bg})`}}></div>
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default Thumb