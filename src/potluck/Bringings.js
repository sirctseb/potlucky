import React, { Component } from 'react';
import { get, map } from 'lodash';

import Bringing from './Bringing';

class Bringings extends Component {
    render() {
        return (
            <div className='bringings'>
                <h2 className='bringings_title'>What we have</h2>
                {
                    map(get(this.props.potluck, 'bringings'), (value, key) =>
                        <Bringing key={key}
                            {...this.props}
                            bringing={value}
                            bringingKey={key} />)
                }
            </div>
        );
    }
}

export default Bringings;
