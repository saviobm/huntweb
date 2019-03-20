import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
    state = {
        products : []
    };

    // Método chamado assim que o componente é renderizado
    // NamedFunction - Métodos padrões do React podem utilizar named functions
    componentDidMount() {
        this.loadProducts();
    }
    // ArowFunction - Tem que utilizar para poder enxergar o escopo this e métodos da classe
    // e também não sobrescreve o valor do this.
    // ver vídeo sobre async await
    loadProducts = async () => {
        const response = await api.get('/products');
        console.log(response.data.docs);
        this.setState({ products : response.data.docs });
    }   
    render() {
        return (
            <div className="product-list">
                { this.state.products.map(
                    // toda vez que usar o map do javascript o react exige que o primeiro
                    // elemento no caso a tag <h2> tem que existir uma key com um valor único                    
                    product => (
                        <h2 key={product._id}>{product.title}</h2>
                    )
                )}
            </div>
        );
    }
}