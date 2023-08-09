import './Appa.css';
let name="<b>Harry3</b>";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    
    <div className="container">
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, obcaecati dignissimos natus modi officiis minima suscipit doloremque blanditiis dicta, laborum inventore consectetur ut mollitia corrupti ex unde maiores accusamus. Non illum nostrum magnam enim.</p>
    </div>
    </>
  );
}

export default App;
