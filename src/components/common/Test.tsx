import { FaSubscript, FaLock } from "react-icons/fa";
import { useModal } from "../../providers/ModalProvider";
import { Button } from "../ui/Button";
import Input from "../ui/Input";

function Test() {
  const { openModal } = useModal();

  const handleOpen = () => {
    openModal(
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">Hello Modal</h2>
        <p className="mb-4">
          Lorem ipsum, efin ofj4ofj 4fkn4fkn4 f4knf4kf 4fkn4fkn4 f4fj4nf4k f
        </p>
      </div>,
    );
  };

  return (
    <div className="w-md">
      {" "}
      <span className="text-3xl font-inter"> kk</span>
      <Button Icon={FaSubscript} click={handleOpen} variant="primary">
        Submit
      </Button>
      <div className="flex flex-col gap-3">
        <Input label="Email" placeholder="You@example.com" type="text" />
        <Input
          Icon={FaLock}
          label="Password"
          placeholder="*********"
          type="password"
        />
      </div>
    </div>
  );
}

export default Test;
