import React, { Component } from 'react';
import { get, map } from 'lodash';

class Bringings extends Component {
    render() {
        const { path, firebase: { set, update } } = this.props;
        return (
            <div className='bringings'>
                {
                    map(get(this.props.potluck, 'bringings'), (value, key) =>
                        <div key={key}
                            className='bringings__bringing'>
                            <input className='bringings__input'
                                type='text'
                                value={value.bringer}
                                onChange={ evt => set(
                                    `${path}/bringings/${key}/bringer`,
                                    evt.target.value,
                                ) }/>
                            <div className='bringings__name'>
                                {value.name}
                            </div>
                            <button className='bringings__nevermind'
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

export default Bringings;
