import { HttpException, HttpStatus } from "@nestjs/common";

export class ConflictUserException extends HttpException {
    constructor() {
        let message = `this email already registered in database`;
        super(message, HttpStatus.CONFLICT);
    }
}

export class ServerInputUserException extends HttpException {
    constructor() {
        let message = `Server error while inserting media data`;
        super(message, HttpStatus.BAD_REQUEST);
    }
}

export class UnauthorizedUserException extends HttpException {
    constructor() {
        let message = `Unauthorized Access!`;
        super(message, HttpStatus.UNAUTHORIZED);
    }
}

export class NotFoundUserException extends HttpException {
    constructor(email: string) {
        let message = `email: ${email} not found`;
        super(message, HttpStatus.NOT_FOUND);
    }
}

export class ForbiddenUserException extends HttpException {
    constructor(id: number, publicationId: number) {
        let message = `Post${id} cannot be deleted as it is in publication ${publicationId}`;
        super(message, HttpStatus.FORBIDDEN);
    }
}
