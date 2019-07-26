import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {searchText: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({searchText: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchText);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search</label>
                        <input type="text" value={this.state.searchText} name="first-name" onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }

}

export default SearchBar;
