export class User {
    constructor(public _id?: number,
        public username?: String,
        public password?: String,
        public email?:String,
        public blogs?: number,
        public following?: User[],
        public followers?: User[],
        public status?: Boolean
    ) { }

}
