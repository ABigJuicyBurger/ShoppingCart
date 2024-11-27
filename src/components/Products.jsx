import CodingCompanion from "../products/CodingCompanion.tsx";
import LifeCoach from "../products/LifeCoach.tsx";
import StudyBuddy from "../products/StudyBuddy.tsx";

export default function Products() {
  return (
    <div>
      <h2>Products list</h2>
      <CodingCompanion />
      {/* <CreativeWritingPartner /> */}
      <StudyBuddy />
      <LifeCoach />
      {/* <EntertainmentAI /> */}
    </div>
  );
}
