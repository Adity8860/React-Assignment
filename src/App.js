import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowList from './Components/Showlist/showlist';
import ShowSummary from './Components/Showsummary/showsummary';

function App() {
  const [shows, setShows] = useState([]);

  const fetchShows = async () => {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
    const data = await response.json();
    setShows(data);
  };

  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ShowList shows={shows} />
        </Route>
        <Route path="/summary/:id">
          <ShowSummary shows={shows} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;