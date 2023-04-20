import './index.scss'
import data from  '../../dados.json'
import Thumb from '../Thumb'

function Slider(){
    const videos = data.videos

    const thumbs = videos.map(item => (
        <Thumb key={item.title} bg={item.bg} title={item.title} />
    ))

    function slide(){
        const slide = document.querySelector('.slider')
        slide.classList.toggle('active')
    }

    return(
        <div>
            <div className="slider">
                {thumbs}
            </div>
            <button onClick={slide} id='lol'>testar</button>
        </div>
    )
}

export default Slider