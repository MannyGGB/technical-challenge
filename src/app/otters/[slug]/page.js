import Link from "next/link";
import { otterData } from "@/lib/data";

// export default function SlugPage({ params }) {
//   const otter = fetch(`https://localhost:3000/otters/${params.id}`);
//   const otter = fetch(`@/lib/data/otterData/${params.id}`);
//   const otter = `@/lib/data/otterData/${params.id}`;

//   console.log(otter);
//   return (
//     <div>
//       <h1>{otter.name}</h1>
//       <p>Bio: {otter.description}</p>
//       <p>Age: {otter.age}</p>
//       <h3>Agency: {otter.agency}</h3>
//       <Link href={`/otters`}>Go to otters page</Link>
//     </div>
//   );
// }
export default function SlugPage({ params }) {
  return (
    <div className="flex flex-col items-center m-4">
      <h1>{params.slug}</h1>
      <Link href={`/otters`} className="text-blue-800">
        Go to otters page
      </Link>
    </div>
  );
}
