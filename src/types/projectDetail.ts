export interface ProjectDetailType {
  id: string;
  name: string;
  state: "OPEN" | "PARTIAL_OPEN" | "DOWN";
  github: string;
  demoSite: string;
  duration: string;
  language: string[];
  library: string[];
  worker: string;
  summary: string;
  works: string[];
}
