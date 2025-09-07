import { useState } from 'react';

const DepartmentSelector = () => {
  const [selectedDept, setSelectedDept] = useState(null);
  const [hoveredDept, setHoveredDept] = useState(null);

  const departments = {
    'AI/ML': {
      leaders: [
        { name: 'Dr. Sarah Chen', role: 'Research Lead', phone: '+1-555-0101', image: '/api/placeholder/80/80' },
        { name: 'Alex Rodriguez', role: 'ML Engineer', phone: '+1-555-0102', image: '/api/placeholder/80/80' }
      ],
      objective: 'Advancing AI/ML technologies to solve complex problems and shape the future of intelligent systems.',
      whatsapp: 'https://chat.whatsapp.com/aiml-group',
      icon: '🤖',
      gradient: 'from-orange-600 via-orange-500 to-orange-400'
    },
    'App Development': {
      leaders: [
        { name: 'Mike Johnson', role: 'Mobile Lead', phone: '+1-555-0201', image: '/api/placeholder/80/80' },
        { name: 'Priya Sharma', role: 'Full Stack Dev', phone: '+1-555-0202', image: '/api/placeholder/80/80' }
      ],
      objective: 'Creating innovative mobile and desktop applications that deliver exceptional user experiences.',
      whatsapp: 'https://chat.whatsapp.com/app-dev-group',
      icon: '📱',
      gradient: 'from-orange-600 via-orange-500 to-orange-400'
    },
    'Blockchain': {
      leaders: [
        { name: 'David Kim', role: 'Blockchain Architect', phone: '+1-555-0301', image: '/api/placeholder/80/80' },
        { name: 'Elena Volkov', role: 'Smart Contract Dev', phone: '+1-555-0302', image: '/api/placeholder/80/80' }
      ],
      objective: 'Developing secure blockchain solutions and decentralized applications for the future.',
      whatsapp: 'https://chat.whatsapp.com/blockchain-group',
      icon: '⛓️',
      gradient: 'from-orange-600 via-orange-500 to-orange-400'
    },
    'Competitive Programming': {
      leaders: [
        { name: 'Ryan Wu', role: 'Contest Coordinator', phone: '+1-555-0401', image: '/api/placeholder/80/80' },
        { name: 'Aisha Patel', role: 'Training Lead', phone: '+1-555-0402', image: '/api/placeholder/80/80' }
      ],
      objective: 'Enhancing algorithmic thinking and problem-solving skills through competitive programming.',
      whatsapp: 'https://chat.whatsapp.com/competitive-prog-group',
      icon: '🏆',
      gradient: 'from-orange-600 via-orange-500 to-orange-400'
    },
    'Design': {
      leaders: [
        { name: 'Luna Martinez', role: 'Creative Director', phone: '+1-555-0501', image: '/api/placeholder/80/80' },
        { name: 'James Park', role: 'UX/UI Designer', phone: '+1-555-0502', image: '/api/placeholder/80/80' }
      ],
      objective: 'Crafting beautiful, intuitive designs that bridge creativity and functionality.',
      whatsapp: 'https://chat.whatsapp.com/design-group',
      icon: '🎨',
      gradient: 'from-orange-600 via-orange-500 to-orange-400'
    },
    'Finance': {
      leaders: [
        { name: 'Robert Chen', role: 'Financial Advisor', phone: '+1-555-0601', image: '/api/placeholder/80/80' },
        { name: 'Maya Thompson', role: 'Budget Coordinator', phone: '+1-555-0602', image: '/api/placeholder/80/80' }
      ],
      objective: 'Managing financial resources and strategies to ensure sustainable growth and success.',
      whatsapp: 'https://chat.whatsapp.com/finance-group',
      icon: '💰',
      gradient: 'from-orange-600 via-orange-500 to-orange-400'
    },
    'Hardware': {
      leaders: [
        { name: 'Tom Anderson', role: 'Hardware Engineer', phone: '+1-555-0701', image: '/api/placeholder/80/80' },
        { name: 'Zara Ahmed', role: 'IoT Specialist', phone: '+1-555-0702', image: '/api/placeholder/80/80' }
      ],
      objective: 'Building cutting-edge hardware solutions and embedded systems for tomorrow\'s technology.',
      whatsapp: 'https://chat.whatsapp.com/hardware-group',
      icon: '⚡',
      gradient: 'from-orange-600 via-orange-500 to-orange-400'
    },
    'Operations': {
      leaders: [
        { name: 'Lisa Wang', role: 'Operations Manager', phone: '+1-555-0801', image: '/api/placeholder/80/80' },
        { name: 'Carlos Rivera', role: 'Project Coordinator', phone: '+1-555-0802', image: '/api/placeholder/80/80' }
      ],
      objective: 'Streamlining operations and ensuring seamless coordination across all departments.',
      whatsapp: 'https://chat.whatsapp.com/operations-group',
      icon: '⚙️',
      gradient: 'from-orange-600 via-orange-500 to-orange-400'
    },
    'Social Media': {
      leaders: [
        { name: 'Emma Taylor', role: 'Social Media Lead', phone: '+1-555-0901', image: '/api/placeholder/80/80' },
        { name: 'Noah Singh', role: 'Content Creator', phone: '+1-555-0902', image: '/api/placeholder/80/80' }
      ],
      objective: 'Building our digital presence and engaging with communities across social platforms.',
      whatsapp: 'https://chat.whatsapp.com/social-media-group',
      icon: '📢',
      gradient: 'from-orange-600 via-orange-500 to-orange-400'
    },
    'Web Development': {
      leaders: [
        { name: 'Kevin Liu', role: 'Frontend Lead', phone: '+1-555-1001', image: '/api/placeholder/80/80' },
        { name: 'Sophie Brown', role: 'Backend Developer', phone: '+1-555-1002', image: '/api/placeholder/80/80' }
      ],
      objective: 'Creating modern, scalable web applications with cutting-edge technologies.',
      whatsapp: 'https://chat.whatsapp.com/web-dev-group',
      icon: '🌐',
      gradient: 'from-orange-600 via-orange-500 to-orange-400'
    }
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: 'rgb(34 39 48)' }}>


      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 white">
            Choose Your Department
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Join a team of innovators and shape the future of technology together
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Department Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {Object.keys(departments).map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(selectedDept === dept ? null : dept)}
              onMouseEnter={() => setHoveredDept(dept)}
              onMouseLeave={() => setHoveredDept(null)}
              className={`group relative p-6 rounded-2xl border-2 transition-all duration-500 transform hover:scale-105 ${
                selectedDept === dept
                  ? 'border-orange-500 bg-gradient-to-br from-gray-800 to-gray-700 shadow-2xl shadow-orange-500/20'
                  : 'border-gray-700 bg-gradient-to-br from-gray-800/50 to-gray-700/50 hover:border-orange-400 backdrop-blur-sm'
              }`}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${departments[dept].gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {departments[dept].icon}
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-sm leading-tight group-hover:text-orange-300 transition-colors duration-300">
                    {dept}
                  </h3>
                  {(hoveredDept === dept || selectedDept === dept) && (
                    <div className="mt-2 text-xs text-gray-400 animate-fade-in">
                      Click to explore
                    </div>
                  )}
                </div>
              </div>

              {/* Selection indicator */}
              {selectedDept === dept && (
                <div className="absolute top-2 right-2 w-4 h-4 bg-orange-500 rounded-full animate-ping"></div>
              )}
            </button>
          ))}
        </div>

        {/* Department Details */}
        {selectedDept && (
          <div className="bg-gradient-to-br from-gray-800/90 to-gray-700/90 rounded-3xl p-8 border border-gray-600 backdrop-blur-sm shadow-2xl animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">{departments[selectedDept].icon}</div>
              <div>
                <h2 className="text-3xl font-bold mb-2 text-white">{selectedDept}</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
              </div>
            </div>

            <p className="text-gray-200 text-lg mb-8 leading-relaxed">
              {departments[selectedDept].objective}
            </p>

            {/* Team Leaders */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-orange-300">Team Leaders</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {departments[selectedDept].leaders.map((leader, idx) => (
                  <div key={idx} className="group bg-gradient-to-r from-gray-700/50 to-gray-600/50 p-4 rounded-xl border border-gray-600 hover:border-orange-400 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                    <div className="flex items-center">
                      <div className="relative">
                        <img 
                          src={leader.image} 
                          alt={leader.name} 
                          className="w-14 h-14 rounded-full mr-4 border-2 border-gray-500 group-hover:border-orange-400 transition-colors duration-300" 
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                          {leader.name}
                        </div>
                        <div className="text-orange-400 text-sm font-medium">{leader.role}</div>
                        <div className="text-gray-400 text-sm">{leader.phone}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="text-center">
              <a
                href={departments[selectedDept].whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 group"
              >
                <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Join WhatsApp Group
              </a>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default DepartmentSelector;