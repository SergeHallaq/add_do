import { useUser } from "~/utils";


export default function ProfileIndexPage() {
  const user = useUser()
  return (
    <div><h1>{user.email}</h1>
      <p></p>
    </div>
  );
}
