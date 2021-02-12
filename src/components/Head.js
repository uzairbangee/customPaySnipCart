import React from 'react';
import { Helmet } from 'react-helmet';

function Head() {


  return (
    <Helmet>
      {
        typeof window !== `undefined` &&
            <script src="https://test.oppwa.com/v1/paymentWidgets.js?checkoutId={checkoutId}"></script>
      }

      {/* <script>{`
      !function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(
      arguments)};d=s.createElement(q);q=s.getElementsByTagName(q)[0];
      d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.
      insertBefore(d,q)}(window,document,'script','_gs');
    
      _gs('GSN-976982-Z');
      _gs('set', 'anonymizeIP', true);
      _gs('set', 'chat', { button: false });
      `}</script> */}

      </Helmet>
  );
}

Head.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

export default Head;
