import { create } from 'jss';
import vendorPrefixer from 'jss-vendor-prefixer';
import camelCase from 'jss-camel-case';
import nested from 'jss-nested';
// import jssIsolate from 'jss-isolate'

// import { create as createInjectSheet } from 'react-jss';

const jss = create();

jss.use(vendorPrefixer());
// jss.use(jssIsolate())
jss.use(camelCase());
jss.use(nested());

// const injectSheet = createInjectSheet(jss);
// const useSheet = (component, styles) => injectSheet(styles)(component);
//
// export { jss, useSheet };

export { jss };
