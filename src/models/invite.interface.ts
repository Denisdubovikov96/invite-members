import { type Role } from "./member.inderface";

export interface Invite {
  id: number;
  phone: string;
  role: Role;
}
