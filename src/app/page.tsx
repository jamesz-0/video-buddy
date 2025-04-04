'use client'

import Image from 'next/image'
import classNames from 'classnames'
import React, { ReactNode, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Value } from 'react-calendar/dist/esm/shared/types.js'
import './react-calendar-overrides.css'
import { CSSRuleObject } from 'tailwindcss/types/config'

type DynamicTag = React.ComponentType | keyof React.JSX.IntrinsicElements

type EventObj = React.SyntheticEvent<EventTarget>

type RenderProp = React.ReactNode

interface DynamicTagProps {
  tag?: DynamicTag
}

interface PropsWithClassName {
  className?: string
}

interface PropsWithChildren {
  children?: React.ReactNode
}

interface PropsWithInlineStyle {
  style?: React.CSSProperties
}

interface InvitationMeetingItem {
  id: string
  name: string
  meetingName: string
}

interface onRSVPFunction {
  (e: EventObj, meetingItem: InvitationMeetingItem): void
}

interface InvitationsDataObj {
  content: Array<InvitationMeetingItem>
  onRSVP: onRSVPFunction
}

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
  },
}

interface AgendaTodayMeetingObj {
  meetingID: string
  meetingName: string
  meetingTime: string
}

interface onRescheduleFunction {
  (e: EventObj, meetingItem: AgendaTodayMeetingObj): void
}

interface onChangeAttendanceFunction {
  (e: EventObj, meetingItem: AgendaTodayMeetingObj): void
}

interface AgendaTodayDataType {
  meetings: Array<AgendaTodayMeetingObj>
  onReschedule: onRescheduleFunction
  onChangeAttendance: onChangeAttendanceFunction
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
  },
  onChangeAttendance: (e, meetingItem) => {
    alert('change attendance')
  },
}

interface InsightsDataObj {
  meetingsHostedThisWeek: number
  meetingsHostedLastWeek: number
}

const sampleInsightsData: InsightsDataObj = {
  meetingsHostedThisWeek: 8,
  meetingsHostedLastWeek: 16,
}

interface ContextObj {
  data: Object
  updateData: UpdateDataFunction
}

interface UpdateDataFunction {
  (changedData: ContextObj): void
}

export const Context = React.createContext<ContextObj>({
  data: [],
  updateData: (changedData: ContextObj) => {},
})

interface ContextProviderProps extends PropsWithChildren {
  dataObj: ContextObj
}

