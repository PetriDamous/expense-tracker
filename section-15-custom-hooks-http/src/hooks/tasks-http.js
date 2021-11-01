import { useState, useCallback } from "react";

// requestType GET || POST

const useTaskHttp = (requestType, func) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  requestType = requestType.toUpperCase();

  const httpRequest = useCallback(
    async (taskText) => {
      setIsLoading(true);
      setError(null);

      try {
        if (requestType === "GET") {
          const response = await fetch(process.env.REACT_APP_HTTP);

          if (!response.ok) {
            throw new Error("Request failed!");
          }

          const data = await response.json();

          const loadedTasks = [];

          for (const taskKey in data) {
            loadedTasks.push({ id: taskKey, text: data[taskKey].text });
          }

          func(loadedTasks);
        }

        if (requestType === "POST") {
          const response = await fetch(process.env.REACT_APP_HTTP, {
            method: "POST",
            body: JSON.stringify({ text: taskText }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error("Request failed!");
          }

          const data = await response.json();

          const generatedId = data.name; // firebase-specific => "name" contains generated id
          const createdTask = { id: generatedId, text: taskText };

          func.onAddTask(createdTask);
        }
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [requestType, func]
  );

  return [isLoading, error, httpRequest];
};

export default useTaskHttp;
