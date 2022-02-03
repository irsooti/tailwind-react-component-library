import { useEffect } from "react";
import classes from "./Button.module.css";
export interface ButtonProps {
  label: string;
}

export function Button(props: ButtonProps) {
  useEffect(() => {
    console.log(props);
  }, [props]);

  return <button className={classes.root}>{props.label}</button>;
}
