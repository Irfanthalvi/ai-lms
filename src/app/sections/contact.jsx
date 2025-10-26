"use client";

import React from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import toast, { Toaster } from "react-hot-toast";
import { formFields } from "../data/contact-mock";
import { contactSchema } from "../validation/contact-validation";

export default function Contact() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log("✅ Submitted data:", data);
    toast.success("Form submitted successfully!");
    reset();
  };

  return (
    <section
      id="contact"
      className="min-h-screen relative w-full overflow-hidden"
    >
      <Toaster position="top-center" />

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/contact background.png"
          alt="Contact background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Main Container */}
      <div className="flex justify-center py-29 px-4 max-xl:px-16 max-lg:px-10 max-md:px-6 max-sm:px-4">
        <div className="w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-10 max-xl:w-full max-md:gap-8">
          {/* Left Side */}
          <div className="flex flex-col max-xl:items-center max-xl:text-center">
            <Button
              variant="default"
              className="w-fit h-[30px] bg-[#004C46] hover:bg-[#003C38] text-white px-4 rounded-full text-sm mb-7 shadow-md max-xl:mx-auto"
            >
              Get In Touch
            </Button>

            <h1 className="text-[45px] font-bold text-[#0A0A0A] mb-3 leading-[1.1] max-xl:text-[38px] max-lg:text-[34px] max-md:text-[30px] max-sm:text-[26px]">
              Let’s Build the Future
              <br /> of Learning Together
            </h1>

            <p className="text-gray-800 text-[17px] leading-[1.4] tracking-wide font-semibold max-xl:text-[16px] max-lg:text-[15px] max-md:text-[14px] max-sm:text-[13px] max-xl:text-center">
              Have a question? Curious about how AiELM can
              <br className="max-md:hidden" /> transform compliance,
              training, or workforce efficiency in
              <br className="max-md:hidden" /> your organization? We’d love
              to hear from you. Fill out the
              <br className="max-md:hidden" /> form below and our team will get
              back to you shortly.
            </p>
          </div>

          {/* Right Side Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#eef6f4] border border-[#c8d4d2] p-8 rounded-4xl shadow-4xl backdrop-blur-sm space-y-5 text-black ml-[-65px] max-xl:ml-0 max-lg:p-6 max-md:p-5 max-sm:p-4 max-xl:w-full"
          >
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 max-md:grid-cols-1">
              {formFields.map((field) => (
                <div
                  key={field.name}
                  className={field.col === 1 ? "md:col-span-2" : ""}
                >
                  <Label className="text-black mb-3 block text-[15px] max-md:text-[14px]">
                    {field.label}
                  </Label>
                  <Input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="text-black placeholder-gray-600 bg-white border-gray-300 text-[15px] max-md:text-[14px]"
                    {...register(field.name)}
                  />
                  <p className="text-red-500 text-xs h-4 mt-1">
                    {errors[field.name]?.message}
                  </p>
                </div>
              ))}
            </div>

            {/* Message */}
            <div>
              <Label className="text-black mb-3 block text-[15px] max-md:text-[14px]">
                How can we help you today?
              </Label>
              <Textarea
                placeholder="Start typing your message here"
                rows={6}
                className="text-black bg-white placeholder-gray-600 border-gray-300 h-[110px]"
                {...register("message")}
              />
              <p className="text-red-500 text-xs mt-1">
                {errors.message?.message}
              </p>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2 max-md:items-center max-md:flex-col">
              <Controller
                name="agree"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value || false}
                    onCheckedChange={(checked) =>
                      field.onChange(checked === true)
                    }
                  />
                )}
              />
              <Label className="text-sm leading-snug text-black max-md:text-center">
                I agree to AiELM’s{" "}
                <a href="#" className="text-teal-700 underline">
                  Privacy Policy
                </a>{" "}
                and to receive emails from AiELM.
              </Label>
            </div>
            <p className="text-red-500 text-xs mt-1">
              {errors.agree?.message}
            </p>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-fit bg-[#004C46] hover:bg-[#003C38] text-white font-medium mt-4 max-md:w-full"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
