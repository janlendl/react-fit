import { Link } from "react-router-dom";

import "./CategoriesStyle.scss"

export default function Categories() {

  const bodyPartCategory = [{
    title: 'back',
    image: '/back.jpeg'
  },
  {
    title: 'back',
    image: '/back.jpeg'
  },
  {
    title: 'back',
    image: '/back.jpeg'
  }
  ]
  // const allBodyParts = ["back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"]


  return (

    <section className="containerMain categoriesWrapper">


      {bodyPartCategory.map((item) => {
return (<article className="landingPageCategories">
          <Link to="/exercises/back">
            <img src={item.image} />
            <div className="title">{item.title}</div>
          </Link>
        </article>)
      })}


      {/* <article className="landingPageCategories">
        <Link to="/exercises/back">
          <img src="/back.jpeg" />
          <div className="title">Back</div>
        </Link>
      </article>

      <article className="landingPageCategories">
        <Link to="/exercises/cardio">
          <img src="/cardio.jpeg" />
          <div className="title">Cardio</div>
        </Link>
      </article>

      <article className="landingPageCategories">
        <Link to="/exercises/chest">
          <img src="/chest.jpeg" />
          <div className="title">Chest</div>
        </Link>
      </article>

      <article className="landingPageCategories">
        <Link to="/exercises/lower%20arms">
          <img src="/lower_arm.jpeg" />
          <div className="title">Lower Arms</div>
        </Link>
      </article>

      <article className="landingPageCategories">
        <Link to="/exercises/lower%20legs">
          <img src="/lower_leg.jpeg" />
          <div className="title">Lower Legs</div>
        </Link>
      </article>

      <article className="landingPageCategories">
        <Link to="/exercises/shoulders">
          <img src="/shoulder.jpeg" />
          <div className="title">Shoulders</div>
        </Link>
      </article>

      <article className="landingPageCategories">
        <Link to="/exercises/upper%20arms">
          <img src="/upper_arm.jpeg" />
          <div className="title">Upper Arms</div>
        </Link>
      </article>

      <article className="landingPageCategories">
        <Link to="/exercises/upper%20legs">
          <img src="/upper_leg.jpeg" />
          <div className="title">Upper Legs</div>
        </Link>
      </article>

      <article className="landingPageCategories">
        <Link to="/exercises/waist">
          <img src="/core.jpeg" />
          <div className="title">Core</div>
        </Link>
      </article> */}

    </section>
  )
}
