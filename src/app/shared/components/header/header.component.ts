import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { User } from '../../models/users.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const userSessionStorage = sessionStorage.getItem('user');
    if(userSessionStorage) {
      this.user = JSON.parse(userSessionStorage)
      if(this.user?.name === 'Danniel') {
        this.management = true
      }
    }
  }
  isOpen:boolean = false
  user?: User
  management = false

  openClose() {
    if (this.isOpen === false){
      this.isOpen = true
      
    } else  {
      this.isOpen = false
      
    }
  }
  


  navigateByUrl(url: string) {
    return this.router.navigateByUrl(url)    
  }

  isManagement() {
    if(this.user?.name === "Danniel") {
      this.management = true
      console.log('ta certo')
    }
  }

  whichUser() {
    return this.user?.name
  }

  clearSessionStorage() {
    sessionStorage.clear()
    return this.router.navigateByUrl('login')
  }



}
