import classNames from 'classnames'
import { RenderProp } from 'app/utils'

export interface IconTextProps
  extends React.HTMLAttributes<HTMLElement | SVGElement> {
  renderIcon: RenderProp
  renderText: RenderProp
}

export const IconText: React.FC<IconTextProps> = ({
  className,
  renderIcon,
  renderText,
  ...props
}) => (
  <div
    className={`IconText flex flex-row items-center ${classNames(className)}`}
    {...props}
  >
    <div className="IconText-icon flex-shrink flex items-center mr-4 align-middle">
      {renderIcon}
    </div>
    <div className="IconText-text flex-auto align-middle align-middle">
      {renderText}
    </div>
  </div>
)
