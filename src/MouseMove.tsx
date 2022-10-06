import React from 'react'
export interface MPP{
  render: (state: MPS) => React.ReactNode;
}

interface MPS{
  readonly x : number;
  readonly y : number;
}

const MouseMove: React.FC<MPP> = (props) => {

  const [state, setState] = React.useState<MPS>({x: 0,y:0})

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setState({x: e.clientX, y: e.clientY})
  }

  return (
    <div style={{ height: '100%' }} onMouseMove={handleMouseMove}>
      {props.render(state)}
    </div>
  )
}

export default MouseMove
