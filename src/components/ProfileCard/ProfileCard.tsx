import "./styles.css";
import avatar from "../../assets/avatar.jpg";
import { User } from "./types";

function ProfileCard() {
  const userData: User = {
    avatar:
      "https://img.freepik.com/premium-vector/men-women-different-poses-sitting-standing-isolated-white-background-cute-flat-style-vector-illustration_71599-9116.jpg?w=740",
    userName: "John Doe",
    profession: "Web Developer",
    hobbies: ["Reading", "Traveling", "Photography"],
  };

  return (
    <div className="profile-card-wrapper">
      <h2 className="user-name">{userData.userName}</h2>
      <img src={avatar} />
      <p className="user-data">{userData.profession}</p>
      <p className="user-data">{userData.hobbies[0]}</p>
    </div>
  );
}

export default ProfileCard;
