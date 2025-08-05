import Head from 'next/head';

export default function KeeganLanding() {
  return (
    <>
      <Head>
        <title>Keegan Hansen-Davis - Business Builder & Entrepreneur</title>
        <meta name="description" content="Entrepreneur, business operations specialist, and creator helping others build meaningful businesses and navigate the entrepreneurial journey." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-xl font-bold text-white">Keegan Hansen-Davis</div>
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
                <a href="#journey" className="text-white/80 hover:text-white transition-colors">Journey</a>
                <a href="#work" className="text-white/80 hover:text-white transition-colors">Work</a>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Building Business,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  One Story at a Time
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
                Entrepreneur, operations specialist, and storyteller helping others navigate 
                the messy middle of building meaningful businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Let's Connect
                </a>
                <a href="#journey" className="border border-white/30 hover:border-white/50 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  My Story
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">More Than Just a Designer</h2>
                <p className="text-white/80 text-lg mb-6">
                  While I've built a career in web design and UI/UX, my true passion lies in understanding 
                  how businesses work—from operations and sales to strategy and growth.
                </p>
                <p className="text-white/80 text-lg mb-6">
                  After navigating corporate life at Intuit, startup culture at Gather, and multiple 
                  entrepreneurial ventures, I've developed a unique perspective on what it takes to 
                  build sustainable businesses.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">5+</div>
                    <div className="text-white/80">Business Ventures</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-400">3</div>
                    <div className="text-white/80">Industries</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">Current Focus</h3>
                  <p className="text-white/80">
                    Senior Web Designer at Gather (funeral home SaaS), building Web Launch Lab, 
                    and documenting the entrepreneurial journey through my newsletter.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">Core Strengths</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Business operations & process optimization</li>
                    <li>• Product development & user experience</li>
                    <li>• Sales & customer relationship management</li>
                    <li>• Content creation & community building</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section id="journey" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">The Entrepreneurial Journey</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                From corporate stability to startup uncertainty, here's how I've learned that 
                the messy middle is where real growth happens.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="text-blue-400 font-bold text-lg">2020-2021</div>
                  <h3 className="text-2xl font-bold text-white mb-3">The Corporate Foundation</h3>
                </div>
                <div className="md:w-2/3 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <p className="text-white/80">
                    Started at Intuit in a street-to-seat position, serving SMBs daily. Discovered my 
                    natural ability with software and tech while the entrepreneurial bug began to stir. 
                    Simultaneously explored screen printing and streetwear—learning the hard way that 
                    ideas without execution remain just ideas.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="text-emerald-400 font-bold text-lg">2022-2023</div>
                  <h3 className="text-2xl font-bold text-white mb-3">The Learning Leap</h3>
                </div>
                <div className="md:w-2/3 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <p className="text-white/80">
                    Enrolled in Bethel School of Technology's UI/UX bootcamp while working full-time. 
                    Found the intersection of passion and natural ability in design thinking. Graduated 
                    as one of the top students, then made the bold decision to quit corporate life and 
                    build a web design agency.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="text-purple-400 font-bold text-lg">2023-2024</div>
                  <h3 className="text-2xl font-bold text-white mb-3">The Reality Check</h3>
                </div>
                <div className="md:w-2/3 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <p className="text-white/80">
                    Left my job with no safety net, a pregnant wife, and big dreams. Learned that 
                    perfectionism kills momentum. Attempted multiple ventures—web design agency, 
                    cleaning business—while discovering that execution beats ideation every time. 
                    Worked at Starbucks at 4 AM while job hunting in the evenings.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="text-yellow-400 font-bold text-lg">2024-Present</div>
                  <h3 className="text-2xl font-bold text-white mb-3">The Integration</h3>
                </div>
                <div className="md:w-2/3 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <p className="text-white/80">
                    Landed at Gather as Senior Web Designer, finally combining technical skills with 
                    business understanding. Launched Web Launch Lab and "Notes from Keegan" newsletter. 
                    Now focused on helping others navigate their entrepreneurial journey while building 
                    multiple income streams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Recent Work & Projects</h2>
              <p className="text-xl text-white/80">
                A selection of businesses and projects that showcase different aspects of my skill set.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">Web Launch Lab</h3>
                <p className="text-white/80 mb-4">
                  Weekly free website giveaway program combining web design expertise with 
                  community building and content creation.
                </p>
                <div className="text-blue-400 font-semibold">Entrepreneurship • Community</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">Gather (Current Role)</h3>
                <p className="text-white/80 mb-4">
                  Senior Web Designer at SaaS startup serving funeral homes. Responsible for 
                  WordPress development, user experience, and client website management.
                </p>
                <div className="text-emerald-400 font-semibold">SaaS • B2B • Design</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">Idaho Cleaning Pros</h3>
                <p className="text-white/80 mb-4">
                  Complete website design and development for service-based business, 
                  including booking system integration and local SEO optimization.
                </p>
                <div className="text-purple-400 font-semibold">Local Business • Operations</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">Notes from Keegan</h3>
                <p className="text-white/80 mb-4">
                  Newsletter documenting the entrepreneurial journey, sharing lessons learned, 
                  and building community around business building.
                </p>
                <div className="text-yellow-400 font-semibold">Content • Community • Growth</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">Artistry Inc</h3>
                <p className="text-white/80 mb-4">
                  Brand and website development for creative services business, 
                  focusing on visual storytelling and client experience.
                </p>
                <div className="text-pink-400 font-semibold">Branding • Creative</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">Business Operations</h3>
                <p className="text-white/80 mb-4">
                  Multiple ventures in different industries teaching lessons about sales, 
                  operations, customer service, and business development.
                </p>
                <div className="text-orange-400 font-semibold">Operations • Strategy</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Let's Build Something Together</h2>
            <p className="text-xl text-white/80 mb-8">
              Whether you're looking for business operations expertise, design thinking, 
              or someone who understands the entrepreneurial journey—let's connect.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href="mailto:keegan@example.com" className="text-blue-400 hover:text-blue-300">
                  keegan@hansendavis.com
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/keegan-hansen-davis/" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                  Connect with me
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Newsletter</h3>
                <a href="https://keegan.substack.com" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                  Notes from Keegan
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-emerald-600/20 backdrop-blur-sm p-8 rounded-lg border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">What I'm Looking For</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-white mb-2">Business Operations Roles</h4>
                  <p className="text-white/80 text-sm">Operations manager, business development, strategic partnerships, growth operations</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Sales & Customer Success</h4>
                  <p className="text-white/80 text-sm">Account executive, customer success manager, business consultant roles</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Content & Community</h4>
                  <p className="text-white/80 text-sm">Content marketing, community management, brand partnerships in the creator economy</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Entrepreneurial Opportunities</h4>
                  <p className="text-white/80 text-sm">Entrepreneur in residence, startup programs, product management at early-stage companies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-white/60">
              © 2024 Keegan Hansen-Davis. Building businesses, one story at a time.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}