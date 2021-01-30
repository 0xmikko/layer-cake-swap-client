export type AppStatus = "NEW" | "EXISTING";

export interface App {
  darkMode: boolean;
  status: AppStatus;
}

export const defaultApp: App = {
  darkMode: false,
  status: "NEW",
};
