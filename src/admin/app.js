import favicon from './extensions/favicon.ico';
import MenuLogo from './extensions/logo.png';

export default {
  config: {
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title":"Jawad Group",
        "app.components.HomePage.welcomeBlock.content.again":"",
        "app.components.HomePage.button.blog": "",
        "Auth.form.button.login.strapi": "Log in via Jawad",
        "Auth.form.register.subtitle": "Credentials are only used to authenticate in Jawad Group. All saved data will be stored in your database.",
        "Auth.form.welcome.subtitle": "Log in to your Jawad Group account",
        "Auth.form.welcome.title": "Welcome to Jawad Group!",
        "HomePage.welcome.congrats.content": "You are logged in as the first administrator. To discover the powerful features provided by Jawad Group,",
        "Settings.application.strapi-version": "Jawad Group version",
        "Settings.application.strapiVersion": "Jawad Group version",
        "Settings.permissions.users.listview.header.subtitle": "All the users who have access to the Jawad Group admin panel",
        "admin.pages.MarketPlacePage.offline.subtitle": "You need to be connected to the Internet to access Jawad Group Market.",
        "admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi": "Made by Jawad Group",
        "admin.pages.MarketPlacePage.plugin.tooltip.verified": "Plugin verified by Jawad Group",
        "admin.pages.MarketPlacePage.subtitle": "Get more out of Jawad Group",
        "admin.pages.MarketPlacePage.tab-group.label": "Plugins and Providers for Jawad Group",
        "app.components.BlockLink.blog.content": "Read the latest news about Jawad Group and the ecosystem.",
        "app.components.BlockLink.tutorial.content": "Follow step-by-step instructions to use and customize Jawad Group.",
        "app.components.HomePage.welcomeBlock.content": "Congrats! You are logged as the first administrator. To discover the powerful features provided by Jawad Group, we recommend you to create your first Content type!",
        "app.components.HomePage.welcomeBlock.content.again": "We hope you are making progress on your project! Feel free to read the latest news about Jawad Group. We are giving our best to improve the product based on your feedback.",
        "app.components.MarketplaceBanner.image.alt": "a Jawad Group rocket logo",
        "app.components.UpgradePlanModal.text-power": "Unlock the full power of Jawad Group by upgrading your plan to the Enterprise Edition",
        "app.components.UpgradePlanModal.text-strapi": "of Jawad Group by upgrading your plan to the",
        "components.AutoReloadBlocker.description": "Run Jawad Group with one of the following commands:",
        "global.plugins.sentry.description": "Send Jawad Group error events to Sentry.",
        "notification.version.update.message": "A new version of Jawad Group is available!",
        "app.components.HomePage.button.blog":"-"
      }
    },
    head: {
      favicon: favicon,
    },
    auth: {
      logo: MenuLogo,
    },
    menu: {
      logo: MenuLogo,
    },
    theme: {
      colors: {
        primary100: '#f6ecfc',
        primary200: '#e0c1f4',
        primary500: '#ac73e6',
        primary600: '#9736e8',
        primary700: '#8312d1',
        danger700: '#b72b1a'
      },
    },
    tutorials: false,
  }
}