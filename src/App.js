import './App.css';
import Home from './components/Home';
import LiveTv from './components/LiveTv';
import Movies from './components/Movies';
import Profile from './components/Profile';
import Series from './components/Series';
import Sidebar from './components/Sidebar';
import SignIn from './components/SignIn';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import MovieInfo from './components/movieInfo';
import SeriesList from './components/series_List';
import SeriesInfo from './components/SeriesInfo';
import EpisodeList from './components/EpisodeList';
import PlayTrailer from './components/PlayTrailer';
import PlayEpisode from './components/playEpisode';
import Wait from './components/Wait';



function App() {

  return (
    <Router>
    <div className="App">
    <Switch>
    <Route path="/" exact component={SignIn}/>
    <Route path="/episodeList" component={EpisodeList}/>
    <Route path="/movie_Info" component={MovieInfo}/>
    <Route path="/seriesList" component={SeriesList}/>
    <Route path="/seriesInfo"  component={SeriesInfo}/>
    <Route path="/LiveTv" component={LiveTv}/>
    <Route path="/wait" component={Wait}/>
    <Route path="/play_trailer" component={PlayTrailer}/>
    <Route path="/play_episode" component={PlayEpisode}/>
    <Route path="/Movies" component={Movies}/>
    <Route path="/Profile" component={Profile}/>
    <Route path="/Series" component={Series}/>
    <Route path="/Sidebar" component={Sidebar}/>
    <Route path="/Home" component={Home}/>
    <Route  component={PageNotFound}/>
    </Switch> 
    </div>
    </Router>
  );
}

export default App;
