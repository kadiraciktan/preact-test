import { HeaderComponent, MyButtonComponent } from "../components";
import { ToastGeneratorComponent } from "../components/toast-generator.component";

export function IndexPage() {
  return (
    <div>
      <HeaderComponent />
      <MyButtonComponent />
      <ToastGeneratorComponent />
    </div>
  );
}
