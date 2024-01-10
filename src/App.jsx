import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import Card from "react-bootstrap/Card";


export default class App extends Component {


  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Image />
            <Card.Body>
              <Card.Title>
                {" "}
                <Name />
              </Card.Title>
              <Card.Text>
                <Description />
              </Card.Text>
          <Price />
            </Card.Body>
          </Card>
        </>
    )
  }
}

