import { HttpException, HttpStatus } from "@nestjs/common";

export class ConflictNotesException extends HttpException {
    constructor(title?: string, Notesname?: string) {
        let message = `Already exists in the database: title: ${title}, Notesname: ${Notesname}`;
        super(message, HttpStatus.CONFLICT);
    }
}

export class ServerInputNotesException extends HttpException {
    constructor() {
        let message = `Server error while inserting media data`;
        super(message, HttpStatus.BAD_REQUEST);
    }
}

export class NotFoundNotesException extends HttpException {
    constructor(id: number) {
        let message = `Notes ${id} not found`;
        super(message, HttpStatus.NOT_FOUND);
    }
}

export class ForbiddenNotesException extends HttpException {
    constructor(id: number, publicationId: number) {
        let message = `Post${id} cannot be deleted as it is in publication ${publicationId}`;
        super(message, HttpStatus.FORBIDDEN);
    }
}
