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
import { Eye, MailCheck, PawPrintIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { DiChrome } from "react-icons/di";
import { FaChromecast } from "react-icons/fa";
import { FaChrome } from "react-icons/fa6";
import { toast } from "react-toastify";

const SignInPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [loading, setLoading] = useState(false);
   const [password, setPassword] = useState("");
 const handelGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const Alldata = Object.fromEntries(formData.entries());

    // Password Validation
    if (Alldata.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (!/[A-Z]/.test(Alldata.password)) {
      toast.error("Password must contain one uppercase letter");
      return;
    }

    if (!/[a-z]/.test(Alldata.password)) {
      toast.error("Password must contain one lowercase letter");
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await authClient.signIn.email({
        email: Alldata.email,
        password: Alldata.password,
        callbackURL: "/",
      });

      // Fake Delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success(`Sign In Successful for: ${Alldata.name}`, {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });

      e.target.reset();

      setPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        router.push("/");
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
            <PawPrintIcon className="text-white" size={30} />
          </div>

          <h1 className="text-4xl font-extrabold text-[#8B5CF6] mt-5">
            Welcome Back
          </h1>

          <span className="text-gray-500 mt-2 flex items-center gap-1 justify-center">
            <p className="text-gray-500 ">
              Login to continue your pet adoption journey{" "}
            </p>
            <Image
              src={
                "https://images.emojiterra.com/google/android-12l/512px/1f43e.png"
              }
              alt="logo"
              width={20}
              height={20}
            />
          </span>
        </div>

        {/* Form */}
        <Form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-8">
          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label className="mb-2 font-semibold text-[#374151]">Email</Label>

            <div className="relative group">
              {/* Email Icon */}
              <MailCheck
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10"
              />

              {/* Input */}
              <Input
                placeholder="john@example.com"
                className="w-full rounded-2xl border border-purple-200 bg-white pl-11 pr-4 py-3 text-[#374151] placeholder:text-gray-400 shadow-sm transition-all duration-300 focus-within:border-[#8B5CF6] focus-within:ring-4 focus-within:ring-purple-100"
              />

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-focus-within:opacity-100 transition duration-300 pointer-events-none bg-[#8B5CF6]/5 blur-xl"></div>
            </div>

            <FieldError className="text-red-500 text-sm mt-1" />
          </TextField>

          {/* Password */}
          <TextField isRequired className="w-full" name="password">
            <Label className="mb-2 font-semibold text-[#374151]">
              Password
            </Label>

            <div className="relative group">
              {/* Input */}
              <InputGroup className="w-full rounded-2xl border border-purple-200 bg-white overflow-hidden transition-all duration-300 focus-within:border-[#8B5CF6] focus-within:ring-4 focus-within:ring-purple-100 shadow-sm">
                <InputGroup.Input
                  className="w-full bg-transparent px-4 py-3 text-[#374151] placeholder:text-gray-400 outline-none"
                  type={isVisible ? "text" : "password"}
                  placeholder="Enter Your Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {/* Eye Button */}
                <InputGroup.Suffix className="pr-2">
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    radius="full"
                    onPress={() => setIsVisible(!isVisible)}
                    className="text-gray-500 hover:bg-purple-100 hover:text-[#8B5CF6] transition"
                  >
                    {isVisible ? <Eye size={18} /> : <BsEyeSlash size={18} />}
                  </Button>
                </InputGroup.Suffix>
              </InputGroup>

              {/* Bottom Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-focus-within:opacity-100 transition duration-300 pointer-events-none bg-[#8B5CF6]/5 blur-xl"></div>
            </div>
            {password &&
              (password.length < 8 ||
                !/[A-Z]/.test(password) ||
                !/[a-z]/.test(password) ||
                !/[0-9]/.test(password)) && (
                <p className="text-red-500 text-sm mt-2">
                  Password must be at least 8 characters and contain an
                  uppercase letter, lowercase letter, and a number
                </p>
              )}
          </TextField>

          {/* Forgot Password */}
          <div className="flex justify-end w-full">
            <Link href="#" className="text-sm text-[#F472B6] hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            isDisabled={loading}
            className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-2xl py-6 text-base font-semibold transition"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-7">
          <div className="flex-1 h-[1px] bg-gray-200"></div>

          <span className="text-sm text-gray-400">OR</span>

          <div className="flex-1 h-[1px] bg-gray-200"></div>
        </div>

        {/* Google Login */}
        <Button
         onClick={handelGoogleLogin}
          variant="bordered"
          className="w-full rounded-2xl py-6 border border-purple-200 hover:bg-purple-50"
        >
          <FaChrome color="#8B5CF6" size={20} />
          Continue with Google
        </Button>

        {/* Register */}
        <p className="text-center text-sm text-gray-500 mt-7">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-[#F472B6] font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
