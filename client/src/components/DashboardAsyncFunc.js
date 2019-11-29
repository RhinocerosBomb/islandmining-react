import React, { Component} from 'react';
import Nprogress from 'nprogress';
import ReactPlaceholder from 'react-placeholder';
import 'nprogress/nprogress.css';
import 'react-placeholder/lib/reactPlaceholder.css';

// Important: Programmically remove and reinsert dashboard styles
// as it affects other pages
// Reason for this is that each page has different vendors
// and the styles don't leave on page changes
export default function asyncComponent(importComponent, dashboardRef) {
  class AsyncFunc extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
      if (dashboardRef.current) {
        const head = document.head;
        head.appendChild(dashboardRef.current);
      }
      Nprogress.start();

    }

    componentWillUnmount() {
      this.mounted = false;
      const head = document.head;

      if (!dashboardRef.current) {
        for (let tag of head.children) {
          if (tag.tagName === 'STYLE') {
            if (tag.innerText.includes('#dashboard')) {
              dashboardRef.current = tag;
            }
          }
        }
      }

      head.removeChild(dashboardRef.current);
    }
    async componentDidMount() {
      this.mounted = true;
      const { default: Component } = await importComponent();
      Nprogress.done();
      this.cpt = Component;
      if (this.mounted) {
        this.setState({
          component: <Component {...this.props} />
        });
      }
    }

    render() {
      const Component = this.state.component || <div />;
      return (
        <ReactPlaceholder type="text" rows={10} ready={Component !== null}>
          {Component}
        </ReactPlaceholder>
      );
    }
  }
  return AsyncFunc;
}
