// import React from "react";

import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import PropTypes from 'prop-types';

const Comp1=(props)=>{
    console.log(props)
   
    const deleteItem = (item, props) => {
        console.log(item);
        props.onDelete(item);
    } 

    return(
        <Row>
        
        <Col md={{ span: 5, offset: 4 }}>
         {props?.list?.length &&
          <ListGroup style={{background: "red"}}>
            {props.list.map((item) => {
            const btn={
                height:"40px",
                width:"100px",
                padding:"10px",
                background:"blue"
            
            }
                return (
                <ListGroup.Item style={{background:'#ffffff50', border: '2px solid blue'}} key={item.id} onClick={()=> {deleteItem(item, props)}}>
                    <h1>{item.value}</h1>
                </ListGroup.Item>
                
                );
            })}
            </ListGroup>
         }
        </Col>
      </Row>
    )
}

export default Comp1;