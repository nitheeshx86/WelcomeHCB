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
      leads: [{ name: "Dr. Sarah Chen", phone: "+1-555-0101" }],
      about: "AI/ML is about building smart models and intelligent systems.",
      message: "Join us to explore artificial intelligence and machine learning!",
    },
    "app-dev": {
      leads: [{ name: "John Doe", phone: "+1-555-0202" }],
      about: "App Development focuses on building modern mobile solutions.",
      message: "Create mobile apps that make an impact!",
    },
    blockchain: {
      leads: [{ name: "Alice Kumar", phone: "+1-555-0303" }],
      about: "Blockchain focuses on decentralization and Web3 innovation.",
      message: "Be part of the future of decentralized tech!",
    },
    competitive: {
      leads: [{ name: "Rahul Iyer", phone: "+1-555-0404" }],
      about: "Competitive Programming builds problem-solving and algorithmic skills.",
      message: "Sharpen your coding and thinking skills with us!",
    },
    design: {
      leads: [{ name: "Emily Zhang", phone: "+1-555-0505" }],
      about: "Design team creates beautiful and functional user experiences.",
      message: "Bring creativity and usability together!",
    },
    finance: {
      leads: [{ name: "David Lee", phone: "+1-555-0606" }],
      about: "Finance manages resources and drives sustainable growth.",
      message: "Learn the business side of technology!",
    },
    hardware: {
      leads: [{ name: "Sophia Nair", phone: "+1-555-0707" }],
      about: "Hardware team works on circuits, IoT, and embedded systems.",
      message: "Explore innovation at the intersection of hardware and software!",
    },
    operations: {
      leads: [{ name: "Mohammed Ali", phone: "+1-555-0808" }],
      about: "Operations ensures everything runs smoothly behind the scenes.",
      message: "Keep the engine of innovation running!",
    },
    "social-media": {
      leads: [{ name: "Priya Singh", phone: "+1-555-0909" }],
      about: "Social Media team builds online presence and community engagement.",
      message: "Tell stories and connect with the world!",
    },
    "web-dev": {
      leads: [{ name: "Carlos Rivera", phone: "+1-555-1010" }],
      about: "Web Development builds responsive and scalable websites.",
      message: "Craft modern web experiences with us!",
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
        <h1 className="text-8xl bg-orange-400 text-gray-900 p-2">
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