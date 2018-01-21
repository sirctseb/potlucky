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
                <button className='header__create-potluck'
                    onClick={() => {
                        this.props.firebase.push('potlucks', emptyPotluck)
                            .then(snapshot => browserHistory.push(`/${snapshot.key}`));
                    }}>
                    Create a potluck
                </button>
            </header>
        );
    }
}

export default firebaseConnect()(Header);
