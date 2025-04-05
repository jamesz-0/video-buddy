'use client'

import React from 'react'
import classNames from 'classnames'
import { PanelButton } from 'app/components/generic/PanelButton'
import { IconText } from 'app/components/generic/IconText'
import { Dot } from 'app/components/generic/Dot'
import './MeetingPanelButtonsArea.css'

export interface NavigationItem {
  id: string
  icon: React.ReactNode
  name: string
  url: string
  isSelected?: boolean
  isRed?: boolean
}

export type MeetingPanelButtonsArea = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const MeetingPanelButtonsArea: React.FC<MeetingPanelButtonsArea> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={classNames(
        'grid',
        'grid-rows-[1fr_1fr_1fr]',
        'gap-4',
        className
      )}
      {...props}
    >
      <PanelButton
        className="flex flex-row items-center MeetingPanelButton StartMeetingButton"
        onClick={() => alert('Start meeting')}
      >
        <IconText
          className="flex-1 ml-12"
          renderIcon={<Dot className="bg-blue-primary size-[32px]" />}
          renderText={<h1 className="text-lg font-bold">Start a meeting</h1>}
        />
      </PanelButton>
      <PanelButton
        className="flex flex-row items-center items-stretch MeetingPanelButton JoinMeetingButton"
        onClick={() => alert('Join meeting')}
      >
        <IconText
          className="flex-1 ml-12"
          renderIcon={<Dot className="bg-blue-primary size-[32px]" />}
          renderText={<h1 className="text-lg font-bold">Join a meeting</h1>}
        />
      </PanelButton>
      <PanelButton
        className="flex flex-row items-center MeetingPanelButton ScheduleMeetingButton"
        onClick={() => alert('Schedule meeting')}
      >
        <IconText
          className="flex-1 ml-12"
          renderIcon={<Dot className="bg-blue-primary size-[32px]" />}
          renderText={<h1 className="text-lg font-bold">Schedule a meeting</h1>}
        />
      </PanelButton>
    </div>
  )
}
