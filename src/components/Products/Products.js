import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    const [details, setDetails] = useState([])
    const [searchProduct, setSearchProduct] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
        .then(res => res.json())
        .then(data => {
            setProducts(data.meals)
            setSearchProduct(data.meals)
        })
    }, [])

    const handleDetails = (product) => {
        setDetails(product)
    }

    const handleSearchProduct = event => {
        const searchText = event.target.value
        const matchProduct = products.filter(product => product.strMeal.toLowerCase().includes(searchText.toLowerCase()))
        setSearchProduct(matchProduct)
    }

    return (
        <div className="row">
            <div className="col-md-8 border-end pe-4">
                <h3>Products: {searchProduct.length}</h3>
                <form action="" className="text-center p-2">
                    <input onChange={handleSearchProduct} className="form-control" type="text" placeholder="Search meals"/>
                </form>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        searchProduct.map(product => <Product product={product} handleDetails={handleDetails} key={product.idMeal}></Product>)
                    }
                </div>                
            </div>

            <div className="col-md-4" >
                <div style={{position: "fixed"}}>
                    <h3>Details: </h3>
                    <Details details={details}></Details>
                </div>
            </div>
        </div>
    );
};

export default Products;