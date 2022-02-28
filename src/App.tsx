import './App.scss'
import { Route, Link } from "wouter";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";



function App() {

  return (<>
    <header>
      <Link to="/">
        <h1>Sekai 🌎</h1>
      </Link>
    </header>
    <div className="App">
      <section className="App-content">
        <Route component={Home} path="/" />
        <Route component={Details} path="/country/:code" />
      </section>
    </div >
  </>
  );
}

export default App;
