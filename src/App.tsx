import "./App.scss";

import Commitment from "./svgs/Commitment";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import L from "leaflet";
import Relationship from "./svgs/Relationship";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Services from "./svgs/Services";
import Vision from "./svgs/Vision";
import { gsap } from "gsap";
import { useEffect } from "react";

function App() {
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
    if (mapItem) {
      const map = L.map(mapItem as HTMLElement).setView(
        [13.0031019, 76.1101022],
        13
      );

      L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      L.marker([13.0031019, 76.1101022]).addTo(map);
    }
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
        <span className="logo">
          <img className="w-10" src="/logo512.png" alt="Logo" />
        </span>
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
                  <img src="/images/home_bg/3.jpg" alt="" />
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
                  <a href="#products" className="button-link">
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
        <aside id="products" className="products">
          <h4>Choose from our wide range products!</h4>
        </aside>
        <ImageGrid />
      </main>
      <footer>
        <section className="flex md:flex-row flex-col mt-3 md:mt-0 justify-between items-center">
          <article className="w-full">
            <h4>Contact Us</h4>
            <form action="mailto:nishchitrao5@gmail.com">
              <input id="name" placeholder="Enter Name..." />
              <input id="email" type="email" placeholder="Enter Email..." />
              <select name="category" id="category">
                <option disabled>Please select a Category</option>
                <option value="Interior">Interior</option>
                <option value="Exterior">Exterior</option>
                <option value="Artificial">
                  Artificial And Vertical Gardening
                </option>
              </select>
              <textarea
                name="message"
                placeholder="Enter the details of you query..."
                id="message"
                rows={3}
                cols={3}
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
