import { useEffect, useState } from "react";
import './App.css'

import Hero from './components/Hero';
import BigImage from './components/BigImage';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import Proof from './components/Proof';
import Path from './components/Path';
import Objection from './components/Objection';
import Guarantee from './components/Guarantee';
import FinalCTA from './components/FinalCTA';
import Apply from './components/Apply';

function App() {
const [visibleSections, setVisibleSections] = useState(1);
const [showForm, setShowForm] = useState(false);

useEffect(() => {
const handleScroll = () => {
const scrollPosition = window.scrollY + window.innerHeight;
const pageHeight = document.body.offsetHeight;

if (scrollPosition >= pageHeight - 50) {  
    setVisibleSections((prev) => prev + 1);  
  }  
};  

window.addEventListener("scroll", handleScroll);  
return () => window.removeEventListener("scroll", handleScroll);

}, []);

return (
<>
<Hero openForm={() => setShowForm(true)} />
{visibleSections >= 2 && <BigImage />}
{visibleSections >= 2.9 && <Problems />}
{visibleSections >= 3.8 && <Solutions />}
{visibleSections >= 4.7 && <Proof />}
{visibleSections >= 5.4 && <Path />}
{visibleSections >= 6.3 && <Objection />}
{visibleSections >= 7.2 && <Guarantee />}
{visibleSections >= 8.1 && <FinalCTA openForm={() => setShowForm(true)} />}

{showForm && <Apply closeForm={() => setShowForm(false)} />}  
</>

)
}

export default App;