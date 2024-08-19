import ToDoProvider from "./context/toDoProvider"

/* Components Imports */
import Header from "./components/header"
import Form from "./components/Input"
import Layout from "./components/Layout"
import ToDoList from "./components/ToDoList"

/* App Component */
function App() {
  return (
    <>
      <ToDoProvider>
        <div className="font-Josefin xl:py-28">
          <Layout>
            <Header />
            <Form />
            <ToDoList />
          </Layout>
        </div>
      </ToDoProvider>
    </>
  )
}

export default App
