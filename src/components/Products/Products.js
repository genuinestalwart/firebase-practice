import useProducts from '../../hooks/useProducts';
import useStorage from '../../hooks/useStorage';
import Product from '../Product/Product';
import Summary from '../Summary/Summary';

const Products = () => {
    const [products] = useProducts();
    const [list, setList] = useStorage();

    const handleAddToCart = (product) => {
        const newList = [...list, product];
        setList(newList);
        localStorage.setItem('selectedProducts', JSON.stringify(newList));
    };

    const handleClearCart = () => {
        setList([]);
        localStorage.removeItem('selectedProducts');
    };

    return (
        <div className='flex'>
            <div className='gap-8 grid grid-cols-3 p-16 w-3/4'>
                {
                    products.map(product => <Product handler={handleAddToCart} key={product.id} product={product}></Product>)
                }
            </div>

            <Summary handler={handleClearCart} list={list}></Summary>
        </div>
    );
};

export default Products;