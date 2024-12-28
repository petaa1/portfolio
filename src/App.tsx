import './App.css'
import TypewriterText from './textWriter.tsx'
import Github from './assets/github.svg'
import LinkedIn from './assets/linkedin.svg'

function App() {
  const skills = {
    Languages: ['Python', 'Java', 'C', 'HTML', 'CSS', 'TypeScript', 'JavaScript'],
    Frameworks: ['React', 'NextJS', 'Django'],
    AI_and_Machine_Learning: ['Transformers', 'Large Language Models', 'Natural Language Processing', 'ML Algorithms'],
    Data_and_Knowledge: ['PostgreSQL', 'Neo4J', 'Knowledge Graphs', 'RDF/SPARQL']
  };

  return (
    <div className="min-h-full">

      {/* About Me Section */}
      <section id='aboutme' className='pt-20 pb-12 md:pt-32 md:pb-24 min-h-screen'>
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
              >
                <img src={Github} className="logo"/> 
              </a>
              <a href='https://linkedin.com/in/peterle0203' 
              target="_blank"
              >
                <img src={LinkedIn} className="logo"/> 
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className='pt-20 pb-12 md:pt-32 md:pb-24'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">Skills</h2>

          <div className='space-y-12'>
            {Object.entries(skills).map(([category, skillList]) => ( 
              <div key={category}>
                <h3 className='text-xl font-semibold mb-6 text-text-secondary capitailize'>
                  {category.split('_').join(' ')}
                </h3>
                <div className='text-center'>
                  {skillList.map((skill, index) => (
                    <span key={index}
                    className='px-4 py-2 bg-surface text-text-primary rounded-full mx-2'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">Projects</h2>
          <div className="text-center text-text-tertiary">
            Coming soon...
          </div>
        </div>
      </section>
    </div>
  )
}

export default App