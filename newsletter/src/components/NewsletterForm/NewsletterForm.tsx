import { component$, useSignal, $ } from "@builder.io/qwik";
import * as v from "valibot";

export const NewsletterForm = component$(() => {
  const email = useSignal("");
  const errorText = useSignal("");
  const emailSchema = v.string([
    v.minLength(1, "Please enter an email address"),
    v.email("Please enter a valid email address"),
  ]);

  const handleInput = $((e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    email.value = value;
  });

  return (
    <form class={"form"} method="POST">
      <label>
        <p class="form-label mb-sm">
          Email address <span class="form-error">{errorText.value}</span>
        </p>
        <input
          onInput$={handleInput}
          class="form-input mb-lg"
          type="email"
          placeholder="email@company.com"
          value={email.value}
        />
      </label>
      <button class="form-btn p-md" type="submit">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
});
