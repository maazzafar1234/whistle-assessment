import results from "../../data/results.json";
import "./ResultsSection.css";

function ResultsSection() {
  return (
    <section className="results-section">
      <h2 className="results-title">
        Results You'll Love
      </h2>

      <div className="results-grid">
        {results.map((item) => (
          <div className="result-card" key={item.id}>
            <div className="image-wrapper">
              <div className="image-box">
                <img
                  src={item.beforeImage}
                  alt="before"
                />
                <p>Before</p>
              </div>

              <div className="image-box">
                <img
                  src={item.afterImage}
                  alt="after"
                />
                <p>After</p>
              </div>
            </div>

            <div className="card-info">
              <div className="info-row">
                <span>Concern</span>
                <span>{item.concern}</span>
              </div>

              <div className="info-row">
                <span>Treatment Duration</span>
                <span>{item.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ResultsSection;