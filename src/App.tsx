import './App.css'
import TypewriterText from './textWriter.tsx'
import Github from './assets/github.svg'
import LinkedIn from './assets/linkedin.svg'

function App() {
  return (
    <div className="min-h-full">

      {/* About Me Section */}
      <section id='aboutme' className='pt-20 pb-12 md:pt-32 md:pb-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-text-primary mb-6'>
              Peter Le
            </h1>
            <p className='text-lg text-text-secondary mb-2 max-w-2xl mx-auto'>
            Recent graduate from the University of Western Australia with a focus on innovative solutions and practical applications.
            </p>
            <h1 className='text-lg text-text-primary'><TypewriterText/></h1>
            
            <div className='flex justify-center'>
              <a
                href='https://github.com/petaa1'
                target="_blank"
                className='text-lg font-medium text-blue-600 hover:text-blue-500'
              >
                <img src={Github} className="logo"/> GitHub
              </a>
              <a href='https://linkedin.com/in/peterle0203' 
              target="_blank"
              className='text-lg font-medium text-blue-600 hover:text-blue-500 ml-4'
              >
                <img src={LinkedIn} className="logo"/> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className='pt-20 pb-12 md:pt-32 md:pb-24'>
        
      </section>
    </div>
  )
}

export default App