import useModal from "../hooks/useModal";

export default function Modal() {
  const { onContinue, message, close } = useModal();

  function handleContinue() {
    onContinue();
    close();
  }

  return (
    <div className="fixed w-full h-full flex inset-0 bg-[#00000033]">
      <div className="w-1/3 h-[240px] bg-white m-auto p-4 flex flex-col rounded-xl">
        {message}
        <div className="flex mt-auto gap-4 justify-end">
          <button type="button" className="btn" onClick={close}>
            Cancel
          </button>
          <button
            type="button"
            className="btn bg-orange"
            onClick={handleContinue}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
