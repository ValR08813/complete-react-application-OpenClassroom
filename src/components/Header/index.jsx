import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../colors'
import DarkLogo from '../../assets/dark-logo.png'

const StyledLink = styled(Link)`
  padding: 15px;
  color: ${colors.secondary};
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

const HeaderBanner = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  align-items: center;
`
const HeaderImage = styled.img`
  width: 187.63px;
  height: 70px;
  left: 33px;
  top: 30px;
`
const NavBar = styled.div`
  top: 30px;
  border: 1px solid black;
`

function Header() {
  return (
    <HeaderBanner>
      <HeaderImage src={DarkLogo} />
      <NavBar>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </NavBar>
    </HeaderBanner>
  )
}

export default Header
