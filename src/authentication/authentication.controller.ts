import {
    Controller,
    Route,
    Get,
    Security,
    Request,
    Path,
    Post,
    Body,
    Put,
    Tags,
    Query,
    Delete,
  } from "tsoa";
import { ForgotPasswordDTORes, SignInRes, UserDtoRes } from "./user.dto";
import { Authenticationservice } from "./authentication.service";
  
  @Tags("Authentication")
  @Route("/auth")
  export class UserController extends Controller {
    private readonly authenticationService: Authenticationservice;
  
    constructor() {
      super();
      this.authenticationService = new Authenticationservice();
    }

    @Post("/signUp")
    public async userSignUp(
        @Body() body: UserDtoRes,
    ): Promise<any> {
      return this.authenticationService.signUp(body)
    }

    @Post("/signIn")
    public async userSignIn(
        @Body() body: SignInRes
    ): Promise<any> {
      return this.authenticationService.signIn(body)
    }

    @Post("/forgotPassword")
    public async userForgotPassword(
      @Body() body: ForgotPasswordDTORes
    ): Promise<any> {
      return this.authenticationService.forgotPassword(body)
    }
  }
  