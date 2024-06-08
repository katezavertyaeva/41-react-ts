import styled from "@emotion/styled";

export const EmployeeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 600px;
  height: fit-content;
  padding: 60px;
  border: 2px solid;
  border-radius: 4px;
`

export const CheckboxContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 10px;
`

export const Checkbox = styled.input`
  width: 25px;
  height: 25px;
`

export const CheckboxLabel = styled.label`
  font-sixe: 20px;
`

export const ErrorMessage = styled.div`
  color: red;
  height: 18px;
`
