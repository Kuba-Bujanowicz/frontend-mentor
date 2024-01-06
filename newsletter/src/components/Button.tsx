import { component$, Slot } from "@builder.io/qwik";

interface ButtonProps {
  href?: string;
  class?: string;
}

export default component$<ButtonProps>(({ href, class: className }) => {
  const Element = href ? "a" : "button";

  return (
    <Element class={className} href={href}>
      <Slot />
    </Element>
  );
});
