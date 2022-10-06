import React from "react";
import { Diff } from "utility-types";

export interface ParentProps {
  count: number;
  onIncrement: () => void;
}


//BaseProps extends ParentProps => accepts both child and parent props
function GenericHOC<BaseProps extends ParentProps>
//child component(tester) must have parnt props
//export them to import in child

(BaseComponent: React.ComponentType<BaseProps>) {

  //create type with props unique to Baseprops(child) with respect to ParentProps(parent)
  type HocProps = Diff<BaseProps, ParentProps> & {
initialCount?: number;
  }

  type HocState = {readonly count: number}

  return function Hoc(props: HocProps){
const [state, setState] = React.useState<HocState>({count: Number(props.initialCount)});

const displayName = `withStae${BaseComponent.name}`;

const WrappedComponent = BaseComponent;

const { ...restProps } = props as BaseProps;
let { count } = state;


const handleIncrement = React.useCallback(
  () => {
    setState({count: count + 1})
  },
  [count],
)

return (
  <BaseComponent
  {...(restProps)}
    count={count} // injected
    onIncrement={handleIncrement} // injected
  />
);
  }
}

export default GenericHOC;
