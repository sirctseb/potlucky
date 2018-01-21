import React, { Component } from 'react';
import { get } from 'lodash';

class InconspicuousInput extends Component {
    render() {
        return (
            <input {...(this.props.input || this.props)}
                placeholder={this.props.placeholder}
                type='text'
                className={`inconspicuous-input ${get(this.props, 'className', '')}`} />
        );
    }
}

export default InconspicuousInput;
