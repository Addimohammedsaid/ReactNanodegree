import Book from '../book/Book'

const BookShelf = props => {

    const {title, books, shelfChange} = props;    

    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.map((book, index) => {
                return  <Book book={book} books={books} key={index} shelfChange={shelfChange} />
              })
            }       
          </ol>
        </div>
        </div>
    );
}

export default BookShelf;