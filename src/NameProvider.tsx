import React from 'react'
type NameProviderProps = {
children: (state:NameProviderState) => JSX.Element;
}

interface NameProviderState{
  readonly name: string;
}

export const NameProvider = (props:NameProviderProps) => {
const [state, setState] = React.useState<NameProviderState>({name: "fjkun06"})
// const {children,...rest} = props;
  return props.children(state)
}


// export default NameProvider

// import * as React from 'react';

// interface NameProviderProps {
//   children: (state: NameProviderState) => React.ReactNode;
// }

// interface NameProviderState {
//   readonly name: string;
// }

// export default class NameProvider extends React.Component<NameProviderProps, NameProviderState> {
//   readonly state: NameProviderState = { name: 'Piotr' };

//   render() {
//     return this.props.children(this.state);
//   }
// }