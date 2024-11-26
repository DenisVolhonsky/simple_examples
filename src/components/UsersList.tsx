import React, { useEffect, useState } from "react";
import useFetchUsers from "../apiHooks.ts";
import AddForm from "./AddForm.tsx";

// filter
// add
// remove
// pagin
// modal
// popup
// context
// проектирование системы

const UsersList = () => {
    const [filter, setFilter] = useState("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { users: initialUsers, loading, error, totalPages } = useFetchUsers(currentPage);
    const [users, setUsers] = useState(initialUsers || []);

  const handleNextPage = () => {
    if(currentPage < totalPages) {
        setCurrentPage(prevPage => prevPage + 1)
    }
  }

  const handlePrevPage = () => {
    if(currentPage > 1) {
        setCurrentPage(prevPage => prevPage - 1)
    }
  }

  useEffect(() => {
    if (initialUsers) {
      setUsers(initialUsers);
    }
  }, [initialUsers]);

  const handleFilter = ({ target }) => {
    setFilter(target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id: string) =>
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));


  return (
    <div>
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      <label>
        Filter:
        <input
          type="text"
          value={filter}
          onChange={handleFilter}
          placeholder="input name"
        />
      </label>
      {filteredUsers.map((user: any) => (
        <div key={user.id}>
          <span>{user.name}</span>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
      <AddForm setUsers = {setUsers}/>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
};

export default UsersList;
