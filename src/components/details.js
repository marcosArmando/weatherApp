const Details = ({weather, windSpeed, clouds, pressure, velocityType}) => {

    return (
        <div>
            <h3>{weather}</h3>
            <h3>Wind speed: {windSpeed} {velocityType}</h3>
            <h3>Clouds: {clouds} %</h3>
            <h3>Pressure: {pressure} hPa</h3>
        </div>
    )

}

export default Details;