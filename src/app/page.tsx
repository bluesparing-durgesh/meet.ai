"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authClient.signUp.email(formData, {
      onError: () => {
        alert("error")
      },
      onSuccess: () => {
        alert("success")
      },
      onRequest: () => {
        // alert("loading")
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        placeholder="name"
        type="text"
        value={formData.name}
        onChange={handleInputChange}
      />
      <Input
        name="email"
        placeholder="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <Input
        name="password"
        placeholder="password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <Button type="submit">submit</Button>
    </form>
  );
};

export default Home;

