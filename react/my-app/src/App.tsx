// import React from 'react';
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Address, Restaurant } from './model/restaurant';
import BestMenu from './BestMenu';

let data = {
  name: "John",
  category: "western",
  address: {
    city: "New York",
    detail: "123 Main St",
    zipcode: 10001
  },
  menu:[
    { name: "Burger", price: 5.99, category: "main" },
    { name: "Salad", price: 4.99, category: "side" },
    { name: "Pizza", price: 8.99, category: "main" },
    { name: "Ice Cream", price: 3.99, category: "dessert" },
    { name: "Coffee", price: 2.49, category: "beverage" }
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
