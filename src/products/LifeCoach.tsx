import { ProductProps } from "../types/ProductTypes";
import lifeCoachPhoto from "../assets/LifeCoach.png";

export default function LifeCoach({
  preview = false,
  ID = "Life Coach",
  skills = ["Time management", "Goal setting", "Stress management"],
  price = 699,
  description = "Our Life Coach is an AI-powered tool that helps individuals set and achieve their goals, manage their time effectively, and reduce stress. It provides personalized guidance, motivation, and accountability to help individuals live a more fulfilling life.",
  avatarUrl = lifeCoachPhoto,
}: ProductProps) {
  // const ID = "Life Coach";
  // const skills = ["Time management", "Goal setting", "Stress management"];
  // const price = 699;
  // const description: string =
  //   "Our Life Coach is an AI-powered tool that helps individuals set and achieve their goals, manage their time effectively, and reduce stress. It provides personalized guidance, motivation, and accountability to help individuals live a more fulfilling life.";
  // const avatarUrl = lifeCoachPhoto;

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
