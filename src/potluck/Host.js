import React, { Component } from 'react';
import AddNeed from './AddNeed';

class Host extends Component {
    render() {
        const { path, firebase: { push } } = this.props;
        return (
            <div className='host'>
                <h2>Are you the host? <span className='host__is-host-button'
                    onClick={() => this.props.actions.setIsHost(!this.props.ui.isHost)}>
                    {
                        this.props.ui.isHost ?
                            'No -' :
                            'Yes +'
                    }
                </span>
                </h2>
                {
                    this.props.ui.isHost &&
                    <AddNeed onSubmit={(values) => {
                        push(`${path}/bringings`, values);
                    }}/>
                }
            </div>
        );
    }
}

export default Host;
