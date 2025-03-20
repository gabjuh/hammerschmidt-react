export const slugify = (name: string) => {
  return name
    .normalize("NFD") // Normalize accents (é -> e, ö -> o, etc.)
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritic marks
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^a-z0-9-]/g, ""); // Remove special characters except dashes
};
