/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import defaultImage from "/src/assets/default image.jpg";
const ProfileCard = ({ profilePic, name, bio, role, userId, token }) => {
  return (
    <>
      <Link
        to={token ? `/user/${userId}` : "/login"}
        className="card border border-dark-subtle text-decoration-none"
        style={{ width: "16rem", height: "300px" }}
      >
        {/* for user role */}
        <span
          className="position-absolute translate-middle badge rounded-pill text-bg-warning"
          style={{ top: "10px", right: "-32px" }}
        >
          {role}
        </span>
        {/* for user image */}
        <img
          src={profilePic ? profilePic : defaultImage}
          className="card-img-top h-50"
          alt={profilePic ? profilePic : "default image"}
        />
        {/* user content including name and bio */}
        <div className="card-body">
          <h5 className="card-title fs-4">{name}</h5>
          {/* bio */}
          <p className="card-text" style={{ fontSize: "14px", color: "grey" }}>
            {bio && bio.length > 40 ? (
              <span>{bio.slice(0, 80)}...</span>
            ) : (
              <span>{bio}</span>
            )}
          </p>
        </div>
      </Link>
    </>
  );
};

export default ProfileCard;
