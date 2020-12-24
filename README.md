# Stock Visualizer App

## Stack
- Vue w/ TypeScript
- Vue Router
- Vuex
- Vue i18n
- Bootstrap
- Chart.js
- Axios
- Webpack

## Setting up locally

### Setup .env

Get your API Key at https://www.alphavantage.co/support/#api-key

```
VUE_APP_API_URL=https://www.alphavantage.co/query
VUE_APP_API_KEY=APIKeyHere
VUE_APP_TITLE=AppTitleHere
VUE_APP_I18N_LOCALE=en
VUE_APP_I18N_FALLBACK_LOCALE=en
```

### Install dependencies and build
```
yarn
yarn build 
```
### Serve locally with
```
yarn global add serve 
serve -s dist
```
