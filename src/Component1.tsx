import React from "react";

interface Props {
  label: string;
  count: number;
  onIncrement: () => void;
}

 type value = string | number;

//custom styles
const styles: React.CSSProperties = { backgroundColor: "red" };

//event handling
// define return typeof change function and specify the html element type
// const handleChange: React.ReactEventHandler<HTMLInputElement> = (ev) => console.log(ev)
// const handleChange2: React.ReactEventHandler<HTMLDivElement> = (ev) => console.log(ev)

// on specific events

// zb: onMouseMove = {(ev: React.MouseEvent<HTMLDivElement>) => console.log(ev)}

export const Component1: React.FC<Props> = (props) => {
const {label,count,onIncrement} = props;
  const [value, setValue] = React.useState<value | null>('')

const handleIncrement = () => {
  onIncrement();
}

  return (
    <>
      <div style={styles}>`hello world`</div>
      <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setValue(e.target.value);
      }} />
      <span>You typed `{value}`</span>

      <div>
        <span>{label}: {count}</span>
        <button type="button" onClick={handleIncrement}>`Increment`</button>
      </div>
    </>
  );
};


/* with default props
export const FCCounterWithDefaultProps = (props: Props): JSX.Element => {

  FCCounterWithDefaultProps.defaultProps = { count: 5 }; */