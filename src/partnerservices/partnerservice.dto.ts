export interface PartnerServicesDto {
  userId: string;
  services: PartnerServices[];
}

export interface PartnerServices {
  name: string;
  price: number;
  description: string;
}
