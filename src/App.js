import React from 'react'
import './index.css'
import { Core_Concept } from './Components/data'
import Header from './Components/Header'
import CoreConcept from './Components/CoreConcept'




const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>

        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={Core_Concept[0].title} image={Core_Concept[0].image} description={Core_Concept[0].description} />
            <CoreConcept title={Core_Concept[1].title} image={Core_Concept[1].image} description={Core_Concept[1].description} />
            <CoreConcept title={Core_Concept[2].title} image={Core_Concept[2].image} description={Core_Concept[2].description} />
            <CoreConcept title={Core_Concept[3].title} image={Core_Concept[3].image} description={Core_Concept[3].description} />

             {/* <CoreConcept {...CoreConcept[3]}/>  we can also pass the props  by rest operator*/}
          </ul>

        </section>
      </main>
    </div>
  )
}

export default App
