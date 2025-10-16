"use client";

import React from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import toast, { Toaster } from "react-hot-toast";

// ✅ Zod validation schema
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  businessEmail: z.string().email("Invalid email"),
  contactNumber: z.string().min(1, "Contact number is required"),
  industry: z.string().min(1, "Industry is required"),
  companyName: z.string().min(1, "Company name is required"),
  message: z.string().min(1, "Message is required"),
  agree: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Privacy Policy",
  }),
});

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
    reset(); // reset form after success
  };

  return (
    <section id="contact" className="min-h-screen relative w-full overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/contact background.png"
          alt="Contact background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Main Content */}
      <div className="flex justify-center py-16 px-4">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Text Section */}
          <div className="flex flex-col justify-center">
            <Button
              variant="default"
              className="w-fit bg-[#004C46] hover:bg-[#003C38] text-white px-4 py-1 rounded-full text-sm mb-4 shadow-md"
            >
              Get In Touch
            </Button>

            <h1 className="text-4xl font-bold text-[#0A0A0A] mb-4 leading-snug">
              Let’s Build the Future of Learning Together
            </h1>

            <p className="text-gray-800 text-base leading-relaxed">
              Have a question? Curious about how AiELM can transform compliance,
              training, or workforce efficiency in your organization? We’d love
              to hear from you. Fill out the form below and our team will get
              back to you shortly.
            </p>
          </div>

          {/* Right Form Section */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#F1F6F5] p-8 rounded-2xl shadow-lg backdrop-blur-sm space-y-5 text-black"
          >
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-black mb-2 block">First Name</Label>
                <Input
                  type="text"
                  placeholder="Enter your first name"
                  className="text-black placeholder-gray-600 border-gray-300"
                  {...register("firstName")}
                />
                <p className="text-red-500 text-xs h-4 mt-1">
                  {errors.firstName?.message}
                </p>
              </div>

              <div>
                <Label className="text-black mb-2 block">Last Name</Label>
                <Input
                  type="text"
                  placeholder="Enter your last name"
                  className="text-black placeholder-gray-600 border-gray-300"
                  {...register("lastName")}
                />
                <p className="text-red-500 text-xs h-4 mt-1">
                  {errors.lastName?.message}
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-black mb-2 block">Business Email</Label>
                <Input
                  type="email"
                  placeholder="Enter your business email"
                  className="text-black placeholder-gray-600 border-gray-300"
                  {...register("businessEmail")}
                />
                <p className="text-red-500 text-xs h-4 mt-1">
                  {errors.businessEmail?.message}
                </p>
              </div>

              <div>
                <Label className="text-black mb-2 block">Contact Number</Label>
                <Input
                  type="text"
                  placeholder="Enter your contact number"
                  className="text-black placeholder-gray-600 border-gray-300"
                  {...register("contactNumber")}
                />
                <p className="text-red-500 text-xs h-4 mt-1">
                  {errors.contactNumber?.message}
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-black mb-2 block">Industry</Label>
                <Input
                  type="text"
                  placeholder="Enter your industry"
                  className="text-black placeholder-gray-600 border-gray-300"
                  {...register("industry")}
                />
                <p className="text-red-500 text-xs h-4 mt-1">
                  {errors.industry?.message}
                </p>
              </div>

              <div>
                <Label className="text-black mb-2 block">Company Name</Label>
                <Input
                  type="text"
                  placeholder="Enter your company name"
                  className="text-black placeholder-gray-600 border-gray-300"
                  {...register("companyName")}
                />
                <p className="text-red-500 text-xs h-4 mt-1">
                  {errors.companyName?.message}
                </p>
              </div>
            </div>

            {/* Message */}
            <div>
              <Label className="text-black mb-2 block">
                How can we help you today?
              </Label>
              <Textarea
                placeholder="Start typing your message here"
                rows={4}
                className="text-black placeholder-gray-600 border-gray-300"
                {...register("message")}
              />
              <p className="text-red-500 text-xs h-4 mt-1">
                {errors.message?.message}
              </p>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2">
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
              <Label className="text-sm leading-snug text-black">
                I agree to AiELM’s{" "}
                <a href="#" className="text-teal-700 underline">
                  Privacy Policy
                </a>{" "}
                and to receive emails from AiELM.
              </Label>
            </div>
            <p className="text-red-500 text-xs h-4 mt-1">
              {errors.agree?.message}
            </p>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-[#004C46] hover:bg-[#003C38] text-white font-medium mt-4"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
