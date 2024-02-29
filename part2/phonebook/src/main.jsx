
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const persons = [
  {
    id: 1,
    name: 'Courteney Cox',
    
  },
  {
    id: 2,
    name: 'Jennifer Aniston',
    
  },
  {
    id: 3,
    name: 'Lisa Kudrow',
    
  },
  {
    id: 4,
    name: 'Matthew Perry',
    
  },
  {
    id: 5,
    name: 'David Schwimmer',
    
  },
  {
    id: 6,
    name: 'Matt LeBlanc',
    
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App persons={persons} />
)
