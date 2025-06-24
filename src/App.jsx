import "./App.css";
import Navbar from "./components/Navbar";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";

const App = () => {
  return (
    <>
      <section className="view1">
        <Navbar />
        <h1>CUSTOM WELLNESS</h1>
        <h1 className="touch">GET IN TOUCH</h1>
        <div className="new">
          <h4 className="">A new species of sportainment.</h4>
          <p>
            <span>
              <i className="ri-vip-crown-2-fill"></i>
            </span>
            Improve your health - performance well
          </p>
        </div>
      </section>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
    </>
  );
};

export default App;
