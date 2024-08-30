import { useEffect, useState } from 'react';
import styles from './Timer.module.scss'

const Timer = () => {
  const calculateTimeRemaining = () => {
    const currentTime = new Date();
    const nextInterval = new Date(
        currentTime.getFullYear(),
        currentTime.getMonth(),
        currentTime.getDate(),
        Math.floor(currentTime.getHours() / 3) * 3 + 3
    );
    if (nextInterval.getTime() - currentTime.getTime() < 0) {
        nextInterval.setHours(nextInterval.getHours() + 3);
    }
    return Math.floor((nextInterval.getTime() - currentTime.getTime()) / 1000);
}

const [timeRemaining, setTimeRemaining] = useState<number>(calculateTimeRemaining());

useEffect(() => {
    const interval = setInterval(() => {
        setTimeRemaining(prevTime => {
            if (prevTime <= 1) {
                return calculateTimeRemaining();
            }
            return prevTime - 1;
        })
    }, 1000);
    return () => clearInterval(interval);
}, []);

const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    
    return `${hours.toString().padStart(2, '0')}h 
            ${minutes.toString().padStart(2, '0')}m 
            ${seconds.toString().padStart(2, '0')}s`;
}
  return (
    <span>{formatTime(timeRemaining)}</span>
  )
}

export default Timer