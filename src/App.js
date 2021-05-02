import ImageLocat from './images/location.jpg';
import Logo from './images/map.svg'
import { InputContent } from './components/Input';
import { Footer} from './components/Footer'
import './index.css';


export const  App = () => {
  return (
      <div className="App">
          <div className="navcontainer"> 
              <img src={Logo} alt="logo" />
          </div>
          <div className="container">
              <div className='contentinput'>
                  <InputContent  />
              </div>           
              <div className="contentimg">
                  <img src={ImageLocat} alt="Imagem Maps"  />
              </div>
          </div>
          <Footer/>
    </div>
  );
}


