import React from 'react';
import '../styles.js';

const images = {
    copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
    quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


class CopyCat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            copying: true
        };

        this.toggleTape = this.toggleTape.bind(this);
    }

    toggleTape() {
        this.setState({ copying: !this.state.copying })
    }

    render() {
        return (
            <div styles={divStyles}>
                <h1 style={{ marginBottom: 80 }}>Copy Cat</h1>

                <img alt='cat'
                    src={this.state.copying
                        ? images.copycat
                        : images.quietcat}
                    onClick={this.toggleTape}
                    styles={imgStyles}
                />
            </div>
        );
    };
}

export default CopyCat;