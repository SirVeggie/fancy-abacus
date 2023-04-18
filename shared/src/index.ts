export * from './types';



export class UserError extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
    }
}

export function userError(message: string): UserError {
    return new UserError(message);
}