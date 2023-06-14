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
import { PartnerServicesDto } from "./partnerservice.dto";
import { PartnerServicesService } from "./partnerservice.service";

@Tags("Services")
@Route("/services")
export class PartnerServiceController extends Controller {
  private readonly partnerServicesService: PartnerServicesService;

  constructor() {
    super();
    this.partnerServicesService = new PartnerServicesService();
  }

  @Get("/")
  public async getPartnerServiceDetailsById(
    @Query("id") id: string
  ): Promise<PartnerServicesDto> {
    return await this.partnerServicesService.getServiceDetailsByUserId(id);
  }

  @Post("/test")
  public async test(@Body() text: string): Promise<string> {
    return text;
  }

  @Post("/create")
  public async createPartnerServices(
    @Body() body: PartnerServicesDto
  ): Promise<PartnerServicesDto> {
    console.log(body);

    return await this.partnerServicesService.createPartnerServices(body);
  }

  @Post("/update")
  public async updatePartnerServiceDetails(
    @Query("id") id: string,
    @Body() body: PartnerServicesDto
  ): Promise<string> {
    return await this.partnerServicesService.updatePartnerServices(id, body);
  }

  @Delete("/delete")
  public async deletePartnerServices(@Query("id") id: string): Promise<string> {
    return await this.partnerServicesService.deletePartnerServices(id);
  }
}
