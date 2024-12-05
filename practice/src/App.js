
import './App.css';


function Title(){
  return(
    <h2>Title</h2>
  )

}
function Header(){
  return(
    <>
      <Title/>
      <h2>Title Header</h2>
    </>
  
  )
}
function Content(){
  return(
    <>
     <Title/>
     <h2>Title Content</h2>
    </>
   
  )
}
function Footer(){
  return(
    <>
     <Title/>
     <h2>Footer Content</h2>
    </>
   
  )
}

function App() {
  return (
    <div className="App">
      <>
      <Header/>
      <Content/>
      <Footer/>
      </>
    </div>
  );
}


export default App;
