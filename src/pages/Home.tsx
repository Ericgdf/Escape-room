import './home.css'
import VanillaTilt from 'vanilla-tilt';
import card1 from '../assets/img/card1.svg'
import card2 from '../assets/img/card2.svg'
import card3 from '../assets/img/card3.svg'
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

    const tiltRefs = useRef<Array<HTMLImageElement | null>>([]);

    useEffect(() => {
        tiltRefs.current.forEach((element) => {
            if (element) {
                VanillaTilt.init(element, {
                    glare: true,
                    "max-glare": 1,
                });
            }
        });
    }, []);


    return (
        <div className='home_background'>
            <h2 className='home_title'>ARE YOU READY <br />FOR MYSTERY <br /> ? </h2>
            <div className="tarot_card_container" >
                <Link to="/escape-room-1">
                    <img ref={(el) => tiltRefs.current[0] = el} className='tarot_card' src={card1} />
                </Link>
                <Link to="/escape-room-2">
                    <img ref={(el) => tiltRefs.current[1] = el} className='tarot_card' src={card2} />
                </Link>
                <Link to="/escape-room-3">
                <img ref={(el) => tiltRefs.current[2] = el} className='tarot_card' src={card3} />
                </Link>
            </div>
        </div>
    )
}

export default Home