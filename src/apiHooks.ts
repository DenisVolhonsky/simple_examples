import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://66e95d1987e41760944921fc.mockapi.io/api/v1/users";

interface User {
  id: string;
  name: string;
  coordinates: string[];
}

interface useFetchUsers {
  users: User[];
  loading: boolean;
  error: string | null;
}

export const useFetchUsers = (): useFetchUsers => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await axios.get(API_URL);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { users, loading, error };
};

export default useFetchUsers;
