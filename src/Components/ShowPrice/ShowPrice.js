
import { useState, useEffect } from "react";

import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Axios from "axios";
import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom';






const ShowPrice = () => {
 
  const iva = useParams();
  

  //////////////
  const url2="http://data.fixer.io/api/symbols?access_key=3a8a953a047ef3d27393ae5dcf3eae69";

    
  const [valueName, setValueName] = useState({});
  
  useEffect(
      () => {
      
      Axios.get(url2,{
      }) 
      .then(res=>{
          
          const valueName = res.data;

          setValueName(valueName.symbols); 

      })  
    }, []
  );

  const keys = Object.entries(valueName);
  

  const someUsers = (arr) => {
    
    return arr.map(([index, item]) => { 
      if (index === iva.moneyName) {
        return <span key="21">{item}</span>;
      } 
        
    })   
}

  const elements2 = someUsers(keys);


 ///////////////////////////////// 
  const url="http://data.fixer.io/api/latest?access_key=3a8a953a047ef3d27393ae5dcf3eae69"
  
  

    const [value, setValue] = useState({});
    
    useEffect(
      () => {
      
      Axios.get(url,{
      }) 
      .then(res=>{
          const value = res.data;
          setValue(value.rates); 
      })
    }, []
  );

  

  let keys2 = Object.entries(value);
  
  const renderEURO2 = (arr) => {
    
    return arr.map(([index, item, i]) => { 
      if (index === iva.moneyName) {
        return <span key='i'>{item} {index}</span>
      } 
        
    })   
}

const renderE = () =>  
   { const sas = iva.moneyName.toLowerCase().slice(0, -1);
    let sas2 = `https://flagcdn.com/${sas}.svg`
   

      return sas2
    } 
    


const el2 = renderE();


const elements = renderEURO2(keys2);

  return (
    <Container>
  <Row>
    <Col>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={el2} />
    <Card.Body>
      <Card.Title>{elements2}</Card.Title>
      <Card.Text>
        1 EUR = {elements} 
      </Card.Text>
      <Button variant="primary"><Link style={{color: "white", textDecoration: "none"}} to="/">Вернуться к списку валют</Link></Button>
    </Card.Body>
  </Card>
  </Col>
  </Row>
</Container>
  )
}

export default ShowPrice;