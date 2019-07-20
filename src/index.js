import React from "react";

export default class DeviceIdentifier extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isMobile: false,
      isDesktop: false,
      isTablet: false
      // can also check for tablets
    };
  }
  handleWindowResize() {
    const resolution = window.innerWidth;
    const isMobile = resolution >= 320 && resolution <= 480;
    const isTablet = resolution >= 768 && resolution <= 1024;
    const isDesktop = !isMobile && !isTablet;

    this.setState({
      isMobile,
      isTablet,
      isDesktop
    });
  }
  componentDidMount() {
    this.handleWindowResize();
    window.addEventListener("resize", this.handleWindowResize.bind(this));
  }
  render() {
    const { isMobile, isTablet, isDesktop } = this.state;
    const { 
        isDesktop:propsIsDesktop = false,
        isMobile:propsIsMobile = false,
        isTablet:propsIsTablet = false 
    } = this.props;
    if (
      (isDesktop && propsIsDesktop) ||
      (isMobile && propsIsMobile) ||
      (isTablet && propsIsTablet)
      // can add more checks like tablets
    ) {
      return <React.Fragment>{this.props.children}</React.Fragment>;
    }
    return null;
  }
}
