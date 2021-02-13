export class Blog {
<<<<<<< Updated upstream
    constructor(public title: string, 
        public content: string,
        public author: number,
        public postDate: Date,
        public _id:number,
        public imgURL:string,
        public tags:string[]
=======
    constructor(public title?: string, 
        public content?: string,
        public author?: number,
        public postDate?: Date,
        public _id?:number,
        public imgURL?:string,
        public cloudinary_id?: string,
        public tags?:string[],
        public comments?: number[]
>>>>>>> Stashed changes
        ) { }
}
