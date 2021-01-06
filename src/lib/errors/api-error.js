module.exports = {
  format(error) {
    return {
      ...{
        message: error.message,
        code: error.code,
        error: error.codeAsString,
      },
      ...(error.documentation && { documentation: error.documentation }),
      ...(error.description && { description: error.description }),
    };
  },
  validationFormat(error) {
    return {
      code: 400,
      errors: error.errors.map(err => ({
        message: err.message,
        type: err.type,
        receivedValue: err.value
      }))
    }
  }
}
