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



  constructor(private title:Title,private prjectServices: PrjectsService){
    this.title.setTitle('Nithya-Portfolio')
  }
  ngOnInit(): void {
    this.projects= this.prjectServices.GetProjects();
    
  }}