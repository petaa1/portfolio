import './App.css'
import TypewriterText from './textWriter.tsx'

function App() {
  return (
    <div className="min-h-full bg-white">
      <section id='aboutme' className='pt-20 pb-12 md:pt-32 md:pb-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              Testing
            </h1>
            <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
              This is a test.
            </p>
            <TypewriterText />
            <div className='flex justify-center'>
              <a
                href='https://github.com/petaa1'
                target="_blank"
                className='text-lg font-medium text-blue-600 hover:text-blue-500'
              >
                GitHub
              </a>
              <a href='https://linkedin.com/in/peterle0203' 
              target="_blank"
              className='text-lg font-medium text-blue-600 hover:text-blue-500 ml-4'
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App