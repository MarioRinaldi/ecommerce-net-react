import React, { Component, Fragment } from 'react';
import Parser from '../../parser';
import Products from '../../components/Products';
import Product from '../../components/Product';

export default class HomePage extends Component {
    constructor () {
        super();
        this.state = {
            listaTv: [],
            listaInternet: [],
            listaFone: [],
            listaCelular: [],
            carrinho: []
        }
    }
    componentDidMount () {
        var parser = new Parser();
        parser.then(parse => {
            window.instanceParser = parse;
            this.updateProducts();
        })
    }
    updateProducts = () => {
        this.setState({
            listaTv: window.instanceParser.data.filterProduct('tv'),
            listaInternet: window.instanceParser.data.filterProduct('internet'),
            listaFone: window.instanceParser.data.filterProduct('fone'),
            listaCelular: window.instanceParser.data.filterProduct('celular'),
            carrinho: this.getCart() 
        });
    }
    getCart = () => {
        const cart = window.instanceParser.cart.selection;
        const productTypes = window.instanceParser.cart.selection ? Object.keys(window.instanceParser.cart.selection).filter((product, type) => type !== 'combo' && type !== 'selecoes') : [];
        return productTypes.map(type => cart[type]);
    }
    selectProduct = (type, id) => {
        window.instanceParser.cart.addProduct(type, id);
        this.updateProducts();
    }
    render() {
        console.log('listaTv', this.state.listaTv);
        return (
            <Fragment>
                <p>home</p>
                <Products type="tv">
                    { 
                        this.state.listaTv.map(product => {
                            return <Product 
                                key={ product.id }
                                nome={ product.nome }
                                preco={ product.preco }
                                buyHandler={ () => {
                                    this.selectProduct('tv', product.id);
                                }}
                            />
                        })
                    }
                </Products>

                <Products type="internet">
                    {
                        this.state.listaInternet.map(product => {
                            return <Product
                                key={product.id}
                                nome={product.nome}
                                preco={product.preco}
                                buyHandler={() => {
                                    this.selectProduct('internet', product.id);
                                }}
                            />
                        })
                    }
                </Products>

                <Products type="fone">
                    {
                        this.state.listaFone.map(product => {
                            return <Product
                                key={product.id}
                                nome={product.nome}
                                preco={product.preco}
                                buyHandler={() => {
                                    this.selectProduct('fone', product.id);
                                }}
                            />
                        })
                    }
                </Products>

                <Products type="celular">
                    {
                        this.state.listaCelular.map(product => {
                            return <Product
                                key={product.id}
                                nome={product.nome}
                                preco={product.preco}
                                buyHandler={() => {
                                    this.selectProduct('celular', product.id);
                                }}
                            />
                        })
                    }
                </Products>

                {
                    this.state.carrinho.map((type) => {
                        return type.id;
                    })
                }
            </Fragment>
        );
    }
}