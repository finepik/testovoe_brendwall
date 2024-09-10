import { useState } from 'react';
import '../styles/ProductForm.css';
import axios from 'axios';


export const ProductForm = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const [backendErrors, setBackendErrors] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            name,
            description,
            price,
        };

        axios.post(props.link, newProduct)
        .then(response => {
            props.submitHandler();
            resetForm();
        })
        .catch(error => {
        console.log(error)
            setBackendErrors(error.response.data)
        });

    };

    const resetForm = () => {
        setName('');
        setDescription('');
        setPrice('');
        setBackendErrors('')
    };

    const showErrorName = (data) => {
        console.log(data)
        if (data && data?.name && data.name.length > 0){
            return `Название: ${data.name.map(el => el)}`
        }
    }
    const showErrorPrice = (data) => {
        console.log('wtyf', data)
        if (data && data?.price && data.price.length > 0){
            return `Цена: ${data.price.map(el => el)}`
        }
    }

    return (
        <form onSubmit={handleSubmit} className="product-form">
            <div>
                <label htmlFor="title">Название:</label>
                <input
                    type="text"
                    id="title"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Описание:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="price">Цена:</label>
                <input
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            {backendErrors && (
                <p style={{color:'red'}}>
                    {showErrorName(backendErrors)}
                    <br/>
                    {showErrorPrice(backendErrors)}
                </p>
            )}
            <button type="submit">Создать продукт</button>
        </form>
    );
};

export default ProductForm;