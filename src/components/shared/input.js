import { useFormContext, useForm } from "react-hook-form";

const InputField = ({ text, name, type = "text", required = true }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="relative">
      <input
        type={type}
        placeholder={text}
        name={name}
        {...register(name, { required: required })}
        className={`px-4 pb-[1.125rem] focus:outline-none focus:border-b-Pure-White bg-transparent caret-Red transition-all border-b w-full placeholder:text-sm  
        ${errors[`${name}`] ? "border-Red" : "border-Greyish-Blue"}`}
      />
      {errors[`${name}`] && (
        <p className="text-Red text-xs font-light top-0 absolute right-0">
          {"Can't be empty"}
        </p>
      )}
    </div>
  );
};

export default InputField;
