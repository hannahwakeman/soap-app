import * as React from "react";
import { Stack } from "react-bootstrap";
import "./TextCard.scss";
export default function TextCard(props: {
  margin?: string;
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    <div
      className="text-container round"
      style={{ margin: `${props.margin || 0}` }}
    >
      <Stack>{props.children}</Stack>
    </div>
  );
}
