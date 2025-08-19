import { Header } from './Header'

function App() {
  return (
    <>
      <Header />
      <div className="p-4 space-y-4">
        <h1 className="text-2xl mb-4 font-bold">Font Tests:</h1>
        
        {/* Test 1: Built-in Tailwind fonts */}
        <div className="border p-4">
          <h2 className="font-bold mb-2">Built-in Tailwind fonts (should work):</h2>
          <p className="font-sans">Sans: Hello World 123</p>
          <p className="font-serif">Serif: Hello World 123</p>
          <p className="font-mono">Mono: Hello World 123</p>
        </div>

        {/* Test 2: Custom font classes */}
        <div className="border p-4">
          <h2 className="font-bold mb-2">Custom font classes:</h2>
          <p className="font-vt323 text-xl">font-vt323: Hello World 123</p>
          <p className="font-vt text-xl">font-vt: Hello World 123</p>
          <p className="font-retro text-xl">font-retro: Hello World 123</p>
        </div>

        {/* Test 3: Direct styling (this should work) */}
        <div className="border p-4">
          <h2 className="font-bold mb-2">Direct styling (should work):</h2>
          <p style={{fontFamily: 'VT323, monospace'}} className="text-xl">
            Direct VT323: Hello World 123
          </p>
        </div>

        {/* Test 4: CSS custom property */}
        <div className="border p-4">
          <h2 className="font-bold mb-2">CSS custom property test:</h2>
          <p className="text-xl custom-font">
            Custom CSS: Hello World 123
          </p>
        </div>
      </div>
    </>
  )
}

export default App