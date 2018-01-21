import React, { Component } from 'react';

import InconspicuousInput from './InconspicuousInput';

class Bringing extends Component {
    render() {
        const {
            path, firebase: { set, update }, bringing, bringingKey,
        } = this.props;
        return (
            <div className='bringing'>
                <InconspicuousInput className='bringing__input'
                    value={bringing.bringer}
                    onChange={ evt => set(
                        `${path}/bringings/${bringingKey}/bringer`,
                        evt.target.value,
                    ) }
                    placeholder={'Who\'s bringing this?'} />
                <div className='bringing__name'>
                    {bringing.name}
                </div>
                <button className='bringing__nevermind'
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
