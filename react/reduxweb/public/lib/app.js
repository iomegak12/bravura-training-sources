const ACTION_TYPES = {
    ADD_BOOK: "AddBook",
    ADD_AUTHOR: "AddAuthor"
};

const ActionCreators = {
    addAuthor: (author) => {
        return {
            type: ACTION_TYPES.ADD_AUTHOR,
            author
        };
    },
    addBook: (book) => {
        return {
            type: ACTION_TYPES.ADD_BOOK,
            book
        };
    }
};

const addBookReducer = (state, payload) => {
    let newState = state;

    if (payload.type === ACTION_TYPES.ADD_BOOK) {
        newState = [...state, payload.book];
    }

    return newState;
};

const addAuthorReducer = (state, payload) => {
    let newState = state;

    if (payload.type === ACTION_TYPES.ADD_AUTHOR) {
        newState = [...state, payload.author];
    }

    return newState;
};

const combinedReducers = (state, payload) => {
    return {
        books: addBookReducer(state.books, payload),
        authors: addAuthorReducer(state.authors, payload)
    };
};


const initialState = {
    books: [],
    authors: []
};

const store = Redux.createStore(
    combinedReducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    console.log(store.getState());
});

const generateId = () =>
    Math.floor(Math.random() * (1000000 - 1) + 1);

document.getElementById("btnAddBook").onclick = () => {
    let bookInfo = {
        id: generateId(),
        title: `Book-${generateId()}`,
        isbn: `ISBN-${generateId()}`
    };

    const payload = ActionCreators.addBook(bookInfo);

    store.dispatch(payload);
};

document.getElementById("btnAddAuthor").onclick = () => {
    let authorInfo = {
        id: generateId(),
        name: `AUTHOR-${generateId()}`,
        email: `author-${generateId()}@gmail.com`
    };

    const payload = ActionCreators.addAuthor(authorInfo);

    store.dispatch(payload);
};