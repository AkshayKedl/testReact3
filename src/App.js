import logo from './logo.svg';
import './App.css';
import ReactGA from "react-ga4";
import { useEffect } from 'react';

function App() {
    useEffect(() => {
      ReactGA.initialize("G-ERGQGM3LY6");
    },[])
  return (
    <div className="App">

{/* <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>

      <button type="submit">Submit</button>
    </form> */}

      <iframe width="1280" height="720" src="https://www.youtube.com/embed/SqcY0GlETPk" title="React Tutorial for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
  );
}

export default App;
