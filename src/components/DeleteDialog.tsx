import Button from "./Button";

const DeleteDialog = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  return (
    show && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 max-w-md bg-white rounded-lg p-6">
          <h1 className="font-bold text-neutral-darkBlue text-xl">
            Delete comment
          </h1>
          <p className="text-lg text-neutral-grayishBlue ">
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
          <div className="flex gap-3 justify-center">
            <div onClick={onClose}>
              <Button color="secondary" text="No, Cancel" type="button" />
            </div>
            <Button color="red" text="Yes, Delete" type="button" />
          </div>
        </div>
      </div>
    )
  );
};

export default DeleteDialog;
