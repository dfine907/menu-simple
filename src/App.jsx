import { useState } from 'react'
import menu from './data'
import Title from './components/Title'
import Menu from './components/Menu'
import Categories from './components/Categories'

const allCategories = [
  'all',
  ...new Set(menu.map((item) => item.category)),
]

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)

  const filteredItems = (category) => {
    if(category === 'all'){
      setMenuItems(menu)
      return
    }
    const newItems = menu.filter((item)=> item.category === category)
    setMenuItems(newItems)
  }

  return (
    <>
      <main className="world">
        <section className="menu">
          <Title text="our menu" />
          <Categories
            categories={categories}
            filteredItems={filteredItems}
          />
          <Menu items={menuItems} />
        </section>
      </main>
    </>
  )
}
export default App
