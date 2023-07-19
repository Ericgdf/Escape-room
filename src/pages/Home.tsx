import './home.css'
import card1 from '../assets/img/card1.png'
import card2 from '../assets/img/card2.png'
import card3 from '../assets/img/card3.png'


const Home = () => {
    return (
        <div className='home_background'>
            <h2 className='home_title'>ARE YOU READY <br />FOR MYSTERY <br /> ? </h2>
            <div className="tarot_card_container">
                <img className= 'tarot_card' src={card1} />
                <img className= 'tarot_card' src={card2} />
                <img className= 'tarot_card' src={card3} />
            </div>
        </div>
    )
}

export default Home