
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const persons = [
  {
    id: 1,
    content: 'Courtney Cox',
    
  },
  {
    id: 2,
    content: 'Jennifer Aniston',
    
  },
  {
    id: 3,
    content: 'Lisa Kudrow',
    
  },
  {
    id: 4,
    content: 'Matthew Perry',
    
  },
  {
    id: 5,
    content: 'David Schwimmer',
    
  },
  {
    id: 6,
    content: 'Matt LeBlanc',
    
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App persons={persons} />
)
