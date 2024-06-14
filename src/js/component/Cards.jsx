import React from "react";

const Cards = () => {
    return (
        <div className="card">
            <img src="https://i.pinimg.com/736x/95/62/2b/95622b0907d333e04208ecc5b8bb63f4.jpg" className="card-img-top img-fluid" alt="Imagem do card"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default Cards;