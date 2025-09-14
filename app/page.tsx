"use client";
import { set, z } from "zod";
import { useState } from "react";
import {
  Button,
  TextInput,
  CloseButton,
  useMantineColorScheme,
} from "@mantine/core";

const foodInputSchema = z.object({
  food: z
    .string()
    .min(3, "Food must be at least 3 characters")
    .max(20, "Food must be at most 20 characters"),
});

export default function Home() {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [addedFood, setAddedFood] = useState<string[]>([]);
  const { colorScheme } = useMantineColorScheme();

  const handleSubmit = () => {
    const result = foodInputSchema.safeParse({ food: value });

    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }
    setAddedFood([...addedFood, value]);
    setError(null);
    setValue("");
  };

  return (
    <div
      className="flex h-[calc(100vh-4rem)] w-full overflow-hidden gap-2 p-2"
      style={{
        backgroundColor: colorScheme === "dark" ? "#1a1b1e" : "#ffffff",
      }}
    >
      <div
        className="h-full w-1/2 rounded-lg shadow-sm p-2"
        style={{
          border: `1px solid ${colorScheme === "dark" ? "#373a40" : "#e0e0e0"}`,
          backgroundColor: colorScheme === "dark" ? "#25262b" : "#ffffff",
        }}
      >
        <div className="mb-2">
          <TextInput
            rightSectionPointerEvents="all"
            rightSection={
              <CloseButton
                aria-label="Clear Input"
                onClick={() => {
                  setValue("");
                  setError(null);
                }}
                style={{ display: value ? undefined : "none" }}
              />
            }
            error={error}
            placeholder="enter food here"
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
        </div>
        <div className="w-full">
          <Button onClick={handleSubmit} fullWidth>
            Search
          </Button>
        </div>

        <div>
          {addedFood.map((food) => (
            <div key={food}>{food}</div>
          ))}
        </div>
      </div>
      <div
        className="h-full w-1/2 rounded-lg shadow-sm"
        style={{
          border: `1px solid ${colorScheme === "dark" ? "#373a40" : "#e0e0e0"}`,
          backgroundColor: colorScheme === "dark" ? "#25262b" : "#ffffff",
        }}
      ></div>
    </div>
  );
}
