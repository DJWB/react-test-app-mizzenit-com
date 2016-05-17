import React, {Component} from "react";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actions from "./autocomplete-actions"

if (global.BROWSER) {
    require("./autocomplete.styl");
}

class Autocomplete extends Component {

    componentWillMount() {

        this.minimumInputLength = 2;

        this.results = [];

        this.delay = 0.5;

        this.state = {
            isShow: false,
            value: this.props.data ? this.props.data.text : ""
        };
        
        if(this.props.autocomplete.type === actions.TYPE_AUTOCOMPLETE_EMPTY){
            this.props.action.load();
        }
    }

    find(e) {
        let value = e.target.value;

        if (value.length >= this.minimumInputLength) {

            this.results = this.props.autocomplete.items
                .filter((item) => {
                    return item.text.indexOf(value) !== -1;
            });

            if(this.results.length) {
                this.setState({isShow: true});
            }

        } else if (this.state.isShow) {
            this.setState({isShow: false});
        }
        this.setState({value: value})
    }

    set(item) {
        this.props.onSelect.call(this, item);
        this.setState({isShow: false, value: item.text});
    }

    render() {

        return (
            <div className="autocomplete">
                <input value={this.state.value} placeholder="Commodity code or description"
                       type="text" {...this.props}
                       onChange={this.find.bind(this)}/>
                {this.state.isShow ? (
                    <ul className="results">
                        {this.results.map((item, index) => {
                            return <li key={index} onClick={this.set.bind(this, item)}>{item.text}</li>
                        })}
                    </ul>) : null
                }
            </div>

        )
    }
}

export default connect(state => {
    return {
        autocomplete: state.autocomplete
    }
}, dispatch => {
    return {
        action: bindActionCreators(actions, dispatch)

    }
})(Autocomplete);
