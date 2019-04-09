import React, { Component } from 'react';
import { Media, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

export default class BookItem extends Component {
  render() {
    const { book } = this.props;
    const {
      title,
      categories,
      authors,
      publisher,
      description,
      pageCount,
      publishedDate,
      averageRating,
      buyLink,
      imageLinks,
      language
    } = book.volumeInfo;

    let bookImage;
    if (imageLinks) {
      bookImage = (
        <img className="mr-3" src={imageLinks.thumbnail} alt={title} />
      );
    } else {
      bookImage = '';
    }
    return (
      <Media className="my-3 p-3 bg-white shadow-sm rounded">
        {bookImage}
        <Media.Body>
          <h5>{title}</h5>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <ListGroup>
                <ListGroupItem>
                  <span className="font-weight-bolder"> Authors: </span>
                  {authors && authors.length > 0 ? authors.join(', ') : '---'}
                </ListGroupItem>
                <ListGroupItem>
                  <span className="font-weight-bolder">Categories: </span>
                  {categories}
                </ListGroupItem>
                <ListGroupItem>
                  <span className="font-weight-bolder">Authors: </span>
                </ListGroupItem>
                <ListGroupItem>
                  <span className="font-weight-bolder"> Publisher: </span>
                  {publisher}
                </ListGroupItem>
              </ListGroup>
            </div>
            <div className="col-xs-12 col-sm-6">
              <ListGroup>
                <ListGroupItem>
                  <span className="font-weight-bolder"> Publish Date: </span>
                  {publishedDate}
                </ListGroupItem>
                <ListGroupItem>
                  <span className="font-weight-bolder"> Page Count: </span>
                  {pageCount}
                </ListGroupItem>
                <ListGroupItem>
                  <span className="font-weight-bolder"> Average Rating: </span>
                  {averageRating}
                </ListGroupItem>
                <ListGroupItem>
                  <span className="font-weight-bolder">Language: </span>
                  {language}
                </ListGroupItem>
              </ListGroup>
            </div>
          </div>
          <p className="small text-muted">{description}</p>

          <Button variant="primary" href={buyLink}>
            Buy Now
          </Button>
        </Media.Body>
      </Media>
    );
  }
}
