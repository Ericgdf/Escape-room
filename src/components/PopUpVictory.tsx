import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import './popUpVictory.css'


interface popUpVictoryProps {
    finaleTime:  string;
  }

const PopUpVictory: React.FC<popUpVictoryProps> = ({finaleTime}) => {

  const minute = finaleTime.split(':')[0]
  const seconde = finaleTime.split(':')[1]

    useEffect(() => {
        confetti()
    },[])

  return (
    <div className='popUpVictory_backgroud'>
        <div className="card_background">
            <h2>Oh wow bien joué !</h2>
            <p>Tu as mis :</p>
            <p className='time'>{minute} m {seconde} s</p>
            <p>pour trouver la solution</p>
            <Link to='/'> <button className='go_home'>Retour à l'acceuil</button></Link>
        </div>
    </div>
  )
}

export default PopUpVictory