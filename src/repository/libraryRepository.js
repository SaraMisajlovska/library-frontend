import axios from "../customAxios/axios";

const LibraryService = {
    fetchBooks: () => {
        return axios.get("/books");
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },
    addBook: (name, category, authorId, availableCopies) => {
        return axios.post("/books/add",
            {
                "name": name,
                "category": category,
                "authorId": authorId,
                "availableCopies": availableCopies
            });
    },
    editBook: (id, name, category, authorId, availableCopies) => {
        return axios.put(`/books/edit/${id}`,
            {
                "name": name,
                "category": category,
                "authorId": authorId,
                "availableCopies": availableCopies
            });
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    markAsTaken: (id) => {
        return axios.put(`/books/markTaken/${id}`);
    },
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    fetchCategories: () => {
        return axios.get("/categories");
    }

}

export default LibraryService;