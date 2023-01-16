import React from "react";
import { useRoutes } from "react-router-dom";
import About from "./About";
import Book from "./Book";
import Books from "./Books";
import Contact from "./Contact";


function App() {

    const el=useRoutes([
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>,
            
        },
        {
            path:"/books",
            element:<Books/>
        },
        {
            path:`/books/:id`,
            element:<Book/>
        }
    ])

    return (

        
        <>{el}</>
        // <Routes>
        //     <Route path="/" element={<Books />}>
        //         <Route path="books"/>
        //         <Route path="about" element={<About/>} />
        //         <Route path="contact" element={<Contact />} />
        //         <Route path="books/:id" element={<Book />} />
        //     </Route>
        // </Routes>

    )
}




export default App;













// import React from "react";
// import Componentt from "./Componentt";
// import ThemeProvider from "./ThemeContext";


// export default function App(){
//     return (
//         <>
//             <ThemeProvider>
//                 <Componentt/>
//             </ThemeProvider>
//         </>
//     )
// }

