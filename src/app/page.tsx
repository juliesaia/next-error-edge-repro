"use client";

export default function Home() {
  const handleClick = async () => {
    const response = await fetch("/api/test", {
      method: "POST",
    });
    if (!response.ok) {
      console.error("API call failed");
    }
  };

  return (
    <main className="p-4">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Trigger Error
      </button>
    </main>
  );
}
