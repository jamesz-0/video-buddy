import classNames from 'classnames'
import { PropsWithChildren } from 'app/utils'

export interface MainProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    PropsWithChildren {}

export const Main: React.FC<MainProps> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={classNames(
      'Main',
      'bg-gray-50',
      'grid',
      'gap-4',
      'p-4',
      className
    )}
    {...props}
  >
    {children}
  </div>
)
