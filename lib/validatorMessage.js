module.exports = function (err) {
  if (err.name !== "ValidationError") {
    return;
  }

  const errors = [];

  for (const field in err.errors) {
    errors.push({
      field,
      message: err.errors[field].message,
    });
  }

  return errors;
};
