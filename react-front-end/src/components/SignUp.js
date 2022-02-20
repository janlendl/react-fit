
import "./CategoriesStyle.scss"

export default function SignUp() {

  return (
    <>
    <section className="containerMain categoriesWrapper">

      <article className="landingPageCategories">
          <img src="/back.jpeg" />
          <div className="title topleftSM">Back</div> 
      </article>

      <article className="landingPageCategories">  
          <img src="/cardio.jpeg" />
          <div className="title topleftSM">Cardio</div>
      </article>

      <article className="landingPageCategories">
          <img src="/chest.jpeg" />
          <div className="title topleftSM">Chest</div>
      </article>

      <article className="landingPageCategories">
          <img src="/lower_arm.jpeg" />
          <div className="title topleft">Lower Arms</div>
      </article>

      <article className="landingPageCategories">
          <img src="/lower_leg.jpeg" />
          <div className="title topleft">Lower Legs</div>
      </article>

      <article className="landingPageCategories">
          <img src="/shoulder.jpeg" />
          <div className="title topleft">Shoulders</div>
      </article>

      <article className="landingPageCategories">
          <img src="/upper_arm.jpeg" />
          <div className="title topleft">Upper Arms</div>
      </article>

      <article className="landingPageCategories">
          <img src="/upper_leg.jpeg" />
          <div className="title topleft">Upper Legs</div>
      </article>

      <article className="landingPageCategories">
          <img src="/core.jpeg" />
          <div className="title topleftSM">Core</div>
      </article>

      <div className="d-flex"><button className="btn btn-lg">GET STARTED</button></div>
    </section>

    
    </> 
  )
}
