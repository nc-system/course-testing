# Installation and Configuration Test

  # Install Jest with playwright

    npm install -D jest jest-playwright-preset playwright

  # Create jest.config.js and add this code

    module.exports = {
      preset: 'jest-playwright-preset',
    }

  # Add this script in your package.json

    "test": "jest"

  # Install playwright

    npx playwright install