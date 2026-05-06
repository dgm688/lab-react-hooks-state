import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  
  const [darkMode, setDarkMode] = useState(false)

  const [cart, setCart] = useState([])

  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#111" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px"
      }}
    >

      <h1>🛒 Shopping App</h1>

      <p>
        Welcome! Your task is to implement filtering,
        cart management, and dark mode.
      </p>

      <DarkModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <br />
      <br />

      <label>Filter by Category: </label>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        selectedCategory={selectedCategory}
        cart={cart}
        setCart={setCart}
      />

      <Cart cart={cart} />

    </div>
  )
}

export default App
