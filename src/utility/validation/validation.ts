const checkEmail = (value: string) => {
  const condition = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}(?:\.[a-zA-Z]{2,3})?$/,
  );
  return condition.test(value);
};

const checkName = (value: string) => {
  const condition = new RegExp(/^[A-Za-z0-9 ]+$/);
  return condition.test(value);
};

export {checkEmail, checkName};
