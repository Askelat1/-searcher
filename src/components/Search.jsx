import React from 'react';
import module from './Search.module.scss'

function Search(props) {

    const [weatherState, setWatherState] = React.useState([])
    const API_KEY = '195f6198cdf22a2f90f90eedbe796bcb'
    const URL = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=195f6198cdf22a2f90f90eedbe796bcb'
    console.log(URL);

    let city = ''

    React.useEffect(() => {

    }, [props.weatherState])

    async function loadingData(){
        let responce = await fetch(`${URL}/?=${city}&units=metric&cnt=7&appid=${API_KEY}`)
        let data = await responce.json()
        props.setWatherState(data)    
    }

        // console.log(loadingData);

    function setCity (event){
        city = event.target.value
    }

    // function setCity(event){
    //     event.
    // }
    return (
        <div>
            {/* <form>
                <input onChange={loadingData} type="text" placeholder='Здесь'></input>
            </form>
            <button onClick={(loadingData) => setTime}>Поиск</button> */}
        </div>
    );
}

export default Search;