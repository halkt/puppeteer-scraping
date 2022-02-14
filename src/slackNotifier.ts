export const slackNotifier = async (text: String) => {
  const axiosBase = require('axios')
  const options = {
    method: 'post',
    url: process.env.SLACK_INCOMMING_WEBHOOK_URL,
    baseURL: 'https://hooks.slack.com/',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    data: `payload={
      "text": "${text}",
    }`,
  }
  try {
    const response = await axiosBase.request(options)
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}
