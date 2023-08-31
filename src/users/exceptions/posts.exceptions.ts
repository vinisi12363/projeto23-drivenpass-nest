import { HttpException, HttpStatus } from "@nestjs/common";

export class ConflictUserException extends HttpException {
    constructor(title?: string, username?: string) {
        let message = `Already exists in the database: title: ${title}, username: ${username}`;
        super(message, HttpStatus.CONFLICT);
    }
}

export class ServerInputUserException extends HttpException {
    constructor() {
        let message = `Server error while inserting media data`;
        super(message, HttpStatus.BAD_REQUEST);
    }
}

export class NotFoundUserException extends HttpException {
    constructor(id: number) {
        let message = `User ${id} not found`;
        super(message, HttpStatus.NOT_FOUND);
    }
}

export class ForbiddenUserException extends HttpException {
    constructor(id: number, publicationId: number) {
        let message = `Post${id} cannot be deleted as it is in publication ${publicationId}`;
        super(message, HttpStatus.FORBIDDEN);
    }
}
