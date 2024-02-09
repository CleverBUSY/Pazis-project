import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../store/slice/productsReducer';

const Products = () => {
    const dispatch = useDispatch();
    const { categoryId } = useParams();
    const { productsData } = useSelector(store => store.products);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showDescription, setShowDescription] = useState({}); 

    useEffect(() => {
        dispatch(fetchProducts(categoryId));
    }, [dispatch, categoryId]);

    const filteredProducts = productsData && productsData.length > 0
        ? productsData.filter(product => product.category && product.category.id === parseInt(categoryId))
        : [];

    const handleToggleDescription = (product) => {
        setShowDescription(prevState => ({
            ...prevState,
            [product.id]: !prevState[product.id]
        }));
        setSelectedProduct(product);
    };

    console.log("categoryId:", categoryId);
    console.log("productsData:", productsData);
    console.log("filteredProducts:", filteredProducts);

    return (
        <div>
            <section class="text-gray-400 body-font bg-gray-900">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full mb-20">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Products</h1>
                            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                    </div>

                    {productsData ? (
                        <div class="flex flex-wrap -m-4">
                            {filteredProducts.slice(1,13).map(product => (
                                <div key={product.id} class="xl:w-1/4 md:w-1/2 p-4">
                                    <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                                        <img class="h-40 rounded w-full object-cover object-center mb-6" src={product.images[0]} alt="content" />
                                        <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">{product.category.name}</h3>
                                        <h2 class="text-lg text-white font-medium title-font mb-4">{product.title}</h2>
                                        <h2 class="text-lg text-white font-medium title-font mb-4">${product.price}</h2>
                                        {(showDescription[product.id]) ? (
                                            <p class="leading-relaxed text-base">{product.description}</p>
                                        ) : (
                                            <p class="leading-relaxed text-base">{product.description.slice(0, 60)}</p>
                                        )}
                                        <p  onClick={() => handleToggleDescription(product)} class="cursor-pointer  w-40 border-0 underline focus:outline-none rounded text-base">
                                            {showDescription[product.id] ? 'scroll up' : 'scroll down'}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Products;
