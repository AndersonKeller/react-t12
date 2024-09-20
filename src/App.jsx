import { Header } from "./components/Header/Header"
import { List } from "./components/List/List"
import { Main } from "./components/Main/Main"


function App() {
  const addItem=(name)=>{
    console.log("pokemon",name)
  }

  return (
    <>
    <Header title="Home" />
    <Main>
      <List/>
    </Main>
    </>
  )
}

export default App
