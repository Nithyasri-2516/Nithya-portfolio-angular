export class Tag{
    
  static readonly ANGULAR= new Tag("Angular","red"); 
  static readonly ML= new Tag("ML","blue");
  static readonly IOT= new Tag("Iot","orange");
  static readonly JAVA= new Tag("Java","yellow");
  static readonly TYPESCRIPT= new Tag("Typescript","vilot");
  static readonly HTML= new Tag("HTML","black");
  


    constructor(private readonly key:string, public readonly color:string){

    }

    toString(){
        return this.key;
    }

    //toString() method is a built-in method available to all objects. It is used to return a string
    // representation of the object. 
}