import  { Header, Summary, Experience, Education, Skills } from "./Resume";
function App() {


  // Style function for active links
  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? '#007bff' : '#333',
    textDecoration: isActive ? 'none' : 'underline',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px'
  });


  return (
    <div className="App">
      <h1>Hello World React!</h1>
    </div>
  );
}

export default App;