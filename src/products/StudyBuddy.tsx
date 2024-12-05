import { ProductProps } from "../types/ProductTypes";
import studyBuddyPhoto from "../assets/StudyBuddy.png";

function addTwoNumbers(num1: number, num2: number): number {
  return num1 + num2;
}
const ID: string = "Study Buddy";
const SKILLS: string[] = ["Note taking", "Time management", "Organization"];
const PRICE: number = 49.99;
const DESCRIPTION: string =
  "Our Study Buddy is an AI-powered tool that helps students organize their study materials, manage their time, and stay on top of their assignments. It provides reminders, study guides, and flashcards to help students learn more effectively.";

export default function StudyBuddy({
  name = ID,
  skills = SKILLS,
  price = PRICE,
  description = DESCRIPTION,
  preview = false,
}: ProductProps): React.JSX.Element {
  const avatarUrl = studyBuddyPhoto;

  if (preview) {
    console.log("Preview mode is on");
    return (
      <div>
        <h3>{ID}</h3>
        <img src={avatarUrl} alt="Avatar" />
        <h2>${price}</h2>
      </div>
    );
  }

  return (
    <div className="productDetails">
      <h3>{ID}</h3>
      <img src={avatarUrl} alt="Avatar" />
      <p>{description}</p>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill: string, index: number) => (
          <li key={index}>
            <strong>{skill}</strong>
          </li>
        ))}
      </ul>
      <h2>${price}</h2>
    </div>
  );
}
