import classNames from 'classnames'
import { PropsWithChildren } from 'app/utils'
import { Dot } from 'app/components/generic/Dot'

export interface HeaderProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    PropsWithChildren {}

export const Header: React.FC<HeaderProps> = ({ className, ...props }) => (
  <div
    className={`Header bg-blue-primary flex items-center gap-4 p-6 ${classNames(className)}`}
    {...props}
  >
    <div className="Header-logoContainer">
      <Dot className="bg-white size-[32px]" />
    </div>
    <div className="Header-titleContainer text-white flex font-bold text-xl">
      Video Buddy
    </div>
  </div>
)
