import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ArticleList from './pages/ArticleList';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar/>
          <div id="page-body">
            <Switch>
              <Route path='/' component={HomePage} exact/>
              <Route path='/articlelist' component={ArticleList}/>
              <Route path='/article/:name' component={ArticlePage}/>
              <Route path='/about' component={AboutPage}/>
              <Route component={PageNotFound}/>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  ); 
}

export default App;
