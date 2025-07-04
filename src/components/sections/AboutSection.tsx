export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            À propos de moi
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Développeur passionné
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Je suis un développeur web full-stack avec une passion pour créer des applications 
                web modernes et performantes. J'aime travailler avec les dernières technologies 
                et résoudre des problèmes complexes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mon expertise couvre le développement frontend avec React et Next.js, 
                ainsi que le développement backend avec Node.js et diverses bases de données.
              </p>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">
                Mes compétences
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>React / Next.js</span>
                  <span className="text-blue-600 font-semibold">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
                
                <div className="flex justify-between">
                  <span>TypeScript</span>
                  <span className="text-blue-600 font-semibold">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
                
                <div className="flex justify-between">
                  <span>Node.js</span>
                  <span className="text-blue-600 font-semibold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 