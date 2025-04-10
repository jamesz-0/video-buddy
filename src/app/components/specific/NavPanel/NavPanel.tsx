'use client'

import React from 'react'
import classNames from 'classnames'
import { PropsWithClassName } from 'app/utils/index'
import { Panel, PanelProps } from 'app/components/generic/Panel'
import { IconText } from 'app/components/generic/IconText'
import './NavPanel.css'

export interface NavigationItem {
  id: string
  icon: React.ReactNode
  name: string
  url: string
  isSelected?: boolean
  isRed?: boolean
}

export interface NavigationContent {
  topNavItems: Array<NavigationItem>
  bottomNavItems: Array<NavigationItem>
}

export interface NavPanelProps extends PanelProps, PropsWithClassName {
  navigationContent: NavigationContent
}

export const NavPanel: React.FC<NavPanelProps> = ({
  className,
  navigationContent,
  ...props
}) => {
  return (
    <Panel
      className={classNames(
        'NavPanel',
        'min-w-[240px]',
        'px-0',
        'flex',
        'flex-col',
        'justify-between',
        className
      )}
      {...props}
    >
      <ul className="Nav">
        {navigationContent.topNavItems.map((item) => (
          <a
            key={item.id}
            className={classNames(
              'Nav-link',
              item.isSelected ? 'Nav-link--selected' : ''
            )}
            aria-current="page"
            href={item.url}
          >
            <li className="Nav-item">
              <IconText
                className="flex-1"
                renderIcon={item.icon}
                renderText={item.name}
              />
            </li>
          </a>
        ))}
      </ul>
      {navigationContent.bottomNavItems.map((item) => (
        <a
          key={item.id}
          className={classNames(
            'Nav-link',
            item.isRed ? 'Nav-link--red' : '',
            'mb-4'
          )}
          href="#"
        >
          <IconText
            className="flex-1"
            renderIcon={item.icon}
            renderText={item.name}
          />
        </a>
      ))}
    </Panel>
  )
}
