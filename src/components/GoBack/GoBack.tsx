import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom"
import { GoBackButton } from "./styles";

function GoBack() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  return (
    <GoBackButton>
      <Button name='Go Back' onClick={goBack} />
    </GoBackButton>
  )
}

export default GoBack