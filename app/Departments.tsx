import { useState } from 'react';

// 1. Define the valid department IDs as a union type
type DepartmentId =
  | 'aiml'
  | 'app-dev'
  | 'blockchain'
  | 'competitive'
  | 'design'
  | 'finance'
  | 'hardware'
  | 'operations'
  | 'social-media'
  | 'web-dev';

const DepartmentSelector = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<DepartmentId | ''>('');

  const departments: { id: DepartmentId; name: string; variant: string }[] = [
    { id: 'aiml', name: 'AI/ML', variant: 'variant-sky' },
    { id: 'app-dev', name: 'App Development', variant: 'variant-mint' },
    { id: 'blockchain', name: 'Blockchain', variant: 'variant-coral' },
    { id: 'competitive', name: 'Competitive Programming', variant: 'variant-sky' },
    { id: 'design', name: 'Design', variant: 'variant-mint' },
    { id: 'finance', name: 'Finance', variant: 'variant-coral' },
    { id: 'hardware', name: 'Hardware', variant: 'variant-sky' },
    { id: 'operations', name: 'Operations', variant: 'variant-mint' },
    { id: 'social-media', name: 'Social Media', variant: 'variant-coral' },
    { id: 'web-dev', name: 'Web Development', variant: 'variant-sky' },
  ];
  
  // 3. Define department details with matching keys
  const departmentDetails: Record<
    DepartmentId,
    {
      leads: { name: string; phone: string }[];
      about: string;
      message: string;
    }
  > = {
    aiml: {
      leads: [
        { name: "Soumya Goel", phone: "+91 9205843760" },
        { name: "Harleen", phone: "+91 74629 00157" }
      ],
      about: "AI/ML isn’t just about code; it’s about teaching machines to think, learn, and make decisions like humans. It’s a playground for curious minds who love problem-solving and want to shape the future.",
      message: "Join us, and let’s dive deep into the world of artificial intelligence together—where your ideas can become smart systems that change the way we live and work!"
    },
    "app-dev": {
      leads: [{ name: "Akshat Srivatsava", phone: "N/A" }],
      about: "Building apps is like creating your own little universe. Every tap, swipe, and interaction is a chance to make someone’s day better or solve a real-world problem.",
      message: "Come build mobile apps with us, and turn your imagination into something people can actually use and love every single day!"
    },
    blockchain: {
      leads: [{ name: "Gokulakrishnan", phone: "+91 83007 79239" }],
      about: "Blockchain is more than code—it’s a revolution. It’s about decentralization, trust, and creating systems where people can interact without middlemen. It’s the future being built today.",
      message: "Step into the world of Web3 with us, and help design the technologies that will redefine finance, security, and how we connect online!"
    },
    competitive: {
      leads: [
        { name: "Arvin Samuel A.", phone: "+91 98403 21513" },
        { name: "Jesta S. A.", phone: "+91 63666 61315" }
      ],
      about: "Competitive programming is an adventure for the mind. Each problem is a puzzle, each solution a triumph. It sharpens not just your coding, but your thinking and creativity under pressure.",
      message: "Join our community, challenge yourself with real problems, and discover the thrill of solving what once seemed impossible!"
    },
    design: {
      leads: [
        { name: "Varshini S.", phone: "+91 84381 03806" },
        { name: "Twinkle Ghodki", phone: "+91 62617 43713" }
      ],
      about: "Design is storytelling without words. It’s about crafting experiences that feel effortless and beautiful, where users don’t just use your creation—they enjoy it, remember it, and fall in love with it.",
      message: "Come join us, unleash your creativity, and turn ideas into designs that make people smile and connect with technology in meaningful ways!"
    },
    finance: {
      leads: [
        { name: "Disha Anand", phone: "+91 63695 11362" },
        { name: "Swayam Kapoor", phone: "+91 80823 43992" },
        { name: "Puneeth Reddy T.", phone: "+91 90805 25368" }
      ],
      about: "Finance is the heartbeat of any project. It’s about understanding resources, planning wisely, and turning numbers into strategies that make big ideas possible.",
      message: "Step in with us, and learn how to navigate the world of business, money, and strategy—so your tech ideas don’t just exist, they thrive!"
    },
    hardware: {
      leads: [
        { name: "Jyotishman Das", phone: "+91 76380 35816" },
        { name: "Adithyan P.", phone: "+91 85907 61687" }
      ],
      about: "Hardware is where ideas meet the real world. Circuits, sensors, and gadgets come together to create something you can touch, feel, and interact with—it’s pure magic in action.",
      message: "Join us, experiment fearlessly, and turn your curiosity into devices and inventions that actually work and impress!"
    },
    operations: {
      leads: [
        { name: "Saanvi Singh", phone: "+91 91038 38250" },
        { name: "Dhyan", phone: "+1-555-0707" }
      ],
      about: "Operations is the invisible glue that holds everything together. Without it, even the best ideas can get lost. It’s about planning, organizing, and making sure every project succeeds.",
      message: "Be part of our team, and help turn ambitious ideas into reality by making sure everything runs like clockwork—your impact will be felt everywhere!"
    },
    "social-media": {
      leads: [
        { name: "Rythwin", phone: "+91 88077 68327" },
        { name: "Tanushree", phone: "+91 74569 29752" }
      ],
      about: "Social Media is the voice of our community. It’s where stories are told, excitement spreads, and people connect with ideas in ways that inspire and engage.",
      message: "Join us, create content that resonates, and help us build a community where every post, tweet, or story makes a difference!"
    },
    "web-dev": {
      leads: [
        { name: "Harish G.", phone: "+91 93455 03772" },
        { name: "Divik Dhiman", phone: "+91 81683 38829" }
      ],
      about: "Web development is the craft of creating the digital world. It’s where design meets logic, and where interactive experiences come alive for millions of users.",
      message: "Step in with us, build websites that aren’t just functional but memorable, and bring your ideas to life on the web, just like this one!!!"
    },
  };


  return (
    <>
      <style jsx>{`
        .lgc-radio-wrapper {
          margin: 0;
          padding: 2rem;
          font-family: system-ui, -apple-system, sans-serif;
          background: #0f1419;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          justify-content: center;
          min-height: 100%;
        }
        .radio-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .liquid-radio {
          --primary-hue: 280;
          --secondary-hue: 320;
          --tertiary-hue: 200;
          --saturation: 60%;
          --lightness: 25%;
          --border-radius: 2em;
          --transition-duration: 0.4s;
          --scale-factor: 1;
          position: relative;
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          font-size: 1rem;
          user-select: none;
          transition: all var(--transition-duration) cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        .liquid-radio:hover {
          --scale-factor: 1.03;
          transform: scale(var(--scale-factor)) translateZ(5px);
        }
        .liquid-radio input[type="radio"] {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }
        .liquid-radio .radio-visual {
          position: relative;
          width: 1.5em;
          height: 1.5em;
          margin-right: 0.75em;
          border-radius: var(--border-radius);
          background: linear-gradient(
            135deg,
            hsl(var(--primary-hue), var(--saturation), var(--lightness)),
            hsl(var(--secondary-hue), var(--saturation), var(--lightness)),
            hsl(var(--tertiary-hue), var(--saturation), var(--lightness))
          );
          border: 0.125em solid hsla(var(--primary-hue), var(--saturation), calc(var(--lightness) + 15%), 0.6);
          transition: all var(--transition-duration) cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow:
            0 0.25em 0.5em hsla(var(--primary-hue), var(--saturation), calc(var(--lightness) - 15%), 0.3),
            0 0.125em 0.25em hsla(var(--primary-hue), var(--saturation), calc(var(--lightness) - 10%), 0.4),
            0 0.0625em 0.125em hsla(0, 0%, 0%, 0.4),
            inset 0 0.125em 0.25em hsla(0, 0%, 100%, 0.2),
            inset 0 -0.0625em 0.125em hsla(var(--primary-hue), var(--saturation), calc(var(--lightness) - 10%), 0.5);
          transform-style: preserve-3d;
        }
        .liquid-radio .radio-visual::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0.5em;
          height: 0.5em;
          border-radius: 50%;
          background: radial-gradient(
            circle at 30% 30%,
            hsl(var(--primary-hue), calc(var(--saturation) + 25%), calc(var(--lightness) + 35%)),
            hsl(var(--secondary-hue), calc(var(--saturation) + 20%), calc(var(--lightness) + 25%)),
            hsl(var(--primary-hue), calc(var(--saturation) + 15%), calc(var(--lightness) + 15%))
          );
          transform: translate(-50%, -50%) scale(0) translateZ(2px);
          transition: all var(--transition-duration) cubic-bezier(0.68, -0.25, 0.265, 1.25);
          opacity: 0;
          box-shadow:
            0 0.0625em 0.125em hsla(var(--primary-hue), var(--saturation), calc(var(--lightness) + 20%), 0.6),
            inset 0 0.0312em 0.0625em hsla(0, 0%, 100%, 0.4);
        }
        .liquid-radio .radio-visual::after {
          content: "";
          position: absolute;
          top: -0.1875em;
          left: -0.1875em;
          right: -0.1875em;
          bottom: -0.1875em;
          border-radius: calc(var(--border-radius) + 0.0625em);
          background: radial-gradient(
            ellipse at top left,
            hsla(var(--primary-hue), var(--saturation), calc(var(--lightness) + 20%), 0.4),
            hsla(var(--secondary-hue), var(--saturation), calc(var(--lightness) + 15%), 0.3),
            hsla(var(--tertiary-hue), var(--saturation), calc(var(--lightness) + 10%), 0.2)
          );
          opacity: 0;
          transition: all var(--transition-duration) cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: -1;
          filter: blur(0.125em);
        }
        .liquid-radio:hover .radio-visual {
          --saturation: 70%;
          --lightness: 30%;
          transform: translateY(-0.125em) rotateX(5deg) translateZ(3px);
          box-shadow:
            0 0.5em 1em hsla(var(--primary-hue), var(--saturation), calc(var(--lightness) - 15%), 0.4),
            0 0.25em 0.5em hsla(var(--primary-hue), var(--saturation), calc(var(--lightness) - 10%), 0.5),
            0 0.125em 0.25em hsla(0, 0%, 0%, 0.5),
            inset 0 0.1875em 0.375em hsla(0, 0%, 100%, 0.3),
            inset 0 -0.0625em 0.125em hsla(var(--primary-hue), var(--saturation), calc(var(--lightness) - 10%), 0.6);
        }
        .liquid-radio:hover .radio-visual::after {
          opacity: 1;
          transform: translateZ(-1px) scale(1.1);
        }
        .liquid-radio input[type="radio"]:focus + .radio-visual {
          outline: 0.125em solid hsl(var(--primary-hue), var(--saturation), calc(var(--lightness) + 20%));
          outline-offset: 0.125em;
        }
        .liquid-radio input[type="radio"]:checked + .radio-visual {
          --saturation: 80%;
          --lightness: 40%;
          background: radial-gradient(
            ellipse at top left,
            hsl(var(--primary-hue), var(--saturation), calc(var(--lightness) + 10%)),
            hsl(var(--secondary-hue), var(--saturation), var(--lightness)),
            hsl(var(--tertiary-hue), var(--saturation), calc(var(--lightness) - 10%))
          );
          border-color: hsl(var(--primary-hue), calc(var(--saturation) + 10%), calc(var(--lightness) + 20%));
          box-shadow:
            0 0.375em 0.75em hsla(var(--primary-hue), var(--saturation), calc(var(--lightness) - 15%), 0.5),
            0 0.1875em 0.375em hsla(var(--primary-hue), var(--saturation), calc(var(--lightness) - 10%), 0.6),
            0 0.0625em 0.125em hsla(0, 0%, 0%, 0.6),
            inset 0 0.1875em 0.375em hsla(0, 0%, 100%, 0.4),
            inset 0 -0.0625em 0.1875em hsla(var(--primary-hue), var(--saturation), calc(var(--lightness) - 15%), 0.6);
          transform: translateZ(2px);
        }
        .liquid-radio input[type="radio"]:checked + .radio-visual::before {
          transform: translate(-50%, -50%) scale(1) translateZ(2px);
          opacity: 1;
          animation: pulseGlow 2s ease-in-out infinite;
        }
        .liquid-radio input[type="radio"]:active + .radio-visual {
          transform: scale(0.96) translateY(0.0625em) rotateX(-2deg);
          transition: all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow:
              0 0.0625em 0.125em hsla(var(--primary-hue), var(--saturation), calc(var(--lightness) + 20%), 0.6),
              inset 0 0.0312em 0.0625em hsla(0, 0%, 100%, 0.4);
          }
          50% {
            box-shadow:
              0 0.0625em 0.1875em hsla(var(--primary-hue), var(--saturation), calc(var(--lightness) + 20%), 0.8),
              0 0 0.25em hsla(var(--primary-hue), calc(var(--saturation) + 20%), calc(var(--lightness) + 30%), 0.5),
              inset 0 0.0312em 0.0625em hsla(0, 0%, 100%, 0.6);
          }
        }
        .liquid-radio .radio-label {
          color: hsl(var(--primary-hue), 35%, 70%);
          font-weight: 500;
          transition: color var(--transition-duration) ease;
        }
        .liquid-radio:hover .radio-label {
          color: hsl(var(--primary-hue), 45%, 80%);
        }
        .liquid-radio input[type="radio"]:checked ~ .radio-label {
          color: hsl(var(--primary-hue), 50%, 90%);
        }
        .liquid-radio.variant-coral {
          --primary-hue: 15;
          --secondary-hue: 45;
          --tertiary-hue: 340;
        }
        .liquid-radio.variant-mint {
          --primary-hue: 150;
          --secondary-hue: 180;
          --tertiary-hue: 120;
        }
        .liquid-radio.variant-sky {
          --primary-hue: 200;
          --secondary-hue: 220;
          --tertiary-hue: 260;
        }
      `}</style>
        <h1 className="text-8xl bg-[rgb(205,89,27)] text-gray-900 p-2">
          Next Step
        </h1>
      <div className="min-h-screen bg-[rgb(205,89,27)] relative">
        {/* Floating Department Selection */}
        <div className="absolute left-6 top-6 bottom-6 w-80 bg-gray-800/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-700/50 z-10 overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="p-6 border-b border-gray-700/50 bg-gray-800/80">
              <h2 className="text-2xl font-bold text-gray-100">Select Your Department</h2>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              <div className="radio-group">
                {departments.map((dept) => (
                  <label key={dept.id} className={`liquid-radio ${dept.variant}`}>
                    <input
                      type="radio"
                      name="department"
                      value={dept.id}
                      checked={selectedDepartment === dept.id}
                      onChange={(e) => setSelectedDepartment(e.target.value as DepartmentId)}
                    />
                    <span className="radio-visual"></span>
                    <span className="radio-label">{dept.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="ml-96 p-8 overflow-y-auto min-h-screen">
          {selectedDepartment ? (
            <div className="max-w-4xl">
              <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 p-8">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold text-gray-100 mb-2">
                    {departments.find(d => d.id === selectedDepartment)?.name}
                  </h1>
                  <div className="w-20 h-1 bg-blue-500 rounded"></div>
                </div>

                <div className="mb-8">
                  <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
                    <h3 className="font-semibold text-gray-300 mb-3">Department Leads</h3>
                    <div className="space-y-3">
                      {departmentDetails[selectedDepartment]?.leads.map((lead, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-600">
                          <p className="text-xl font-bold text-gray-100 mb-1">
                            {lead.name}
                          </p>
                          <p className="text-blue-400 font-medium">
                            {lead.phone}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100 mb-3">About This Department</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {departmentDetails[selectedDepartment]?.about}
                    </p>
                  </div>

                  <div className="bg-blue-900 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-blue-200 mb-3">Message from the Leads</h3>
                    <p className="text-blue-300 leading-relaxed italic">
                      "{departmentDetails[selectedDepartment]?.message}"
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                    </svg>
                    Join WhatsApp Group
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-300 mb-2">Select a Department</h2>
                <p className="text-gray-400">Select the department you've got into from the left panel to view details and contact information.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DepartmentSelector;