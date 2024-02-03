import { Component, DestroyRef, inject } from '@angular/core';
import { UserService } from '../../root-services/user/user.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  destroyRef = inject(DestroyRef);

  constructor(private userService: UserService) {}

  public login(): void {
    this.userService.login().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(result => {
      console.log('login -> login result', result);
      
    });
  }
}
