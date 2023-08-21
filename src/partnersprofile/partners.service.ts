import { partnerData } from "../../Model/data-model";
import { PartnerProileDtoReq, PartnerProfileDtoRes, profileVerificationStatus } from "./partners.dto";

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

  public async getAllUsers(
  ): Promise<PartnerProfileDtoRes | null | PartnerProfileDtoRes[]> {
    try {
      const user = await partnerData.find();
      return user;
    } catch (error) {
      console.error("Error retrieving user:", error);
      return null;
    }
  }

  public async createPartner(
    partnerDetails: PartnerProileDtoReq
  ): Promise<PartnerProfileDtoRes | null> {
    const partnerDetailsWithVerStatus = {...partnerDetails, rating: 0, verificationStatus: profileVerificationStatus.PENDING_VERIFICATION }
    try {
      const user = await partnerData.create(partnerDetailsWithVerStatus);
      return user;
    } catch (error) {
      throw error
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

  public async updatePartnerVerificationStatus(
    userId: string,
  ): Promise<string | null> {
    try {
      const partnerProfileDetails = await this.getUserById(userId)
      partnerProfileDetails.verificationStatus = profileVerificationStatus.VERIFIED
      const user = await partnerData.findByIdAndUpdate(userId, partnerProfileDetails);
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
