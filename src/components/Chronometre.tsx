import{ useState, useEffect,  Dispatch, SetStateAction } from 'react';


interface ChronometreProps {
    playerWin:  boolean;
    setFinalTime: Dispatch<SetStateAction<string>>
  }

  const Chronometre: React.FC<ChronometreProps> = ({ playerWin, setFinalTime }) => {

    const [time, setTime] = useState<number>(0);
    const [isPlayerWinHandled, setPlayerWinHandled] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (playerWin && !isPlayerWinHandled) {
      const finalTime: string = formatTime(time);
      setFinalTime(finalTime);
      setPlayerWinHandled(true);
    }
  }, [playerWin, isPlayerWinHandled, setFinalTime, time]);

  const formatTime = (time: number): string => {
    const minutes: number = Math.floor(time / 60);
    const seconds: number = time % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  

  return (
    <div>{formatTime(time)}</div>
  )
}

export default Chronometre