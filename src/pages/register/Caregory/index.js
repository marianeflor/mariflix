import React, { useState }from "react"
import { Link } from "react-router-dom"
import PageDefault from "../../../components/PageDefault"
import FormField from "../../../components/FormField"

const CategoryRegistration = () => {

  const initialValues = {
    name: '',
    description: '',
    color: ''
  }

  const [categoryValues, setCategoryValues] = useState(initialValues)
  const [categories, setCategories] = useState([])

  const handleChange = (e) => {
    const key = e.target.getAttribute('name')
    const value = e.target.value

    setCategoryValues({
      ...categoryValues,
      [key]: value // name: 'valor'
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setCategories([
      ...categories,
      categoryValues
    ])

    setCategoryValues(initialValues)
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {categoryValues.name}</h1>

      <form onSubmit={handleSubmit}>

        <FormField 
          tag='input'
          label="Nome da Categoria" 
          type="text" 
          name="name" 
          value={categoryValues.name} 
          onChange={handleChange}
        />

        <FormField 
          tag='textarea'
          label="Descrição" 
          type="text" 
          name="description" 
          value={categoryValues.description} 
          onChange={handleChange}
        />

        <FormField 
          tag='input'
          label="Cor" 
          type="color" 
          name="color" 
          value={categoryValues.color} 
          onChange={handleChange}
        />

        <button>Cadastrar</button>
      </form>

      <ul>
        {categories.map((category, i) => (
          <li key={i}>
              {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  )
}

export default CategoryRegistration
