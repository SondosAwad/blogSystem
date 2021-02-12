export class User {
    constructor(
        public _id?: number,
        public username?: String,
        public password?: String,
        public blogs?: [number],
        public email?: string,
        public following?: [number],
        public followers?: [number],

    ) { }

}
