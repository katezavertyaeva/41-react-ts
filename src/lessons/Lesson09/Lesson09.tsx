import { ChangeEvent, useState, useEffect } from "react";
import { Lesson09Component, Result } from "./styles";
import Input from 'components/Input/Input'

function Lesson09() {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');

  console.log('Lesson09 update')
  const example = 23
  console.log(example)

  //Вызов useEffect в момент создания компонента
  // useEffect(() => { console.log('Mounting') }, [])

  // //Вызов useEffect в момент изменения значения в первом поле
  // useEffect(() => { console.log('Updating') }, [inputValue, inputValue2])

  // //Вызов useEffect в момент перед удалением компонента (размонтированием)
  // useEffect(() => {
  //   return () => {
  //     console.log('Unmouting')
  //   }
  // }, [])

  const onChangeExample1Input = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value)
    setInputValue(event.target.value)
  }

  const onChangeExample2Input = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value)
  }

  return (
    <Lesson09Component>
      {/* //неконтролируемый компонент */}
      {/* <Input name='example1' placeholder='Uncontrol' /> */}
      {/* контролируемый компонент */}
      <Input name='example1-control' placeholder="Ex1 control" value={inputValue} onChange={onChangeExample1Input} />
      <Result>{inputValue}</Result>
      <Input name='example2-control' placeholder="Ex2 control" value={inputValue2} onChange={onChangeExample2Input} />
      <Result>{inputValue2}</Result>
    </Lesson09Component>
  )
}

export default Lesson09