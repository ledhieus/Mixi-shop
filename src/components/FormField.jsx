/* eslint-disable react/prop-types */

import { Controller } from "react-hook-form";

const FormField = ({ control, lable, name, type, Component }) => {
  return (
    <div>
      <p className="mb-1 font-bold text-sm text-dark-100">{lable}</p>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, name } }) => {
          return (
            <Component
              onChange={onChange}
              value={value}
              name={name}
              type={type}
              control={control}
            />
          );
        }}
      />
    </div>
  );
};

export default FormField;
