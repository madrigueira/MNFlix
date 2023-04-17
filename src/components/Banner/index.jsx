 import './index.scss'
 import { BsFillPlayFill } from 'react-icons/bs';
 import { AiOutlineInfoCircle } from 'react-icons/ai';
 import data from '../../dados.json';

 function Banner(){
  const {bg,title} = data.teste[Math.floor(Math.random() * data.teste.length)]

   return (
   <div className='banner'style={{backgroundImage:`url(${bg})`}}>
         <div className="container">
             <h3 className={title.length > 36 ? 'small' : ""}>{title}</h3>
             <div className="top">
                 <a>top<br/>10</a>
                 <h4>Top 1 em sonegação hoje</h4>
             </div>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus temporibus distinctio repellendus, 
             ducimus, nisi nemo cumque id.</p>
             <div className="buttons">
                 <button className="assistir"><BsFillPlayFill/>Assistir</button>
                 <button className="informacoes"><AiOutlineInfoCircle/>Mais Informações</button>
             </div>
         </div>
     </div>
   )
 }

 export default Banner
