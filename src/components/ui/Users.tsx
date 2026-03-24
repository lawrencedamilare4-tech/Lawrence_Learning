import { usePagination } from "../../lib/hooks/usePagination";
import { Button } from "./Button";
import { BiUser, BiLeftArrow, BiRightArrow } from "react-icons/bi";

function Users({ data }: { data: any }) {
  const { pagedata, currentPage, totalPages, next, prev } = usePagination(
    data,
    3,
  );

  return (
    <div className="p-4">
      {data.length === 0 ? (
        <p className="text-center flex items-center gap-2 justify-center text-gray-500 py-8">
          <BiUser /> No users found
        </p>
      ) : (
        <div className="space-y-2">
          {pagedata.map((user: any) => (
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

      {data.length > 0 && (
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
  );
}

export default Users;
