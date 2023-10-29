//1. Import react
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

//2. Create our component:
function App() {
  //3. JS if needed
  console.log("component App");

  //4. return html element
  return (
    <div>
      <Header />
      <Footer />
      <Note />
    </div>
  );
}

//5.export
export default App;
