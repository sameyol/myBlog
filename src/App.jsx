import Homepage from "./pages/Homepage";
import BlogContentPage from "./pages/BlogContentPage";
import {Routes, Route} from "react-router-dom"
import useFetch from "./hooks/useFetch";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useContext } from "react";
import { Context } from "./context/Context";

export default function App() {
  let {loading, data, error} = useFetch("http://localhost:1337/api/blogs?populate=*")
  if(loading) return <p>Loading</p>
  if(error) return <p>Error!</p>
  console.log(data)
  
  const {user} = useContext(Context)

  return (
    <div>
    <Routes>
      <Route path="/" element={<Homepage blogs={data ? data : ""} />} />
      <Route path="/blog/:id" element={<BlogContentPage blogs={data ? data : ""} />} />
      <Route path="/signup" element={user ? <Homepage blogs={data ? data : ""} /> : <Signup />} />
      <Route path="/login" element={user ? <Homepage blogs={data ? data : ""} /> : <Login />} />
    </Routes>
  </div>
  )
}

