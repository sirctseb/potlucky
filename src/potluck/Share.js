import React, { Component } from 'react';

class Share extends Component {
    render() {
        const tweetText = encodeURIComponent('Sign up for the potluck!');
        return (
            <div className={`share ${this.props.hidden ? 'share--hidden' : ''}`}>
                <h2 className='share_title'>
                    Share with your guests
                </h2>
                <div className='share__button-panel'>
                    <div className='share__twitter'>
                        <a href={`https://twitter.com/intent/tweet?text=${tweetText}&via=potluckyio`}
                            className="twitter-share-button"
                            data-size="large">Tweet</a>
                    </div>
                    <div className='share__facebook'>
                        <div className="fb-share-button"
                            data-href={document.location}
                            data-layout="button"
                            data-size="large"
                            data-mobile-iframe="true">
                            <a className="fb-xfbml-parse-ignore"
                                target="_blank"
                                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpotlucky.io%2F&amp;src=sdkpreparse">
                                Share
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Share;
