import { signal } from "@preact/signals";

export const styles = {
  light: "bg-white text-black rounded p-2 m-2 ",
  dark: "bg-black text-white rounded p-2 m-2",
};
let currentTheme = signal(styles.light);
export function MyButtonComponent() {
  const changeTheme = () => {
    if (currentTheme.value === styles.light) {
      currentTheme.value = styles.dark;
    } else {
      currentTheme.value = styles.light;
    }
  };

  return (
    <button className={currentTheme.value} onClick={changeTheme}>
      {currentTheme.value === styles.light ? "Light" : "Dark"}
    </button>
  );
}
