
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const persons = [
  {
    id: 1,
    name: 'Courteney Cox',
    phoneNumber:'212-4653326'
    
  },
  {
    id: 2,
    name: 'Jennifer Aniston',
    phoneNumber:'212-4659852'
    
  },
  {
    id: 3,
    name: 'Lisa Kudrow',
    phoneNumber:'212-4652226'
    
  },
  {
    id: 4,
    name: 'Matthew Perry',
    phoneNumber:'212-4743326'
    
  },
  {
    id: 5,
    name: 'David Schwimmer',
    phoneNumber:'212-4659826'
    
  },
  {
    id: 6,
    name: 'Matt LeBlanc',
    phoneNumber:'212-4653336'
    
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App persons={persons} />
)
