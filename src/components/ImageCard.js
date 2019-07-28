import React from 'react'

class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = { spans: 0};
    }

    componentDidMount() {
        console.log(this.imageRef);
        this.imageRef.current.addEventListener('load',this.setSpan);
    }

    setSpan = () => {
        const height = this.imageRef.current.clientHeight;
        const span = Math.ceil(height/10);
        this.setState({
            spans : span
        })
    }

    render () {
        return (
            <div style={{gridRowEnd : `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={this.props.image.description} src={this.props.image.urls.regular} ></img>
            </div>
        )
    }
}

export default ImageCard;