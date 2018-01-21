import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { get, map } from 'lodash';

import AddNeed from './AddNeed';
import Needs from './Needs';
import SomethingElse from './SomethingElse';

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
                <input className='potluck__name-input'
                    type='text'
                    value={get(this.props.potluck, 'name', '')}
                    onChange={ evt => set(`${path}/name`, evt.target.value) }/>
                <AddNeed onSubmit={(values) => {
                    this.props.firebase.push(
                        `${path}/needs`,
                        values,
                    );
                }}/>
                <SomethingElse onSubmit={(values) => {
                    this.props.firebase.push(
                        `${path}/bringings`,
                        { ...values, bringer: '' },
                    );
                }}/>
                <Needs {...this.props} />
                {
                    map(get(this.props.potluck, 'bringings'), (value, key) =>
                        <div key={key}
                            className='potluck__bringing'>
                            <input className='potluck__bringer-input'
                                type='text'
                                value={value.bringer}
                                onChange={ evt => set(
                                    `${path}/bringings/${key}/bringer`,
                                    evt.target.value,
                                ) }/>
                            <div className='potluck__bringing-name'>
                                {value.name}
                            </div>
                            <button className='potluck__bringing-nevermind'
                                onClick={() => {
                                    update(path, {
                                        [`needs/${value.neededKey}/brought`]: null,
                                        [`bringings/${key}`]: null,
                                    });
                                }}>
                                Nevermind
                            </button>
                        </div>)
                }
            </div>
        );
    }
}

export default enhance(Potluck);
