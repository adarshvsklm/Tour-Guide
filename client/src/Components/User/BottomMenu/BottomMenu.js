import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material'
import React, { useEffect } from 'react'
import MenuContainer from './MenuContainer'
import '../BottomMenu/BottomMenu.css'
import { Grid } from '@mui/material'

function BottomMenu() {

  useEffect(() => {
    const menuLi = document.querySelectorAll('#menu li')
    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove('active'))
      this.classList.add('active')
    }
    menuLi.forEach(n => n.addEventListener('click', setMenuActive))
  }, [])

  return (
    <Grid sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
      <div className="bottomMenu">

        <ul id='menu'  >
          <MenuContainer link={'#'} icon={<HomeRounded />} />
          <MenuContainer link={'#'} icon={<Chat />} />
          <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded />} />
          <MenuContainer link={'#'} icon={<Favorite />} />
          <MenuContainer link={'#'} icon={<SummarizeRounded />} />
          <MenuContainer link={'#'} icon={<Settings />} />
          <div className="indicator"></div>
        </ul>
      </div>
    </Grid>

  )
}

export default BottomMenu