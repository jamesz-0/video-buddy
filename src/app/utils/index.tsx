export type EventObj = React.SyntheticEvent<EventTarget>

export type RenderProp = React.ReactNode

export interface PropsWithClassName {
  className?: string
}

export interface PropsWithChildren {
  children?: React.ReactNode
}

export type DynamicTag = React.ComponentType | keyof React.JSX.IntrinsicElements

export interface DynamicTagProps {
  tag?: DynamicTag
}
