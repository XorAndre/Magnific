# This project was initialized with the following commands in an empty folder

create-react-app weir-dls --typescript

cd weir-dls

yarn add react styled-components

# Note eslint version 6.5 is buggy see https://github.com/eslint/eslint/issues/12227
yarn add --dev eslint@6.3 prettier \
  eslint-config-react-app babel-eslint eslint-plugin-import eslint-plugin-flowtype \
  eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks \
  pretty-quick eslint-config-prettier eslint-plugin-prettier

# Tool for ReactJS SVG generation
yarn add --dev @svgr/cli

# Add storybook related items
npx -p @storybook/cli sb init --type react
yarn add --dev "@types/styled-components" @typescript-eslint/parser @typescript-eslint/eslint-plugin
yarn add --dev typescript awesome-typescript-loader @types/storybook__react @storybook/addon-info react-docgen-typescript-loader
yarn add --dev jest "@types/jest" ts-jest husky
yarn add --dev @storybook/addon-knobs storybook-addon-jsx

# setup storybook to resolve path beginning with src
cat << EOF > .storybook/webpack.config.js
const path = require("path");

const SRC_PATH = path.join(__dirname, '../src');
const STORIES_PATH = path.join(__dirname, '../stories');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH, STORIES_PATH],
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
        options: { configFileName: './tsconfig.json'  }
      },
      // Optional
      {
        loader: require.resolve("react-docgen-typescript-loader")
      }
    ]
  });
  config.resolve.alias = {
    "src": path.resolve(__dirname, "../src"),
    "assets": path.resolve(__dirname, "../assets")
  };
  config.resolve.extensions.push(".js", ".jsx", ".ts", ".tsx", ".css", ".png", ".jpg", ".gif", ".jpeg");
  return config;
};
EOF
