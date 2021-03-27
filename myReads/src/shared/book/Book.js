// styles
import './Book.css';

const Book = props => {

  const { book, books, shelfChange } = props;

  function updateShelf(event){
    const shelf = event.target.value;
    book.shelf = shelf;
    shelfChange(book, shelf);
  }

  const backgroundImage = book.imageLinks && book.imageLinks.thumbnail
  ? book.imageLinks.thumbnail
  : '';


  function currentShelf(){

    let currentShelf = 'none';

    for (let item of books) {
      if (item.id === book.id) {
        currentShelf = item.shelf;
        break;
      }
    }
    return currentShelf;
  } 


  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
         <div className="book-shelf-changer">
        <select onChange={updateShelf} defaultValue={currentShelf()}>
          <option value="move" disabled>
            Move to...
          </option>          
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>         
        </select>
      </div>
        </div>
        <div className="book-title">{book.title}</div>
        {
        book.authors &&
          book.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
          ))}
      </div>
    </li>
  );
}

export default Book;