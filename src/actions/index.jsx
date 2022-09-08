export const increment = (inc) => {
  return {
    type: "INCREMENT",
    payload: inc,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const login = () => {
  return {
    type: "LOGIN",
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
