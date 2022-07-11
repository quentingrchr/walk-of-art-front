import React from "react"
import { useRouter } from "next/router"

const Exhibition: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  return <div>Moderator home</div>
}

export default Exhibition
