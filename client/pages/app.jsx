import React, {Component} from "react";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import CommodityWeightWidget from "../components/commodity-weight-widget/commodity-weight-widget.jsx"


if (global.BROWSER) {
    require("./app.styl");
}

class App extends Component {

    render() {

        return (
            <section className="container">
                {
                    this.props.commodity.items
                        .map((item, index) => {
                            return <CommodityWeightWidget
                                makeCopy={Object.keys(this.props.commodity.items).length === 1}
                                id={`CommodityWeightWidget-${index}`} key={index}
                                data={item}/>
                        })
                }
            </section>
        )
    }
}


export default connect(state => {
    return {
        commodity: state.commodityWidget
    }
}, dispatch => {
    return {}
})(App);