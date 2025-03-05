import Header from "./assets/components/Header"
import Main from "./assets/components/Main"

import { GlobalProvider } from "./context/GlobalContext"


function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <Main />
      </GlobalProvider>
    </>
  )
}

export default App
