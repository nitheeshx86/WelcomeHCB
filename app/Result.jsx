import React from 'react';

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
    <section className="bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          You Impressed Us
        </h2>
        
        {/* Stats container - horizontal layout */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
          {/* Total Applications */}
          <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 hover:bg-gray-750 transition-all duration-300 min-w-[200px]">
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
              Candidates applied
            </p>
          </div>

          {/* Selected Candidates */}
          <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 hover:bg-gray-750 transition-all duration-300 min-w-[200px]">
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
          <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 hover:bg-gray-750 transition-all duration-300 min-w-[200px]">
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
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-2xl">
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