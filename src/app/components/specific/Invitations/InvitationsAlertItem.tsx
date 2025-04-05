import { RenderProp } from 'app/utils'
import { IconText } from 'app/components/generic/IconText'

export interface InvitationsAlertItemProps {
  renderAvatar: RenderProp
  renderText: RenderProp
  renderButton: RenderProp
}

export const InvitationsAlertItem: React.FC<InvitationsAlertItemProps> = ({
  renderAvatar,
  renderText,
  renderButton,
}) => (
  <div className="InvitationsAlertItem flex items-center">
    <IconText
      className="flex-1 mr-4"
      renderIcon={renderAvatar}
      renderText={renderText}
    />
    {renderButton}
  </div>
)
