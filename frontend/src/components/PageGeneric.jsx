import shopLogo from '/logo.svg'
// import './App.css'
import { ProductCard } from './ProductCard'
import ProductForm from './ProductForm'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const PageGeneric = () => {
  const link = "http://localhost:8000/api/products_with_generic_view/"
  const [products, setProducts] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  const getProducts = () => {
    console.log('send request')
      setIsFetching(true)
      axios.get('http://localhost:8000/api/products_with_generic_view/')
      .then(response => {
        setProducts(response.data)
        console.log('Список продуктов:', response.data);
        setIsFetching(false)
      })
      .catch(error => {
        console.error('Ошибка при получении списка продуктов:', error);
        setIsFetching(false)
      });
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      <div>
        <img src={shopLogo} className="logo react" alt="shop logo" />
      </div>
      <h1>Products in shop:</h1>

      {isFetching ? (
        <div className="loader"></div>
      ) : products.length > 0 ? ( 
        products.map( product => (
          <ProductCard 
            key={product.pk}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))
      ) : (
        <p>Продукты не найдены</p>
      )}
        
      <ProductForm submitHandler={getProducts} link={link}/>
    </>
  )
}