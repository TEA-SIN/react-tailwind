import React, { useEffect, useState } from 'react'
import CardComponent from '../../src/components/common/card/CardComponent';
import PlaceHolder from '../../src/components/common/card/PlaceHolder';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading]= useState(false);

    const navigate = useNavigate();

    const handleClickCard = (item) => {
        navigate("/detail", {state: item})
    }

    useEffect( () => {
        setLoading(true);
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => {
            setProducts(data.products);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        });
    },[])

  return (
    <>
        <div className='flex flex-wrap justify-center gap-4 p-4'>
            {loading && [1,2,3,4,5,6].map((item, index)=><PlaceHolder/>)}
            {!loading && products.map((item, index)=><CardComponent onClickCard={()=>{
                handleClickCard(item)
            }} 
            title ={item.title}
            price ={item.price}
            image = {item.images[0]}
            key={index}/>)}
        </div>

    </>
  )
}
