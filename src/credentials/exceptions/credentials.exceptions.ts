import { HttpException, HttpStatus } from "@nestjs/common";

export class ConflictCredentialException extends HttpException {
    constructor(title?: string, Credentialname?: string) {
        let message = `Already exists in the database: title: ${title}, Credentialname: ${Credentialname}`;
        super(message, HttpStatus.CONFLICT);
    }
}

export class ServerInputCredentialException extends HttpException {
    constructor() {
        let message = `Server error while inserting media data`;
        super(message, HttpStatus.BAD_REQUEST);
    }
}

export class NotFoundCredentialException extends HttpException {
    constructor(id: number) {
        let message = `Credential ${id} not found`;
        super(message, HttpStatus.NOT_FOUND);
    }
}

export class ForbiddenCredentialException extends HttpException {
    constructor(id: number, publicationId: number) {
        let message = `Post${id} cannot be deleted as it is in publication ${publicationId}`;
        super(message, HttpStatus.FORBIDDEN);
    }
}
