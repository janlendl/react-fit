
import "./SignUp.scss";

export default function SignUp() {

  return (
    <>
      <section>
       
        
        <div className="Slogan d-flex flex-column align-items-center">
          <h1 className="Signup_Slogan">WORK</h1>
            <br></br>
          <h1 className="Signup_Slogan">SWEAT</h1> 
          <br></br>
          <h1 className="Signup_Slogan">ACHIEVE</h1>
          <br></br>
          <button className="btn btn-lg border-0 text_color p-4 fw-bold mt-4">SIGN ME UP!</button>
        </div>
        <div className=" d-flex SignUp_shadow Slogan_pic">
        <img src="/cover2.jpeg" alt="" className="SignUpTopImg"/>
        </div>
       
        <div className="categoriesWrapper padding-50 purpleBckgnd">
          <div className="signCategories">
            <img src="/back.jpeg" alt="" />
            <div className="title topleftSM">Back</div>
          </div>

          <div className="signCategories">
            <img src="/cardio.jpeg" alt=""/>
            <div className="title topleftSM">Cardio</div>
          </div>

          <div className="signCategories">
            <img src="/chest.jpeg" alt=""/>
            <div className="title topleftSM">Chest</div>
          </div>

          <div className="signCategories">
            <img src="/lower_arm.jpeg" alt=""/>
            <div className="title topleft">Lower Arms</div>
          </div>

          <div className="signCategories">
            <img src="/lower_leg.jpeg" alt=""/>
            <div className="title topleft">Lower Legs</div>
          </div>

          <div className="signCategories">
            <img src="/shoulder.jpeg" alt=""/>
            <div className="title topleft">Shoulders</div>
          </div>

          <div className="signCategories">
            <img src="/upper_arm.jpeg" alt=""/>
            <div className="title topleft">Upper Arms</div>
          </div>

          <div className="signCategories">
            <img src="/upper_leg.jpeg" alt=""/>
            <div className="title topleft">Upper Legs</div>
          </div>

          <div className="signCategories">
            <img src="/core.jpeg" alt=""/>
            <div className="title topleftSM">Core</div>
          </div>
          <div className="signCategories col-12 ">
            <button className="btn btn-lg border-0 text_color p-4 fw-bold">GET STARTED</button>
          </div>
        </div>
      

      </section>
     

    </>
  );
}
