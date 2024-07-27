import CoreConcept from "./component/CoreConcept"
import { Core_Concept } from "./component/data"
import component from './assets/components.png'
import Section from "./component/Section"
export default function CoreConceptSection(){
   return(
    <Section title="CORE CONCEPT" id="core-concepts">

    <ul>
       <CoreConcept title="Components" description = "The building block of UI using react" img ={component}/>
       <CoreConcept {...Core_Concept[1]}/>
       <CoreConcept {...Core_Concept[2]}/>
       <CoreConcept {...Core_Concept[3]}/>
    </ul>
</Section>
   )
}