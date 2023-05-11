import { signal } from "@preact/signals";

const list = signal([]);

const isFetching = signal(false);
function importList() {
  isFetching.value = true;
  list.value = [];
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      setTimeout(() => {
        list.value = json;
        isFetching.value = false;
      }, 2000);
    });
}

export function ListImportComponent() {
  return (
    <>
      <button
        onClick={importList}
        className="bg-white rounded m-2 p-2 text-black"
      >
        Import List
      </button>

      {isFetching.value && (
        <>
          <div className="">
            <div>Yükleniyor</div>
            <progress className="progress w-56"></progress>
          </div>
        </>
      )}

      <ul>
        {list.value.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
