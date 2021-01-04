import React from "react"
import styled, { createGlobalStyle} from 'styled-components'

import MainMenu from '../components/MainMenu'

const GlobalStyles = createGlobalStyle`
body,html{
  font-family: 'Open sans',sans-serif;
  padding: 0;
  margin: 0;
}
`

const LayoutWrapper = styled.div`
max-width: 800px;
margin: 0 auto;
`

const Layout = ({ children }) => {
  
  return (
  <>
  <GlobalStyles/>
  <MainMenu/>
  <LayoutWrapper>
  {children}
  </LayoutWrapper>
  </>
    )
}


export default Layout
