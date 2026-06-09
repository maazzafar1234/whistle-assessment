import Navbar from "./components/Navbar/Navbar";
import ResultsSection from "./components/ResultsSection/ResultsSection";
import ComparisonTable from "./components/ComparisonTable/ComparisonTable";
import FAQ from "./components/FAQ/FAQ";
import OfferBar from "./components/OfferBar/OfferBar";

function App() {
  return (
    <>
      <Navbar />
      <OfferBar />
      <ResultsSection />
      <ComparisonTable />
      <FAQ />
    </>
  );
}

export default App;