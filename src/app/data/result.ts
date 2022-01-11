import { superhero } from "./superhero";

export class result {

 response:string;
 results:Array<superhero>;
 "results-for": string;


  constructor(resp:string,res:Array<superhero>,resf:string) {

this.response=resp;
this.results=res;
this["results-for"]=resf;
}

 }
