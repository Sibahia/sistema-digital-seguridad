export const errorHandler = (err, req, res, next) => {
    const statusCode = err.status || 500;

    const responseError = {
        status: 'ERROR',
        message: err.message || 'Error interno del servidor'
    };

    if (err.details) {
        response.details = err.details
    }
    
    res.status(statusCode).json(responseError)
}