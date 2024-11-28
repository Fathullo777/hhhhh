import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Todos from "./pages/Todos"
import Users from "./pages/Users"
import Posts from "./pages/Posts"
import PostsItem from "./pages/PostsItem"
import UserItem from "./pages/UserItem"
import TodosItem from "./pages/TodosItem" // Импортируем компонент TodosItem

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Todos/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/postsitem/:id" element={<PostsItem/>}/>
          <Route path="/useritem/:id" element={<UserItem/>}/>
          <Route path="/todositem/:id" element={<TodosItem/>}/> {/* Добавляем маршрут для TodosItem */}
      </Routes>
    </>
  )
}

export default App

