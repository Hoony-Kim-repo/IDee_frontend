import { Button } from "@chakra-ui/react";
import { useTheme } from "next-themes";

const ToggleModeButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <Button onClick={toggleTheme}>Toggle Mode</Button>;
};

export default ToggleModeButton;
