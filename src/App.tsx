import React from 'react';
import { Check, Brain, Ruler, Award, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/bolt.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Main Content */}
        <main className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10">
            <div className="text-center space-y-6 mb-16">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
                The Future of Measurement is Almost Here...
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-300">
                ...And It's Bigger Than You Think.
              </h2>
            </div>

            {/* Centered Image */}
            <div className="flex justify-center mb-16">
              <img 
                src="/measure.png" 
                alt="Measurement" 
                className="max-w-md w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="mb-16 text-xl text-gray-300 max-w-2xl mx-auto text-center">
              <p className="mb-4">
                We spent months developing cutting-edge AI technology to solve one of the world's least important problems...
              </p>
              <p>
                And now, for a limited time, YOU can help us make history by participating in our beta test.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold">100% AI-powered measurements</h3>
                </div>
                <p className="text-gray-300">Because rulers are so last century</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Ruler className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-semibold">Scientific accuracy</h3>
                </div>
                <p className="text-gray-300">Within a margin of error (or personal disappointment)</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold">Certified by the Totally Real Science Institute™</h3>
                </div>
                <p className="text-gray-300">Trust us, we're professionals</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Check className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold">Shareable certificate</h3>
                </div>
                <p className="text-gray-300">For maximum clout</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd7vlGdUBOEUd-ysVYfxihvyUV_G72af6FpaanSNX6R4QKDYw/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all transform hover:scale-105 animate-pulse"
              >
                Join the Beta – Give Your Junk to Science
                <ArrowRight className="w-6 h-6" />
              </a>

              <div className="mt-4">
                <a
                  href="https://measuremasterbeta.sixtyoneeighty.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white font-semibold py-2 px-4 rounded-full text-lg transition-all"
                >
                  Already have access?
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Footer */}
              <footer className="mt-16 text-sm text-gray-400">
                <p>Junk must be yours. No third-party junk permitted. Terms & Conditions apply.</p>
              </footer>
            </div>
          </div>
        </main>

        {/* Logo in bottom right */}
        <div className="fixed bottom-8 right-8 z-20">
          <a href="https://www.sixtyoneeightyai.com" target="_blank" rel="noopener noreferrer">
            <img 
              src="/sixtyoneeighty.jpeg" 
              alt="SixtyOneEighty" 
              className="w-48 h-auto rounded-lg shadow-lg hover:opacity-90 transition-opacity"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;