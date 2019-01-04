const initialState = {
    saved : []
  };


  const Reducer = (state = initialState, action) => {
     const newState = {...state};

    switch (action.type) {

        case "SAVE_QUERY":
        if (action.query.length > 0) {
            const filteredItems = newState.saved.filter(
              input => input.toLowerCase() !== action.query.toLowerCase()
            );
            newState.saved = [action.query, ...filteredItems];
          }
        break;

        case "REMOVE_QUERY":
        newState.saved = newState.saved.filter(input => input !== action.query);
        break;

        default:
        break;
    }
    return newState;
  }

  export default Reducer;
