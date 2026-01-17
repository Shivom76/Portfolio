// import React,{useRef,useEffect} from 'react';


// const MOBILE_CARD_WIDTH_REM = 18; // Slightly smaller for better fit on narrow phones
// const MOBILE_CARD_HEIGHT_REM = 13.5;


// // Desktop sizing overrides
// const DESKTOP_CARD_WIDTH_REM = 24;
// const DESKTOP_CARD_HEIGHT_REM = 18;


// const achievements=[
//     {
//         id:1,
//         title:'Python',
//         imageUrl:'/images/python.png'
//     },
//     {
//         id:2,
//         title:'Smart India Hackathon',
//         imageUrl:'/images/sih.png'
//     },
//     {
//         id:3,
//         title:'Data Structures and Algorithm',
//         imageUrl:'/images/dsa.png'
//     },
//     {
//         id:4,
//         title:'Tata',
//         imageUrl:'/images/tataCertificate.png'
//     },
//     {
//         id:5,
//         title:'AI Tools Workshop',
//         imageUrl:'/images/be10x.png'
//     },
// ]

// export default function Achievements(){

//     const containerRef=useRef(null)
//     const itemRefs=useRef([])
//     // const CARD_WIDTH_REM = 24; 
//     // // ADJUSTMENT: Set a height that yields a landscape-friendly ratio (approx. 4:3 ratio)
//     // const CARD_HEIGHT_REM = 18;
    
//     const CARD_WIDTH_REM = window.innerWidth >= 1024 ? DESKTOP_CARD_WIDTH_REM : MOBILE_CARD_WIDTH_REM;
//     const CARD_HEIGHT_REM = window.innerWidth >= 1024 ? DESKTOP_CARD_HEIGHT_REM : MOBILE_CARD_HEIGHT_REM;
    
//     useEffect(()=>{
//         const container=containerRef.current;
//         if(!container) return
    
//         const handleScroll=()=>{
//             const scrollCenter=container.scrollLeft+container.offsetWidth/2
    
//             // tighter blur zone, adjusted for smaller card
//             const blurZone=300
    
//             itemRefs.current.forEach((item)=>{
//                 if(item){
//                     const itemCenter = item.offsetLeft + item.offsetWidth / 2;
//                     const distance = Math.abs(scrollCenter - itemCenter);
//                     const normalizedDistance = Math.min(1, distance / blurZone);
    
//                     const blur = normalizedDistance * 3;
                        
//                     // Scale: Min 0.9
//                     const scale = 1 - (normalizedDistance * 0.1); 
                    
//                     // Apply styles
//                     item.style.filter = `blur(${blur}px)`;
//                     item.style.transform = `scale(${scale})`;
//                 }
//             });
//         }

//         container.addEventListener('scroll', handleScroll);
//         handleScroll();

//         return () => container.removeEventListener('scroll', handleScroll);
//     },[])

//     const setItemRef = (el, index) => {
//         if (el) {
//             itemRefs.current[index] = el;
//         }
//     };

//     const cardWidthPx = CARD_WIDTH_REM * 16;
//     const cardHeightPx = CARD_HEIGHT_REM * 16;

//     return(
//         <div className='mt-5'>
//             <h2 className='text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-700 to-blue-800 text-center'>Achievements</h2>

//             <div 
//                 ref={containerRef}
//                 className="w-full max-w-7xl flex overflow-x-scroll snap-x snap-mandatory pb-10 mx-5 scrollbar-hide rounded-lg bg-gray-900/50"
//                 style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar for aesthetics
//             >
//                 {/* START: Padding element to center the first item */}
//                 <div className={`w-[calc(50%-${CARD_WIDTH_REM/2}rem)] flex-shrink-0 snap-center`} style={{ width: `calc(50% - ${cardWidthPx / 2}px)` }}></div>

//                 {achievements.map((item, index) => {

//                     const cardClasses = `
//                     w-[${MOBILE_CARD_WIDTH_REM}rem] h-[${MOBILE_CARD_HEIGHT_REM}rem] 
//                     lg:w-[${DESKTOP_CARD_WIDTH_REM}rem] lg:h-[${DESKTOP_CARD_HEIGHT_REM}rem] 
//                     flex-shrink-0 mx-4 bg-gray-800 rounded-xl shadow-2xl snap-center 
//                     transition-all duration-100 ease-out relative overflow-hidden group 
//                     border border-teal-600/50
//                     `;

//                     return (
                        
//                         <div 
//                             key={item.id} 
//                             ref={el => setItemRef(el, index)}

//                             // Card Styling: Fixed width, fixed height for image consistency
//                             className={cardClasses}
//                             style={{ width: `${CARD_WIDTH_REM}rem`, height: `${CARD_HEIGHT_REM}rem` }} // Fixed height for image focus
//                         >
//                             {/* Image Container */}
//                             <img 
//                                 src={item.imageUrl} 
//                                 alt={item.title} 
//                                 // Ensure image covers the card without distortion
//                                 className="w-full h-full object-cover rounded-xl transition duration-500 group-hover:scale-105"
//                                 onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/352x300/808080/ffffff?text=Image+Error" }}
//                             />

