import { Component } from 'react';
import {products} from './data.js';
 console.log(products);


class Product extends Component {
    constructor() {
        super();
        this.state = {data : products};
    }

    render() { 
        const {data} = this.state;
        
        return (
           <div>
           {data.map((product)=>
            <div className="cardBody">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <h4>{product.price}</h4>
            </div>
            )}
           </div>
            
        )
       
    }
}
 
export  {Product};
