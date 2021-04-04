export const appReducer = (app = {}, { type, payload }) => {

  switch (type) {
    case "TEST":
      return { ...app, testField: payload };
    default:
      return app;
  }
}