import educationData from "../educationData";

function EducationCards() {
  return (
    <div className="cardMain">
          <h2 className="edu-heading">Education</h2>
      {educationData.map((data) => (
        <div class="card  cards">
        <div class="row no-gutters">
          <div class=" card-info">
            <p class="card-text"><small class="text-muted edu-date">{data.date}</small></p>
            <h5 class="card-title designation">{data.institution}</h5>
            <p className="location">{data.location}</p>
            <p className="location">{data.course}</p>
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
  )
}

export default EducationCards