import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./App.scss";
import Commitment from "./svgs/Commitment";
import Relationship from "./svgs/Relationship";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Services from "./svgs/Services";
import Vision from "./svgs/Vision";
import L from "leaflet";

function App() {
  const [selectedParent, setSelectedParent] = useState("");
  const [subSection, setSubSection] = useState("");
  const [tabIndex, setTabIndex] = useState(0);

  const imagePaths = {
    interior: "/images/interiors/",
    exterior: "/images/exterior",
    artificial: "/images/artificial",
  };

  const sectionNames = {
    floorCarpet: "floor Carpets",
    flooring: "flooring",
    softFurnishing: "soft furnishing",
  };

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
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".img-grid", {
      scrollTrigger: {
        trigger: ".img-grid",
        start: "top center",
      },
      css: {
        opacity: 1,
      },
    });
    const mapItem = document.querySelector(".map");
    const map = L.map(mapItem).setView([13.0031019, 76.1079135], 13);

    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.marker([13.0031019, 76.1079135]).addTo(map);
  }, []);
  const ProductNames = {
    tiles: [
      "Carpet Tiles - Textures",
      "Floor Carpet Planks",
      "Floor Carpet Strips",
      "Floor Carpet Tiles - Palin",
      "Floor Carpet Tiles",
      "Nylon - Floor carpets",
      "Plain - Floor Carpet planks",
      "Plain - Floor Carpet Tiles",
    ],
    rugs: [
      "Designer Floor Carpet - Feather textured",
      "Designer Floor Carpet - Geometrical designs",
      "Designer Floor Carpets",
      "Floor Carpet - Rugs (Abstract Design)",
      "Floor Carpet - Rugs (Geometrical designs)",
    ],
    wall: [
      "Wall to Wall Abstract design",
      "Wall to Wall Carpet (Blue texture)",
      "Wall to Wall Carpet Elegant Designs",
      "Wall to Wall designer Carpet",
      "Wall to Wall Palin Carpets",
      "Wall to Wall plain Carpet - Lead Grey",
      "Wall to Wall textured Carpet",
    ],
    SPC: [
      "SPC Flooring - Classic Wood Patterns",
      "SPC Flooring - Grey Shades.jpg",
      "SPC Flooring - Oak Pattern",
      "SPC Flooring - Wood textures",
      "SPC Flooring - Wood Textures",
    ],
    Wooden: [
      "American Walnut",
      "Solid Wood - Walnut Series",
      "Solid Wood flooring",
      "Solid Wooden Flooring - Burmese Teak",
    ],
    curtains: [
      "all dark",
      "amara-1",
      "amara-2",
      "Ambience-1",
      "Ambience-2",
      "Ambience-3",
      "Antheia-1",
      "Antheia-2",
      "hawaii-1",
      "hawaii-2",
      "hawaii-3",
      "Mexico-1",
      "Mexico-2",
      "texas-1",
      "texas-2",
    ],
    PVC: [
      "Vox - Soffit (PVC Ceiling) White Shade",
      "Vox - Soffit (PVC Ceiling) Wood Textures",
      "Vox - Soffit (PVC Ceiling)",
      "Vox Soffit - Golden Oak",
      "Vox Soffit - Grey PVC Ceiling",
      "Vox Soffit - Wood Grains",
    ],
    artificial: [
      "Artificial Garden for commercial spaces",
      "Artificial Garden",
      "Artificial Grass - PVC Grass",
      "Artificial Grass",
      "Artificial Grass",
      "Artificial Interior wall Garden",
      "Artificial Vertical wall Garden",
      "Artificial wall Gardens",
      "images (27) - 2021-11-04T185630.654",
      "images (27) - 2021-11-04T185645.195",
      "Unique Artificial wall Garden",
    ],
  };
  return (
    <div className="App">
      <header>
        <span className="logo">LOGO</span>
      </header>

      <main>
        <div className="hero">
          <div className="wrapper">
            <div className="swiper-slide section section-1">
              <div className="img-overlay">
                <img src="/images/home_bg/overlays/4.webp" alt="" />
              </div>
              <div className="content">
                <div className="main-img">
                  <img src="/images/home_bg/5.jpg" alt="" />
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
                  <a href="/#products" className="button-link">
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
              <img src="/images/home_bg/4.jpeg" alt="About the Company" />
            </div>
          </div>
        </section>
        <section>
          <aside>
            <h4>Our core values</h4>
          </aside>
          <div className="services">
            <div className="service">
              <Relationship />
              <span className="block mt-3">Commitment</span>
              <p>
                We are committed to delivering inspired designs that fulfill
                client expectations through collaboration and exceptional
                service
              </p>
            </div>
            <div className="service">
              <Vision />
              <span className="block mt-3">Vision</span>
              <p>
                To provide best solution for customers who look for originality
                and unparalleled quality, through our continuous effort in
                innovation and creativity.
              </p>
            </div>
            <div className="service">
              <Commitment />
              <span className="block mt-3">Customer Relationship</span>
              <p>
                We always believe that customers help to shape Dreamsville,Thus
                if you ever need our help or advice, we are just a call away
              </p>
            </div>
            <div className="service">
              <Services />
              <span className="block mt-3">Service and Quality</span>
              <p>
                As a service provider of office interior design furniture, We
                always provide strong after-sales services and maintain a strong
                relationship with our clients
              </p>
            </div>
          </div>
        </section>
        <aside className="products">
          <h4>Choose from our wide range products!</h4>
          <ul className="breadcrumbs">
            {selectedParent.length > 2 && (
              <li className="cursor-pointer" onClick={navigateToHome}>
                Home
              </li>
            )}
            {selectedParent.length > 2 && <li>{">"}</li>}
            <li id="products" className="capitalize" onClick={showSubOptions}>
              {selectedParent}
            </li>
            {subSection.length > 2 && <li>{">"}</li>}
            <li className="capitalize">{sectionNames[subSection]}</li>
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
                <p>
                  Interior design is the art and science of enhancing the
                  interior of a building to achieve a healthier and more
                  aesthetically pleasing environment for the people using the
                  space.
                </p>
              </div>
              <img src="/images/home_bg/3.jpg" alt="Interiors" />
            </div>

            <div
              className="category exterior w-full"
              onClick={() => setSelectedParent("exterior")}
            >
              <div className="text">
                <span className="uppercase text-xs font-bold">Exteriors</span>
                <p>
                  Exterior design includes your home's size and shape, how it
                  fits into the surrounding neighbourhood and streetscape, and
                  the impact it has on its site.
                </p>
              </div>
              <img src="/images/home_bg/2.jpg" alt="Exteriors" />
            </div>

            <div
              className="category artifical"
              onClick={() => setSelectedParent("artificial")}
            >
              <div className="text">
                <span className="uppercase text-xs font-bold">
                  Artificial and Vertical Gardening
                </span>
                <p>
                  Artificial turf is a surface of synthetic fibers made to look
                  like natural grass. It is most often used in arenas for sports
                  that were originally or are normally played on grass.
                </p>
              </div>
              <img src="/images/home_bg/1.jpg" alt="Artificial" />
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
                  <p>
                    A carpet is a textile floor covering typically consisting of
                    an upper layer of pile attached to a backing.
                  </p>
                </div>
                <img
                  src={`${imagePaths.interior}/floorCarpets/tiles/1.jpg`}
                  alt="Artificial"
                />
              </div>

              <div
                onClick={() => setSubSection("flooring")}
                className="category Flooring interior-1"
              >
                <div className="text">
                  <span className={`sub-category`}>Flooring</span>
                  <p>
                    {" "}
                    Flooring is the general term for a permanent covering of a
                    floor, or for the work of installing such a floor covering.
                    Floor covering is a term to generically describe any finish
                    material applied over a floor structure to provide a walking
                    surface.
                  </p>
                </div>
                <img
                  src={`${imagePaths.interior}/flooring/SPC/${1}.jpg`}
                  alt="Artificial"
                />
              </div>

              <div
                className="category Soft interior-1"
                onClick={() => setSubSection("softFurnishing")}
              >
                <div className="text">
                  <span className="sub-category"> Soft Furnishing</span>
                  <p>
                    {" "}
                    Soft furnishing means all furnishing elements that are made
                    of soft material. These complement not only the other
                    furnishing elements but also the architecture of a building.
                  </p>
                </div>
                <img
                  src={`${imagePaths.interior}/softFurnishing/Sofa/${1}.jpeg`}
                  alt="Artificial"
                />
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
                    Tiles
                  </span>
                </Tab>
                <Tab className="Rugs Tiles-item item">
                  <span
                    className={`${tabIndex === 1 ? "font-bold" : "font-thin"}`}
                  >
                    Rugs
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
                {[...new Array(8).keys()].map((item) => (
                  <div key={item + 1} className="image-item">
                    <img
                      src={`${imagePaths.interior}/floorCarpets/tiles/${
                        item + 1
                      }.jpg`}
                      alt=""
                    />
                    <h4>{ProductNames["tiles"][item]}</h4>
                  </div>
                ))}
              </TabPanel>
              <TabPanel className="RugsTab image-gallery hide">
                {[...new Array(5).keys()].map((item) => (
                  <div key={item} className="image-item">
                    <img
                      src={`${imagePaths.interior}/floorCarpets/rugs/${
                        item + 1
                      }.jpg`}
                      alt=""
                    />
                    <h4>{ProductNames["rugs"][item]}</h4>
                  </div>
                ))}
              </TabPanel>
              <TabPanel className="WallTab image-gallery hide">
                {[...new Array(ProductNames["wall"].length).keys()].map(
                  (item) => (
                    <div key={item} className="image-item">
                      <img
                        src={`${imagePaths.interior}/floorCarpets/wall/${
                          item + 1
                        }.jpg`}
                        alt=""
                      />
                      <h4>{ProductNames["wall"][item]}</h4>
                    </div>
                  )
                )}
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
                {[...new Array(5).keys()].map((item) => (
                  <div key={item} className="image-item">
                    <img
                      src={`${imagePaths.interior}/flooring/SPC/${
                        item + 1
                      }.jpg`}
                      alt=""
                    />
                    <h4>{ProductNames["SPC"][item]}</h4>
                  </div>
                ))}
              </TabPanel>
              <TabPanel className="WoodenTab image-gallery hide">
                {[...new Array(4).keys()].map((item) => (
                  <div key={item} className="image-item">
                    <img
                      src={`${imagePaths.interior}/flooring/WoodenFlooring/${
                        item + 1
                      }.jpg`}
                      alt=""
                    />
                    <h4>{ProductNames["Wooden"][item]}</h4>
                  </div>
                ))}
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
                {[...new Array(15).keys()].map((item) => (
                  <div className="image-item" key={item}>
                    <img
                      src={`${imagePaths.interior}/softFurnishing/Curtains/${
                        item + 1
                      }.jpg`}
                      alt=""
                    />
                    <h4>{ProductNames["curtains"][item]}</h4>
                  </div>
                ))}
              </TabPanel>
              <TabPanel className="WoodenTab image-gallery hide">
                {[...new Array(11).keys()].map((item) => (
                  <div className="image-item" key={item}>
                    <img
                      src={`${imagePaths.interior}/softFurnishing/Sofa/${
                        item + 1
                      }.jpeg`}
                      alt=""
                    />
                  </div>
                ))}
              </TabPanel>
              <TabPanel className="WoodenTab image-gallery hide">
                {[...new Array(8).keys()].map((item) => (
                  <div className="image-item" key={item}>
                    <img
                      src={`${imagePaths.interior}/softFurnishing/Upholstery/${
                        item + 1
                      }.jpg`}
                      alt=""
                    />
                  </div>
                ))}
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
                    PVC Ceiling
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
              <TabPanel className="ACPTab">
                <p className="text-center">
                  Aluminium Composite Panel or ACP sheet are new-age material
                  that's used for building front elevation (facades), interiors,
                  signage, modular kitchen and many more.
                </p>
                <div className="image-gallery">
                  {[...new Array(0).keys()].map((item) => (
                    <div className="image-item">
                      <img
                        src={`${imagePaths.exterior}/ACP/${item + 1}.jpg`}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel className="HPLTab">
                <p className="text-center">
                  Fundermax HPL panels are 100% weather proof and are available
                  in various colours and textures raging from exotic wood decors
                  to stone finishes to natural look.
                </p>
                <div className="image-gallery">
                  {[...new Array(4).keys()].map((item) => (
                    <div className="image-item" key={item}>
                      <img
                        src={`${imagePaths.exterior}/HPL/${item + 1}.jpeg`}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel className="PVCTab">
                <p className="text-center">
                  PVC panels are often used as a cladding material, in the
                  ceilings of residential and commercial buildings. PVC is
                  strong, yet lightweight and since it is factory-manufactured,
                  the finish is seamless and can be built in various designs,
                  colours, sizes and lengths.
                </p>
                <div className="image-gallery">
                  {[...new Array(6).keys()].map((item) => (
                    <div className="image-item" key={item}>
                      <img
                        src={`${imagePaths.exterior}/cieling/${item + 1}.jpg`}
                        alt=""
                      />
                      <h4>{ProductNames["PVC"][item]}</h4>
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel className="StoneVeneerTab">
                <p className="text-center">
                  Stone veneer is a thin layer of any stone used as decorative
                  facing material that is not meant to be load bearing. Stone
                  cladding is a stone veneer, or simulated stone, applied to a
                  building or other structure made of a material other than
                  stone
                </p>
                {[...new Array(0).keys()].map((item) => (
                  <div className="image-item" key={item}>
                    <img
                      src={`${imagePaths.exterior}/STONEVENEER/${item + 1}.jpg`}
                      alt=""
                    />
                  </div>
                ))}
              </TabPanel>
            </Tabs>
            <div
              className={`artificial mb-3 ${
                selectedParent === "artificial" ? "grid" : "hidden"
              } image-gallery`}
            >
              {[...new Array(11).keys()].map((item) => (
                <div className="image-item" key={item}>
                  <img
                    src={`${imagePaths.artificial}/${item + 1}.jpg`}
                    alt=""
                  />
                  <h4>{ProductNames["artificial"][item]}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <section className="flex md:flex-row flex-col mt-3 md:mt-0 justify-between items-center">
          <article className="w-full">
            <h4>Contact Us</h4>
            <form action="">
              <input id="name" placeholder="Enter Name..." />
              <input id="email" type="email" placeholder="Enter Email..." />
              <select id="category">
                <option selected disabled>
                  Please select a Category
                </option>
                <option value="Interior">Interior</option>
                <option value="Exterior">Exterior</option>
                <option value="Artificial">
                  Artificial And Vertical Gardening
                </option>
              </select>
              <textarea
                placeholder="Enter the details of you query..."
                id="message"
                rows="3"
                cols="3"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </article>
          <article className="w-full md:text-right">
            <div className="map"></div>
            <address>
              <span>Sri Nidhi Towers, Bangalore - Mangalore Rd,</span>
              <span>opposite Jnanakshi Convention Hall,</span>
              <span> Hassan Rural, Karnataka 573201</span>
            </address>
            <div className="contact">
              <a href="tel:7829360644">
                <span>Phone:</span> 7829360644
              </a>
              <a href="mailto:dreamsvilleinteriors">
                <span>Email:</span> dreamsvilleinteriors
              </a>
            </div>
          </article>
        </section>
      </footer>
    </div>
  );
}

export default App;
