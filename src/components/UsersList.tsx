import React from "react";
import useFetchUsers from "../apiHooks.ts";

const UsersList = () => {
  const { users, loading, error } = useFetchUsers();

  return (
    <div>
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {users.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UsersList;
