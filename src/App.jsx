

import Header from './component/Header.jsx'
import CoreConceptSection from './CoreConceptSection.jsx'
import TabButtonMenu from './TabButtonMenu.jsx'
function App() {
 

  return (
    <div>
     <Header/>
      <main>
        
         <CoreConceptSection/>
        <section id="examples">
           <h2>Examples</h2>
           <TabButtonMenu/>
           
           
        </section>
      </main>
    </div>
  );
}

export default App;
