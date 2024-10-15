import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'
import ContentCreatorIDE from '@/components/ContentCreatorIDE'

export default async function Dashboard() {
  const session = await getServerSession()

  if (!session) {
    redirect('/auth/signin')
  }

  return <ContentCreatorIDE />
}