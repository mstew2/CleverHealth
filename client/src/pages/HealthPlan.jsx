import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/esm/CardImg';
import Slider from '../components/Slider';
import Accordion from 'react-bootstrap/Accordion';
import Logo from '../img/logo.png'


function HealthCard() {
  return (
    <Card style={{ width: '50%' }}>
      <Card.Body>
        <Card.Title>ARE YOU MEETING YOUR NUTRITIONAL NEEDS?</Card.Title>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Balanced Diet</Accordion.Header>
        <Accordion.Body>
          To lead a healthy lifestyle, you need to meet certain daily nutritional goals.
          These include: fresh fruits, whole grains, fresh vegetables, legumes, nuts, and lean proteins.
          The key to a healthy lifstyle is to ensure that your daily caloric needs are met from all of these foods. 
          While calories can come from processed foods high in sugar and saturated fats, these are referred to as "empty calories"
          and add no nutritional value.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Risks</Accordion.Header>
        <Accordion.Body>
          Nearly 4 of the top 10 leading causes for death in the United States has a direct link to your diet. 
          These include heart disease, cancer, stroke, and type 2 diabetes. Supplying your body with the nutrients it needs helps
          it fight disease. This makes diet extremely vital to your health and well-being. It is important to avoid foods high in
          refined grains, added sugar, and trans/saturated fats.  
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Card.Body>
    </Card>
  );
}

function HealthCard2() {
  return (
    <Card style={{ width: '50%' }}>
      <Card.Body>
        <Card.Title>ARE YOU MANAGING YOUR STRESS?</Card.Title>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header></Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header></Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Card.Body>
    </Card>
  );
  
}

function HealthPlan() {
  return (
    <div>
        <div className='nutrition'>
            <h1>Nutrition</h1>
            <HealthCard className="healthplan"/>
        </div>

        <div className='stress'>
            <h1>Stress & Anxiety</h1>
            <HealthCard2 className="healthplan"/>
        </div>

    </div>
  )
}

export default HealthPlan