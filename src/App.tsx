import React from 'react'
import Example from './lib/Example'

function App() {
   return (
      <div className="container">
         <header className="py-5 border-b mb-5">
            <h1 className="mb-1">React NPM Starter</h1>
            <h2 className="text-base text-slate-500 font-normal">
               A starter project for rapidly publishing{' '}
               <a href="https://www.npmjs.com/">NPM packages</a> with React and
               Typescript.
            </h2>
         </header>
         <Example label="Example" url="https://example.com" />
      </div>
   )
}

export default App
