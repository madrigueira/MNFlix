import './index.scss'
import data from '../../dados.json'

function Thumb({ bg, title }){   

    // const {bg, title} = data.videos[0]

    return(
        <div className="thumb">
            <div className="item" style={{backgroundImage: `linear-gradient(transparent 50%, #000 110%), url(${bg})`}}>
                <h5 className={title.length > 26 ? 'small' : ""}>{title}</h5>
            </div>
        </div>
    )
}

export default Thumb