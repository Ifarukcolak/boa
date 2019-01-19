import React, { Component } from 'react';

import { AppProvider, ComponentBase, setLocalization, getTheme } from '@boa/base';
import { Localization } from '@boa/utils';
import { context } from '@boa/test/utils';

export default class Container extends ComponentBase {
  state = {
    context,
  };

  constructor(props) {
    super(props);
    this.onThemeChange = this.onThemeChange.bind(this);
    this.onLanguageChange = this.onLanguageChange.bind(this);

    setLocalization({
      url: 'http://boaonedev',
      path: '/messaging/',
      versionPath: 'MessagingVersions.json',
      fileNameFormat: 'BOA.Messaging.{0}.json',
      timeout: 3000,
      languageId: 1,
    });
  }

  onThemeChange(themeName) {
    const theme = getTheme({ themeName: themeName });
    if (theme) {
      this.setState({ context: Object.assign({}, this.state.context, { theme }) });
    }
  }

  onLanguageChange(value) {
    const localization = { isRightToLeft: value === 5 ? true : false };
    Localization.changeLocalizationLanguage(value);
    this.setState({
      context: Object.assign({}, this.state.context, {
        language: value,
        localization: localization,
        messagingContext: {},
      }),
    });
  }

  render() {
    const { story, context } = this.props;
    context.props = { context: this.state.context };
    context.props.onThemeChange = this.onThemeChange;
    context.props.onLanguageChange = this.onLanguageChange;

    return <AppProvider theme={this.state.context.theme}>{story(context)}</AppProvider>;
  }
}
