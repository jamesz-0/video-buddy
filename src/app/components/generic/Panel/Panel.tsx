'use client'

import React from 'react'
import classNames from 'classnames'
import { PropsWithChildren, DynamicTagProps } from 'app/utils/index'

export type PanelProps = React.HTMLAttributes<HTMLElement | SVGElement> &
  PropsWithChildren &
  DynamicTagProps

export const Panel: React.FC<PanelProps> = ({
  className,
  children,
  tag,
  ...props
}) => {
  const Tag = tag ? tag : 'div'
  return (
    <Tag
      className={classNames(
        'Panel',
        'bg-white',
        'p-6',
        'border-2',
        'border-gray-200',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
