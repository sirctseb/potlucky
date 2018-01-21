import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { get } from 'lodash';

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
                <input type='text'
                    value={get(this.props.potluck, 'name', '')}
                    onChange={
                        evt => this.props.firebase.set(
                            `${path}/name`,
                            evt.target.value,
                        )
                    }/>
            </div>
        );
    }
}

export default enhance(Potluck);
