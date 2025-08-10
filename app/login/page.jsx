"use client"
import { useForm } from "react-hook-form";
import Input from "@/components/Input";

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <main className="w-full min-h-screen grid place-items-center">
      <section>
        <div className="bg-white rounded-3xl px-6 py-7">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input type={"text"} name={"email"} label={"haha"} autoComplete={"off"}/>
          </form>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
