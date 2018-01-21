import React, { Component } from 'react';

class Bringing extends Component {
    render() {
        const {
            path, firebase: { set, update }, bringing, bringingKey,
        } = this.props;
        return (
            <div className='bringing'>
                <input className='bringings__input'
                    type='text'
                    value={bringing.bringer}
                    onChange={ evt => set(
                        `${path}/bringings/${bringingKey}/bringer`,
                        evt.target.value,
                    ) }/>
                <div className='bringings__name'>
                    {bringing.name}
                </div>
                <button className='bringings__nevermind'
                    onClick={() => {
                        update(path, {
                            [`needs/${bringing.neededKey}/brought`]: null,
                            [`bringings/${bringingKey}`]: null,
                        });
                    }}>
                    Nevermind
                </button>
            </div>
        );
    }
}

export default Bringing;
