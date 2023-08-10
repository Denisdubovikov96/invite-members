import { Invite, TeamMember } from "src/models";
import MembersDataMock from "../data/members-mock.json";
import invitesDataMock from "../data/invites-mock.json";

type MembersResponse = { data: TeamMember[] }
type InvitesResponse = { data: Invite[] }


export const getUsers = (): Promise<MembersResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MembersDataMock as unknown as MembersResponse)
    })
  })
}

export const getInvites = (): Promise<InvitesResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(invitesDataMock as unknown as InvitesResponse)
    })
  })
}