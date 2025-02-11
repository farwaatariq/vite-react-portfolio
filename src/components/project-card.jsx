import React from 'react';

export default function ProjectCard({project}) {
    return (
        <div className="flex flex-col bg-fade rounded-lg p-4 max-w-sm mx-auto shadow-lg">
            <img 
                src={project.img} 
                alt="Plantify" 
                className="w-full h-64 object-cover rounded-lg" 
            />
            <h4 className="text-lg font-bold text-cream mt-4">{project.title}</h4>
            <p className="text-sm text-cream">
                {project.description}
            </p>
            <div className='mt-4 flex gap-2'>
                {project.skills.map((skill) => (
                    <p className='text-sm px-1 bg-cream text-fade rounded-full'>#{skill}</p>
                ))}
            </div>
        </div>
    );
}

// import React from 'react';

// export default function ProjectCard({ project }) {
//     return (
//         <div className="group relative flex flex-col items-center bg-fade p-2 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl max-w-md mx-auto">
//             <div className="w-full h-64 overflow-hidden">
//                 <img 
//                     src={project.img} 
//                     alt={project.title} 
//                     className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
//                 />
//             </div>
//             <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                 <h4 className="text-lg font-bold text-white px-4">{project.title}</h4>
//             </div>
//             <div className="p-6">
//                 <p className="text-sm text-gray-300 mb-4">{project.description}</p>
//                 <div className="mt-4">
//                     <h5 className="text-md font-semibold text-cream mb-2">Skills:</h5>
//                     <ul className="flex flex-wrap gap-2">
//                         {project.skills.map((skill, index) => (
//                             <li 
//                                 key={index} 
//                                 className="bg-green-600 text-white text-xs font-medium py-1 px-3 rounded-full"
//                             >
//                                 {skill}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }
