import React, { Component } from 'react';
import { get } from 'lodash';

class InconspicuousInput extends Component {
    render() {
        return (
            <input {...this.props}
                type='text'
                className={`inconspicuous-input ${get(this.props, 'className', '')}`} />
        );
    }
}

export default InconspicuousInput;
