import Section from "lessons/Lesson13/components/Section/Section"
import { MainCardTitle, MainCardWrapper } from "./styles"
import { createContext, useState } from "react"
import { UserData } from './types'

//1. Создаем независимое хранилище - контекст
export const MainCardContext = createContext<UserData>({
  firstName: '',
  lastName: '',
  age: 0
})

function MainCard() {
  const [userData, setUserData] = useState<UserData>({
    firstName: 'Bart',
    lastName: 'Simpson',
    age: 12
  })

  return (
    //2. Создаем обертку, которая позволит получить значение из контекста в любом компоненте, который будет вложен внутри обертки
    <MainCardContext.Provider value={userData}>
      <MainCardWrapper>
        <MainCardTitle>Main Card</MainCardTitle>
        <Section />
      </MainCardWrapper>
    </MainCardContext.Provider>
  )
}

export default MainCard