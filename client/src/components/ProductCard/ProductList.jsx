import ProductCard from './productCard';

const ProductList = ({ products }) => {
    return (
        <div className="">
            <div className="flex lg:flex-rows max-sm:flex-col flex-wrap">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
