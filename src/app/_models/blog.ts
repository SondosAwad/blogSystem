export class Blog {
    constructor(public title?: string, 
        public content?: string,
        public author?: number,
        public postDate?: Date,
        public _id?:number,
        public imgURL?:string,
        public tags?:string[],
        public comments?: number[]
        ) { }
}
