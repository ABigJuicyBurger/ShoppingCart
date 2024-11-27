import {ProductProps} from "../types/ProductTypes";

export default function StudyBuddy({preview = false}: ProductProps) {
    const ID = "Study Buddy";
    const skills = ["Note taking", "Time management", "Organization"];
    const price = 499;
    const description = "Our Study Buddy is an AI-powered tool that helps students organize their study materials, manage their time, and stay on top of their assignments. It provides reminders, study guides, and flashcards to help students learn more effectively.";
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
