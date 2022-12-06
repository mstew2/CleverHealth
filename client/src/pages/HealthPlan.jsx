import React from 'react'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';



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
          refined grains, added sugar, and trans/saturated fats. Engaging in harmful behaviors such as drinking alcohol and smoking can 
          have a dramatic effect 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>USDA MyPlate</Accordion.Header>
        <Accordion.Body>
          The U.S Department of Agriculture suggests that a healthy diet plan include fruits, vegetables, grains, protein, and dairy. However,
          nutritional needs vary based on your age, weight, gender, and other characteristics. This is why it is important to first identify your
          daily caloric and individual nutritional need. You can calculate your exact requirements here at <a href="https://www.myplate.gov/myplate-plan" target={'_blank'}>My Plate Plan</a>.
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
        <Card.Title>HOW DO YOU MANAGE STRESS?</Card.Title>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Types of Stress</Accordion.Header>
        <Accordion.Body>
          Your body reacts to a challenging situation in the form of stress. There are two types
          of stress: short-term and long-term. Short term stress is usually caused by multiple challenging situations/tasks 
          forced into a short period of time (ex. arguments, running late, stressful work day). Long-term stress is often caused 
          by a change that can't be easily solved and often persists as a result (ex. financial issues, death of a loved one, having a baby)
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Hallmarks of Stress</Accordion.Header>
        <Accordion.Body>
          While stress may manifest differently in each person, there are certain telltale signs such as moodiness, irritability,
          depression, worry. Physically, stress can present itself in the form of headaches, appetite changes, weight fluctuation, insomnia, and more.
          It is imperative to manage stress to prevent illness, boost immunity, and improve overall quality of life. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Managing your Stress</Accordion.Header>
        <Accordion.Body>
          You can manage your stress by utlizing certain skills in your everyday life. Some of these include making the conscious decision to find pockets of relaxation
          in your schedule and learning to "log off" after a certain time of day, regular exercise, eating nutritious food, seeking professional support, engaging in
          meditation or yoga daily, limiting screen time, and seeking solutions to your problems. Practicing even a few of these will result in a drastic
          improvement in your sleep, muscle tension, mood, and more.  
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Card.Body>
    </Card>
  );
}

function HealthCard3() {
  return (
    <Card style={{ width: '50%' }}>
      <Card.Body>
        <Card.Title>DO YOU FEEL WELL RESTED?</Card.Title>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Adequate Rest</Accordion.Header>
        <Accordion.Body>
          Sleep is a vital key to a healthy life. Yet, it is probably the most underestimated factor. A good night's sleep is directly linked to
          stress, ability to focus, metabolism, physical performance, and even immune system function. Lack of adequate rest can even lead to obesity, heart disease, diabetes,
          and other serious health concerns. Most adults require at least 7 hours of sleep on a regular basis for optimal function. However, the quality of
          sleep isn't determined simply by hours of sleep. The next section covers the science behind sleep, and what exactly determines the quality of rest.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>The Science of Sleep</Accordion.Header>
        <Accordion.Body>
          The quality of your sleep is determined by the type of sleep you're getting. Your body cycles through two types of sleep: REM 
          and non-REM sleep. Non-REM sleep is made up of light sleep and deep sleep. Your heart rate and breathing regulate during light sleep, and your body
          begins restoration in deep sleep. Non-REM sleep is associated with memory and learning. 

          Dreaming is often associated with REM sleep, and is often accompanied by rapid eye movement beneath the eye lids. The body becomes paralyzed
          and brain waves match those when we are awake. The quality of your sleep is determined by the length of time you spend in these cycles.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Impove Your Sleep Quality</Accordion.Header>
        <Accordion.Body>
          You can improve your quality of sleep by taking specific steps toward increasing your time snoozing and have deeper rest. For example, 
          cutting out caffeine in the evening, spending time away from screens before bed, exercise, avoiding large meals, short naps, and meditation can 
          dramatically improve your sleep. Consistency, however, is key. Your body has a natural circadian rhythm that responds to consistency. 
          Going to bed at the same time and waking up at the same time can have a dramatic improvement on your rest. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Card.Body>
    </Card>
  );
}

function HealthPlan() {
  console.log("Hello")
  return (
    
    <div>
        <div className='nutrition'>
            <h1>Nutrition</h1>
            <HealthCard className="healthplan"/>
        </div>
        <hr />
        <div className='stress'>
            <h1>Stress</h1>
            <HealthCard2 className="healthplan"/>
        </div>
        <hr />
        <div className='sleep'>
            <h1>Sleep</h1>
            <HealthCard3 className="healthplan"/>
        </div>
        <hr />
    </div>
  )
}

export default HealthPlan