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
  AgendaTodayMeetingObj,
  onRescheduleFunction,
  onChangeAttendanceFunction,
  AgendaTodayDataType,
  AgendaTodayTableProps,
  AgendaTodayTable,
} from 'app/components/AgendaToday'
import {
  InvitationMeetingItem,
  InvitationsDataObj,
} from 'app/components/InvitationsList'
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
import { NavPanel } from 'app/components/NavPanel'
import { AgendaTodayPanel } from 'app/components/AgendaTodayPanel'
import { MeetingPanelButtonsArea } from 'app/components/MeetingPanelButtonsArea'
import { CalendarPanel } from 'app/components/CalendarPanel'
import { InvitationsPanel } from 'app/components/InvitationsPanel'
import { InsightsPanel } from 'app/components/InsightsPanel'

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
  const [value, setValue] = useState<Value>(new Date())
  const [context] = useState({
    data: [],
    updateData: () => {},
  })

  return (
    <ContextProvider dataObj={context}>
      <div className="flex flex-col min-h-screen">
        <Header className="flex-none" />
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
          <MeetingPanelButtonsArea style={{ gridArea: 'c' }} />
          <CalendarPanel
            style={{ gridArea: 'd' }}
            value={value}
            setValue={setValue}
          />
          <InvitationsPanel
            invitationsData={sampleInvitationsData}
            style={{ gridArea: 'e' }}
          />
          <InsightsPanel
            insightsData={sampleInsightsData}
            style={{ gridArea: 'f' }}
          />
        </Main>
      </div>
    </ContextProvider>
  )
}
