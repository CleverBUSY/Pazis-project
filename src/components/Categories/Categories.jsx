import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCatalog } from '../../store/slice/catalogReducer';

const Categories = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector(store => store.catalog);

    useEffect(() => {
        dispatch(fetchCatalog());
    }, [dispatch]);

    if (!categories.length) {
        return <h1>Loading...</h1>;
    }

    // <div>
    //     <h1>Categories</h1>
    //     <ul>
    //         {categories.slice(0,5).map(category => (
    //             console.log(category.id),
    //             <li key={category.id}>
    //                 <Link to={`/products/${category.id}`}>{category.name}</Link>
    //             </li>
    //         ))}
    //     </ul>
    // </div>
    return (
        <>
            <section class="text-gray-400 body-font bg-gray-900">
  <div class="container text-center px-5 py-24 mx-auto">
                <h1 className='tracking-widest text-indigo-400 font-medium text-3xl mb-10 title-font'>CATEGORIES</h1>
    <div class="flex gap-10 justify-center flex-wrap -m-4">
        
           {categories.slice(0,5).map(category => (
                        console.log(category.id),
      <div key={category.id} class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to={`/products/${category.id}`}>
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={category.image}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY :</h3>
          <h2 class="tracking-widest text-indigo-400 font-medium text-lg title-font">{category.name}</h2>
        </div>
                            </Link>
      </div>               
                       
                    ))} 
        
    </div>
  </div>
</section>
</>
    );

}
export default Categories;
