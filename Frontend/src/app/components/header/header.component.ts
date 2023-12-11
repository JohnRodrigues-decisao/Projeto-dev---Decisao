import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})


export class HeaderComponent {

  constructor(private router: Router){}

  logout(){
    const confirmation = confirm('Você tem certeza que deseja sair do sistema ?');
    if(confirmation) {
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }
  }
}
