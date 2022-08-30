import React, { useState, useEffect } from "react";
import Spinner from "../Multimedia/Spinners/spinner.svg"


const WeatherInfo = ({ data, focusState, spinnerState }) => {
  const [renderDataCurrent, setRenderDataCurrent] = useState();
  const [renderThreeDays, setRenderThreeDays] = useState();
  const [currentHour, setCurrentHour] = useState()

  useEffect(() => {
    let hour = new Date().getHours();
    if (data) {
      if (focusState[0] === true) {
        setRenderDataCurrent(data.current);
        setRenderThreeDays();
      }

      if (focusState[1] === true) {
        setRenderThreeDays(data.forecast.forecastday[1]);
        setRenderDataCurrent();
        setCurrentHour(hour)
      }

      if (focusState[2] === true) {
        setRenderThreeDays(data.forecast.forecastday[2]);
        setRenderDataCurrent();
        setCurrentHour(hour)
      }
    }
  }, [focusState, data]);




  return (
    <>
      {renderDataCurrent && (
        <div className="info-container">
          <div className="small-container">
          {spinnerState && <img src={Spinner} alt="" className='spinner'/>}
            <div className="smaller-container">
              <h3>Current Temperature: </h3>
              <p>
                {renderDataCurrent.temp_c}&deg;C/{renderDataCurrent.temp_f}
                &deg;F
              </p>
            </div>

            <div className="smaller-container">
              <h3>Humidity: </h3>
              <p>
                {renderDataCurrent.humidity}
              </p>
            </div>

            <div className="smaller-container">
              <h3>UV: </h3>
              <p>
                {renderDataCurrent.uv}
              </p>
            </div>
          </div>

          <div className="small-container">
          {spinnerState && <img src={Spinner} alt="" className='spinner'/>}
            <div className="smaller-container">
              <h3>Visibility: </h3>
              <p>
                {renderDataCurrent.vis_km}km / {renderDataCurrent.vis_miles}miles
              </p>
            </div>

            <div className="smaller-container">
              <h3>Wind Direction: </h3>
              <p>
                {renderDataCurrent.wind_dir}
              </p>
            </div>

            <div className="smaller-container">
              <h3>Wind: </h3>
              <p>
              {renderDataCurrent.wind_kph}kph / {renderDataCurrent.wind_mph}mph
              </p>
            </div>
          </div>
        </div>
      )}
      {renderThreeDays && (
        <div className="info-container">
          <div className="small-container">
            <div className="smaller-container">
              <h3>Average Temperature: </h3>
              <p>
                {renderThreeDays.day.avgtemp_c}&deg;C/{renderThreeDays.day.avgtemp_f}
                &deg;F
              </p>
            </div>

            <div className="smaller-container">
              <h3>Average Humidity: </h3>
              <p>
                {renderThreeDays.day.avghumidity}
              </p>
            </div>

            <div className="smaller-container">
              <h3>UV: </h3>
              <p>
                {renderThreeDays.day.uv}
              </p>
            </div>
          </div>

          <div className="small-container">
            <div className="smaller-container">
              <h3>Average Visibility: </h3>
              <p>
                {renderThreeDays.day.avgvis_km}km / {renderThreeDays.day.avgvis_miles}miles
              </p>
            </div>

            <div className="smaller-container">
              <h3>Wind Direction: </h3>
              <p>
                {renderThreeDays.hour[currentHour].wind_dir}
              </p>
            </div>

            <div className="smaller-container">
              <h3>Wind: </h3>
              <p>
              {renderThreeDays.hour[currentHour].wind_kph}kph / {renderThreeDays.hour[currentHour].wind_mph}mph
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherInfo;
