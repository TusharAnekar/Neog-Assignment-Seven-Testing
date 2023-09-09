import bookshelfReducer from "./bookshelf.reducer";

describe("Bookshelf Reducer with Categories", () => {
  test("should add book", () => {
    const initialState = {
      books: [],
      categories: []
    };

    const action = {
      type: "ADD_BOOK",
      payload: {
        id: 1,
        title: "Atomic Habits",
        author: "Tushar Anekar"
      }
    };

    const updatedState = bookshelfReducer(initialState, action);

    const expectedState = {
      books: [
        {
          id: 1,
          title: "Atomic Habits",
          author: "Tushar Anekar",
          category: null
        }
      ],
      categories: []
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should add category", () => {
    const state = {
      books: [
        {
          id: 1,
          title: "Atomic Habits",
          author: "Tushar Anekar",
          category: null
        }
      ],
      categories: []
    };

    const action = {
      type: "ADD_CATEGORY",
      payload: {
        id: 1,
        name: "Motivational"
      }
    };

    const updatedState = bookshelfReducer(state, action);

    const expectedState = {
      books: [
        {
          id: 1,
          title: "Atomic Habits",
          author: "Tushar Anekar",
          category: null
        }
      ],
      categories: [
        {
          id: 1,
          name: "Motivational"
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should assign category", () => {
    const state = {
      books: [
        {
          id: 1,
          title: "Atomic Habits",
          author: "Tushar Anekar",
          category: null
        }
      ],
      categories: [
        {
          id: 1,
          name: "Motivational"
        }
      ]
    };

    const action = {
      type: "ASSIGN_CATEGORY",
      payload: {
        bookId: 1,
        categoryId: 1
      }
    };

    const updatedState = bookshelfReducer(state, action);

    const expectedState = {
      books: [
        {
          id: 1,
          title: "Atomic Habits",
          author: "Tushar Anekar",
          category: 1
        }
      ],
      categories: [
        {
          id: 1,
          name: "Motivational"
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });
});
