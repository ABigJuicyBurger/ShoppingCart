import { ProductProps } from "../types/ProductTypes";
import creativeWriterPhoto from "../assets/CreativeWriter.png";

export default function CreativeWriter({ preview = false }: ProductProps) {
  const ID = "CreativeWriter";
  const skills = ["Creative Writing", "Storytelling", "Plot Structure"];
  const price = 399;
  const description =
    "Our Creative Writer AI companion is your personal writing partner, helping you craft compelling stories, develop rich characters, and overcome writer's block. It provides creative suggestions, plot ideas, and writing prompts while assisting with story structure and editing to enhance your creative writing journey.";
  const avatarUrl = creativeWriterPhoto;

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
