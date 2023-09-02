import { HttpException, HttpStatus } from "@nestjs/common";

export class ConflictCardException extends HttpException {
    constructor(title?: string, Cardname?: string) {
        let message = `Already exists in the database: title: ${title}, Cardname: ${Cardname}`;
        super(message, HttpStatus.CONFLICT);
    }
}

export class ServerInputCardException extends HttpException {
    constructor() {
        let message = `Server error while inserting media data`;
        super(message, HttpStatus.BAD_REQUEST);
    }
}

export class NotFoundCardException extends HttpException {
    constructor(id: number) {
        let message = `Card ${id} not found`;
        super(message, HttpStatus.NOT_FOUND);
    }
}

export class ForbiddenCardException extends HttpException {
    constructor(id: number, publicationId: number) {
        let message = `Post${id} cannot be deleted as it is in publication ${publicationId}`;
        super(message, HttpStatus.FORBIDDEN);
    }
}
