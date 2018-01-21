import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import InconspicuousInput from './InconspicuousInput';

class AddNeed extends Component {
    constructor(props) {
        super(props);
        this.submitThenReset = this.submitThenReset.bind(this);
    }
    submitThenReset(values) {
        this.props.onSubmit(values);
        this.props.reset();
    }
    render() {
        return (
            <form className='add-need'
                onSubmit={this.props.handleSubmit(this.submitThenReset)}>
                <h3 className='add-need__title'>What do you need?</h3>
                <Field name='name'
                    component={InconspicuousInput}
                    className='add-need__input' />
                <div className='add-need__submit'
                    onClick={this.props.handleSubmit(this.submitThenReset)}>
                    +
                </div>
            </form>
        );
    }
}

export default reduxForm({ form: 'add-need' })(AddNeed);
