import { Header,Footer,Blog,Possibility,Features,WhatGPT} from "./containers";
import { Cta,Brand,Navbar } from "./components";
import './App.css'

function App() {
  return (
    <div className="app">
        <div className="gradient__bg">
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhatGPT/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  );
}

export default App;
