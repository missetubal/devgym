
import Home from './Sections/Home/Home.screen';
import Programs from './Sections/Programs/Programs.screen';
import { GlobalStyle } from './styles/general.styles';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Home/>
      <Programs/>
    </div>
  );
}

export default App;
