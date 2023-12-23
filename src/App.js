import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Nav from './Nav';
import Header from './Header';
import Cart from './Cartiteam';
import Footer from './Foot'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react';

function App() {
  const [addcart, setAddCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const appDetails = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/71657TiFeHL._SX679_.jpg",
      headName: "Iphone 15",
      originalPrice: 899,
      discountedPrice: 799,
      last: "Add to cart"
    },
    {
      id: 2,
      image : "https://m.media-amazon.com/images/I/71gktkb97iL._SY695_.jpg",
      headName: "Apple Watch Series 7",
      imgName: 'sale',
      popularity: 5,
      discountedPrice: 199,
      originalPrice: 299,
      last: "Add to cart"
    },
    {
      id: 3,
      image : "https://m.media-amazon.com/images/I/2110TEYPKnL._SX300_SY300_QL70_FMwebp_.jpg",
      imgName: 'sale',
      headName: "AirPods Max",
      originalPrice: 150,
      discountedPrice: 129,
      last: "Add to cart"
    },
    {
      id: 4,
      image : "https://m.media-amazon.com/images/I/61Tedl8bksL._SX679_.jpg",
      headName: "iMac ",
      popularity: 5,
      discountedPrice: 1699,
      originalPrice: 1799,
      last: "Add to cart"
    },
    {
      id: 5,
      image : "https://m.media-amazon.com/images/I/816DD5Kg7mL._SX679_.jpg",
      imgName: 'sale',
      headName: "Apple Pro Display XDR",
      originalPrice: 599,
      discountedPrice: 499,
      last: "Add to cart"
    },
    {
      id: 6,
      image : "https://m.media-amazon.com/images/I/61YCWzjldDL._SX679_.jpg",
      headName: "MacBook Pro ",
      originalPrice: 1699,
      discountedPrice: 1599,
      last: "Add to cart"
    },
    {
      id: 7,
      image : "https://m.media-amazon.com/images/I/8124D1qS2UL._SX679_.jpg",
      headName: "iPad Pro ",
      imgName: 'sale',
      popularity: 5,
      discountedPrice: 68,
      originalPrice: 78,
      last: "Add to cart"
    },
    {
      id: 8,
      image : 'https://m.media-amazon.com/images/I/31+G-o8iK-L._SX342_SY445_.jpg',
      headName:"MacBook Air (M1)",
      popularity: 5,
      discountedPrice: 1099,
      originalPrice: 1199,
      last: "Add to cart"
    },
  ];

  let handleAddtoCart = (details) => {
    setAddCart([...addcart, details]);
    setTotalPrice(totalPrice + ((details.discountedPrice)? details.discountedPrice : details.singlePrice));
  }
  let handleRemove = (item) => {
    let indexItem = addcart.findIndex(obj => obj.id === item.id);
    addcart.splice(indexItem, 1);
    setAddCart([...addcart]);
    setTotalPrice(totalPrice - ((item.discountedPrice)? item.discountedPrice : item.singlePrice));
  }

  return (
    <>
      <Nav addcart={addcart} setAddCart={setAddCart} handleRemove={handleRemove} totalPrice={totalPrice}></Nav>
      <Header></Header>
      <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                      appDetails.map((detail, index) => {
                      return <Cart details = {detail} key={index} handleAddtoCart={handleAddtoCart}></Cart>})
                    }
                </div>
            </div>
        </section>
        <Footer></Footer>
    </>
  );
}

export default App;