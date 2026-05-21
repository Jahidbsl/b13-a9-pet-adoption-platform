"use client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

import { Envelope, Heart } from "@gravity-ui/icons";
import { PawPrint, MessageSquare } from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function AdoptionModal({ pet }) {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [hasRequested, setHasRequested] = useState(false);
  const [checking, setChecking] = useState(true);
  const [loading, setLoading] = useState(false);

  const isOwner = String(user?.id) === String(pet?.userId);
  const isAdopted = pet?.status?.toLowerCase() === "approved";
  const isPending = pet?.status?.toLowerCase() === "pending";
  const isrejected = pet?.status?.toLowerCase() === "rejected";
  

  const handleAdoption = async (e, close) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const data = {
      petId: pet?._id,
      petName: pet?.name,
      ownerId: pet?.userId,
      adoptionDate: formData.get("adoptionDate"),
      petImage: pet?.image,
      userId: user?.id,
      userName: user?.name,
      userEmail: user?.email,
      phone: formData.get("phone"),
      address: formData.get("address"),
      message: formData.get("message"),
      status: "pending",
      createdAt: new Date(),
    };
    const { data: tokenData } = await authClient.token();
    console.log(tokenData);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/adopt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Adoption request sent!");
        e.target.reset();
        close?.();
      } else {
        toast.error(result.message || "Failed");
      }
    } catch (err) {
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkRequest = async () => {
      try {
        setChecking(true);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URI}/adoptions/check?petId=${pet?._id}&userId=${user?.id}`,
        );

        const data = await res.json();
        setHasRequested(data.exists);
      } catch (err) {
        console.error(err);
      } finally {
        setChecking(false);
      }
    };

    if (pet?._id && user?.id) {
      checkRequest();
    }
  }, [pet?._id, user?.id]);
  const isAlreadyRequested = hasRequested;

  return (
    <Modal>
      {/* OPEN BUTTON (same style feel) */}
      <Button
        disabled={isOwner || isAdopted || isAlreadyRequested}
        className={`w-full rounded-2xl py-6 text-white font-semibold shadow-lg flex items-center justify-center gap-2
    ${
      isAdopted
        ? "bg-green-500"
        : isAlreadyRequested
          ? "bg-yellow-500"
          : isOwner
            ? "bg-gray-400"
            : "bg-gradient-to-r from-orange-500 to-amber-500 hover:opacity-90"
    }`}
      >
        <Heart className="size-5" />

        {isAdopted
          ? "Already Adopted"
          : isAlreadyRequested
            ? "Request Pending"
            : isOwner
              ? "You Can't Adopt Your Pet"
              : `Adopt ${pet?.name}`}
      </Button>

      {/* MODAL */}
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            {/* HEADER (same design style) */}
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <PawPrint className="size-5" />
              </Modal.Icon>

              <Modal.Heading>Adopt {pet?.name}</Modal.Heading>

              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form to send adoption request.
              </p>
            </Modal.Header>

            {/* BODY */}
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleAdoption} className="flex flex-col gap-5">
                  {/* Name */}
                  <TextField>
                    <Label>Your Name</Label>
                    <Input value={user?.name || ""} readOnly />
                  </TextField>

                  {/* Email */}
                  <TextField>
                    <Label>Email Address</Label>
                    <Input value={user?.email} readOnly />
                  </TextField>
                  <TextField>
                    <Label>Image</Label>
                    <Input value={pet?.image} readOnly />
                  </TextField>

                  {/* Phone */}
                  <TextField>
                    <Label>Phone Number</Label>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                    />
                  </TextField>

                  {/* Address */}
                  <TextField>
                    <Label>Address</Label>
                    <Input
                      name="address"
                      placeholder="Enter your address"
                      required
                    />
                  </TextField>
                  {/* Date */}
                  <TextField>
                    <Label>Adoption Date</Label>
                    <Input
                      name="adoptionDate"
                      type="date"
                      placeholder="Enter adoption date"
                      required
                    />
                  </TextField>

                  {/* Message (IMPORTANT: use textarea not Input) */}
                  <TextField>
                    <Label>Why do you want to adopt this pet?</Label>

                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Write your reason..."
                      className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                    />
                  </TextField>

                  {/* FOOTER */}
                  <Modal.Footer className="flex justify-end gap-3 pt-2">
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold"
                    >
                      {loading ? "Sending..." : "Send Request"}
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
