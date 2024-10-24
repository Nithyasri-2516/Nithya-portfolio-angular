import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { Tag } from '../models/Tag';

@Injectable({
  providedIn: 'root'
})
export class PrjectsService {
 
  projects: Project[]=[
    {id:0,name:'LearnSphere',summary:'Test description',description:'', projectLink:'https',tag: [Tag.ANGULAR,Tag.HTML],pictures:["../../assets/e-learning1.jpg","../../assets/e-learning2.jpg"]},
    {id:1,name:'Epicurean Delights ',summary:'Test description',description:'', projectLink:'',tag: [Tag.MEAN],pictures:["../../assets/food1.jpg","../../assets/food2.jpg",]},
    {id:2,name:'Sewage Gas Monitoring',summary:'Test description',description:'', projectLink:'',tag: [Tag.IOT],pictures:["../../assets/sewage1.png"]},
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
