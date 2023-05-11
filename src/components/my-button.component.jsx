import { signal } from "@preact/signals";

export const styles = {
  light: "bg-white text-black rounded p-2 m-2 ",
  dark: "bg-black text-white rounded p-2 m-2",
};
let currentTheme = signal(styles.light);
let toasts = signal([]);

export function MyButtonComponent() {
  const changeTheme = () => {
    if (currentTheme.value === styles.light) {
      currentTheme.value = styles.dark;
    } else {
      currentTheme.value = styles.light;
    }

    const random = Math.random();

    toasts.value.push(random);

    setTimeout(() => {
      toasts.value = toasts.value.filter((toast) => toast !== random);
    }, 1000);
  };

  return (
    <div>
      <button className={currentTheme.value} onClick={changeTheme}>
        Push Notification and Change Theme
      </button>

      {toasts.value.map((message) => {
        return (
          <div
            className="toast"
            onClick={() => {
              toasts.value = toasts.value.filter((toast) => toast !== message);
            }}
          >
            <div className="alert alert-info cursor-pointer">
              <div>
                <span>
                  Current Theme Changed To:
                  {currentTheme.value === styles.light ? "Light" : "Dark"}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
