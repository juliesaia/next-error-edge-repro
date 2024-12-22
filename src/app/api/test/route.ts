// export const runtime = "edge";

export async function POST() {
  const cause = new Error("cause");
  cause.body = "cause body";

  const error = new Error("test", { cause });
  console.error(error);

  return new Response("Error logged", { status: 200 });
}
