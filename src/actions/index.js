
export const removeThing = (category, id) => ({
  type: "REMOVE_THING",
  payload: {
    category,
    id,
  },
});

export const addThing = (category, thingContent) => {
  return {
    type: "ADD_THING",
    payload: {
      category,
      thing: {
        ...thingContent
      }
    },
  };
};
