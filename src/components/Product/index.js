import React, { Component } from 'react';

export default class Product extends Component {
    render() {
        return (
            <li>
                <dl> 
                    <dt>{ this.props.nome }</dt>
                    <dd>{ this.props.preco }</dd>
                    <dd>
                        <button className="btn btn--yellow" onClick={this.props.buyHandler}>Comprar</button>
                    </dd>
                </dl>
            </li>
        );
    }
}