function ContextProvider({ dataObj, children }: ContextProviderProps) {
  const [modifiedData, setModifiedData] = useState(dataObj)

  function updateData(changedData: ContextObj) {
    setModifiedData(changedData)
  }

  const contextValue: ContextObj = {
    data: modifiedData,
    updateData,
  }

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

interface HeaderProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    PropsWithChildren {}

const Header: React.FC<HeaderProps> = ({ className, children, ...props }) => (
  <div
    className={`Header bg-blue-primary flex items-center gap-4 p-6 ${classNames(className)}`}
    {...props}
  >
    {children}
  </div>
)

interface MainProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    PropsWithChildren {}

const Main: React.FC<MainProps> = ({
  className,
  children,
  style,
  ...props
}) => (
  <div
    className={`Main bg-gray-50 grid gap-4 p-4 ${classNames(className)}`}
    style={{
      gridTemplate: `
        'a a a a a a b b b b b b b c c c c c c' auto
        'a a a a a a d d d d d e e e f f f f f' auto`,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
)

interface PanelProps
  extends React.HTMLAttributes<HTMLElement | SVGElement>,
    PropsWithChildren,
    DynamicTagProps {}

const Panel: React.FC<PanelProps> = ({
  className,
  children,
  tag,
  ...props
}) => {
  const Tag = tag ? tag : 'div'
  return (
    <Tag
      className={`Panel bg-white p-6 border-2 border-gray-200 ${classNames(className)}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

interface IconTextProps extends React.HTMLAttributes<HTMLElement | SVGElement> {
  renderIcon: RenderProp
  renderText: RenderProp
}

const IconText: React.FC<IconTextProps> = ({
  className,
  renderIcon,
  renderText,
  ...props
}) => (
  <div
    className={`IconText flex flex-row items-center ${classNames(className)}`}
    {...props}
  >
    <div className="IconText-icon flex-shrink flex items-center mr-4 align-middle">
      {renderIcon}
    </div>
    <div className="IconText-text flex-auto align-middle align-middle">
      {renderText}
    </div>
  </div>
)

interface DotProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

/**
 * Dot expects bg-color and size to be passed through className.
 * Tailwind does not catch dynamic classNames.
 */
const Dot: React.FC<DotProps> = ({ className, ...props }) => {
  return (
    <div
      className={`Dot rounded-full ${classNames(className)}`}
      {...props}
    ></div>
  )
}

interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    PropsWithChildren {
  isSecondary?: boolean
}

const Button: React.FC<ButtonProps> = ({
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

interface ImageWithPlaceholderProps extends PropsWithClassName {
  size: number
  src: string
  alt: string
}

const ImageWithPlaceholder: React.FC<ImageWithPlaceholderProps> = ({
  className,
  size,
  src,
  alt,
}) => {
  return src && alt ? (
    <Image
      className={`rounded-full ${className}`}
      src={src}
      width={size}
      height={size}
      alt={alt}
    ></Image>
  ) : (
    <Dot className={`bg-gray-200 ${className}`} />
  )
}

interface InvitationAlertItemProps {
  renderAvatar: RenderProp
  renderText: RenderProp
  renderButton: RenderProp
}

const InvitationAlertItem: React.FC<InvitationAlertItemProps> = ({
  renderAvatar,
  renderText,
  renderButton,
}) => (
  <div className="InvitationAlertItem flex items-center">
    <IconText
      className="flex-1 mr-4"
      renderIcon={renderAvatar}
      renderText={renderText}
    />
    {renderButton}
  </div>
)

interface AgendaTodayTableProps extends PropsWithClassName {
  meetingData: AgendaTodayDataType
}

const AgendaTodayTable: React.FC<AgendaTodayTableProps> = ({
  className,
  meetingData,
}) => (
  <div className={`${classNames('AgentToday', className)}`}>
    <div className="table border-spacing-x-0 border-spacing-y-[16px] w-full">
      {meetingData.meetings.map((meetingItem) => {
        return (
          <div className="table-row" key={meetingItem.meetingID}>
            <div className="table-cell align-middle pr-2">
              {meetingItem.meetingName}
            </div>
            <div className="table-cell align-middle pr-2">
              {meetingItem.meetingTime}
            </div>
            <div className="table-cell text-right align-middle pr-2">
              <Button
                onClick={(e: EventObj) => {
                  meetingData.onReschedule(e, meetingItem)
                }}
              >
                Reschedule
              </Button>
            </div>
            <div className="table-cell text-right align-middle">
              <Button
                isSecondary={true}
                onClick={(e: EventObj) => {
                  meetingData.onChangeAttendance(e, meetingItem)
                }}
              >
                Change attendance
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  </div>
)

interface InvitationsListProps extends PropsWithClassName {
  invitationsData: InvitationsDataObj
}

/**
 * @param invitationsData expects to be in this
 * [{
      id: String,
      name: String,
      meetingName: String,
      onRSVP: Event Function
    }]
 * }
 * @returns List of meeting data
 */
const InvitationsList: React.FC<InvitationsListProps> = ({
  className,
  invitationsData,
}) => (
  <div
    className={`${classNames('InvitationsList', 'flex', 'flex-col', 'gap-4', 'py-20', className)}`}
  >
    {invitationsData.content.map((item) => (
      <InvitationAlertItem
        key={item.id}
        renderAvatar={
          <ImageWithPlaceholder
            className="inline-block min-w-[24px]"
            alt="sample profile"
            size={24}
            src="/sample-profile.jpg"
          />
        }
        renderText={
          <p className="text-sm">
            {item.name} invited you to do{' '}
            <span className="font-bold text-blue-primary">
              {item.meetingName}
            </span>
          </p>
        }
        renderButton={
          <Button
            className="px-12 height-fit"
            onClick={(e) => {
              sampleInvitationsData.onRSVP(e, item)
            }}
          >
            RSVP
          </Button>
        }
      />
    ))}
  </div>
)

interface InsightsDataProps extends PropsWithClassName {
  insightsData: InsightsDataObj
}

const InsightsData: React.FC<InsightsDataProps> = ({
  className,
  insightsData,
}) => (
  <div className={`${classNames('InsightsData', className)}`}>
    <div className="table w-full border-spacing-x-0 border-spacing-y-[16px]">
      <div className="table-row">
        <div className="table-cell w-1/2 align-middle">
          Number of meetings you hosted this week
        </div>
        <div className="table-cell text-blue-primary text-5xl text-center align-middle">
          {insightsData.meetingsHostedThisWeek}
        </div>
      </div>
      <div className="table-row">
        <div className="table-cell w-1/2 align-middle">
          Number of meetings you hosted last week
        </div>
        <div className="table-cell text-blue-primary text-5xl text-center align-middle">
          {insightsData.meetingsHostedLastWeek}
        </div>
      </div>
    </div>
  </div>
)

export default function Home() {
  const [value, onChange] = useState<Value>(new Date())
  const [context, setContext] = useState({
    data: [],
    updateData: (changedData: ContextObj) => {},
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
        <Main className="flex-1">
          <Panel
            className="NavPanel min-w-[240px] px-0 flex flex-col justify-between"
            style={{ gridArea: 'a' }}
          >
            <ul className="Nav">
              <a
                className="NavLink NavLink--selected"
                aria-current="page"
                href="#"
              >
                <li className="NavItem">
                  <IconText
                    className="flex-1"
                    renderIcon={<Dot className="bg-gray-200 size-[24px]" />}
                    renderText="Home"
                  />
                </li>
              </a>
              <a className="NavLink" aria-current="page" href="#">
                <li className="NavItem">
                  <IconText
                    className="flex-1"
                    renderIcon={<Dot className="bg-gray-200 size-[24px]" />}
                    renderText="Calendar"
                  />
                </li>
              </a>
              <a className="NavLink" aria-current="page" href="#">
                <li className="NavItem">
                  <IconText
                    className="flex-1"
                    renderIcon={<Dot className="bg-gray-200 size-[24px]" />}
                    renderText="Recording"
                  />
                </li>
              </a>
              <a className="NavLink" aria-current="page" href="#">
                <li className="NavItem">
                  <IconText
                    className="flex-1"
                    renderIcon={<Dot className="bg-gray-200 size-[24px]" />}
                    renderText="Contacts"
                  />
                </li>
              </a>
              <a className="NavLink" aria-current="page" href="#">
                <li className="NavItem">
                  <IconText
                    className="flex-1"
                    renderIcon={<Dot className="bg-gray-200 size-[24px]" />}
                    renderText="Whiteboards"
                  />
                </li>
              </a>
            </ul>
            <a
              className="NavLink NavLink--red mb-4"
              aria-current="page"
              href="#"
            >
              <IconText
                className="flex-1"
                renderIcon={<Dot className="bg-gray-200 size-[24px]" />}
                renderText="Log out"
              />
            </a>
          </Panel>
          <Panel className="flex flex-col" style={{ gridArea: 'b' }}>
            <div className="flex-1 text-center">
              <h1 className="text-lg font-bold">Good morning, John!</h1>
              <ImageWithPlaceholder
                className="inline-block"
                alt="sample profile"
                size={128}
                src="/sample-profile.jpg"
              />
            </div>
            <h2 className="flex-none text-lg font-bold">Your agenda today:</h2>
            <AgendaTodayTable
              className="flex-none"
              meetingData={sampleAgendaTodayData}
            />
          </Panel>
          <div
            style={{ gridArea: 'c' }}
            className="grid grid-rows-[1fr_1fr_1fr] gap-4"
          >
            <Panel
              tag="button"
              className="flex flex-row items-center MeetingButton StartMeetingButton"
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
              className="flex flex-row items-center items-stretch MeetingButton JoinMeetingButton"
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
              className="flex flex-row items-center MeetingButton ScheduleMeetingButton"
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
              view="month"
              showFixedNumberOfWeeks={true}
              onViewChange={(e) => {
                // e.stopPropagation()
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
