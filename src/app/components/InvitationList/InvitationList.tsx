import classNames from 'classnames'
import { EventObj, PropsWithClassName } from 'app/utils'
import { ImageWithPlaceholder } from 'app/components/ImageWithPlaceholder'
import { Button } from 'app/components/Button'
import { InvitationAlertItem } from 'app/components/InvitationMeetingItem'

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

export interface InvitationsListProps extends PropsWithClassName {
  invitationsData: InvitationsDataObj
}

/**
   * @param invitationsData expects to be in this
   * [{
        id: String,
        name: String,
        meetingName: String,
        onRSVP: Event Function
      }]
   * }
   * @returns List of meeting data
   */
export const InvitationsList: React.FC<InvitationsListProps> = ({
  className,
  invitationsData,
}) => (
  <div
    className={`${classNames('InvitationsList', 'flex', 'flex-col', 'gap-4', 'py-20', className)}`}
  >
    {invitationsData.content.map((item) => (
      <InvitationAlertItem
        key={item.id}
        renderAvatar={
          <ImageWithPlaceholder
            className="inline-block min-w-[24px]"
            alt="sample profile"
            size={24}
            src="/sample-profile.jpg"
          />
        }
        renderText={
          <p className="text-sm">
            {item.name} invited you to do{' '}
            <span className="font-bold text-blue-primary">
              {item.meetingName}
            </span>
          </p>
        }
        renderButton={
          <Button
            className="px-12 height-fit"
            onClick={(e) => {
              invitationsData.onRSVP(e, item)
            }}
          >
            RSVP
          </Button>
        }
      />
    ))}
  </div>
)
