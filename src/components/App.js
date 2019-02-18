import React, { Fragment, useState, useEffect } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Sidebar from 'react-sidebar'
import styled, { createGlobalStyle } from 'styled-components'
import { color, width } from 'styled-system'
import theme from '../settings/theme'
import routes from '../pages/routes'
import resetStyles from '../settings/reset.styles'
import globalFonts from '../settings/global.fonts'
import globalStyles from '../settings/global.styles'
import useWindowSize from '../hooks/useWindowSize'
import { Grommet, Box } from 'grommet'

const GlobalStyle = createGlobalStyle`
  ${resetStyles}
  ${globalStyles}
  ${globalFonts}
`

const AppWrapper = styled.div`
  min-height: 100vh;
  padding: 0;
  margin: 0;
  ${width}
  ${color}
`

const AppHeader = (props) => (
  <Box
    tag='header'
    direction='row'
    align='start'
    justify='start'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    overflow='hidden'
    height='auto'
    minHeight='6rem'
    {...props}
  />
)

const AppBody = styled.div`
  margin-top: 20px;
  margin-left: 10vw;
  margin-right: 10vw;
  text-align: left;
  ${color}
`

const AppTitle = styled.div`
  display: inline-block;
  font-weight: 900;
  font-family: 'Aldrich', sans-serif;
  font-size: calc(2.5em + 2vmin);
`

const Button = styled.button`
  border: 0;
  font-size: calc(2.5em + 2vmin);
  line-height: 1.45rem;
  background: transparent;
  ${color}
`

const AppName = styled.input`
  font-family: 'Aldrich', sans-serif;
  font-size: 4rem;
  text-align: left;
  border: 0;
  color: #265C83;
  background-color: transparent;
`

const SidebarHeader = styled.div`
  padding: 34px;
  font-family: 'Aldrich', sans-serif;
  font-size: 1em;
  min-height: 10vh;
  ${color}
`

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  function handleChange(e) {
    setValue(e.target.value)
  }
  return {
    value,
    onChange: handleChange,
  }
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
  })
}  

const markActive = (match, location) => {
  if (!match) {
    return false
  }
  console.log(JSON.stringify(location))
  return true
}

function App() {
  const [sidebarDocked, setSidebarDocked] = useState(false)
  const [open, setSidebarOpen] = useState(false)
  const name = useFormInput('1v1o0n8a5e')
  const size = useWindowSize()
  const nameWidth = (size.width - (size.width/2)) + 'px'
  useDocumentTitle(name.value)

  function onSetSidebarDocked(dock) {
    setSidebarDocked(dock)
  }
  
  function onSetSidebarOpen(opn) {
    setSidebarOpen(opn)
  }

  return(
    <Grommet theme={theme}>
      <AppWrapper className='App' color='#1b1b25' bg='#6d6d6d'>
        <GlobalStyle />
        <Sidebar
          sidebar={
            <div style={{
              textAlign: 'center', margin: '0', paddingTop: '1rem', fontFamily: 'Electrolize', fontSize: '1.5em', background: '#26262a', height: '100vh'
            }}>
              <SidebarHeader>
                v0.1.0
              </SidebarHeader>
              <ul>
                {routes.map(route => {
                  if (route.path === '/') {
                    return (<Fragment key={route.id}></Fragment>) }
                  else {
                    return (
                      <li key={route.id}>
                        <NavLink exact to={route.path} isActive={markActive} className='noselect' activeClassName='navselect'>
                          {route.sidebar}
                        </NavLink>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
          }
          styles={{ sidebar: { top: null, width: '10vw', minWidth: '185px', backgroundColor: '#gray', margin: '0', padding: '0' } }}
          docked={sidebarDocked}
          open={open}
          onSetOpen={onSetSidebarOpen}
          touch
        >
          <AppHeader>
            <AppTitle>
              <Button color='#265C83' onClick={() => onSetSidebarDocked(!sidebarDocked)}>
                <span className='logo' role='img' aria-label='Waxing cresent moon' style={{ paddingLeft: '20px', marginRight: '50px' }}>
                  🌒
                </span>
              </Button>
              <AppName {...name} className='text-pulse' width={nameWidth} spellCheck='false' />
            </AppTitle>
          </AppHeader>
          <AppBody>
            {routes.map(route => (
              <Route key={route.id} path={route.path} exact={route.exact} component={route.main} />
            ))}
          </AppBody>
        </Sidebar>
      </AppWrapper>
    </Grommet>
  )
}
export default App
