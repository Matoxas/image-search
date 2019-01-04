export const saveQuery = query => ({
    type: "SAVE_QUERY",
    query
  });

  export const removeSavedQuery = query => ({
    type: "REMOVE_QUERY",
    query
  });