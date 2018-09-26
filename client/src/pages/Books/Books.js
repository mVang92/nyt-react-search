import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Panel from "../../components/Panel";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="wrapper">
        {/* Input Panel */}
        <Panel>
          <h5 className="panelName">Search</h5>
          <form>
            <div className="inputName">Topic</div>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Article topic (required)"
            />
            <div className="inputName">Start Year</div>
            <Input
              value={this.state.author}
              onChange={this.handleInputChange}
              name="author"
              placeholder="Start Year (required)"
            />
            <div className="inputName">End Year</div>
            <TextArea
              value={this.state.synopsis}
              onChange={this.handleInputChange}
              name="synopsis"
              placeholder="End Year (required)"
            />
            <FormBtn
              disabled={!(this.state.author && this.state.title)}
              onClick={this.handleFormSubmit}
            >
              Search
          </FormBtn>
          </form>
        </Panel>
        {/* Search Results */}
        <Panel>
          <h5 className="panelName">Results</h5>
          {this.state.books.length ? (
            <List>
              {this.state.books.map(book => (
                <ListItem key={book._id}>
                  <Link to={"/books/" + book._id}>
                    <strong>
                      {book.title} by {book.author}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3 className="red-text center-align">No Results to Display</h3>
            )}
        </Panel>
        {/* Saved Results */}
        <Panel>
          <h5 className="panelName">Saved Articles</h5>
          // Our saved articles here
        </Panel>
      </div>
    );
  }
}

export default Books;
