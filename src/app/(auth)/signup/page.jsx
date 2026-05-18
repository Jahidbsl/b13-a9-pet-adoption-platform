"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";

import {
  Eye,
  MailCheck,
  PawPrintIcon,
  User,
  ImageIcon,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { BsEyeSlash } from "react-icons/bs";
import { FaChrome } from "react-icons/fa6";

import { toast, Bounce } from "react-toastify";

// import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);

  const [isConfirmVisible, setIsConfirmVisible] =
    useState(false);

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] = useState(false);

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const Alldata = Object.fromEntries(
      formData.entries()
    );

    // Password Validation
    if (Alldata.password.length < 6) {
      toast.error(
        "Password must be at least 6 characters"
      );
      return;
    }

    if (!/[A-Z]/.test(Alldata.password)) {
      toast.error(
        "Password must contain one uppercase letter"
      );
      return;
    }

    if (!/[a-z]/.test(Alldata.password)) {
      toast.error(
        "Password must contain one lowercase letter"
      );
      return;
    }

    if (Alldata.password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

     
     
      const { data, error } =
        await authClient.signUp.email({
          email: Alldata.email,
          password: Alldata.password,
          name: Alldata.name,
          image: Alldata.photo,
          autoSignIn: false,
          callbackURL: "/",
        });
     

      // Fake Delay
      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      toast.success(
        `Registration Successful for: ${Alldata.name}`,
        {
          position: "top-center",
          autoClose: 3000,
          theme: "light",
          transition: Bounce,
        }
      );

      e.target.reset();

      setPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        router.push("/signin");
        router.refresh();
      }, 1500);
    } catch (err) {
      toast.error("An unexpected error occurred.");

      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF5FF] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-[32px] shadow-2xl border border-purple-100 p-8 md:p-10">
        {/* Logo */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-3xl bg-[#8B5CF6] flex items-center justify-center shadow-lg shadow-purple-200">
            <PawPrintIcon
              className="text-white"
              size={30}
            />
          </div>

          <h1 className="text-4xl font-extrabold text-[#8B5CF6] mt-5">
            Create Account
          </h1>

          <span className="text-gray-500 mt-2 flex items-center gap-1 justify-center">
            <p>Join the pet adoption community</p>

            <Image
              src="https://images.emojiterra.com/google/android-12l/512px/1f43e.png"
              alt="logo"
              width={20}
              height={20}
            />
          </span>
        </div>

        {/* Form */}
        <Form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 mt-8"
        >
          {/* Name */}
          <TextField isRequired name="name">
            <Label className="mb-2 font-semibold text-[#374151]">
              Full Name
            </Label>

            <div className="relative group">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10"
              />

              <Input
                name="name"
                placeholder="John Doe"
                className="w-full rounded-2xl border border-purple-200 bg-white pl-11 pr-4 py-3 text-[#374151] placeholder:text-gray-400 shadow-sm transition-all duration-300 focus-within:border-[#8B5CF6] focus-within:ring-4 focus-within:ring-purple-100"
              />

              <div className="absolute inset-0 rounded-2xl opacity-0 group-focus-within:opacity-100 transition duration-300 pointer-events-none bg-[#8B5CF6]/5 blur-xl"></div>
            </div>
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                  value
                )
              ) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label className="mb-2 font-semibold text-[#374151]">
              Email
            </Label>

            <div className="relative group">
              <MailCheck
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10"
              />

              <Input
                name="email"
                placeholder="john@example.com"
                className="w-full rounded-2xl border border-purple-200 bg-white pl-11 pr-4 py-3 text-[#374151] placeholder:text-gray-400 shadow-sm transition-all duration-300 focus-within:border-[#8B5CF6] focus-within:ring-4 focus-within:ring-purple-100"
              />

              <div className="absolute inset-0 rounded-2xl opacity-0 group-focus-within:opacity-100 transition duration-300 pointer-events-none bg-[#8B5CF6]/5 blur-xl"></div>
            </div>

            <FieldError className="text-red-500 text-sm mt-1" />
          </TextField>

          {/* Photo URL */}
          <TextField isRequired name="photo">
            <Label className="mb-2 font-semibold text-[#374151]">
              Photo URL
            </Label>

            <div className="relative group">
              <ImageIcon
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10"
              />

              <Input
                name="photo"
                placeholder="https://example.com/photo.jpg"
                className="w-full rounded-2xl border border-purple-200 bg-white pl-11 pr-4 py-3 text-[#374151] placeholder:text-gray-400 shadow-sm transition-all duration-300 focus-within:border-[#8B5CF6] focus-within:ring-4 focus-within:ring-purple-100"
              />

              <div className="absolute inset-0 rounded-2xl opacity-0 group-focus-within:opacity-100 transition duration-300 pointer-events-none bg-[#8B5CF6]/5 blur-xl"></div>
            </div>
          </TextField>

          {/* Password */}
          <TextField isRequired className="w-full">
            <Label className="mb-2 font-semibold text-[#374151]">
              Password
            </Label>

            <div className="relative group">
              <InputGroup className="w-full rounded-2xl border border-purple-200 bg-white overflow-hidden transition-all duration-300 focus-within:border-[#8B5CF6] focus-within:ring-4 focus-within:ring-purple-100 shadow-sm">
                <InputGroup.Input
                  name="password"
                  className="w-full bg-transparent px-4 py-3 text-[#374151] placeholder:text-gray-400 outline-none"
                  type={
                    isVisible ? "text" : "password"
                  }
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                <InputGroup.Suffix className="pr-2">
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    radius="full"
                    type="button"
                    onPress={() =>
                      setIsVisible(!isVisible)
                    }
                    className="text-gray-500 hover:bg-purple-100 hover:text-[#8B5CF6] transition"
                  >
                    {isVisible ? (
                      <Eye size={18} />
                    ) : (
                      <BsEyeSlash size={18} />
                    )}
                  </Button>
                </InputGroup.Suffix>
              </InputGroup>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-focus-within:opacity-100 transition duration-300 pointer-events-none bg-[#8B5CF6]/5 blur-xl"></div>
            </div>

          </TextField>

          {/* Confirm Password */}
          <TextField isRequired className="w-full">
            <Label className="mb-2 font-semibold text-[#374151]">
              Confirm Password
            </Label>

            <div className="relative group">
              <InputGroup className="w-full rounded-2xl border border-purple-200 bg-white overflow-hidden transition-all duration-300 focus-within:border-[#8B5CF6] focus-within:ring-4 focus-within:ring-purple-100 shadow-sm">
                <InputGroup.Input
                  className="w-full bg-transparent px-4 py-3 text-[#374151] placeholder:text-gray-400 outline-none"
                  type={
                    isConfirmVisible
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm Your Password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                />

                <InputGroup.Suffix className="pr-2">
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    radius="full"
                    type="button"
                    onPress={() =>
                      setIsConfirmVisible(
                        !isConfirmVisible
                      )
                    }
                    className="text-gray-500 hover:bg-purple-100 hover:text-[#8B5CF6] transition"
                  >
                    {isConfirmVisible ? (
                      <Eye size={18} />
                    ) : (
                      <BsEyeSlash size={18} />
                    )}
                  </Button>
                </InputGroup.Suffix>
              </InputGroup>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-focus-within:opacity-100 transition duration-300 pointer-events-none bg-[#8B5CF6]/5 blur-xl"></div>
            </div>

            {confirmPassword &&
              password !== confirmPassword && (
                <p className="text-red-500 text-sm mt-2">
                  Password & Confirm Password
                  must be same
                </p>
              )}
          </TextField>

          {/* Signup Button */}
          <Button
            type="submit"
            isDisabled={loading}
            className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-2xl py-6 text-base font-semibold transition"
          >
            {loading ? "Creating..." : "Sign Up"}
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-7">
          <div className="flex-1 h-[1px] bg-gray-200"></div>

          <span className="text-sm text-gray-400">
            OR
          </span>

          <div className="flex-1 h-[1px] bg-gray-200"></div>
        </div>

        {/* Google Signup */}
        <Button
          variant="bordered"
          className="w-full rounded-2xl py-6 border border-purple-200 hover:bg-purple-50"
        >
          <FaChrome color="#8B5CF6" size={20} />
          Continue with Google
        </Button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500 mt-7">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-[#F472B6] font-semibold hover:underline"
          >
            SignIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;