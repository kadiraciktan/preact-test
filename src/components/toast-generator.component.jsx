import { signal } from "@preact/signals";

export const styles = {
  light: "bg-white text-black rounded p-2 m-2 ",
  dark: "bg-black text-white rounded p-2 m-2",
};
const toastMessages = signal([]);

export function ToastGeneratorComponent() {
  const pushNotification = () => {
    const random = Math.random();
    toastMessages.value.push(random);
  };

  return (
    <div>
      <button className={styles.light} onClick={pushNotification}>
        Push Notification
      </button>

      {toastMessages.value.map((message) => {
        return (
          <div
            className="toast"
            onClick={() => {
              toastMessages.value = toastMessages.value.filter(
                (toast) => toast !== message
              );
            }}
          >
            <div className="alert alert-info cursor-pointer">
              <div>
                <span>{message}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