//                             {/* Title Overlay for context */}
//                             <div className="absolute inset-x-0 bottom-0 p-3 bg-gray-900/70 backdrop-blur-sm text-center">
//                                 <h2 className="text-lg font-semibold text-teal-200">{item.title}</h2>
//                                 <p className="text-xs text-gray-400">{item.date}</p>
//                             </div>
//                         </div>
//                     );
//                 })}
//                 {/* END: Padding element to center the last item */}
//                 <div className={`w-[calc(50%-${CARD_WIDTH_REM/2}rem)] flex-shrink-0 snap-center`} style={{ width: `calc(50% - ${cardWidthPx / 2}px)` }}></div>
//             </div>

//         {/* Custom CSS for hiding the scrollbar */}
//         <style jsx="true">{`
//                 .scrollbar-hide {
//                     -ms-overflow-style: none; /* IE and Edge */
//                     scrollbar-width: none; /* Firefox */
//                 }
//                 .scrollbar-hide::-webkit-scrollbar {
//                     display: none; /* Chrome, Safari and Opera */
//                 }
//             `}</style>

//         </div>
//     )
// }











import React, { useRef, useEffect, useState } from 'react';

const MOBILE_CARD_WIDTH_REM = 18; // Slightly smaller for better fit on narrow phones
const MOBILE_CARD_HEIGHT_REM = 13.5;
const DESKTOP_CARD_WIDTH_REM = 24;
const DESKTOP_CARD_HEIGHT_REM = 18;

const achievements = [
  { id: 1, title: 'Python', imageUrl: '/images/python.png' },
  { id: 2, title: 'Smart India Hackathon', imageUrl: '/images/sih.png' },
  { id: 3, title: 'Data Structures and Algorithm', imageUrl: '/images/dsa.png' },
  { id: 4, title: 'Tata', imageUrl: '/images/tataCertificate.png' },
  { id: 5, title: 'AI Tools Workshop', imageUrl: '/images/be10x.png' },
];

export default function Achievements() {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  // Use state for card dimensions to handle window resizing correctly
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      const isDesktop = window.innerWidth >= 1024;
      setDimensions({
        width: isDesktop ? DESKTOP_CARD_WIDTH_REM : MOBILE_CARD_WIDTH_REM,
        height: isDesktop ? DESKTOP_CARD_HEIGHT_REM : MOBILE_CARD_HEIGHT_REM,
      });
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollCenter = container.scrollLeft + container.offsetWidth / 2;
      const blurZone = 300;

      itemRefs.current.forEach((item) => {
        if (item) {
          const itemCenter = item.offsetLeft + item.offsetWidth / 2;
          const distance = Math.abs(scrollCenter - itemCenter);
          const normalizedDistance = Math.min(1, distance / blurZone);

          const blur = normalizedDistance * 3;
          const scale = 1 - normalizedDistance * 0.1;

          item.style.filter = `blur(${blur}px)`;
          item.style.transform = `scale(${scale})`;
        }
      });
    };

    container.addEventListener('scroll', handleScroll);
    // Timeout ensures DOM is painted for initial calculation
    const timeoutId = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('resize', updateSize);
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const cardWidthPx = dimensions.width * 16;

  return (
    <div className="mt-5 w-full overflow-hidden"> {/* overflow-hidden here prevents the "white margin" */}
      <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-700 to-blue-800 text-center mb-4">
        Achievements
      </h2>

      <div
        ref={containerRef}
        className="w-full flex overflow-x-scroll snap-x snap-mandatory pb-10 scrollbar-hide bg-gray-900/50"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Spacer to center first item: 50% of screen minus half card width */}
        <div 
            className="flex-shrink-0" 
            style={{ width: `calc(50vw - ${cardWidthPx / 2}px)` }} 
        />

        {achievements.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (itemRefs.current[index] = el)}
            className="flex-shrink-0 mx-4 bg-gray-800 rounded-xl shadow-2xl snap-center transition-all duration-100 ease-out relative overflow-hidden group border border-teal-600/50"
            style={{ 
              width: `${dimensions.width}rem`, 
              height: `${dimensions.height}rem` 
            }}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover rounded-xl transition duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/400x300?text=Image+Error";
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gray-900/70 backdrop-blur-sm text-center">
              <h2 className="text-lg font-semibold text-teal-200">{item.title}</h2>
            </div>
          </div>
        ))}

        {/* Spacer to center last item */}
        <div 
            className="flex-shrink-0" 
            style={{ width: `calc(50vw - ${cardWidthPx / 2}px)` }} 
        />
      </div>

      <style jsx="true">{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}