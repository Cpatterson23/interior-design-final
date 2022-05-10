import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <Header></Header>
    <hr></hr>
    <div className="image" id="photo">
        <img src="https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZXJuJTIwaG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt=""/>
        <button className="btn">About Us</button>
    </div>

    <div className="image" id="photo">
        <img src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGxpdmluZyUyMHJvb20lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt=""/>
        <button className="btn">Pricing</button>
    </div>

    <div className="image" id="photo">
        <img src="https://images.unsplash.com/photo-1602028915047-37269d1a73f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbiUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt=""/>
        <button className="btn">Gallery</button>
    </div>
    <hr></hr>
    <Footer></Footer>
  </div>
    


  );
}

export default App;
