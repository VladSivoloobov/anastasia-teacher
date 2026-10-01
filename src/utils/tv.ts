import { createTV } from "tailwind-variants";

export const tv = createTV({
  twMergeConfig: {
    extend: {
      classGroups: {
        p: ["p-container", "p-section", "p-container-s, p-container-md"],
        px: ["px-container", "px-section", "px-container-s, px-container-md"],
        py: ["py-container", "py-section", "py-container-s, py-container-md"],
        m: ["m-container", "m-section", "m-container-s, m-container-md"],
        mx: ["mx-container", "mx-section", "mx-container-s, mx-container-md"],
        my: ["my-container", "my-section", "my-container-s, my-container-md"],
        text: ["text-body-lg"],
      },
    },
  },
});
