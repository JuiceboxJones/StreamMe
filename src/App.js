import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import StreamCreate from './Components/streams/StreamCreate';
import StreamDelete from './Components/streams/StreamDelete';
import StreamEdit from './Components/streams/StreamEdit';
import StreamList from './Components/streams/StreamList';
import StreamShow from './Components/streams/StreamShow';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path={'/'} component={StreamList} />
        <Route path={'/streams/create'} component={StreamCreate} />
        <Route path={'/streams/delete'} component={StreamDelete} />
        <Route path={'/streams/edit'} component={StreamEdit} />
        <Route path={'/streams/show'} component={StreamShow} />
      </Switch>
    </div>
  );
}

export default App;
