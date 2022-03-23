import { useFormContext } from "react-hook-form";

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
        className={`px-4 pb-[1.125rem] focus:outline-none focus:border-b-Pure-White text-white bg-transparent caret-Red transition-all border-b w-full placeholder:text-sm autofill:bg-rose-400 
        ${errors[`${name}`] ? "border-Red" : "border-Greyish-Blue"}`}
      />
      {errors[`${name}`]?.type === "required" ? (
        <p className="absolute top-0 right-0 text-xs font-light text-Red">
          {"Can't be empty"}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputField;
