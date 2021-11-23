import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./App.scss";
import Commitment from "./svgs/Commitment";
import Relationship from "./svgs/Relationship";

function App() {
  const [selectedParent, setSelectedParent] = useState("");
  const [subSection, setSubSection] = useState("");
  const [tabIndex, setTabIndex] = useState(0);

  const showSubOptions = () => {
    if (selectedParent === "interior") {
      setSubSection("");
    }
    setTabIndex(0);
  };
  const navigateToHome = () => {
    setSelectedParent("");
    setSubSection("");
    setTabIndex(0);
  };
  return (
    <div className="App">
      <div className="lines">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <div className="line line-4"></div>
      </div>
      <header>
        <span className="logo">LOGO</span>
        {/* <div className="menu-icon">
          <span className="close-icon"></span>
          <span className="hamburger">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </span>
        </div> */}
      </header>
      <nav>
        <ul className="nav">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Gallery</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      <main>
        <div className="hero">
          <div className="wrapper">
            <div className="swiper-slide section section-1">
              <div className="img-overlay">
                <img src="./images/home_bg/overlays/4.webp" alt="" />
              </div>
              <div className="content">
                <div className="main-img">
                  <img src="./images/home_bg/5.jpg" alt="" />
                </div>
                <div className="text">
                  <h3>
                    <span>DreamsVille</span>
                    <span>Interiors</span>
                  </h3>
                  <p>
                    Your one stop solution for your house interiors and
                    exteriors company
                  </p>
                  <a href="/" className="button-link">
                    Browse Categoriess
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="about-section">
            <div className="text">
              <span>About the Company</span>
              <p>
                Dreamsville is the one stop solution for your house interiors
                and exteriors company located in B.M Road, Hassan, Specializing
                in both residential and commercial Interior design services.
                Whether you need a quick refresh of furniture and Wallcoverings,
                or an extensive whole-house renovation, we can provide the
                expertise to make sure the project runs smoothly and gives you
                the best results.
              </p>
              <p>
                We are and team of highly skilled workers who are extremely
                flexible and nimble. We have relationships with many local
                craftsmen and subcontractors, so you can be assured that your
                project is completed with the highest standards.
              </p>
            </div>
            <div className="image">
              <img src="./images/home_bg/4.jpeg" alt="About the Company" />
            </div>
          </div>
        </section>
        <section>
          <aside>
            <h4>Our core values</h4>
          </aside>
          <div className="services">
            <div className="service">
              <Commitment />
              <p>
                We are committed to delivering inspired designs that fulfill
                client expectations through collaboration and exceptional
                service
              </p>
            </div>
            <div className="service">
              <Relationship />
              <p>
                As a service provider of office interior design furniture, We
                always provide strong after-sales services and maintain a strong
                relationship with our clients
              </p>
            </div>
            <div className="service">
              <Commitment />
              <p>
                We always believe that customers help to shape Dreamsville,Thus
                if you ever need our help or advice, we are just a call away
              </p>
            </div>
            <div className="service">
              <Commitment />
              <p>
                We always believe that customers help to shape Dreamsville,Thus
                if you ever need our help or advice, we are just a call away
              </p>
            </div>
          </div>
        </section>
        <aside>
          <h4>Choose from our wide range products!</h4>
          <ul className="breadcrumbs">
            {selectedParent.length > 2 && (
              <li onClick={navigateToHome}>Home</li>
            )}
            {selectedParent.length > 2 && <li>{">"}</li>}
            <li onClick={showSubOptions}>{selectedParent}</li>
            {subSection.length > 2 && <li>{">"}</li>}
            <li>{subSection}</li>
          </ul>
        </aside>
        <div className="img-grid mt-3">
          <div
            className={`main-categories ${
              selectedParent.length > 2 ? "hidden" : "grid"
            }`}
          >
            <div
              className="category interior w-full"
              onClick={() => setSelectedParent("interior")}
            >
              <div className="text">
                <span className="uppercase text-xs font-bold">Interiors</span>
              </div>
              <img src="./images/home_bg/3.jpg" alt="Interiors" />
            </div>

            <div
              className="category exterior w-full"
              onClick={() => setSelectedParent("exterior")}
            >
              <div className="text">
                <span className="uppercase text-xs font-bold">Exteriors</span>
              </div>
              <img src="./images/home_bg/2.jpg" alt="Exteriors" />
            </div>

            <div
              className="category artifical"
              onClick={() => setSelectedParent("artificial")}
            >
              <div className="text">
                <span className="uppercase text-xs font-bold">
                  Artificial and Vertical Gardening
                </span>
              </div>
              <img src="./images/home_bg/1.jpg" alt="Artificial" />
            </div>
          </div>
          <div className="sub-category sub-category-1">
            <div
              className={`sub-interior interior-1-1 floor ${
                selectedParent === "interior" && !(subSection.length > 2)
                  ? "grid"
                  : "hidden"
              }`}
            >
              <div
                onClick={() => setSubSection("floorCarpet")}
                className="category FC interior-1"
              >
                <div className="text">
                  <span className="sub-category">Floor Carpets</span>
                </div>
                <img src="./images/home_bg/6.jpg" alt="Artificial" />
              </div>

              <div
                onClick={() => setSubSection("flooring")}
                className="category Flooring interior-1"
              >
                <div className="text">
                  <span className={`sub-category`}>Flooring</span>
                </div>
                <img src="./images/home_bg/4.jpeg" alt="Artificial" />
              </div>

              <div
                className="category Soft interior-1"
                onClick={() => setSubSection("softFurnishing")}
              >
                <div className="text">
                  <span className="sub-category"> Soft Furnishing</span>
                </div>
                <img src="./images/home_bg/3.jpg" alt="Artificial" />
              </div>
            </div>
            <Tabs
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
              className={`Tiles ${
                subSection === "floorCarpet" ? "block" : "hidden"
              }`}
            >
              <TabList className={`controls`}>
                <Tab className="Tiles-item item">
                  <span
                    className={`${tabIndex === 0 ? "font-bold" : "font-thin"}`}
                  >
                    FC Tiles
                  </span>
                </Tab>
                <Tab className="Rugs Tiles-item item">
                  <span
                    className={`${tabIndex === 1 ? "font-bold" : "font-thin"}`}
                  >
                    FC Rugs
                  </span>
                </Tab>
                <Tab className="Wall Tiles-item item">
                  <span
                    className={`${tabIndex === 2 ? "font-bold" : "font-thin"}`}
                  >
                    Wall to wall carpets
                  </span>
                </Tab>
              </TabList>
              <TabPanel className="TilesTab image-gallery">
                <div className="image-item">
                  <img src="./images/home_bg/1.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/1.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/1.jpg" alt="" />
                </div>
              </TabPanel>
              <TabPanel className="RugsTab image-gallery hide">
                <div className="image-item">
                  <img src="./images/home_bg/2.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/2.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/2.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/3.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/3.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/3.jpg" alt="" />
                </div>
              </TabPanel>
              <TabPanel className="WallTab image-gallery hide">
                <div className="image-item">
                  <img src="./images/home_bg/6.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/6.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/6.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/6.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/6.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/6.jpg" alt="" />
                </div>
              </TabPanel>
            </Tabs>
            <Tabs
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
              className={`SPC ${
                subSection === "flooring" ? "block" : "hidden"
              }`}
            >
              <TabList className="controls">
                <Tab className="SPC-item item">
                  <span
                    className={`${tabIndex === 0 ? "font-bold" : "font-thin"}`}
                  >
                    SPC Flooring
                  </span>
                </Tab>
                <Tab className="SPC-item item">
                  <span
                    className={`${tabIndex === 1 ? "font-bold" : "font-thin"}`}
                  >
                    Wooden Flooring
                  </span>
                </Tab>
              </TabList>
              <TabPanel className="SPCTab image-gallery">
                <div className="image-item">
                  <img src="./images/home_bg/1.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/1.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/1.jpg" alt="" />
                </div>
              </TabPanel>
              <TabPanel className="WoodenTab image-gallery hide">
                <div className="image-item">
                  <img src="./images/home_bg/2.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/2.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/2.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/3.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/3.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/3.jpg" alt="" />
                </div>
              </TabPanel>
            </Tabs>
            <Tabs
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
              className={`softFurnishing ${
                subSection === "softFurnishing" ? "block" : "hidden"
              }`}
            >
              <TabList className="controls">
                <Tab className="SPC-item item">
                  <span
                    className={`${tabIndex === 0 ? "font-bold" : "font-thin"}`}
                  >
                    Curtains
                  </span>
                </Tab>
                <Tab className="SPC-item item">
                  <span
                    className={`${tabIndex === 1 ? "font-bold" : "font-thin"}`}
                  >
                    Elegant Sofa Designs
                  </span>
                </Tab>
                <Tab className="SPC-item item">
                  <span
                    className={`${tabIndex === 2 ? "font-bold" : "font-thin"}`}
                  >
                    Upholstery(Sofa Fabrics)
                  </span>
                </Tab>
              </TabList>
              <TabPanel className="SPCTab image-gallery">
                <div className="image-item">
                  <img src="./images/home_bg/1.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/1.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/1.jpg" alt="" />
                </div>
              </TabPanel>
              <TabPanel className="WoodenTab image-gallery hide">
                <div className="image-item">
                  <img src="./images/home_bg/2.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/2.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/2.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/3.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/3.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/3.jpg" alt="" />
                </div>
              </TabPanel>
              <TabPanel className="WoodenTab image-gallery hide">
                <div className="image-item">
                  <img src="./images/home_bg/1.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/2.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/2.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/3.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/1.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/3.jpg" alt="" />
                </div>
              </TabPanel>
            </Tabs>

            <Tabs
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
              className={`${
                selectedParent === "exterior" ? "block" : "hidden"
              } exterior-1 mt-3`}
            >
              <TabList className="controls">
                <Tab className="ACP item">
                  <span
                    className={`${tabIndex === 0 ? "font-bold" : "font-thin"}`}
                  >
                    ACP
                  </span>
                </Tab>
                <Tab className="HPL item">
                  <span
                    className={`${tabIndex === 1 ? "font-bold" : "font-thin"}`}
                  >
                    HPL (Fundermax)
                  </span>
                </Tab>
                <Tab className="PVC item">
                  <span
                    className={`${tabIndex === 2 ? "font-bold" : "font-thin"}`}
                  >
                    PVC Cieling
                  </span>
                </Tab>
                <Tab className="Stone item">
                  <span
                    className={`${tabIndex === 3 ? "font-bold" : "font-thin"}`}
                  >
                    Stone Veneer
                  </span>
                </Tab>
              </TabList>
              <TabPanel className="ACPTab image-gallery">
                <div className="image-item">
                  <img src="./images/home_bg/1.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/1.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/1.jpg" alt="" />
                </div>
              </TabPanel>
              <TabPanel className="HPLTab image-gallery">
                <div className="image-item">
                  <img src="./images/home_bg/3.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/1.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/3.jpg" alt="" />
                </div>
              </TabPanel>
              <TabPanel className="PVCTab image-gallery">
                <div className="image-item">
                  <img src="./images/home_bg/2.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/2.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/2.jpg" alt="" />
                </div>
              </TabPanel>
              <TabPanel className="StoneTab image-gallery">
                <div className="image-item">
                  <img src="./images/home_bg/6.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/5.jpg" alt="" />
                </div>
                <div className="image-item">
                  <img src="./images/home_bg/6.jpg" alt="" />
                </div>
              </TabPanel>
            </Tabs>
            <div
              className={`artificial mb-3 ${
                selectedParent === "artificial" ? "grid" : "hidden"
              } image-gallery`}
            >
              <div className="image-item">
                <img src="./images/home_bg/1.jpg" alt="" />
              </div>
              <div className="image-item">
                <img src="./images/home_bg/2.jpg" alt="" />
              </div>
              <div className="image-item">
                <img src="./images/home_bg/3.jpg" alt="" />
              </div>
              <div className="image-item">
                <img src="./images/home_bg/4.jpeg" alt="" />
              </div>
              <div className="image-item">
                <img src="./images/home_bg/5.jpg" alt="" />
              </div>
              <div className="image-item">
                <img src="./images/home_bg/6.jpg" alt="" />
              </div>
              <div className="image-item">
                <img src="./images/home_bg/1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <section className="flex md:flex-row flex-col justify-between items-center">
          <article className="w-full">
            <h4>Contact Us</h4>
            <form action="">
              <input id="name" placeholder="Enter Name..." />
              <input id="email" type="email" placeholder="Enter Email..." />
              <textarea
                placeholder="Enter a message..."
                id="message"
                rows="3"
                cols="3"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </article>
          <article className="w-full md:text-right">
            <address>
              <span className="my-3 block text-2xl font-bold">
                DreamsVille Interiors
              </span>
              <span className="my-3 block">BM Road</span>
              <span className="my-3 block">Hassan, Karnataka - 573202</span>
            </address>
          </article>
        </section>
      </footer>
    </div>
  );
}

export default App;
