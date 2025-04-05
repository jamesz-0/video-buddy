import { RenderProp } from 'app/utils'
import { IconText } from 'app/components/generic/IconText'

export interface InvitationAlertItemProps {
  renderAvatar: RenderProp
  renderText: RenderProp
  renderButton: RenderProp
}

export const InvitationAlertItem: React.FC<InvitationAlertItemProps> = ({
  renderAvatar,
  renderText,
  renderButton,
}) => (
  <div className="InvitationAlertItem flex items-center">
    <IconText
      className="flex-1 mr-4"
      renderIcon={renderAvatar}
      renderText={renderText}
    />
    {renderButton}
  </div>
)
