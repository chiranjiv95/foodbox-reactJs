import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import { useEffect } from 'react';
import './App.css';
import Banner from './Components/Banner';
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

      {/* Header Section */}
      <Header />

      {/* Main Container */}
      <main>
        <div className='main-container'>
          <div className="banner">
            <Banner name={"Chiranjiv"} discount={"20"} link={"#"} />
            <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337" alt="banner image" className='delivery-img' />
          </div>
        </div>
        <div className='right-menu'></div>
      </main>


      {/* Bottom Menu starts */}
      <div className="bottom-menu">
        <ul id="menu">
          <MenuContainer link={'#'} icon={<HomeRounded />} isHome />
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
