import React, { Component } from "react";


const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Actions</th>
            </tr>
        </thead>);
}

const TableBody = props => {
    console.log(props);

    if (props.DataisLoaded == false) {
        return (
            <tbody>
                <tr>
                    <td>Wait a minute...</td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        );
    } else {
        const linhas = props.items.map((linha, index) => {
            return (
                <tr key={index}>
                    <td>{linha.description}</td>
                    <td>R$ {linha.amount}</td>
                    <td>{linha.category}</td>
                    <td><button onClick={() => { props.removeItem(index) }}>Remover</button></td>
                </tr>
            );
        });


        return (
            <tbody>
                {linhas}
            </tbody>
        );
    }
}

class Tabela extends Component {

    render() {

        const { items, removeItem, DataisLoaded } = this.props;
        console.log(items);

        return (
            <table>
                <TableHead />
                <TableBody items={items} removeItem={removeItem} DataisLoaded={DataisLoaded} />
            </table>
        );
    }

}

export default Tabela;