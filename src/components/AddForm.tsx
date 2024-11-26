import React, { useId, useState } from "react";
import { User } from "../apiHooks";

type Props = {};

const AddForm = ({ setUsers }) => {
  const id = useId();
  const [user, setUser] = useState({
    name: "",
    coordinates: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers((prevUsers) => [...prevUsers, { ...user, id }]);

    setUser({
      name: "",
      coordinates: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Coordinates:
        <input
          type="text"
          name="coordinates"
          value={user.coordinates}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddForm;
