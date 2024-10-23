import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { Tag } from '../models/Tag';

@Injectable({
  providedIn: 'root'
})
export class PrjectsService {
 
  projects: Project[]=[
    {id:0,name:'Sample Angular app',summary:'Test description',description:'', projectLink:'',tag: [Tag.ANGULAR,Tag.TYPESCRIPT],pictures:[]},
    {id:1,name:'Sample web app',summary:'Test description',description:'', projectLink:'',tag: [Tag.ANGULAR,Tag.JAVA],pictures:[]},
    {id:2,name:'Sample flutter app',summary:'Test description',description:'', projectLink:'',tag: [Tag.HTML,Tag.TYPESCRIPT],pictures:[]},
    {id:3,name:'Sample iot app',summary:'Test description',description:'', projectLink:'',tag: [Tag.ANGULAR,Tag.TYPESCRIPT],pictures:[]},
    {id:4,name:'Sample typescript app',summary:'Test description',description:'', projectLink:'',tag: [Tag.ANGULAR,Tag.TYPESCRIPT],pictures:[]},
]
  constructor() { }

GetProjects(){
  return this.projects;
}

GetProjectById(id:number):Project{
  let project=this.projects.find(project=> project.id===id);

  if(project===undefined){
    throw new TypeError('There is no project that matches the id'+id);
  }
  return project;
}




}
