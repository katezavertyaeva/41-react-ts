import { useContext } from 'react'

import { ContentComponent, DataItem } from "./styles"
import { ContentProps } from "./types"
import { MainCardContext } from 'lessons/Lesson13/components/MainCard/MainCard'

function Content() {
  //3. Вызываем хук useContext, в который передаём необходимый контекст
  // при вызове useContext вернет значение, которое храниться внутри контекста (MainCardContext) и оно сохраниться в переменную data
  const data = useContext(MainCardContext)

  console.log(data)
  return (
    <ContentComponent>
      <DataItem>First Name: {data.firstName}</DataItem>
      <DataItem>Last Name: {data.lastName}</DataItem>
      <DataItem>Age: {data.age}</DataItem>
    </ContentComponent>
  )
}

export default Content