const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    "baseUrl": 'https://user.asians.group/auth/realms/asians/protocol/openid-connect/auth?client_id=public&redirect_uri=https%3A%2F%2Fconsole.uat.asians.group%2F%23%2Fdomain%2Flist&state=3f7ac2d5-068e-48b5-8611-d6981245c351&response_mode=fragment&response_type=code&scope=openid&nonce=6c84fa90-4b2f-46a9-8998-c8c224a2a8a3',
  },
})
