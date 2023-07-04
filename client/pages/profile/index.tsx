import BasicTabs from "@/components/Tabs"
import MainLayout from "@/layouts/MainLayout"
import * as React from "react"

const profileItemsTab = ["Мои заказы", "Настройки пользователя",]

const Profile = () => {
  return (
    <>
      <MainLayout>
        <div className="h-full">
        <BasicTabs  items={profileItemsTab}/>
        </div>
      </MainLayout>
    </>
  )
}

export default Profile
