import React from 'react';
import Unsplash from '../api/unsplash';
import SearchBar from './SearchBar';



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {images: []}        
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    // used promise to hande response

    // onFormSubmit (value) {
    //     Unsplash.get('search/photos',
    //         {
    //             params : {
    //                 query : value
    //             }
    //         }
    //     ).then((response) => {
    //         this.setState(
    //             {images : response.data.results}
    //         )
    //     })
    // }

    
    // used async-wait to handle response

    async onFormSubmit(value) {    
        const response = await Unsplash.get('search/photos',
            {
                params : {
                    query : value
                }
            }
        );

        console.log(response);

        this.setState(
            { images: response.data.results}
        );
    }

    render () {
        return (
            <div className="ui container" style={{marginTop: '10px' }}>
                <SearchBar onSubmit={this.onFormSubmit} />
                <span>Searched {this.state.images.length}</span>
            </div>
        );
    } 
}



export default App;