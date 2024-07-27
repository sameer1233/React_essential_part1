import { useState } from "react";
import TabButton from "./component/TabButton.jsx";
import { Examples } from './component/data.jsx'
import Tab from './component/Tab.jsx'

export default function TabButtonMenu() {
  const [initialValue, updatedValue] = useState();

  function selectHandler(onselct) {
    updatedValue(onselct);
    console.log(initialValue);
  }

 let  tabContent = <p>Please select a topic</p>;
  if (initialValue) {
    tabContent = (
      <div id="tab-content">
        <h3>{Examples[initialValue].title}</h3>
        <p>{Examples[initialValue].description}</p>
      </div>
    );
  }

  function selectHandler(onselct) {
    updatedValue(onselct);
    console.log(initialValue);
  }

  return (
    <>
    <Tab
    ButtonContainer= "menu"
    button ={
      <>
      <TabButton
        isSelected={initialValue === "Component"}
        onSelect={() => selectHandler("Component")}
      >
        Component
      </TabButton>
      <TabButton
        isSelected={initialValue === "JSX"}
        onSelect={() => selectHandler("JSX")}
      >
        JSX
      </TabButton>
      <TabButton
        isSelected={initialValue === "Props"}
        onSelect={() => selectHandler("Props")}
      >
        Props
      </TabButton>
      <TabButton
        isSelected={initialValue === "State"}
        onSelect={() => selectHandler("State")}
      >
        State
      </TabButton>
      </>
    }
     >
    </Tab>
    {tabContent}
    </>
  );
}
