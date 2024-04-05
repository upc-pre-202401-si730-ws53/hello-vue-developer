export class Developer {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

}