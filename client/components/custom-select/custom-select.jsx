import React, {Component} from "react";
import {DropdownButton, MenuItem} from "react-bootstrap"


class CustomSelect extends Component {


    getTitle() {

        if (this.props.selected) {

            let title = "";

            this.props.options
                .every((item) => {
                    if (item.value === this.props.selected) {
                        title = item.title;
                        return false;
                    }

                    return true;
                });

            return title;
        }

        return this.props.title;

    }

    render() {


        return (
            <DropdownButton {...this.props} title={this.getTitle()}>
                {this.props.options.map((item, index) => {
                    return <MenuItem eventKey={item.value} key={index}>{item.title}</MenuItem>
                })}
            </DropdownButton>

        )
    }
}

export default CustomSelect;
