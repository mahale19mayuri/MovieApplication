import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import MovieSearch from "./Components/MovieSearch";
import "./App.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MovieSearch />} />
          <Route
            exact
            path="/moviedetails/:imdbID"
            element={<MovieDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;