export class NewUser {
    name:string ;
    lastname:string ;
    mail:string ;
    pass:string ;
    document:string ;
    type_document:string ;
    constructor(name:string,lastname:string,mail:string,pass:string,document:string,type_document:string){
        this.name=name;
        this.lastname=lastname;
        this.mail=mail;
        this.pass=pass;
        this.document=document;
        this.type_document=type_document;
    }
}