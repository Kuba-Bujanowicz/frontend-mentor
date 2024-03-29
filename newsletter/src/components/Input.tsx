import { component$, Slot } from "@builder.io/qwik";

interface InputProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  errorText?: string;
  value?: string;
}

export default component$<InputProps>(
  ({ errorText, label, placeholder, type, name, value }) => {
    return (
      <label class={["input", errorText && "input--error"]}>
        <p class="input-label mb-sm">
          {label} <span class="input-error">{errorText}</span>
        </p>
        <input
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          class="input-element mb-lg"
        />
      </label>
    );
  },
);
