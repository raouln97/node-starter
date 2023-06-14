import { partnerData } from "../../Model/data-model";
import { PartnerProileDtoReq, PartnerProfileDtoRes } from "./partners.dto";

export class PartnerProfileService {
  public async getUserById(
    userId: string
  ): Promise<PartnerProfileDtoRes | null> {
    try {
      const user = await partnerData.findById(userId);
      return user;
    } catch (error) {
      console.error("Error retrieving user:", error);
      return null;
    }
  }

  public async getUserbyEmail(
    email: string
  ): Promise<PartnerProfileDtoRes | null> {
    try {
      const user = await partnerData.findOne({ email });
      return user;
    } catch (error) {
      console.error("Error retrieving user:", error);
      return null;
    }
  }

  public async createPartner(
    partnerDetails: PartnerProileDtoReq
  ): Promise<PartnerProfileDtoRes | null> {
    try {
      const user = await partnerData.create(partnerDetails);
      return user;
    } catch (error) {
      console.error("Error retrieving user:", error);
      return null;
    }
  }

  public async updatePartner(
    userId: string,
    partnerDetails: PartnerProileDtoReq
  ): Promise<string | null> {
    try {
      const user = await partnerData.findByIdAndUpdate(userId, partnerDetails);
      return "success";
    } catch (error) {
      console.error("Error retrieving user:", error);
      return null;
    }
  }

  public async deletePartner(userId: string): Promise<string | null> {
    try {
      const user = await partnerData.findByIdAndDelete(userId);
      return "user deleted";
    } catch (error) {
      console.error("Error retrieving user:", error);
      return null;
    }
  }
}
