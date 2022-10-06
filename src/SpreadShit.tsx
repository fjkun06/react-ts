import React from 'react'

//for react components with children n props
type Props = React.PropsWithChildren<{
  className? : string;
  style? : React.CSSProperties;
  children? : React.ReactNode
}>;

export const SpreadShit: React.FC<Props> = (props) => {

  const {children, ...restProps} = props

  return (
    <div {...restProps}>{children}</div>
  )
}
