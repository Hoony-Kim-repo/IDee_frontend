import { Icon, Switch } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleModeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Switch.Root colorPalette={"blue"} size="lg">
      <Switch.HiddenInput />
      <Switch.Control onClick={toggleTheme}>
        <Switch.Thumb />
        <Switch.Indicator fallback={<Icon as={FaMoon} color={"gray.400"} />}>
          <Icon as={FaSun} color={"yellow.400"} />
        </Switch.Indicator>
      </Switch.Control>
    </Switch.Root>
  );
};

export default ToggleModeSwitch;
