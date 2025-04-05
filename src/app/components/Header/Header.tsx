import classNames from 'classnames'
import { PropsWithChildren } from 'app/utils'

export interface HeaderProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    PropsWithChildren {}

export const Header: React.FC<HeaderProps> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={`Header bg-blue-primary flex items-center gap-4 p-6 ${classNames(className)}`}
    {...props}
  >
    {children}
  </div>
)
