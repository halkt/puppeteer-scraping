export const formatDate = (date: Date) => {
  const year = date.getFullYear()
  const month = ('00' + (date.getMonth() + 1)).slice(-2)
  const day = ('00' + date.getDate()).slice(-2)
  const hour = ('00' + date.getHours()).slice(-2)
  const minute = ('00' + date.getMinutes()).slice(-2)
  const second = ('00' + date.getSeconds()).slice(-2)
  return year + month + day + hour + minute + second
}
