import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'
import RightPanel from '../components/RightPanel'

export default function Home() {
  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar />
      <MainContent />
      <RightPanel />
    </div>
  )
}
