import * as React from "react";
import { SVGProps } from "react";
import clsx from "clsx";

const HashnodeIcon = (
  props: SVGProps<SVGSVGElement> & {
    isclass?: string;
  }
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    className={clsx(props.isclass ? props.isclass : "")}
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill={props.color || "rgba(139,139,139,1)"}
      d="m12 22-4-4h8l-4 4zm0-20 4 4H8l4-4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM2 12l4-4v8l-4-4zm20 0-4 4V8l4 4z"
    />
  </svg>
);

export default HashnodeIcon;
