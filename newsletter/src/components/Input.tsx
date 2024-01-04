import { component$, useSignal } from "@builder.io/qwik";

export const Input = component$(() => {
  return (
    <label class="mb-lg">
      <p>Email address</p>
      <input type="text" placeholder="email@company.com" />
    </label>
  );
});
