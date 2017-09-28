import React from 'react'
import ReactSidebar from 'react-sidebar'
import { Link } from 'react-router-dom'
import './App.css'

export default class Sidebar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      sidebarOpen: false
    }
  }

  onSetSidebarOpen (open) {
    this.setState({ sidebarOpen: open })
  }

  render () {
    let pageLinks = []
    this.props.pageTitles.forEach((title) => {
      let linkTo = '/' + title
      if (title === 'Home') {
        linkTo = '/'
      }
      pageLinks.push(
        <div style={{ padding: 5 }} key={title}>
          <Link to={linkTo} onClick={this.onSetSidebarOpen.bind(this, false)} >{title}</Link>
        </div>
      )
    })

    const sidebarContent = (
      <div style={{ width: 256, height: '100%', overflow: 'hidden' }}>
        <div style={{ background: '#222', padding: 15, fontSize: 16, color: 'white' }}>
          Menu
        </div>
        <div style={{ backgroundColor: 'white', height: '100%', padding: 15 }}>
          {pageLinks}
        </div>
      </div>
    )

    return (
      <ReactSidebar
        sidebar={sidebarContent}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen.bind(this)}
      >
        <a onClick={this.onSetSidebarOpen.bind(this, true)} style={{ color: 'white', padding: 15 }} >open sidebar</a>
      </ReactSidebar>
    )
  }
}

Sidebar.defaultProps = {
  pageTitles: []
}
