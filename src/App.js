import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer';


function App() {

  useEffect(() => {
    const menuLi = document.querySelectorAll('#menu li');

    function setMenuActive() {
      menuLi.forEach(n => n.classList.remove("active"));
      this.classList.add('active');
    }
    menuLi.forEach(n => n.addEventListener('click', setMenuActive))
  }, []);

  return (
    <div className="App">

      {/* header Section */}
      <Header />

      {/* Main Container */}
      <main>
        <div className='main-container'></div>
        <div className='right-menu'></div>
      </main>


      {/* Bottom Menu starts */}
      <div className="bottom-menu">
        <ul id="menu">
          <MenuContainer link={'#'} icon={<HomeRounded />} />
          <MenuContainer link={'#'} icon={<Chat />} />
          <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded />} />
          <MenuContainer link={'#'} icon={<Favorite />} />
          <MenuContainer link={'#'} icon={<SummarizeRounded />} />
          <MenuContainer link={'#'} icon={<Settings />} />
          <div className='indicator'></div>
        </ul>
      </div>
      {/* Bottom menu ends */}

    </div>
  );
}

export default App;
