import { useState, useEffect } from "react";
import { DropdownButton, Dropdown, Container, Row, Col } from 'react-bootstrap';
import Axios from "axios";
import { Link } from "react-router-dom";
import React from "react";




export default function Button() {

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
    


  const renderEURO = (arr) => {
    if (arr.length === 0) {
        return <h5 className="text-center mt-5">Валюта не найдена</h5>
    }

    return arr.map(([index, item, i]) => {
        return <Dropdown.Item  key={i} ><Link style={{color: "black", textDecoration: "none"}} to={`/showprice/${index}`}>{item}</Link></Dropdown.Item>
    })
    
}


const elements = renderEURO(keys);
 

    return (
      
  
  <Container>
  <Row>
    <Col>
    <DropdownButton id="dropdown-item-button" title="Различные валюты">
    <Dropdown.ItemText>Выбери валюту</Dropdown.ItemText>
    {elements}
    </DropdownButton>
    
    
    </Col>
  </Row>
</Container>
                        
    
    

 
  
 
      
  );
}

