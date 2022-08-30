import React, { useState } from "react";
import ThreeDays from "./ThreeDays";
import Current from "./Current";
import WeatherInfo from "./WeatherInfo";

const WeatherMain = ({ data, spinnerState, forecast }) => {
  const [focusState, setFocusState] = useState([true, false, false]);

  return (
    <div className="image-container">
      {data && (
        <div className="location">
          <h2>Location: </h2>
          <p>
            {data.location.name}, {data.location.country}
          </p>
        </div>
      )}

      {data && (
        <div className="data-container">
          <Current
            forecast={forecast.forecastday[0]}
            data={data}
            value={0}
            focusState={focusState}
            setFocusState={setFocusState}
            spinnerState={spinnerState}
          />
          <ThreeDays
            forecast={forecast.forecastday[1]}
            data={data}
            value={1}
            focusState={focusState}
            setFocusState={setFocusState}
            spinnerState={spinnerState}
          />
          <ThreeDays
            forecast={forecast.forecastday[2]}
            value={2}
            focusState={focusState}
            setFocusState={setFocusState}
            spinnerState={spinnerState}
          />
        </div>
      )}
      <WeatherInfo
        data={data}
        focusState={focusState}
        spinnerState={spinnerState}
      />
    </div>
  );
};

export default WeatherMain;
