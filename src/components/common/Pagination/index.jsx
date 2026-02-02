import React from "react";
import { StyledPagination } from "./style";

const CPagination = React.memo(({ id, onBlur, ...rest }) => {
  return <StyledPagination {...rest} />;
});

export default CPagination;
