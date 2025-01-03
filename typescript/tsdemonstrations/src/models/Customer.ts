export default class Customer {
    constructor(public id: number, public name: string, public age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    public toString(): string {
        return `Id: ${this.id}, Name: ${this.name}, Age: ${this.age}`;
    }
}