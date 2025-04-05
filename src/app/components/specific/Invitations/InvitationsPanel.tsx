'use client'

import React from 'react'
import classNames from 'classnames'
import { PropsWithClassName } from 'app/utils/index'
import { Panel, PanelProps } from 'app/components/generic/Panel'
import { InvitationsList } from 'app/components/specific/Invitations/InvitationsList'
import { InvitationsDataObj } from '.'

export interface InvitationsPanelProps extends PanelProps, PropsWithClassName {
  invitationsData: InvitationsDataObj
}

export const InvitationsPanel: React.FC<InvitationsPanelProps> = ({
  invitationsData,
  className,
  ...props
}) => (
  <Panel className={classNames('InvitationsPanel', className)} {...props}>
    <h1 className="text-lg font-bold">Invitations</h1>
    <InvitationsList invitationsData={invitationsData} />
  </Panel>
)
