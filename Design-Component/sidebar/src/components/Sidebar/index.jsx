/* eslint-disable react/no-children-prop */
import { useState } from "react"
import MenuCard from "../MenuCard"

function Sidebar() {
  //Can use useParams to get correct current activeCard
  const [activeMenuCard, setActiveMenuCard] = useState('Dashboard')
  const [isExpand, setIsExpand] = useState(true)
  const [isMenuExpand, setIsMenuExpand] = useState(false)
  const MENU_TITLE = {
    DASHBOARD: 'Dashboard',
    AUDIENCE: 'Audience',
    POSTS: 'Posts',
    SCHEDULE: 'Schedule',
    EARNING: 'Earning',
    LOGOUT: 'Logout'
  }

  return (
    <div className={`sidebar ${isMenuExpand ? '' : 'active'}`}>
      <div className='menu-btn' onClick={() => setIsMenuExpand(!isMenuExpand)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className="size-6 hover:text-black transition-all duration-200 text-slate-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>
      </div>
      {/* Head */}
      <div className="head flex gap-5 pb-5 border-b border-solid border-gray-200">
        <div className="user-img w-11 h-11 rounded-[50%] overflow-hidden">
          <img
            className="w-full object-cover"
            src="https://res.cloudinary.com/dngppuejb/image/upload/v1732030051/card-covers/p8uxxvkkjmaq0oineyf0.png"
            alt="" />
        </div>
        <div className="user-details">
          <p className="title">Web Developer</p>
          <p className="name text-sm font-medium">Nguyen Tuan Khoa</p>
        </div>
      </div>
      {/* Nav */}
      <div className="nav flex-1">
        <p className="title">Main</p>
        <ul className="menu">
          <MenuCard
            activeMenuCard={activeMenuCard}
            setActiveMenuCard={setActiveMenuCard}
            label={MENU_TITLE.DASHBOARD}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>}
            setIsExpand={setIsExpand}
          />
          <MenuCard
            activeMenuCard={activeMenuCard}
            setActiveMenuCard={setActiveMenuCard}
            label={MENU_TITLE.AUDIENCE}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>}
            subIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className={`size-4 ${isMenuExpand ? '' : 'hidden w-0'} ${(isExpand === MENU_TITLE.AUDIENCE && activeMenuCard === MENU_TITLE.AUDIENCE) ? 'arrow' : ''}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>}
            isExpand={isExpand}
            setIsExpand={setIsExpand}
            children={<ul className={`${(isExpand === MENU_TITLE.AUDIENCE && activeMenuCard === MENU_TITLE.AUDIENCE) ? '' : 'hidden-custom'} sub-menu`}>
              <MenuCard label={'Subscribers'} setIsExpand={setIsExpand}/>
              <MenuCard label={'Users'} setIsExpand={setIsExpand}/>
            </ul>}
          />
          <MenuCard
            activeMenuCard={activeMenuCard}
            setActiveMenuCard={setActiveMenuCard}
            label={MENU_TITLE.POSTS}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>}
            setIsExpand={setIsExpand}
          />
          <MenuCard
            activeMenuCard={activeMenuCard}
            setActiveMenuCard={setActiveMenuCard}
            label={MENU_TITLE.SCHEDULE}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>}
            setIsExpand={setIsExpand}
          />
          <MenuCard
            activeMenuCard={activeMenuCard}
            setActiveMenuCard={setActiveMenuCard}
            label={MENU_TITLE.EARNING}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
            </svg>}
            subIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className={`size-4 ${isMenuExpand ? '' : 'hidden w-0'} ${(isExpand === MENU_TITLE.EARNING && activeMenuCard === MENU_TITLE.EARNING) ? 'arrow' : ''}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>}
            isExpand={isExpand}
            setIsExpand={setIsExpand}
            children={<ul className={`${(isExpand === MENU_TITLE.EARNING && activeMenuCard === MENU_TITLE.EARNING) ? '' : 'hidden-custom'} sub-menu`}>
              <MenuCard label={'Tiktok'} setIsExpand={setIsExpand}/>
              <MenuCard label={'Youtube'} setIsExpand={setIsExpand}/>
            </ul>}
          />
        </ul>
      </div>
      {/* Logout */}
      <div className="">
        <div className="title">Account</div>
        <ul className="menu">
          <MenuCard
            setActiveMenuCard={setActiveMenuCard}
            label={MENU_TITLE.LOGOUT}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
              </svg>}
            setIsExpand={setIsExpand}
          />
        </ul>
      </div>
    </div>
  )
}

export default Sidebar