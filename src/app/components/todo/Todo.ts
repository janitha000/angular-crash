export default class ToDo {
    id! : number;
    title! : string;

    constructor(id : number, title : string)
    {
        this.id = id;
        this.title = title;
    }
}