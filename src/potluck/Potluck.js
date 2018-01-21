import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { get } from 'lodash';

import * as actions from './actions';

import Host from './Host';
import Bringings from './Bringings';
import SomethingElse from './SomethingElse';
import InconspicuousInput from './InconspicuousInput';

const enhance = compose(
    firebaseConnect(props => ([
        `potlucks/${props.params.potluckId}`,
    ])),
    connect(
        ({ firebase: { data: { potlucks } }, potluck: ui }, props) => ({
            potluck: potlucks && potlucks[props.params.potluckId],
            ui,
            path: `potlucks/${props.params.potluckId}`,
        }),
        dispatch => ({
            actions: bindActionCreators(actions, dispatch),
        }),
    ),
);

class Potluck extends Component {
    render() {
        const { path, firebase: { set } } = this.props;
        return (
            <div className='potluck'>
                <InconspicuousInput className='potluck__name-input'
                    value={get(this.props.potluck, 'name', '')}
                    onChange={ evt => set(`${path}/name`, evt.target.value) }/>
                <Host {...this.props} />
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
