import React from 'react'


const ImageDisplay = (props) => {
    console.log(props.images);
    const renderImageList = props.images.map(
        ({description,id,urls}) => {
            return <img src={urls.regular} key={id} alt={description} />
        }
    )
    return <div>{renderImageList}</div>
}

export default ImageDisplay;