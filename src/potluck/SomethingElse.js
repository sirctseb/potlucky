import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import InconspicuousInput from './InconspicuousInput';

class SomethingElse extends Component {
    render() {
        return (
            <form className='something-else'
                onSubmit={this.props.handleSubmit((values) => {
                    this.props.onSubmit(values);
                    this.props.reset();
                })}>
                <Field name='bringer'
                    component={InconspicuousInput}
                    input={{
                        placeholder: 'Who are you?',
                    }} />
                <Field name='name'
                    component={InconspicuousInput}
                    input={{
                        placeholder: 'What are you bringing?',
                    }}/>
                <div type='submit'
                    onClick={this.props.handleSubmit((values) => {
                        this.props.onSubmit(values);
                        this.props.reset();
                    })}>
                    bring this
                </div>
            </form>
        );
    }
}

export default reduxForm({ form: 'something-else' })(SomethingElse);
