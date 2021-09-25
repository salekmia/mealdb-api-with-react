import React from 'react';

const Details = (props) => {
    const {strMeal, strInstructions, strMealThumb, strYoutube}= props.details
    return (
        <div>
            {
                strMeal && <div>
                <img src={strMealThumb} className="card-img-top w-75" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{strMeal}</h5>
                    <p className="card-text">{strInstructions?.slice(0,70)}...</p>
                    <a className="btn btn-success" href={strYoutube}>Wacth</a>
                </div>
            </div>
            }
        </div>
    );
};

export default Details;