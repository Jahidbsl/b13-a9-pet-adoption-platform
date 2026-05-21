"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Modal, Surface } from "@heroui/react";
import { PawPrint } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const EditModal = ({ pet}) => {
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

  try {
    const res = await fetch(`http://localhost:5000/pets/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        userid: user?.id,
      },
      body: JSON.stringify(updatedData),
    });

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
       <Button variant="secondary" className={'rounded-sm'}>Edit</Button>

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
                  <input
                    name="name"
                    defaultValue={name}
                    className="input"
                    placeholder="Pet Name"
                  />

                  {/* Species */}
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

                  {/* Breed */}
                  <input name="breed" defaultValue={breed} className="input" />

                  {/* Age */}
                  <input name="age" defaultValue={age} className="input" />

                  {/* Gender */}
                  <select name="gender" defaultValue={gender} className="input">
                    <option>Male</option>
                    <option>Female</option>
                  </select>

                  {/* Image */}
                  <input
                    name="image"
                    defaultValue={image}
                    className="input md:col-span-2"
                  />

                  {/* Health */}
                  <input
                    name="health"
                    defaultValue={health}
                    className="input"
                  />

                  {/* Vaccination */}
                  <select
                    name="vaccination"
                    defaultValue={vaccination}
                    className="input"
                  >
                    <option>Vaccinated</option>
                    <option>Not Vaccinated</option>
                  </select>

                  {/* Location */}
                  <input
                    name="location"
                    defaultValue={location}
                    className="input"
                  />

                  {/* Fee */}
                  <input name="fee" defaultValue={fee} className="input" />

                  {/* Email */}
                  <input
                    name="email"
                    defaultValue={email}
                    readOnly
                    className="input md:col-span-2 bg-gray-100"
                  />

                  {/* Description */}
                  <textarea
                    name="description"
                    defaultValue={description}
                    className="input md:col-span-2"
                    rows={5}
                  />

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
