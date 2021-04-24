import { useState } from "react"

const TechList = () => {
  const [techs, setTechs] = useState([])
  const [newTech, setNewTech] = useState('')

  const handleAddTech = () => {
    setTechs([...techs, newTech])
    setNewTech('')
  }

  return (
    <form data-testid="tech-form" onSubmit={handleAddTech}>
      <ul data-testid="tech-list">
        {techs.map(tech => {
          return (<li key={tech}>{tech}</li>)
        })}
      </ul>
      <label htmlFor='tech'>Tech</label>
      <input id='tech' value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type='submit'>Adicionar</button>
    </form>
  )
}

export default TechList