import React, {Component} from "react";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {DropdownButton, MenuItem} from "react-bootstrap"

import Autocomplete from "../autocomplete/autocomplete.jsx"
import CustomSelect from "../custom-select/custom-select.jsx"

import * as actions from "./commodity-weight-widget-actions"


if (global.BROWSER) {
    require("./commodity-weight-widget.styl");
}

class CommodityWeightWidget extends Component {


    componentWillMount() {
        this.qualityList = [{
            value: 1,
            title: "Is food quality"
        }, {
            value: 2,
            title: "not food quality"
        }];


    }

    copy() {
        if (this.props.makeCopy) {
            this.props.action.copyItem(this.props.data)
        }
    }

    setWeight(event) {
        this.props.data.weight = event.target.value;
        this.props.action.setItem(this.props.data);
    }

    setType(eventKey) {
        this.props.data.type = eventKey;
        this.props.action.setItem(this.props.data);
    }

    setValue(item) {
        this.props.data.value = item;
        this.props.action.setItem(this.props.data);
    }

    render() {

        return (
            <form className="commodity-weight-widget-component form-inline">
                <div className="form-group">
                    <DropdownButton title={this.props.data.title ? this.props.data.title : "2 x 20` Dry"}
                                    id={'type-' + this.props.id} onSelect={this.copy.bind(this)}>
                        <MenuItem eventKey="1">List containers separately</MenuItem>
                    </DropdownButton>
                </div>

                <div className="form-group">
                    <Autocomplete className="form-control" onSelect={this.setValue.bind(this)}
                                  data={this.props.data.value}/>
                </div>

                <div className="input-group">
                    <input type="number" className="form-control" defaultValue={this.props.data.weight}
                           onChange={this.setWeight.bind(this)}
                           placeholder="Freight weight"/>
                    <span className="input-group-addon">kg</span>
                </div>

                <div className="form-group">
                    <CustomSelect onSelect={this.setType.bind(this)} selected={this.props.data.type}
                                  id={'quality-' + this.props.id} options={this.qualityList} title="Choose quality"/>
                </div>
            </form>
        )
    }
}

export default connect(state => {
    return {}
}, dispatch => {
    return {
        action: bindActionCreators(actions, dispatch)
    }
})(CommodityWeightWidget);
