import React, { useState } from "react";
import "./index.css";
import { Core_Concept } from "./Components/data";
import Header from "./Components/Header";
import CoreConcept from "./Components/CoreConcept";
import TabButton from "./Components/TabButton";
import { EXAMPLES } from "./Components/data";
const App = () => {

  const [selectedTopic, setSelectedTopic] = useState()

  function clickHandler(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log(selectedButton);

  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={Core_Concept[0].title}
              image={Core_Concept[0].image}
              description={Core_Concept[0].description}
            />
            <CoreConcept
              title={Core_Concept[1].title}
              image={Core_Concept[1].image}
              description={Core_Concept[1].description}
            />
            <CoreConcept
              title={Core_Concept[2].title}
              image={Core_Concept[2].image}
              description={Core_Concept[2].description}
            />
            <CoreConcept
              title={Core_Concept[3].title}
              image={Core_Concept[3].image}
              description={Core_Concept[3].description}
            />
            {/* <CoreConcept {...CoreConcept[3]}/>  we can also pass the props  by rest operator*/}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* we can also pass the props like this way of passing as a attribute */}
            {/* <TabButton lable='compnent'/>
          <TabButton lable='jsx'/> */}

            {/* we can pass the propos as a component value and take as a props in tabButton component */}
            <TabButton isSelected={selectedTopic==='components'} onSelect={() => clickHandler('components')}>Component</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'} onSelect={() => clickHandler('jsx')}>JSx</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onSelect={() => clickHandler('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelect={() => clickHandler('state')}>State</TabButton>
          </menu>


          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) :
            (
              <div id="tab">
                <h4>{EXAMPLES[selectedTopic].title}</h4>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </div>
            )}


        </section>
      </main>
    </div>
  );
};

export default App;
