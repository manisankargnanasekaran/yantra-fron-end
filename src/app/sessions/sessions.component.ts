import { Component, OnInit } from '@angular/core';

import { Router, Routes, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
 loginDetail: any = {};
  constructor(private loginservice: LoginService) { }

  ngOnInit() {
  }
 login(){
   alert('hi');
   this.loginservice.ll(this.loginDetail).subscribe(res => {
   alert("hi")
   });
 }
}
