import { EventObj } from 'app/utils'

export interface InvitationMeetingItem {
  id: string
  name: string
  meetingName: string
}

export interface onRSVPFunction {
  (e: EventObj, meetingItem: InvitationMeetingItem): void
}

export interface InvitationsDataObj {
  content: Array<InvitationMeetingItem>
  onRSVP: onRSVPFunction
}
