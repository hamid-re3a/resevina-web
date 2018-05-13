import React, { Component } from 'react';

class Product extends Component {
    render() {
        const { params } = this.props.match;
        console.log(params);
        return (
            <div>
                <h2>Product : {params.id}</h2>
            </div>
        );
    }
}

export default Product;
