import { Button } from "@restx98/my-package/button";
import { MyButton } from "@restx98/my-package/my-button";
import { MyLabel } from "@restx98/my-package/my-label";
import { Header } from "@restx98/my-package/header";

export default function Page() {
  return (
    <>
      <Header text="Web" />
      <Button />
      <MyButton />
      <MyLabel text={"My Label"} />
    </>
  );
}
