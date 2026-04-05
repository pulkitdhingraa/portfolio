import { useState } from 'react'

export default function App() {
  const [showPersonal, setShowPersonal] = useState(false)

  return (
    <div>
      <h1 className="text-4xl font-black p-16">Portfolio — scaffolding works</h1>
    </div>
  )
}
