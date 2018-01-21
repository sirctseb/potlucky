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
                    value={bringing.bringer || ''}
                    onChange={ evt => set(
                        `${path}/bringings/${bringingKey}/bringer`,
                        evt.target.value,
                    ) }
                    placeholder={
                        this.props.ui.isHost ?
                            'Who\'s bringing this?' :
                            'I\'ll bring it!'
                    } />
                <div className='bringing__name'>
                    {bringing.name}
                </div>
                {
                    this.props.ui.isHost &&
                    <div className='bringing__nevermind'
                        onClick={() => {
                            update(path, {
                                [`needs/${bringing.neededKey}/brought`]: null,
                                [`bringings/${bringingKey}`]: null,
                            });
                        }}>
                        x
                    </div>
                }
                <div className='bringing__nevermind-elaboration'>
                    {
                        `Nevermind, we don't need this${bringing.bringer && ` (be sure to let ${bringing.bringer} know)`}`
                    }
                </div>
            </div>
        );
    }
}

export default Bringing;
