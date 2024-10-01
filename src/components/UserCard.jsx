import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="user-card" onClick={() => navigate(`/post/${user.id}`)}>
      <img className="avatar" src="https://picsum.photos/200" alt="user" />
      <div className="info">
        <h3 style={{ color: "#fff" }}>{user.category}</h3>
        <p style={{ color: "#fff" }}>Email: {user.category}</p>
        <p>Username: {user.category}</p>
        <p>Phone: {user.category}</p>
      </div>
    </div>
  );
};
export default UserCard;
