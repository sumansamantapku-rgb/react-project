import React from 'react'
import { ShopContext } from '../context/ShopContext';
import { useContext} from 'react';
import { useState} from 'react';
import { useEffect} from 'react';
import Title from './Title';
import Productitem from './Productitem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0, 5))
    } ,[])

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-34 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deleniti illo iusto id non sit repellendus nobis earum, corporis voluptatum quisquam, necessitatibus explicabo mollitia eos quidem similique sapiente culpa eum.
            </p>
        </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 gap-y-6'>
        {
        bestSeller.map((item, index)=>(
            <Productitem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
        ))}
      </div>
    </div>
  )
}

export default BestSeller
