import React, { Component } from "react";
import { Link } from "react-router-dom";
import Panel from "../../components/Panel";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Panel>
          <h1>
            {this.state.book.title} by {this.state.book.author}
          </h1>
        </Panel>
        <article>
          <h1>Synopsis</h1>
          <p>
            {this.state.book.synopsis}
          </p>
        </article>
        <Link to="/">← Back to Authors</Link>
      </div>

    );
  }
}

export default Detail;
