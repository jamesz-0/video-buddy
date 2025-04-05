import classNames from 'classnames'
import { PropsWithChildren } from 'app/utils'
import './Button.css'

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    PropsWithChildren {
  isSecondary?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  isSecondary,
  ...props
}) => (
  <button
    className={`${classNames(
      'Button',
      isSecondary ? 'Button--secondary' : '',
      className
    )}`}
    {...props}
  >
    {children}
  </button>
)
