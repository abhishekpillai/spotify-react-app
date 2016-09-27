import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange(ev) {
    this.setState({
      searchTerm: ev.target.value,
    });
  }

  handleKeyPress(ev) {
    if (ev.key === 'Enter') {
      this.props.getAlbums(this.state.searchTerm);
    }
  }

  render() {
    return (
      <input onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />
    );
  }
}

SearchBar.propTypes = {
  getAlbums: React.PropTypes.func.isRequired,
};

export default SearchBar;

