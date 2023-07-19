import { useState, ChangeEvent, useEffect } from 'react';
import './escapeRoomSaintEx.css'
import eyes from '../assets/img/eyes.png'
import Chronometre from '../components/Chronometre';
import PopUpVictory from '../components/PopUpVictory';


const EscapeRoomSaintEx = () => {

  const [password, setPassword] = useState('')
  const [finaleTime, setFinalTime] = useState<string>('')
  const [playerWin, setPlayerWin] = useState<boolean>(false)

  useEffect(() => {
    if(password === 'citadelle'){
      setPlayerWin(true)
    }
  }, [password])
  

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  console.log(finaleTime)

  return (
    <div className="main_background">
      {playerWin ? <PopUpVictory /> : null}
      <Chronometre playerWin={playerWin} setFinalTime={setFinalTime}  />
      <div className="img_contener">
        <img className="img_eyes" src={eyes} alt="dessins type tatouage d'un coeur avec un oeil" />
        <p className='nothing_important'>citadelle</p>

      </div>

      <p className='sentence_enigme'>... L’essentiel est invisible pour les yeux.</p>
      <input
        className='input_password'
        type="text"
        value={password}
        onChange={handleInputChange}
        placeholder="Password"
      />
    </div>
  )
}

export default EscapeRoomSaintEx