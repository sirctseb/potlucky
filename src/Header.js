import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { firebaseConnect } from 'react-redux-firebase';

const emptyPotluck = {
    name: 'It\'s potluck time!',
};

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='header__create-potluck'
                    onClick={() => {
                        this.props.firebase.push('potlucks', emptyPotluck)
                            .then(snapshot => browserHistory.push(`/${snapshot.key}`));
                    }}>
                    Create a potluck
                </div>
                <h1 className='header__title'>Potlucky</h1>
            </header>
        );
    }
}

export default firebaseConnect()(Header);
