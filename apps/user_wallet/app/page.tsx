import { Button } from "@repo/ui/button"
import {PrismaClient} from "@prisma/client"
export default function Home() {
  return (
    <div>
    <h1 className="text-3xl bg-black  font-bold underline">
      Hello world!
    </h1>
  <Button  className="bg-black text-2xl text-white">
    <h1>hi</h1>
  </Button>
    </div>
  )
}
