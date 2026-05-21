"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteModal = ({ pet }) => {
  const { data: session } = authClient.useSession();

  const user = session?.user;
  const router = useRouter();
  const handleDelete = async () => {
       const { data: tokenData } = await authClient.token();
        console.log(tokenData);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/pets/${pet._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          userid: user.id,
          authorization: `Bearer ${tokenData?.token}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Pet deleted successfully!");
        router.push("/all-pets");
      } else {
        const errorData = await res.json().catch(() => null);
        console.error("Delete failed:", errorData);
        toast.error("Failed to delete pet.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Error deleting pet.");
    }
  };
  return (
    <AlertDialog>
      {pet.userId === user?.id && (
        <Button variant="danger" className={'rounded-sm'}>Delete {pet.name}</Button>
      )}

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete {pet.name} permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{pet.name}</strong> and all
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

export default DeleteModal;
