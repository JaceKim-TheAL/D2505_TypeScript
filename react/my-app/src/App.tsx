// import React from 'react';
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Address, Restaurant } from './model/restaurant';
import BestMenu from './BestMenu';

let data = {
  name: "Jace's Diner",
  category: "Fast Food",
  address: {
    city: "Seoul",
    detail: "Nowon-gu, Wolgye-dong",
    zipcode: 12345
  },
  menu:[
    { name: "햄버그",  price: 6000, category: "main" },
    { name: "샐러드",  price: 3000, category: "side" },
    { name: "피자",    price: 5000, category: "main" },
    { name: "아이스크림", price: 2000, category: "dessert" },
    { name: "커피", price: 1500, category: "beverage" }
  ]
}

const App:React.FC = () => {
  // const [myRestaurant, setMyRestaurant] = useState(data);
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data)

  const changeAddress = (address:Address) => {
    setMyRestaurant({...myRestaurant, address: address})
  }

  const showBestMenuName = (name: string) => {
    return name 
  }
  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress}/>
      <BestMenu name="불고기피자" category="pizza" price={10000} showBestMenuName={showBestMenuName}/>
    </div>
  );
}

export default App;
