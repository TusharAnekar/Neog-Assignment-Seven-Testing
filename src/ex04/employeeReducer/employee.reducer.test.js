import employeeReducer from "./employee.reducer";

describe("Employee Management Reducer", () => {
  test("shoule add employee", () => {
    const initialState = {
      employees: []
    };

    const action = {
      type: "ADD_EMPLOYEE",
      payload: {
        id: 1,
        name: "Tushar Anekar",
        role: "Web Developer",
        salary: 100000
      }
    };

    const updatedState = employeeReducer(initialState, action);

    const expectedState = {
      employees: [
        {
          id: 1,
          name: "Tushar Anekar",
          role: "Web Developer",
          salary: 100000
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should update salary", () => {
    const state = {
      employees: [
        {
          id: 1,
          name: "Tushar Anekar",
          role: "Web Developer",
          salary: 100000
        }
      ]
    };

    const action = {
      type: "UPDATE_SALARY",
      payload: {
        id: 1,
        salary: 150000
      }
    };

    const updatedState = employeeReducer(state, action);

    const expectedState = {
      employees: [
        {
          id: 1,
          name: "Tushar Anekar",
          role: "Web Developer",
          salary: 150000
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should remove employees", () => {
    const state = {
      employees: [
        {
          id: 1,
          name: "Tushar Anekar",
          role: "Web Developer",
          salary: 150000
        },
        {
          id: 2,
          name: "Prasad Jamdade",
          role: "QA",
          salary: 200000
        }
      ]
    };

    const action = {
      type: "REMOVE_EMPLOYEE",
      payload: 2
    };

    const updatedState = employeeReducer(state, action);

    const expectedState = {
      employees: [
        {
          id: 1,
          name: "Tushar Anekar",
          role: "Web Developer",
          salary: 150000
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should filter employees", () => {
    const state = {
      employees: [
        {
          id: 1,
          name: "Tushar Anekar",
          role: "Web Developer",
          salary: 150000
        },
        {
          id: 2,
          name: "Prasad Jamdade",
          role: "QA",
          salary: 200000
        }
      ]
    };

    const action = {
      type: "FILTER_EMPLOYEES",
      payload: "QA"
    };

    const updatedState = employeeReducer(state, action);

    const expectedState = {
      employees: [
        {
          id: 2,
          name: "Prasad Jamdade",
          role: "QA",
          salary: 200000
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });
});
