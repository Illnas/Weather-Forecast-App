import React from "react";
import Spinner from "../Multimedia/Spinners/spinner.svg";

const Current = ({
  forecast,
  data,
  value,
  setFocusState,
  focusState,
  spinnerState,
}) => {
  const changeForecast = () => {
    if (focusState[value] === false) {
      const focusArr = [...focusState];
      const mapped = focusArr.map((e) => (e = false));
      mapped[value] = true;
      setFocusState(mapped);
    }
  };

  return (
    <div
      className={focusState[0] ? "three-days-current" : "three-days"}
      onClick={changeForecast}
    >
      {spinnerState && <img src={Spinner} alt="Spinner" className="spinner" />}
      {forecast && (
        <img
          src={`%PUBLIC_URL%/Multimedia/images/${forecast.day.condition.code}.jpg`}
          alt="Weather Condition"
        />
      )}
      <div className="overlay"></div>
      <div className="data-text">
        <h2>
          {forecast.date
            .split("-")
            .filter((e) => e.length < 4)
            .reverse()
            .join("-")}
        </h2>
        <h2>{data.current.condition.text}</h2>
        <h2>
          {data.current.temp_c}
          <span>&deg;C</span>/{data.current.temp_f}
          <span>&deg;F</span>
        </h2>
      </div>
    </div>
  );
};

export default Current;
