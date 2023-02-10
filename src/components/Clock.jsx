import React, {useEffect, useState} from 'react';
import module from './Clock.module.scss'

function Clock(props) {
    const [clockState, setClockState] = useState('⠀');

    useEffect(() => {
        setInterval(() => {
            const data = new Date();
            setClockState(data.toLocaleTimeString());
        }, 1000);
    }, []);
    
    return <div className={module.time_set}>{clockState}</div>
}

export default Clock;