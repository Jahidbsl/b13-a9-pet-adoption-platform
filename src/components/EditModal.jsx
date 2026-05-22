"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Modal, Surface } from "@heroui/react";
import { PawPrint } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const EditModal = ({ pet }) => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const router = useRouter();

  const {
    age,
    name,
    species,
    breed,
    gender,
    image,
    health,
    vaccination,
    location,
    fee,
    email,
    description,
    _id,
  } = pet;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());
    const { data: tokenData } = await authClient.token();
    console.log(tokenData);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/pets/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            userid: user?.id,
            authorization: `Bearer ${tokenData?.token}`,
          },
          body: JSON.stringify(updatedData),
        },
      );

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        toast.success("Pet updated successfully!");
        router.refresh();
      } else {
        toast.error(data.message || "Update failed!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error updating pet.");
    }
  };

  return (
    <Modal>
      <Button variant="secondary" className={"rounded-sm"}>
        Edit
      </Button>

      <Modal.Backdrop className="bg-black/40 backdrop-blur-sm">
        <Modal.Container placement="center">
          <Modal.Dialog className="w-full max-w-5xl bg-white rounded-[32px] shadow-2xl overflow-hidden border border-purple-100">
            <Modal.CloseTrigger />

            <Modal.Header className="px-8 py-6 border-b border-purple-100">
              <Modal.Icon className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] text-white">
                <PawPrint className="size-5" />
              </Modal.Icon>

              <Modal.Heading className="text-3xl font-bold text-[#374151]">
                Edit Pet Details
              </Modal.Heading>

              <p className="mt-2 text-sm text-gray-500">
                Update pet information easily.
              </p>
            </Modal.Header>

            <Modal.Body className="p-8 max-h-[75vh] overflow-y-auto">
              <Surface>
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/90 backdrop-blur-xl p-8 rounded-3xl border border-purple-100 shadow-[0_10px_40px_rgba(139,92,246,0.12)]"
                >
                  {/* Pet Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Pet Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      defaultValue={name}
                      placeholder="Enter pet name"
                      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
                    />
                  </div>

                  {/* Species */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Species
                    </label>

                    <select
                      name="species"
                      defaultValue={species}
                      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
                    >
                      <option>Dog</option>
                      <option>Cat</option>
                      <option>Bird</option>
                      <option>Rabbit</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Breed */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Breed
                    </label>

                    <input
                      type="text"
                      name="breed"
                      defaultValue={breed}
                      placeholder="Enter breed"
                      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
                    />
                  </div>

                  {/* Age */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Age
                    </label>

                    <input
                      type="number"
                      name="age"
                      defaultValue={age}
                      placeholder="Enter age"
                      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
                    />
                  </div>

                  {/* Gender */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Gender
                    </label>

                    <select
                      name="gender"
                      defaultValue={gender}
                      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>

                  {/* Image URL */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Image URL
                    </label>

                    <input
                      type="text"
                      name="image"
                      defaultValue={image}
                      placeholder="Paste image URL"
                      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
                    />
                  </div>

                  {/* Health */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Health Status
                    </label>

                    <input
                      type="text"
                      name="health"
                      defaultValue={health}
                      placeholder="Healthy / Injured"
                      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
                    />
                  </div>

                  {/* Vaccination */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Vaccination
                    </label>

                    <select
                      name="vaccination"
                      defaultValue={vaccination}
                      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
                    >
                      <option>Vaccinated</option>
                      <option>Not Vaccinated</option>
                    </select>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Location
                    </label>

                    <input
                      type="text"
                      name="location"
                      defaultValue={location}
                      placeholder="Enter location"
                      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
                    />
                  </div>

                  {/* Fee */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Adoption Fee
                    </label>

                    <input
                      type="number"
                      name="fee"
                      defaultValue={fee}
                      placeholder="Enter fee"
                      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
                    />
                  </div>

                  {/* Email */}
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Owner Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      defaultValue={email}
                      readOnly
                      className="w-full rounded-2xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-500 cursor-not-allowed"
                    />
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Description
                    </label>

                    <textarea
                      name="description"
                      defaultValue={description}
                      rows={5}
                      placeholder="Write something about the pet..."
                      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 resize-none"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="md:col-span-2 flex items-center justify-end gap-4 pt-4">
                    <Button
                      slot="close"
                      variant="secondary"
                      className="rounded-2xl px-6 py-3"
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      className="rounded-2xl px-8 py-3 bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#F472B6] text-white font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300"
                    >
                      Save Update
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditModal;
