import { Button } from "@mantine/core";
import { ColorSchemeToggle } from "./components/ColorSchemeToggle";

export default function Home() {
  return (
    <>
      <ColorSchemeToggle></ColorSchemeToggle>
      <Button>Hi!</Button>
    </>
  );
}
