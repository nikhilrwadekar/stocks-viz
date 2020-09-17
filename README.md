# Stock Visualizer App

View the [Live Demo](http://mcap.nikhilwadekar.com.s3-website.ca-central-1.amazonaws.com/)

## Stack
- Vue
- Vue Router
- Vuex
- Bootstrap
- Chart.js
- Axios

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