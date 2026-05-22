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
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {/* Pet Name */}
                  {/* Pet Name */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Pet Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      defaultValue={name}
                      placeholder="Pet Name"
                      className="input"
                    />
                  </div>

                  {/* Species */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Species
                    </label>

                    <select
                      name="species"
                      defaultValue={species}
                      className="input"
                    >
                      <option>Dog</option>
                      <option>Cat</option>
                      <option>Bird</option>
                      <option>Rabbit</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Breed */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Breed
                    </label>

                    <input
                      type="text"
                      name="breed"
                      defaultValue={breed}
                      placeholder="Breed"
                      className="input"
                    />
                  </div>

                  {/* Age */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Age
                    </label>

                    <input
                      type="number"
                      name="age"
                      defaultValue={age}
                      placeholder="Age"
                      className="input"
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Gender
                    </label>

                    <select
                      name="gender"
                      defaultValue={gender}
                      className="input"
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>

                  {/* Image */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Image URL
                    </label>

                    <input
                      type="text"
                      name="image"
                      defaultValue={image}
                      placeholder="Image URL"
                      className="input md:col-span-2"
                    />
                  </div>

                  {/* Health */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Health Status
                    </label>

                    <input
                      type="text"
                      name="health"
                      defaultValue={health}
                      placeholder="Health Status"
                      className="input"
                    />
                  </div>

                  {/* Vaccination */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Vaccination
                    </label>

                    <select
                      name="vaccination"
                      defaultValue={vaccination}
                      className="input"
                    >
                      <option>Vaccinated</option>
                      <option>Not Vaccinated</option>
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Location
                    </label>

                    <input
                      type="text"
                      name="location"
                      defaultValue={location}
                      placeholder="Location"
                      className="input"
                    />
                  </div>

                  {/* Fee */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Adoption Fee
                    </label>

                    <input
                      type="number"
                      name="fee"
                      defaultValue={fee}
                      placeholder="Fee"
                      className="input"
                    />
                  </div>

                  {/* Email */}
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Owner Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      defaultValue={email}
                      readOnly
                      className="input md:col-span-2 bg-gray-100"
                    />
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Description
                    </label>

                    <textarea
                      name="description"
                      defaultValue={description}
                      className="input md:col-span-2"
                      rows={5}
                      placeholder="Write something about the pet..."
                    />
                  </div>

                  {/* Buttons */}
                  <div className="md:col-span-2 flex justify-end gap-3 mt-4">
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] text-white"
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
