
import { Footer, Header, HeaderLogo, LayoutComponent, Main, NavContainer, StyledNavLink } from "./styles"
import Avatar from 'assets/avatar.jpg'
import { LayoutProps } from "./types"
import { useNavigate } from 'react-router-dom'


function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  return (
    <LayoutComponent>
      <Header>
        <HeaderLogo src={Avatar} onClick={() => navigate('/')} />
        <NavContainer>
          <StyledNavLink
            to='/'
            style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            Home
          </StyledNavLink>
          <StyledNavLink
            to='/user'
            style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            User
          </StyledNavLink>
          <StyledNavLink
            to='/about'
            style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            About
          </StyledNavLink>
          <StyledNavLink
            to='/clients'
            style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            Clients
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <HeaderLogo src={Avatar} />
      </Footer>
    </LayoutComponent>
  )
}

export default Layout