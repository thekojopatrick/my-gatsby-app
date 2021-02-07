import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

//Importing Assets
import logo from "../images/DesignCode-Logo-White.svg"



//Writing stateful component
class Header extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      hasScrolled:false
    }
  }
  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll)
  }

  handleScroll =(event) =>{
    const scrollTop = window.pageYOffset

    if(scrollTop > 50){
      this.setState({hasScrolled:true})
    }else{
      this.setState({ hasScrolled: false })
    }
  }

  render(){
    return (
      <header className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={logo} width="30" /></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/buy"><button>Buy</button></Link>
        </div>
      </header>
    )
  }
}
// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: `Courses`,
//   siteTitle: `Downloads`,
// }

export default Header
