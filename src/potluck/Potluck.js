import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { get, map } from 'lodash';

import AddNeed from './AddNeed';

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
        const { update, set } = this.props.firebase;
        return (
            <div className='potluck'>
                <input type='text'
                    value={get(this.props.potluck, 'name', '')}
                    onChange={ evt => set(`${path}/name`, evt.target.value) }/>
                <AddNeed onSubmit={(values) => {
                    this.props.firebase.push(
                        `${path}/needs`,
                        values,
                    );
                }}/>
                {
                    map(get(this.props.potluck, 'needs'), (value, key) =>
                        <div key={key}
                            className='potluck__need'
                            onClick={() => {
                                update(path, {
                                    [`needs/${key}/brought`]: true,
                                    [`bringing/${key}`]: {
                                        bringer: '',
                                        neededKey: key,
                                        name: value.name,
                                    },
                                });
                            }}>
                            {value.name}
                        </div>)
                }
            </div>
        );
    }
}

export default enhance(Potluck);
