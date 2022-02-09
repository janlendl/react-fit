import "./CategoriesStyle.scss";

export default function categories({}) {
  return (
    <div className="containerMain categoriesWrapper">
      <div className="workoutCategories">
        <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7.png" />
        <div class="title">Back</div>
      </div>
      <div className="workoutCategories">Cardio</div>
      <div className="workoutCategories">Chest</div>
      <div className="workoutCategories">Lower Arms</div>
      <div className="workoutCategories">Lower Legs</div>
      <div className="workoutCategories">Shoulders</div>
      <div className="workoutCategories">Upper Arms</div>
      <div className="workoutCategories">Upper Legs</div>
      <div className="workoutCategories">Core</div>
    </div>
  );
}
