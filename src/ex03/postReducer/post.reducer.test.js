import postReducer from "./post.reducer";

describe("Social Media Posts Reducer", () => {
  test("should create post", () => {
    const initialState = {
      posts: []
    };

    const action = {
      type: "CREATE_POST",
      payload: {
        id: 1,
        author: "J K Rowling",
        content: "Harry Putter"
      }
    };

    const updatedState = postReducer(initialState, action);

    const expectedState = {
      posts: [
        {
          id: 1,
          author: "J K Rowling",
          content: "Harry Putter",
          likes: 0
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should edit post", () => {
    const state = {
      posts: [
        {
          id: 1,
          author: "J K Rowling",
          content: "Harry Putter",
          likes: 0
        }
      ]
    };

    const action = {
      type: "EDIT_POST",
      payload: {
        id: 1,
        newContent: "Harry Potter"
      }
    };

    const updatedState = postReducer(state, action);

    const expectedState = {
      posts: [
        {
          id: 1,
          author: "J K Rowling",
          content: "Harry Potter",
          likes: 0
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should delete post", () => {
    const state = {
      posts: [
        {
          id: 1,
          author: "J K Rowling",
          content: "Harry Potter",
          likes: 0
        },
        {
          id: 2,
          author: "Tushar Anekar",
          content: "Pune",
          likes: 0
        }
      ]
    };

    const action = {
      type: "DELETE_POST",
      payload: { id: 2 }
    };

    const updatedState = postReducer(state, action);

    const expectedState = {
      posts: [
        {
          id: 1,
          author: "J K Rowling",
          content: "Harry Potter",
          likes: 0
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  describe("should like post", () => {
    const state = {
      posts: [
        {
          id: 1,
          author: "J K Rowling",
          content: "Harry Potter",
          likes: 0
        }
      ]
    };

    const action = {
      type: "LIKE_POST",
      payload: { id: 1 }
    };

    const updatedState = postReducer(state, action);

    const expectedState = {
      posts: [
        {
          id: 1,
          author: "J K Rowling",
          content: "Harry Potter",
          likes: 1
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });
});
