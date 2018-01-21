import React, { Component } from 'react';
import { get, map } from 'lodash';

class Needs extends Component {
    render() {
        const path = `potlucks/${this.props.params.potluckId}`;
        const { update, remove } = this.props.firebase;
        return (
            <div className='needs'>
                <div className='needs__title'>What we need</div>
                {
                    map(get(this.props.potluck, 'needs'), (value, key) =>
                        !value.brought &&
                        <div key={key}
                            className='needs__need'>
                            {value.name}
                            <div className='needs_need-bring'
                                title={'I\'ll bring this!'}
                                onClick={() => {
                                    update(path, {
                                        [`needs/${key}/brought`]: true,
                                        [`bringings/${key}`]: {
                                            bringer: '',
                                            neededKey: key,
                                            name: value.name,
                                        },
                                    });
                                }}>
                                o
                            </div>
                            <div className='needs_need-delete'
                                title={'Nevermind, we don\'t need this'}
                                onClick={() => {
                                    remove(`${path}/needs/${key}`);
                                }}>
                                x
                            </div>
                        </div>)
                }
            </div>
        );
    }
}

export default Needs;
