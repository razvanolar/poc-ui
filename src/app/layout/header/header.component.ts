import { AfterViewInit, Component, DestroyRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../root-services/user/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {

  destroyRef = inject(DestroyRef);

  public userInfo: any = undefined;

  constructor(private router: Router, private userService: UserService) {

  }

  ngAfterViewInit(): void {
    this.userService.userInfoObservable().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(userInfo => {
      console.log('header -> received user info update', userInfo);
      this.userInfo = userInfo;
    });
  }

  public navigateToLogin(): void {
    this.router.navigate(['/', 'login']);
  }

  public navigateToHome(): void {
    this.router.navigate(['']);
  }
}
