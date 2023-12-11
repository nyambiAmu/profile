import experienceData from "../experienceData";

function ExperienceCards() {
  return (
    <div className="cardMain">

      {experienceData.map((data) => (
        <div class="cards">
          <div class="row no-gutters">
            <div class="card-info">
              <p class="card-text"><small class="text-muted date">{data.date}</small></p>
              <h5 class="card-title designation">{data.designation}</h5>
              <p className="location">{data.location}</p>

            </div>
            <div class="col-md-8">
              <div class="card-body">

                <p class="card-text description">{data.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}

export default ExperienceCards;
