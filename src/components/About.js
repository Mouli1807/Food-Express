const About = () => {
    return(
        <div className="font-['Poppins',_sans-serif] w-[75vw] h-[150vh] my-[10px] mx-auto p-[5px] bg-white rounded-[12px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] text-center">
             <h1 className="mt-[40px] text-[2rem] text-[#492e6b]">About</h1>
             <div className="text-[1.5rem]">Food-Express is more than just a food and meal-planning app—it's my personal journey into mastering React and JavaScript. 
             This project is a hands-on way for me to explore every detail of React, from component-based architecture to state management, 
             routing, and beyond.</div>
             <h2 className="mt-[40px] text-[2rem] text-[#492e6b]">Why I Built Food-Express</h2>
             <div className="text-[1.5rem]">I created Food-Express as a learning experience to dive deep into modern web development. Through this project, I'm not just building an app; I'm understanding how React works at its core, 
             experimenting with JavaScript concepts, and improving my frontend skills.</div>
             <h2 className="mt-[40px] text-[2rem] text-[#492e6b]">What I'm Learning</h2>
             <p className="text-[1.5rem]" >As I develop Food-Express, I'm implementing and documenting key React and JavaScript features, including:</p>
<ul className="list-none space-y-2 mt-2">
    <li className="flex items-center gap-2 text-[1.5rem]">
        ✅ React Components & Props
    </li>
    <li className="flex items-center gap-2 text-[1.5rem]">
        ✅ State Management (<code>useState</code>, <code>useReducer</code>, <code>Context API</code>)
    </li>
    <li className="flex items-center gap-2 text-[1.5rem]">
        ✅ React Router & Navigation
    </li>
    <li className="flex items-center gap-2 text-[1.5rem]">
        ✅ Fetching Data & API Integration
    </li>
    <li className="flex items-center gap-2 text-[1.5rem]">
        ✅ Performance Optimization (<code>useMemo</code>, <code>useCallback</code>)
    </li>
    <li className="flex items-center gap-2 text-[1.5rem]">
        ✅ JavaScript Concepts like Closures, Promises, and <code>Async/Await</code>
    </li>
    <li className="flex items-center gap-2 text-[1.5rem]">
        ✅ Module Bundlers: Webpack & Parcel for optimizing builds
    </li>
    <li className="flex items-center gap-2 text-[1.5rem]">
        ✅ Shimmer UI: Implementing skeleton loaders for better UX
    </li>
    <li className="flex items-center gap-2 text-[1.5rem]">
        ✅ CORS Policy: Understanding and handling cross-origin requests
    </li>
</ul>

             <h2 className="mt-[40px] text-[2rem] text-[#492e6b]">My Goals</h2>
             <div className="text-[1.5rem] p-[20px] rounded-[8px] bg-[#fff7e6] border-l-[5px] border-[#ffcc00]">Food-Express is a work in progress, constantly evolving as I explore 
             new concepts and best practices. If you're interested in React, JavaScript, or just love to see projects grow, 
             feel free to follow along!
             </div>
        </div>
       
        
    );
}

export default About;