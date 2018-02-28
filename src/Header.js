import React, { Component } from 'react';
import NewIcon from './NewIcon';

class Header extends Component {
    render() {
        return (
            <header className='header'>
                {
                    this.props.location.pathname !== '/' &&
                    <div className='header__create-potluck'>
                        <NewIcon />
                    </div>
                }
                <h1 className='header__title'>Potlucky</h1>
            </header>
        );
    }
}

export default Header;
