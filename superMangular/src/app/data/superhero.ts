import { powerstats } from "./powerstats";

export class superhero {


  id: number;
  name: string;
  powerstats: powerstats;
  biography: biography;
  appearance:appearance;
  work:work;
  connections:connections;
  image:image;


  constructor(id: number, name: string, powerstats: powerstats, biography:biography, appearance:appearance, work:work, connections:connections, image:image) {

    this.id = id;
    this.name = name;
    this.powerstats = powerstats;
    this.biography = biography;
    this.appearance = appearance;
    this.work = work;
    this.connections = connections;
    this.image = image;


}
 }
