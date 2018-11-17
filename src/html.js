import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    const { headComponents , htmlAttributes, bodyAttributes, preBodyComponents, body, postBodyComponents} = this.props;
    return (
      <html {...htmlAttributes}>  {/* eslint-disable-line */}
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Add custom css or scripts here */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"
          />
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"
          />
          {/* Add custom css or scripts here */}

          {headComponents}
        </head>
        <body {...bodyAttributes}>
          {preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,    // eslint-disable-line
  headComponents: PropTypes.array,     // eslint-disable-line
  bodyAttributes: PropTypes.object,    // eslint-disable-line
  preBodyComponents: PropTypes.array,  // eslint-disable-line
  body: PropTypes.string,                // eslint-disable-line
  postBodyComponents: PropTypes.array, // eslint-disable-line
};
