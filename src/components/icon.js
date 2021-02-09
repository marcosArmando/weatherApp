const Icon = ({weather, temperature, icon, grades}) => {

    let iconURL = "http://openweathermap.org/img/w/"+icon+".png";

    return(
        <div>
            <p>{temperature} °{grades}</p>
            <img src={iconURL} alt={weather}/>
        </div>
    )
}

export default Icon;