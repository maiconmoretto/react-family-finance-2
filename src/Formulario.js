import React, { Component } from "react";


class Fomulario extends Component {


    constructor(props) {
        super(props);
        this.stateInicial = {
            description: "",
            amount: "",
            category: "",
            spendAt: "",
            userId: "622213a205cbe91ac023f189"
        };


        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitForumulario = () => {
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);
    }


    render() {

        const { description, amount, category, spendAt, userId } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-field col s3">
                        <label  className="input-field" htmlFor="description">
                            Description
                        </label>
                        <input id="description"
                            type="text"
                            name="description"
                            value={description}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div className="input-field col s3">
                        <label className="input-field" htmlFor="amount">
                            Amount
                        </label>
                        <input id="amount"
                            type="text"
                            name="amount"
                            value={amount}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div className="input-field col s3">
                        <label className="input-field" htmlFor="category">
                            Category
                        </label>
                        <input id="category"
                            type="text"
                            name="category"
                            value={category}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div className="input-field col s3">
                        <label className="input-field" htmlFor="spendAt">
                            SpendAt
                        </label>
                        <input id="spendAt"
                            type="text"
                            name="spendAt"
                            value={spendAt}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <button className="waves-effect waves-light btn blue lighten-1" onClick={this.submitForumulario} type="button">Save</button>
                </div>
            </form>
        )
    }

}
export default Fomulario;