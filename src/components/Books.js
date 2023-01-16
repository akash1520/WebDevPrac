import { Link, Outlet, useSearchParams } from "react-router-dom"
export default function Books(){
    const [searchParams,setSearchParams]=useSearchParams("");
    const number=searchParams.get('n')
    return(<>
        <h1>BooksLIst</h1>
        <Link to="/books/book1">book1</Link>
        <Link to="/books/book2">book2</Link>
        <Link to={`/books/book${number}`}>book{number}</Link>
        {/* <Outlet/> */}
        <br/>
        <input type="number" onChange={(e)=>{setSearchParams({n:e.target.value})}} value={number} />

    </>)
}