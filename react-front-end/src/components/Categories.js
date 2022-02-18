import { Link } from "react-router-dom";

import "./CategoriesStyle.scss"

export default function Categories() {

  return (

    <section className="containerMain categoriesWrapper">

      <article className="landingPageCategories">
        <Link to="/exercises/back">
          <img src="/back.jpeg" />
          <div className="title topleftSM">Back</div>
        </Link>
      </article>

      <article className="landingPageCategories">
        <Link to="/exercises/cardio">
          <img src="/cardio.jpeg" />
          <div className="title topleftSM">Cardio</div>
        </Link>
      </article>

      <article className="landingPageCategories">
        <Link to="/exercises/chest">
          <img src="/chest.jpeg" />
          <div className="title topleftSM">Chest</div>
        </Link>
      </article>

      <article className="landingPageCategories">
        <Link to="/exercises/lower%20arms">
          <img src="/lower_arm.jpeg" />
          <div className="title topleft">Lower Arms</div>
        </Link>
      </article>

      <article className="landingPageCategories">
        <Link to="/exercises/lower%20legs">
          <img src="/lower_leg.jpeg" />
          <div className="title topleft">Lower Legs</div>
        </Link>
      </article>

      <article className="landingPageCategories">
        <Link to="/exercises/shoulders">
          <img src="/shoulder.jpeg" />
          <div className="title topleft">Shoulders</div>
        </Link>
      </article>

      <article className="landingPageCategories">
        <Link to="/exercises/upper%20arms">
          <img src="/upper_arm.jpeg" />
          <div className="title topleft">Upper Arms</div>
        </Link>
      </article>

      <article className="landingPageCategories">
        <Link to="/exercises/upper%20legs">
          <img src="/upper_leg.jpeg" />
          <div className="title topleft">Upper Legs</div>
        </Link>
      </article>

      <article className="landingPageCategories">
        <Link to="/exercises/waist">
          <img src="/core.jpeg" />
          <div className="title topleftSM">Core</div>
        </Link>
      </article>

    </section>
  )
}
