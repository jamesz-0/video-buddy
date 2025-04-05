import classNames from 'classnames'
import { PropsWithClassName } from 'app/utils'

export interface InsightsDataObj {
  meetingsHostedThisWeek: number
  meetingsHostedLastWeek: number
}

export interface InsightsDataProps extends PropsWithClassName {
  insightsData: InsightsDataObj
}

export const InsightsData: React.FC<InsightsDataProps> = ({
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
