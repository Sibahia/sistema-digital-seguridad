export class ValidateError extends Error {
    constructor (message, details) {
        super(message);
        this.details = details.map( details => ({
            path: details.path,
            message: details.message
        }))
        this.status = 400;
    }
}