export const JOB_TYPES = [
  { label: "Full-time", value: "full-time" },
  { label: "Part-time", value: "part-time" },
  { label: "Remote", value: "remote" },
  { label: "Hybrid", value: "hybrid" },
] as const;

export const JOB_LOCATIONS = [
  { label: "Remote", value: "remote" },
  { label: "In-person", value: "in-person" },
  { label: "Hybrid", value: "hybrid" },
] as const;

export const JOB_SALARIES = [
  "$0 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $150,000",
  "$150,000 - $200,000",
  "$200,000+",
] as const;
