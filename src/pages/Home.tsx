import './home.css'
import VanillaTilt from 'vanilla-tilt';
import card1 from '../assets/img/card1.png'
import card2 from '../assets/img/card2.png'
import card3 from '../assets/img/card3.png'
import { useEffect, useRef } from 'react';


const Home = () => {

    const tiltRefs = useRef<Array<HTMLImageElement | null>>([]);

    useEffect(() => {
      tiltRefs.current.forEach((element) => {
        if (element) {
          VanillaTilt.init(element, {
            glare: true,  
            "max-glare": 1,
            // Options de configuration de Vanilla Tilt (facultatif)
            // Voir la documentation pour plus d'options : https://micku7zu.github.io/vanilla-tilt.js/
          });
        }
      });
    }, []);


    return (
        <div className='home_background'>
            <h2 className='home_title'>ARE YOU READY <br />FOR MYSTERY <br /> ? </h2>
            <div className="tarot_card_container" >
                <img ref={(el) => tiltRefs.current[0] = el} className= 'tarot_card' src={card1}  />
                <img ref={(el) => tiltRefs.current[1] = el} className= 'tarot_card' src={card2} />
                <img ref={(el) => tiltRefs.current[2] = el} className= 'tarot_card' src={card3} />
            </div>
        </div>
    )
}

export default Home