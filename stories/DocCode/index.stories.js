
  /* eslint-disable max-len */
  import React from 'react';
  import { storiesOf } from '@storybook/react';
  import { DocCode } from '../../src/components/DocCode';
  import Header from '../base/header';
  import Props from '../base/props-table';
  import Preview from '../base/preview';
  import doc from './doc.json';

  const stories = storiesOf('DocCode', module);

  stories.add('DocCode', ({ props }) => {
    return (
      <div style={{ padding: 20, background: 'white' }}>
        <Header {...props} component={DocCode} doc={doc} />
        <Preview {...props} component={DocCode} doc={doc} />
        <Props {...props} component={DocCode} doc={doc} />
      </div>);
  });
