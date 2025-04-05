import classNames from 'classnames'

export type DotProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

/**
 * Dot expects bg-color and size to be passed through className.
 * Tailwind does not catch dynamic classNames.
 */
export const Dot: React.FC<DotProps> = ({ className, ...props }) => {
  return (
    <div
      className={`Dot rounded-full ${classNames(className)}`}
      {...props}
    ></div>
  )
}
