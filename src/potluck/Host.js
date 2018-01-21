import React, { Component } from 'react';
import AddNeed from './AddNeed';

class Host extends Component {
    render() {
        const { path, firebase: { push } } = this.props;
        return (
            <div className='host'>
                <h2>I am
                    <span className={`host__role-button ${this.props.ui.isHost && 'host__role-button--active'}`}
                        onClick={() => this.props.actions.setIsHost(true)}>
                        the host
                    </span>
                    <span className='host__role-divider'>
                        /
                    </span>
                    <span className={`host__role-button ${!this.props.ui.isHost && 'host__role-button--active'}`}
                        onClick={() => this.props.actions.setIsHost(false)}>
                        a guest
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
