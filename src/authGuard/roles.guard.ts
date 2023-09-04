import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { UsersService } from "./../users/users.service";


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private userService: UsersService
  ) { }

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    try {
      const data = this.userService.checkToken((authorization ?? "").split(" ")[1]);
      console.log("ROLES GUARDIAN", data);
      const user = await this.userService.findOne(parseInt(data.id));
      console.log("user in roles guardian", user);
      request.user = user;
    } catch (error) {
      console.log("erro no guardian", error);
      return false;
    }

    return true;

  }

}