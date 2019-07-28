import React from 'react'
import '../css/ImageList.css'
import ImageCard from  './ImageCard';


const ImageDisplay = (props) => {
    console.log(props.images);
    const renderImageList = props.images.map(
        (image) => {
            return <ImageCard  key={image.id} image={image} />
        }
    )
    return <div className="image-list">{renderImageList}</div>
}

export default ImageDisplay;