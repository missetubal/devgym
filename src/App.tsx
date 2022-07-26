
import Footer from './components/Footer/Footer.component';
import Home from './Sections/Home/Home.screen';
import Join from './Sections/Join/Join.screen';
import Plans from './Sections/Plans/Plans.screen';
import Programs from './Sections/Programs/Programs.screen';
import Reasons from './Sections/Reasons/Reasons.screen';
import Testimonials from './Sections/Testimonials/Testimonials.screen';
import { GlobalStyle } from './styles/general.styles';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Home/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
