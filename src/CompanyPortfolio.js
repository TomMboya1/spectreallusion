import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaTwitter,FaHardHat,FaFacebook, FaTools, FaDraftingCompass , FaTruckLoading } from 'react-icons/fa';
import { motion ,AnimatePresence } from 'framer-motion';
import logo from './logo.png'
import tomImage from './assets/Tom.JPG';
import lenoxImage from './assets/lenox.jpg';
import ElwakImage from './assets/elwak.jpg';
import goodnewsImage from './assets/goodnews.jpg';
import greatwallImage from './assets/greatwall.jpg';
import HighwayImage from './assets/highway.jpg';
import MilimaniImage from './assets/milimani.jpg';
import MidadImage from './assets/midad.jpg';
import ReubenImage from './assets/Reuben.jpg';



const CompanyPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedService, setExpandedService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, title: 'Great Wall Gardens', category: 'Machakos', image: greatwallImage, additionalImages: [goodnewsImage,greatwallImage], size: '1471.5 sq M' },
    { id: 2, title: 'JJ',  category: 'Machakos', image: greatwallImage, additionalImages: [goodnewsImage,greatwallImage], size: '750 sq M' },
    { id: 3, title: 'The Highway Secondary', category: 'Nairobi', image: HighwayImage, additionalImages: [goodnewsImage,greatwallImage],size: '1404 sq M' },
    { id: 4, title: 'Milimani', category: 'Nairobi', image: MilimaniImage,additionalImages: [goodnewsImage,greatwallImage], size: '800 sq ft' },
    { id: 5, title: 'Good News ', category: 'Nairobi', image: goodnewsImage, additionalImages: [goodnewsImage,greatwallImage], size: '800 sq M' },
    { id: 6, title: 'Midad Academy', category: 'Nairobi', image: MidadImage, additionalImages: [goodnewsImage,greatwallImage], size: '196 sq M' },
    { id: 7, title: 'Elwak ', category: 'Mandera', image:ElwakImage, additionalImages: [goodnewsImage,greatwallImage], size: '800 sq M' },
    { id: 8, title: 'Goal Rush ', category: 'kilifi', image: greatwallImage, additionalImages: [goodnewsImage,greatwallImage], size: '448 sq M' },
    { id: 9, title: 'Ngara Sports Clab', category: 'Nairobi', image: greatwallImage, additionalImages: [goodnewsImage,greatwallImage], size: '1250 sq M' },
];

  const teamMembers = [
    { 
      id: 1, 
      name: 'REUBEN SIMUYA WAMBETE', 
      role: 'CEO', 
      image: ReubenImage, 
      linkedin: 'https://www.linkedin.com/in/reuben-simuya-7770a91b2', 
     twitter: 'https://x.com/RSimuya', 
      facebook: 'https://www.facebook.com/reuben.simuya',
      bio: 'Reuben is an experienced leader with a passion for innovation and sustainable development.'
    },
    { 
      id: 2, 
      name: 'Tom Mboya', 
      role: 'IT', 
      image: tomImage, 
      linkedin: 'https://www.linkedin.com/in/tom-mboya-9b376b179/', 
      twitter: 'https://x.com/TomMboy50688033', 
      facebook: 'https://www.facebook.com/profile.php?id=100015069394687',
      bio: 'Tom is a tech enthusiast with expertise in cutting-edge IT solutions and cybersecurity.'
    },
    { 
      id: 3, 
      name: 'LENOX ETENYI', 
      role: 'MARKETING', 
      image: lenoxImage, 
      /* linkedin: '#',*/
      twitter: 'https://x.com/omondilenox46?t=t8XmsPb-hMwhFOImjH4iCA&s=09', 
      facebook: 'https://www.facebook.com/lenox.etenyi?mibextid=ZbWKwL',
      bio: 'Lenox is a creative marketing strategist with a knack for digital campaigns and brand development.'
    },
  ];

  const services = [
    { 
      id: 1, 
      title: 'Construction', 
      description: 'We make your pitch investment  a quality construction biuld', 
      icon: <FaHardHat />, 
      details: 'your investment  construction  is our responsibility to give  it longivity and quality standardization ',
      items: [
        'football pitchs ',
        'swiming pool ',
       
      ]
    },
    { 
      id: 2, 
      title: 'Mantainance ', 
      description: 'we keep your investment up to date ', 
      icon: <FaTools />, 
      details: 'We  make sure all your  investments are safe and in good shape to put a smile on your face ',
      items: [
        'football pitch ',
        'sweeming pool',

        
      ]
    },
    { 
      id: 3, 
      title: 'Pitch Design', 
      description: 'we give intutive and appealing  design to all clients  ', 
      icon: <FaDraftingCompass />, 
      details: 'Our design team creates user-centric interfaces that are not only aesthetically pleasing but also enhance user engagement and satisfaction.',
      items: [
        'football pitch',
        'homes ',
        'fields',
        'SwimmingPool',
        
        
       
      ]

    },
    
    { 
      id: 4, 
      title: 'supply ', 
      description: 'You ask we answer ', 
      icon: <FaTruckLoading />, 
      details: 'We deliver all your oders to your convinience ',
      items: [
        'turf ',
        'ruber',
        'sand',
        'Cement',
        'blocks',
        'steel',
        'etc'
      ]
    },
  ];

  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(project => project.category === activeCategory);
  const handleServiceClick = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="font-sans bg-gray-10 min-h-screen">
      {/* Header */}
      <header className="bg-green shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
          <img src={logo} alt="Spectre allusion Green" className="h-20" /> 
            <div className="space-x-4">
              <a href="#home" className="text-gray-900 hover:text-gray-800 transition duration-300">Home</a>
              <a href="#services" className="text-gray-900 hover:text-gray-800 transition duration-300">Services</a>
              <a href="#projects" className="text-gray-900 hover:text-gray-800 transition duration-300">Projects</a>
              <a href="#team" className="text-gray-900 hover:text-gray-800 transition duration-300">Team</a>
              <a href="#contact" className="text-gray-900 hover:text-gray-800 transition duration-300">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-green-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">WELCOME TO SPECTRE ALLUSION GREEN</h1>
          <p className="text-xl mb-8">We Bring lngivity to your investment</p>
          <a href="#projects" className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">View Our Work</a>
        </div>
      </section>

      {/* Services Section */}
      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="bg-gray-10 rounded-lg shadow-md p-6 text-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedService(service)}
              >
                <div className="text-4xl mb-4 text-green-500 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white p-8 rounded-lg max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">{selectedService.title}</h3>
              <p className="text-gray-600 mb-4">{selectedService.details}</p>
              <ul className="list-disc pl-5 mb-4">
                {selectedService.items.map((item, index) => (
                  <li key={index} className="text-gray-600 mb-2">{item}</li>
                ))}
              </ul>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => setSelectedService(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
          <div className="flex justify-center mb-8 space-x-4">
            {['All', 'Nairobi', 'kilifi', 'Mandera','Machakos'].map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full transition duration-300 ${activeCategory === category ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-green rounded-lg shadow-md overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white p-8 rounded-lg max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-4">Category: {selectedProject.category}</p>
              <p className="text-gray-600 mb-4">Size: {selectedProject.size}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 object-cover rounded-lg" />
                {selectedProject.additionalImages.map((img, index) => (
                  <img key={index} src={img} alt={`${selectedProject.title} ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
                ))}
              </div>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Team Section */}
      <section id="team" className="bg-green-70 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedTeamMember(member)}
              >
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedTeamMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedTeamMember(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white p-8 rounded-lg max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedTeamMember.image} alt={selectedTeamMember.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-2xl font-bold mb-2 text-center">{selectedTeamMember.name}</h3>
              <p className="text-gray-600 mb-4 text-center">{selectedTeamMember.role}</p>
              <p className="text-gray-700 mb-4">{selectedTeamMember.bio}</p>
              <div className="flex justify-center space-x-4">
                <a href={selectedTeamMember.linkedin} className="text-blue-500 hover:text-blue-600 transition duration-300" aria-label={`LinkedIn profile of ${selectedTeamMember.name}`}><FaLinkedin size={24} /></a>
                <a href={selectedTeamMember.twitter} className="text-blue-400 hover:text-blue-500 transition duration-300" aria-label={`Twitter profile of ${selectedTeamMember.name}`}><FaTwitter size={24} /></a>
                <a href={selectedTeamMember.facebook} className="text-blue-600 hover:text-blue-700 transition duration-300" aria-label={`Facebook profile of ${selectedTeamMember.name}`}><FaFacebook size={24} /></a>
              </div>
              <button
                className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
                onClick={() => setSelectedTeamMember(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <form
                action="https://formspree.io/f/myzgajqb" // Replace with your Formspree form ID
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block mb-1">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">Message</label>
                  <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">Send Message</button>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Location</h3>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.29945269512703!2d36.784558413388126!3d-1.3000855634898283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11d16adfb807%3A0x8b972e9f87f1b221!2sKISM%20Towers%2CWorkabroadEA!5e0!3m2!1sen!2ske!4v1726244289218!5m2!1sen!2ske"
                  className="w-full h-full border-20"
                  allowFullScreen=""
                  loading="lazy"
                  title="Company Location"
                ></iframe>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-gray-600 mr-2" />
                  <span className="text-gray-600">Ngong road Nairobi</span>
                </div>
                <div className="flex items-center mb-4">
                  <FaPhone className="text-gray-600 mr-2" />
                  <span className="text-gray-600">(+254) 113-863078</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-gray-600 mr-2" />
                  <span className="text-gray-600">info@spectreallusiongreen.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-4">
        
        <div className="container mx-auto px-6 text-center">
          
          <p className="text-sm">&copy; {new Date().getFullYear()} Spectre allusion green. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CompanyPortfolio;
