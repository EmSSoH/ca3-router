import React from "react";

let sw = null;
 
fetch('https://swapi.co/api/people/1')
  .then(response => response.json())
  .then(json => {sw = json
  })
  .catch(e => { console.log('error!'); })

const About = () => {
    return (
      
      <div>
        <p>text {sw}</p>
      </div>
    )
  };

  export default About;