import { Component } from '@angular/core';
import { MenuService } from 'src/app/service/menu.service';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private menuService: MenuService,
    private userAuthService: UserAuthService
    ){}
  toggleMenu(){
    this.menuService.toggle();
  }

  public isLoggedIn()
  {
    return this.userAuthService.isLoggedIn();
  }

  public logout()
  {
    this.userAuthService.clear();
  }
}
