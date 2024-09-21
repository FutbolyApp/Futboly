import { useState } from 'react';
import { CustomInput, InputProps } from '../custom/custom-input';

type InputPasswordProps = {
  label?: string;
  resetValue: InputProps['resetValue'];
  handleChange: InputProps['handleChange'];
};

export const InputPassword = ({ resetValue, handleChange, label }: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasword = () => setShowPassword(!showPassword);

  const pattern = /^.{6,}$/;

  return (
    <CustomInput
      label={(label) ? label : "Password"}
      handleChange={handleChange}
      type={showPassword ? 'text' : 'password'}
      endAdorment={{
        button: {
          onClick: togglePasword,
          img: showPassword ? 'EYE_OPEN_ICON' : 'EYE_CLOSE_ICON',
        },
      }}
      pattern={pattern}
      resetValue={resetValue}
    />
  );
};
