import React, {Component} from "react";
import LibraryService from "../../repository/libraryRepository";
import {BrowserRouter as Router, Route, Routes, Naviagte, Navigate} from "react-router-dom";
import Books from "../Books/Books";
import AddBook from "../Books/AddBook/AddBook";
import EditBook from "../Books/EditBook/EditBook";
import Categories from "../Categories/Categories";
import Header from "../Header/Header";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            authors: [],
            categories: [],
            selectedBook: {}
        }
    }

    componentDidMount() {
        this.loadBooks();
        this.loadAuthors();
        this.loadCategories();
    }

    loadBooks = () => {
        LibraryService.fetchBooks()
            .then((response) => {
                this.setState({
                    books: response.data
                })
            });

    }
    loadAuthors = () => {
        LibraryService.fetchAuthors()
            .then((response) => {
                this.setState({
                    authors: response.data
                })
            });
    }
    loadCategories = () => {
        LibraryService.fetchCategories()
            .then((response) => {
                this.setState({
                    categories: response.data
                })
            });
    }
    getBook = (id) => {
        LibraryService.getBook(id)
            .then((response) => {
                this.setState({
                    selectedBook: response.data
                })
            });
    }

    addBook = (name, category, authorId, availableCopies) => {
        LibraryService.addBook(name, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    editBook = (id, name, category, authorId, availableCopies) => {
        LibraryService.editBook(id, name, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    deleteBook = (id) => {
        LibraryService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    }
    markAsTaken = (id) => {
        LibraryService.markAsTaken(id)
            .then(() => {
                this.loadBooks();
            })
    }

    render() {

        return (

            <Router>
               <Header/>
                <Routes>
                    <Route path={"/books/add"}
                           element={<AddBook
                               authors={this.state.authors}
                               categories={this.state.categories}
                               onAddBook={this.addBook}
                               book={this.state.selectedBook}
                           />}
                    />
                    <Route path={"/books/edit/:id"}
                           element={<EditBook
                               authors={this.state.authors}
                               categories={this.state.categories}
                               book={this.state.selectedBook}
                               onEditBook={this.editBook}
                           />}
                    />
                    <Route path={"/categories"}
                           element={<Categories categories={this.state.categories}/>}
                    />
                    <Route path={"/books"}
                           element={<Books
                               books={this.state.books}
                               authors={this.state.authors}
                               categories={this.state.categories}
                               onEdit={this.getBook}
                               onDelete={this.deleteBook}
                               onMarkAsTaken={this.markAsTaken}
                           />}
                    />
                    <Route path={"/"}
                           element={
                               <Navigate to={"/books"}/>
                           }
                    />
                </Routes>
            </Router>
        );
    }
}

export default App;
