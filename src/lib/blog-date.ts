const colombianDate = new Intl.DateTimeFormat("es-CO", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function formatBlogDate(date: string) {
  return colombianDate.format(new Date(`${date}T00:00:00Z`));
}
