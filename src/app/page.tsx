'use client'

import React, { useState } from 'react'
import { Value } from 'app/components/generic/Calendar'
import { ContextProvider } from 'app/components/generic/ContextProvider'
import { EventObj } from 'app/utils'
import { AgendaTodayDataType } from 'app/components/specific/AgendaToday'
import {
  InvitationMeetingItem,
  InvitationsDataObj,
} from 'app/components/specific/Invitations'
import { InsightsDataObj } from 'app/components/specific/Insights'
import { Header } from 'app/components/specific/Header'
import { Main } from 'app/components/specific/Main'
import { Dot } from 'app/components/generic/Dot'
import { NavPanel } from 'app/components/specific/NavPanel'
import { AgendaTodayPanel } from 'app/components/specific/AgendaToday/AgendaTodayPanel'
import { MeetingPanelButtons } from 'app/components/specific/MeetingPanelButtons'
import { CalendarPanel } from 'app/components/specific/CalendarPanel'
import { InvitationsPanel } from 'app/components/specific/Invitations/InvitationsPanel'
import { InsightsPanel } from 'app/components/specific/Insights/InsightsPanel'

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
          <MeetingPanelButtons style={{ gridArea: 'c' }} />
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
