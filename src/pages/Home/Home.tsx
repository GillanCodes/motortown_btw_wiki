import { Card } from "../../components/Card/Card";
import "./Home.scss";

export default function Home() {
  return (
    <div className="container home__container">
      <h1>Home</h1>

      <div className="cards">
        <div className="card-container">
          <Card title="Vehicules" link="/vehicules" />
          <Card title="Map" link="/map" />
          <Card title="Goods" link="/goods" />
        </div>
      </div>

    </div>
  )
}

