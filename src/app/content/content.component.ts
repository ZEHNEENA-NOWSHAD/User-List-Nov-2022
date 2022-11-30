import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
result:any=[]

  constructor(private apiService:ApiService) { }
  
  ngOnInit(): void {
     this.apiService.getUser().subscribe((data)=>{
      this.result = data['users']
      console.log(this.result);
      
     })
     
    }
 }

