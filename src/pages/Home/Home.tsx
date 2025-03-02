import { Card } from "../../components/Card/Card";
import "./Home.scss";

export default function Home() {
  return (
    <div className="container home__container">

      <div className="home__head">
        <img src="/images/logo.png" alt="Motor Town: Behind The Wheel" className="home__head__main-logo" />
        <h1 className="home__head__title">MotorTown Wiki</h1>
      </div>

      <div className="home__info">
        <p><a href="https://motor-town.com/" target="_blank" id="official_website">MotorTown: Behind the wheel</a> is an Open World Driving Simulator with Proper Tire Physics</p><br />
        <p>The game was released on December 21th, 2021.</p> <a href="https://store.steampowered.com/app/1369670/Motor_Town_Behind_The_Wheel/" target="_blank" className="button">Buy it on Steam</a>
      </div>


      <div className="cards">
        <div className="card-container">
          <Card title="Vehicles" link="/vehicles" picture="/images/dev/image_13.png" />
          <Card title="Map" link="/map" picture="/images/dev/image_22.png" />
          <Card title="Goods" link="/goods" picture="/images/dev/image_7.png" />
        </div>
      </div>
    </div>
  )
}

