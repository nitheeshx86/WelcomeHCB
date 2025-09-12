import React from 'react';

// Simple Squares background component
const Squares = ({ speed = 0.5, squareSize = 40, direction = "diagonal", borderColor = "#4a3429ff", hoverFillColor = "#ff774548" }) => {
  const [mousePosition, setMousePosition] = React.useState({ x: -1000, y: -1000 });
  const containerRef = React.useRef(null);
  
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }
    };
    
    const handleMouseLeave = () => {
      setMousePosition({ x: -1000, y: -1000 });
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Get container dimensions
  const [dimensions, setDimensions] = React.useState({ width: 1400, height: 800 });
  
  React.useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const cols = Math.ceil(dimensions.width / squareSize);
  const rows = Math.ceil(dimensions.height / squareSize);
  
  // Find the square that should be highlighted
  const hoveredCol = Math.floor(mousePosition.x / squareSize);
  const hoveredRow = Math.floor(mousePosition.y / squareSize);
  
  // Check if mouse is within valid bounds
  const isValidHover = mousePosition.x >= 0 && mousePosition.y >= 0 && 
                       hoveredCol >= 0 && hoveredRow >= 0 && 
                       hoveredCol < cols && hoveredRow < rows;
  
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-auto">
      <svg width="100%" height="100%" className="absolute inset-0 w-full h-full">
        {/* Grid pattern */}
        <defs>
          <pattern id="squares" x="0" y="0" width={squareSize} height={squareSize} patternUnits="userSpaceOnUse">
            <rect 
              x="0" 
              y="0" 
              width={squareSize} 
              height={squareSize} 
              fill="transparent" 
              stroke={borderColor} 
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#squares)" />
        
        {/* Single hovered square */}
        {isValidHover && (
          <rect
            x={hoveredCol * squareSize + 1}
            y={hoveredRow * squareSize + 1}
            width={squareSize - 2}
            height={squareSize - 2}
            fill="#ff7745"
            opacity="0.6"
            style={{
              transition: 'opacity 0.1s ease-out'
            }}
          />
        )}
      </svg>
    </div>
  );
};

// CountUp component with intersection observer
const CountUp = ({ from, to, separator, direction, duration, className }) => {
  const [count, setCount] = React.useState(from);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const elementRef = React.useRef(null);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const increment = (to - from) / (duration * 60); // 60fps
          const timer = setInterval(() => {
            setCount(prev => {
              const next = prev + increment;
              if (next >= to) {
                clearInterval(timer);
                return to;
              }
              return next;
            });
          }, 1000 / 60);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [from, to, duration, hasAnimated]);
  
  const formatNumber = (num) => {
    return separator ? Math.round(num).toLocaleString() : Math.round(num).toString();
  };
  
  return <span ref={elementRef} className={className}>{formatNumber(count)}</span>;
};

export default function SelectionStatsSection() {
  return (
    <section className="relative bg-gray-400 py-16 px-6 overflow-hidden shadow-[inset_0_20px_20px_rgba(0,0,0,0.6),inset_0_-20px_20px_rgba(0,0,0,0.6)]">
      {/* Square background */}
      <Squares 
        speed={0.5} 
        squareSize={40}
        direction="diagonal" 
        borderColor="#4a3429ff"
        hoverFillColor="#ff774548"
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center pointer-events-none">
        {/* Main heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-black mb-12"
          style={{
            textShadow: "4px 4px 0 gray" // solid offset bottom-right
          }}
        >
          You Impressed Us
        </h2>

        
        {/* Stats container - horizontal layout */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
          {/* Total Applications */}
          <div className="bg-[#454545] rounded-2xl shadow-2xl p-8 hover:bg-gray-750 transition-all duration-300 min-w-[200px] pointer-events-auto">
            <div className="text-orange-500 text-5xl md:text-6xl font-bold mb-4">
              <CountUp
                from={0}
                to={1006}
                separator=","
                direction="up"
                duration={2}
                className="count-up-text"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Total Applications
            </h3>
            <p className="text-gray-400">
              
            </p>
          </div>

          {/* Selected Candidates */}
          <div className="bg-[#454545] rounded-2xl shadow-2xl p-8 hover:bg-gray-750 transition-all duration-300 min-w-[200px] pointer-events-auto">
            <div className="text-orange-500 text-5xl md:text-6xl font-bold mb-4">
              <CountUp
                from={0}
                to={80}
                separator=""
                direction="up"
                duration={1.5}
                className="count-up-text"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Selected
            </h3>
            <p className="text-gray-400">
              Outstanding individuals
            </p>
          </div>

          {/* Selection Rate */}
          <div className="bg-[#454545] rounded-2xl shadow-2xl p-8 hover:bg-gray-750 transition-all duration-300 min-w-[200px] pointer-events-auto">
            <div className="text-orange-500 text-5xl md:text-6xl font-bold mb-4">
              <CountUp
                from={0}
                to={7.95}
                separator=""
                direction="up"
                duration={2.5}
                className="count-up-text"
              />
              <span className="text-3xl">%</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Selection Rate
            </h3>
            <p className="text-gray-400">
              You're in the top 8%
            </p>
          </div>
        </div>

        {/* Congratulations message */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-2xl pointer-events-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Congratulations!
          </h3>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            You stood out among <span className="text-orange-500 font-semibold">926 other applicants</span>. 
            Your exceptional skills and unique qualities impressed us, proving you're better than 
            <span className="text-orange-500 font-semibold"> 92% of candidates</span> who applied. 
            Welcome to an exclusive group of remarkable individuals.
          </p>
        </div>
      </div>
      
      <style jsx>{`
        .count-up-text {
          display: inline-block;
          font-variant-numeric: tabular-nums;
        }
      `}</style>
    </section>
  );
}