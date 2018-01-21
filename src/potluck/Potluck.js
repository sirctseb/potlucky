import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { get } from 'lodash';

import AddNeed from './AddNeed';
import Bringings from './Bringings';
import SomethingElse from './SomethingElse';
import InconspicuousInput from './InconspicuousInput';

const enhance = compose(
    firebaseConnect(props => ([
        `potlucks/${props.params.potluckId}`,
    ])),
    connect(({ firebase: { data: { potlucks } } }, props) => ({
        potluck: potlucks && potlucks[props.params.potluckId],
        path: `potlucks/${props.params.potluckId}`,
    })),
);

class Potluck extends Component {
    render() {
        const { path, firebase: { set } } = this.props;
        return (
            <div className='potluck'>
                <InconspicuousInput className='potluck__name-input'
                    value={get(this.props.potluck, 'name', '')}
                    onChange={ evt => set(`${path}/name`, evt.target.value) }/>
                <AddNeed onSubmit={(values) => {
                    this.props.firebase.push(
                        `${path}/bringings`,
                        values,
                    );
                }}/>
                <SomethingElse onSubmit={(values) => {
                    this.props.firebase.push(
                        `${path}/bringings`,
                        { ...values, bringer: '' },
                    );
                }}/>
                <Bringings {...this.props} />
            </div>
        );
    }
}

export default enhance(Potluck);
