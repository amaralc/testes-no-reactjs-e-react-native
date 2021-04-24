import { useState } from "react"

const TechList = () => {
  const [techs, setTechs] = useState([])

  const handleAddTechs = () => {
    setTechs([...techs, 'Node.js'])
  }


  return (
    <div>
      <ul data-testid="tech-list">
        {techs.map(tech => {
          return (<li key={tech}>{tech}</li>)
        })}
      </ul>
      <button onClick={handleAddTechs} >Adicionar</button>
    </div>
  )
}

export default TechList