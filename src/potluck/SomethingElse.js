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
                <h4 className='something-else__title'>
                    or bring something else:
                </h4>
                <div className='something-else__inputs'>
                    <Field name='bringer'
                        component={InconspicuousInput}
                        placeholder='Who are you?' />
                    <Field name='name'
                        component={InconspicuousInput}
                        placeholder='What are you bringing?' />
                    <div className='something-else__submit'
                        onClick={this.props.handleSubmit((values) => {
                            this.props.onSubmit(values);
                            this.props.reset();
                        })}>
                        bring it!
                    </div>
                </div>
            </form>
        );
    }
}

export default reduxForm({ form: 'something-else' })(SomethingElse);
