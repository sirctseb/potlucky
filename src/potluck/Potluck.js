import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

const enhance = compose(
    firebaseConnect(props => ([
        `potlucks/${props.params.potluckId}`,
    ])),
    connect(({ firebase: { data: { potlucks } } }, props) => ({
        potluck: potlucks && potlucks[props.params.potluckId],
    })),
);

class Potluck extends Component {
    render() {
        const path = `potlucks/${this.props.params.potluckId}`;
        return (
            <div className='potluck'>
                <div className='potluck__name'>
                    { this.props.potluck && this.props.potluck.name }
                </div>
                <input type='text'
                    value={
                        this.props.potluck ?
                            this.props.potluck.name :
                            ''}
                    onChange={
                        evt => this.props.firebase.set(`${path}/name`, evt.target.value)
                    }/>
            </div>
        );
    }
}

export default enhance(Potluck);
