import { Link } from 'react-router-dom';
import * as BooksAPI from '../../API/BooksAPI.js'
import  React, {useEffect, useState} from 'react';
import Book from '../../shared/book/Book'


const Search = (props) => {

  const [books, setBooks] = useState([]);    

  useEffect(()=> {
    BooksAPI.getAll().then(books => setBooks(books));     
  }, []);
   
  function handelShelfChange(changedBook, shelf) {
    
    BooksAPI.update(changedBook, shelf).then(response => {

        var changedBooks = books.filter(book => book.id !== changedBook.id).concat(changedBook);

        setBooks(changedBooks);
    });
  }

    const [query, setQuery] = useState("");
    const [newBooks, setNewBooks] = useState([]);
    const [searchErr, setSearchErr] = useState(false);


    const getBooks = event => {
      const query = event.target.value;
      setQuery(query);

      // if user input => run the search
      if (query) {
        BooksAPI.search(query.trim(), 20).then(books => {
          if(books.length > 0){            
            setNewBooks(books);            
            setSearchErr(false);
          } else {
            setNewBooks([]);
            setSearchErr(true);
          }                        
        });
        // if query is empty => reset state to default
      } else  
      setNewBooks([]);
      setSearchErr(true);
    };
  

    return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"  
              value={query}
              onChange={getBooks}           
            />
          </div>
        </div>
        <div className="search-books-results">         
        {newBooks.length > 0 && (
            <div>
              <h3>Search returned {newBooks.length} books </h3>
              <ol className="books-grid">
                {newBooks.map(book => (
                  <Book
                    book={book}  
                    books={books}                
                    key={book.id}    
                    shelfChange={handelShelfChange}               
                  />
                ))}
              </ol>
            </div>
          )}
          {searchErr && (
            <h3>Search did not return any books. Please try again!</h3>
          )}
        </div>
      </div>
    );
}



export default Search;