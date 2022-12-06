import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-flow: column;
  background-color:  rgba(245, 245, 245, 0.661);
  width: 70%;
  margin: auto;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 4px;
`;

export const DropdownStyle = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Wrapped = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const StyledSelect = styled.select`
  max-width: 100%;
  cursor: pointer;
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
`;

export const StyledLabel = styled.label`
  padding: 0.5rem;
`;

export const StyledButton = styled.input`
    outline: none;
    text-decoration: none;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration-color: #c7caf0;
    color: whitesmoke;
    max-width: 100%;
    height: 100%;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.777);
    border: 1px solid rgba(22, 76, 167, 0.6);
    padding: 1rem;
`;