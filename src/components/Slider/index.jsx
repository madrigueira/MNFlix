import './index.scss'
import data from  '../../dados.json'
import Thumb from '../Thumb'

function Slider(){
    const videos = data.videos

    const thumbs = videos.map(item => (
        <Thumb key={item.title} bg={item.bg} title={item.title} />
    ))

    const count = thumbs.length.toString()
    
    function slide(){
        const slide = document.querySelector('.slider')

        if (slide.style.transform = "translateX(0)" ){
            slide.style.transform = "translateX(calc(-19.75vw * (" + count + " - 5) - 45px - (" + count +" * 15px)))"
            console.log("Kekowd")
        } else {
            slide.style.transform = "translateX(0)"
            console.log("Poggers")
        }
    }

    

    // const test = "translate-x(calc(19.75vw * (" + count + " - 5)))"
    // console.log(test)

    return(
        <div>
            <div className="slider">
                {thumbs}
            </div>
            <button onClick={slide} id='lol'>Slide Left</button>
            <button onClick={slide} id='lol'>Slide Right</button>
        </div>
    )
}

export default Slider