import { Card } from "../../components/Card/Card";
import "./Home.scss";

export default function Home() {
  return (
    <div className="container home__container">
      <h1>Home</h1>

      <div className="cards">
        <div className="card-container">
          <Card title="Vehicules" link="/vehicules" picture="/images/HighresScreenshot00085_Reduced.png" />
          <Card title="Map" link="/map" picture="/images/HighresScreenshot00085_Reduced.png" />
          <Card title="Goods" link="/goods" picture="/images/HighresScreenshot00085_Reduced.png" />
        </div>
      </div>

    </div>
  )
}

