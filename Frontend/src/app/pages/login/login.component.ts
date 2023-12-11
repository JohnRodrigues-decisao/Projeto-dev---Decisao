import { HttpErrorResponse } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userEmail: string = '';
  userPassword: string = '';

  loading: boolean = false;

  constructor(
    private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService
  ) {}

  ngOnInit(): void {}

  login() {
    // Validado que o usuário está coletando os dados
    if (this.userEmail == '' || this.userPassword == '') {
      this.toastr.error('Todos os campos são obrigatótios!');
      return;
    }

    // Criando o body
    const user: User = {
      email: this.userEmail,
      senha: this.userPassword,
    };

    this.loading = true;

    this._userService.login(user).subscribe({
      next: (token) => {

        localStorage.setItem('token', JSON.stringify(token));
        this.router.navigate(['/dashboard']);
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msgError(e);
        this.loading = false;
      }
    });
  }

}
