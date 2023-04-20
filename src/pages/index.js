import Welcome from "./../components/welcome";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const { push } = useRouter();

  useEffect(() => {
    setTimeout(() => {
      push("/authenticate");
    }, 200);
  });

  return (
    <>
      <Welcome />
    </>
  );
}
