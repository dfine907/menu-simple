import { useState } from 'react'
import menu from './data'
import Title from './components/Title'
import Menu from './components/Menu'


const App = () => {
  const [menuItems, setMenuItems] = useState(menu)

  return (
    <>
    
      <main className='world'>
        <section className="menu">
          <Title text='our menu' />
          <Menu items={menuItems} />
        </section>
      </main>
    </>
  )
}
export default App
