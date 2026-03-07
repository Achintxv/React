import React from "react";
import { data } from "../restApi.json";

function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">Popular Dishes</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            odit omnis doloribus iure placeat asperiores aliquid numquam sed
            nobis ex.
          </p>
        </div>
        <div className="dishes_container">
          {data[0].dishes.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Menu;
