import "./App.css";
import { Navbar } from "./Navbar";
import { Banner } from "./Banner";
import { Partner } from "./Partner";
import { Choose } from "./Choose";
import { Engenerrs } from "./Engenerrs";
import { Message } from "./Message";
import Contrac from "./Contrac";
import Blog from "./Blog";
import Newsleter from "./Newsleter";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Partner></Partner>
      <Choose></Choose>
      <Engenerrs></Engenerrs>
      <Message></Message>
      <Contrac></Contrac>
      <Blog></Blog>
      <Newsleter></Newsleter>
    </>
  );
}

export default App;
