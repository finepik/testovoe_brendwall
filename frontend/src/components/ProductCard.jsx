import '../styles/ProductCard.css'


export const ProductCard = ({ name, description, price }) => {
    return (
        <div className="product-card">
            <p className="product-title">{name}</p>
            <p className="product-description">Описание продукта: {description}</p>
            <p className="product-price">Цена: {price} ₽</p>
        </div>
    );
};