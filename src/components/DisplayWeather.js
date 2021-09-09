import React, { useState } from 'react';
import GetWeather from './GetWeather';

function DisplayWeather(props) {

    console.log(props)

    return(
        <div>
            <h1>Location: {props.data.name}</h1>
            <h1>Type: {props.data.weather[0].main}</h1>
            <h1>Description: {props.data.weather[0].description}</h1>
            <h1>Wind Speed: {props.data.wind.speed}</h1>
        </div>
    )
}

export default DisplayWeather;