import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import CharacterDetail from './View/CharacterDetail';
import Characters from './View/Characters';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Characters} />
          <Route exact path="/characters/:characterId" component={CharacterDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
