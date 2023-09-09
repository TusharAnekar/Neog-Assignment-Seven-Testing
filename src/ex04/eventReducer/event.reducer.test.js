import eventReducer from "./event.reducer";

describe("Event Booking Reducer", () => {
  test("should create event", () => {
    const initialState = {
      events: []
    };

    const action = {
      type: "CREATE_EVENT",
      payload: {
        id: 1,
        name: "React Meetup",
        dates: "30/08/2024",
        attendees: []
      }
    };

    const updatedState = eventReducer(initialState, action);

    const expectedState = {
      events: [
        {
          id: 1,
          name: "React Meetup",
          dates: "30/08/2024",
          attendees: []
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should cancel event", () => {
    const state = {
      events: [
        {
          id: 1,
          name: "React Meetup",
          dates: "30/08/2024",
          attendees: []
        },
        {
          id: 2,
          name: "MongoDB Meetup",
          dates: "3/08/2024",
          attendees: []
        }
      ]
    };

    const action = {
      type: "CANCEL_EVENT",
      payload: 2
    };

    const updatedState = eventReducer(state, action);

    const expectedState = {
      events: [
        {
          id: 1,
          name: "React Meetup",
          dates: "30/08/2024",
          attendees: []
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should add attendee", () => {
    const state = {
      events: [
        {
          id: 1,
          name: "React Meetup",
          dates: "30/08/2024",
          attendees: []
        }
      ]
    };

    const action = {
      type: "ADD_ATTENDEE",
      payload: {
        eventId: 1,
        attendee: { id: 1, name: "Tushar Anekar" }
      }
    };

    const updatedState = eventReducer(state, action);

    const expectedState = {
      events: [
        {
          id: 1,
          name: "React Meetup",
          dates: "30/08/2024",
          attendees: [
            {
              id: 1,
              name: "Tushar Anekar"
            }
          ]
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should remove attendee", () => {
    const state = {
      events: [
        {
          id: 1,
          name: "React Meetup",
          dates: "30/08/2024",
          attendees: [
            {
              id: 1,
              name: "Tushar Anekar"
            }
          ]
        }
      ]
    };

    const action = {
      type: "REMOVE_ATTENDEE",
      payload: {
        eventId: 1,
        attendeeId: 1
      }
    };

    const updatedState = eventReducer(state, action);

    const expectedState = {
      events: [
        {
          id: 1,
          name: "React Meetup",
          dates: "30/08/2024",
          attendees: []
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });
});
