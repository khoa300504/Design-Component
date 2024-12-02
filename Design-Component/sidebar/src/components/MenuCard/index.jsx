/* eslint-disable react/prop-types */
function MenuCard({ activeMenuCard, setActiveMenuCard, label, icon, subIcon, isExpand, setIsExpand, children }) {
  return (
    <li
      className={`${activeMenuCard === label ? 'active' : ''} menu-card mb-[5px] transition-all duration-300`}
      onClick={() => {
        if (icon) {
        setActiveMenuCard(label)
        setIsExpand(label)
        if (isExpand && isExpand === label)
          setIsExpand(false)
        }
        else {
          setIsExpand(false)
        }
        }}>
      <a href="#" className="menu-item">
        {icon}
        <span className="text flex-1">{label}</span>
        {subIcon ? subIcon : ''}
      </a>
      {children}
    </li>
  )
}

export default MenuCard