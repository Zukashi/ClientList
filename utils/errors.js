class ValidationError extends Error {}
class NotFoundError extends Error {}

function handleError(err, req, res, next) {
  if (err instanceof NotFoundError) {
    res.status(404).render('error', {
      message: 'Nie mozna znalezc elementu o danym ID',
    });
    return;
  }

  res.status(err instanceof ValidationError ? 400 : 500);

  res.render('error', {
    message: err instanceof ValidationError ? err.message : 'Przepraszamy sprobuj za jakis czas',
  });
}

module.exports = {
  handleError,
  ValidationError,
  NotFoundError,
};
