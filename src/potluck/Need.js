import React, { Component } from 'react';

class Need extends Component {
    render() {
        const {
            path,
            firebase: { update, remove },
            need,
            needKey: key,
        } = this.props;
        return (
            <div className='need'>
                <div className='need__button'
                    title={'I\'ll bring this!'}
                    onClick={() => {
                        update(path, {
                            [`needs/${key}/brought`]: true,
                            [`bringings/${key}`]: {
                                bringer: '',
                                neededKey: key,
                                name: need.name,
                            },
                        });
                    }}>
                    o
                </div>
                <div className='need__elaboration'>
                    I'll bring this!
                </div>
                {need.name}
                <div className='need__button'
                    title={'Nevermind, we don\'t need this'}
                    onClick={() => {
                        remove(`${path}/needs/${key}`);
                    }}>
                    x
                </div>
                <div className='need__elaboration'>
                    Nevermind, we don't need this
                </div>
            </div>
        );
    }
}

export default Need;
