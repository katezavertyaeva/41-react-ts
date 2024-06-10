import { ClientsWrapper, StyledLink } from "./styles"

function Clients() {
  return (
    <ClientsWrapper>
      <StyledLink to='facebook'>Facebook page</StyledLink>
      <StyledLink to='google'>Google page</StyledLink>
      <StyledLink to='amazon'>Amazon page</StyledLink>
    </ClientsWrapper>
  )
}

export default Clients