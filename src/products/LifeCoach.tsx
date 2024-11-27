import {ProductProps} from "../types/ProductTypes";

export default function LifeCoach(preview=false): ProductProps {
    const ID = "Life Coach";
    const skills = ["Time management", "Goal setting", "Stress management"];
    const price = 399;
    const description = "Our Life Coach is an AI-powered tool that helps individuals set and achieve their goals, manage their time effectively, and reduce stress. It provides personalized guidance, motivation, and accountability to help individuals live a more fulfilling life.";
    const avatarUrl = "https://example.com/avatar.png";


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
    <div>
      <h3>{ID}</h3>
      <p>{description}</p>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill: string, index: number) => (
            <li key={index}>
                <strong>{skill}</strong>
            </li>
        ))}
        </ul>
        <h2>{/*Avatar*/}</h2>
        <a href={avatarUrl}></a>
        <h2>${price}</h2>
        </div>
)
}
