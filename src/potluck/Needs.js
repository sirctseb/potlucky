import React, { Component } from 'react';
import { get, map } from 'lodash';

class Needs extends Component {
    render() {
        const path = `potlucks/${this.props.params.potluckId}`;
        const { update } = this.props.firebase;
        return (
            <div className='needs'>
                <div className='needs__title'>What we need</div>
                {
                    map(get(this.props.potluck, 'needs'), (value, key) =>
                        !value.brought &&
                        <div key={key}
                            className='needs__need'
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
                            {value.name}
                        </div>)
                }
            </div>
        );
    }
}

export default Needs;
