import Example from '../lib/Example'

function App() {
   return (
      <div className="container">
         <header className="flex w-full py-5 border-b">
            <h1>Test Header</h1>
         </header>
         <Example label="Example" url="https://example.com" />
      </div>
   )
}

export default App
