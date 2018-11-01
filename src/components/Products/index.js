import React, { Component } from 'react';

export default class Products extends Component {
    render() {
        console.log(this);
        
        return (
            <div>
                <h3>{ `Lista de produtos - ${ this.props.type }`}</h3>
                <ul>
                    { this.props.children }
                </ul>
            </div>
        );
    }
}