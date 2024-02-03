import { take } from "rxjs";
import { UserService } from "../user/user.service";

export function appInitializer(userService: UserService) {
    console.log('---- in APP_INITIALIZER')
    return () => userService.refreshToken().pipe(take(1)).subscribe(result => {
        console.log('user service refresh result', result);

        userService.handleUserStateResult(result);
    })
}