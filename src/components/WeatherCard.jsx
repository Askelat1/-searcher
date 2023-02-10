import React from 'react';
import module from './WeatherCard.module.scss'
import sun from '../assets/weather.sun_png.webp'
import { NavLink } from 'react-router-dom';
import Clock from './Clock';
import { useState } from 'react';

const api = {
    key: '195f6198cdf22a2f90f90eedbe796bcb',
    base: 'https://api.openweathermap.org/data/2.5/',
    city_name: 'Bishkek',
    // base: 'api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={195f6198cdf22a2f90f90eedbe796bcb}'
    // base: 'https://pro.openweathermap.org/data/2.5/forecast/hourly?q={search}&appid={195f6198cdf22a2f90f90eedbe796bcb}',

}

function WeatherCard(props) {

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState(null);

    const searchPressed = () => {
        fetch(`${api.base}forecast?q=${search}&appid=${api.key}`)

            .then(res => res.json())
            .then((result) => {
                if (result.cod == '200')
                    setWeather(result);
                else 
                    alert('Ошибка')
            })
    }

    return (
        <div className={module.container}>
            <div className={module.card}>
                <div className={module.card_image}>
                    <img src={sun} />
                </div>
                <div className={module.currentDay}>
                    <Clock />
                </div>
                <div className={module.searchM}>    
                    <input
                        type='text' placeholder='Название города'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={searchPressed}>Искать</button>
                </div>

                {weather && (

                    <div className={module.dayly}>
                        <div className={module.timeCards}>
                            <p className={module.day_data}>Утром</p>
                            <p className={module.dayCards}>{Math.round(weather?.list[10]?.main?.temp - 273)}°C</p>
                        </div>

                        <div className={module.timeCards}>
                            <p className={module.day_data}>День</p>
                            <p className={module.dayCards}>{Math.round(weather?.list[12]?.main?.temp - 273)}°C</p>
                        </div>

                        <div className={module.timeCards}>
                            <p className={module.day_data}>Ночью</p>
                            <p className={module.dayCards}>{Math.round(weather?.list[15]?.main?.temp - 273)}°C</p>
                        </div>
                    </div>

                )}

                {weather && (
                    <div className={module.days}>
                        <div className={module.card1}>
                            <p className={module.city}>Пон</p>

                            <p className={module.temperature}>{Math.round(weather?.list[5]?.main?.temp - 273)}°C</p>

                            <p className={module.description}>{weather?.list[5]?.weather[0]?.description}</p>
                        </div>

                        <div className={module.card2}>
                            <p className={module.city}>Вторник</p>

                            <p className={module.temperature}>{Math.round(weather?.list[21]?.main?.temp - 273)}°C</p>

                            <p className={module.description}>{weather?.list[21]?.weather[0]?.description}</p>
                        </div>

                        <div className={module.card3}>
                            <p className={module.city}>Среда</p>

                            <p className={module.temperature}>{Math.round(weather?.list[29]?.main?.temp - 273)}°C</p>

                            <p className={module.description}>{weather?.list[29]?.weather[0]?.description}</p>
                        </div>

                        <div className={module.card4}>
                            <p className={module.city}>Четв</p>

                            <p className={module.temperature}>{Math.round(weather?.list[37]?.main?.temp - 273)}°C</p>

                            <p className={module.description}>{weather?.list[37]?.weather[0]?.description}</p>
                        </div>

                        <div className={module.card5}>
                            <p className={module.city}>Пятн</p>

                            <p className={module.temperature}>{Math.round(weather?.list[0]?.main?.temp - 273)}°C</p>

                            <p className={module.description}>{weather?.list[0]?.weather[0]?.description}</p>
                        </div>


                    </div>
                )}
                <div className={module.num_data}>
                    {/* <NavLink to='about'>About</NavLink >
                    <br />
                    <NavLink to='above'>About1</NavLink > */}
                    {/* <h4>Bishkek</h4> */}
                </div>

            </div>
        </div>
    );
}

export default WeatherCard;