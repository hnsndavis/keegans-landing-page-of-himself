import Head from 'next/head';

export default function KeeganLanding() {
  return (
    <>
      <Head>
        <title>Keegan Hansen-Davis - Business Builder & Community Founder</title>
        <meta name="description" content="Equipping teams and founders to unlock growth, improve operations, and build lasting value in service-driven businesses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="text-xl font-semibold text-gray-900">Keegan Hansen-Davis</div>
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">About</a>
                <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Experience</a>
                <a href="#looking-for" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Opportunities</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Business Builder &<br />
              <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">Community Founder</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Equipping teams and founders to unlock growth, improve operations, and build lasting value in service-driven businesses.
            </p>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
              Helping visionaries win in the real world - one system, one story at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:keeganhnsndavis@gmail.com" className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                Let's Work Together
              </a>
              <a href="#looking-for" className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Partnership Opportunities
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">About</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                With foundations in digital and operational strategy, I help founders and teams advance from uncertainty to clarity. My approach blends systems thinking and a knack for storytelling to create traction where others see complexity.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I'm passionate about making business growth practical and people-driven - especially within service organizations ready for their next chapter. Whether building small teams or architecting change, my focus is always on building what lasts.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founder of <a href="https://weblaunchlab.com/" className="text-blue-600 hover:text-blue-700 font-medium" target="_blank" rel="noopener noreferrer">WebLaunch Lab</a>. Currently exploring partnership and leadership opportunities with values-driven teams, holding companies, or founders serious about lasting impact.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Experience</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-gray-400 pl-8">
                <div className="text-gray-600 font-semibold text-lg mb-2">2023 – Present</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Founder, HNSN Digital</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Media holding company focused on building sustainable, service-driven businesses through strategic operations and community-centered growth.
                </p>
                <div className="ml-6 space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">WebLaunch Lab</h4>
                    <p className="text-gray-600">Productized service offering strategic web design and business development solutions for service-based organizations.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">NowGen Labs</h4>
                    <p className="text-gray-600">Community-driven platform connecting entrepreneurs and business builders through shared resources, insights, and collaborative growth opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I'm Looking For Section */}
        <section id="looking-for" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">What I'm Looking For</h2>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Actively seeking:</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Operational leadership or strategic partnership role</strong> within a holding company, service business, or founder-led portfolio.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Opportunities where I can strengthen systems, accelerate growth, and foster healthy team culture</strong> in service-oriented organizations.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Collaboration with mission-driven operators</strong> who value people, process, and long-term value creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact</h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-12">Let's Build Lasting Value, Together.</h3>
            
            <div className="mb-16">
              <a href="mailto:keeganhnsndavis@gmail.com" className="inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-lg">
                Email me
              </a>
              <p className="text-gray-600 mt-4">keeganhnsndavis@gmail.com</p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Newsletter / Community</h2>
            <p className="text-xl text-gray-700 mb-12">
              Want to go deeper? Get my latest thoughts and stories here:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Notes from Keegan</h3>
                <p className="text-gray-600 mb-4">Weekly stories, practical lessons, and real encouragement for dreamers who want to make something happen.</p>
                <a href="https://keeganhansendavis.substack.com/" className="inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200" target="_blank" rel="noopener noreferrer">
                  Subscribe (Free)
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Founder's Journal</h3>
                <p className="text-gray-600 mb-4">Deeper insights, strategic frameworks, and behind-the-scenes founder perspectives for serious business builders.</p>
                <a href="https://keeganhansendavis.substack.com/p/the-founders-journal" className="inline-flex items-center border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors" target="_blank" rel="noopener noreferrer">
                  Get Founder Insights
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-200 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="mb-6">
              <div className="text-xl font-semibold text-gray-900 mb-4">Keegan Hansen-Davis</div>
              <p className="text-gray-600">
                Business Builder & Community Founder
              </p>
            </div>
            <div className="flex justify-center space-x-8 mb-6">
              <a href="https://www.linkedin.com/in/keegan-hansen-davis/" className="text-gray-600 hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://keeganhansendavis.substack.com/" className="text-gray-600 hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                Newsletter
              </a>
              <a href="https://weblaunchlab.com/" className="text-gray-600 hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                WebLaunch Lab
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Keegan Hansen-Davis. Equipping teams and founders to build lasting value.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}