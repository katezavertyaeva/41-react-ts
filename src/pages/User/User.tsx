import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react";

import Button from "components/Button/Button"
import { Title, UserPageWrapper } from "./styles"

function User() {
  const navigate = useNavigate();

  const locationInfo = useLocation();
  console.log(locationInfo)

  const goHome = () => {
    navigate('/')
  }

  useEffect(() => {
    return () => {
      console.log('Component User unmount')
    }
  }, [])

  return (
    <UserPageWrapper>
      <Title>User Page</Title>
      <Button name='Go to Home page' onClick={goHome} />
    </UserPageWrapper>
  )
}

export default User