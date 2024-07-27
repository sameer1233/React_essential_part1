
export default function CoreConcept({img, description, title}){
    return (
        <li>
          <img src={img} alt="..." />
          <h3>{title}</h3>
          <h3>{description}</h3>
        </li>
    );
  }