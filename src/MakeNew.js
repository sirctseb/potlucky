import React from 'react';
import NewIcon from './NewIcon';

export default props => (
    <div className='make-new'>
        <div className='make-new__icon-wrapper'>
            <NewIcon {...props} />
        </div>
    </div>
);
