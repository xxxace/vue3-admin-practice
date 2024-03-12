import { ref } from "vue";
import { defineStore } from "pinia";
import settingsDefault from "@/settings";

const useSettingsStore = defineStore("settings", () => {
  const settings = ref(settingsDefault);

  return { settings };
});

export default useSettingsStore;
