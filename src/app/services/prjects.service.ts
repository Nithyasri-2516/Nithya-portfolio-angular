import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { Tag } from '../models/Tag';

@Injectable({
  providedIn: 'root'
})
export class PrjectsService {
 
  projects: Project[]=[
    {
      id:0,
      name:'LearnSphere',
      summary:'This E-learning webpage is developed for school and college students.',
      description:"Providing Courses which are helpful for the school and college students.Providing high quality educational content that aligns with Industry standards .Provide learning resources accessible from any location and device.Ensure content is available 24/7 to accommodate different schedules.Provide a wide range of courses covering various subjects and skills. Align courses with industry standards to enhance employability and career growth.Provide resources and guidance for skill development and career planning",
       projectLink:'https://github.com/Nithyasri-2516',
       tag: [Tag.ANGULAR,Tag.HTML],pictures:["../../assets/e-learning1.jpg","../../assets/e-learning2.jpg"]
      },
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

GetProjectsByFilter(filterTags:Tag[]){
  let filteredProjects: Project[] =[];
  this.projects.forEach(function(project){
      let foundAll=true;
      filterTags.forEach(function (filterTag){
        if(project.tag.includes(filterTag)==false){
            foundAll=false;
        }
      });
      if(foundAll){
        filteredProjects.push(project);
      }
  })

 return filteredProjects;
}



}
