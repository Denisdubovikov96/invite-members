export enum Roles {
  admin = "Administrator",
  standard = "Standard"
}

export enum Statuses {
  request = "request",
  pending = "pending",
  approved = "approved",
  declined = "declined",
  invited = "invited",
}

export type Role = `${Roles}`;

export type Status = `${Statuses}`;

export interface UserShortData {
  id: number;
  name: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface TeamMember {
  id: number;
  status: Status;
  user: UserShortData;
  role: Role;
}