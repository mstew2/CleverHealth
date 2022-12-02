import React from "react";
import {
  StyledSelect,
  StyledOption,
  StyledLabel,
  DropdownStyle,
} from "./stylesDropDown.js";

export function Dropdown(props) {
  return (
    <DropdownStyle>
      <StyledLabel>
        {props.buttonName}
      </StyledLabel>
      <StyledSelect id={props.id}>
        {props.children}
      </StyledSelect>
    </DropdownStyle>
  );
}

export function Option(props) {
  return (
    <StyledOption selected={props.selected}>
      {props.value}
    </StyledOption>
  );
}