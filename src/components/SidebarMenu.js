import React, { useState, useEffect, Fragment } from "react"
import styled from "styled-components"
import { color } from "styled-system"
import { NavLink, Route } from "react-router-dom"
import theme from "../settings/theme"
import routes from "../pages/routes"
import Logo from "../components/Logo"
import Sidebar from "react-sidebar"
import useWindowSize from "../hooks/useWindowSize"

const SidebarHeader = styled.div`
  padding: 34px;
  font-family: "Aldrich", sans-serif;
  font-size: 1em;
  min-height: 10vh;
  ${color}
`

const AppHeader = styled.div`
  tag: header;
  direction: row;
  align: start;
  justify: start;
  background: ${theme.global.colors.brand};
  padleft: 50px;
  padright: 15px;
  padvertical: 15px;
  zindex: 1;
  overflow: hidden;
  height: auto;
  minheight: 6rem;
`

const SidebarBody = styled.div`
  margin-top: 20px;
  margin-left: 10vw;
  margin-right: 10vw;
  text-align: left;
  ${color}
`

const AppTitle = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin: 10px;
  font-weight: 900;
  font-family: "Aldrich", sans-serif;
  font-size: calc(2.5em + 2vmin);
`

const Button = styled.button`
  border: 0;
  font-size: calc(2.5em + 2vmin);
  line-height: 1.45rem;
  background: transparent;
  ${color}
`
const SearchField = styled.input`
  font-family: "Aldrich", sans-serif;
  font-size: 4rem;
  text-align: left;
  border: 0;
  color: ${theme.global.colors.search};
  background-color: transparent;
`

const SidebarMenu = ({ lsKey, items, ...props }) => {
  const [sidebarDocked, setSidebarDocked] = useState(false)
  const [open, setSidebarOpen] = useState(false)
  const [list, setList] = useState(JSON.parse(localStorage.getItem(lsKey)) || items)
  const [state, setState] = useState(list || items)

  const size = useWindowSize()

  // Runs once at the beginning
  useEffect(() => {
    if (list) {
      setState(list || items)
      setList(list)
    }
    if (state === "") {
      localStorage.setItem(lsKey, JSON.stringify('1v1o0n8a5e'))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
      document.title = state
      let keyName = listAllItems() || []

      for (let i = 0; i < keyName.length; i++) {
        if (keyName[i] === state) {
          console.log("SAME")
          // TODO: Put Easter Egg search here
        }
      }
      localStorage.setItem(lsKey, JSON.stringify(state))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  function listAllItems() {
    let t = []
    for (let i = 0; i < localStorage.length; i++) {
      t.push(localStorage.key(i))
    }
    return t
  }

  const nameWidth = size.width - size.width / 2 + "px"
  const onChange = event => setState(event.target.value)

  const markActive = (match, location) => {
    if (!match) {
      return false
    }
    return true
  }

  return (
    <Sidebar
      sidebar={
        <div
          style={{
            textAlign: "center",
            margin: "0",
            paddingTop: "1rem",
            fontFamily: "Electrolize",
            fontSize: "1.5em",
            background: theme.global.colors.fill_gray,
            height: "100vh",
            overflow: "hidden"
          }}
          {...props}
        >
          <SidebarHeader>v0.1.0</SidebarHeader>
          <ul>
            {routes.map(route => {
              if (route.path === "/") {
                return <Fragment key={route.id}></Fragment>
              } else {
                return (
                  <li key={route.id}>
                    <NavLink
                      exact
                      to={route.path}
                      isActive={markActive}
                      className='noselect'
                      activeClassName='navselect'
                    >
                      {route.sidebar}
                    </NavLink>
                  </li>
                )
              }
            })}
          </ul>
        </div>
      }
      styles={{
        sidebar: {
          top: null,
          width: "10vw",
          minWidth: "185px",
          backgroundColor: theme.global.colors.fill_gray,
          margin: "0",
          padding: "0",
          overflow: "hidden"
        }
      }}
      docked={sidebarDocked}
      open={open}
      onSetOpen={setSidebarOpen}
      touch
    >
      <AppHeader>
        <AppTitle>
          <Button
            color={theme.global.colors.search}
            onClick={() => setSidebarDocked(!sidebarDocked)}
          >
            <Logo />
          </Button>
          <SearchField
            name={state}
            value={state}
            onChange={onChange}
            className='text-pulse'
            width={nameWidth}
            spellCheck='false'
          />
        </AppTitle>
      </AppHeader>
      <SidebarBody>
        {routes.map(route => (
          <Route
            key={route.id}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </SidebarBody>
    </Sidebar>
  )
}

export default SidebarMenu
