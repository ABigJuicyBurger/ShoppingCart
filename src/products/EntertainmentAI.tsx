import { ProductProps } from "../types/ProductTypes";
import entertainmentAIPhoto from "../assets/EntertainmentAI.png";

export default function Creativewriter({ preview = false }): ProductProps {
  const ID = "EntertainmentAI";
  const skills = [
    "Entertainment Planning",
    "Interactive Games",
    "Virtual Events",
    "Social Engagement",
  ];
  const price = 299;
  const description =
    "Our Entertainment AI companion is your personal fun coordinator, bringing joy and excitement to your daily life. From organizing virtual game nights to suggesting personalized entertainment options, it creates engaging experiences, hosts interactive games, and helps coordinate social activities. Whether you're looking for solo entertainment or group activities, it ensures you never have a dull moment.";
  const avatarUrl = entertainmentAIPhoto;

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
