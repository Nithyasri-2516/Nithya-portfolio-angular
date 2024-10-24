import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/Project';
import { PrjectsService } from '../services/prjects.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  featured={} as Project
  constructor(private title:Title,private services:PrjectsService){
    this.title.setTitle('Nithya-Home')
  }
  ngOnInit():void{
    this.featured=this.services.GetProjectById(1);
  }
}
