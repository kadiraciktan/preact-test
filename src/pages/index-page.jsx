import {
  HeaderComponent,
  ListImportComponent,
  MyButtonComponent,
} from "../components";
import { TodoComponent } from "../components/todo.component";

export function IndexPage() {
  return (
    <>
      <HeaderComponent />
      <TodoComponent />
      <MyButtonComponent />
      <ListImportComponent />
    </>
  );
}
