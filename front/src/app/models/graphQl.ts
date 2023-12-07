export class GraphQl {
    query:string ="";
    operationName:string="";
    constructor(query:string,operationName:string){
        this.query=query;
        this.operationName=operationName;
    }
    
}