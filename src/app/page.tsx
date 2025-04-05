'use client'

import React, { useState } from 'react'
import classNames from 'classnames'
import { Calendar, Value } from 'app/components/Calendar'
import {
  ContextObj,
  UpdateDataFunction,
  ContextProviderProps,
  ContextProvider,
} from 'app/components/ContextProvider'
import {
  PropsWithChildren,
  PropsWithClassName,
  EventObj,
  RenderProp,
} from 'app/utils'
import { Panel } from 'app/components/Panel'
import {
  InvitationMeetingItem,
  InvitationsDataObj,
  InvitationsList,
} from 'app/components/InvitationList'
import {
  AgendaTodayMeetingObj,
  onRescheduleFunction,
  onChangeAttendanceFunction,
  AgendaTodayDataType,
  AgendaTodayTableProps,
  AgendaTodayTable,
} from 'app/components/AgendaToday'
import { InsightsDataObj, InsightsData } from 'app/components/Insights'
import { HeaderProps, Header } from 'app/components/Header'
import { MainProps, Main } from 'app/components/Main'
import { IconTextProps, IconText } from 'app/components/IconText'
import { DotProps, Dot } from 'app/components/Dot'
import { ButtonProps, Button } from 'app/components/Button'
import {
  ImageWithPlaceholderProps,
  ImageWithPlaceholder,
} from 'app/components/ImageWithPlaceholder'
import { NavPanel } from './components/NavPanel'
import { AgendaTodayPanel } from './components/AgendaTodayPanel'

const sampleInvitationsData: InvitationsDataObj = {
  content: [
    {
      id: 'h',
      name: 'Samson',
      meetingName: 'Q4 planning',
    },
    {
      id: 'i',
      name: 'Lena',
      meetingName: 'Breakfast!!!!',
    },
    {
      id: 'j',
      name: 'Dominic',
      meetingName: 'Brainstorming',
    },
  ],
  onRSVP: (e: EventObj, meetingItem: InvitationMeetingItem) => {
    alert('rsvp')
    console.log(e, meetingItem)
  },
}

const sampleAgendaTodayData: AgendaTodayDataType = {
  meetings: [
    {
      meetingID: '1',
      meetingName: 'Morning Standup',
      meetingTime: '9:00 - 9:15',
    },
    {
      meetingID: '2',
      meetingName: 'Managers catch-up',
      meetingTime: '10:00 - 10:30',
    },
    {
      meetingID: '3',
      meetingName: 'Ben 1:1',
      meetingTime: '13:00 - 14:45',
    },
    {
      meetingID: '4',
      meetingName: 'KPI Clarification',
      meetingTime: '15:00 - 15:30',
    },
  ],
  onReschedule: (e, meetingItem) => {
    alert('reschedule')
    console.log('reschedule', e, meetingItem)
  },
  onChangeAttendance: (e, meetingItem) => {
    alert('change attendance')
    console.log('change attendance', e, meetingItem)
  },
}

const sampleInsightsData: InsightsDataObj = {
  meetingsHostedThisWeek: 8,
  meetingsHostedLastWeek: 16,
}

const navigationContent = {
  topNavItems: [
    {
      id: '1-home',
      icon: <Dot className="bg-gray-200 size-[24px]" />,
      name: 'Home',
      isSelected: true,
      url: '#',
    },
    {
      id: '2-calendar',
      icon: <Dot className="bg-gray-200 size-[24px]" />,
      name: 'Calendar',
      isSelected: false,
      url: '#',
    },
    {
      id: '3-recording',
      icon: <Dot className="bg-gray-200 size-[24px]" />,
      name: 'Recording',
      isSelected: false,
      url: '#',
    },
    {
      id: '4-contacts',
      icon: <Dot className="bg-gray-200 size-[24px]" />,
      name: 'Contacts',
      isSelected: false,
      url: '#',
    },
    {
      id: '5-whiteboards',
      icon: <Dot className="bg-gray-200 size-[24px]" />,
      name: 'Whiteboards',
      isSelected: false,
      url: '#',
    },
  ],
  bottomNavItems: [
    {
      id: '6-logOut',
      icon: <Dot className="bg-gray-200 size-[24px]" />,
      name: 'Log out',
      isSelected: false,
      url: '#',
      isRed: true,
    },
  ],
}

export default function App() {
  const [value, onChange] = useState<Value>(new Date())
  const [context] = useState({
    data: [],
    updateData: () => {},
  })

  return (
    <ContextProvider dataObj={context}>
      <div className="flex flex-col min-h-screen">
        <Header className="flex-none">
          <div className="LogoContainer">
            <Dot className="bg-white size-[32px]" />
          </div>
          <div className="TitleContainer text-white flex font-bold text-xl">
            Video Buddy
          </div>
        </Header>
        <Main
          className="flex-1"
          style={{
            gridTemplate: `
              'a a a a a a b b b b b b b c c c c c c' auto
              'a a a a a a d d d d d e e e f f f f f' auto`,
          }}
        >
          <NavPanel
            style={{ gridArea: 'a' }}
            navigationContent={navigationContent}
          />
          <AgendaTodayPanel
            style={{ gridArea: 'b' }}
            agendaTodayData={sampleAgendaTodayData}
          />
          <div
            style={{ gridArea: 'c' }}
            className="grid grid-rows-[1fr_1fr_1fr] gap-4"
          >
            <Panel
              tag="button"
              className="flex flex-row items-center MeetingPanelButton StartMeetingButton"
              onClick={() => alert('Start meeting')}
            >
              <IconText
                className="flex-1 ml-12"
                renderIcon={<Dot className="bg-blue-primary size-[32px]" />}
                renderText={
                  <h1 className="text-lg font-bold">Start a meeting</h1>
                }
              />
            </Panel>
            <Panel
              tag="button"
              className="flex flex-row items-center items-stretch MeetingPanelButton JoinMeetingButton"
              onClick={() => alert('Join meeting')}
            >
              <IconText
                className="flex-1 ml-12"
                renderIcon={<Dot className="bg-blue-primary size-[32px]" />}
                renderText={
                  <h1 className="text-lg font-bold">Join a meeting</h1>
                }
              />
            </Panel>
            <Panel
              tag="button"
              className="flex flex-row items-center MeetingPanelButton ScheduleMeetingButton"
              onClick={() => alert('Schedule meeting')}
            >
              <IconText
                className="flex-1 ml-12"
                renderIcon={<Dot className="bg-blue-primary size-[32px]" />}
                renderText={
                  <h1 className="text-lg font-bold">Schedule a meeting</h1>
                }
              />
            </Panel>
          </div>
          <Panel className="Calendar" style={{ gridArea: 'd' }}>
            <h1 className="text-lg font-bold">Calendar</h1>
            <Calendar
              onViewChange={(e) => {
                console.log(e)
              }}
              onChange={(value) => {
                if (value) {
                  onChange(value)
                  alert(value)
                }
              }}
              value={value}
            />
          </Panel>
          <Panel className="Invitations" style={{ gridArea: 'e' }}>
            <h1 className="text-lg font-bold">Invitations</h1>
            <InvitationsList invitationsData={sampleInvitationsData} />
          </Panel>
          <Panel className="Insights flex flex-col" style={{ gridArea: 'f' }}>
            <h1 className="text-lg font-bold mb-2">Insights</h1>
            <InsightsData
              className="flex-grow flex flex-col justify-center"
              insightsData={sampleInsightsData}
            />
          </Panel>
        </Main>
      </div>
    </ContextProvider>
  )
}
