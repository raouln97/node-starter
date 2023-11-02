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
    Header,
  } from "tsoa";
  
  
  @Tags("Partners")
  @Route("/partners")
  export class PartnerProfileController extends Controller {
    // private readonly partnerService: PartnerProfileService;
  
    constructor() {
      super();
    //   this.partnerService = new PartnerProfileService();
    }
  
    @Post("/test")
    public async test(@Body() body:{text: string}): Promise<string> {
      return body.text;
    }
  }
  