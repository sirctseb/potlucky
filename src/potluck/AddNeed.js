import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class AddNeed extends Component {
    render() {
        return (
            <form className='add-need'
                onSubmit={this.props.handleSubmit}>
                <Field name='name'
                    component={'input'}/>
                <button type='submit'>
                    Add need
                </button>
            </form>
        );
    }
}

export default reduxForm({ form: 'add-need' })(AddNeed);
