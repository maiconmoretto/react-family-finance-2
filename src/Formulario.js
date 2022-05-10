import React, { Component } from "react";


class Fomulario extends Component {

    render() {
        return (
            <form>
                <label for="description">
                    Description
                </label>
                <input id="description"
                        type="text"
                        name="description" />

            </form>
        )
    }

}
export default Fomulario;