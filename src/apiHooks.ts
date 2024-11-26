import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://66e95d1987e41760944921fc.mockapi.io/api/v1/users";

export interface User {
  id: string;
  name: string;
  coordinates: string[];
}

interface useFetchUsersResult {
  users: User[];
  loading: boolean;
  error: string | null;
  totalPages: number;
}

export const useFetchUsers = (page): useFetchUsersResult => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            page: page,
            limit: 10,
          },
        });
        const items = response.data;
        const totalItems = 50;
        const totalPages = Math.ceil(totalItems / 10);
        setTotalPages(totalPages);
        setUsers(items);
      } catch (error) {
        console.error("Error fetching users", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [page]);

  return { users, loading, error, totalPages };
};

export default useFetchUsers;
