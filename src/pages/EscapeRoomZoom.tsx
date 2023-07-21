import { useState, ChangeEvent, KeyboardEvent, useEffect  } from 'react';
import ZoomableImage from '../components/ZoomableImageProps ';
import './escapeRoomZoom.css'

import moon from '../assets/img/moon.svg';
import cristaux from '../assets/img/cristaux.svg';
import desert from '../assets/img/desert.svg'
import alchemist from '../assets/img/alchemist.svg'
import Chronometre from '../components/Chronometre';
import PopUpVictory from '../components/PopUpVictory';

const EscapeRoomZoom = () => {

  const [password, setPassword] = useState('')
  const [finaleTime, setFinalTime] = useState<string>('')
  const [playerWin, setPlayerWin] = useState<boolean>(false)
  const [wrongAnswerMessage, setWrongAnswerMessage]= useState<boolean>(false)

  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setWrongAnswerMessage(false)
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setWrongAnswerMessage(true)
    }
  };

  useEffect(() => {
    if(password === '4783'){
      setPlayerWin(true)
    }
  }, [password])

  return (
    <div className="main_background mystery">
      <Chronometre setFinalTime={setFinalTime} playerWin={playerWin}/>
      {playerWin ? <PopUpVictory finaleTime={finaleTime}/> : null}
      <div className="mystery_background">
      <div className="section_img">
      <ZoomableImage src={cristaux} width={200} height={200} zoomBubbleSize={100} zoom={9} filter={''} />
      <ZoomableImage src={desert} width={200} height={200} zoomBubbleSize={100} zoom={3} filter={''} />
      </div>
    
      <p className='citation'>« Je t’aime parce que j’avais fait un rêve, puis j’ai rencontré un roi, j’ai vendu des cristaux,  j’ai traversé le désert, les clans sont entrés en guerre, et je suis venu près d’un puits pour savoir où habitait un Alchimiste. Je t’aime parce que tout l’Univers a conspiré à me faire arriver jusqu’à toi. </p>
      <div className="section_img">
        
      <ZoomableImage src={moon} width={200} height={200} zoomBubbleSize={100} zoom={6} filter={''} />
      <ZoomableImage src={alchemist} width={200} height={200} zoomBubbleSize={100} zoom={6} filter={''} />
      </div>
      
      </div>
      <input
        className={'input_password '}
        type="text"
        value={password}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        style={{ color: wrongAnswerMessage ? "red" : "whitesmoke"  }}
        placeholder="Password"
      />
      
    </div>
  );
};

export default EscapeRoomZoom;
