import { useState } from 'react';
const initialProducts = [
  {
  imgUrl:'https://www.blr.onlyhydroponics.in/cdn/shop/products/capsicum-green2.jpg?v=1668171833&width=1946',
  title:'Green Capsicum',
  id: 1,
  price: 40 
  },
  {
  imgUrl:'https://cdnprod.mafretailproxy.com/sys-master-root/h95/hb6/12631759421470/490008_main.jpg_480Wx480H',
  title:'Red Capsicum',
  id: 2,
  price: 50 
  },
  {
  imgUrl:'https://eco-fruits.com/wp-content/uploads/2020/03/Artboard-18-570x570.png',
  title:'Sujapuri Mango',
  id: 3,
  price: 20 
  },
  {
  imgUrl:'https://veggies.my/cdn/shop/products/chineselongcabbage.jpg?v=1605451121',
  id: 4,
  title:'Chinese Cabbage',
  price: 40 
  }
];
export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setTotalPrice(totalPrice + product.price);
  };

  const removeFromCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct && existingProduct.quantity > 1) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
      setTotalPrice(totalPrice - product.price);
    } else {
      const updatedCart = cart.filter(item => item.id !== product.id);
      setCart(updatedCart);
      setTotalPrice(totalPrice - product.price * product.quantity);
    }
  };

  const removeProduct = (product) => {
    const updatedCart = cart.filter(item => item.id !== product.id);
    setCart(updatedCart);
    setTotalPrice(totalPrice - product.price * product.quantity);
  };
  return(
    <div className="bg-[#F5F5F5]">
<div className="container pt-[40px] pb-[34px]">
    <h1 className="text-[32px] text-[#1A1A1A] font-semibold text-center">
      My shopping Cart
      </h1>
<div className='flex gap-x-[24px] mt-[32px]'>
<div className='bg-[#ffff] rounded-[8px] border-[gray]'>
<div className='flex py-[16px] pr-[96px] pl-[20px] gap-x-[314px] items-center'>
<div>
<h3 className='text-[#808080] text-[14px] font-medium'>PRODUCT</h3>
</div>
<div className='flex items-center'>
<h3 className='text-[#808080] text-[14px] font-medium'>PRICE</h3>
<h3 className='text-[#808080] ml-[73px] mr-[114px] text-[14px] font-medium'>QUANITY</h3>
<h3 className='text-[#808080] text-[14px] font-medium'>SUBTOTAL</h3>
</div>  
</div>
<hr />
{initialProducts.map((data)=>{
return(
  <div key={data.id} className="flex items-center pt-[12px]">
<div className='flex gap-x-[12px] items-center w-[300px]'>
  <img src={data.imgUrl} className="w-[100px] h-[100px]"/>
  <h4 className='text-[#1A1A1A] text-[15px] font-normal mt-[5px]'>{data.title}</h4>
</div>
<div className='ml-[105px]'>
  <h4 className='text-[16px] text-[#1A1A1A] font-normal'>${data.price}</h4>
</div> 
<div className="flex ml-[70px]">
  </div>  
<div>
</div>
<div className='ml-[71px]'>
<button onClick={() => removeProduct(data)}><i className="fa-regular fa-circle-xmark scale-[1.2] text-[gray]"></i></button>
</div>
</div>
)
})}
</div>
<div className='bg-[#ffff] rounded-[8px] border-[gray] p-[24px] h-[300px]'>
<h3 className='text-[#1A1A1A] text-[20px] font-medium'>Cart Total</h3>
<div className='flex items-center mt-[7px]'>
<h3 className=' font-normal text-[14px] text-[#4D4D4D]'>Subtotal:</h3>
<h3 className='text-[#1A1A1A] text-[14px] font-medium ml-[265px]'></h3>
</div>
<hr className='bg-[#E5E5E5] h-[1px] mt-[12px] mb-[13px]'/>
<div className='flex items-center'>
<h3 className=' font-normal text-[14px] text-[#4D4D4D]'>Shipping:</h3>
<h3 className='text-[#1A1A1A] text-[14px] font-medium ml-[265px]'>Free</h3>
</div>
<hr className='bg-[#E5E5E5] h-[1px] mt-[12px] mb-[13px]'/>
<div className='flex items-center'>
<h3 className=' font-normal text-[14px] text-[#4D4D4D]'>Total:</h3>
<h3 className='text-[#1A1A1A] text-[14px] font-medium ml-[300px]'>${totalPrice}</h3>
</div>
<button className=' py-[16px] px-[102px] bg-[#00B207] hover:bg-[#36bb3b] text-[white] text-[16px] rounded-[43px] mt-[32px]'>
Proceed to checkout
</button>
</div>
</div>

  </div>
  </div>
     )
}  
