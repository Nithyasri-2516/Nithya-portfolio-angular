import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/Project';
import { Tag } from '../models/Tag';
import { PrjectsService } from '../services/prjects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

    projects={} as Project[];

    isCollapsed:boolean=true;
    Typescript: boolean=false;
  Angular: boolean=false;
  filtering:boolean=false;
  constructor(private title:Title,private prjectServices: PrjectsService){
    this.title.setTitle('Nithya-Portfolio')
  }
  ngOnInit(): void {
    this.projects= this.prjectServices.GetProjects();
    
  }
Filter(){
  let filterTags:Tag[]=[];
  if(this.Typescript){
    filterTags.push(Tag.TYPESCRIPT);
  }

  if(this.Angular){
    filterTags.push(Tag.ANGULAR);
  }

  if(this.Typescript || this.Angular){
    this.filtering=true;
  }
  else{
    this.filtering= false;
  }

  
  this.projects=this.prjectServices.GetProjectsByFilter(filterTags);
}

ResetFilters(){
  this.Angular=false;
  this.Typescript=false;
this.filtering=false;

  this.projects= this.prjectServices.GetProjects();
}


}
