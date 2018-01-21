import React, { Component } from 'react';
import { get, map } from 'lodash';

import Need from './Need';

class Needs extends Component {
    render() {
        return (
            <div className='needs'>
                <div className='needs__title'>What we need</div>
                <div className='needs__need-list'>
                    {
                        map(get(this.props.potluck, 'needs'), (value, key) =>
                            !value.brought &&
                            <Need {...this.props}
                                key={key}
                                need={value}
                                needKey={key} />)
                    }
                </div>
            </div>
        );
    }
}

export default Needs;
