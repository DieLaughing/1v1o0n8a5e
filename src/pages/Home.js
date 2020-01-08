import React from "react"
import styled from "styled-components"
import JSONPretty from "react-json-pretty"

const JSONPrettyMon = require("../settings/one_dark_drop")

const HomeHeader = styled.div`
  background: transparent;
  z-index: 1;
  overflow: hidden;
  min-height: 3rem;
  padding-top: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  width: 35rem;
  font-family: "Electrolize", sans-serif;
  font-size: 2rem;
  margin: 1rem auto;
`

const Home = () => {
  let title = JSON.parse(localStorage.getItem("AppName"))

  if (title !== "1v1o0n8a5e") {
    return (
      <React.Fragment>
        {Object.entries(localStorage).map(([key, value]) =>
          key === title ? (
            <span key={key}>
              <HomeHeader>{key}:&nbsp;</HomeHeader>
              <JSONPretty
                id='json-pretty'
                data={value}
                theme={JSONPrettyMon}
                space='2'
                style={{ width: "35vw", margin: "0 auto" }}
              ></JSONPretty>
            </span>
          ) : null
        )}
        <footer style={{ margin: "3rem" }}>
          {
            <h1><span role="img" aria-label="Copyright">©️</span> 2020 J. Adam Moore</h1>
          }
        </footer>
      </React.Fragment>
    )
  }
    return (
      <React.Fragment>
        {Object.entries(localStorage).map(([key, value]) =>
            <span key={key}>
              <HomeHeader>{key}:&nbsp;</HomeHeader>
              <JSONPretty
                id='json-pretty'
                data={value}
                theme={JSONPrettyMon}
                space='2'
                style={{ width: "35vw", margin: "0 auto" }}
              ></JSONPretty>
            </span>
        )}
        <footer style={{ margin: "3rem" }}>
          {
            <h1><span role="img" aria-label="Copyright">©️</span> 2020 J. Adam Moore</h1>
          }
        </footer>
      </React.Fragment>
    )
  }

export default Home
