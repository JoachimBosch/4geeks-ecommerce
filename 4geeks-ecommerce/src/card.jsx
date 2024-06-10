import React from "react";

function Card({element}) {
    return (  
        <div className="card mb-3" key={element.id}>
            <h1>{element.name}</h1>
            <p>Category: {element.category}</p>
            <p>Price: {element.price}</p>
            <p>{element.inStock ? 'In Stock' : 'Out of Stock'}</p>
            <a href="#" class="btn btn-outline-success">Add to cart</a>
        </div>
  );
}

export default Card;