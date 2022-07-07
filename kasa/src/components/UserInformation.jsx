import "../style/css/UserInfo.css";

function UserInformation({ host }) {
  return (
    <div className="user-container">
      <p className="user-name">{host.name}</p>
      <img
        src={host.picture}
        alt={host.name + " avatar"}
        className="user-avatar"
      />
    </div>
  );
}

export default UserInformation;
