import React, { useEffect, useState } from 'react'
import CardDetail from '../../src/components/common/card/CardDetail'
import { useLocation } from 'react-router-dom'

export default function ProductDetail() {

    const [products, setProducts] = useState();
    const location = useLocation();

    useEffect(() => {
        if(location.state){
            setProducts(location.state);
        }
    }, []);

    console.log(location);
  return (
    <div>
        {products && (<CardDetail title={products.title} description={products.description} image={products.images[0]}/>)}
    </div>
  )
}
