import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'

const TechList = () => {
  const [newTech, setNewTech] = useState('')
  const dispatch = useDispatch();

  const handleAddTech = () => {
    dispatch({ type: 'ADD_TECH', payload: { tech: newTech } })
    setNewTech('')
  }

  const techs = useSelector(state => state.techs)

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