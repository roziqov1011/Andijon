import React from 'react'
import { Outlet } from 'react-router-dom'
import AssideForm from '../../Components/AssideForm/AssideForm'
import AssideProgres from '../../Components/AssideProgress/AssideProgress'
import AssideVoting from '../../Components/AssideVoting/AssideVoting'
import Container from '../../Components/Container/Container'
import Line from '../../Components/Line/Line'
import './ShaharTuman.scss'

function ShaharTuman() {
  return (
    <Container>
      <Line />
      <div className='ShaharTuman'>
        <Outlet />
        <div className='ShaharTuman__bar'>
          <button className="btn btn-primary ShaharTuman__bar_open" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-chevron-double-left"></i></button>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas </h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <AssideProgres />
              <AssideVoting />
              <AssideForm />
            </div>
          </div>
          <div className='ShaharTuman__bar_inner'>
          <AssideProgres />
          <AssideVoting />
          <AssideForm />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ShaharTuman