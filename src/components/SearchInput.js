import React, { Component } from 'react';
import { InputGroup, Form } from 'react-bootstrap';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: props.searchTerm
    };
  }

  onChange = event => {
    const value = event.target.value;
    this.setState({ searchTerm: value }, () => this.props.handleChange(value));
  };

  render() {
    return (
      <InputGroup className="my-4 shadow">
        <InputGroup.Prepend>
          <InputGroup.Text>
            <i className="fas fa-search" />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          size="lg"
          type="text"
          value={this.state.searchTerm}
          placeholder="Search Books..."
          onChange={this.onChange}
        />
      </InputGroup>
    );
  }
}
