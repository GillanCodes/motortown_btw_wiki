import { Card } from "../../components/Card/Card";
import "./Home.scss";

export default function Home() {
  return (
    <div className="container home__container">
      <h1>Home</h1>

      <div className="cards">
        <div className="card-container">
          <Card title="Vehicules" link="/vehicules" picture="/images/cards/temp.png" />
          <Card title="Map" link="/map" picture="/images/cards/temp.png" />
          <Card title="Goods" link="/goods" picture="/images/cards/temp.png" />
        </div>
      </div>
    </div>
  )
}

