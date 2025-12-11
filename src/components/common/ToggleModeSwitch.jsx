import { Icon, Switch } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleModeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const toggleTheme = (value) => {
    setTheme(value.checked ? "dark" : "light");
  };

  return (
    <Switch.Root
      checked={isDark}
      onCheckedChange={toggleTheme}
      colorPalette={"blue"}
      size="lg"
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
        <Switch.Indicator fallback={<Icon as={FaMoon} color={"gray.400"} />}>
          <Icon as={FaSun} color={"yellow.400"} />
        </Switch.Indicator>
      </Switch.Control>
    </Switch.Root>
  );
};

export default ToggleModeSwitch;
