function App() {
  const ideas = [
    {nick: 'cool-idea-1', name:'Idea 1', description: 'Description of idea 1...'},
    {nick: 'cool-idea-2', name:'Idea 2', description: 'Description of idea 2...'},
    {nick: 'cool-idea-3', name:'Idea 3', description: 'Description of idea 3...'},
    {nick: 'cool-idea-4', name:'Idea 4', description: 'Description of idea 4...'},
    {nick: 'cool-idea-5', name:'Idea 5', description: 'Description of idea 5...'},
    {nick: 'cool-idea-6', name:'Idea 6', description: 'Description of idea 6...'},
  ];

  return (
    <div>
      <h1>Cool ideas</h1>
      {ideas.map((idea) => (
        <div key={idea.nick}>
          <h2>{idea.name}</h2>
          <p>{idea.description}</p>
        </div>
      ))}
    </div>
  )
}

export default App
