import { BarChart, SearchRounded, ShoppingCartRounded} from '@mui/icons-material';
import './Header.css'

import React from 'react';



const Header=()=>{
        
        return(
                <header>
                        <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc" className='logo'/>

                        <div className='input-box'>
                                <SearchRounded className='search-icon'/>
                                <input type="text" placeholder='Search'/>
                        </div>
                        <div className='shopping-cart'>
                                <ShoppingCartRounded className="cart"/>
                                <div className='cart-content'>
                                        <p>2</p>
                                </div>
                        </div>

                        <div className='profile-container'>
                                <div className='img-box'>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937" alt="" className='profile-pic'/>
                                </div>
                                <h2 className='username'>Chiranjiv Mohanty</h2>
                        </div>
                        <div className='toggle-menu'>
                                <BarChart className='toggle-icon'/>
                        </div>
                </header>
        )
}

export default Header;