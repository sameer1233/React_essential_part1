export default function({children, onSelect, isSelected}){
//    function clickHandler(){
//       alert("Hello world")
//    }

    return (
           <li   onClick={onSelect}>
           <button className={isSelected ? "active" : undefined}  >{children}</button>
           </li>
    )
}