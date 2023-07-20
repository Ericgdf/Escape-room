import { useState } from 'react';
import './escapeRoomHere.css'
import Chronometre from '../components/Chronometre';
import PopUpVictory from '../components/PopUpVictory';


const EscapeRoomHere = () => {

    const numberOfCells: number = 100;
    const [indexSquare, setIndexSquare] = useState<number | null>(null)
    const [finaleTime, setFinalTime] = useState<string>('')
    const [playerWin, setPlayerWin] = useState<boolean>(false)

    const handleClickSquare = (index: number) => {
        if (index === 28) {
            setIndexSquare(index)
            setPlayerWin(true)
        }
    }


    return (
        <div className="main_background_grid">
            <div className="timer_background">
             <Chronometre playerWin={playerWin} setFinalTime={setFinalTime} />
            </div>
            
            {playerWin ? <PopUpVictory finaleTime={finaleTime} /> : null}
            
            <div className="grid_background">
                <div className="square_background">
                    <div className='light_square'></div>
                </div>
                <div className="grid_container">
                    {Array.from({ length: numberOfCells }).map((_, index) => (
                        <div
                            key={index}
                            className={`grid_item ${index === indexSquare ? 'clicked' : ''}`}
                            onClick={() => handleClickSquare(index)}>
                        </div>
                    ))}
                </div>
               
            </div>
        </div>

    )
}

export default EscapeRoomHere