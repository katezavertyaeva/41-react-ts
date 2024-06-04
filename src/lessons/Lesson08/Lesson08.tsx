import {
  Lesson08Component,
  BoxInfo,
  ButtonStyledComponent,
  ButtonsBox
} from './styles';

function Lesson08() {
  const typeButton = true;

  return (
    <Lesson08Component>
      <BoxInfo>My First styled component</BoxInfo>
      <BoxInfo>My Second styled component</BoxInfo>
      {/* <ButtonStyledComponent mainButton={typeButton}>Custom Button</ButtonStyledComponent> */}
      <ButtonsBox>
        <ButtonStyledComponent >Custom Button</ButtonStyledComponent>
        <ButtonStyledComponent mainButton>Custom Button Main</ButtonStyledComponent>
      </ButtonsBox>
    </Lesson08Component>
  )
}

export default Lesson08