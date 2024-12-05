import codingCompanionPhoto from "../assets/CodingCompanion.png";
import "../styles/item.css";

const ID: string = "Coding Companion";

export default function CodingCompanion({
  preview = false,
  ID = "Coding Companion",
  skills = ["Python", "JavaScript", "HTML"],
  price = 999,
  description = "Our Coding Companion is an AI-powered tool that helps developers write code faster and more efficiently. It provides real-time suggestions, code snippets, and error checking to help developers write better code.",
}: {
  ID?: string;
  skills?: string[];
  price?: number;
  description?: string;
  preview?: boolean;
}) {
  // const skills: string[] = ["Python", "JavaScript", "HTML"];
  // const price: number = 999;
  // const description: string =
  //   "Our Coding Companion is an AI-powered tool that helps developers write code faster and more efficiently. It provides real-time suggestions, code snippets, and error checking to help developers write better code.";
  const avatarUrl = codingCompanionPhoto;

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
