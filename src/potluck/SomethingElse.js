import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SomethingElse extends Component {
    render() {
        return (
            <form className='something-else'
                onSubmit={this.props.handleSubmit}>
                <label>Bring something else:
                    <Field name='name'
                        component={'input'}/>
                </label>
                <button type='submit'>
                    bring this
                </button>
            </form>
        );
    }
}

export default reduxForm({ form: 'something-else' })(SomethingElse);
