import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer__signature'>
                    by <a href='https://twitter.com/sirctseb'>@sirctseb</a>
                </div>
                <div className='footer__attribution'>
                    Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a>, <a href="https://www.flaticon.com/authors/hanan" title="Hanan">Hanan</a>, <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
                </div>
            </div>
        );
    }
}

export default Footer;
