import { useEffect, useState } from "react";
import "./ComparisonTable.css";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import { FiX } from "react-icons/fi";

function ComparisonTable() {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [openRow, setOpenRow] = useState(null);

  useEffect(() => {
    fetchComparisonData();
  }, []);

  const fetchComparisonData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=1");

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      await response.json();

      setFeatures([
        {
          id: 1,
          feature: "Easy to complex cases",
          whistle: "Yes, mild to complex",
          other: "No, only mild to moderate",
          details:
            "Whistle aligners can treat both simple and complex alignment cases.",
        },
        {
          id: 2,
          feature: "Clear-cut Pricing",
          whistle: true,
          other: false,
          details: "Transparent pricing with no hidden costs.",
        },
        {
          id: 3,
          feature: "Aligner Change",
          whistle: "Every 10 days",
          other: "Every 2 weeks",
          details:
            "Faster aligner replacement cycle improves treatment progression.",
        },
        {
          id: 4,
          feature: "Clinical Partnership",
          whistle: true,
          other: false,
          details: "Treatment supervised by experienced orthodontists.",
        },
        {
          id: 5,
          feature: "Movement Between Cities",
          whistle: true,
          other: false,
          details: "Continue treatment even after relocating.",
        },
        {
          id: 6,
          feature: "Complimentary Teeth Scaling",
          whistle: true,
          other: false,
          details: "Includes free professional teeth scaling.",
        },
      ]);
    } catch (err) {
      setError("Unable to load comparison data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleRow = (id) => {
    setOpenRow(openRow === id ? null : id);
  };

  if (loading) {
    return (
      <section className="comparison-section">
        <div className="loading">Loading comparison...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="comparison-section">
        <div className="error">{error}</div>
      </section>
    );
  }

  return (
    <section className="comparison-section">
      <h2 className="comparison-title">What sets Whistle apart?</h2>

      <div className="comparison-card">
        <div className="comparison-header">
          <div className="feature-col">Features</div>

          <div className="whistle-col">
            <img src="/images/image 1.png" alt="Whistle" />
          </div>

          <div className="other-col">Other Brands</div>
        </div>

        {features.map((item) => (
          <div key={item.id}>
            <div className="comparison-row" onClick={() => toggleRow(item.id)}>
              <div className="feature-name">
                <span>{item.feature}</span>

                <span className="arrow">
                  {openRow === item.id ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </div>

              <div className="whistle-value">
                {typeof item.whistle === "boolean" ? (
                  item.whistle ? (
                    <span className="check">
                      <FiCheck />
                    </span>
                  ) : (
                    <span className="cross">
                      <FiX />
                    </span>
                  )
                ) : (
                  item.whistle
                )}
              </div>

              <div className="other-value">
                {typeof item.other === "boolean" ? (
                  item.other ? (
                    <span className="check">✓</span>
                  ) : (
                    <span className="cross">✕</span>
                  )
                ) : (
                  item.other
                )}
              </div>
            </div>

            {openRow === item.id && (
              <div className="row-details">{item.details}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ComparisonTable;
