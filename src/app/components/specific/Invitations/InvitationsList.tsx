import classNames from 'classnames'
import { PropsWithClassName } from 'app/utils'
import { ImageWithPlaceholder } from 'app/components/generic/ImageWithPlaceholder'
import { Button } from 'app/components/generic/Button'
import { InvitationsAlertItem } from 'app/components/specific/Invitations/InvitationsAlertItem'
import { InvitationsDataObj } from './types'

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
 **/
export const InvitationsList: React.FC<InvitationsListProps> = ({
  className,
  invitationsData,
}) => (
  <div
    className={`${classNames('InvitationsList', 'flex', 'flex-col', 'gap-4', 'py-20', className)}`}
  >
    {invitationsData.content.map((item) => (
      <InvitationsAlertItem
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
