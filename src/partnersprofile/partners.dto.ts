export interface PartnerProileDtoReq {
  name: string;
  email: string;
  description: string;
  location: string[];
  rating: number;
  image: string;
}

export interface PartnerProfileDtoRes {
  name: string;
  email: string;
  description: string;
  location: string[];
  registeredOn: Date;
  rating: number;
  image: string;
}
