
import './../App.css';
import Dieuhuong from '../dieuhuong/Dieuhuong';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Dieuhuong/>
      <Footer/>
    </div>
  );
}

export default App;
