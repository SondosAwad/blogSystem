export class Comment {
    constructor(
        public _id:number,
        public content:string,
        public imgURL: string, 
        public author: number,
        public postDate: Date,
        public blogId: number
       
        ) { }
}
