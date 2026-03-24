import Input from "../ui/Input";
import { useLocalStorage } from "../../lib/hooks/useLocalStorage";
import { useFetch } from "../../lib/hooks/useFetch";
import { useDebounce } from "../../lib/hooks/useDebounce";
import { FaUser } from "react-icons/fa6";
import { USER_API } from "../../lib/constants";
import { CircularProgress } from "@mui/material";
import Users from "../ui/Users";

function Test() {
  const [search, setSearch] = useLocalStorage("search");
  const debouncedSearch = useDebounce(search);

  const fetchUsers =
    useFetch({
      url: `${USER_API}/users?name_like=${debouncedSearch}`,
    }) || [];

  const { data } = fetchUsers;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white w-md rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            User Management
          </h2>
        </div>

        <div className="p-4">
          <Input
            Icon={FaUser}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type a name..."
          />
        </div>

        {data ? (
          <Users data={data} />
        ) : (
          <div className="p-4 flex justify-center">
            <CircularProgress />
          </div>
        )}
      </div>
    </div>
  );
}

export default Test;
