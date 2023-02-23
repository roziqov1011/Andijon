import "../WeatherNav/WeatherNav.scss";

import WeatherIcon from "../../Assets/Icon/wather-icon.svg"

function WeatherNav({ weather }) {

    return (
        <>
            <div className="weather-nav">
                <ul>
                    <li>
                        <img src={WeatherIcon} alt="weather-icon" width={21} height={21} />
                        <p>{weather}</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default WeatherNav