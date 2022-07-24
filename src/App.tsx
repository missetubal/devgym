
import Home from './Sections/Home/Home.screen';
import Programs from './Sections/Programs/Programs.screen';
import Reasons from './Sections/Reasons/Reasons.screen';
import { GlobalStyle } from './styles/general.styles';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Home/>
      <Programs/>
      <Reasons/>
    </div>
  );
}

export default App;
