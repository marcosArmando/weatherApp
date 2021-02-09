import React from 'react';
import Title from './tittle';
import Icon from './icon';
import Details from './details';
import ChangeButton from './changeButton';

const Container = ({
    weather,
    temperature,
    grades,
    city,
    icon,
    country,
    windSpeed,
    clouds,
    changeGrades,
    velocityType,
    pressure}) => {

    return(
        <div>
            <Title city={city} country={country}/>
            <Icon weather={weather} temperature={temperature} icon={icon} grades={grades}/>
            <Details weather={weather} windSpeed={windSpeed} clouds={clouds} pressure={pressure} velocityType={velocityType}/>
            <ChangeButton changeGrades={changeGrades}/>
        </div>
    )
    
}

export default Container;