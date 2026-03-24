import Input from "../ui/Input";
import { usePagination } from "../../lib/hooks/usePagination";
import { useLocalStorage } from "../../lib/hooks/useLocalStorage";
import { useFetch } from "../../lib/hooks/useFetch";
import { useDebounce } from "../../lib/hooks/useDebounce";
import { Button } from "../ui/Button";
import { FaUser } from "react-icons/fa6";
import { BiLeftArrow, BiRightArrow, BiUser } from "react-icons/bi";
import { USER_API } from "../../lib/constants";

function Test() {
  const [search, setSearch] = useLocalStorage("search");
  const debouncedSearch = useDebounce(search);

  const fetchUsers =
    useFetch({
      url: `${USER_API}/users?name_like=${debouncedSearch}`,
    }) || [];

  const { data } = fetchUsers;
  const { pagedata, currentPage, totalPages, next, prev } = usePagination(
    data,
    3,
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white w-md rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            User Manaagement
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

        <div className="p-4">
          {data?.length === 0 ? (
            <p className="text-center flex items-center gap-2 justify-center text-gray-500 py-8">
              <BiUser /> No users found
            </p>
          ) : (
            <div className="space-y-2">
              {pagedata?.map((user: any) => (
                <div
                  key={user.id}
                  className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <p className="font-medium text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              ))}
            </div>
          )}

          {data?.length > 0 && (
            <div className="flex justify-between items-center mt-6 pt-4 ">
              <Button
                variant="primary"
                click={prev}
                Icon={BiLeftArrow}
                iconPosition="before"
                disabled={currentPage === 1}
                className="px-3 py-1.5 text-sm"
              >
                Prev
              </Button>

              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages || 1}
              </span>

              <Button
                variant="primary"
                click={next}
                Icon={BiRightArrow}
                iconPosition="after"
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 text-sm"
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Test;
