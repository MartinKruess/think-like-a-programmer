export const Profile = ({ user, setUser }) => {
  const updateAge = (e) => {
    e.preventDefault();
    const newAge = e.target.age.value;
    console.log(user.age);
    setUser((user.age = newAge));
  };

  return (
    <div>
      <h3>Profile</h3>
      <div className="profile">
        <p>Name:</p>
        <p>{user.name}</p>
        <p>Age:</p>
        <p>{user.age}</p>
        <p>Email:</p>
        <p>{user.email}</p>
        <p>Married:</p>
        {user.married ? <p>Yes</p> : <p>No</p>}
        <p>Family:</p>
        <p>
          {user.familly.map((member, index) => (
            <span key={index}>{member}, </span>
          ))}
        </p>
        <p>Interests:</p>
        <p>
          {user.interests.map((interest, index) => (
            <span key={index}>{interest}, </span>
          ))}
        </p>
      </div>
      <form onSubmit={updateAge}>
        <input type="text" name="age" placeholder="new Age" />
      </form>
    </div>
  );
};
