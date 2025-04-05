import classNames from 'classnames'
import { EventObj, PropsWithClassName } from 'app/utils'
import { Button } from 'app/components/generic/Button'

export interface AgendaTodayMeetingObj {
  meetingID: string
  meetingName: string
  meetingTime: string
}

export interface onRescheduleFunction {
  (e: EventObj, meetingItem: AgendaTodayMeetingObj): void
}

export interface onChangeAttendanceFunction {
  (e: EventObj, meetingItem: AgendaTodayMeetingObj): void
}

export interface AgendaTodayDataType {
  meetings: Array<AgendaTodayMeetingObj>
  onReschedule: onRescheduleFunction
  onChangeAttendance: onChangeAttendanceFunction
}

export interface AgendaTodayTableProps extends PropsWithClassName {
  agendaTodayTableData: AgendaTodayDataType
}

export const AgendaTodayTable: React.FC<AgendaTodayTableProps> = ({
  className,
  agendaTodayTableData,
}) => (
  <div className={`${classNames('AgentTodayTable', className)}`}>
    <div className="table border-spacing-x-0 border-spacing-y-[16px] w-full">
      {agendaTodayTableData.meetings.map((meetingItem) => {
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
                  agendaTodayTableData.onReschedule(e, meetingItem)
                }}
              >
                Reschedule
              </Button>
            </div>
            <div className="table-cell text-right align-middle">
              <Button
                isSecondary={true}
                onClick={(e: EventObj) => {
                  agendaTodayTableData.onChangeAttendance(e, meetingItem)
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
