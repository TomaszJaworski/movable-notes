import { Page } from '../../layout/Page'
import { InteractiveBoxWrapper } from '../../features/InteractiveBox'

export const DashboardView = () => {
  return (
    <Page>
      <div className="h-screen flex items-center justify-center p-4">
        <InteractiveBoxWrapper>
          <div className="p-2 size-40 bg-amber-500"></div>
        </InteractiveBoxWrapper>
      </div>
    </Page>
  )
}
