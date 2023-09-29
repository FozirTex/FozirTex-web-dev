import * as React from "react";

type IProps = React.HTMLProps<HTMLAnchorElement>

export const outLinkProps = {
  target: "_blank",
  rel: "noopener",
}

function OutLink(props: IProps) {
  const defaultProps = props.href === '#' ? {} : outLinkProps
  return <a {...defaultProps} {...props} />
}

export default OutLink
