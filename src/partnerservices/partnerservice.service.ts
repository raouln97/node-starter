import { partnerServiceData } from "../../Model/data-model";
import { PartnerServicesDto } from "./partnerservice.dto";

export class PartnerServicesService {
  public async getServiceDetailsByUserId(
    userId: string
  ): Promise<PartnerServicesDto | null> {
    try {
      const user = await partnerServiceData.findOne({ userId });
      return user;
    } catch (error) {
      console.error("Error retrieving user:", error);
      return null;
    }
  }

  public async createPartnerServices(
    partnerServicesDetails: PartnerServicesDto
  ): Promise<PartnerServicesDto | null> {
    try {
      const user = await partnerServiceData.create(partnerServicesDetails);
      return user;
    } catch (error) {
      console.error("Error retrieving user:", error);
      return null;
    }
  }

  public async updatePartnerServices(
    userId: string,
    partnerServicesDetails: PartnerServicesDto
  ): Promise<string | null> {
    try {
      const user = await partnerServiceData.findByIdAndUpdate(
        userId,
        partnerServicesDetails
      );
      return "success";
    } catch (error) {
      console.error("Error retrieving user:", error);
      return null;
    }
  }

  public async deletePartnerServices(userId: string): Promise<string | null> {
    try {
      const user = await partnerServiceData.findByIdAndDelete(userId);
      return "user deleted";
    } catch (error) {
      console.error("Error retrieving user:", error);
      return null;
    }
  }
}
