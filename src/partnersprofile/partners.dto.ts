export interface PartnerProileDtoReq {
  name: string;
  email: string;
  description: string;
  location: string[];
  image: string;
}

export interface PartnerProfileDtoRes {
  name: string;
  email: string;
  description: string;
  location: string[];
  registeredOn: Date;
  verificationStatus: string;
  image: string;
}

export enum profileVerificationStatus {
  VERIFIED = "VERIFIED",
  PENDING_VERIFICATION = "PENDING_VERIFICATION",
  BLOCKED = 'BLOCKED'
}
