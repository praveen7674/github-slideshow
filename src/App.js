import './App.css';
import Home from './components/Home';
import LiveTv from './components/LiveTv';
import Movies from './components/Movies';
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
import Setting from './components/Setting';
import Recent from  "./components/Recent"
import Favorite from './components/Favorite';
import Search from './components/Search';
import Parse from './components/parse';



function App() {

  return (
    <Router>
    <div className="App">
    <Switch>
    <Route path="/" exact component={SignIn}/>
    <Route path="/Home" component={Home}/>
    <Route path="/LiveTv" component={LiveTv}/>
    <Route path="/Movies" component={Movies}/>
    <Route path="/movie_Info" component={MovieInfo}/>
    <Route path="/Series" component={Series}/>
    <Route path="/seriesInfo"  component={SeriesInfo}/>
    <Route path="/episodeList" component={EpisodeList}/>
    <Route path="/seriesList" component={SeriesList}/>
    <Route path="/wait" component={Wait}/>
    <Route path="/play_trailer" component={PlayTrailer}/>
    <Route path="/play_episode" component={PlayEpisode}/>
    <Route path="/Setting" component={Setting}/>
    <Route path="/favorite" component={Favorite}/>
    <Route path="/Search" component={Search}/>
    <Route path="/Sidebar" component={Sidebar}/>
    <Route path="/recent" component={Recent}/>
    <Route path="/parse" component={Parse}/>
    <Route  component={PageNotFound}/>
    </Switch> 
    </div>
    </Router>
  );
}

export default App;
