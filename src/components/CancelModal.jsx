"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const CancelModal = ({ adoption }) => {
  const { data: session } = authClient.useSession();

  const user = session?.user;
  const router = useRouter();
const handleDelete = async () => {
  try {
    const res = await fetch(
      `${process.env.SERVER_URI}/adoptions/${adoption?._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          userid: user?.id,
        },
      }
    );

    const data = await res.json();

    if (res.ok) {
      toast.success("Adoption request cancelled!");
      router.refresh(); 
    } else {
      toast.error(data.message || "Failed to cancel request");
    }
  } catch (error) {
    console.error(error);
    toast.error("Server error");
  }
};
  return (
    <AlertDialog>
      {adoption?.userId === user?.id && (
        <Button variant="danger">Delete</Button>
      )}

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete {adoption?.petName} permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{adoption?.petName}</strong> and all
                of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default CancelModal;
