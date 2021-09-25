import React from 'react';

const Product = (props) => {
    const {strMeal, strInstructions, strMealThumb, strYoutube} = props.product
    return (
        <div> 
            <div className="col">
                <div className="card h-100">
                <img src={strMealThumb} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="cart-title">{strMeal}</h5>
                        <p className="card-text">{strInstructions?.slice(0,70)}...</p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-success" href={strYoutube}>Watch</a>
                            <button onClick={() => props.handleDetails(props.product)} className="btn btn-info"><i className="far fa-heart"></i> Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;