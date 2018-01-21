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
                {need.name}
                <div className='need__bring'
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
                <div className='need__delete'
                    title={'Nevermind, we don\'t need this'}
                    onClick={() => {
                        remove(`${path}/needs/${key}`);
                    }}>
                    x
                </div>
            </div>
        );
    }
}

export default Need;
