import './index.scss'
import data from '../../dados.json'

function Slider(){

    var i = 0
    var bg = 0
    while (i < data.videos.length) {
        const {bg} = data.videos[i]
        console.log(bg)
        i++
    }
    console.log(i)

    return(
        <div className="slider">
            <div className="container">
                <div className="item" style={{backgroundImage: `url(${bg})`}}></div>
            </div>
        </div>
    )
}

export default Slider