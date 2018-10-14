export const selectAppStore = (state) => state.example;

// Need to use .get, beucase reducer defaulState was created by using ImmutableJS
export const selectWelcomeData = (state) => selectAppStore(state).get('data');
