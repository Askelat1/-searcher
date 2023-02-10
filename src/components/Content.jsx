import React from 'react';
import module from './Content.module.scss'
// import Search from './Search';
import WeatherCard from './WeatherCard'


function Content(props) {
    const [weatherState, setWatherState] = React.useState([])

    return (
        <main style={{
            // backgroundImage: `url(${Weather})`,
            // backgroundRepeat: 'no-repeat', 
            // backgroundSize: 'cover'
        }}>
            <div className={module.main}>
                {/* <h1>Просмотр Погоды</h1> */}
                
                <WeatherCard weatherState={weatherState} setWatherState={setWatherState }></WeatherCard>
                {/* <Search weatherState={weatherState} setWatherState={setWatherState}></Search> */}
                {/* <WeatherCard></WeatherCard> */}
            </div>
        </main>
    );
}

export default Content;