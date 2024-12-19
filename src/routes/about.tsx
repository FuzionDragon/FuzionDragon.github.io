import { A } from "@solidjs/router";

export default function About() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-semibold uppercase my-16">About Me</h1>
      <p class="font-sans m-5 text-sky-200 text-l text-wl">Greetings, my name is David Lun and I am a computer science student at the University of York</p>
      <p class="my-4">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        {" - "}
        <A href="/projects" class="text-sky-600 hover:underline">
          Projects
        </A>
        {" - "}
        <span>About Me</span>
        {" - "}
        <A href="/contacts" class="text-sky-600 hover:underline">
          Contacts
        </A>
      </p>
    </main>
  );
}
