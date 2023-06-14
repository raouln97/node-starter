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
import { PartnerProileDtoReq, PartnerProfileDtoRes } from "./partners.dto";
import { PartnerProfileService } from "./partners.service";

@Tags("Partners")
@Route("/partners")
export class PartnerProfileController extends Controller {
  private readonly partnerService: PartnerProfileService;

  constructor() {
    super();
    this.partnerService = new PartnerProfileService();
  }

  @Get("/")
  public async getPartnerDetailsById(
    @Query("id") id: string
  ): Promise<PartnerProileDtoReq> {
    return await this.partnerService.getUserById(id);
  }

  @Post("/test")
  public async test(@Body() text: string): Promise<string> {
    return text;
  }

  @Post("/create")
  public async createPartner(
    @Body() body: PartnerProileDtoReq
  ): Promise<PartnerProfileDtoRes> {
    console.log(body);
    return await this.partnerService.createPartner(body);
  }

  @Post("/update")
  public async updatePartnerDetails(
    @Query("id") id: string,
    @Body() body: PartnerProileDtoReq
  ): Promise<string> {
    return await this.partnerService.updatePartner(id, body);
  }

  @Delete("/delete")
  public async deletePartner(@Query("id") id: string): Promise<string> {
    return await this.partnerService.deletePartner(id);
  }
}
