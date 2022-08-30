
import { useEffect, useState } from "react";
import WeatherMain from "./components/WeatherMain";
import Search from "./components/Search";

function App() {
  const [spinnerState, setSpinnerState] = useState();
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [forecast, setForecast] = useState();

  useEffect(() => {
    if (search) {
      setSpinnerState(true);
      const axios = require("axios");

      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
        params: { q: `${search}`, days: "3" },
        headers: {
          "X-RapidAPI-Key":
            "99edcac9e9msh3fd3a445cdfc16bp1d1543jsnca24c9fab898",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setData(response.data);
          setError(false);
          setForecast(response.data.forecast);
        })
        .catch(function (error) {
          setError(true);
          setSearch()
          setData();
        });

      setTimeout(() => setSpinnerState(false), 3000);
    }
  }, [search]);

  return (
    <div className="main-container">
      <div className="main">
        <Search setSearch={setSearch} setError={setError} />
        {error && <h1>Error, try again</h1>}

        {!error && (
          <WeatherMain
            data={data}
            spinnerState={spinnerState}
            forecast={forecast}
          />
        )}
      </div>
    </div>
  );
}

export default App;
