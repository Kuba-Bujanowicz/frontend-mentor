import { component$, useSignal, $ } from "@builder.io/qwik";
import * as v from "valibot";

export const NewsletterForm = component$(() => {
  const email = useSignal("");
  const errorText = useSignal("");

  const handleInput = $((e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    email.value = value;
  });

  const handleSubmit = $(() => {
    errorText.value = "";
    try {
      const emailSchema = v.string([
        v.minLength(1, "Please enter an email address"),
        v.email("Please enter a valid email address"),
      ]);

      v.parse(emailSchema, email.value);
      window.location.replace("/newsletter-success?email=" + email.value);
    } catch (error: any) {
      errorText.value = error.message;
    }
  });

  return (
    <form
      class={["form", errorText.value && "form--error"]}
      method="POST"
      noValidate
    >
      <label>
        <p class="form-label mb-sm">
          Email address <span class="form-error">{errorText.value}</span>
        </p>
        <input
          onInput$={handleInput}
          class="form-input mb-lg"
          type="email"
          placeholder="email@company.com"
        />
      </label>
      <button
        class="form-btn p-md"
        type="submit"
        onClick$={handleSubmit}
        preventdefault:click
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  );
});
