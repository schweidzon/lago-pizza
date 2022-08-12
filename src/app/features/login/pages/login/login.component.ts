import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string =''
  password:string =''
  error = false

  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }

  authenticate() {
    const user = this.userService.getUserByEmailAndPassword(this.email, this.password)

    if(user) {
      sessionStorage.setItem('user', JSON.stringify(user))
      this.router.navigateByUrl('pizza-list')
    } else {
      this.error = true
    }
  }

}
