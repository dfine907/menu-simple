import menu from './data'
import { useState } from 'react'

import Title from './components/Title'
import Menu from './components/Menu'

const App = () => {
  const [item, setItem] = useState(0)

  return (
    <>
      <main>
        <section className="menu">
          <Title text='our menu' />
        </section>
      </main>
    </>
  )
}
export default App
