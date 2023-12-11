import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userName: string = '';
  userEmail: string = '';
  userPassword: string = '';
  confirmPassword: string = '';

  loading: boolean = false;

  constructor(
    private toastr: ToastrService,
    private __userService: UserService,
    private router: Router,
    private _errorService: ErrorService
  ) {}

  ngOnInit(): void {}

  addUser() {
    // Validar se os valores estão corretos
    if (
      this.userName == '' ||
      this.userEmail == '' ||
      this.userPassword == '' ||
      this.confirmPassword == ''
    ) {
      this.toastr.error('Todos os campos são obrigatótios!');
      return;
    }

    // VAlidamos se as senhas são iguais
    if (this.userPassword != this.confirmPassword) {
      this.toastr.error('As senhas devem ser iguais');
      return;
    }

    // Crear o objeto
    const user: User = {
      nome: this.userName,
      email: this.userEmail,
      senha: this.userPassword,
    };

    this.loading = true;
    this.__userService.register(user).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(
          `O usuário ${this.userName} foi cadastrado com sucesso!`,
          'Usuário cadastrado!'
        );
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msgError(e);
      },
    });
  }
}
