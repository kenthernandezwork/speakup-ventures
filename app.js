import React from 'react';

function App() {
  return (
    <div className="font-sans bg-gray-50">
      {/* Navigation */}
      <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">SpeakUp Ventures</h1>
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:text-blue-200">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-blue-200">How It Works</a></li>
            <li><a href="#contact" className="hover:text-blue-200">Contact us</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Get Guidance from Top University Mentors</h2>
          <p className="text-lg mb-6">Connect with experts who can help you navigate the college admission process.</p>
          <a href="#signup" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Expert Mentors</h4>
              <p className="text-gray-700">Get advice from experienced mentors who are alumni of top universities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Personalized Guidance</h4>
              <p className="text-gray-700">Receive tailored guidance based on your unique strengths and aspirations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Flexible Scheduling</h4>
              <p className="text-gray-700">Choose time slots that fit your schedule for one-on-one sessions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">How It Works</h3>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="flex-1 mb-6 md:mb-0">
              <h4 className="text-2xl font-semibold mb-4">Step 1: Sign Up</h4>
              <p className="text-gray-700">Create an account to start your journey to success.</p>
            </div>
            <div className="flex-1 mb-6 md:mb-0">
              <h4 className="text-2xl font-semibold mb-4">Step 2: Select a Mentor</h4>
              <p className="text-gray-700">Browse through our list of mentors and find the right one for you.</p>
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-semibold mb-4">Step 3: Start Learning</h4>
              <p className="text-gray-700">Schedule your first session and begin the college admission journey!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact us" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
          <p className="text-lg text-gray-700 mb-6">Have any questions or want to learn more? Feel free to reach out!</p>
          <a href="mailto:contact@mentorconnect.com" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">Contact Us</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2024 SpeakUp Ventures. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

//Key Points:
//Navigation Bar: Links to "Features", "How it Works", and "Contact".
//Hero Section: Prominent message about the platform’s purpose with a CTA button to get started.
//Features Section: Highlights the key benefits such as expert mentors, personalized guidance, and flexible scheduling.
//How It Works Section: Steps explaining how users can sign up, choose a mentor, and start learning.
//Footer: Contains basic copyright information.

export default App;
